# GraphQL Library API

## Introduction

This document outlines the usage and functionality of a simple GraphQL library management system API designed to manage books and authors. The API allows users to query information about books and authors, as well as add new books and authors to the database (Currently using dummy data as a database).

## Base URL

The base URL for accessing the GraphQL API is `/graphql`.

## Queries

The API supports the following queries:

1. **book**

   - Description: Fetches information about a single book by its ID.
   - Arguments:
     - `id` (Integer): The unique identifier of the book.
   - Returns: A `Book` object containing the book's ID, title, author ID, and author information.

2. **books**

   - Description: Retrieves a list of all books stored in the database.
   - Returns: A list of `Book` objects, each containing the book's ID, title, author ID, and author information.

3. **author**

   - Description: Retrieves information about a single author by their ID.
   - Arguments:
     - `id` (Integer): The unique identifier of the author.
   - Returns: An `Author` object containing the author's ID, name, and a list of books written by the author.

4. **authors**
   - Description: Fetches a list of all authors stored in the database.
   - Returns: A list of `Author` objects, each containing the author's ID, name, and a list of books written by the author.

## Mutations

The API supports the following mutations:

1. **addBook**

   - Description: Adds a new book to the database.
   - Arguments:
     - `title` (String): The title of the new book.
     - `author_id` (Integer): The ID of the author who wrote the book.
   - Returns: A `Book` object representing the newly added book.

2. **addAuthor**
   - Description: Creates a new author and adds them to the database.
   - Arguments:
     - `name` (String): The name of the new author.
   - Returns: An `Author` object representing the newly added author.

## Types

The API defines two main types:

1. **Book**

   - Fields:
     - `id` (Integer): The unique identifier of the book.
     - `title` (String): The title of the book.
     - `author_id` (Integer): The ID of the author who wrote the book.
     - `author` (Author): The author object containing information about the book's author.

2. **Author**
   - Fields:
     - `id` (Integer): The unique identifier of the author.
     - `name` (String): The name of the author.
     - `books` ([Book]): A list of books written by the author.

## Example Usage

Below is an example of how to interact with the API:

1. Query to fetch information about a specific book:

   ```graphql
   query {
     book(id: 1) {
       id
       title
       author {
         id
         name
       }
     }
   }
   ```

2. Query to retrieve a list of all authors:

   ```graphql
   query {
     authors {
       id
       name
       books {
         id
         title
       }
     }
   }
   ```

3. Mutation to add a new book:

   ```graphql
   mutation {
     addBook(title: "New Book Title", author_id: 1) {
       id
       title
     }
   }
   ```

## Conclusion
This simple GraphQL API provides a flexible and efficient way to manage information about books and authors, allowing users to query existing data and add new entries as needed.