"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = "Freelance Freedom: Unleash Your Projects, Find Expert Talent. Your Vision, Our Freelancers – Where Dreams and Skills Align Seamlessly."

export default function TagLine() {
  return <div className="w-full text-center flex flex-col p-4 mt-4 " >
    <TextGenerateEffect words={words} />
  </div>
}
