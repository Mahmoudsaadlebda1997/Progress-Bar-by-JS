const Porgress = document.getElementById('progress');
const PrevBtn = document.getElementById('prev');
const NextBtn = document.getElementById('next');
const circlesArray = document.querySelectorAll('.circle')
let counter = 1;
PrevBtn.addEventListener('click',()=>{
    counter--;
    if(counter < 1){
        counter = 1;
    }
    updateProgress()
})
NextBtn.addEventListener('click',()=>{
    counter++;
    if(counter > circlesArray.length){
        counter = circlesArray.length;
    }
    updateProgress()
})
function updateProgress(){
    circlesArray.forEach((circle,index)=>{
        if(index < counter){
            circle.classList.add('active')
            circle.style.color = 'darkred';
        }else{
            circle.classList.remove('active')
            circle.style.color = '#e0e0e0';
        }
    })
    const activeCircles = document.querySelectorAll('.active'); 
    Porgress.style.width = (activeCircles.length -1) / (circlesArray.length -1) * 100 + '%';
    if(counter===1){
        PrevBtn.disabled = true;
    }else if ( counter=== circlesArray.length){
        NextBtn.disabled = true;
    }
    else {
        PrevBtn.disabled = false;
        NextBtn.disabled = false;
    }

}

// By Lebda