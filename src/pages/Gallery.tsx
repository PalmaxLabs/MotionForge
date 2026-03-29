import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { motions, categories, Category } from '../data/motions'
import { MotionCard } from '../components/motion/MotionCard'
import { Sidebar } from '../components/layout/Sidebar'
import { Motion } from '../data/motions'

interface GalleryProps {
  sidebarOpen: boolean
  onSidebarToggle: (open: boolean) => void
}

export const Gallery: React.FC<GalleryProps> = ({ sidebarOpen, onSidebarToggle }) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todas'>('Todas')
  const [searchQuery, setSearchQuery] = useState('')

  // Sync category from URL param
  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat && [...categories, 'Todas'].includes(cat)) {
      setSelectedCategory(cat as Category | 'Todas')
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    return motions.filter(m => {
      const matchCat = selectedCategory === 'Todas' || m.category === selectedCategory
      const q = searchQuery.toLowerCase()
      const matchSearch = !q || (
        m.title.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        (m.tags?.some(t => t.toLowerCase().includes(q)) ?? false)
      )
      return matchCat && matchSearch
    })
  }, [selectedCategory, searchQuery])

  const handleMotionClick = (motion: Motion) => {
    navigate(`/motion/${motion.slug}`)
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isOpen={sidebarOpen}
        onClose={() => onSidebarToggle(false)}
        totalCount={motions.length}
        filteredCount={filtered.length}
      />

      {/* Main Content */}
      <main className="flex-1 min-w-0 p-4 md:p-6 page-enter">
        {/* Header */}
        <div className="mb-6">
          <h1
            className="text-2xl font-bold"
            style={{ color: 'var(--n-900)', letterSpacing: '-0.02em' }}
          >
            {selectedCategory === 'Todas' ? '✨ Todas las Animaciones' : `${selectedCategory}`}
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--n-500)' }}>
            {filtered.length} animaciones · CSS puro · Copy-paste ready
          </p>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--n-800)' }}>
              No se encontraron animaciones
            </h3>
            <p className="text-sm" style={{ color: 'var(--n-500)' }}>
              Intenta con otro término de búsqueda
            </p>
            <button
              className="btn btn-primary mt-4"
              onClick={() => { setSearchQuery(''); setSelectedCategory('Todas') }}
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(motion => (
            <MotionCard
              key={motion.id}
              motion={motion}
              onClick={handleMotionClick}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 py-8 text-center" style={{ borderTop: '1px solid var(--glass-border)' }}>
          <p className="text-sm" style={{ color: 'var(--n-400)' }}>
            Mostrando {filtered.length} de {motions.length} animaciones · Material Design Motion
          </p>
        </div>
      </main>
    </div>
  )
}
