particlesJS("particles-js", {
particles: {
    number: { value: 80, density: { enable: true, value_area: 1000 } },
    color: { value: "#ffffff" },
    shape: {
    type: "circle",
    stroke: { width: 0, color: "#000000" },
    polygon: { nb_sides: 6 },
    image: { src: "img/github.svg", width: 80, height: 80 },
    },
    opacity: {
    value: 0.5,
    random: false,
    anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
    value: 2,
    random: true,
    anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
    enable: true,
    distance: 192.28920296125386,
    color: "#ffffff",
    opacity: 0.38457840592250775,
    width: 1,
    },
    move: {
    enable: true,
    speed: 6,
    direction: "none",
    random: false,
    straight: false,
    out_mode: "out",
    bounce: false,
    attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
},
interactivity: {
    detect_on: "window",
    events: {
    onhover: { enable: true, mode: "grab" },
    onclick: { enable: true, mode: "push" },
    resize: true,
    },
    modes: {
    grab: { distance: 400, line_linked: { opacity: 1 } },
    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
    repulse: { distance: 200, duration: 0.4 },
    push: { particles_nb: 4 },
    remove: { particles_nb: 2 },
    },
},
retina_detect: true,
});

const options = document.querySelector(".option-container");
const QUESTIONS = [
{
    name: "Who was the first prime minister of India was?",
    option1: "Indira Gandhi",
    option2: "Manmohan Singh",
    option3: "Jawarlal Nehru",
    option4: "Arwind Kejriwal",
    answer: "Jawarlal Nehru",
},
{
    name: "The number of total oceans in the world are?",
    option1: "6",
    option2: "5",
    option3: "8",
    option4: "7",
    answer: "5",
},
{
    name: "Smallest continent is?",
    option1: "Asia",
    option2: "Africa",
    option3: "Australia",
    option4: "Europe",
    answer: "Australia",
},
{
    name: "Longest river in the world?",
    option1: "Ganga",
    option2: "Nile",
    option3: "Missisipi",
    option4: "Indus",
    answer: "Nile",
},
{
    name: "When is Yoga day celebrated",
    option1: "2nd October",
    option2: "21st June",
    option3: "31st October",
    option4: "14th January",
    answer: "21st June",
},
];
var count = 0;
let question = QUESTIONS[0];

function loadQuestion() {
document.querySelector(".change > span").innerHTML = count + 1;
for (let i = 1; i <= 7; i += 2) {
    options.childNodes[i].style.backgroundColor = "rgba( 255, 255, 255, 0.25 )";
}
document.querySelector(".question").innerHTML = question.name;
document.querySelector(".option1").innerHTML = question.option1;
document.querySelector(".option2").innerHTML = question.option2;
document.querySelector(".option3").innerHTML = question.option3;
document.querySelector(".option4").innerHTML = question.option4;
}

options.addEventListener("click", (e) => {
if (e.target === options) return;

console.log(options.childNodes);
for (let i = 1; i <= 7; i += 2) {
    if (options.childNodes[i].innerHTML === question.answer) {
    options.childNodes[i].style.backgroundColor = "teal";
    } else {
    options.childNodes[i].style.backgroundColor = "orange";
    }
}
setTimeout(() => {
    count++;
    question = QUESTIONS[count];
    if (count === 5) {
    celebrate();
    var element = document.querySelector(".question-box");
    element.remove();
    }
    loadQuestion();
}, 1000);
});
loadQuestion();

function celebrate(){
    var end = Date.now() + (15 * 1000);

// go Buckeyes!
var colors = ['#bb0000', '#ffffff'];

(function frame() {
confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
});
confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
});

if (Date.now() < end) {
    requestAnimationFrame(frame);
}
}());
}