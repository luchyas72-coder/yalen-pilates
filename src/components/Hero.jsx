import { useEffect, useRef } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  const whatsappNumber = '542215428944'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.1,
        ease: 'power2.out',
      })

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
      })

      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.out',
      })

      gsap.from('.hero-image', {
        opacity: 0,
        x: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="inicio" ref={containerRef} className="pt-32 pb-16 md:pb-24 bg-white">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Pilates que te
              <span className="block text-violet-600">mueve</span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-gray-600 leading-relaxed max-w-md mb-8">
              Clases personalizadas, por mes y a domicilio en Berisso. Transforma tu cuerpo, por dentro y por fuera.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-rose-700 transition-colors"
              >
                <MessageCircle size={20} />
                Consultar por WhatsApp
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById('reservar')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-violet-600 hover:text-violet-600 transition-colors"
              >
                Reservar clase
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/hero-image.jpg"
              alt="Yalen Metodo Pilates - Clase de pilates energética"
              className="w-full h-[600px] object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
