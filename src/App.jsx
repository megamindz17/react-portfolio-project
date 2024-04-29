import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Abilitys from './components/Abilitys/Abilitys'
import Services from './components/Services/Services'
import Portfolios from  './components/Portfolios/Portfolios'
import Numbers from './components/Numbers/Numbers'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='0, 65, 125'
      outerAlpha={0.2}
      innerScale={1.5}
      outerStyle={{
        border:'3px solid #fff'
      }}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Navbar/>
      <Hero/>
      <Abilitys/>
      <Services/>
      <Portfolios/>
      <Numbers/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
