import { MapPin, Mail, MessageCircle, Instagram } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-gray-900 text-white py-16">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo className="text-xs" />
            </div>
            <p className="text-gray-400">
              Transformando cuerpos y mentes a través del pilates en Berisso.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-violet-600 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-violet-600 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-violet-600 transition-colors">
                  Método
                </a>
              </li>
              <li>
                <a href="#reservar" className="hover:text-violet-600 transition-colors">
                  Reservar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-violet-600 flex-shrink-0" />
                <span>Berisso, Buenos Aires</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-violet-600 flex-shrink-0" />
                <a href="mailto:ayelenemeri973@gmail.com" className="hover:text-violet-600 transition-colors">
                  ayelenemeri973@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={18} className="text-violet-600 flex-shrink-0" />
                <a href="https://wa.me/542215428944" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">
                  +54 9 2215428944
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <a
              href="https://www.instagram.com/yalen_metodopilates/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-violet-600 rounded-lg transition-colors"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© {currentYear} Yalen Metodo Pilates. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
