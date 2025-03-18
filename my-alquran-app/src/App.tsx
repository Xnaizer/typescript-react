import { useEffect } from "react"


function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.myquran.com/v2/");
        console.log(response);
      } catch (error){
        console.error(`Terjadi Kesalahan ${error}`)
      }
    }
    fetchData();
  }, []);




  return (
    <>

    

    </>
  )
}

export default App
