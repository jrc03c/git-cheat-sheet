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
