const connection = new WebSocket("ws://localhost:3000")
const logWindow = document.querySelector("#log-window")

connection.onopen = (event) =>{  
    
    connection.send("Hello from the client!");
} 
connection.onmessage = recieveAmessage(event)

function recieveAmessage(event){

    logWindow.innerHTML = event.data

}


