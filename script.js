const skillsSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

let animated = false;

function animateSkills() {
    if (animated) return;

    const sectionTop = skillsSection.getBoundingClientRect().top;
    const sectionHeight = skillsSection.offsetHeight;

    const screenHeight = window.innerHeight;

    // Check whether skills section is visible
    if (sectionTop < screenHeight * 0.8 &&
        sectionTop + sectionHeight > 0) {

        progressBars.forEach(bar => {
            bar.classList.add("animate");
        });

        animated = true;
    }
}

// Run when page loads
animateSkills();

// Run when user scrolls
window.addEventListener("scroll", animateSkills);