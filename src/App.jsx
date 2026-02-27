import React from 'react'
import Terminal from './components/Terminal.jsx'

class ErrorBoundary extends React.Component {
  state = { error: null }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    console.error(error, info)
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          color: '#ff6b6b',
          padding: '2rem',
          fontFamily: 'monospace',
          maxWidth: '600px',
          whiteSpace: 'pre-wrap',
          background: '#1a1a1a',
          borderRadius: '8px',
        }}>
          <strong>Error en la terminal:</strong><br />
          {this.state.error.message}
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Terminal />
    </ErrorBoundary>
  )
}
