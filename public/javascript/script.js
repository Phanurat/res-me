document.addEventListener('DOMContentLoaded', () => {
  // เติมเนื้อหา About
  document.getElementById('about').innerHTML = `
    <br>
    <h2>About Me</h2>
    <p> I am 22 years old, born on September 25, 2001.I have 4 months of experience in
 outsource Developer  Project Bot Automation, Facebook Scrapper by Line API
 Notification, Project web management  and Project Machine Learning and have 4
 months of experience in cooperative education as a system administrator
 responsible for installing the SetUp Project program and setting up various work
 systems. Analyze dataI have 5 months internship experience in online store of
 online store platform. I used to do Content Creator of tiktok platform.and design
 product promotions on Shoppee and Lazada. I have 1 year of internship experience
 as a computer repair technician and have worked as a freelancer in design.</p>
  `;

  // แบ่งหมวดหมู่ Skill
  const skills = {
    frontend: ['Laravel', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript', 'Web3.js'],
    backend: ['Node.js', 'Express', 'Python', 'Go', 'PHP','Solidity'],
    ai: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Machine Learning', 'NLP','Anaconda','Hugging Face','Colab','Yolo','ONNX','Panda','Whisper'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'Storj','PHPmyadmin','MariaDB'],
    cloud: ['Google Cloud', 'Docker', 'Cloudflare', 'Storj'],
    server: ['Nginx', 'Apache', 'Caddy', 'Linux Server','DuckDNS'],
    os: ['Linux', 'Ubuntu', 'CentOS', 'MacOs'],
    tools: ['VirtualBox','VMware','Docker','Github','Gitlab','RemixIDE','ENV','PostMan'],
    other: ['SSH','HTTPS','BotAutomation','Domain Name']
  };

  function renderSkillCategory(categoryName, skillArr) {
    const skillItems = skillArr.map(skill => `<div class="skill-item">${skill}</div>`).join('');
    return `
      <div class="skill-category">
        <h3>${categoryName}</h3>
        <div class="skills-list">${skillItems}</div>
      </div>
    `;
  }

  const skillsHtml = Object.entries(skills).map(([cat, arr]) => {
    const displayName = cat.charAt(0).toUpperCase() + cat.slice(1);
    return renderSkillCategory(displayName, arr);
  }).join('');

  document.getElementById('skills').innerHTML = `
    <h2>Skills</h2>
    ${skillsHtml}
  `;

  document.getElementById('works').innerHTML = `
    <h2>WORK EXPERIENCE</h2>
    <h3>Blockchain Developer</h3>
    <h4>Freelance - 2025</h4>
    <p>Developed and deployed smart contracts using Solidity on the Ethereum blockchain via Remix IDE. Integrated and tested contracts with MetaMask. After completion, deployed the application on Google Cloud Platform (GCP) using Caddy as the web server. Configured DNS settings with the client’s domain for production deployment.</p>
    <br>
    <hr>
    <br>
    <h3>Backend Developer</h3>
    <h4>Outsourced - 2024</h4>
    <p> Recently, I've ventured into development projects as an Outsource Developer.
        Over 4 months, I've immersed myself in bot automation and AI using
        TensorFlow, CNN, NumPy, and Pandas. Notably, I've successfully implemented
        projects such as Facebook Scraper API integration and internal organizational
        management systems.
        Proficient in TensorFlow, CNN, NumPy, and Pandas for AI and automation
        projects.
        Experienced in bot automation and API integration (e.g., Facebook Scraper, LineAPI).
        Skilled in designing and implementing internal management systems for organizations.
        Strong analytical skills with a focus on data-driven decision-making.</p>
    <br>
    <hr>
    <br>
    <h3>DevOps</h3>
    <h4>Friends Solution Co., Ltd. (Cooperative Education) 2023</h4>
    <p> I have 4 months of experience in cooperative education as a system
        administrator responsible for installing the SetUp Project program and setting
        up various work systems. Analyze dataI.
        Deploy project to production.
    </p>
    <br>
    <hr>
  `

  // เติมเนื้อหา Projects
  const projects = [
    {
      title: 'Pipeline Automation with CI/CD for dApps',
      link: 'https://github.com/username/project1',
      desc: 'สร้างระบบอัตโนมัติสำหรับ deploy decentralized applications ด้วย GitHub Actions และ Kubernetes'
    },
    {
      title: 'AI Smart Contract Auditor',
      link: 'https://github.com/username/project2',
      desc: 'พัฒนา AI ช่วยตรวจสอบช่องโหว่ใน smart contract เพื่อเพิ่มความปลอดภัย'
    }
  ];
  const projectsHtml = projects.map(p => `
    <li>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.title}</a>
      <p>${p.desc}</p>
    </li>
  `).join('');
  document.getElementById('projects').innerHTML = `
    <h2>Projects</h2>
    <ul class="projects-list">${projectsHtml}</ul>
  `;

  // เติมเนื้อหา Contact
  document.getElementById('contact').innerHTML = `
    <h2>Contact</h2>
    <div class="contact-links">
      <a href="https://linkedin.com/in/Phanurat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗 LinkedIn</a>
      <a href="https://github.com/Phanurat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🐙 GitHub</a>
      <a href="mailto:your.email@example.com" aria-label="Email">📧 Email</a>
      <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦 Twitter</a>
    </div>
  `;

  // Scroll ปุ่ม Projects
  document.getElementById('btn-projects').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });
});
