import Header from './components/Header'
import Footer from './components/Footer'
import HeroAnimation from './components/HeroAnimation'
import Gateway from './components/Gateway'
import NewsCarousel from './components/NewsCarousel'
import WhySection from './components/WhySection'
import Excellence from './components/Excellence'
import Labs from './components/Labs'
import MediaQuotes from './components/MediaQuotes'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroAnimation />
        <Gateway />
        <NewsCarousel />
        <WhySection />
        <Excellence />
        <Labs />
        <MediaQuotes />
      </main>
      <Footer />
    </>
  )
}

export default App
