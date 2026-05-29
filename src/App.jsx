import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Metodo from './components/Metodo'
import Calendario from './components/Calendario'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Metodo />
        <Calendario />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
