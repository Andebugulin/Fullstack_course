sequenceDiagram
participant User
participant Browser
participant server

    User->>Browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/new_note\nRequest Method: POsT
    Browser->>server: send POsT request to /new_note
    server-->>Browser: Respond with status Code: 302 Found\nLocation: /exampleapp/notes
    Browser-->>User: Receive Response with status Code: 302 Found\nRedirect to /exampleapp/notes

    User->>Browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/notes\nRequest Method: GET
    Browser->>server: send GET request to /notes
    server-->>Browser: Respond with status Code: 200 OK
    Browser-->>User: Receive Response with status Code: 200 OK\nDisplay the content of the notes page

    User->>Browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/main.css\nRequest Method: GET
    Browser->>server: send GET request to /main.css
    server-->>Browser: Respond with status Code: 200 OK
    Browser-->>User: Receive Response with status Code: 200 OK\nApply the styles from the Css file

    User->>Browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/main.js\nRequest Method: GET
    Browser->>server: send GET request to /main.js
    server-->>Browser: Respond with status Code: 200 OK
    Browser-->>User: Receive Response with status Code: 200 OK\nExecute the Javascript from the Js file

    User->>Browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/data.json\nRequest Method: GET
    Browser->>server: send GET request to /data.json
    server-->>Browser: Respond with status Code: 200 OK
    Browser-->>User: Receive Response with status Code: 200 OK\nProcess the JsON data
