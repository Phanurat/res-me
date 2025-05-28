document.addEventListener('DOMContentLoaded', () => {
  // About Me Section
  document.getElementById('about').innerHTML = `
    <br>
    <h2>About Me</h2>
    <p>I am 22 years old, born on September 25, 2001. I have experience in bot automation,
    Facebook scraping, internal system development, machine learning, content creation, 
    and freelance design. I have also worked as a system administrator and computer technician.</p>
  `;

  // Skills Section
  const skills = {
    frontend: ['Laravel', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript', 'Web3.js'],
    backend: ['Node.js', 'Express', 'Python', 'Go', 'PHP','Solidity'],
    ai: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Machine Learning', 'NLP','Anaconda','Hugging Face','Colab','Yolo','ONNX','Panda','Whisper'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'Storj','PHPmyadmin','MariaDB','SQLlite'],
    cloud: ['Google Cloud', 'Docker', 'Cloudflare', 'Storj'],
    server: ['Nginx', 'Apache', 'Caddy', 'Linux Server','DuckDNS'],
    os: ['Linux', 'Ubuntu', 'CentOS', 'MacOs'],
    tools: ['VirtualBox','VMware','Docker','Github','Gitlab','RemixIDE','ENV','PostMan'],
    other: ['SSH','HTTPS','BotAutomation','Domain Name']
  };

  const renderSkillCategory = (name, list) => `
    <div class="skill-category">
      <h3>${name}</h3>
      <div class="skills-list">
        ${list.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
      </div>
    </div>
  `;

  const skillsHTML = Object.entries(skills)
    .map(([key, value]) => renderSkillCategory(key.charAt(0).toUpperCase() + key.slice(1), value))
    .join('');

  document.getElementById('skills').innerHTML = `
    <h2>Skills</h2>
    ${skillsHTML}
  `;

  // Work Experience Section
  document.getElementById('works').innerHTML = `
    <h2>Work Experience</h2>
    <h3>Blockchain Developer - Freelance (2025)</h3>
    <p>Developed smart contracts using Solidity. Deployed with Remix IDE and Caddy on GCP.</p>
    <hr>
    <br>
    <h3>Backend Developer - Outsourced (2024)</h3>
    <p>Worked on bot automation, AI projects with TensorFlow, NumPy, and Pandas.</p>
    <hr>
    <br>
    <h3>DevOps - Friends Solution Co., Ltd. (2023)</h3>
    <p>Installed systems, deployed projects, and analyzed data in a cooperative education setting.</p>
    <hr>
    <br>
    <h3>NSC 25 (2023)</h3>
    <p>Developed Unity3D mobile games for computer science problem-solving.</p>
    <hr>
    <br>
    <h3>Content Creator (2022)</h3>
    <p>Created TikTok content, designed product promotions for Shopee and Lazada.</p>
    <hr>
    <br>
    <h3>Interests</h3>
    <p>Currently focused on Web3, smart contracts, and AI projects with decentralized apps (DApps).</p>
    <hr>
  `;

  // Education Section
  document.getElementById('education').innerHTML = `
    <h2>Education</h2>
    <br>
    <h3>Thonburi University</h3>
    <h4>Data Science and Information Technology</h4>
    <br>
    <hr>
    <h3>Kalasin Vocational College</h3>
    <h4>Information Technology</h4>
    <br>
    <hr>
    <h3>Rongkham School</h3>
    <h4>Language Science</h4>
    <br>
    <hr>
  `;

  // Projects Section
  const projects = [
    {
      title: 'Web3 Dapp',
      link: 'https://cnp-blockchain-energyplus.duckdns.org/',
      desc: 'สร้าง Dapp Web3 ให้กับกระทรวงนวัตกรรม'
    },
    {
      title: 'Model AI Detection Image Processing',
      link: 'https://huggingface.co/Phanurat/Detect-Post-Facebook',
      desc: 'ตรวจจับโพส Facebook ด้วย AI'
    },
    {
      title: 'Dapp create web3 Token crypto',
      link: 'https://github.com/Phanurat/web3.js',
      desc: 'สร้างเว็บ Web3 รับเหรียญจาก Smart Contract'
    },
    {
      title: 'Bot Line Notify',
      link: 'https://www.youtube.com/watch?v=Bh_Ht5fIch8',
      desc: 'ระบบแจ้งเตือนผ่าน LINE ไม่จำกัดข้อความ'
    },
    {
      title: 'Youtube Decentralized Clone',
      link: 'https://github.com/Phanurat/Youtube-Clone',
      desc: 'คล้าย YouTube บนระบบ Decentralized'
    },
    {
      title: 'Storytelling Channel by Whisper',
      link: 'https://www.youtube.com/@MagicofStoryteller',
      desc: 'เล่าเรื่องด้วยเสียงผ่าน Whisper AI'
    },
    {
      title: 'Create NFT to OpenSea',
      link: 'https://opensea.io/account/collected',
      desc: 'สร้างและขาย NFT บน OpenSea'
    }
  ];

  const projectHTML = projects.map(p => `
    <li>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.title}</a>
      <p>${p.desc}</p>
    </li>
  `).join('');

  document.getElementById('projects').innerHTML = `
    <h2>Projects</h2>
    <ul class="projects-list">${projectHTML}</ul>
  `;

  // Contact Section
  document.getElementById('contact').innerHTML = `
    <h2>Contact</h2>
    <div class="contact-links">
      <a href="https://linkedin.com/in/Phanurat" target="_blank">🔗 LinkedIn</a>
      <a href="https://github.com/Phanurat" target="_blank">🐙 GitHub</a>
      <a href="mailto:your.email@example.com">📧 Email</a>
      <a href="https://twitter.com/username" target="_blank">🐦 Twitter</a>
    </div>
  `;

  // Button Scroll Handlers
  const scrollTo = id => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

  document.getElementById('btn-aboutme').addEventListener('click', () => scrollTo('about'));
  document.getElementById('btn-work').addEventListener('click', () => scrollTo('works'));
  document.getElementById('btn-skills').addEventListener('click', () => scrollTo('skills'));
  document.getElementById('btn-projects').addEventListener('click', () => scrollTo('projects'));
  document.getElementById('btn-education').addEventListener('click', () => scrollTo('education'));
  document.getElementById('btn-contact').addEventListener('click', () => scrollTo('contact'));
});
