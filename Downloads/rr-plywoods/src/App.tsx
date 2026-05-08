import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for Safari
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector((this as HTMLAnchorElement).getAttribute('href')!)
        target?.scrollIntoView({ behavior: 'smooth' })
      })
    })
  }, [])

  return (
    <div className="relative bg-dark-950 noise-overlay">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
