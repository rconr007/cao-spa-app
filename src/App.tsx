import './App.css'
import './styles.css'; // Import the CSS file
import CaoBadge from './components/CaoBadge'
// import AdvantagesBanner from './components/AdvantagesBanner'
// import BrandLogo from './components/BrandLogo'
import Brand from './components/Brand'
import { TileBanner } from './components/TileBanner'
import { Button } from './components/ui/button';
import { FloatingOrbs } from './components/floating-orbs';

const App = () => {

  return (
    <>
      <div className="grid-container">
        <div className="logo"><Brand /></div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>

          <nav style={{ display: 'flex', justifyContent: 'space-around', marginRight: '20px', color: 'white', position: 'relative', zIndex: 10 }}>
            <span
              style={{ marginRight: '15px', cursor: 'pointer' }}
              className="pointer-events-auto"
            // onClick={() => sceneRef.current?.setActiveDialog('ICO')}
            >
              ICO
            </span>
            <span
              style={{ marginRight: '15px', cursor: 'pointer' }}
              className="pointer-events-auto"
            // onClick={() => sceneRef.current?.setActiveDialog('Token')}
            >
              TOKEN
            </span>
            <span
              style={{ marginRight: '15px', cursor: 'pointer' }}
              className="pointer-events-auto"
            // onClick={() => sceneRef.current?.setActiveDialog('Roadmap')}
            >
              ROADMAP
            </span>
          </nav>

          <Button
            variant="outline"
            className="pointer-events-auto"
          // onClick={() => sceneRef.current?.setActiveDialog('ConnectWallet')}
          >
            Connect Wallet
          </Button>
        </div>
        <div className="hero">
          <h1>The Future of Digital Finance</h1>
          <p style={{ textAlign: 'left', maxWidth: '600px' }}>Join the revolution of decentralized finance with our cutting-edge cryptocurrency platform.
            Experience secure, fast, and innovative trading solutions.</p>
          <div className="flex gap-4 pointer-events-auto">
            <Button
              className="bg-gradient-to-r from-[#002D62] to-[#CE1126] text-white hover:opacity-90 h-14 px-10 text-lg font-bold"
            // onClick={() => sceneRef.current?.setActiveDialog('GetStarted')}
            >
              Join the Tribe
            </Button>
            <Button
              className="bg-gradient-to-r from-[#002D62] to-[#CE1126] text-white hover:opacity-90 h-14 px-10 text-lg font-bold"
            // onClick={() => sceneRef.current?.setActiveDialog('LearnMore')}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="cao-badge">
          <CaoBadge />
        </div>
        <div className="tribe-members">
          <FloatingOrbs
            onOrbClick={(index: number) => console.log('Orb clicked at index:', index)} />
          {/* <div className="member">
            <img src="path/to/cayacoa.jpg" alt="Cayacoa" />
            <p>Cayacoa</p>
          </div>
          <div className="member">
            <img src="path/to/boichio.jpg" alt="Boichio" />
            <p>Boichio</p>
          </div>
          <div className="member">
            <img src="path/to/guarinex.jpg" alt="Guarinex" />
            <p>Guarinex</p>
          </div>*/}
        </div> 
      </div>

      {/* <div className="min-h-screen bg-black flex flex-col"> */}
      {/* <header className="relative flex items-start w-8 h-8" style={{zIndex: 100, width: '5wh', height: '5wh'}}>
        <BrandLogo />
        <Logo />
      </header> */}
      {/* <header className="relative flex items-start">
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
        </div> */}

      <TileBanner text="WELCOME TO CAONABO - THE FUTURE OF CRYPTOCURRENCY - JOIN THE REVOLUTION - SECURE - FAST - RELIABLE - " />
      {/* </main> */}
      {/* <footer>
        <AdvantagesBanner />
      </footer> */}
      {/* </div> */}
    </>
  )
}

export default App
