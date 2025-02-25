let lbl_houseJoined = document.getElementById("lbl_houseJoined");


let btn_un_gryffindor = document.getElementById("btn_un_gryffindor");
let btn_un_slytherin = document.getElementById("btn_un_slytherin");
let btn_un_hufflepuff = document.getElementById("btn_un_hufflepuff");
let btn_un_ravenclaw = document.getElementById("btn_un_ravenclaw");
let btn_gryffindor = document.getElementById("btn_gryffindor");
let btn_slytherin = document.getElementById("btn_slytherin");
let btn_hufflepuff = document.getElementById("btn_hufflepuff");
let btn_ravenclaw = document.getElementById("btn_ravenclaw");

let trigger_gryffindor = document.getElementById("trigger_gryffindor");
let trigger_slytherin = document.getElementById("trigger_slytherin");
let trigger_hufflepuff = document.getElementById("trigger_hufflepuff");
let trigger_ravenclaw = document.getElementById("trigger_ravenclaw");


// Step 1: Establish a connection to the SignalR hub
// Hint: Use `signalR.HubConnectionBuilder()` to create a new connection.
// Example:
// var connection = new signalR.HubConnectionBuilder().withUrl("/hubs/houseGroup").build();


// Step 2: Handle house joining events when a user clicks a button
// - Attach event listeners to each house button
// - When clicked, send the house name to the server using `connection.send("JoinHouse", houseName)`
// Example:
// btn_house.addEventListener("click", function (event) {
//     connection.send("JoinHouse", "HouseName");
//     event.preventDefault();
// });


// Step 3: Handle notification triggers for each house
// - Attach event listeners to trigger buttons
// - Send a request to notify a specific house using `connection.send("TriggerHouseNotify", houseName)`
// Example:
// trigger_house.addEventListener("click", function (event) {
//     connection.send("TriggerHouseNotify", "HouseName");
//     event.preventDefault();
// });


// Step 4: Handle leaving a house
// - Attach event listeners to 'leave' buttons
// - When clicked, send the house name to the server using `connection.send("LeaveHouse", houseName)`
// Example:
// btn_un_house.addEventListener("click", function (event) {
//     connection.send("LeaveHouse", "HouseName");
//     event.preventDefault();
// });


// Step 5: Handle incoming events from the server
// - Listen for `triggerHouseNotification` and display a success message
// - Listen for `newMemberAddedToHouse` and `newMemberRemovedFromHouse` and update UI accordingly
// Hint: Use `connection.on(eventName, callbackFunction)`
// Example:
// connection.on("triggerHouseNotification", (houseName) => {
//     toastr.success(`A new notification for ${houseName} has been launched.`);
// });


// Step 6: Manage subscription status
// - Update UI based on the subscription status received from the server
// - Show or hide join/leave buttons accordingly
// - Use a switch statement to handle each house separately
// Example:
// connection.on("subscriptionStatus", (strGroupsJoined, houseName, hasSubscribed) => {
//     if (hasSubscribed) {
//         // Hide join button and show leave button
//     } else {
//         // Show join button and hide leave button
//     }
// });


// Step 7: Start the connection
// - Use `connection.start().then(fulfilled, rejected);`
// - Define what happens on success and failure
// Example:
// function fulfilled() {
//     console.log("Connection established.");
// }
// function rejected() {
//     console.log("Connection failed.");
// }
// connection.start().then(fulfilled, rejected);


// Hints:
// - Use `toastr.success()` and `toastr.warning()` for notifications.
// - Use `addEventListener()` to handle button clicks.
// - Use `connection.send(methodName, argument)` to send data to the server.
// - Use `connection.on(eventName, callback)` to listen for messages from the server.
