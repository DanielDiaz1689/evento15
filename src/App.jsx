import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SeccionTarjetas from './components/SeccionTarjetas'
import GaleriaScroll from './components/GaleriaScroll'
import Videos from './components/Videos'
import Nosotros from './components/Nosotros'
import Citas from './components/Citas'
import Footer from './components/Footer'
import BotonWhatsApp from './components/BotonWhatsApp'
import CursorSparkle from './components/CursorSparkle'
import { servicios, eventosPrivados, eventosEmpresa } from './data/evento15'

/* Página completa de EVENTO15: una sola vista, scroll continuo */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SeccionTarjetas id="servicios" titulo="Nuestros servicios" items={servicios} />
        <SeccionTarjetas id="eventos-privados" titulo="Eventos privados" items={eventosPrivados} />
        <Nosotros />
        <SeccionTarjetas id="eventos-empresa" titulo="Eventos de empresa" items={eventosEmpresa} />
        <GaleriaScroll />
        <Videos />
        <Citas />
      </main>
      <Footer />
      <BotonWhatsApp />
      <CursorSparkle />
    </>
  )
}
