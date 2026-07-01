import { Globe, Smartphone, Wrench, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Web Applications',
    icon: Globe,
    description: 'Projects I built for the web using modern frontend and backend technologies.',
    skills: [
      'Responsive websites using HTML, CSS',
      'Interactive web apps using React',
      'Backend APIs using Node.js + Express',
      'Full-stack applications (frontend + backend integration)',
      'Database integration with MongoDB / PostgreSQL / Supabase',
      'Authentication systems (login / register using JWT)'
    ]
  },
  {
    title: 'Mobile Applications',
    icon: Smartphone,
    description: 'Cross platform mobile apps built with React Native.',
    skills: [
      'Mobile apps for Android and iOS',
      'Built using React Native + Expo',
      'API integration (fetching real data from backend)',
      'Navigation between screens',
      'State management for app data',
      'Responsive UI for different screen sizes'
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    description: 'The languages, tools, and platforms I work with day to day.',
    skills: [
      'JavaScript, TypeScript',
      'Node.js / Express',
      'MongoDB / PostgreSQL / Supabase',
      'Git & GitHub',
      'VS Code'
    ],
    subGroups: [
      {
        title: 'Cloud, Deployment & Services',
        icon: Cloud,
        skills: ['Vercel', 'Fly.io', 'Resend']
      }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="bg-gray-50 p-4 sm:p-6 rounded-lg flex flex-col w-full">
                <div className="flex items-center gap-2 mb-2">
                  <IconComponent size={22} className="text-blue-600" />
                  <h3 className="text-xl sm:text-2xl">{category.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                <ul className="flex flex-col gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>

                {category.subGroups?.map((group) => {
                  const GroupIcon = group.icon;
                  return (
                    <div key={group.title} className="mt-5">
                      <div className="flex items-center gap-2 mb-3">
                        <GroupIcon size={18} className="text-blue-600" />
                        <h4 className="text-base sm:text-lg text-gray-800">{group.title}</h4>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {group.skills.map((skill) => (
                          <li key={skill} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
