// pages/portfolio.js

import React from 'react';
import Head from 'next/head';

const projects = [
    {
      id: 1,
      companyName: 'Tech Innovators Co.',
      project: 'Advanced AI Integration',
      description: 'Developed a cutting-edge AI system for real-time data analysis and predictive modeling.',
    },
    {
      id: 2,
      companyName: 'Global Logistics Solutions',
      project: 'Supply Chain Optimization Platform',
      description: 'Created a comprehensive platform to optimize logistics operations and enhance supply chain efficiency.',
    },
    {
      id: 3,
      companyName: 'Eco-Friendly Living Inc.',
      project: 'Smart Home Automation',
      description: 'Designed and implemented a smart home automation system to promote energy efficiency and sustainability.',
    },
    {
      id: 4,
      companyName: 'InnovateTech Corp.',
      project: 'Next-Gen Financial Software',
      description: 'Developed a revolutionary financial software solution with advanced analytics and security features.',
    },
    {
      id: 5,
      companyName: 'HealthTech Solutions',
      project: 'Telemedicine Platform',
      description: 'Built a secure and user-friendly telemedicine platform, connecting healthcare providers and patients seamlessly.',
    },
    {
      id: 6,
      companyName: 'Future Media Networks',
      project: 'Content Streaming App',
      description: 'Crafted an engaging content streaming app, providing users with a personalized and immersive media experience.',
    },
  ];
  

const Portfolio = () => {
  return (
    <div className='mt-32'>

      <section className="max-w-3xl mx-auto p-4">
        <h2 className=" mt-1 mb-6 text-4xl md:text-7xl font-bold bg-clip-text 
            text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Portfolio</h2>

        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-md p-4 shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2 text-black ">{project.companyName}</h3>
            <h4 className='text-xl font-semibold mb-2 text-pink-400 border-solid rounded border-2 inline-flex border-sky-500 '>{project.project}</h4>
            <p className='text-gray-800'>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
