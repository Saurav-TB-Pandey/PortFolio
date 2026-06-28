# Saurav Kumar's Developer Portfolio (React + Vite)

A premium, high-fidelity developer portfolio website designed for **Saurav Kumar** (Senior Software Engineer L1 & MERN Stack Specialist). Built using **React.js**, **Vite**, and custom premium **Vanilla CSS** featuring a deep space dark theme, glassmorphic card layouts, responsive timelines, and smooth animations.

---

## 🎨 Visual Features & Design Choices

*   **Deep Space Theming:** Styled with deep navy background gradients, glowing borders, and clean typography (Inter/Outfit & Fira Code for code blocks).
*   **Glassmorphism:** Navigation menus, profiles, experience nodes, and project cards feature semi-transparent backgrounds with backdrop blur filters.
*   **Nested Timeline Hierarchy:** The experience section groups multiple roles and promotions at the same company inside a single visual container.
*   **Interactive Forms:** The contact form includes clickable message template chips (💼 Hire, 🤝 Schedule Interview, 💬 Technical Inquiry) that auto-fill details, saving recruiters time.
*   **Responsive Layouts:** Hand-crafted CSS Grid and Flexbox structures ensure the site looks stunning on phones, tablets, and wide-screen desktop displays.

---

## 🛠️ Technology Stack

*   **Core:** React.js (v19)
*   **Build Tool:** Vite (v8)
*   **Icons:** Lucide React (Icons) & Custom SVGs (Social Brands)
*   **Styling:** Custom CSS (Modular and Global stylesheet definitions)

---

## 📂 Project Structure

```text
Portfolio/
├── public/                 # Static assets (Favicons, CV & Resume PDFs)
│   ├── Saurav_Kumar_Resume.pdf
│   └── favicon.svg
├── src/
│   ├── assets/             # Brand logos & graphics
│   ├── components/         # Modular React Components
│   │   ├── Navbar.jsx      # Glassmorphic responsive header
│   │   ├── Hero.jsx        # Landing hero with typing animation
│   │   ├── About.jsx       # VS-Code terminal mock profile card
│   │   ├── Skills.jsx      # linear progress gauges & tech badges
│   │   ├── Experience.jsx  # Hierarchical vertical timeline
│   │   ├── Projects.jsx    # Projects grid with category filters
│   │   └── Contact.jsx     # Form with prefilled templates & Web3Forms
│   ├── App.jsx             # Root layout and component shell
│   ├── index.css           # Global theme variables and keyframes
│   └── main.jsx            # Application entrypoint
├── .env                    # Environment variables (ignored by git)
├── .gitignore              # Defines git-ignored paths
├── index.html              # Main HTML frame (SEO title & description optimized)
└── package.json            # Scripts & node dependencies list
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### 2. Installation
Clone the repository and install all dependencies:
```bash
# Clone the repository
git clone https://github.com/Saurav-TB-Pandey/PortFolio.git

# Enter project directory
cd PortFolio

# Install node modules
npm install
```

### 3. Environment Variables Setup
Create a `.env` file in the root directory and add your Web3Forms access key:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```
*(Get a free access key instantly at [Web3Forms](https://web3forms.com/) by entering your email).*

### 4. Running Locally
Spin up the development server:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) (or the next available port shown in your terminal) to view the live site.

### 5. Production Compilation
Compile and optimize the bundle for production hosting:
```bash
npm run build
```
The compiled files will be output to the `/dist` directory.

---

## 🌐 Deployment

You can deploy the `/dist` folder to any static hosting provider. We recommend:

### **Vercel**
1. Connect your repository to Vercel.
2. In Vercel Project Settings, add the environment variable:
   * **Key:** `VITE_WEB3FORMS_ACCESS_KEY`
   * **Value:** `[Your Web3Forms Key]`
3. Deploy.

### **Netlify**
1. Connect your repository to Netlify.
2. In Site Settings > Environment Variables, add `VITE_WEB3FORMS_ACCESS_KEY`.
3. Deploy.
