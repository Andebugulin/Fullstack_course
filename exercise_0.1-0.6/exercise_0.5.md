sequenceDiagram
participant Browser
participant Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>Browser: Respond with spa content (200 OK)

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Browser: Respond with main.css content (200 OK)

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server-->>Browser: Respond with spa.js content (200 OK)

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>Browser: Process the JSON data (200 OK)

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Server-->> Browser: Process request, create new note (201 OK)
