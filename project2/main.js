// const tasks =
//     [
//         {
//             "title": "christy",
//             "img": 'data10.png',
//             "time": 100,
//             "completed": true
//         },
//         {
//             "title": "christy again",
//             "img": 'data11.png',
//             "time": 5,
//             "completed": true
//         },
//         {
//             "title": "Learn Javascript",
//             "img": 'js.webp',
//             "time": 10,
//             "completed": true
//         },
//         {
//             "title": "Learn Figma",
//             "img": 'figma.png',
//             "time": 20,
//             "completed": false
//         },
//         {
//             "title": "Learn p5",
//             "img": 'p5.png',
//             "time": 15,
//             "completed": false
//         }
//     ]

// const toolbox = document.querySelector('#toolbox');
// const completedFilter = document.querySelector('#completed-filter');
// const timeFilter = document.querySelector('#time-filter');
// const timeValue = document.querySelector('output[for="time-filter"]');
// let showCategory = 'all';
// let minTime = 0;

// renderContent();
// updateControls();

// function renderContent() {
//     toolbox.innerHTML = '';

//     for (let i = 0; i < tasks.length; i++) {

//         const task = tasks[i];

//         if (task.time >= minTime) {
//             if (showCategory === 'all' || showCategory === 'completed' && task.completed || showCategory === 'incomplete' && !task.completed) {

//                 const taskElement = document.createElement('div');

//                 taskElement.className = 'task';

//                 if (task.completed) {
//                     taskElement.className += ' completed';
//                 }

//                 taskElement.addEventListener('click', function () {
//                     taskElement.classList.toggle('completed');
//                 });

//                 const img = document.createElement('img');
//                 img.src = 'img/' + task.img;
//                 img.alt = task.title;

//                 taskElement.innerHTML = `<p>${task.title} - ${task.time} hours</p>`
//                 taskElement.appendChild(img);
//                 toolbox.appendChild(taskElement);
//             }
//         }
//     }
// }

// function updateControls() {

//     completedFilter.addEventListener('change', function () {
//         showCategory = completedFilter.value;
//         renderContent();
//     });

//     timeFilter.addEventListener('input', function () {
//         timeValue.textContent = timeFilter.value;
//         minTime = timeFilter.value;
//         renderContent();
//     });
// }
