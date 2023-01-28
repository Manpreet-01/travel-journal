import React from "react"
import NavBar from "./components/NavBar"
import Travel from "./components/Travel"
import Data from "./Data"
import "./App.css"

 export default function App() {
   const travels = Data.map(item => {
    return (
      <Travel key={item.title}
      img={item.img}
      location={item.location}
      title={item.title}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      />
    )
   })
  return (
    <div>
       <NavBar />
       {travels}
    </div>
  )
}
