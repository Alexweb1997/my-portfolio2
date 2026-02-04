import { Code, Palette, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            I am a versatile software developer specializing in both web and mobile app development. 
            I build modern, responsive applications and have hands-on experience across the full stack.
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            I'm passionate about technology, innovation, and creating clean, user-focused solutions. 
            I'm highly motivated, collaborative, and always excited to learn and take on new challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center p-4 sm:p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Code className="text-blue-600" size={28} />
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">Full Stack Development</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Experience building complete applications from front-end to back-end with modern technologies
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Palette className="text-blue-600" size={28} />
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">Mobile Development</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Creating cross-platform mobile applications with Flutter and React Native
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-lg hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Rocket className="text-blue-600" size={28} />
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">Payment Solutions</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Delivering secure, high-performance mobile experiences for digital payment systems
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl text-center mb-6 sm:mb-8">Experience</h3>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 pb-4 sm:pb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-0">
                <div>
                  <h4 className="text-lg sm:text-xl">Mobile App Developer</h4>
                  <p className="text-sm sm:text-base text-gray-600">Flutterwave</p>
                </div>
                <div className="sm:text-right text-sm sm:text-base text-gray-500">
                  <p>March 2023 - November 2025</p>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                I design, build, and maintain mobile applications that power Flutterwave's payment solutions. 
                I collaborate closely with product managers, designers, and backend engineers to deliver secure, 
                high-performance mobile experiences.
              </p>
              <ul className="text-sm sm:text-base text-gray-600 space-y-1 list-disc list-inside">
                <li>Collaborated with teams to deliver secure, high-performance experiences</li>
                <li>Integrated APIs and improved app reliability and performance</li>
                <li>Implemented new features enabling seamless digital payments across multiple markets</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 pb-4 sm:pb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-0">
                <div>
                  <h4 className="text-lg sm:text-xl">Mobile App Development Intern</h4>
                  <p className="text-sm sm:text-base text-gray-600">SkySkillHub</p>
                </div>
                <div className="sm:text-right text-sm sm:text-base text-gray-500">
                  <p>September 2021 - November 2022</p>
                  <p>Enugu, Nigeria</p>
                </div>
              </div>
              <ul className="text-sm sm:text-base text-gray-600 space-y-1 list-disc list-inside">
                <li>Developed cross-platform mobile applications using Flutter and React Native</li>
                <li>Integrated REST APIs to enable real-time data handling within the app</li>
                <li>Participated in testing, identifying bugs, and preparing builds for deployment</li>
                <li>Implemented navigation, state management, and reusable widgets/components</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 pb-4 sm:pb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-0">
                <div>
                  <h4 className="text-lg sm:text-xl">Web Development Intern</h4>
                  <p className="text-sm sm:text-base text-gray-600">SkySkillHub</p>
                </div>
                <div className="sm:text-right text-sm sm:text-base text-gray-500">
                  <p>January 2019 - August 2021</p>
                  <p>Enugu, Nigeria</p>
                </div>
              </div>
              <ul className="text-sm sm:text-base text-gray-600 space-y-1 list-disc list-inside">
                <li>Designed and developed responsive websites using HTML, CSS, and JavaScript</li>
                <li>Built mobile-friendly layouts using Flexbox, Grid, and modern front-end practices</li>
                <li>Collaborated with designers to translate UI/UX wireframes into functional webpages</li>
                <li>Used Git/GitHub for version control and team collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl text-center mb-6 sm:mb-8">Education</h3>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
              <div>
                <h4 className="text-lg sm:text-xl mb-2">Higher National Diploma (HND)</h4>
                <p className="text-sm sm:text-base text-gray-600">Computer Science</p>
                <p className="text-sm sm:text-base text-gray-600">Institute of Management & Technology</p>
              </div>
              <div className="sm:text-right text-sm sm:text-base text-gray-500">
                <p>February 2019 - January 2022</p>
                <p>Enugu, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}