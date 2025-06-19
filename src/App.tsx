import { useEffect, useRef, useState } from 'react'
import Lenis from "lenis/react"
import { Footer, Hero, Integration, Navbar, Partner, Pricings, Services, Solutions, ContactModal, ContactForm } from './components'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const lenisRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-dvh">
        <div>
          <div className="loading-block"></div>
          <div className="loading-block"></div>
          <div className="loading-block"></div>
          <div className="loading-block"></div>
        </div>
      </div>
    )
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <Lenis root
      ref={lenisRef}
      options={{
        duration: 0.8,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        lerp: 0.05,
        wheelMultiplier: 0.5,
        touchMultiplier: 1.2,
      }} >
      <div className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar openModal={(open: boolean) => setIsOpen(open)} />
        <Hero />
        <Partner />
        <Solutions />
        <Services />
        <Pricings />
        <Integration />
        <Footer />
        <ContactModal isOpen={isOpen} onClose={onClose} children={<ContactForm />} />
      </div>
    </Lenis>
  )
}

export default App
