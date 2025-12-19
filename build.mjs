import { Liquid } from "liquidjs"
import { watch } from "@jrc03c/watch"
import * as fsx from "@jrc03c/fs-extras"
import fs from "node:fs"
import path from "node:path"
import process from "node:process"

async function rebuild() {
  try {
    const srcDir = path.join(import.meta.dirname, "src")

    const lq = new Liquid({
      root: [srcDir],
      strictVariables: true,
    })

    const payload = {}
    const out = await lq.renderFile(path.join(srcDir, "index.md"), payload)
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
