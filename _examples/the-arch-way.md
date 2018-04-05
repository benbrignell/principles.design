---
title: The Arch Way
author: Arch Linux
overview: |
link: https://wiki.archlinux.org/index.php/Arch_Linux#Principles
principles:
- principle: Simplicity
  summary: |
    Arch Linux defines simplicity as without unnecessary additions or modifications. It ships software as released by the original developers (upstream) with minimal distribution-specific (downstream) changes: patches not accepted by upstream are avoided, and Arch's downstream patches consist almost entirely of backported bug fixes that are obsoleted by the project's next release.

    In a similar fashion, Arch ships the configuration files provided by upstream with changes limited to distribution-specific issues like adjusting the system file paths. It does not add automation features such as enabling a service simply because the package was installed. Packages are only split when compelling advantages exist, such as to save disk space in particularly bad cases of waste. GUI configuration utilities are not officially provided, encouraging users to perform most system configuration from the shell and a text editor.

- principle: Modernity
  summary: |
    Arch Linux strives to maintain the latest stable release versions of its software as long as systemic package breakage can be reasonably avoided. It is based on a rolling-release system, which allows a one-time installation with continuous upgrades.

    Arch incorporates many of the newer features available to GNU/Linux users, including the systemd init system, modern file systems, LVM2, software RAID, udev support and initcpio (with mkinitcpio), as well as the latest available kernels.

- principle: Pragmatism
  summary: |
    Arch is a pragmatic distribution rather than an ideological one. The principles here are only useful guidelines. Ultimately, design decisions are made on a case-by-case basis through developer consensus. Evidence-based technical analysis and debate are what matter, not politics or popular opinion.

    The large number of packages and build scripts in the various Arch Linux repositories offer free and open source software for those who prefer it, as well as proprietary software packages for those who embrace functionality over ideology.

- principle: User centrality
  summary: |
    Whereas many GNU/Linux distributions attempt to be more user-friendly, Arch Linux has always been, and shall always remain user-centric. The distribution is intended to fill the needs of those contributing to it, rather than trying to appeal to as many users as possible. It is targeted at the proficient GNU/Linux user, or anyone with a do-it-yourself attitude who is willing to read the documentation, and solve their own problems.

    All users are encouraged to participate and contribute to the distribution. Reporting and helping fix bugs is highly valued and patches improving packages or the core projects are very appreciated: Arch's developers are volunteers and active contributors will often find themselves becoming part of that team. Archers can freely contribute packages to the Arch User Repository, improve the ArchWiki documentation, provide technical assistance to others or just exchange opinions in the forums, mailing lists, or IRC channels. Arch Linux is the operating system of choice for many people around the globe, and there exist several international communities that offer help and provide documentation in many different languages.

- principle: Versatility
  summary: |
    Arch Linux is a general-purpose distribution. Upon installation, only a command-line environment is provided: rather than tearing out unneeded and unwanted packages, the user is offered the ability to build a custom system by choosing among thousands of high-quality packages provided in the official repositories for the x86-64 architecture. Support for i686 will cease in November 2017.

    Arch is backed by pacman, a lightweight, simple and fast package manager that allows to upgrade the entire system with one command. Arch also provides the Arch Build System, a ports-like system to make it easy to build and install packages from source, which can also be synchronized with one command. In addition, the Arch User Repository contains many thousands more of community-contributed PKGBUILD scripts for compiling installable packages from source using the makepkg application. It is also possible for users to build and maintain their own custom repositories with ease.
tags: [specific, organisational]
---
