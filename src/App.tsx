import NewerAbout from "./NewerAbout"
import NewProjects from "./NewProjects"
import Contact from "./Contact"
import Components from "./Components"
import Writing from "./Writing"

function App() {
  return (
    <main className="w-xl mb-24">
      <NewerAbout className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] mt-26 motion-delay-100" />
      <NewProjects className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] motion-delay-200" />
      <Components className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] motion-delay-300" />
      <Writing className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] motion-delay-400" />
      <Contact className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] mt-12 motion-delay-500" />
      {/* Bottom scroll mask to indicate more content */}
      <div
        className="bottom-scroll-mask pointer-events-none"
        aria-hidden="true"
      />
    </main>
  )
}

export default App
