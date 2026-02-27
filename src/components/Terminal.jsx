import { useState, useRef, useEffect, useCallback } from 'react'
import { PROMPT, commands, banner, scenes } from '../data/commands'
import './Terminal.css'

const TYPING_DELAY_MS = 15
const USE_TYPING_EFFECT = true

let lineId = 0
function nextId() {
  return (lineId += 1)
}

function findCommand(trimmed) {
  const key = trimmed.toLowerCase()
  if (commands[key]) return commands[key]
  for (const k of Object.keys(commands)) {
    if (k.toLowerCase() === key) return commands[k]
  }
  for (const k of Object.keys(commands)) {
    if (key.startsWith(k.toLowerCase()) || k.toLowerCase().startsWith(key)) return commands[k]
  }
  return null
}

export default function Terminal() {
  const [lines, setLines] = useState(() => [{ id: nextId(), type: 'banner', content: banner }])
  const [inputValue, setInputValue] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)
  const [typingLine, setTypingLine] = useState(null)
  const outputRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [lines, typingLine, scrollToBottom])

  useEffect(() => {
    if (!typingLine) return
    const { content, isError } = typingLine
    if (typingLine.displayedLength >= content.length) {
      setLines((prev) => [
        ...prev,
        { id: nextId(), type: isError ? 'error' : 'output', content },
      ])
      setTypingLine(null)
      return
    }
    const t = setTimeout(() => {
      setTypingLine((prev) =>
        prev ? { ...prev, displayedLength: prev.displayedLength + 1 } : null
      )
    }, TYPING_DELAY_MS)
    return () => clearTimeout(t)
  }, [typingLine])

  const runCommand = useCallback(
    (cmd) => {
      const trimmed = cmd.trim()
      if (!trimmed) return

      setLines((prev) => [
        ...prev,
        { id: nextId(), type: 'prompt', content: PROMPT + trimmed },
      ])
      setCommandHistory((prev) => {
        const next = [...prev, trimmed]
        setHistoryIndex(next.length)
        return next
      })

      const match = findCommand(trimmed)
      if (match) {
        if (match.output === null) {
          setLines([])
          return
        }
        if (USE_TYPING_EFFECT && match.output) {
          setTypingLine({
            content: match.output,
            isError: false,
            displayedLength: 0,
          })
        } else {
          setLines((prev) => [
            ...prev,
            { id: nextId(), type: 'output', content: match.output || '' },
          ])
        }
      } else {
        const msg = `Comando no encontrado: '${trimmed}'. Escribe 'help' o '?' para ver comandos.`
        if (USE_TYPING_EFFECT) {
          setTypingLine({ content: msg, isError: true, displayedLength: 0 })
        } else {
          setLines((prev) => [...prev, { id: nextId(), type: 'error', content: msg }])
        }
      }
    },
    []
  )

  const nextScene = useCallback(() => {
    if (currentSceneIndex >= scenes.length) return
    runCommand(scenes[currentSceneIndex].command)
    setCurrentSceneIndex((i) => i + 1)
  }, [currentSceneIndex, runCommand])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      runCommand(inputValue)
      setInputValue('')
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length === 0) return
      const idx = Math.max(0, historyIndex - 1)
      setHistoryIndex(idx)
      setInputValue(commandHistory[idx])
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (commandHistory.length === 0) return
      const idx = Math.min(commandHistory.length, historyIndex + 1)
      setHistoryIndex(idx)
      setInputValue(idx >= commandHistory.length ? '' : commandHistory[idx])
      return
    }
  }

  useEffect(() => {
    function handleGlobalKeyDown(e) {
      if (e.key === ' ' || e.key === 'ArrowRight') {
        if (e.target === inputRef.current && e.key === ' ') return
        e.preventDefault()
        nextScene()
      }
    }
    window.addEventListener('keydown', handleGlobalKeyDown)
    return () => window.removeEventListener('keydown', handleGlobalKeyDown)
  }, [nextScene])

  const sceneLabel =
    currentSceneIndex === 0 && commandHistory.length === 0
      ? `Espacio o → siguiente escena · ${scenes.length} escenas`
      : currentSceneIndex < scenes.length
        ? `Escena ${currentSceneIndex + 1} / ${scenes.length}`
        : 'Fin de las escenas. Escribe comandos manualmente.'

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-title">root@kali — Hackeando Ando #1</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-output" ref={outputRef}>
          {lines.map((line) => (
            <div key={line.id} className={`line line-${line.type}`}>
              {line.type === 'prompt' || line.type === 'banner' ? (
                line.content.split('\n').map((s, i) => (
                  <span key={i}>
                    {s}
                    {i < line.content.split('\n').length - 1 && <br />}
                  </span>
                ))
              ) : (
                line.content.split('\n').map((s, i) => (
                  <span key={i}>
                    {s}
                    {i < line.content.split('\n').length - 1 && <br />}
                  </span>
                ))
              )}
            </div>
          ))}
          {typingLine && (
            <div className={`line line-${typingLine.isError ? 'error' : 'output'}`}>
              {typingLine.content
                .slice(0, typingLine.displayedLength)
                .split('\n')
                .map((s, i, arr) => (
                  <span key={i}>
                    {s}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
            </div>
          )}
        </div>
        <div className="terminal-line">
          <span className="prompt">{PROMPT}</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Comando"
          />
        </div>
      </div>
      <div className="presentation-controls">
        <button type="button" className="btn-next" onClick={nextScene}>
          Siguiente escena
        </button>
        <span className="scene-indicator">{sceneLabel}</span>
      </div>
    </div>
  )
}
