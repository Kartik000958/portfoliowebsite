import React from 'react';
import { ExternalLink, Github, ShoppingCart, User, Hotel } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart functionality, and secure payment processing.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: ShoppingCart,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Kartik0516',
      features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Payment Gateway'],
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive and modern portfolio website showcasing my projects and skills. Built with React and Tailwind CSS, featuring smooth animations and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: User,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Kartik0516',
      features: ['Responsive Design', 'Smooth Animations', 'SEO Optimized', 'Fast Loading'],
    },
    {
      title: 'Hotel Booking Website',
      description: 'A comprehensive hotel booking platform with search functionality, room availability checking, booking management, and user reviews. Features real-time availability and secure reservation system.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Hotel,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Kartik0516',
      features: ['Room Search', 'Booking System', 'User Reviews', 'Payment Integration'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-2 bg-white/90 rounded-lg">
                  <project.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Kartik0516"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;