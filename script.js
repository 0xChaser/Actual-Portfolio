const nav = document.querySelector(".nav-links");
document.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        nav.classList.remove("nav-links-filled");
    } else {
        nav.classList.add("nav-links-filled");
    }
});



function setActiveLink(activeLink) {
  document.querySelectorAll('.nav-links-item').forEach(link => {
    link.classList.remove('active');
  });

  if (activeLink) {
    activeLink.classList.add('active');
  }
}
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const offset = sectionTop - (window.innerHeight / 2) + (section.offsetHeight / 2);
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

document.querySelectorAll('.nav-links-item').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionId = this.getAttribute('data-section');
    setActiveLink(this);
    scrollToSection(sectionId);
  });
});

window.addEventListener('scroll', () => {
  let currentSection = '';
  const middleOfScreen = window.innerHeight / 2 + window.scrollY;
  const nearBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

  document.querySelectorAll('main > div').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (middleOfScreen > sectionTop && middleOfScreen < sectionBottom) {
      currentSection = section.id;
    }
  });

  if (nearBottom) {
    currentSection = 'studies';
  }

  const activeLink = document.querySelector(`.nav-links-item[data-section="${currentSection}"]`);
  setActiveLink(activeLink);
});



document.querySelectorAll('.projects-card').forEach(card => {
    card.addEventListener('click', function(event) {
        event.stopPropagation();

        const projectName = this.querySelector('.projects-card-name').textContent;
        const description = this.querySelector('.projects-card-description').innerHTML;
        const link = this.querySelector('.projects-card-link').textContent;
        const languages = Array.from(this.querySelectorAll('.projects-card-languages span')).map(span => span.textContent).join(', ');
        const imagePath = this.getAttribute('data-image-path');

        const projectDetailsHTML = `
            <div class="project-details">
                <img src="${imagePath}" alt="${projectName}">
                <h3>${projectName}</h3>
                <p class="tech">${languages}</p>
                <p class="description">${description}</p><br>
                <a href="${link}" class="link">${link}</a> 
            </div>
        `;

        const detailsContainer = document.getElementById('project-details-container');
        detailsContainer.innerHTML = projectDetailsHTML;
        detailsContainer.style.display = 'block';
    });
});

document.addEventListener('click', function(event) {
    const detailsContainer = document.getElementById('project-details-container');

    if (detailsContainer && !detailsContainer.contains(event.target)) {
        detailsContainer.innerHTML = '';
        detailsContainer.style.display = 'none'; 
    }
});




document.querySelectorAll('.projects-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        e.currentTarget.classList.add('hovered');
    });

    card.addEventListener('mouseleave', (e) => {
        e.currentTarget.classList.remove('hovered');
    });
});

function animateText(elementSelector, text1, text2, speed) {
  const element = document.querySelector(elementSelector);
  let isAdding = true;
  let textToUse = text1;
  let index = 0;

  function updateText() {
    setTimeout(() => {
      if (isAdding) {
        if (index < textToUse.length) {
          element.innerHTML = textToUse.slice(0, ++index);
        } else {
          isAdding = false;
          setTimeout(updateText, 1500);
          return;
        }
      } else {
        if (index > 0) {
          element.innerHTML = textToUse.slice(0, --index);
        } else {
          isAdding = true;
          textToUse = textToUse === text1 ? text2 : text1;
          setTimeout(updateText, 500);
          return;
        }
      }
      updateText();
    }, isAdding ? speed : speed * 2);
  }

  updateText();
}

animateText('.pseudo', 'Chaser', 'Florian', 100);





document.addEventListener('DOMContentLoaded', function() {
    const answerDiv = document.querySelector('.chat-answer');
    const buttons = document.querySelectorAll('.chat-container-buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            switch (this.innerText) {
                case 'Just saying Hello !':
                    answerDiv.textContent = 'Hello to you ! Thanks for visiting !';
                    break;
                case 'How can I reach out to you ?':
                    answerDiv.textContent = 'In the footer, you will find all the ways to reach me.';
                    break;
                case 'What techstack did you use for this website ?':
                    answerDiv.textContent = 'This website has been made with HTML, CSS, and Javascript.';
                    break;
                default:
                    answerDiv.textContent = 'Please select a question.';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  var counter = 0;
  var counterDisplay = document.getElementById('counter');

  function updateCounterDisplay() {
    counterDisplay.textContent = counter;
  }

  function atlasOs() {
    const navL = document.querySelector("nav");
    const main = document.querySelector("main");
    const info = document.querySelector(".info-wrapper");
    const troll = document.querySelector("#troll");
    

    function fadeElementOut(element) {
        element.classList.add('fade-out');
        element.addEventListener('animationend', () => {
            element.style.display = 'none';
        });
    }
    
    troll.style.display = 'flex';
    [navL, main, info].forEach(fadeElementOut);
}


document.getElementById('inputButton').addEventListener('click', function() {
  var userInput = document.getElementById('userInput').value.toLowerCase();
  if (userInput === "atlas") {
    enableCounter(); 
  }
});

function enableCounter() {
  var firstStudiesDiv = document.querySelector('.studies-card');
  if (firstStudiesDiv) {
    firstStudiesDiv.addEventListener('click', function() {
      counter += 1;
      updateCounterDisplay();
      if (counter === 418) atlasOs();
    });
  }

  var postmanDiv = document.getElementById('postman');
  if (postmanDiv) {
    postmanDiv.addEventListener('click', function() {
      counter += 100;
      updateCounterDisplay();
      if (counter === 418) atlasOs();
    });
  }
}
});
document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.querySelector('.chat');
    const chatboxToggle = document.getElementById('chatbox');
    const closeButton = document.querySelector('.chat-bar svg');

    chatbox.style.display = 'none';

    chatboxToggle.addEventListener('click', function() {
        if (chatbox.style.display === 'none') {
            chatbox.style.display = 'block';
            chatboxToggle.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', function() {
        chatbox.style.display = 'none';
        chatboxToggle.style.display = 'block';
    });
});

