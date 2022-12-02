const connection = new WebSocket("ws://localhost:3000")
const logWindow = document.querySelector("#log-window")

connection.onopen = sendAmessage("Hello from the client!")
connection.onmessage = recieveAmessage(event)

function sendAmessage(message){

  connection.send(message)

}


function recieveAmessage(event){

    logWindow.innerHTML = event.data

}


