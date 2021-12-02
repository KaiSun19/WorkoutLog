/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/*\nCreate list array that stores all workouts as objects that include id to reference object\ncreate removeElements that clears list html\ncreate form at end of list array that can input a new workout\ncreate function that uses form value to create a new workout \nstore list containing all workout objects in a local storage\n\n*/\n/*\nimport pageLoad from \"./pageLoad\";\n*/\n\n\nconst dropDownTitle = document.querySelector(\".dropDownTitle\");\nconst workoutMenu = document.querySelector(\".workoutMenu\");\nconst dataForm = document.querySelector(\".dataForm\");\nconst addWorkoutForm = document.forms.addWorkoutForm;\nconst submitButton = document.querySelector(\"#submit\")\nconst addWorkoutSubmitButton = document.querySelector(\"#addWorkoutSubmit\")\nlet formWorkoutData = document.getElementById(\"workout\")\nconst addWorkoutButton = document.querySelector(\"#addWorkout\")\nconst addWorkoutNameForm = document.forms.addWorkoutNameForm;\nconst workoutListArea = document.querySelector(\".workoutList\") // ul containing workouts\nconst addDataDiv = document.querySelector(\".addData\")\nconst removeDataDiv = document.querySelector(\".removeData\")\nconst addDataButtons = document.getElementsByClassName(\"addDataButton\");\nconst removeDataButtons = document.getElementsByClassName(\"removeDataButton\");\nconst LOCAL_LIST_KEY = \"workout.lists\"\n\n\nlet workoutList = JSON.parse(localStorage.getItem(LOCAL_LIST_KEY)) || [\n    { name : \"Bench Press\",\n        id : \"BenchPressWorkout\"},\n        { name : \"Squat\",\n        id : \"SquatWorkout\"},\n        { name : \"Deadlift\",\n        id : \"DeadLiftWorkout\"}\n]\n\ndropDownTitle.addEventListener(\"click\", ()=>{\n    \n    workoutMenu.classList.toggle(\"active\")\n})\n\nfunction save(key,value){\n    localStorage.setItem(key,JSON.stringify(value))\n}\n\nfunction addWorkout(name){\n\n    let workoutId = name.replace(/\\s/g, '') + \"Workout\";\n    workoutId = workoutId.toString()\n    let workoutObject = {\n        name : name,\n        id : workoutId,\n    }\n    workoutList.push(workoutObject)\n    save(LOCAL_LIST_KEY,workoutList)\n    renderList()\n    addNavButtons()\n\n}\n\nfunction deleteWorkout(event){\n    let closestIcon = event.target.closest(\"i\")\n    let ind = Array.from(removeDataButtons).indexOf(closestIcon)\n    workoutList.splice(ind,1)\n    save(LOCAL_LIST_KEY,workoutList)\n    renderList()\n    addNavButtons()\n}\n\nfunction addNavButtons(){\n    addDataDiv.innerHTML = \"\";\n    removeDataDiv.innerHTML = \"\";\n    for( i = 0 ; i < workoutList.length ; i++){\n        let icon = document.createElement(\"i\")\n        icon.classList = \"fas fa-plus addDataButton\"\n        icon.id = \"na\"\n        addDataDiv.appendChild(icon)\n    }\n    for( i = 0 ; i < workoutList.length ; i++){\n        let icon = document.createElement(\"i\")\n        icon.classList = \"fas fa-minus removeDataButton\"\n        icon.id = \"na\"\n        removeDataDiv.appendChild(icon)\n    }\n    Array.from(addDataButtons).forEach(button => { // gives addDataButtons ability to load AddDataForm when clicked\n        button.addEventListener(\"click\",()=>{\n            dataForm.classList.toggle(\"active\")\n            let workoutValue = button.id\n            formWorkoutData.value = workoutValue;\n        })\n    })\n\n    Array.from(removeDataButtons).forEach(button =>{\n        button.addEventListener(\"click\",()=>{\n            deleteWorkout(event)\n        })\n    })\n    for(i = 0 ; i < workoutList.length ; i++){\n        let workoutId = workoutList[i].id\n        let formButton = addDataButtons[i]\n        addDataButtons[i].id = workoutId\n    }\n\n}\n\nfunction renderList(){\n    workoutListArea.innerHTML = \"\";\n    workoutList.forEach(object =>{\n        let listItem = document.createElement(\"li\")\n        listItem.innerText = object.name.toString()\n        workoutListArea.appendChild(listItem)})\n    }\n\nrenderList()\naddNavButtons()\n\naddWorkoutButton.addEventListener(\"click\",()=>{\n    addWorkoutNameForm.classList.toggle(\"active\")\n})\n\nfunction getWorkoutFormData(){ // gets form data and stores it as a object\n    let formData = new FormData(addWorkoutForm)\n    let dateVal = formData.get(\"date\")\n    let weightVal = formData.get(\"weight\")\n    let setsVal = formData.get(\"sets\")\n    let repsVal = formData.get(\"reps\")\n    let enteredData = {\n        date : dateVal,\n        weight : weightVal,\n        sets: setsVal,\n        reps: repsVal \n    }\n    return enteredData;\n}\n\nfunction getNameFormData(){ // gets addWorkoutNameForm data and adds it to workoutList\n    let formData = new FormData(addWorkoutNameForm)\n    let nameVal = formData.get(\"name\")\n    addWorkout(nameVal);\n}\n\nsubmitButton.addEventListener(\"click\",()=>{ // saves workout data on submit\n    dataForm.classList.toggle(\"active\")\n    console.log(getWorkoutFormData())\n})\n\naddWorkoutSubmitButton.addEventListener(\"click\",()=>{\n    addWorkoutNameForm.classList.toggle(\"active\")\n    getNameFormData()\n})\n\n\n\nfunction DataButtonAddId(){ // automatically enters workout name when form is loaded\n    for(i = 0 ; i < workoutList.length ; i++){\n        let workoutId = workoutList[i].id\n        let formButton = addDataButtons[i]\n        addDataButtons[i].id = workoutId\n    }\n}\n\n\nDataButtonAddId()\n\n\nworkoutListArea.addEventListener(\"click\",(event) =>{\n    let workoutTitle = document.createElement(\"h1\")\n    if(!workoutTitle.classList.contains(\"active\")){\n    workoutTitle.textContent = event.target.closest(\"li\").innerText\n    workoutTitle.classList.add(\"workoutTitle\")\n    workoutTitle.classList.add(\"active\")\n    document.body.appendChild(workoutTitle)\n    }\n})\n\n\n//# sourceURL=webpack://Workout/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;