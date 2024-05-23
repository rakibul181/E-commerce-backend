# E-commerce Backend

This project is an E-commerce backend service developed using Node.js, Express, MongoDB, Mongoose, and TypeScript. It provides a robust and scalable foundation for managing products, orders, and inventory for an online store.

## Key Features

- **Product Management:** Create, read, update, and delete products.
- **Order Management:** Create and retrieve orders, including validation and inventory management.
- **Inventory Management:** Track product inventory and update stock levels based on orders.
- **Search Functionality:** Search products by name or description.
- **Data Validation:** Ensure data integrity using Mongoose schemas and Zod validation.
- **Error Handling:** Gracefully handle errors with meaningful messages.
- **RESTful API:** Follows REST principles for easy integration with frontend applications.

## Technologies Used

- **Node.js:** A JavaScript runtime built on Chrome's V8 engine.
- **Express:** A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** A NoSQL database for storing product and order data.
- **Mongoose:** An elegant MongoDB object modeling for Node.js.
- **TypeScript:** A statically typed superset of JavaScript.
- **Zod:** A TypeScript-first schema declaration and validation library.

## Installation

1. Clone the repository

   ```sh
   git clone https://github.com/yourusername/e-commerce-backend.git
   cd e-commerce-backend

   ```

2. Install dependencies

   ```sh
   npm install


   yarn install

   ```

3. Environment Variables:
   Create a `.env` file in the root directory and add the following environment variables

```sh
 MONGO_URI=your_mongodb_connection_string
 PORT=5000


```

4.Run the Server

```sh
npm run start:dev


```