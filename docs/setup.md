---
template: "main.html"
title: Setup
subsections:
  - [test-git, Test Git]
---

# Test Git

Launch Windows Command Prompt, *cmd*.

- Go to *Start Menu* or *Search* and begin typing `Command ...`{: .code-snippet } until you see the Command Prompt app.
- Use <kbd>Win</kbd> + <kbd>R</kbd> to open the run program dialog box and enter `cmd`{: .code-snippet }

Type `git`{: .code-snippet} and press <kbd>Enter</kbd>. You should see a brief description of common Git commands.

```{.code-block}
> git

usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

...
```

Type `git --version`{: .code-snippet } to output the currently installed version of git.

```{.code-block}
> git --version

git version 2.26.2.windows.1
```

Use the Windows command `where`{: .code-snippet } to find the path of the installed Git executable.

```{.code-block}
> where git

C:\Program Files\Git\cmd\git.exe
```

## Git on PATH

The Git executable command works from the Windows Command Prompt, *cmd*, because the installation directory was added to the Windows system PATH environment variable.

To check or to add the Git command directory to your system PATH, follow these steps.

1. Select *Properties* on This PC in File Explorer
2. Select *Advanced System Settings* in the System Control Panel
3. Select *Environment Variables...* in the System Properties window
4. Under System variables, select *Path*
5. Find or add the installation subdirectory `C:\Program Files\Git\cmd`{: .code-snippet }
	- The order of directories is not critical in most cases
	- The correct *git.exe* can be confirmed with the `where git`{: .code-snippet } command from the Windows Command Prompt, *cmd*.