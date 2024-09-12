# Resource Server Documentation

This Resource Server is a RESTful API built with Node.js and Express, designed to manage a collection of resources (such as users, products, or posts) using a MongoDB or SQLite database for data persistence. The server supports basic CRUD operations (Create, Read, Update, Delete) for handling resource data.

Link to POSTMAN Documentation -- https://documenter.getpostman.com/view/32035376/2sAXqndicL#intro

## Base URL
https://resorce-server.onrender.com/api/v1/resources


## Features
- Create a new resource.
- Retrieve all resources.
- Retrieve a specific resource by ID.
- Update a resource's information.
- Delete a resource by ID.

---

## Endpoints Overview

### 1. **GET /resources**
   - **Description**: Retrieve a list of all available resources.
   - **Method**: `GET`
   - **URL**: `/api/v1/resources`
   - **Response**: A JSON array of all resources.

   #### Example Request
   ```bash
   GET https://resorce-server.onrender.com/api/v1/resources
  
  Example Response
{
    "success": true,
    "numOfResources": 12,
    "resources": [
        {
            "_id": "66e2ca2cc56f0ac5ebd0434d",
            "name": "Ogundare Lekan",
            "email": "ogundare.lekan@gmail.com",
            "age": 34,
            "createdAt": "2024-09-12T11:02:04.923Z",
            "updatedAt": "2024-09-12T11:02:04.923Z",
            "__v": 0
        },
        {
            "_id": "66e2c6b7c56f0ac5ebd0434b",
            "name": "Ayodeji Samuel",
            "email": "ayodeji.samuel@gmail.com",
            "age": 32,
            "createdAt": "2024-09-12T10:47:19.924Z",
            "updatedAt": "2024-09-12T10:47:19.924Z",
            "__v": 0
        },
        {
            "_id": "66e2c63dc56f0ac5ebd04349",
            "name": "Jesutayo Coker",
            "email": "tayo.coker@gmail.com",
            "age": 18,
            "createdAt": "2024-09-12T10:45:17.785Z",
            "updatedAt": "2024-09-12T10:45:17.785Z",
            "__v": 0
        },
        {
            "_id": "66e2c5a6ce0893af87b94efd",
            "name": "Aderonke Allison",
            "email": "aderonke.allison@gmail.com",
            "age": 26,
            "createdAt": "2024-09-12T10:42:46.071Z",
            "updatedAt": "2024-09-12T10:42:46.071Z",
            "__v": 0
        },
        {
            "_id": "66e2c4bbce0893af87b94efa",
            "name": "Pelumi Oloruntegbe",
            "email": "oloruntegbe.pelumi@gmail.com",
            "age": 28,
            "createdAt": "2024-09-12T10:38:51.555Z",
            "updatedAt": "2024-09-12T10:38:51.555Z",
            "__v": 0
        },
        {
            "_id": "66e2c4a0ce0893af87b94ef8",
            "name": "Oloruntegbe Clara",
            "email": "oloruntegbeclara@gmail.com",
            "age": 30,
            "createdAt": "2024-09-12T10:38:24.160Z",
            "updatedAt": "2024-09-12T10:38:24.160Z",
            "__v": 0
        },
        {
            "_id": "66e2c463ce0893af87b94ef6",
            "name": "Ademoluti Isaac",
            "email": "ademoluti_isaac@gmail.com",
            "age": 36,
            "createdAt": "2024-09-12T10:37:23.184Z",
            "updatedAt": "2024-09-12T10:37:23.184Z",
            "__v": 0
        },
        {
            "_id": "66e2c437ce0893af87b94ef4",
            "name": "Kehinde Ademola",
            "email": "kehindeademola@gmail.com",
            "age": 35,
            "createdAt": "2024-09-12T10:36:39.189Z",
            "updatedAt": "2024-09-12T10:36:39.189Z",
            "__v": 0
        },
        {
            "_id": "66e2c3c8ce0893af87b94ef1",
            "name": "Akintayo Pridston",
            "email": "akintayo_pridston@gmail.com",
            "age": 30,
            "createdAt": "2024-09-12T10:34:48.732Z",
            "updatedAt": "2024-09-12T10:34:48.732Z",
            "__v": 0
        },
        {
            "_id": "66e2c2fdce0893af87b94eef",
            "name": "Tofunmi Tijani",
            "email": "tofunmi_tijani@gmail.com",
            "age": 25,
            "createdAt": "2024-09-12T10:31:25.170Z",
            "updatedAt": "2024-09-12T10:31:25.170Z",
            "__v": 0
        },
        {
            "_id": "66e2c28fce0893af87b94eed",
            "name": "Christian Nwapka",
            "email": "christiannwakpa@gmail.com",
            "age": 35,
            "createdAt": "2024-09-12T10:29:35.248Z",
            "updatedAt": "2024-09-12T10:29:35.248Z",
            "__v": 0
        },
        {
            "_id": "66e2c191ce0893af87b94eeb",
            "name": "David Adeleke",
            "email": "davidadeleke@gmail.com",
            "age": 32,
            "createdAt": "2024-09-12T10:25:21.517Z",
            "updatedAt": "2024-09-12T10:25:21.517Z",
            "__v": 0
        }
    ]
}


## Endpoints Overview

2. GET /resources/
Description: Retrieve a specific resource by its unique ID.
Method: GET
URL: /api/v1/resources/:resourceId
Route Parameter:
:resourceId - The unique ID of the resource to retrieve.
Response: A JSON object representing the resource if found.

Example Request

GET https://resorce-server.onrender.com/api/v1/resources/612c44d8f1f4de23e47e93c1

Example Response

{
    "success": true,
    "resource": {
        "_id": "66e2ca2cc56f0ac5ebd0434d",
        "name": "Ogundare Lekan",
        "email": "ogundare.lekan@gmail.com",
        "age": 34,
        "createdAt": "2024-09-12T11:02:04.923Z",
        "updatedAt": "2024-09-12T11:02:04.923Z",
        "__v": 0
    }
}


Errors
404 Not Found: If the resource with the specified ID is not found.



3. POST /resources
Description: Create a new resource.
Method: POST
URL: /api/v1/resources
Request Body (JSON):
name (string, required)
email (string)
Response: The newly created resource.
Example Request
bash
Copy code
POST https://resorce-server.onrender.com/api/v1/resources
Content-Type: application/json

{
    "name": "Daniel Olagboye",
    "email": "olagboye_dainel@gmail.com",
    "age": 29
}


Example Response

{
    "success": true,
    "resource": {
        "name": "Daniel Olagboye",
        "email": "olagboye_dainel@gmail.com",
        "age": 29,
        "_id": "66e30090c56f0ac5ebd04358",
        "createdAt": "2024-09-12T14:54:08.402Z",
        "updatedAt": "2024-09-12T14:54:08.402Z",
        "__v": 0
    }
}
Errors
400 Bad Request: If required fields are missing or invalid.



4. PUT /resources/

Description: Update an existing resource's information.
Method: PUT
URL: /api/v1/resources/:resourceId
Route Parameter:
:resourceId - The unique ID of the resource to update.
Request Body (JSON): Fields to update (any combination of the following):
name (string, optional)
email (string)
Response: The updated resource.


Example Request

PUT https://resorce-server.onrender.com/api/v1/resources/612c44d8f1f4de23e47e93c1
Content-Type: application/json

{
  "name": "Adeleke Davido",
  "email": "adelekedavido@gmail.com",
  "age": 30
}

Example Response

{
  "id": "612c44d8f1f4de23e47e93c1",
  "name": "Adeleke Davido",
  "email": "adelekedavido@gmail.com",
  "age": 30,
  "createdAt": "2024-09-10T14:30:00Z"
}

Errors
400 Bad Request: If required fields are missing or invalid.
404 Not Found: If the resource with the specified ID is not found.



5. DELETE /resources/
Description: Delete a resource by its unique ID.
Method: DELETE
URL: /api/v1/resources/:resourceId
Route Parameter:
:resourceId - The unique ID of the resource to delete.
Response: A confirmation message.


Example Request
DELETE https://resorce-server.onrender.com/api/v1/resources/612c44d8f1f4de23e47e93c1


Example Response
{
  "message": "Resource deleted successfully"
}


Errors
404 Not Found: If the resource with the specified ID is not found.
Error Handling
For all endpoints, appropriate error messages will be returned with the corresponding HTTP status codes:

400 Bad Request: If the input data is invalid or missing.
404 Not Found: If the resource (user) is not found.
500 Internal Server Error: If there's a server-side issue.


Technologies Used
Node.js: JavaScript runtime environment.
Express: Web framework for Node.js.
MongoDB: Database for data storage.
Mongoose: ODM for MongoDB and Node.js.
Render: For hosting the API.









