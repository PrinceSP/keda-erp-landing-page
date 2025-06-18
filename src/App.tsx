import { useEffect, useRef, useState } from 'react'
import Lenis from "lenis/react"
import { Footer, Hero, Navbar, Partner, Services, Solutions } from './components'
import { PiDotsSixVertical } from 'react-icons/pi'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
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
        <Navbar />
        <Hero />
        <Partner />
        <Solutions />
        <Services/>
        <Footer />
      </div>
    </Lenis>
  )
}

export default App
