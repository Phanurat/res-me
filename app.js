const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// serve static files (CSS, JS, images) จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));

// route หน้าแรก ส่งไฟล์ index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// ตัวอย่าง route API ถ้าอยากแยกข้อมูล project หรือ skills มาเรียกจาก client ได้
app.get('/api/projects', (req, res) => {
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
  res.json(projects);
});

// สตาร์ทเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
