import Link from "next/link"
import { Spotlight } from "./ui/Spotlight";;
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative
    overflow-hidden mx-auto py-10 md:py-0" 
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        
      <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-32 text-4xl md:text-7xl font-bold bg-clip-text 
            text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Elevate Your Business: Unlock Success with Our Expertise and Innovation!
            </h1>
            <p className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">    
            Welcome to a World of Endless Opportunities!
            Unlock your potential and join our thriving community of freelancers. Whether you're a seasoned professional or just starting your freelance journey, our platform connects you with clients seeking your unique skills. Take control of your work, set your own hours, and build your career on your terms.
            </p>
            <div className="mt-4">
                <Link href={"/services"}>
                  <Button borderRadius="1.75rem" 
                  className="bg-white dark:bg-black text-black dark:text-white
                  border-neutral-200 dark:border-slate-800">Explore Services</Button>
                    
                </Link>
            </div>
      </div>
    </div>
  )
}

export default HeroSection
