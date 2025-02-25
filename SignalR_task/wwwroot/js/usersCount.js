


    // Steps for handling SignalR logic (Commented out for reference)

// Step 1: Initialize the connection
// - Create a connection to the SignalR hub using HubConnectionBuilder.
// - Configure the connection settings such as automatic reconnect and transport type.






// Step 2: Handle incoming notifications
// - Define functions that respond to events triggered by the SignalR hub.
// - Example events include updating UI elements when data changes.
// for example, update the total number of users or views  
// - UI: Use document.getElementById("elementId").innerText to update text content.






// Step 3: Invoke server methods
// - Call functions on the server-side hub from the client-side.
// - Example: Notify the server when a new window loads.










// Step 4: Handle connection lifecycle
// - Define functions for successful connection, failed attempts, and retries.
// - UI: Use console.log("message") to debug connection status.









// Step 5: Manage connection events
// - Handle onclose, onreconnected, and onreconnecting events.
// - UI: Change the background color using document.body.style.background = "color".









// Step 6: Start the connection
// - Finally, start the connection and define success and failure handlers.