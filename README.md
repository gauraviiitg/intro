# Portfolio Website

This is a personal portfolio website built using React and Webpack. It showcases projects, skills, and contact information.

## 🚀 Features
- Interactive UI with modern design
- Responsive layout for mobile & desktop
- Project showcase with descriptions & links
- Contact form for inquiries
- Smooth animations & transitions

## 🛠️ Tech Stack
- **Frontend:** React, JavaScript, CSS
- **Bundler:** Webpack
- **Deployment:** GitHub Pages / Vercel / Netlify

## 📥 Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/mark-escosura/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   export NODE_OPTIONS=--openssl-legacy-provider
   npm start
   ```
   If using Windows (PowerShell):
   ```powershell
   $env:NODE_OPTIONS="--openssl-legacy-provider"
   npm start
   ```

## 🌍 Deployment
To deploy on GitHub Pages:
```bash
npm run build
npm run deploy
```
For **Vercel** or **Netlify**, simply connect the repo and deploy.

## 🛠 Troubleshooting
If you face **OpenSSL errors** with Node.js 17+, downgrade to Node.js 16:
```bash
nvm install 16
nvm use 16
```

## 📞 Contact
For any queries, reach out via email: [gaurav.choudhary@iiitg.ac.in](mailto:gaurav.choudhary@iiitg.ac.in)

---
💡 **Tip:** Keep your dependencies updated to avoid compatibility issues!
