import React from 'react';
import { Code, Lightbulb, Target, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Expertise',
      description: 'Specializing in full-stack development with modern JavaScript frameworks',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Combining logical thinking with creative solutions for complex challenges',
    },
    {
      icon: Target,
      title: 'User-Focused',
      description: 'Ensuring every project delivers exceptional user experience',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Driven by genuine enthusiasm for creating impactful web applications',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                My journey into web development started during my computer science studies, where I discovered 
                the perfect blend of logical problem-solving and creative expression. What began as curiosity 
                about how websites work has evolved into a deep passion for crafting digital solutions that make 
                a real difference.
              </p>
              
              <p className="text-lg leading-relaxed">
                As a recent graduate, I specialize in full-stack development with a strong foundation in modern 
                JavaScript frameworks, particularly React and Node.js. My approach combines technical expertise 
                with user-centered design thinking, ensuring that every project not only functions flawlessly 
                but also provides an exceptional user experience.
              </p>
              
              <p className="text-lg leading-relaxed">
                I'm actively seeking opportunities as a full-stack developer where I can contribute my fresh 
                perspective, enthusiasm for learning, and dedication to creating impactful web applications. 
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source 
                projects, or hiking through the beautiful California landscapes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;