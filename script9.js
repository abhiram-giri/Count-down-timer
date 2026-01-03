let count = 0;
let progress =  document.querySelector(".progress-fill");
let intv = setInterval(function(){
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`;
        document.querySelector(".percent").textContent = `${count}%`;
    }
    else{
        document.querySelector(".title").textContent = "Downloaded.";
        clearInterval(intv);
    }

}, 50)