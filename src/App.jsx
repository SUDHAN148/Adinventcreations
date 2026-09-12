import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import WorkWithMe from './components/WorkWithMe.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import SectionSeam from './components/SectionSeam.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionSeam background="var(--white)" />
        <Services />
        <Work />
        <SectionSeam background="var(--navy)" />
        <Process />
        <SectionSeam background="var(--white)" />
        <Testimonials />
        <WorkWithMe />
        <FAQ />
        <SectionSeam background="var(--navy)" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
