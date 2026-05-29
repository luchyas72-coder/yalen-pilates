import { useState } from 'react'
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'

export default function Calendario() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthName = currentMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)

  const days = []
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const handleDateSelect = (day) => {
    if (day) {
      const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      setSelectedDate(selected)
    }
  }

  const whatsappNumber = '542215428944'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola!%20Me%20gustaría%20reservar%20una%20clase%20para%20${
    selectedDate ? selectedDate.toLocaleDateString('es-ES') : 'una fecha a definir'
  }`

  return (
    <section id="reservar" className="py-24 bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Reserva tu clase</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Selecciona el día que prefieras. Pronto integraremos un sistema de reserva automática.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <h3 className="text-2xl font-bold capitalize">{monthName}</h3>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
              <div key={day} className="text-center font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2 mb-8">
            {days.map((day, idx) => (
              <button
                key={idx}
                onClick={() => handleDateSelect(day)}
                disabled={!day}
                className={`aspect-square rounded-lg font-semibold transition-all ${
                  !day
                    ? 'bg-transparent cursor-default'
                    : selectedDate &&
                      selectedDate.getDate() === day &&
                      selectedDate.getMonth() === currentMonth.getMonth()
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {selectedDate && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-6 text-center">
              <p className="text-gray-700">
                Fecha seleccionada:{' '}
                <span className="font-bold text-violet-600">{selectedDate.toLocaleDateString('es-ES')}</span>
              </p>
            </div>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-violet-600 text-white font-semibold rounded-full hover:bg-rose-700 transition-colors"
          >
            <MessageCircle size={20} />
            Confirmar por WhatsApp
          </a>

          <p className="text-center text-gray-500 text-sm mt-6">
            También puedes contactarnos directamente por WhatsApp para consultar horarios y disponibilidad
          </p>
        </div>
      </div>
    </section>
  )
}
