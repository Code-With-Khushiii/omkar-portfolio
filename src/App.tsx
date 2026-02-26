import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Software Engineer with 4+ years building full stack and cloud-native products using Next.js/React, Angular, Python (FastAPI), and Java (Spring Boot), delivering secure REST APIs, data pipelines, and analytics dashboards. Delivered EV telemetry and cost visualization platforms at Ford and shipped event-driven ingestion on GCP Pub/Sub with Dockerized services deployed to Cloud Run and infrastructure provisioned via Terraform. Improved product performance by reducing Angular UI load times by 30%, executed an 8-week Angular 2→12 migration, and delivered OAuth2/RBAC security controls across internal services and dashboards.";

  const experience = [
    {
      company: "Ford Motor Company",
      role: "Software Engineer",
      location: "Long Beach, CA",
      dates: "Jul. 2025 – Present",
      highlights: [
        "Built cost visualization tools using Next.js and Tailwind, enabling real-time exploration of large datasets (500k+ records) for engineering decision making.",
        "Designed and owned backend services using Python (FastAPI), delivering REST APIs with 99.9% availability consumed by 2+ consumers (internal dashboards and partner integrations).",
        "Engineered and maintained ETL/data pipelines across 3 data domains (BOM, telemetry, cost), processing 100k+ records per day and validating part and variant mappings to support downstream reporting and forecasting.",
        "Established event-driven ingestion using GCP Pub/Sub, decoupling producers and consumers to reduce ingestion latency by 40% and improve reliability and horizontal scalability of backend workflows.",
        "Containerized backend services with Docker and deployed on GCP Cloud Run, provisioning infrastructure using Terraform (IaC) for repeatable deployments across 2+ environments and cutting deployment time by 50%.",
        "Enforced 2-layer security controls using OAuth2 authentication and RBAC authorization, supporting secure access for multiple EV programs and cross-functional teams across internal services and dashboards."
      ]
    },
    {
      company: "Rocket Mortgage",
      role: "Software Engineer Intern",
      location: "Detroit, MI",
      dates: "Jun. 2025 – Jul. 2025",
      highlights: [
        "Orchestrated an AI-assisted incident analysis service integrating 3+ operational tools (GitHub, PagerDuty, Dynatrace) to correlate code changes, alerts, and telemetry for faster incident triage.",
        "Developed responsive web interfaces using Angular, delivering production-ready UI components for internal engineering workflows.",
        "Orchestrated scalable backend APIs using Java Spring Boot, exposing REST endpoints to support incident analysis and dashboard integrations."
      ]
    },
    {
      company: "OpenText",
      role: "Software Engineer",
      location: "Hyderabad, India",
      dates: "Oct. 2020 – Jul. 2023",
      highlights: [
        "Improved application performance by optimizing component architecture, implementing lazy loading, and improving REST API integration patterns.",
        "Developed and maintained scalable Java Spring Boot services using JPA/Hibernate, supporting cross-database operations across 2+ database systems and reducing data inconsistencies in the Exstream product ecosystem.",
        "Delivered an 8-week migration from Angular 2 to Angular 12, upgrading core UI modules while maintaining backward compatibility and release continuity.",
        "Led migration of core functionality to cloud using Spring Cloud and containerized deployments, achieving a 30% reduction in service downtime.",
        "Standardized service deployment workflows using containerization practices to improve release reliability and operational consistency across environments.",
        "Mentored 2–4 interns by guiding migration of test components from Selenium to Cypress, improving UI regression test execution efficiency and reliability."
      ]
    }
  ];

  const projects = [
    {
      title: "Leet2Git",
      subtitle: "Chrome Extension for Automated Code Submissions",
      category: "Browser Extension",
      introduction: "Built a Chrome extension using Angular (TypeScript) to automate end-to-end code submissions to GitHub, implementing secure OAuth authentication and asynchronous background processing.",
      problem: "Developers need seamless automation to submit LeetCode solutions to GitHub without manual copy-paste workflows.",
      objective: "Create a secure, automated Chrome extension that handles OAuth authentication and background processing for reliable GitHub integrations.",
      methodology: [
        "Built Chrome extension using Angular (TypeScript) for robust type-safe development.",
        "Implemented secure OAuth authentication for GitHub API access.",
        "Engineered 3 core components: content scripts for real-time page interaction.",
        "Developed background service workers for asynchronous background processing.",
        "Created OAuth authentication module for secure automation and reliable integrations."
      ],
      results: [
        "Successfully automated end-to-end code submissions to GitHub.",
        "Implemented secure OAuth authentication protecting user credentials.",
        "Enabled reliable background processing without blocking user workflow.",
        "Delivered seamless integration between LeetCode and GitHub platforms."
      ],
      conclusion: "Demonstrated full-stack extension development with security-first design and asynchronous architecture."
    },
    {
      title: "Natural Language to SQL (NL2SQL)",
      subtitle: "AI-Powered Database Querying System",
      category: "AI/ML Application",
      introduction: "Designed and implemented an NLP-to-SQL system that converts natural-language prompts into structured SQL queries, leveraging ChromaDB for schema embeddings and benchmarking outputs on evaluation datasets to validate query-generation performance.",
      problem: "Non-technical users struggle to write SQL queries, requiring an intuitive natural language interface for database interaction.",
      objective: "Convert natural-language prompts into accurate SQL queries using vector embeddings and validation benchmarking.",
      methodology: [
        "Designed NLP-to-SQL system architecture for natural language understanding.",
        "Leveraged ChromaDB for schema embeddings and semantic search.",
        "Stored database schemas and training queries in ChromaDB vector store.",
        "Benchmarked output quality against evaluation datasets.",
        "Validated performance against enterprise-grade workflow requirements."
      ],
      results: [
        "Successfully converted natural language to structured SQL queries.",
        "Achieved accurate query generation through ChromaDB schema embeddings.",
        "Validated performance through comprehensive benchmarking.",
        "Delivered enterprise-grade NLP interface for database querying."
      ],
      conclusion: "Combined modern NLP techniques with vector databases to democratize database access through natural language interfaces."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Languages',
      skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL']
    },
    {
      icon: TrendingUp,
      title: 'Backend',
      skills: ['Spring Boot', 'Spring MVC', 'FastAPI', 'Node.js', 'REST APIs', 'JPA/Hibernate', 'JSP', 'J2EE', 'Nginx']
    },
    {
      icon: Users,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Angular', 'D3.js']
    },
    {
      icon: Lightbulb,
      title: 'Cloud & DevOps',
      skills: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD (Jenkins)', 'PostgreSQL', 'MySQL', 'MongoDB', 'Kafka', 'Object-Oriented Programming', 'Data Structures and Algorithms']
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">OMKAR THIPPARTHI</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Omkar Thipparthi"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              OMKAR THIPPARTHI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
            Full Stack Engineer | React/Next.js | FastAPI | GCP
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              LOS ANGELES, CA, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                💻 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'API AVAILABILITY', value: '99.9%', detail: 'FastAPI REST Services' },
              { label: 'LATENCY REDUCTION', value: '40%', detail: 'GCP Pub/Sub Ingestion' },
              { label: 'DEPLOYMENT TIME', value: '50%', detail: 'Reduction via Terraform' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Full Stack Engineer specializing in cloud-native products, event-driven architectures, and modern frontend frameworks with strong DevOps automation expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Cloud-Native Full Stack',
                detail: 'Built EV telemetry and cost visualization platforms using Next.js, FastAPI, and GCP with 99.9% API availability and 40% latency reduction.'
              },
              {
                icon: Rocket,
                title: 'DevOps & Infrastructure',
                detail: 'Containerized services with Docker/Cloud Run, provisioned infrastructure via Terraform, cutting deployment time by 50% across multi-environment setups.'
              },
              {
                icon: Lightbulb,
                title: 'Frontend Modernization',
                detail: 'Reduced Angular UI load times by 30%, executed 8-week Angular 2→12 migration, and delivered OAuth2/RBAC security controls across services.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Building full stack and cloud-native products across automotive, fintech, and enterprise software sectors.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Browser extensions and AI-powered applications demonstrating full stack and NLP capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in implementation details or architecture patterns?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for technical documentation.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Full stack engineering with modern frontend frameworks, cloud-native backends, and DevOps automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-black tracking-wide">Arizona State University</h3>
                  <p className="text-brown font-medium">Master of Science · Computer Science</p>
                </div>
                <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                  Tempe, AZ
                </div>
              </div>
              <p className="text-brown leading-relaxed font-light">
                Advanced computer science coursework with focus on software engineering and distributed systems.
              </p>
            </div>
            <div className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-black tracking-wide">Jawaharlal Nehru Technological University</h3>
                  <p className="text-brown font-medium">Bachelor of Technology · Computer Science</p>
                </div>
                <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                  India
                </div>
              </div>
              <p className="text-brown leading-relaxed font-light">
                Foundation in computer science fundamentals, algorithms, and software development principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss full stack development, cloud-native architectures, or event-driven systems.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+16025657371"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 602-565-7371
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/omkar-thipparthi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:omkarthipp@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                omkarthipp@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Omkar Thipparthi · Full Stack Engineering & Cloud-Native Development.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;