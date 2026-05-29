import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Servicios() {
  const containerRef = useRef(null)

  useEffect(() => {
    return () => {}
  }, [])

  const planes = [
    {
      frecuencia: 'Una vez por semana',
      precio: '$34.000',
      descripcion: 'Perfecta para comenzar'
    },
    {
      frecuencia: 'Dos veces por semana',
      precio: '$40.000',
      descripcion: 'La más popular',
      destacado: true
    },
    {
      frecuencia: 'Tres veces por semana',
      precio: '$48.000',
      descripcion: 'Máximo compromiso'
    }
  ]

  return (
    <section id="servicios" ref={containerRef} className="py-24 bg-white">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Nuestros servicios</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Plan por mes - Elige la frecuencia que mejor se adapte a tu estilo de vida
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {planes.map((plan, idx) => (
            <div
              key={idx}
              className={`plan-card rounded-2xl p-8 transition-all ${
                plan.destacado
                  ? 'bg-gradient-to-br from-violet-600 to-violet-700 text-white shadow-2xl transform md:scale-105'
                  : 'bg-white border-2 border-gray-100 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-75">
                {plan.descripcion}
              </div>

              <h3 className={`text-xl font-bold mb-4 ${!plan.destacado ? 'text-gray-900' : ''}`}>
                {plan.frecuencia}
              </h3>

              <div className={`text-5xl font-black mb-6 ${!plan.destacado ? 'text-violet-600' : 'text-white'}`}>
                {plan.precio}
              </div>

              <div className={`py-6 border-y ${plan.destacado ? 'border-violet-500' : 'border-gray-200'} mb-6`}>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={18} className={plan.destacado ? 'text-white' : 'text-violet-600'} />
                    <span>Acceso a todas las clases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={18} className={plan.destacado ? 'text-white' : 'text-violet-600'} />
                    <span>Flexibilidad de horarios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={18} className={plan.destacado ? 'text-white' : 'text-violet-600'} />
                    <span>Comunidad Yalen</span>
                  </li>
                </ul>
              </div>

              <a
                href={`https://wa.me/542215428944?text=Hola!%20Me%20interesa%20el%20plan%20de%20${encodeURIComponent(plan.frecuencia)}%20-%20${encodeURIComponent(plan.precio)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-full font-semibold transition-all text-center ${
                  plan.destacado
                    ? 'bg-white text-violet-600 hover:bg-gray-100'
                    : 'bg-violet-600 text-white hover:bg-violet-700'
                }`}
              >
                Elegir plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
