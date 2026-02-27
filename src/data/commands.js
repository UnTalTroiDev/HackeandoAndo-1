export const PROMPT = 'root@kali:~# '

const CYBER_TEXT = `La importancia de la Ciberseguridad

La escasez de habilidades en ciberseguridad es un tema global, pero algunas regiones enfrentan mayores desaf\u00EDos que otras. Aqu\u00ED est\u00E1 un desglose de las inequidades en la disponibilidad de habilidades:

- Latinoam\u00E9rica y el Caribe tienen la mayor escasez de profesionales de ciberseguridad per c\u00E1pita.
- Europa y Norteam\u00E9rica tienen mejor acceso a profesionales capacitados, pero la demanda sigue superando la oferta.

Source: Global Cybersecurity Outlook 2026 - WEF`

export const commands = {
  whoami: { output: 'root' },
  'uname -a': { output: CYBER_TEXT },
  uname: { output: CYBER_TEXT },
  nmap: {
    output:
      'Nmap 7.94 ( https://nmap.org )\n' +
      'Usage: nmap [Scan Type(s)] [Options] {target specification}\n\n' +
      'TARGET SPECIFICATION:\n  Can pass hostnames, IP addresses, networks, etc.\n' +
      'Ex: scanme.nmap.org, 192.168.0.1/24\n\n' +
      'SCAN TECHNIQUES:\n  -sS TCP SYN  -sT TCP connect  -sU UDP  -sA TCP ACK\n\n' +
      'Hackeando Ando #1 \u2014 Herramientas como nmap son parte del kit de Kali para escaneo de red (siempre con autorizaci\u00F3n).',
  },
  'nmap --help': {
    output:
      'Nmap 7.94 ( https://nmap.org )\nUsage: nmap [Scan Type(s)] [Options] {target specification}\n\n' +
      'Hackeando Ando #1 \u2014 Primeros pasos en hacking \u00E9tico.',
  },
  'echo "Hackeando Ando #1"': { output: 'Hackeando Ando #1' },
  'echo hackeando ando': { output: 'hackeando ando' },
  help: {
    output:
      'Comandos disponibles en esta demo:\n' +
      '  whoami              \u2014 Identidad en ciberseguridad\n' +
      '  uname -a            \u2014 Importancia de la ciberseguridad\n' +
      '  vulnerabilidades / 1 \u2014 Empresas vulnerables, pentest\n' +
      '  mercado / devsecops / 2 \u2014 Evoluci\u00F3n seguridad continua\n' +
      '  secure              \u2014 Si todo ser\u00E1 software, todo debe ser seguro\n' +
      '  nmap / nmap --help  \u2014 Herramientas de escaneo\n' +
      '  echo "..."           \u2014 Mensaje del evento\n' +
      '  social-engineer     \u2014 Ingenier\u00EDa social\n' +
      '  help / ?            \u2014 Esta ayuda',
  },
  '?': {
    output:
      'Comandos disponibles en esta demo:\n' +
      '  whoami              \u2014 Identidad en ciberseguridad\n' +
      '  uname -a            \u2014 Importancia de la ciberseguridad\n' +
      '  vulnerabilidades / 1 \u2014 Empresas vulnerables, pentest\n' +
      '  mercado / devsecops / 2 \u2014 Evoluci\u00F3n seguridad continua\n' +
      '  secure              \u2014 Si todo ser\u00E1 software, todo debe ser seguro\n' +
      '  nmap / nmap --help  \u2014 Herramientas de escaneo\n' +
      '  echo "..."           \u2014 Mensaje del evento\n' +
      '  social-engineer     \u2014 Ingenier\u00EDa social\n' +
      '  help / ?            \u2014 Esta ayuda',
  },
  'social-engineer': {
    output:
      '[!] Ingenier\u00EDa social: uso de la manipulaci\u00F3n humana para obtener informaci\u00F3n o acceso.\n\n' +
      'Afecta a empresas y personas. En Hackeando Ando #1 hablaremos de c\u00F3mo reconocerla y mitigarla.\n\n' +
      'Comando ficticio para la presentaci\u00F3n.',
  },
  cibersecurity: { output: CYBER_TEXT },
  cybersecurity: { output: CYBER_TEXT },
  vulnerabilidades: {
    output:
      '1. Las empresas no saben qu\u00E9 tan vulnerables son\n\n' +
      '- El 70-80% de empresas nunca han hecho un pentest real\n' +
      '- Las auditor\u00EDas tradicionales son costosas y lentas\n' +
      '- La seguridad se implementa tarde, cuando ya hubo un incidente.\n\n' +
      'El mercado est\u00E1 desprotegido, no solo desabastecido.',
  },
  '1': {
    output:
      '1. Las empresas no saben qu\u00E9 tan vulnerables son\n\n' +
      '- El 70-80% de empresas nunca han hecho un pentest real\n' +
      '- Las auditor\u00EDas tradicionales son costosas y lentas\n' +
      '- La seguridad se implementa tarde, cuando ya hubo un incidente.\n\n' +
      'El mercado est\u00E1 desprotegido, no solo desabastecido.',
  },
  mercado: {
    output:
      '2. El mercado est\u00E1 evolucionando hacia un enfoque de seguridad continua, donde las pr\u00E1cticas de DevSecOps est\u00E1n reemplazando las auditor\u00EDas puntuales, la automatizaci\u00F3n se est\u00E1 convirtiendo en el est\u00E1ndar para proteger aplicaciones y procesos, y las startups de ciberseguridad basadas en modelos SaaS est\u00E1n creciendo r\u00E1pidamente para responder a esta nueva demanda empresarial.',
  },
  devsecops: {
    output:
      '2. El mercado est\u00E1 evolucionando hacia un enfoque de seguridad continua, donde las pr\u00E1cticas de DevSecOps est\u00E1n reemplazando las auditor\u00EDas puntuales, la automatizaci\u00F3n se est\u00E1 convirtiendo en el est\u00E1ndar para proteger aplicaciones y procesos, y las startups de ciberseguridad basadas en modelos SaaS est\u00E1n creciendo r\u00E1pidamente para responder a esta nueva demanda empresarial.',
  },
  '2': {
    output:
      '2. El mercado est\u00E1 evolucionando hacia un enfoque de seguridad continua, donde las pr\u00E1cticas de DevSecOps est\u00E1n reemplazando las auditor\u00EDas puntuales, la automatizaci\u00F3n se est\u00E1 convirtiendo en el est\u00E1ndar para proteger aplicaciones y procesos, y las startups de ciberseguridad basadas en modelos SaaS est\u00E1n creciendo r\u00E1pidamente para responder a esta nueva demanda empresarial.',
  },
  secure: {
    output: 'Si todo ser\u00E1 software, todo debe ser seguro.',
  },
  'software-seguro': {
    output: 'Si todo ser\u00E1 software, todo debe ser seguro.',
  },
  clear: { output: null },
}

export const banner = [
  '',
  '  ____  ____  ____ _   _ _____ _____   _   _    _     _ _ ',
  ' | __ )|  _ \\|  _ \\ | | | ____|_   _| | | | |  / \\   | | |',
  ' |  _ \\| |_) | |_) || | |  _|   | |   | |_| | / _ \\  | | |',
  ' | |_) |  __/|  _ < | | | |___  | |   |  _  |/ ___ \\ | | |',
  ' |____/|_|   |_| \\_\\|_| |_____| |_|   |_| |_/_/   \\_\\|_|_|   BRUTE KALI',
  '',
  '  Hackeando Ando #1 \u2014 Primer Encuentro Tech & Ciberseguridad',
  '  BruteKaliSecurity \u00B7 BeNetwork Coworking \u00B7 Medell\u00EDn',
  '',
  "  Escribe 'help' o '?' para ver comandos de la demo.",
  '',
].join('\n')

export const scenes = [
  { command: 'whoami', output: commands.whoami.output },
  { command: 'uname -a', output: commands['uname -a'].output },
  { command: 'vulnerabilidades', output: commands.vulnerabilidades.output },
  { command: 'mercado', output: commands.mercado.output },
  { command: 'secure', output: commands.secure.output },
  { command: 'nmap --help', output: commands['nmap --help'].output },
  { command: 'echo "Hackeando Ando #1"', output: commands['echo "Hackeando Ando #1"'].output },
  { command: 'social-engineer', output: commands['social-engineer'].output },
  { command: 'help', output: commands.help.output },
]
