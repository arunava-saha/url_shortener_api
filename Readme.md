# URL Shortener Service API

### Deploy Link - https://shorturl-nz8a.onrender.com/

This project is a URL shortener service that allows users to submit lengthy URLs, which will be transformed into unique short URLs. The service includes user registration and login functionalities for secure access.

## Table of Contents

1. Installation
2. Usage
   - User Registration
   - User Login
   - URL Shortening
   - Accessing Original URL
3. Technical Details
4. Backend
5. Database
6. Security
7. Documentation
8. Additional Resources
9. Deployment

## Installation

#### Clone the repository:

bash

```
git clone https://github.com/arunava-saha/url_shortener_api.git
```

#### Navigate to the project directory:

bash

```
cd url-shortener-api
```

#### Install dependencies:

bash

```
npm run build
```

#### Set up the MongoDB atlas database and update the database configuration in the .env file.

##### Start the server:

bash

```
npm run dev
The server will be running on http://localhost:8001.
```

## Usage

Open postman for testing the url.

### User Registration

Endpoint: /user/register

- Method: POST

- Request Body:

json/raw

```bash
{
"name": "your_username",
"email": "your_username",
"password": "your_password"
}
```

- Response:

json

```bash
{"user":{"name":"your_username","email":"your_username","password":"$2b$10$UtBpSIcESQ9lTnJHpZcKxO6HNWV4UxogNAkPOqkIzY59Uap1s9ve2","\_id":"658660a09db622f41da08a18","createdAt":"2023-12-23T04:22:56.118Z","updatedAt":"2023-12-23T04:22:56.118Z","\_\_v":0}}
```

### User Login

Endpoint: /user/login

- Method: POST

- Request Body:

json/raw

```bash
{
"email": "your_username",
"password": "your_password"
}
```

- Response:

json

```bash
{
"user": {
"\_id": "658660a09db622f41da08a18",
"name": "your_username",
"email": "your_username",
"createdAt": "2023-12-23T04:22:56.118Z",
"updatedAt": "2023-12-23T04:22:56.118Z",
"\_\_v": 0
}
}
```

cookies

```bash
{
    token: ---
}
```

### URL Shortening

Endpoint: /url/

- Method: POST

- Request Body:

json

```bash
{
"url": "https://github.com/arunava-saha"
}
```

- Response:

json

```bash
{
    "id": "93JkDJ7cG",
    "originalUrl": "https://github.com/arunava-saha"
}
```

### Accessing Original URL

Visit with the generated short id (e.g., http://localhost:8001/url/93JkDJ7cG or https://shorturl-nz8a.onrender.com/url/93JkDJ7cG) in the postman. You will be redirected to the original URL.

#### fair warnning:

if you use the link in a browser it will not get it becouse authentication taking place. the cookie (token) generated from login will not be present there.

## Technical Details

1. Backend

- Node.js (version LTS)
- libraries
  - "bcrypt": "^5.1.1"
  - "body-parser": "^1.20.2"
  - "cookie-parser": "^1.4.6"
  - "cors": "^2.8.5"
  - "dotenv": "^16.3.1"
  - "express": "^4.18.2"
  - "jsonwebtoken": "^9.0.2"
  - "mongoose": "^8.0.3"
  - "nanoid": "^5.0.4"
  - "nodemon": "^3.0.2"
  - "shortid": "^2.2.16"

2. Database
   - MongoDB Atlas
3. Security
   - Simple authentication mechanism (name, email and password). Secure user authentication and data storage Documentation.
   - For detailed information on API usage, refer to the API Documentation.
     - https://documenter.getpostman.com/view/29074692/2s9YkrbzYh

## Additional Resources

- Node.js
- MongoDB atlas
- Mongoose

## Deployment

Deploying the server on render.

Link - https://shorturl-nz8a.onrender.com
