# Intro

Welcome! This is a little tutorial and cheat sheet for using [Git](https://git-scm.com/).

# FAQ

## What is Git?

From the Git homepage:

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

_Version control systems_ (VCSs) are tools that track how files change over time, making it easy to roll back to previous versions of files. VCSs also usually offer the ability to split histories into parallel timelines (called _branches_ in Git) and to merge timelines together into single, unified timelines. This ability to split and merge timelines is also what makes it possible for multiple parties to collaborate on projects.

A Git project, usually called a _repository_, is just a folder in which Git has created a `.git` subdirectory for storing the history of the project files. Git repositories can be managed either at the command line (using the `git` command) or in [GUI applications](https://git-scm.com/downloads/guis). The history Git creates is made of snapshots in time called _commits_, and commits usually only include the files that changed since the last commit (i.e., not the entire repository at each moment in time).

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

# Cheat sheet

```bash
# Get help
# SYNTAX: git --help
# SYNTAX: git [command] --help
```

```bash
# Set the default branch name for all new repositories to be "main"
git config --global init.defaultBranch main
```

```bash
# Set your username and email address to be used by default in all repositories
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

```bash
# Create a new repository
git init
```

```bash
# Clone an existing repository from a remote location
# SYNTAX: git clone [location]

# Using SSH:
git clone git@github.com:username/repo-name

# Using HTTPS:
git clone https://github.com/username/repo-name
```

```bash
# Add specific files and folders to be committed
# SYNTAX: git add [path]
git add path/to/file1
git add path/to/file2
git add path/to/some/directory

# Add all changed files and folders to be committed
# (Where "." means "the current working directory" and the "--all" flag means
# "including deleted files")
git add . --all
```

```bash
# Commit the added files
# SYNTAX: git commit
# SYNTAX: git commit -m [message]
git commit -m "A helpful message."
```

```bash
# Add a remote location called "origin"
# SYNTAX: git remote add [name] [location]

# Using SSH:
git remote add origin git@github.com:username/repo-name

# Using HTTPS:
git remote add origin https://github.com/username/repo-name
```

```bash
# Push to "origin"
# SYNTAX: git push [location_name] [branch]
git push origin main
```

```bash
# Pull from "origin"
# SYNTAX: git pull [location_name] [branch]
git pull origin main
```

```bash
# Create a new branch called "my-cool-branch"
# SYNTAX: git checkout -b [name]
git checkout -b my-cool-branch
```

```bash
# Push branch "my-cool-branch" to "origin"
# SYNTAX: git push [location_name] [branch_name]
git push origin my-cool-branch
```

```bash
# Pull branch "my-cool-branch" from "origin"
# SYNTAX: git pull [location_name] [branch_name]
git pull origin my-cool-branch
```

```bash
# Switch to branch "main"
# SYNTAX: git checkout [branch_name]
git checkout main
```

```bash
# Merge the history of branch "my-cool-branch" into branch "main"
# SYNTAX: git merge [branch_name]
git merge my-cool-branch
```

```bash
# List the commits in the history
git log
```

```bash
# Roll back in time to a particular commit (using an ID number from `git log`)
# SYNTAX: git checkout [commit_id]
git checkout e80d40517a8f5dbec084da080026c9af538d5b41
```

```bash
# Roll forward in time to the most recent commit
# SYNTAX: git checkout [branch_name]
# (Assuming you're on branch "main")
git checkout main
```

```bash
# Stash any uncommitted changes
# (The "-u" means "including files that aren't being tracked by Git")
git stash -u
```

```bash
# List sets of stashed changes
git stash list
```

```bash
# Unstash the most recent set of stashed changes
git stash pop
```

```bash
# Or delete all sets of stashed changes
git stash clear
```

```bash
# Rename a branch
# SYNTAX: git branch -m [old_branch_name] [new_branch_name]
git branch -m my-cool-branch something-else
```

```bash
# Drop all commits after a specific commit (DANGEROUS!)
# SYNTAX: git reset --hard [commit_id]
git reset --hard e80d40517a8f5dbec084da080026c9af538d5b41
```

```bash
# Forcefully overwrite the entire repository in a remote location (DANGEROUS!)
git push --mirror origin
```

# Tutorial

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

## Append to the repository history

Appending snapshots to a repository's history is a two-step process:

1. You _add_ (or _stage_) files to be included in the snapshot.
2. You _commit_ the snapshot to the history.

So, for example:

```bash
# Add the files to be included in the snapshot
git add path/to/my-changed-file
git add path/to/another-changed-file

# Commit the snapshot to the history and include a message about what changes
# this snapshot represents
git commit -m "I changed x, y, and z."
```

Note that commits _must_ include a message, though these messages can be long or short, verbose or terse, clear or opaque, etc. The important thing to consider, though, is that you may someday find yourself looking back through the history of your files, and that's not a great time to discover that your past self really failed to make clear what each commit's purpose was.

If you run `git commit` without the `-m "[MESSAGE]"` part, Git will automatically open a text editor (usually a command line text editor, like Nano or Vim) so that you can write a commit message. It's useful to do this if you intend to write a long commit message explaining in great detail what the commit does. But most of the time, I prefer to use the `-m` flag and write relatively short messages.

## Checking the repository status

At any time, you can see the status of the repository:

```bash
git status
```

This usually shows:

- what branch you're working on
- what files have been changed
- what files are staged (i.e., added) to be included in the next commit (i.e., snapshot)

## Pushing a repository history to a central location

