import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Galeria() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    if (!marqueeRef.current) return

    const marquee = marqueeRef.current
    const items = marquee.querySelectorAll('.marquee-item')

    if (items.length === 0) return

    // Clone items for infinite loop
    const itemsArray = Array.from(items)
    itemsArray.forEach(item => {
      const clone = item.cloneNode(true)
      marquee.appendChild(clone)
    })

    const totalWidth = marquee.scrollWidth / 2
    const duration = totalWidth / 100

    gsap.fromTo(
      marquee,
      { x: 0 },
      {
        x: -totalWidth,
        duration: duration,
        repeat: -1,
        ease: 'none',
        modifiers: {
          x: gsap.utils.unitize(x => (parseFloat(x) % -totalWidth) + 'px'),
        },
      }
    )
  }, [])

  const images = [
    'https://picsum.photos/seed/pilates-1/400/300',
    'https://picsum.photos/seed/pilates-2/400/300',
    'https://picsum.photos/seed/pilates-3/400/300',
    'https://picsum.photos/seed/pilates-4/400/300',
    'https://picsum.photos/seed/pilates-5/400/300',
    'https://picsum.photos/seed/pilates-6/400/300',
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-max mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">Nuestro Estudio</h2>
      </div>

      <div className="relative overflow-hidden">
        <div ref={marqueeRef} className="flex gap-4 w-max">
          {images.map((img, idx) => (
            <div key={idx} className="marquee-item flex-shrink-0">
              <img
                src={img}
                alt={`Galería ${idx + 1}`}
                className="w-96 h-80 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  )
}
