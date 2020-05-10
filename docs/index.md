---
template: "main.html"
title: Introduction
---

This tutorial aims to provide an in-depth overview of the version control software Git.
It contains a brief introduction to version control systems, a thorough walk-through of the installation and setup, as well as Git command examples and troubleshooting tips.
By completing this tutorial, you should have a strong understanding of the fundamentals of Git and how to collaborate with team members on software development projects.

!!! Note ""
	This tutorial follows installation and examples on the Windows platform.
	
	When using Git on Windows, the actual software is called *Git for Windows*, [forked from Git](https://github.com/git-for-windows/git){: .ext-link } itself.

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
