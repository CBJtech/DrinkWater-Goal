let goal = 0;
let progress = 0;
let setGoal = document.getElementById('setGoal')

   setGoal.addEventListener('click', function(){
    const goalInput = document.getElementById("goalInput");
    goal = parseInt(goalInput.value);

    if (isNaN(goal) || goal <= 0) {
        alert("Please enter a valid goal.");
        return;
    }

    updateProgress();

   })
 
const drinkWater = document.getElementById('drinkWater');
 drinkWater.addEventListener('click', function(){
    
    if (progress >= goal) {
        alert("You've already reached your goal for today!");
        return;
    }

    progress += 8; // Assuming a standard glass of water is 8 ounces
    updateProgress();


})

const resetProgress = document.getElementById('resetProgress');
resetProgress.addEventListener('click', function(){
    
    progress = 0;
    updateProgress();
})


function updateProgress() {
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    const percentage = Math.min((progress / goal) * 100, 100);
    progressBar.style.width = percentage + "%";
    progressText.textContent = progress + " / " + goal + " ounces";
}
