import { kebabify } from "@jrc03c/js-text-tools"
import { Liquid } from "liquidjs"
import { watch } from "@jrc03c/watch"
import * as fsx from "@jrc03c/fs-extras"
import fs from "node:fs"
import MarkdownIt from "markdown-it"
import path from "node:path"
import process from "node:process"

function getTableOfContents(x) {
  const md = new MarkdownIt({ html: true })
  const html = md.render(x)
  const matches = html.match(/<h\d.*?>.*?<\/h\d>/gs)
  const out = []
  const space = " "
  const idPattern = /id=["'](.*?)["']/gs

  for (const match of matches) {
    const level = parseInt(match.match(/h\d/gs)[0].replace("h", "")) - 1
    const title = match.replaceAll(/<.*?>/gs, "").trim()
    const ids = match.match(idPattern) || []

    const href =
      ids.length > 0 ? ids[0].replace(idPattern, "$1") : kebabify(title)

    out.push(space.repeat(2 * level) + `- [${title}](#${href})`)
  }

  return md.render(out.join("\n")).trim()
}

async function rebuild() {
  try {
    const srcDir = path.join(import.meta.dirname, "src")

    const lq = new Liquid({
      root: [srcDir],
      strictVariables: true,
    })

    const payload = {
      tableOfContents: "{{ tableOfContents }}",
    }

    let out = await lq.renderFile(path.join(srcDir, "index.md"), payload)
    payload.tableOfContents = getTableOfContents(out)
    out = await lq.parseAndRender(out, payload)

    fs.writeFileSync(path.join(import.meta.dirname, "readme.md"), out, "utf8")

    console.log("Done! 🎉")
  } catch (e) {
    console.error(e)
  }
}

if (process.argv.includes("--watch") || process.argv.includes("-w")) {
  watch({
    target: path.join(import.meta.dirname, "src"),
    created: rebuild,
    modified: rebuild,
    deleted: rebuild,
  })
}

rebuild()
