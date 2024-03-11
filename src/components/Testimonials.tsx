"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

 const testimonials=[
    {
        quote:"Discovering this freelancing platform has been a game-changer for my business. The quality of talent available is exceptional, and the seamless collaboration tools make project management a breeze. I've found my go-to place for top-notch freelancers!",
        name:"Isabella Rodriguez",
        title:"Founder & CEO, TechInnovate Solutions",
    },
    {
        quote:"As a freelancer, this platform has provided me with a steady stream of interesting projects and a supportive community. The user-friendly interface and transparent payment system make it my preferred platform for connecting with clients and showcasing my skills.",
        name:"Jonathan Carter",
        title:"Freelance Web Developer",
    },
    {
        quote:"I've been on several freelancing websites, but none compare to the level of professionalism and efficiency I've experienced here. The diversity of available services and the responsive customer support make it a reliable choice for any business looking to thrive in the gig economy.",
        name:"Sarah Thompson",
        title:"Marketing Manager, BrightIdeas Agency",
    },
    {
        quote:"Finding skilled freelancers used to be a challenge until I stumbled upon this platform. The vetting process ensures top-quality talent, and the collaborative tools make communication seamless. It's become an integral part of our project outsourcing strategy.",
        name:"Daniel Reynolds",
        title:"Director of Operations, SwiftTech Solutions",
    },
    {
        quote:"As a freelance writer, I appreciate the variety of projects and the fair compensation model on this platform. It's a community that values creativity and professionalism, making it my platform of choice for connecting with clients who appreciate quality content.",
        name:"Emily Foster",
        title:"Freelance Content Creator",
    }
 ]

const Testimonials = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.4] relative
    flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 ">Triumphant Voices: Chronicles of Success in Dynamic Collaboration</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
