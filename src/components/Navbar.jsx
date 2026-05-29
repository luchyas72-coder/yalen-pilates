import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Método', id: 'metodo' },
    { label: 'Reservar', id: 'reservar' },
    { label: 'Contacto', id: 'contacto' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-max flex items-center justify-between h-20">
        <Logo className="text-sm" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('reservar')}
          className="hidden md:block px-6 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-full hover:bg-rose-700 transition-colors"
        >
          Reservar clase
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container-max py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('reservar')}
              className="w-full mt-2 px-6 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-full hover:bg-rose-700 transition-colors"
            >
              Reservar clase
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
