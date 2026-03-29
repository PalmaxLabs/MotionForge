import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Home } from './pages/Home'
import { Gallery } from './pages/Gallery'
import { MotionDetail } from './pages/MotionDetail'
import { Playground } from './pages/Playground'
import { NotFound } from './pages/NotFound'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  const isNotFound = location.pathname !== '/' &&
    location.pathname !== '/gallery' &&
    !location.pathname.startsWith('/motion/') &&
    location.pathname !== '/playground'

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-gradient)', backgroundAttachment: 'fixed' }}>
      {!isNotFound && (
        <Header
          darkMode={darkMode}
          onToggleDark={() => setDarkMode(d => !d)}
          onMenuToggle={() => setSidebarOpen(o => !o)}
          sidebarOpen={sidebarOpen}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gallery"
          element={
            <Gallery
              sidebarOpen={sidebarOpen}
              onSidebarToggle={setSidebarOpen}
            />
          }
        />
        <Route path="/motion/:slug" element={<MotionDetail />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App
