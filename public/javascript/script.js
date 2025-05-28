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
    <br>
    <h3>NSC 25</h3>
    <h4>Competitor 2023</h4>
    <p> Create mobile games with Unity3D About the game: It is a computer science
        problem solving game.
    </p>
    <br>
    <hr>
    <br>
    <h3>Content Creator</h3>
    <h4>Part Time 2022</h4>
    <p> I used to do Content Creator of tiktok platform.and design product promotions
        on Shoppee and Lazada. I have 1 year of internship experience as a computer
        repair technician and have worked as a freelancer in design.
    </p>
    <br>
    <hr>
    <br>
    <h3>Interests</h3>
    <p> Passionate and motivated individual seeking opportunities in Web3 and AI
        domains. Currently focusing on the study and application of Blockchain
        technology and smart contracts. Actively developing a decentralized application
        (DApp) on the Binance Smart Chain Testnet. Eager to leverage my skills and
        knowledge in Web3 and AI to contribute to innovative projects and solutions
    </p>
    <br>
    <hr>
  `
  document.getElementById('education').innerHTML = `
    <h2>Education</h2>
    <hr>
    <br>
    <h3>Thonburi University</h3>
    <h4>Science and Technology</h4>
    <h5>Data science and information Technology</h>5
    <br>
    <br>
    <hr>
    <br>
    <h3>Kalasin Vocational College</h3>
    <h4>Information Technology</h4>
    <br>
    <hr>
    <br>
    <h3>Rongkham School</h3>
    <h4>Language Science</h4>
    <br>
    <hr>
  `

  // เติมเนื้อหา Projects
  const projects = [
    {
      title: 'Web3 Dapp',
      link: 'https://cnp-blockchain-energyplus.duckdns.org/',
      desc: 'สร้าง Dapp Web3 ให้กับกระทรวงนวัตกรรม'
    },
    {
      title: 'Model AI Detection Image Processing',
      link: 'https://huggingface.co/Phanurat/Detect-Post-Facebook',
      desc: 'Model ตัวนี้ใช้สำหรับการตรวจจับโพสของ Facebook เพื่อจะทำการ Detect Layout'
    },
    {
      title: 'Dapp create web3 Token crypto',
      link: 'https://github.com/Phanurat/web3.js',
      desc: 'สร้างเว็บ3 สำหรับการรับเหรียญที่สร้างด้วย Smart Contract'
    },
    {
      title: 'Bot Line Notify',
      link: 'https://www.youtube.com/watch?v=Bh_Ht5fIch8',
      desc: 'ระบบแจ้งเตือน Line Bot แบบไม่จำกัดข้อความ'
    },
    {
      title: 'Website System Youtube Decentralized Database',
      link: 'https://github.com/Phanurat/Youtube-Clone',
      desc: 'ระบบแจ้งเตือน Line Bot แบบไม่จำกัดข้อความ'
    },
    {
      title: 'Youtube Chanel Storyteller By Whisper',
      link: 'https://www.youtube.com/@MagicofStoryteller',
      desc: 'เล่าเรื่องราวด้วยเสียง'
    },
    {
      title: 'Create NFT to OpenSea',
      link: 'https://opensea.io/account/collected',
      desc: 'สร้าง NFT ขายใน OpenSea'
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
