document.addEventListener("DOMContentLoaded", function() {
    const projetsLink = document.getElementById("projetsLink");
    const skillLink = document.getElementById("skillLink");

    projetsLink.addEventListener("click", function() {
        const projetSection = document.querySelector(".partie_projets");
        projetSection.scrollIntoView({ behavior: "smooth" });
    });
    skillLink.addEventListener("click", function() {
        const skillSection = document.querySelector(".partie_skills");
        skillSection.scrollIntoView({ behavior: "smooth" });
});

});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded!");

    const skillsData = {
        "HTML": 4,
        "CSS": 4,
        "JS": 3,
        "Git": 3,
        "React": 2,
        // "Python": 3,
        "PowerPoint": 4,
        "Word": 5,
        "Excel + VBA": 4,
        "Power-BI": 3,
        "SharePoint": 4
    };

    const firstSection = document.getElementById("firstSection");
    const secondSection = document.getElementById("secondSection");

    const skillsArray = Object.keys(skillsData);
    const midpoint = Math.ceil(skillsArray.length / 2);
    skillsArray.forEach((skill, index) => {
        const skillDiv = document.createElement("div");
        skillDiv.className = "skill";
    
        const label = document.createElement("span");
        label.innerText = skill;
        skillDiv.appendChild(label);
    
        const randomColor = getRandomColor(); 
    
        const circlesContainer = document.createElement("div");
        for (let i = 1; i <= 5; i++) {
            const circle = document.createElement("div");
            circle.className = "circle";
            if (i <= skillsData[skill]) {
                circle.classList.add("active");
                circle.style.backgroundColor = randomColor; 
            }
            circlesContainer.appendChild(circle);
        }
        skillDiv.appendChild(circlesContainer);
    
        if (index < midpoint) {
            firstSection.appendChild(skillDiv);
        } else {
            secondSection.appendChild(skillDiv);
        }
    });
    
    
});      





// let projects = document.querySelectorAll('.project');
// let currentIndex = 1; 

// function moveSliderTo(index) {
//     projects[currentIndex].classList.remove('center');
//     currentIndex = index;
//     projects[currentIndex].classList.add('center');
//     adjustSides();   
// }

// function adjustSides() {
//     for (let i = 0; i < projects.length; i++) {
//         if (i < currentIndex) {
//             projects[i].classList.remove('right');
//             projects[i].classList.add('left');
//         } else if (i > currentIndex) {
//             projects[i].classList.remove('left');
//             projects[i].classList.add('right');
//         }
//     }
// }

// adjustSides();

// document.addEventListener('DOMContentLoaded', function() {
//     projects.forEach((project, index) => {
//         project.addEventListener('click', function() {
//             moveSliderTo(index);
//         });
//     });
// });