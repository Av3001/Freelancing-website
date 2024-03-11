'use client'
import { WavyBackground } from "./ui/wavy-background"

import { AnimatedTooltip } from "./ui/animated-tooltip"
const developers=[

  {
    id:1,
    name:"Dharmendra Yadav",
    designation:"Web Developer ,UI/UX",
    image:"/assets/dhy.jpg"
  },
  {
    id:2,
    name:"Avneet",
    designation:"Data Scientist ,Blockchain Developer",
    image:"/assets/Avn.jpg"
  },
  
  {
    id:3,
    name:"Manas Bhardwaj",
    designation:"Data Engineer ,Web Designer",
    image:"/assets/mana.jpg" 
  }
] 

const Developers = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center ">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full"> 
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
        Meet our developers
        </h2>
        <p className="text-basse md:text-lg text-white text-center mb-4">
        Discover Our Developers: Crafted Solutions, Unleashing Digital Possibilities Together.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip 
            items={developers}

            />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Developers
