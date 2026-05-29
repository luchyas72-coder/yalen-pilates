import { MessageCircle } from 'lucide-react'

export default function CtaSection() {
  const whatsappNumber = '542215428944'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container-max text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          ¿Lista para <span className="text-violet-600">transformarte</span>?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Contacta con nosotros y comienza tu viaje hacia el bienestar
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white text-lg font-semibold rounded-full hover:bg-rose-700 transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle size={24} />
          Envíanos un mensaje
        </a>
      </div>
    </section>
  )
}
