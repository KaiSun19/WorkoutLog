/*
Create list array that stores all workouts as objects that include id to reference object
create removeElements that clears list html
create form at end of list array that can input a new workout
create function that uses form value to create a new workout 
store list containing all workout objects in a local storage

*/
/*
import pageLoad from "./pageLoad";
*/


const dropDownTitle = document.querySelector(".dropDownTitle");
const workoutMenu = document.querySelector(".workoutMenu");
const dataForm = document.querySelector(".dataForm");
const addWorkoutForm = document.forms.addWorkoutForm;
const submitButton = document.querySelector("#submit")
const addWorkoutSubmitButton = document.querySelector("#addWorkoutSubmit")
let formWorkoutData = document.getElementById("workout")
const addWorkoutButton = document.querySelector("#addWorkout")
const addWorkoutNameForm = document.forms.addWorkoutNameForm;
const workoutListArea = document.querySelector(".workoutList") // ul containing workouts
const addDataDiv = document.querySelector(".addData")
const removeDataDiv = document.querySelector(".removeData")
const addDataButtons = document.getElementsByClassName("addDataButton");
const removeDataButtons = document.getElementsByClassName("removeDataButton");
const LOCAL_LIST_KEY = "workout.lists"

console.log("hello")


let workoutList = JSON.parse(localStorage.getItem(LOCAL_LIST_KEY)) || [
    { name : "Bench Press",
        id : "BenchPressWorkout"},
        { name : "Squat",
        id : "SquatWorkout"},
        { name : "Deadlift",
        id : "DeadLiftWorkout"}
]

dropDownTitle.addEventListener("click", ()=>{
    
    workoutMenu.classList.toggle("active")
})

function save(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}

function addWorkout(name){

    let workoutId = name.replace(/\s/g, '') + "Workout";
    workoutId = workoutId.toString()
    let workoutObject = {
        name : name,
        id : workoutId,
    }
    workoutList.push(workoutObject)
    save(LOCAL_LIST_KEY,workoutList)
    renderList()
    addNavButtons()

}

function deleteWorkout(event){
    let closestIcon = event.target.closest("i")
    let ind = Array.from(removeDataButtons).indexOf(closestIcon)
    workoutList.splice(ind,1)
    save(LOCAL_LIST_KEY,workoutList)
    renderList()
    addNavButtons()
}

function addNavButtons(){
    addDataDiv.innerHTML = "";
    removeDataDiv.innerHTML = "";
    for( i = 0 ; i < workoutList.length ; i++){
        let icon = document.createElement("i")
        icon.classList = "fas fa-plus addDataButton"
        icon.id = "na"
        addDataDiv.appendChild(icon)
    }
    for( i = 0 ; i < workoutList.length ; i++){
        let icon = document.createElement("i")
        icon.classList = "fas fa-minus removeDataButton"
        icon.id = "na"
        removeDataDiv.appendChild(icon)
    }
    Array.from(addDataButtons).forEach(button => { // gives addDataButtons ability to load AddDataForm when clicked
        button.addEventListener("click",()=>{
            dataForm.classList.toggle("active")
            let workoutValue = button.id
            formWorkoutData.value = workoutValue;
        })
    })

    Array.from(removeDataButtons).forEach(button =>{
        button.addEventListener("click",()=>{
            deleteWorkout(event)
        })
    })
    for(i = 0 ; i < workoutList.length ; i++){
        let workoutId = workoutList[i].id
        let formButton = addDataButtons[i]
        addDataButtons[i].id = workoutId
    }

}

function renderList(){
    workoutListArea.innerHTML = "";
    workoutList.forEach(object =>{
        let listItem = document.createElement("li")
        listItem.innerText = object.name.toString()
        workoutListArea.appendChild(listItem)})
    }

renderList()
addNavButtons()

addWorkoutButton.addEventListener("click",()=>{
    addWorkoutNameForm.classList.toggle("active")
})

function getWorkoutFormData(){ // gets form data and stores it as a object
    let formData = new FormData(addWorkoutForm)
    let dateVal = formData.get("date")
    let weightVal = formData.get("weight")
    let setsVal = formData.get("sets")
    let repsVal = formData.get("reps")
    let enteredData = {
        date : dateVal,
        weight : weightVal,
        sets: setsVal,
        reps: repsVal 
    }
    return enteredData;
}

function getNameFormData(){ // gets addWorkoutNameForm data and adds it to workoutList
    let formData = new FormData(addWorkoutNameForm)
    let nameVal = formData.get("name")
    addWorkout(nameVal);
}

submitButton.addEventListener("click",()=>{ // saves workout data on submit
    dataForm.classList.toggle("active")
    console.log(getWorkoutFormData())
})

addWorkoutSubmitButton.addEventListener("click",()=>{
    addWorkoutNameForm.classList.toggle("active")
    getNameFormData()
})



function DataButtonAddId(){ // automatically enters workout name when form is loaded
    for(i = 0 ; i < workoutList.length ; i++){
        let workoutId = workoutList[i].id
        let formButton = addDataButtons[i]
        addDataButtons[i].id = workoutId
    }
}


DataButtonAddId()


workoutListArea.addEventListener("click",(event) =>{
    let workoutTitle = document.createElement("h1")
    workoutTitle.textContent = event.target.closest("li").innerText
    workoutTitle.classList.add("workoutTitle")
    workoutTitle.classList.add("active")
    document.body.appendChild(workoutTitle)
})
