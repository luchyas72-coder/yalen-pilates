import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Metodo() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.metodo-text', {
        opacity: 0,
        x: -40,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.metodo-image', {
        opacity: 0,
        x: 40,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.stat-item', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none none',
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const highlights = [
    { label: 'Años de experiencia', value: 'Más de 2' },
    { label: 'Alumnas transformadas', value: 'Más de 200' },
    { label: 'Tasa de satisfacción', value: '98%' },
  ]

  return (
    <section id="metodo" ref={containerRef} className="py-24 bg-gray-50">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="metodo-text">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro <span className="text-violet-600">Método</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En Yalen creemos que el pilates es más que un ejercicio, es una transformación. Combinamos técnicas clásicas con enfoque moderno para brindarte resultados visibles y duraderos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Cada sesión está diseñada para fortalecer tu cuerpo, mejorar tu postura y conectar con tu bienestar integral.
            </p>

            <div className="space-y-3 mb-8">
              {['Clases personalizadas', 'Instructoras certificadas', 'Resultados comprobados'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-300">
              {highlights.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="text-3xl font-bold text-violet-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="metodo-image">
            <img
              src="/metodo-image-new.jpg"
              alt="Método Yalen Pilates"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
