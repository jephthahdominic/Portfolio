import { GrLinkTop } from "react-icons/gr"
import { Banner } from "./assets/images"
import { ContactMe, Hero, Portfolio} from "./sections"
import { IoIosArrowUp } from "react-icons/io"
import Welcome from "./components/Welcome"
import { useState } from "react"

function App() {
  const [appear, setAppear] = useState(true);
  return (
    <div className="h-screen w-screen bg-banner bg-cover bg-no-repeat">
      <Hero/>
      <Portfolio />
      <ContactMe />
      {/* <div className="fixed bottom-5 right-5 bg-black bg-opacity-30 p-2 shadow-md z-50">
        <a href="#" className="text-white-400 flex flex-col items-center gap-0">
          <IoIosArrowUp className="text-4xl text-white-400"/>
          <span className="text-xl">Scroll to top</span>
        </a>
      </div> */}
      <div className={`w-full fixed z-50 top-0 pt-4 flex items-center justify-center ${appear ? 'animate-fade-slow':'hidden'}`}>
        <Welcome appear={appear} setAppear={()=>setAppear()}/>
      </div>
    </div>
  )
    
  }

export default App
