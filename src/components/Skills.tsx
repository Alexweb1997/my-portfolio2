import { Code, Smartphone, Server, Database, Bot, Sparkles, Cpu, GitBranch, Zap, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 100, icon: Code },
      { name: 'CSS', level: 100, icon: Layers },
      { name: 'JavaScript', level: 100, icon: Code },
      { name: 'React', level: 100, icon: Zap },
      { name: 'Python', level: 100, icon: Code }
    ]
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 100, icon: Smartphone },
      { name: 'Flutter', level: 100, icon: Smartphone },
      { name: 'Dart', level: 100, icon: Code },
      { name: 'Kotlin', level: 100, icon: Smartphone },
      { name: 'Swift', level: 100, icon: Smartphone }
    ]
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 100, icon: Server },
      { name: 'Git/GitHub', level: 100, icon: GitBranch },
      { name: 'Firebase', level: 100, icon: Database },
      { name: 'Supabase', level: 100, icon: Database },
      { name: 'Postman', level: 100, icon: Zap }
    ]
  },
  {
    title: 'AI Tools',
    skills: [
      { name: 'Cursor AI', level: 100, icon: Cpu },
      { name: 'Claude AI', level: 100, icon: Bot },
      { name: 'ChatGPT', level: 100, icon: Sparkles }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-center">{category.title}</h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <IconComponent size={18} className="text-blue-600" />
                          <span className="text-sm sm:text-base text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}