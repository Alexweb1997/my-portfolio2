import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import zippyEatsImage from 'figma:asset/c52414ae5a96864f9c39efda9b891884867bb3d4.png';

const projects = [
  {
    id: 1,
    title: 'Restaurant Website',
    description: 'Developed modern, responsive restaurant website with online menu and ordering system.',
    image: 'https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZm9vZHxlbnwxfHx8fDE3Njk5NDU0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://emberandash.netlify.app'
  },
  {
    id: 2,
    title: 'eCommerce Website',
    description: 'Created full-featured eCommerce website with integrated payment processing.',
    image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3Njk5ODkxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Node.js', 'Payment Integration', 'Full Stack'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://onyeisiuchenna.wixstudio.com/mysite'
  },
  {
    id: 3,
    title: 'Social Media App',
    description: 'Built social media application with real-time messaging and interactive user features.',
    image: 'https://images.unsplash.com/photo-1762330462311-f75969906e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NzAwNTI4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React Native', 'Real-time', 'Firebase', 'Social Features'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://example.com'
  },
  {
    id: 4,
    title: 'ZippyEats Mobile App',
    description: 'Built for real-time restaurant ordering and delivery services.',
    image: zippyEatsImage,
    tags: ['Flutter', 'Real-time', 'API Integration', 'Delivery'],
    github: 'https://github.com/Alexweb1997',
    demo: zippyEatsImage
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-40 sm:h-48 overflow-hidden block cursor-pointer"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </a>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}