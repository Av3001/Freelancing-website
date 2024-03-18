
import { WavyBackground } from '@/components/ui/wavy-background';
import Image from 'next/image';
import React from 'react';

const projects = [
    {
      id: 1,
      companyName: 'The Beats',
      project: 'Content writing and SEO services',
      description: 'Elevated online presence with expertly crafted SEO content, optimizing visibility and driving engagement for client.',
      image:"/assets/logo.png"
    },
    {
      id: 2,
      companyName: 'Tech Innovators Co.',
      project: 'Advanced AI Integration',
      description: 'Developed a cutting-edge AI system for real-time data analysis and predictive modeling.',
      image:""
    },
    {
      id: 3,
      companyName: 'Global Logistics Solutions',
      project: 'Supply Chain Optimization Platform',
      description: 'Created a comprehensive platform to optimize logistics operations and enhance supply chain efficiency.',
      image:""
    },
    {
      id: 4,
      companyName: 'Eco-Friendly Living Inc.',
      project: 'Smart Home Automation',
      description: 'Designed and implemented a smart home automation system to promote energy efficiency and sustainability.',
      image:""
    },
    {
      id: 5,
      companyName: 'InnovateTech Corp.',
      project: 'Next-Gen Financial Software',
      description: 'Developed a revolutionary financial software solution with advanced analytics and security features.',
      image:""
    },
    {
      id: 6,
      companyName: 'HealthTech Solutions',
      project: 'Telemedicine Platform',
      description: 'Built a secure and user-friendly telemedicine platform, connecting healthcare providers and patients seamlessly.',
      image:""
    },
    {
      id: 7,
      companyName: 'Future Media Networks',
      project: 'Content Streaming App',
      description: 'Crafted an engaging content streaming app, providing users with a personalized and immersive media experience.',
      image:""
    },
  ];
  

const Portfolio = () => {
  return (
    <div className="relative h-full flex items-center justify-center w-full overflow-x-hidden">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col h-full "> 
        <h2 className=" mt-40 mb-6 text-4xl md:text-7xl font-bold bg-clip-text 
            text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
        Our Portfolio
        </h2>
        {projects.map((project) => (
          <div key={project.id} className="bg-opacity-20 bg-white mb-5 bg-clip-padding backdrop-filter backdrop-blur-lg border border-solid border-white border-opacity-30 rounded-lg shadow-lg p-4">
            {project.id===1 &&<Image src={project.image} alt="" width={125} height={125} className='w-auto h-auto'/>}
            <h3 className="text-xl font-semibold mb-2 text-white ">{project.companyName}</h3>
            <h4 className='text-xl font-semibold mb-2 text-pink-400 border-solid '>{project.project}</h4>
            <p className='text-white'>{project.description}</p>
          </div>
        ))}
      </WavyBackground>
    </div>
  );
};

export default Portfolio;
