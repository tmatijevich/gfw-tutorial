---
template: main.html
title: Installation
subsections:
  - [overview, Overview]
  - [install-notepad, Install Notepad++]
  - [install-putty, Install PuTTY]
---

# Overview

This section provides installation details on the recommended software to start using Git for Windows.

As the **bare minimum**, you will need Git. An installer is available on Git's official website.

- [git-scm.com/downloads](https://git-scm.com/downloads)
	- The web page should automatically recognize you are using Windows, so simply click the link *Download <version> for Windows* to get the latest stable version.
- The Git for Windows installation provides:
	- Use of the `git`{: .code-snippet } command from the Windows Command Prompt
	- Git-Bash - A shell terminal on Windows
	- Git-GUI - A simple GUI for repositories
	- OpenSSH - Secure Shell Protocol utility
	- OpenSSL - Library for secure communications with HTTPS websites

*More details on the actual installation to follow.*

It is **recommended** to additionally download the follow **free** software to use with Git for Windows.

- A text editor
	- [Notepad++](https://notepad-plus-plus.org/)
	- [Atom](https://atom.io/) - Also has a Git client integration
	- [Sublime Text](https://www.sublimetext.com/)
	- [Microsoft VSCode](https://code.visualstudio.com/)
- A SSH Client
	- [PuTTY](https://putty.org/) - A user friendly SSH client for Windows
- A Git GUI client
	- [TortoiseGit](https://tortoisegit.org/download/)
	- [Sourcetree](https://www.sourcetreeapp.com/)
	- [GitHub Desktop](https://desktop.github.com/)
	- [Sublime Merge](https://www.sublimemerge.com/)
	- [GitKraken](https://www.gitkraken.com/)

# Install Notepad++

![npp logo](media/screenshots/download latest notepad++ 2020-03-10_11-16-51.png){: style="width:222px; float:right;" }

Notepad++ is a fast and lightweight text editor for Windows, useful for editing source code and configuration files. It is free to download from the official website [https://notepad-plus-plus.org/](https://notepad-plus-plus.org/). Find the latest version (32 or 64 bit) and download the installer.

Installing Notepad++ before Git will allow you to reference the existing Notepad++ installation during the Git installation.

Run the installer and accept User Account Control.

<br>

#### 0. Language {: .collapsible }

![npp 0](media/install/npp/0 language 2020-02-12_8-27-59.png){: style="width:288px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }

#### 1. Welcome {: .collapsible }

![npp 1](media/install/npp/1 welcome 2020-02-12_8-28-09.png){: style="width:497px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }

#### 2. License Agreement {: .collapsible }

![npp 2](media/install/npp/2 license 2020-02-12_8-28-12.png){: style="width:497px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }

#### 3. Install Location {: .collapsible }

![npp 3](media/install/npp/3 destination 2020-02-12_8-28-15.png){: style="width:497px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }

#### 4. Components {: .collapsible data-show="1" }

!!! Step ""
	
	![npp 4](media/install/npp/4 components scroll 2020-03-10_11-34-42.png){: style="width:497px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }
	
	- The default component selections are sufficient
	- Make sure *Context Menu Entry* is selected (default)
		- This helps for quick edits of text files

#### 5. Options {: .collapsible }

![npp 5](media/install/npp/5 desktop shortcut 2020-02-12_8-29-07.png){: style="width:497px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }

#### 6. Finish {: .collapsible }

![npp 6](media/install/npp/6 completing 2020-02-12_8-29-33.png){: style="width:497px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }

# Install PuTTY

[PuTTY](https://putty.org/) is a client program for the SSH (Secure Shell) protocol. It will be used to communicate file changes to repositories on a server. It is free, open source, and available to download for Windows and Unix systems at the [author's website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) or [ssh.com](https://www.ssh.com/ssh/putty/download).

The PuTTY installation will be referenced during the Git installation process.

Download the 32 or 64 bit installer, then run the installer with the default options.

#### 1. Welcome {: .collapsible }

![putty 1](media/install/putty/1 setup 2020-02-10_16-07-36.png){: style="width:492px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }

#### 2. Destination Folder {: .collapsible }

![putty 2](media/install/putty/2 destination 2020-02-10_16-07-42.png){: style="width:492px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }

#### 3. Feature Options {: .collapsible data-show="1" }

!!! Step ""
	
	![putty 3](media/install/putty/3 options 2020-02-10_16-08-15.png){: style="width:492px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }
	
	- Keep *Put install directory on the PATH ...* selected (default)
		- This will add `C:\Program Files\PuTTY`{: .code-snippet } to your Windows PATH allowing other programs to find it
		- Use this command to view all current directories in your PATH with CMD (Credit Groosha at [Stack Overflow](https://stackoverflow.com/a/15885269/11402416))
	
	\> echo %path:;=&echo.%
	{: .code-block style="margin-left:80px" }
	
#### 4. Complete {: .collapsible }

![putty 4](media/install/putty/4 complete 2020-02-10_16-08-23.png){: style="width:492px; display:block; margin-left:auto; margin-right:auto; border:1px solid gray;" }

