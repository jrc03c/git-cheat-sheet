# Tutorial

To be honest, I've never used any of the GUI applications; so all of the instructions that follow will use the command line tool. However, the concepts described here should be available in GUI applications as well.

## Install Git

Follow the instructions on [the Git downloads page](https://git-scm.com/downloads) to install either the command line tool or a GUI application.

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

1. You _add_ files to be included in the snapshot.
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

## Check the repository status

At any time, you can see the status of the repository:

```bash
git status
```

This usually shows:

- what branch you're working on
- what files have been changed
- what files are staged (i.e., added) to be included in the next commit (i.e., snapshot)

## Push a repository history to a central location

...

## Pull a repository history from a central location

...

## Create a branch

...

## Merge a branch

...

## Handle merge conflicts

...
