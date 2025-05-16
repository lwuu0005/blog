import './App.css'

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* 个人信息头部 */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold">Limin Wu</h1>
              <h2 className="text-xl opacity-90 mb-4">Full Stack Developer</h2>
              <h2 className="text-xl opacity-90 mb-4">Monash University (Master of IT)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <span className="i-mdi-email mr-2"></span>
                  wlm97sh@gmail.com
                </div>
                <div className="flex items-center">
                  <span className="i-mdi-phone mr-2"></span>
                  {/* 010-1234-1234 */}
                </div>
                <div className="flex items-center">
                  <span className="i-mdi-github mr-2"></span>
                  https://github.com/lwuu0005/
                </div>
                <div className="flex items-center">
                  <span className="i-mdi-web mr-2"></span>
                  {/* morethannin.web.app */}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* 个人介绍 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Introduce</h2>
            <p className="text-gray-700 leading-relaxed">
              毕业于莫纳什大学信息技术硕士学位，并具备一年的全栈开发经验。具备出色的问题解决能力，精通Python、Java等多种编
              程语言。熟练掌握React.js、Vue.js等前端框架以及Flask，Node.js后端框架，能够迅速定位并解决代码中的问题。在全栈
              开发方面经验丰富，擅长团队协作，能够为项目的成功交付做出积极贡献。曾与教育和工程行业的客户合作，具备良好的沟
              通能力，能够深入理解客户需求，并按时交付符合期望的项目成果。

            </p>
          </section>

          {/* 项目展示 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 项目1 */}
              <ProjectCard 
                image="https://via.placeholder.com/400x250?text=Project+1"
                title="E-commerce Platform"
                description="A full-featured online shopping platform with payment integration and inventory management."
              />
              {/* 项目2 */}
              <ProjectCard 
                image="https://via.placeholder.com/400x250?text=Project+2"
                title="Task Management App"
                description="A productivity application for organizing tasks with team collaboration features."
              />
              {/* 项目3 */}
              <ProjectCard 
                image="https://via.placeholder.com/400x250?text=Project+3"
                title="Weather Dashboard"
                description="Real-time weather information with interactive maps and forecasting."
              />
              {/* 项目4 */}
              <ProjectCard 
                image="https://via.placeholder.com/400x250?text=Project+4"
                title="Social Media Analytics"
                description="Data visualization tool for tracking engagement across social platforms."
              />
            </div>
          </section>

          {/* 技能和经验 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 技能 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Skills</h2>
              <div className="space-y-4">
                <SkillItem name="JavaScript/TypeScript" level={90} />
                <SkillItem name="Python(Flask)" level={90} />
                <SkillItem name="React" level={85} />
                <SkillItem name="CSS/HTML" level={85} />
                <SkillItem name="SQL/NO SQL" level={70} />
                <SkillItem name="AWS(EC2,S3,Lamada,Route 53,RDS)" level={50} />
                <SkillItem name="TailwindCSS" level={50} />
                <SkillItem name="Docker" level={50} />
                <SkillItem name="JAVA/Kotlin" level={50} />
                <SkillItem name=".Net/C#" level={50} />
              </div>
            </section>

            {/* 工作经验 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Experience</h2>
              <div className="space-y-4">
                <ExperienceItem 
                  title="Senior Frontend Developer"
                  company="Tech Solutions Inc."
                  period="2020 - Present"
                  description="Lead the frontend team in developing responsive web applications using React and TypeScript."
                />
                <ExperienceItem 
                  title="Frontend Developer"
                  company="Digital Creations"
                  period="2018 - 2020"
                  description="Built and maintained client websites with a focus on performance and accessibility."
                />
                <ExperienceItem 
                  title="Junior Web Developer"
                  company="StartUp Labs"
                  period="2016 - 2018"
                  description="Assisted in developing web applications and learned modern development practices."
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

// 项目卡片组件
function ProjectCard({ image, title, description }: { 
  image: string; 
  title: string; 
  description: string 
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// 技能项组件
function SkillItem({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

// 经验项组件
function ExperienceItem({ 
  title, 
  company, 
  period, 
  description 
}: { 
  title: string; 
  company: string; 
  period: string; 
  description: string 
}) {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 text-gray-600 mb-1">
        <span>{company}</span>
        <span className="hidden sm:block">•</span>
        <span>{period}</span>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}