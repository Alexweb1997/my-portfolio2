import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold text-blue-600">Uchenna O.</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}