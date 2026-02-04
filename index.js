//document.getElementById("count").innerText=5;
// let count = 0;
// let myAge = 17;
// console.log(myAge);
let count = 0;
let countEl = document.getElementById("count-el")

function increment(){
    count +=1;
    console.log("clicked")
    console.log(count)
    countEl.innerText = count;
}
// let username = "Leslie"
// let message = "you have three new notification"
// console.log(username+ ", "+message)
// let messageToUser = username + ", " + message
// console.log(messageToUser)
// let names ="LESLIE"
// let greeting ="hi, my name is "
// let myGreeting = greeting + names
// console.log(myGreeting)
// let welcomeEl= document.getElementById("welcome-el");
// welcomeEl.innerText = greeting + names; 
// welcomeEl.innerText = welcomeEl.innerText + "🙋‍♀️"
// welcomeEl.innerText += "🙋‍♀️"

let saveEl = document.getElementById("save-el");
function save(){
    let countDash =" "+ count +" -" ;
    saveEl.innerText += countDash;
    count = 0;
}
























