import './App.css'
import CaoBadge from './components/CaoBadge'
import AdvantagesBanner from './components/AdvantagesBanner'
import BrandLogo from './components/BrandLogo'
import Brand from './components/Brand'
import { TileBanner } from './components/TileBanner'

function App() {

  return (
    <>
  <div className="min-h-screen bg-black flex flex-col">
      {/* <header className="relative flex items-start w-8 h-8" style={{zIndex: 100, width: '5wh', height: '5wh'}}>
        <BrandLogo />
        <Logo />
      </header> */}
      <header className="relative flex items-start">
          <Brand />
        </header>
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <CaoBadge />
        </div>
        <div className="text-center mt-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Welcome to Caonabo
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Experience the future of finance with our revolutionary cryptocurrency platform.
          </p>
          <button className="bg-gradient-to-r from-[#00ff99] to-[#33ccff] text-black font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        <TileBanner text="WELCOME TO CAONABO - THE FUTURE OF CRYPTOCURRENCY - JOIN THE REVOLUTION - SECURE - FAST - RELIABLE - "/>
      </main>
      {/* <footer>
        <AdvantagesBanner />
      </footer> */}
    </div>
    </>
  )
}

export default App
