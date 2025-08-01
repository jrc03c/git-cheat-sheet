# Intro

Welcome! This is a little tutorial and cheat sheet for using [Git](https://git-scm.com/).

# FAQ

## What is Git?

From the Git homepage:

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

_Version control systems_ (VCSs) are tools that track how files change over time, making it easy to roll back to previous versions of files. VCSs also usually offer the ability to split histories into parallel timelines (called _branches_ in Git) and to merge timelines together into single, unified timelines. This ability to split and merge timelines is also what makes it possible for multiple parties to collaborate on projects.

A Git project, usually called a _repository_, is just a folder in which Git has created a `.git` subdirectory for storing the history of the project files. Git repositories can be managed either at the command line (using the `git` command) or in [GUI applications](https://git-scm.com/downloads/guis).

## What is GitHub?

[GitHub](https://github.com) — and similar sites like [GitLab](https://gitlab.com), [BitBucket](https://bitbucket.org/), [Sourcehut](https://sourcehut.org/), [Codeberg](https://codeberg.org/), and [Gitea](https://gitea.com/), to name just a few — are services that host Git repositories.

Git's functionality is in no way tied to these services. You can use Git entirely offline on your computer, or you can put repositories in private locations that only you and other collaborators can access, or you can zip repositories up and email them back and forth between collaborators. The appeal of services like GitHub is that they usually offer a fairly generous free tier<sup><a href="#note-1">1</a></sup> that includes features like:

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
    (1) "If you're not paying, you're the product." For that reason, I've moved most of my personal repositories to <a href="https://sourcehut.org/">Sourcehut</a> and only use GitHub for work.
  </div>
</blockquote>

## Who should use Git?

This is perhaps overly optimistic, but I think Git is for everyone! If you've ever made backups of files by emailing copies yourself or uploading copies to Dropbox or Google Drive, then you might really like Git. Git can be a little challenging to learn at first; but once you get the hang of it, it eliminates almost all of the hassle and complexity of keeping track of various versions of files. And there are plenty of GUI applications for working with Git repositories if you're intimidated by the command line.

## What should I use Git for?

Git is used extensively by software developers because it excels at tracking changes to text files. However, Git can be used to track changes to virtually any kind of file — though it's important to be aware that there are some caveats that come with tracking changes to very large non-text files (like videos). (See [Git Large File Storage](https://git-lfs.com/) for more info.) In short, if something is representable as a file on your computer, Git can probably track its history. Personally, I turn almost every project into a Git repository because it's just so damn useful!

# Installation

Follow the instructions on [the Git downloads page](https://git-scm.com/downloads) to install either the command line tool or a GUI application.

# Usage

To be honest, I've never used any of the GUI applications; so all of the instructions that follow will use the command line tool. However, the concepts described here should be available in GUI applications as well.

## Create a new repository

Repositories are created using the `git init` command.

Repositories can be created in empty directories or in directories that already contain files. The only thing that happens when you run the `git init` command is that Git creates a subdirectory called `.git` in the current working directory and fills it with whatever default content it needs to be able to start tracking file changes.

### Create a new repository in an empty folder

To create a new (empty) folder and turn it into a repository:

```bash
# Move into the directory where the new folder will be made
cd path/to/some/directory

# Create the new, empty folder
mkdir my-project

# Move into the new folder
cd my-project

# Turn the folder into a repository
git init
```

### Create a new repository in a folder that already contains files

Similarly, to turn an existing folder that already contains files into a repository:

```bash
# Move into the directory
cd path/to/some/directory-with-files

# Turn it into a repository
git init
```

