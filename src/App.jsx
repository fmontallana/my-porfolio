import Card from "./components/Card"
import CursorBlob from "./components/CursorBlob"
import Hero from "./components/Hero"
import SliderTrack from "./components/SliderTrack"
import Projects from "./Projects"

function App() {




  return (
    <>

      {/* <h1 className="relative bg-gray-800 h-auto w-full px-2 py-1 animate-pulse text-sm text-slate-100 text-center z-20">This website is currently under construction.</h1> */}
      <div className="h-full bg-slate-200">
        <Hero />
        <section id="skills" className="flex-shrink-0 h-screen w-full">
          skills
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae, quo maiores cum voluptatibus vel ut dignissimos necessitatibus placeat voluptates laborum perspiciatis alias voluptate. Deserunt corporis vero magnam officiis numquam a doloribus animi impedit dolor blanditiis? Repellendus dicta tempore soluta maxime? Mollitia ratione rem illo aut voluptas quidem! Non dolores sapiente quo modi illo est ratione possimus. Modi cupiditate magni quas, non, praesentium vitae incidunt illo molestias architecto veritatis commodi omnis quia autem atque neque perspiciatis recusandae. Vero doloribus numquam laborum eaque voluptatibus! Possimus accusantium velit ullam totam harum consectetur dignissimos perferendis voluptatem maiores libero earum, nam quos nemo in.
        </section>
        <section id="experience" className="flex-shrink-0 h-screen w-full">
          experience
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae, quo maiores cum voluptatibus vel ut dignissimos necessitatibus placeat voluptates laborum perspiciatis alias voluptate. Deserunt corporis vero magnam officiis numquam a doloribus animi impedit dolor blanditiis? Repellendus dicta tempore soluta maxime? Mollitia ratione rem illo aut voluptas quidem! Non dolores sapiente quo modi illo est ratione possimus. Modi cupiditate magni quas, non, praesentium vitae incidunt illo molestias architecto veritatis commodi omnis quia autem atque neque perspiciatis recusandae. Vero doloribus numquam laborum eaque voluptatibus! Possimus accusantium velit ullam totam harum consectetur dignissimos perferendis voluptatem maiores libero earum, nam quos nemo in.
        </section>
        <section id="projects" className="flex-shrink-0 h-[100$] w-full pb-20 overflow-hidden">
          <Projects />
        </section>
      </div>
    </>
  )
}

export default App
