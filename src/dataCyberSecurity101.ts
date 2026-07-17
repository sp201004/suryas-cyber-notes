import { Module, Topic } from './types';
import { offensiveSecurityIntroRoom, defensiveSecurityIntroRoom } from './data/sharedIntroRooms';

const START_MODULE_ID = 'start-your-cyber-security-journey';

// Room 3 — Search Skills (new, verbatim note body from source_notes).
// The sidebar metadata below (mindmap / key takeaways / practice questions /
// real-world scenario) is authored from the room's structure.
const searchSkillsRoom: Topic = {
  id: 'search-skills',
  moduleId: START_MODULE_ID,
  title: 'Search Skills',
  description: 'Master the search engines and OSINT resources every analyst relies on: Shodan, VirusTotal, CVE/NVD, Linux MAN pages, and GitHub.',
  status: 'unlocked',
  iconType: 'search',
  content: '',
  realWorldCallout: {
    title: 'The Exposed Apache Server',
    concept: 'OSINT-Driven Vulnerability Discovery',
    scenario: 'A company accidentally exposes a server running Apache 2.4.49. An attacker searches Shodan for "Apache 2.4.49", instantly finds thousands of matching hosts, cross-references the CVE database, discovers CVE-2021-41773, downloads a public proof-of-concept, and attempts exploitation.',
    relevance: 'It shows why organisations must continuously monitor their Internet-facing assets — the same search tools defenders use for asset discovery are used by attackers for reconnaissance.'
  },
  mindmap: [
    { id: 'search-skills', label: 'Search Skills', description: 'Knowing where to find answers beats memorising tools', x: 50, y: 12, connections: ['shodan', 'virustotal', 'cve', 'docs', 'github'] },
    { id: 'shodan', label: 'Shodan', description: 'Search engine for Internet-connected devices; banner grabbing reveals software/versions', x: 12, y: 48 },
    { id: 'virustotal', label: 'VirusTotal', description: 'Analyses files, URLs, domains, IPs and hashes with many AV engines; detection ratio', x: 33, y: 55 },
    { id: 'cve', label: 'CVE / NVD', description: 'Catalog of known vulnerabilities; MITRE assigns IDs, NVD adds CVSS severity', x: 55, y: 55 },
    { id: 'docs', label: 'Documentation', description: 'Linux MAN pages and --help are the authoritative quick reference', x: 76, y: 55 },
    { id: 'github', label: 'GitHub', description: 'Hosts tools, PoCs, detection rules; always review code before running', x: 88, y: 48 }
  ],
  keyTakeaways: [
    'Search skill matters more than memorisation — good investigators know where to find everything.',
    'Google searches content; Shodan searches devices (servers, cameras, routers, IoT) via banner grabbing.',
    'Common Shodan filters include country:, port:, hostname:, org:, and product:.',
    'VirusTotal aggregates many antivirus engines; a higher detection ratio means higher confidence a file is malicious. SHA256 is the standard hash.',
    'CVE uniquely identifies a vulnerability (MITRE assigns IDs); the NVD adds CVSS severity scores from 0.0 to 10.0.',
    'Linux MAN pages (man <command>) and --help are authoritative documentation; only run GitHub PoC code after reviewing it in an isolated lab.'
  ],
  quiz: [
    {
      id: 'q-ss-1',
      question: 'Which search engine indexes Internet-connected devices rather than web content?',
      type: 'text',
      correctAnswer: 'Shodan',
      hint: 'Think "Google = books, this = buildings/devices".'
    },
    {
      id: 'q-ss-2',
      question: 'What is the term for information a service returns that reveals its software name and version?',
      type: 'text',
      correctAnswer: 'Banner',
      hint: 'Collecting it is called banner grabbing.'
    },
    {
      id: 'q-ss-3',
      question: 'Which platform analyses files, URLs, IPs and hashes using multiple antivirus engines?',
      type: 'text',
      correctAnswer: 'VirusTotal',
      hint: 'It reports a detection ratio such as 52/70.'
    },
    {
      id: 'q-ss-4',
      question: 'What does CVE stand for?',
      type: 'text',
      correctAnswer: 'Common Vulnerabilities and Exposures',
      hint: 'A globally recognised catalog of publicly disclosed vulnerabilities maintained by MITRE.'
    },
    {
      id: 'q-ss-5',
      question: 'Which Linux command opens the built-in manual for another command?',
      type: 'text',
      correctAnswer: 'man',
      hint: 'Usage: man <command>, e.g. man grep.'
    },
    {
      id: 'q-ss-6',
      question: 'Which hash algorithm is the industry standard most commonly used in cybersecurity today?',
      type: 'text',
      correctAnswer: 'SHA256',
      hint: 'MD5 = old, SHA1 = older, this = modern.'
    }
  ]
};

// Room 4 — Mystery Chest (new, follows the existing Mystery Chest pattern).
const mysteryChestRoom: Topic = {
  id: 'mystery-chest-cs101',
  moduleId: START_MODULE_ID,
  title: 'Mystery Chest',
  description: 'A quick-reference vault of search-skill cheat sheets, OSINT resources, and investigation workflow tips.',
  status: 'unlocked',
  iconType: 'chest',
  content: '',
  realWorldCallout: {
    title: 'The Analyst\'s Bookmark Bar',
    concept: 'Curated Resource Recall',
    scenario: 'During a live incident, a SOC analyst needs to check an unknown IP fast. Instead of hunting through search engines, they open pre-saved bookmarks — Shodan, VirusTotal, AbuseIPDB, the NVD — and triage the indicator in under a minute.',
    relevance: 'Knowing the right resource and its exact filters ahead of time turns a slow guess into a fast, confident decision under pressure.'
  },
  mindmap: [
    { id: 'chest', label: 'Search Cheat Sheet', description: 'The essential OSINT resources at a glance', x: 50, y: 15, connections: ['devices', 'malware', 'vulns'] },
    { id: 'devices', label: 'Shodan', description: 'shodan.io — filters: country:, port:, hostname:, org:, product:', x: 20, y: 50 },
    { id: 'malware', label: 'VirusTotal', description: 'virustotal.com — files, URLs, domains, IPs, hashes', x: 50, y: 55 },
    { id: 'vulns', label: 'CVE / NVD', description: 'cve.mitre.org & nvd.nist.gov — IDs and CVSS scores', x: 80, y: 50 }
  ],
  keyTakeaways: [
    'Keep a bookmarked toolkit: Shodan, VirusTotal, NVD, MITRE CVE, and GitHub.',
    'Memorise the high-value Shodan filters: country:, port:, hostname:, org:, product:.',
    'IOC = Indicator of Compromise (malicious IP, hash, domain, URL, registry key, process).',
    'Always execute suspicious files inside a sandbox and review GitHub code before running it.'
  ],
  quiz: [
    {
      id: 'q-mc101-1',
      question: 'What does OSINT stand for?',
      type: 'text',
      correctAnswer: 'Open Source Intelligence',
      hint: 'Intelligence gathered from publicly available sources.'
    },
    {
      id: 'q-mc101-2',
      question: 'What is an isolated environment used to safely execute suspicious files called?',
      type: 'text',
      correctAnswer: 'Sandbox',
      hint: 'It contains the file so it cannot harm the real system.'
    },
    {
      id: 'q-mc101-3',
      question: 'Which organisation maintains the National Vulnerability Database (NVD)?',
      type: 'text',
      correctAnswer: 'NIST',
      hint: 'It expands CVE records with CVSS scores and technical details.'
    },
    {
      id: 'q-mc101-4',
      question: 'What does IOC stand for?',
      type: 'text',
      correctAnswer: 'Indicator of Compromise',
      hint: 'Evidence such as a malicious IP, file hash, or domain.'
    }
  ]
};

const LINUX_FUNDAMENTALS_MODULE_ID = 'linux-fundamentals';

// Module 2 · Room 1 — Linux Fundamentals Part 1 (terminal basics + navigation).
const linuxFund1Room: Topic = {
  id: 'linux-fundamentals-1',
  moduleId: LINUX_FUNDAMENTALS_MODULE_ID,
  title: 'Linux Fundamentals Part 1',
  description: 'Take your first steps into Linux: what it is, how to interact with the terminal, and the core commands for exploring the filesystem.',
  status: 'unlocked',
  iconType: 'linux-cli',
  content: '',
  realWorldCallout: {
    title: 'First Moments on a Compromised Server',
    concept: 'Baseline Situational Awareness',
    scenario: 'A SOC analyst gains SSH access to a suspicious Linux web server. Before anything else they run whoami to confirm the account, pwd to locate themselves, and ls to reveal unexpected files dropped in the web root.',
    relevance: 'The very first commands you learn in Part 1 are the exact commands used to orient yourself during a live investigation.'
  },
  mindmap: [
    { id: 'linux1', label: 'Linux Basics', description: 'Interacting with the system through the terminal', x: 50, y: 12, connections: ['shell', 'nav', 'read'] },
    { id: 'shell', label: 'Terminal & Shell', description: 'The shell (Bash) interprets the commands you type at the prompt', x: 20, y: 50 },
    { id: 'nav', label: 'Navigation', description: 'ls, cd, and pwd move you around the filesystem tree', x: 50, y: 58 },
    { id: 'read', label: 'Reading', description: 'echo prints text; cat prints file contents', x: 80, y: 50 }
  ],
  keyTakeaways: [
    'Linux is an open-source OS family built on the Linux kernel, packaged as distributions like Ubuntu, Debian, and Kali.',
    'The terminal is the text interface; the shell (Bash) interprets your commands.',
    'The prompt reveals your user, hostname, current directory, and privilege level ($ = user, # = root).',
    'echo prints text and whoami shows the current user.',
    'ls, cd, pwd, and cat are the core commands for navigating and reading the filesystem.',
    'Paths start at the root /, and ~ is a shortcut for your home directory. Linux is case-sensitive.'
  ],
  quiz: [
    { id: 'q-lf1-1', question: 'Which command prints the current user\'s name?', type: 'text', correctAnswer: 'whoami', hint: 'It literally asks "who am I".' },
    { id: 'q-lf1-2', question: 'Which command prints the full path of your current directory?', type: 'text', correctAnswer: 'pwd', hint: 'Print Working Directory.' },
    { id: 'q-lf1-3', question: 'Which command lists the contents of a directory?', type: 'text', correctAnswer: 'ls', hint: 'Two letters, short for "list".' },
    { id: 'q-lf1-4', question: 'What symbol represents your home directory in a path?', type: 'text', correctAnswer: '~', hint: 'It sits above the Tab key on most keyboards.' },
    { id: 'q-lf1-5', question: 'Which command displays the contents of a text file?', type: 'text', correctAnswer: 'cat', hint: 'Short for "concatenate".' }
  ]
};

// Module 2 · Room 2 — Linux Fundamentals Part 2 (flags, file ops, search, permissions).
const linuxFund2Room: Topic = {
  id: 'linux-fundamentals-2',
  moduleId: LINUX_FUNDAMENTALS_MODULE_ID,
  title: 'Linux Fundamentals Part 2',
  description: 'Shape the system: use flags, create and manage files, search with find and grep, chain commands with operators, and read the Linux permission model.',
  status: 'unlocked',
  iconType: 'linux-cli',
  content: '',
  realWorldCallout: {
    title: 'The World-Writable Root Script',
    concept: 'Permissions as an Attack Surface',
    scenario: 'During a review, an analyst runs ls -l and spots a script owned by root but writable by everyone. An attacker could edit that script to run their own code with root privileges the next time it executes.',
    relevance: 'Reading permission strings — the core skill of Part 2 — is what turns a harmless-looking file listing into the discovery of a privilege-escalation path.'
  },
  mindmap: [
    { id: 'linux2', label: 'Shaping the System', description: 'Manipulating files and understanding access', x: 50, y: 12, connections: ['flags', 'files', 'search', 'perms'] },
    { id: 'flags', label: 'Flags', description: 'Switches like -a and -l change how a command behaves', x: 15, y: 50 },
    { id: 'files', label: 'File Ops', description: 'touch, mkdir, cp, mv, rm create and manage files', x: 38, y: 58 },
    { id: 'search', label: 'Search', description: 'find locates files; grep searches inside them', x: 62, y: 58 },
    { id: 'perms', label: 'Permissions', description: 'r/w/x for owner, group, and others govern access', x: 85, y: 50 }
  ],
  keyTakeaways: [
    'Flags (switches) like -a, -l, and -h extend what a command does.',
    'touch and mkdir create files and directories; cp, mv, and rm copy, move, and delete them.',
    'find locates files by name, type, or size; grep searches for text inside files.',
    'Operators >, >>, |, &, and && redirect and combine commands.',
    'Every file has an owner, a group, and read/write/execute permissions.',
    'Misconfigured permissions are a classic privilege-escalation risk.'
  ],
  quiz: [
    { id: 'q-lf2-1', question: 'Which ls flag reveals hidden files?', type: 'text', correctAnswer: '-a', hint: 'Hidden files start with a dot; the flag is short for "all".' },
    { id: 'q-lf2-2', question: 'Which command searches for a text pattern inside files?', type: 'text', correctAnswer: 'grep', hint: 'It is not find — this one looks INSIDE files.' },
    { id: 'q-lf2-3', question: 'Which command creates a new directory?', type: 'text', correctAnswer: 'mkdir', hint: '"make directory".' },
    { id: 'q-lf2-4', question: 'Which operator appends output to a file without overwriting it?', type: 'text', correctAnswer: '>>', hint: 'Double the single redirect symbol.' },
    { id: 'q-lf2-5', question: 'In a permission string, what does the letter x grant?', type: 'text', correctAnswer: 'Execute', hint: 'It lets you run the file as a program.' }
  ]
};

// Module 2 · Room 3 — Linux Fundamentals Part 3 (editors, utilities, processes, cron, apt, logs).
const linuxFund3Room: Topic = {
  id: 'linux-fundamentals-3',
  moduleId: LINUX_FUNDAMENTALS_MODULE_ID,
  title: 'Linux Fundamentals Part 3',
  description: 'Operate Linux like a pro: edit files in the terminal, transfer data, manage processes and services, schedule tasks with cron, install software, and read logs.',
  status: 'unlocked',
  iconType: 'linux-cli',
  content: '',
  realWorldCallout: {
    title: 'Cron-Based Persistence',
    concept: 'Detecting Attacker Foothold',
    scenario: 'After an incident, a responder inspects crontabs and finds a hidden job that re-downloads malware every hour. Removing the malware without removing the cron job would let the infection return after the next schedule tick.',
    relevance: 'Process, cron, and log skills from Part 3 are exactly what defenders use to find and fully evict an attacker\'s persistence mechanisms.'
  },
  mindmap: [
    { id: 'linux3', label: 'Operating Linux', description: 'Running a real working environment', x: 50, y: 12, connections: ['edit', 'proc', 'auto', 'logs'] },
    { id: 'edit', label: 'Editors', description: 'nano and vim edit files without a GUI', x: 16, y: 50 },
    { id: 'proc', label: 'Processes', description: 'ps, top, kill, and systemctl manage running programs', x: 39, y: 58 },
    { id: 'auto', label: 'Automation', description: 'cron schedules jobs; apt installs software', x: 62, y: 58 },
    { id: 'logs', label: 'Logs', description: '/var/log records system and auth events', x: 85, y: 50 }
  ],
  keyTakeaways: [
    'nano is beginner-friendly; vim is powerful and mode-based (Esc then :wq to save and quit).',
    'wget downloads files, scp copies over SSH, and Python can serve a directory over HTTP.',
    'Processes have PIDs; view them with ps/top and stop them with kill.',
    'systemctl manages long-running services (start, stop, status, enable).',
    'cron schedules automated jobs and is often abused by attackers for persistence.',
    'apt installs and updates software; logs under /var/log record system events.'
  ],
  quiz: [
    { id: 'q-lf3-1', question: 'How do you save and quit in vim?', type: 'text', correctAnswer: ':wq', hint: 'Press Esc first, then a colon command.' },
    { id: 'q-lf3-2', question: 'Which command stops a process using its PID?', type: 'text', correctAnswer: 'kill', hint: 'It signals the process to terminate.' },
    { id: 'q-lf3-3', question: 'Which tool schedules automated recurring tasks?', type: 'text', correctAnswer: 'cron', hint: 'You edit it with crontab -e.' },
    { id: 'q-lf3-4', question: 'Which command installs software on Debian/Ubuntu?', type: 'text', correctAnswer: 'apt', hint: 'Run it with sudo, e.g. sudo apt install.' },
    { id: 'q-lf3-5', question: 'In which directory are most Linux logs stored?', type: 'text', correctAnswer: '/var/log', hint: 'Includes syslog and auth.log.' }
  ]
};

// Module 2 · Room 4 — Mystery Chest (Bonus Revision) for Linux Fundamentals.
const linuxChestRoom: Topic = {
  id: 'mystery-chest-linux',
  moduleId: LINUX_FUNDAMENTALS_MODULE_ID,
  title: 'Mystery Chest',
  description: 'A bonus revision vault for the whole Linux Fundamentals module: command cheat sheets, the permission model, key directories, and an investigation workflow.',
  status: 'unlocked',
  iconType: 'mystery-chest',
  content: '',
  realWorldCallout: {
    title: 'The One-Page Field Guide',
    concept: 'Fast Recall Under Pressure',
    scenario: 'Mid-lab, an analyst forgets the exact find syntax. Instead of context-switching to a browser, they glance at their curated command sheet and keep moving — permissions, operators, and key paths all in one place.',
    relevance: 'Consolidating the module into a single reference turns hesitation into muscle memory during time-boxed labs and interviews.'
  },
  mindmap: [
    { id: 'chest-linux', label: 'Linux Cheat Sheet', description: 'The whole module at a glance', x: 50, y: 15, connections: ['cmds', 'perm', 'dirs'] },
    { id: 'cmds', label: 'Commands', description: 'Navigation, file ops, search, processes, automation', x: 20, y: 52 },
    { id: 'perm', label: 'Permissions', description: 'r/w/x for owner, group, and others', x: 50, y: 58 },
    { id: 'dirs', label: 'Key Directories', description: '/, /home, /etc, /var/log, /tmp', x: 80, y: 52 }
  ],
  keyTakeaways: [
    'Navigate with pwd, ls, cd, and cat; manage files with touch, mkdir, cp, mv, rm.',
    'find locates files; grep searches their contents.',
    'ps, top, kill, and systemctl control programs and services.',
    'cron automates tasks; apt manages software.',
    'Permissions (r/w/x for owner, group, others) decide who can act on each file.',
    'Key directories: / (root), /home, /etc, /var/log, /tmp.'
  ],
  quiz: [
    { id: 'q-mcl-1', question: 'Which command prints your current directory?', type: 'text', correctAnswer: 'pwd', hint: 'Print Working Directory.' },
    { id: 'q-mcl-2', question: 'Which command searches for text inside files?', type: 'text', correctAnswer: 'grep', hint: 'e.g. grep "error" log.txt.' },
    { id: 'q-mcl-3', question: 'Which directory holds system logs?', type: 'text', correctAnswer: '/var/log', hint: 'Includes auth.log and syslog.' },
    { id: 'q-mcl-4', question: 'Which command lists every running process?', type: 'text', correctAnswer: 'ps aux', hint: 'ps with three classic flags.' }
  ]
};

export const CYBER_SECURITY_101_MODULES: Module[] = [
  {
    id: START_MODULE_ID,
    title: 'Start Your Cyber Security Journey',
    description: 'Begin with the essential mindset and tools: offensive vs defensive security, and the search skills every analyst relies on.',
    isFuture: false,
    topics: [
      { ...offensiveSecurityIntroRoom, moduleId: START_MODULE_ID },
      { ...defensiveSecurityIntroRoom, moduleId: START_MODULE_ID },
      searchSkillsRoom,
      mysteryChestRoom,
    ],
  },
  {
    id: LINUX_FUNDAMENTALS_MODULE_ID,
    title: 'Linux Fundamentals',
    description: 'Learn to operate Linux from the command line — navigation, file management, permissions, processes, automation, and logs across three hands-on rooms plus a bonus revision chest.',
    isFuture: false,
    topics: [
      linuxFund1Room,
      linuxFund2Room,
      linuxFund3Room,
      linuxChestRoom,
    ],
  },
  // Future modules are appended here, one object at a time.
];
