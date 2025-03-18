
import { useState } from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import TimerApp from "./components/TimerApp"

function App() {
  const [isHide, setIsHide] = useState<boolean>(false)

  return (
    <>
      <div className="">
        <Navbar setIsHide={setIsHide} isHide={isHide} />
        <TimerApp isHide={isHide}  />
      
        <Footer />
      </div>
    </>
  )
}

export default App
