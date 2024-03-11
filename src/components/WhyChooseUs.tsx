"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content=[
    {
        title:"Elite Freelance Solutions for Your Business Growth",
        description:"Explore our comprehensive freelance services tailored to elevate your business to new heights. From skilled professionals in design, development, writing, and more, our freelancers are ready to contribute their expertise to your success",

    },
    {
        title:"Efficient and Affordable Freelance Talent at Your Fingertips",
        description:"Unlock a world of freelance possibilities with our platform. Access a diverse pool of talented freelancers proficient in various domains. Enjoy cost-effective solutions without compromising on quality, giving your projects the edge they need",
    },
    {
        title:"Innovate with Freelance Experts: Your Vision, Our Skills",
        description:"Collaborate with top-tier freelancers who bring creativity and innovation to your projects. Our platform connects you with experts in graphic design, programming, content creation, and more. Let's turn your vision into reality together.",
    },
    {
        title:"Freelance Excellence: Your Project, Our Priority",
        description:"Elevate your project with our dedicated freelance professionals. We prioritize your goals, offering specialized services in web development, marketing, and beyond. Experience the difference of working with freelancers committed to excellence.",
    },
    {
        title:"Seamless Freelance Solutions for Every Task",
        description:"Simplify your project management with our versatile freelance services. Whether you need a one-time task or ongoing support, our platform connects you with skilled freelancers to get the job done efficiently. Streamline your workflow and achieve your goals with ease."
    }
]
const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={content}></StickyScroll>
    </div>
  )
}

export default WhyChooseUs
