import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import eventPlannerImage from '../assets/IMG_5856.JPG';
import zippyEatsImage from '../assets/IMG_5806.jpg';
import luxeFashionImage from '../assets/IMG_5855.JPG';
import eduZenImage from '../assets/IMG_5864.JPG';
import realEstateImage from '../assets/istockphoto-2155879454-612x612.jpg';
import fieldServiceImage from '../assets/mobile-worker-header-1024x604.jpg.webp';
import todoListImage from '../assets/to-do-list-app-2.jpg';
import codeNextImage from '../assets/CodeNext_1.width-500.format-webp.webp';

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
    title: 'LuxeFashion',
    description: 'Built a full-featured online clothing store with product catalog, shopping cart, and checkout functionality.',
    image: luxeFashionImage,
    tags: ['React', 'E-commerce', 'Responsive Design', 'Payment Processing'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://luxefashion-project.netlify.app'
  },
  {
    id: 3,
    title: 'ZippyEats Mobile App',
    description: 'Built for real-time restaurant ordering and delivery services.',
    image: zippyEatsImage,
    tags: ['Flutter', 'Real-time', 'API Integration', 'Delivery'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://example.com'
  },
  {
    id: 4,
    title: 'Pesto Restaurant',
    description: 'Created an elegant restaurant website featuring menu showcase, reservation system, and customer testimonials.',
    image: 'https://images.unsplash.com/photo-1704151598190-1a5f411af6b6',
    tags: ['React', 'Restaurant', 'Responsive Design', 'Reservations'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://pesto-restaurant-project.netlify.app'
  },
  {
    id: 5,
    title: 'Event Planner',
    description: 'Developed a comprehensive event planning application with scheduling, guest management, and vendor coordination features.',
    image: eventPlannerImage,
    tags: ['React', 'Event Management', 'Calendar', 'Full Stack'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://event-planner-project1.netlify.app'
  },
  {
    id: 6,
    title: 'EduZen Academy',
    description: 'Created a comprehensive online learning platform with course management, interactive lessons, student progress tracking, and community features.',
    image: eduZenImage,
    tags: ['React', 'Education', 'Learning Platform', 'Full Stack'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://eduzen-academy.netlify.app'
  },
  {
    id: 7,
    title: 'Real Estate Listing',
    description: 'Built a modern real estate platform with property listings, advanced search filters, property details, and virtual tours.',
    image: realEstateImage,
    tags: ['React', 'Real Estate', 'Property Listings', 'Maps'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://real-estate-listing-project.netlify.app'
  },
  {
    id: 8,
    title: 'Pet Care Mobile App',
    description: 'Developed a comprehensive pet care application with pet health tracking, veterinary services, grooming bookings, and community features.',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Pet Care', 'Health Tracking', 'Mobile App'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://preview.builtwithrocket.new/pet-care-qkqfu69'
  },
  {
    id: 9,
    title: 'Sonara Player',
    description: 'Built a modern music streaming player application with playlist management, audio controls, and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Music Player', 'Audio Streaming', 'Mobile'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://preview.builtwithrocket.new/sonara-player-uu3pi80'
  },
  {
    id: 10,
    title: 'Gym Management Mobile App',
    description: 'Created a comprehensive gym management application with membership tracking, workout plans, class scheduling, and progress analytics.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Fitness', 'Membership Management', 'Mobile App'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://preview.builtwithrocket.new/gym-management-9lpq443'
  },
  {
    id: 11,
    title: 'Field Service Worker Mobile App',
    description: 'Developed a field service management application with job scheduling, task tracking, real-time location updates, and work order management.',
    image: fieldServiceImage,
    tags: ['React Native', 'Field Service', 'GPS Tracking', 'Mobile App'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://preview.builtwithrocket.new/field-service-worker-8k6rs24'
  },
  {
    id: 12,
    title: 'To-Do List Mobile App',
    description: 'Built a productivity-focused to-do list application with task organization, reminders, categories, and progress tracking.',
    image: todoListImage,
    tags: ['React Native', 'Productivity', 'Task Management', 'Mobile App'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://preview.builtwithrocket.new/to-do-list-5ih1a25'
  },
  {
    id: 13,
    title: 'CodeNext Generation',
    description: 'Designed a professional consulting firm website with service offerings, case studies, team profiles, and client testimonials.',
    image: codeNextImage,
    tags: ['React', 'Consulting', 'Corporate Website', 'Responsive Design'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://codenext-generation.netlify.app'
  },
  {
    id: 14,
    title: 'Nexus Consulting',
    description: 'Built a modern consulting services website with portfolio showcasing, service details, project analytics, and contact management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Business Solutions', 'Web Design', 'Corporate'],
    github: 'https://github.com/Alexweb1997',
    demo: 'https://nexus-consulting-project.netlify.app'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4">Projects</h2>
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