import About from "./About"
import Card from "./components/Card"
import CursorBlob from "./components/CursorBlob"
import Hero from "./components/Hero"
import SliderTrack from "./components/SliderTrack"
import Projects from "./Projects"
import Skills from "./Skills"

function App() {




  return (
    <>

      {/* <h1 className="relative bg-gray-800 h-auto w-full px-2 py-1 animate-pulse text-sm text-slate-100 text-center z-20">This website is currently under construction.</h1> */}
      <div className=" h-full w-full bg-slate-200">
        <Hero />
        <section id="skills" className="flex-shrink-0 lg:h-screen w-full">
          <Skills />
        </section>
        <section id="projects" className="flex-shrink-0 lg:h-screen w-full overflow-hidden">
          <Projects />
        </section>
        <section id="about" className="flex-shrink-0 lg:h-screen w-full">
          <About />
        </section>
      </div>
    </>
  )
}

export default App
