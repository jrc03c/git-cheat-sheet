# FAQ

## What is Git?

From the Git homepage:

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

_Version control systems_ (VCSs) are software tools that track how files change over time, making it easy to roll back to previous versions of files. VCSs also usually offer the ability to split histories into parallel timelines (called _branches_ in Git) and to merge timelines together into single, unified timelines. This ability to split and merge timelines is also what makes it possible for multiple parties to collaborate on projects.

A Git project, usually called a _repository_, is just a folder in which Git has created a `.git` subdirectory for storing the history of the project files. Git repositories can be managed either at the command line (using the `git` command) or in [GUI applications](https://git-scm.com/downloads/guis). The history Git creates is made of snapshots in time called _commits_, and commits usually only include the files that changed since the last commit (i.e., not the entire repository at each moment in time).

## What problem(s) does Git solve?

### 1. File version histories

Git keeps track of the changes made to files in a repository, which makes it easy to look back through old versions of files and to determine exactly what changed between two versions of a file.

Additionally, Git not only stores a single timeline of changes, but it offers the ability to store multiple parallel timelines (called _branches_) that can split, join, or simply coexist in all kinds of simple or complex ways.

Finally, because Git literally only tracks _changes_ made to files (rather than keeping a full copy of each file as it changes), Git requires a relatively small amount of storage space on disk and can move backwards and forwards through its history quickly and efficiently.

### 2. Asynchronous collaboration

Git makes it easy for multiple people to edit the files in a repository and then to sync up their updated repository histories. For example, Alice can add some commits (snapshots) to the copy of the repository that lives on her computer; Bob can add some different commits to the copy of the repository that lives on his computer; and then when they are ready to sync up their respective histories, Git figures out how to _merge_ their timelines correctly and to notify them of any [_conflicts_](#handle-merge-conflicts) that occur during the merge.

## What is GitHub?

[GitHub](https://github.com) — and similar companies and tools like [GitLab](https://gitlab.com), [BitBucket](https://bitbucket.org/), [Sourcehut](https://sourcehut.org/), [Codeberg](https://codeberg.org/), and [Gitea](https://gitea.com/), to name just a few — are services that host Git repositories.

Git's functionality is in no way tied to any of these services. You can use Git entirely offline on your computer, or you can put repositories in private locations that only you and other collaborators can access, or you can zip repositories up and email them back and forth between collaborators. The appeal of services like GitHub is that they usually offer a fairly generous free tier<sup><a href="#note-1">1</a></sup> that includes features like:

- a web-based interface
- knowledgebases
- issue tracking
- pull requests
- project boards
- collaborator / permission management
- community & social features
- continuous integration & continuous deployment
- vulnerability scanning & security alerts

<blockquote>
  <div id="note-1">
    <sup>1</sup> "If you're not paying, you're the product." For that reason, I've moved most of my personal repositories to <a href="https://sourcehut.org/">Sourcehut</a> and only use GitHub for work.
  </div>
</blockquote>

## Who should use Git?

This is perhaps overly optimistic, but I think Git is for everyone! If you've ever made backups of files by emailing copies yourself or uploading copies to Dropbox or Google Drive, then you might really like Git. Git can be a little challenging to learn at first; but once you get the hang of it, it eliminates almost all of the hassle and complexity of keeping track of various versions of files. And there are plenty of GUI applications for working with Git repositories if you're intimidated by the command line.

## What should I use Git for?

Git is used extensively by software developers because it excels at tracking changes to text files. However, Git can be used to track changes to virtually any kind of file — though it's important to be aware that there are some caveats that come with tracking changes to very large non-text files (like videos). (See [Git Large File Storage](https://git-lfs.com/) for more info.) In short, if something is representable as a file on your computer, Git can probably track its history. Personally, I turn almost every project into a Git repository because it's just so damn useful!
