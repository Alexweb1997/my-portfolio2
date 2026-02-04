import { Mail, MapPin, Phone, Linkedin as LinkedinIcon, Github as GithubIcon } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4 text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-white">Let's work together</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out!
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4 bg-[#334155] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#475569]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg font-semibold text-white">Email</div>
                  <a href="mailto:Onyeisiuchenna@gmail.com" className="text-xs sm:text-sm text-gray-300 hover:text-blue-400 break-all">
                    Onyeisiuchenna@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4 bg-[#334155] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#475569]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-semibold text-white">Phone</div>
                  <a href="tel:+4915123548072" className="text-xs sm:text-sm text-gray-300 hover:text-blue-400">
                    +49 15123548072
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4 bg-[#334155] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#475569]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-semibold text-white">Location</div>
                  <div className="text-xs sm:text-sm text-gray-300">Berlin, Germany</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 bg-[#334155] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#475569]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <LinkedinIcon className="text-white" size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg font-semibold text-white">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/uchenna-onyeisi-4772b060/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-blue-400 break-all">
                    www.linkedin.com/in/uchenna-onyeisi-4772b060/
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 bg-[#334155] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#475569]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <GithubIcon className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-semibold text-white">GitHub</div>
                  <a href="https://github.com/Alexweb1997" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-blue-400">
                    github.com/Alexweb1997
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm mb-1.5 sm:mb-2 text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-[#334155] border border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm mb-1.5 sm:mb-2 text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-[#334155] border border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm mb-1.5 sm:mb-2 text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-[#334155] border border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none text-white placeholder-gray-400"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#475569] text-center text-xs sm:text-sm text-gray-300">
          <p>© 2026 Uchenna Emmanuel Onyeisi. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}