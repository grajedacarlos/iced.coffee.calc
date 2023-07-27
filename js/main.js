//Only on button click
document.querySelector('#yum').addEventListener('click',run)

//get value out of input (number of cups)
function run(){
let cups = document.querySelector('#numberOfCups').value

//convert the value (cups to tablespoons needed)
tablespoons = cups * 1.33

//input the converted value into response
tablespoonResponse = `You will need ${tablespoons} tablespoons of instant coffee =P`

//show the value/response to user
document.querySelector('#numberOfTablespoons').innerText = tablespoonResponse
}

