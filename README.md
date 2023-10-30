# This is a bookstore application.

# Technologies

- Node Js
- Express Js
- MongoDB
- Mongoose
- Mongo Atlas
- Joi
- Cyclic Hosting

## API References

- To run this project via deployed Link. use the below steps.

- Deployed URL
```http
  https://brewapps-backend.cyclic.app
 ```

### Get all books

```http
  GET https://brewapps-backend.cyclic.app/API/v1/books
```
#### You will get all the books listing 

### Get a single book

```http
  GET https://brewapps-backend.cyclic.app/api/v1/book/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |

### Add A New Book

```http
  POST https://brewapps-backend.cyclic.app//api/v1/book-create
```

| Parameter      | Type     | Description                                           |
| :------------- | :------- | :---------------------------------------------------- |
| `title`        | `string` | **Required**. book title                              |
| `author`       | `string` | **Required**. book author                             |
| `description`  | `string` | **Required**. book description                        |

### Update book

```http
  PATCH https://brewapps-backend.cyclic.app/api/v1/book-update/${id}
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `string` | **Required**. Id of a book to update    |

### Delete book 

```http
  DELETE https://brewapps-backend.cyclic.app/api/v1/book-delete/${id}
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `string` | **Required**. Id of a book to delete    |


- To run this project, you will need not to add any environment variables to your .env everything is already added. follow the steps to mentioned below to run locally

# Run through local system

Clone the project

```bash
https://github.com/AmitKuMaurya/BrewApps-backend-app.git
```

Go to the project directory

```bash
  cd BrewApps-backend-app
```

Install dependencies

```bash
npm install
```

Start the server

```bash
  npm run dev
```
- Please use the routes and parameters mentioned above on port - 5050 and replace this domain `https://brewapps-backend.cyclic.app` with this `http://localhost:5050/api/v1/books` only.
-- now all the steps are the same as mentioned above from line no.21.

## Status
- These both will ensure that the application is running perfectly.
``` 
{ msg: 'DataBase Connected Successfully 🌼' }
{ msg: 'Server is Listing on Port 5050 🤙' }
```

                                                                         - Thanks For Visiting Here

