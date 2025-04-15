# Paignton Cricket Club Website

This is the official website for [Paignton Cricket Club](https://paigntoncricketclub.co.uk), built using React and deployed as a static site to AWS S3 with CloudFront CDN for performance and scalability.

## 🚀 Live Site
👉 [https://paigntoncricketclub.co.uk](https://paigntoncricketclub.co.uk)

---

## 🛠 Tech Stack

- **React** + **TypeScript**
- **React Router** for page navigation
- **Bootstrap** for UI styling
- **Decap CMS** (formerly Netlify CMS) for content management via GitHub
- **GitHub Actions** for CI/CD
- **S3 + CloudFront** for static hosting and global delivery
- **Google Analytics** for tracking site activity

---

## ✍️ Content Editing (CMS)

The website includes an integrated CMS at:

```
https://paigntoncricketclub.co.uk/admin
```

- Editors can log in using their GitHub accounts.
- Content updates are written directly to the GitHub repository or via pull requests (depending on config).
- Posts for the homepage are saved as individual JSON files and automatically displayed on the site.

---

## 📦 Development

### Requirements

- Node.js 18+
- Yarn or npm

### Setup

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd paigntoncc
npm install
```

### Environment Variables

Create a `.env` file at the root of your project:

```env
REACT_APP_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

> Do **not** commit `.env` to version control.

---

### Run Dev Server

```bash
npm run dev
# or
npm start
```

---

## 🛡️ Deployment

Deploys are triggered automatically on push to `main` using GitHub Actions:

- `npm run build` is executed
- The output is uploaded to AWS S3
- CloudFront cache is invalidated

Secrets for deployment (e.g., AWS keys, CloudFront distribution ID) are managed in **GitHub Secrets**.

---

## 📄 License

This project is maintained by Paignton Cricket Club. Please contact the club directly if you’d like to contribute or suggest updates.

---

Made with 🏏 and ☀️ in Paignton, Devon
