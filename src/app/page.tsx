import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header/>
      <Hero/>
      <Projects/>
      <OurServices/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </main>
  )
}
