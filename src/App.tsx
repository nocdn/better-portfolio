import NewerAbout from "./NewerAbout"
import NewProjects from "./NewProjects"

function App() {
  return (
    <main className="w-xl relative">
      <NewerAbout className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[10%] mt-36 motion-delay-100" />
      <NewProjects className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[10%] motion-delay-200" />
    </main>
  )
}

export default App
