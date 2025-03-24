import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

// import Home from "./pages/Home"
import Quran from "./pages/Quran"


function App() {

  return (
    <>
      <div>
        <Navbar />
          <div className="pt-[5.5rem] font-body">

            {/* <Home /> */}
            <Quran />
            
          </div>
        <Footer />
      </div>
    </>
  )
}

export default App
