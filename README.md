# 💻 Animated Skills Section

A responsive **Skills Section** built using **HTML, CSS, and JavaScript**. The project displays multiple technical skills with animated progress bars that fill smoothly when the Skills section comes into view while scrolling.

## 🚀 Features

- 📊 Animated skill progress bars
- 📈 Percentage display for each skill
- 🖱️ Scroll-based animation trigger
- ✨ Smooth CSS transitions
- 🎨 Clean and modern UI
- 📱 Fully responsive design
- 🖥️ Works on desktop, tablet, and mobile
- ⚡ Lightweight and fast
- 🔧 No external libraries required

## 🛠️ Technologies Used

- **HTML5** – Creates the structure of the Skills section
- **CSS3** – Styling, responsive layout, hover effects, and progress animations
- **JavaScript** – Detects scrolling and triggers the progress-bar animation

## 📋 Skills Included

| Skill        | Percentage |
| ------------ | ---------: |
| HTML         |        95% |
| CSS          |        90% |
| JavaScript   |        80% |
| React        |        75% |
| Tailwind Css |        85% |
| Git & GitHub |        70% |

## 📂 Project Structure

```text
29animated-skills/
│
├── index.html
├── style.css
└── script.js
```

## ⚙️ How It Works

1. The HTML file contains the skill names and percentage values.
2. CSS creates the progress bars and smooth width transitions.
3. JavaScript checks whether the Skills section has entered the viewport.
4. When the section becomes visible, JavaScript adds an animation class.
5. The progress bars smoothly increase from `0%` to their defined percentage.

## 🎯 Main JavaScript Concept

The project uses the browser's `getBoundingClientRect()` method to detect the position of the Skills section.

```javascript
const sectionTop = skillsSection.getBoundingClientRect().top;

if (sectionTop < window.innerHeight * 0.8) {
    progressBars.forEach(bar => {
        bar.classList.add("animate");
    });
}
```

## 📱 Responsive Design

The Skills section automatically adjusts according to the screen size:

- **Desktop:** Two-column skill layout
- **Tablet:** Flexible responsive layout
- **Mobile:** Single-column skill layout

CSS media queries are used to make the section mobile-friendly.

## ▶️ How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Scroll down to the Skills section.
5. Watch the progress bars animate automatically.

## 📸 Project Preview

You can add your project screenshot here:

```markdown
![Animated Skills Section](screenshot.png)
```

## 📚 Learning Outcomes

By building this project, you can practice:

- HTML semantic structure
- CSS progress bars
- CSS transitions
- Responsive web design
- JavaScript DOM manipulation
- Scroll event handling
- Viewport detection
- Interactive UI development

## 🔮 Future Improvements

Some possible improvements:

- Add more skills dynamically using JavaScript
- Add skill icons
- Add animation replay when scrolling back to the section
- Use Intersection Observer API
- Add different colors for different skill categories
- Add dark mode

## 👨‍💻 Author

**Prashant Vishwakarma**

Frontend Web Development Project

## 📄 License

This project is open-source and available for learning and personal use.
