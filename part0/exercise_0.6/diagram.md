```mermaid
sequenceDiagram
    participant browser
    participant server

     Note right of browser: The javascript contains a event handler for handling submit event when user clicks on the submit button in the form. When the user clicks on the submit button, the event handler saves the user input to the "notes" array. 
     
    Note right of browser: Shortly after, it re-renders the notes on the page without sending any request to the server.

    
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note right of browser: Right after saving the new note to the "notes" array, the browser sends a POST request to the address "new_note_spa". The request specifies the content type as json so the server can appropriately handle the request. The request also contains the new note as json format. The browser does not send any further requests to the server.
    server-->>browser: status code 201. Response: {"message":"note created"}
    deactivate server

    Note left of server: The server responds back to the browser by sending a HTML  status code 201 with a response containing a json object with the following content: {"message":"note created"}


    