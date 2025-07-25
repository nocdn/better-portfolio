import NewerAbout from "./NewerAbout"
import NewProjects from "./NewProjects"
import Contact from "./Contact"
import AppearingIcon from "./AppearingIcon"
import { useState } from "react"

function App() {
  return (
    <main className="w-xl mb-32">
      <NewerAbout className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] mt-36 motion-delay-100" />
      <NewProjects className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] motion-delay-200" />
      <Contact className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] mt-12 motion-delay-300" />
    </main>
  )
}

export default App
