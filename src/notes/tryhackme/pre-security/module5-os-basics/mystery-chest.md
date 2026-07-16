## Contents

- [Windows Basics — 1-Minute Revision](#windows-basics--1-minute-revision)
- [Quick Revision](#quick-revision)
- [Command Reference](#command-reference)
- [TryHackMe Answers](#tryhackme-answers)

> **Bonus Notes**: This is a centralized collection of all quick revision sections, memory tricks, and THM answers from the entire Operating Systems module.

## Windows Basics — 1-Minute Revision

- Windows is a GUI-based operating system.
- Authentication verifies user identity.
- Guest < Standard < Administrator.
- Desktop is the primary workspace.
- Start Menu launches apps and settings.
- File Explorer manages files and folders.
- Windows Update installs security patches.
- Applications can be installed via Microsoft Store or `.exe`/`.msi` installers.
- Windows Settings is the modern configuration tool.
- Control Panel is the legacy administration interface.
- Task Manager monitors processes and system performance.
- Windows Security protects against malware.
- Windows Defender Firewall filters network traffic.
- EICAR is a safe antivirus test file.

## Quick Revision

**How an Operating System Works**

The operating system is the "invisible manager" between you and the machine. You interact with applications, the applications ask the OS for what they need, and the OS controls the hardware on their behalf.

Flow: **User → Applications → Operating System → Hardware**

- Applications never touch hardware directly — they request it through **system calls** to the **kernel**.
- **Kernel Space** is the privileged core with direct hardware access; **User Space** is where normal applications run. Separating the two stops one crashing app from taking down the whole system.

**The 6 OS Responsibilities**

- **Process management** — starts, schedules, and stops running programs.
- **Memory management** — allocates RAM to each process.
- **File management** — organises files and storage.
- **User management** — accounts, authentication, and permissions.
- **Device management** — drivers that let the OS talk to hardware.
- **Security** — isolation, access control, and protection.

**Types of Operating Systems**

| Category | Examples |
| --- | --- |
| Desktop | Windows, macOS, Linux |
| Server | Windows Server, Ubuntu Server, Red Hat |
| Mobile | Android, iOS |
| Embedded | OpenWRT, Ubuntu Core, FreeRTOS |
| Cloud | Amazon Linux, Ubuntu Server |
| Container | Alpine, Flatcar |

Every type exposes a **GUI** (click-based) and/or a **CLI** (command-based) interface, and underneath they all run a **kernel** that controls the **hardware**.

**Why OS Security Matters**

An OS controls the hardware and stores sensitive data, so it must be secured. Security is judged against the **CIA Triad — Confidentiality, Integrity, Availability**. The common weaknesses that break it are **weak passwords, weak permissions, and malware**. On Linux, a SOC analyst investigates after an SSH login with `whoami`, `ls`, `cat`, `history`, and `su` — and the attacker's ultimate goal is **root access**.

**Windows Administration — What You Manage**

| Task | Purpose |
| --- | --- |
| Windows Update | Install security patches |
| Install / Remove Apps | Add or remove software (Microsoft Store or `.exe`/`.msi`) |
| Windows Settings | Modern configuration tool |
| Control Panel | Legacy administration interface |
| Task Manager | Monitor processes and performance |
| Windows Security | Protection against malware |
| Windows Defender Firewall | Filter network traffic |
| Secure Windows | The overall goal of all the above |

## Command Reference

**Windows CMD — Navigation & Files**

| Command | Meaning |
| --- | --- |
| `cd` | Change directory |
| `dir` | List files |
| `dir /a` | Show hidden files |
| `dir /s` | Search for a file |
| `type` | Read a file |

Hidden files are not the same as secret files — SOC analysts always inspect hidden files.

**Windows — System Enumeration**

| Command | Reveals |
| --- | --- |
| `whoami` | Current user |
| `hostname` | Computer name |
| `systeminfo` | Full Windows information |
| `ipconfig` | Network configuration |
| `ipconfig /all` | Detailed network information |

**Windows — Environment Variables**

| Variable | Points To |
| --- | --- |
| `%USERNAME%` | Current user name |
| `%USERPROFILE%` | User's home folder |
| `%TEMP%` | Temporary files |
| `%APPDATA%` | Application data |
| `%WINDIR%` | Windows install folder |

**Windows — Filesystem Paths**

| Path | Contents |
| --- | --- |
| `C:\Windows` | OS files |
| `C:\Users` | User profiles |
| `C:\Program Files` | Installed software |
| `C:\ProgramData` | Shared application data |
| `C:\Temp` | Temporary files |

**Linux Commands**

| Command | Meaning |
| --- | --- |
| `pwd` | Current directory |
| `ls` | List files |
| `ls -l` | Detailed list |
| `ls -al` | Include hidden files |
| `cd` | Change directory |
| `cd ..` | Go back one level |
| `find` | Search for files |
| `cat` | Read a file |
| `whoami` | Current user |
| `uname` | OS name |
| `uname -a` | Kernel information |
| `df -h` | Disk usage |
| `/etc` | Configuration files |
| `os-release` | Linux version |

**SOC Investigation Order** — when enumerating a machine, work outward in this order:

**User → Host → OS → Network → Files → Evidence → Report**

## TryHackMe Answers

| Task | Answer |
|-------|--------|
| Kernel access | Kernel Space |
| Authentication & Permissions | User Management |
| Ubuntu MATE Version | 1.26.2 |
| RAM | 1.9 GiB |
| Filesystem | ext4 |
| User Directories | 3 |
| Flag | THM{new_pc_for_free!} |

| Question | Answer |
|----------|--------|
| Hidden file location | `.secret` / hidden folder (lab specific) |
| Hostname | TRYHACKME *(or lab hostname shown by `hostname`)* |
| Current User | Administrator |
| Windows Version | Windows Server 2019 |
| IP Address | Use `ipconfig` output from the lab |
| Flag | *(Use the exact flag shown in your room after completing the tasks.)* |

> **Note:** Some values (hostname, IP address, final flag) may vary depending on the TryHackMe instance. Record the values shown in your own VM.
