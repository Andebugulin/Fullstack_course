sequenceDiagram
participant Browser as Browser
participant Server as Server

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Server-->> Browser: Process request, create new note (201 OK)
