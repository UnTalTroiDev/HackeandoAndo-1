/**
 * Terminal Kali Linux simulada — Hackeando Ando #1
 * Comandos predefinidos para presentación.
 */

(function () {
  const PROMPT = "root@kali:~# ";
  const TYPING_DELAY_MS = 15;
  const USE_TYPING_EFFECT = true;

  const commands = {
    whoami: {
      output: "root"
    },
    "uname -a": {
      output: "Linux kali 6.1.0-kali9-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-2kali1 (2024-04-08) x86_64 GNU/Linux"
    },
    "uname": {
      output: "Linux"
    },
    nmap: {
      output: "Nmap 7.94 ( https://nmap.org )\nUsage: nmap [Scan Type(s)] [Options] {target specification}\n\nTARGET SPECIFICATION:\n  Can pass hostnames, IP addresses, networks, etc.\n  Ex: scanme.nmap.org, 192.168.0.1/24, 10.0.0-255.1-254\n\nSCAN TECHNIQUES:\n  -sS    TCP SYN scan (default)\n  -sT    TCP connect() scan\n  -sU    UDP scan\n  -sA    TCP ACK scan\n\nHackeando Ando #1 — Herramientas como nmap son parte del kit de Kali para escaneo de red (siempre con autorización)."
    },
    "nmap --help": {
      output: "Nmap 7.94 ( https://nmap.org )\nUsage: nmap [Scan Type(s)] [Options] {target specification}\n\nHackeando Ando #1 — Primeros pasos en hacking ético."
    },
    'echo "Hackeando Ando #1"': {
      output: "Hackeando Ando #1"
    },
    "echo hackeando ando": {
      output: "hackeando ando"
    },
    help: {
      output: "Comandos disponibles en esta demo:\n  whoami              — Identidad en ciberseguridad\n  uname -a            — Info del sistema (Kali)\n  nmap / nmap --help  — Herramientas de escaneo\n  echo \"...\"           — Mensaje del evento\n  social-engineer     — Ingeniería social\n  help / ?            — Esta ayuda"
    },
    "?": {
      output: "Comandos disponibles en esta demo:\n  whoami              — Identidad en ciberseguridad\n  uname -a            — Info del sistema (Kali)\n  nmap / nmap --help  — Herramientas de escaneo\n  echo \"...\"           — Mensaje del evento\n  social-engineer     — Ingeniería social\n  help / ?            — Esta ayuda"
    },
    "social-engineer": {
      output: "[!] Ingeniería social: uso de la manipulación humana para obtener información o acceso.\n\nAfecta a empresas y personas. En Hackeando Ando #1 hablaremos de cómo reconocerla y mitigarla.\n\nComando ficticio para la presentación."
    },
    clear: {
      output: null
    }
  };

  const scenes = [
    { command: "whoami", output: commands.whoami.output },
    { command: "uname -a", output: commands["uname -a"].output },
    { command: "nmap --help", output: commands["nmap --help"].output },
    { command: 'echo "Hackeando Ando #1"', output: commands['echo "Hackeando Ando #1"'].output },
    { command: "social-engineer", output: commands["social-engineer"].output },
    { command: "help", output: commands.help.output }
  ];

  const banner = [
    "",
    "  _  __    _    _   _ ____  _   _    _    ____  _   _ ____  _     ___ _   _ _____ ",
    " | |/ /   / \\  | \\ | |  _ \\| | | |  / \\  / ___|| | | | __ )| |   |_ _| \\ | | ____|",
    " | ' <   / _ \\ |  \\| | | | | | | | / _ \\ \\___ \\| | | |  _ \\| |    | ||  \\| |  _|  ",
    " | . \\ / ___ \\| |\\  | |_| | |_| |/ ___ \\ ___) | |_| | |_) | |___ | || |\\  | |___ ",
    " |_|\\_/_/   \\_\\_| \\_|____/ \\___/_/   \\_\\____/ \\___/|____/|_____|___|_|_| \\_|_____|",
    "",
    "  Hackeando Ando #1 — Primer Encuentro Tech & Ciberseguridad",
    "  BruteKaliSecurity · BeNetwork Coworking · Medellín",
    "",
    "  Escribe 'help' o '?' para ver comandos de la demo.",
    ""
  ].join("\n");

  const outputEl = document.getElementById("output");
  const inputEl = document.getElementById("input");
  const btnNext = document.getElementById("btnNext");
  const sceneIndicator = document.getElementById("sceneIndicator");

  let commandHistory = [];
  let historyIndex = -1;

  function scrollToBottom() {
    outputEl.scrollTop = outputEl.scrollHeight;
  }

  function appendLine(html, className) {
    const line = document.createElement("div");
    line.className = "line " + (className || "");
    line.innerHTML = html;
    outputEl.appendChild(line);
    scrollToBottom();
  }

  function appendOutput(text, isError) {
    const cls = isError ? "error-line" : "output-line";
    const escaped = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    appendLine(escaped.replace(/\n/g, "<br>"), cls);
  }

  function typeOutput(text, isError, done) {
    if (!USE_TYPING_EFFECT || !text) {
      appendOutput(text || "", isError);
      if (done) done();
      return;
    }
    const line = document.createElement("div");
    line.className = "line " + (isError ? "error-line" : "output-line");
    outputEl.appendChild(line);
    let i = 0;
    function tick() {
      if (i < text.length) {
        const ch = text[i];
        const isNewline = ch === "\n";
        line.innerHTML += isNewline ? "<br>" : (ch === " " ? "&nbsp;" : ch.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
        i++;
        scrollToBottom();
        setTimeout(tick, TYPING_DELAY_MS);
      } else {
        scrollToBottom();
        if (done) done();
      }
    }
    tick();
  }

  function runCommand(cmd) {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    appendLine('<span class="prompt-line">' + PROMPT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</span>" + trimmed.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "prompt-line");

    const key = trimmed.toLowerCase();
    let match = commands[key];
    if (!match) {
      for (const k of Object.keys(commands)) {
        if (k.toLowerCase() === key) {
          match = commands[k];
          break;
        }
      }
    }
    if (!match) {
      for (const k of Object.keys(commands)) {
        if (key.startsWith(k.toLowerCase()) || k.toLowerCase().startsWith(key)) {
          match = commands[k];
          break;
        }
      }
    }
    if (match) {
      if (match.output === null) {
        clearOutput();
        scrollToBottom();
        return;
      }
      typeOutput(match.output, false, scrollToBottom);
    } else {
      typeOutput("Comando no encontrado: '" + trimmed + "'. Escribe 'help' o '?' para ver comandos.", true, scrollToBottom);
    }

    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;
  }

  function clearOutput() {
    outputEl.innerHTML = "";
  }

  function showBanner() {
    appendOutput(banner, false);
  }

  function runScene(index) {
    if (index < 0 || index >= scenes.length) return;
    const scene = scenes[index];
    runCommand(scene.command);
    sceneIndicator.textContent = "Escena " + (index + 1) + " / " + scenes.length;
  }

  let currentSceneIndex = 0;

  function nextScene() {
    if (currentSceneIndex >= scenes.length) {
      sceneIndicator.textContent = "Fin de las escenas. Escribe comandos manualmente.";
      return;
    }
    runScene(currentSceneIndex);
    currentSceneIndex++;
  }

  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      runCommand(inputEl.value);
      inputEl.value = "";
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      historyIndex = Math.max(0, historyIndex - 1);
      inputEl.value = commandHistory[historyIndex];
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      historyIndex = Math.min(commandHistory.length, historyIndex + 1);
      inputEl.value = historyIndex >= commandHistory.length ? "" : commandHistory[historyIndex];
      return;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "ArrowRight") {
      if (e.target === inputEl && e.key === " ") return;
      e.preventDefault();
      nextScene();
    }
  });

  if (btnNext) {
    btnNext.addEventListener("click", nextScene);
  }

  showBanner();
  sceneIndicator.textContent = "Espacio o → siguiente escena · " + scenes.length + " escenas";
  inputEl.focus();
})();
