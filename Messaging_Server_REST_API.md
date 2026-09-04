# REST API Design for Discord like application

## Servers

|HTTP Method |Endpoint |Description |
|---|---|---|
|GET |/servers |Retrieves all servers a User belongs to |
|GET |/servers/{serverId} |Retrieves a server by id, example: invite link with details about the server |
|POST |/servers |Creates a server resource for Users to join |
|PUT |/servers/{serverId} |Replaces an server resource, example: all information about a server gets updated |
|PATCH |/texts/{serverId} |Replaces parts of the server resource, example: parts of a server information gets updated |
|DELETE |/texts/{serverId} | Deletes a server resource |
