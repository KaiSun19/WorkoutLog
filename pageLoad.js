export default function pageLoad(content){
    let workoutTitle = document.createElement("h1")
    workoutTitle.textContent = workout
    workoutTitle.classList.add("workoutTitle")
    return workoutTitle
}

/*
export default function titleLoad(workout){
    let workoutTitle = document.createElement("h1")
    workoutTitle.textContent = workout
    workoutTitle.classList.add("workoutTitle")
    return workoutTitle
}
*/