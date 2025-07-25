import NewerAbout from "./NewerAbout"
import NewProjects from "./NewProjects"
import Contact from "./Contact"

function App() {
  return (
    <main className="w-xl">
      <NewerAbout className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[10%] mt-36 motion-delay-100" />
      <NewProjects className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[10%] motion-delay-200" />
      <Contact className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[10%] mt-12 motion-delay-300" />
    </main>
  )
}

export default App
