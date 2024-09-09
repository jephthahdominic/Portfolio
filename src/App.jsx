import { GrLinkTop } from "react-icons/gr"
import { Banner } from "./assets/images"
import { ContactMe, Hero, Portfolio} from "./sections"
import { IoIosArrowUp } from "react-icons/io"

function App() {
  return (
    <div className="h-screen w-screen bg-banner bg-cover bg-no-repeat">
      <Hero/>
      <Portfolio />
      <ContactMe />
      <div className="fixed bottom-5 right-5 bg-black bg-opacity-30 p-2 shadow-md z-50">
        <a href="#" className="text-white-400 flex flex-col items-center gap-0">
          <IoIosArrowUp className="text-4xl text-white-400"/>
          <span className="text-xl">Scroll to top</span>
        </a>
      </div>
    </div>
  )
    
  }

export default App
