
let count = 0
let total = 0
let count1 = document.getElementById("count")
let saveel = document.getElementById("save-el")
let total1 = document.getElementById("total-txt")

function increment(){
    count += 1
    count1.innerText=count
}

function save(){
    let countStr = count + " + "
    saveel.textContent += countStr
    total+=count
    count = 0
}

function totalfn(){
    total1.innerText=total
}


