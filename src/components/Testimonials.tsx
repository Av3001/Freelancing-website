"use client"
import Link from "next/link"
import projectsData from "../data/freelance_projects.json"
import { BackgroundGradient } from "./ui/background-gradient"
import { Button } from "./ui/moving-border"

interface Testimonials{
    id:number,
    name:string,
    type:string
    description:string
}

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Rust.co: Empowering Success Through Expert Freelancing Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Rust.co excels in freelancing—where expertise meets client satisfaction seamlessly.</p>
        </div>
      </div>
      <div className="mt-20 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {projectsData.testimonials.map((test:Testimonials)=>(
                <div className="flex justify-center" key={test.id}>
                    <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900
                    overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{test.name}</p>
                            <p className="mt-2 rounded border border-t-4 border-b-4 border-l-4 border-r-4
                            ">{test.type}</p>
                            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{test.description}</p>
                            
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
