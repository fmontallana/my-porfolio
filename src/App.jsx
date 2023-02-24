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
      <div id="home" className=" h-full w-full bg-slate-200">
        <section id="hero" className="flex-shrink-0 lg:h-screen w-full">
          <Hero />
        </section>
        <section id="skills" className="flex-shrink-0 lg:h-screen w-full">
          <Skills />
        </section>
        <section id="projects" className="flex-shrink-0 w-full overflow-hidden pb-2">
          <Projects />
        </section>
        <section id="about" className="flex-shrink-0 lg:h-96 w-full">
          <About />
        </section>
        <br />
        <footer id="footer" className="bg-slate-800 text-slate-100 flex-shrink-0 py-4 w-full flex flex-col gap-4 justify-end items-center">
          <ul className="role-list list-disc flex justify-center items-center gap-6 ">
            <li className="hover:text-cyan-400 underline list-none"><a href="#home">home</a></li>
            <li className="hover:text-cyan-400 underline"><a href="#skills">skills</a></li>
            <li className="hover:text-cyan-400 underline"><a href="#projects">projects</a></li>
            <li className="hover:text-cyan-400 underline"><a href="/resume.pdf">resume</a></li>
          </ul>
          <p className="text-xs text-slate-300">Build and designed with ❤️ by <apan className="font-semibold"> Fernando Montallana</apan> </p>
        </footer>
      </div>
    </>
  )
}

export default App
