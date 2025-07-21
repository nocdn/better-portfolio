import NewAbout from "./NewAbout"
import NewProjects from "./NewProjects"
import { useState, useCallback } from "react"
import { motion } from "motion/react"

function App() {
  const [aboutDotCoords, setAboutDotCoords] = useState(null)
  const [projectDotCoords, setProjectDotCoords] = useState(null)
  const [hoveringOn, setHoveringOn] = useState("about")

  // State for the blue dot's position
  const [xCoord, setXCoord] = useState(100)
  const [yCoord, setYCoord] = useState(100)

  // State for the input fields
  const [inputX, setInputX] = useState("")
  const [inputY, setInputY] = useState("")

  const handleAboutDotLoad = useCallback((rect) => {
    console.log(rect)
    setAboutDotCoords(rect)
  }, [])

  const handleProjectDotLoad = useCallback((rect) => {
    setProjectDotCoords(rect)
  }, [])

  const handleProjectHover = useCallback(() => {
    setHoveringOn("projects")
  }, [])

  const handleAboutHover = useCallback(() => {
    setHoveringOn("about")
  }, [])

  const handleGoto = () => {
    setXCoord(Number(inputX) || 0)
    setYCoord(Number(inputY) || 0)
  }

  return (
    <main className="w-xl relative">
      {aboutDotCoords && projectDotCoords && (
        <motion.div
          className="w-4.5 h-4.5 bg-blue-600 rounded-full absolute"
          initial={{ x: 100, y: 100 }}
          animate={{
            x: xCoord,
            y: yCoord,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />
      )}

      <NewAbout
        onAboutDotLoad={handleAboutDotLoad}
        onHover={handleAboutHover}
        className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[10%] mt-36 motion-delay-100"
      />
      <NewProjects
        onHover={handleProjectHover}
        onDotLoad={handleProjectDotLoad}
        className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[10%] motion-delay-200"
      />
      <input
        type="text"
        value={inputX}
        onChange={(e) => setInputX(e.target.value)}
        placeholder="X"
      />
      <input
        type="text"
        value={inputY}
        onChange={(e) => setInputY(e.target.value)}
        placeholder="Y"
      />
      <button onClick={handleGoto}>goto</button>
    </main>
  )
}

export default App
