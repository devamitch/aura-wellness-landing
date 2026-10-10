import React from 'react'

const LoadingScreen: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loader}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  )
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 1000,
  },
  loader: {
    width: '50px',
    height: '50px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 600,
    color: '#555',
  },
} as const

export default LoadingScreen
