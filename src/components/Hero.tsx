import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kartik-seth-76720724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Kartik0516',
      icon: Github,
    },
    {
      name: 'Email',
      url: 'mailto:sethkartikay59@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold">
              KS
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kartikay Seth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer passionate about creating innovative web solutions
            that bridge technology and user experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            
            <button className="flex items-center gap-2 px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;