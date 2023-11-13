sequenceDiagram
participant User
participant Browser
participant Server

    User->>Browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/new_note\nRequest Method: POST
    Browser->>Server: Send POST request to /new_note
    Server-->>Browser: Respond with Status Code: 302 Found\nLocation: /exampleapp/notes
    Browser-->>User: Receive Response with Status Code: 302 Found\nRedirect to /exampleapp/notes

    User->>Browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/notes\nRequest Method: GET
    Browser->>Server: Send GET request to /notes
    Server-->>Browser: Respond with Status Code: 200 OK
    Browser-->>User: Receive Response with Status Code: 200 OK\nDisplay the content of the notes page

    User->>Browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/main.css\nRequest Method: GET
    Browser->>Server: Send GET request to /main.css
    Server-->>Browser: Respond with Status Code: 200 OK
    Browser-->>User: Receive Response with Status Code: 200 OK\nApply the styles from the CSS file

    User->>Browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/main.js\nRequest Method: GET
    Browser->>Server: Send GET request to /main.js
    Server-->>Browser: Respond with Status Code: 200 OK
    Browser-->>User: Receive Response with Status Code: 200 OK\nExecute the JavaScript from the JS file

    User->>Browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/data.json\nRequest Method: GET
    Browser->>Server: Send GET request to /data.json
    Server-->>Browser: Respond with Status Code: 200 OK
    Browser-->>User: Receive Response with Status Code: 200 OK\nProcess the JSON data
