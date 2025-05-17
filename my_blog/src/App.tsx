import './App.css'
import portrait from './assets/portrait.jpg'
import agent from './assets/AIagent.jpg'
import wing from './assets/Wing.jpg'

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* 个人信息头部 */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
              <img 
                src={portrait} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold">吴李岷</h1>
              <h2 className="text-xl opacity-90 mb-4">全栈开发员</h2>
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
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" clip-rule="evenodd"/>
                  </svg>
                  <a href="https://github.com/lwuu0005/" className="font-black hover:underline" target="_blank" rel="noopener noreferrer">
                    https://github.com/lwuu0005/
                  </a>
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
                image= {agent}
                title="智能代理排班"
                description="在微软 AI Agents Hackathon 2025 中，与团队合作开发了一款基于智能代理的排班系统，旨在提升企业在复杂排班场景下的效率和智能化水平。该系统结合了前沿的人工智能技术和现代化的全栈开发框架，实现了高效、智能的排班解决方案。"
                link="https://github.com/JunyIIIChen/working_schedule"
              />
              {/* 项目2 */}
              <ProjectCard 
                image= {wing}
                title="Winged Wonders"
                description="设计并开发了一个旨在教育儿童了解墨尔本濒危鸟类物种的网页应用。该项目使用 Flask、HTML、CSS、JavaScript 和 SQLite 构建，并部署在 AWS 上。该应用允许用户探索濒危鸟类的信息和图片，促进了公众的意识和学习。"
                link="https://github.com/lwuu0005/fit5120"
              />
              {/* 项目3 */}
              {/* <ProjectCard 
                image="https://via.placeholder.com/400x250?text=Project+3"
                title="Weather Dashboard"
                description="Real-time weather information with interactive maps and forecasting."
              />
              <ProjectCard 
                image="https://via.placeholder.com/400x250?text=Project+4"
                title="Social Media Analytics"
                description="Data visualization tool for tracking engagement across social platforms."
              /> */}
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
                  title="前端开发工程师"
                  company="上海津颐冷冻设备工程有限公司"
                  period="2021.07-2022.07"
                  description={
                    <>
                      <p>
                        前端开发工程师
                      </p>
                      <p>
                        • 参与前端技术架构设计与实施，采用 React.js二次开发前端监控系统，开发支持家乐福、沃尔玛等零售巨头的 HVAC 智能监控平台，日均处理设备数据 20W+ 条。
                      </p>
                      <p>
                        • 结合 ECharts 可视化引擎 设计动态数据看板，支持实时曲线、热力图等多种展示方式，让客户直观监控系统运行状态。
                      </p>

                    </>
                  }
                />
                {/* <ExperienceItem 
                  title="Frontend Developer"
                  company="Digital Creations"
                  period="2018 - 2020"
                  description="Built and maintained client websites with a focus on performance and accessibility."
                />
                <ExperienceItem 
                  title="Junior Web Developer"
                  company=""
                  period="2016 - 2018"
                  description="Assisted in developing web applications and learned modern development practices."
                /> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

// 项目卡片组件
function ProjectCard({ 
  image, 
  title, 
  description,
  link,
  linkText = "View Project"
}: { 
  image: string; 
  title: string; 
  description: string;
  link: string;
  linkText?: string;
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          {linkText}
        </a>
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
  description: React.ReactNode;
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