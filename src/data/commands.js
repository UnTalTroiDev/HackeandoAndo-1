export const PROMPT = 'root@kali:~# '

const CYBER_TEXT = `La importancia de la Ciberseguridad

La escasez de habilidades en ciberseguridad es un tema global, pero algunas regiones enfrentan mayores desafùos que otras. Aquù estù un desglose de las inequidades en la disponibilidad de habilidades:

- Latinoamùrica y el Caribe tienen la mayor escasez de profesionales de ciberseguridad per cùpita.
- Europa y Norteamùrica tienen mejor acceso a profesionales capacitados, pero la demanda sigue superando la oferta.

Source: Global Cybersecurity Outlook 2026 - WEF`

export const commands = {
  whoami: { output: 'root' },
  'uname -a': {
    output: CYBER_TEXT,
  },
  uname: {
    output: CYBER_TEXT,
  },
  nmap: {
    output:
      'Nmap 7.94 ( https://nmap.org )\n' +
      'Usage: nmap [Scan Type(s)] [Options] {target specification}\n\n' +
      'TARGET SPECIFICATION:\n' +
      '  Can pass hostnames, IP addresses, networks, etc.\n' +
      '  Ex: scanme.nmap.org, 192.168.0.1/24, 10.0.0-255.1-254\n\n' +
      'SCAN TECHNIQUES:\n' +
      '  -sS    TCP SYN scan (default)\n' +
      '  -sT    TCP connect() scan\n' +
      '  -sU    UDP scan\n' +
      '  -sA    TCP ACK scan\n\n' +
      'Hackeando Ando #1 ù Herramientas como nmap son parte del kit de Kali para escaneo de red (siempre con autorizaciùn).',
  },
  'nmap --help': {
    output:
      'Nmap 7.94 ( https://nmap.org )\n' +
      'Usage: nmap [Scan Type(s)] [Options] {target specification}\n\n' +
      'Hackeando Ando #1 ù Primeros pasos en hacking ùtico.',
  },
  'echo "Hackeando Ando #1"': { output: 'Hackeando Ando #1' },
  'echo hackeando ando': { output: 'hackeando ando' },
  help: {
    output:
      'Comandos disponibles en esta demo:\n' +
      '  whoami              ù Identidad en ciberseguridad\n' +
      '  uname -a            ù Importancia de la ciberseguridad\n' +
      '  vulnerabilidades / 1 ù Empresas vulnerables, pentest\n' +
      '  mercado / devsecops / 2 ù Evoluciùn seguridad continua\n' +
      '  secure              ù Si todo serù software, todo debe ser seguro\n' +
      '  nmap / nmap --help  ù Herramientas de escaneo\n' +
      '  echo "..."           ù Mensaje del evento\n' +
      '  social-engineer     ù Ingenierùa social\n' +
      '  help / ?            ù Esta ayuda',
  },
  '?': {
    output:
      'Comandos disponibles en esta demo:\n' +
      '  whoami              ù Identidad en ciberseguridad\n' +
      '  uname -a            ù Importancia de la ciberseguridad\n' +
      '  vulnerabilidades / 1 ù Empresas vulnerables, pentest\n' +
      '  mercado / devsecops / 2 ù Evoluciùn seguridad continua\n' +
      '  secure              ù Si todo serù software, todo debe ser seguro\n' +
      '  nmap / nmap --help  ù Herramientas de escaneo\n' +
      '  echo "..."           ù Mensaje del evento\n' +
      '  social-engineer     ù Ingenierùa social\n' +
      '  help / ?            ù Esta ayuda',
  },
  'social-engineer': {
    output:
      '[!] Ingenierùa social: uso de la manipulaciùn humana para obtener informaciùn o acceso.\n\n' +
      'Afecta a empresas y personas. En Hackeando Ando #1 hablaremos de cùmo reconocerla y mitigarla.\n\n' +
      'Comando ficticio para la presentaciùn.',
  },
  cibersecurity: {
    output: CYBER_TEXT,
  },
  cybersecurity: {
    output: CYBER_TEXT,
  },
  vulnerabilidades: {
    output:
      '1. Las empresas no saben quù tan vulnerables son\n\n' +
      '- El 70-80% de empresas nunca han hecho un pentest real\n' +
      '- Las auditorùas tradicionales son costosas y lentas\n' +
      '- La seguridad se implementa tarde, cuando ya hubo un incidente.\n\n' +
      'El mercado estù desprotegido, no solo desabastecido.',
  },
  '1': {
    output:
      '1. Las empresas no saben quù tan vulnerables son\n\n' +
      '- El 70-80% de empresas nunca han hecho un pentest real\n' +
      '- Las auditorùas tradicionales son costosas y lentas\n' +
      '- La seguridad se implementa tarde, cuando ya hubo un incidente.\n\n' +
      'El mercado estù desprotegido, no solo desabastecido.',
  },
  mercado: {
    output:
      '2. El mercado estù evolucionando hacia un enfoque de seguridad continua, donde las prùcticas de DevSecOps estùn reemplazando las auditorùas puntuales, la automatizaciùn se estù convirtiendo en el estùndar para proteger aplicaciones y procesos, y las startups de ciberseguridad basadas en modelos SaaS estùn creciendo rùpidamente para responder a esta nueva demanda empresarial.',
  },
  devsecops: {
    output:
      '2. El mercado estù evolucionando hacia un enfoque de seguridad continua, donde las prùcticas de DevSecOps estùn reemplazando las auditorùas puntuales, la automatizaciùn se estù convirtiendo en el estùndar para proteger aplicaciones y procesos, y las startups de ciberseguridad basadas en modelos SaaS estùn creciendo rùpidamente para responder a esta nueva demanda empresarial.',
  },
  '2': {
    output:
      '2. El mercado estù evolucionando hacia un enfoque de seguridad continua, donde las prùcticas de DevSecOps estùn reemplazando las auditorùas puntuales, la automatizaciùn se estù convirtiendo en el estùndar para proteger aplicaciones y procesos, y las startups de ciberseguridad basadas en modelos SaaS estùn creciendo rùpidamente para responder a esta nueva demanda empresarial.',
  },
  secure: {
    output: 'Si todo serù software, todo debe ser seguro.',
  },
  'software-seguro': {
    output: 'Si todo serù software, todo debe ser seguro.',
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
  '  Hackeando Ando #1 ù Primer Encuentro Tech & Ciberseguridad',
  '  BruteKaliSecurity ù BeNetwork Coworking ù Medellùn',
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
