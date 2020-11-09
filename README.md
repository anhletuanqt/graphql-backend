# GRAPHQL DEMO

## OVERVIEW
  
- This module is used to demo graphql server.
- This demo uses 2 types of model that you can query on:
  - Author
  - Post

## HOW TO RUN

- Step 1: Run `npm i` for installing required packages
- Step 2: Run `npm run start` for start server

Note:

- A mongodb installation should exist on your computer
- [Installation](https://docs.mongodb.com/v3.2/administration/install-community/)

### HOW TO PLAY WITH IT

- Open your Chrome browser and navigate to `localhost:${YOUR_PORT}/graphql`
- You should see an graphql playground
- Run your query. `Example:`

```javascript
mutation {
  createAuthor(input: {
    name: "sarah"
    age: 35
    email: "sarah@gmail.com"
  }) {
    isSuccess
    author {
      id
      name
      age
    }
  }
}
```

- You can also explore the schema and operations by clicking in the `Schema` button on the right edge of your page

For more information about GraphQL Query Language, please refer to [this](https://graphql.org/learn/queries/)