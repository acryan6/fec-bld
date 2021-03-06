# BLD FEC

### Current Host
The API can currently be found at ?

1. [Bug Ticket API](#bug-ticket-api)
2. [Forum API](#forum-api)
3. [Tag API](#tag-api)

# Bug Ticket API
### List Tickets

Retrieves a list of all bug tickets.

`GET /api/bug`

Response

`Status: 200 OK `

```json
[{
   "title": "Asynchronous Swim",
   "author": {
      "name": "Bailey Theriault",
      "profilePicture": "https://bit.ly/2wJ3yRE"
   },
   "description": "How does this sprint still exist?",
   "threat": "Critical",
   "createdAt": "2020-04-16T16:04:38.597Z",
   "dueDate": "2020-04-20T16:04:38.597Z",
   "completedAt": "Field will not exist unless applicable",
   "id": 1,
   "tags": [
      "Team Exact Science"
   ]
}, ...]
```

___

### Add Bug Ticket

Adds a bug ticket

`POST /api/bug`

Body Parameters

| Parameter             	| Type             	| Description                                 	|
|-----------------------	|------------------	|---------------------------------------------	|
| title                 	| text             	| title of bug                                	|
| author                	| object           	| contains a name & profile picture property  	|
| author.name           	| text             	| name of author                              	|
| author.profilePicture 	| text             	| url link to profile picture                 	|
| description           	| text             	| description of the bug                      	|
| threat                	| text             	| options are Critical/Important/Low-Priority 	|
| tags                  	| array of strings 	| all tags associated with said bug           	|
| dueDate                  | date            	| assigned due date by user                    	|

Response

`Status: 201 CREATED`

`'Ticket ID'`

___

### Update Bug Ticket

Updates a bug ticket

`PATCH /api/bug/:bugId`

Body Parameters

| Parameter             	| Type             	| Description                                 	|
|-----------------------	|------------------	|---------------------------------------------	|
| title                 	| text             	| title of bug                                	|
| author                	| object           	| contains a name & profile picture property  	|
| author.name           	| text             	| name of author                              	|
| author.profilePicture 	| text             	| url link to profile picture                 	|
| description           	| text             	| description of the bug                      	|
| threat                	| text             	| options are Critical/Important/Low-Priority 	|
| tags                  	| array of strings 	| all tags associated with said bug           	|
| dueDate                  | date            	| assigned due date by user                    	|

Response

`Status: 204 No Content`

___

### Resolve Bug Ticket

Mark a bug ticket as completed

`PUT /api/bug/:bugId`

Response

`Status: 204 No Content`

___

# Forum API

### List Forum

Get requested ticket's forum

`GET /api/forum/:bugId`

Response

`Status: 200 OK`

```json
{
   "title": "Asynchronous Swim",
   "author": {
      "name": "Bailey Theriault",
      "profilePicture": "https://bit.ly/2wJ3yRE"
   },
   "description": "How does this sprint still exist?",
   "createdAt": "2020-04-16T16:04:38.597Z",
   "bug": 1,
   "posts": [{
      "author": {
        "name": "Bailey Theriault",
        "profilePicture": "https://bit.ly/2wJ3yRE"
      },
      "createdAt": "2020-04-16T16:04:38.597Z",
      "text": "I've contacted Fred for further information.",
      "images": [
          "https://bit.ly/2wJ3yRE",
          ...
      ]
    }, ...]
}
```

___

### Add Forum Post

Adds a forum post to targeted bug

`POST /api/forum/:bugId`

Body Parameters

| Parameter             	| Type             	| Description                                 	|
|-----------------------	|------------------	|---------------------------------------------	|
| text                 	  | text             	| text of forum post                          	|
| author                	| object           	| contains a name & profile picture property  	|
| author.name           	| text             	| name of author                              	|
| author.profilePicture 	| text             	| url link to profile picture                 	|
| images                 	| array of strings 	| url links to images                         	|

Response

`Status: 201 Created`

___

# Tag API

### List Tags

Lists all tags

`GET /api/tag`

Response

`Status: 200 OK`

```json
[
  {
    "name": "Exact Science"
  },
  {
    "name": "Pallet Town Productions"
  },
  ...
]
```

___

### Add Tag

Add a new tag

`POST /api/tag`

Body Parameters

| Parameter             	| Type             	| Description                                 	|
|-----------------------	|------------------	|---------------------------------------------	|
| name                 	  | text             	| name of tag                                 	|

Response

`Status: 201 Created`

___

### Delete Tag

Deletes a tag by name, case-insensitive

`DELETE /api/tag/:tagName`

Response

`Status: 204 No Content`