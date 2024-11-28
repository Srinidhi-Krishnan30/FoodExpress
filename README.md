# FoodExpress API

A RESTful API for managing food delivery systems, including user authentication, food management, order processing, and role-based access control.

## File Structure
# Project Structure: FoodExpress

```plaintext
FOODEXPRESS/
├── src/
│   ├── config/
│   │   ├── dbConnect.js       # MongoDB connection setup
│   │   └── jwt.js             # JWT configuration
│   │
│   ├── controllers/
│   │   ├── adminController.js # Admin functionalities (CRUD for food/orders)
│   │   ├── authController.js  # User login and token generation
│   │   ├── userController.js  # User functionalities (view/place orders)
│   │   └── deliveryController.js # Delivery operations (view/update orders)
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js  # JWT authentication
│   │   └── roleMiddleware.js  # Role-based access control
│   │
│   ├── models/
│   │   ├── Food.js            # Schema for food items
│   │   ├── Order.js           # Schema for orders
│   │   └── User.js            # Schema for users
│   │
│   ├── routes/
│   │   ├── adminRoutes.js     # Admin-specific routes
│   │   ├── authRoutes.js      # Authentication routes
│   │   ├── userRoutes.js      # User-specific routes
│   │   └── deliveryRoutes.js  # Delivery-specific routes
│   │
│   ├── server.js              # Main server setup
│   └── app.js                 # App configuration and middleware
│
├── utils/
│   ├── jwtUtils.js            # Helper functions for JWT creation and validation
│   └── passwordUtils.js       # Password hashing and verification using bcrypt
│
├── .env                       # Environment variables (e.g., JWT_SECRET, mongoURI)
├── package.json               # Project metadata and dependencies
└── README.md                  # Project overview and documentation


## Features

1. **Authentication**: 
   - Login with JWT-based authentication.
   - Token verification middleware.

2. **Role-based Access Control**:
   - Admin: Manage food items, view, and update orders.
   - User: Place and view orders.
   - Delivery: View and update delivery statuses.

3. **CRUD Operations**:
   - Create, Read, Update, and Delete food items.
   - Manage orders.

4. **MongoDB Integration**:
   - Seamlessly stores users, food items, and orders.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Srinidhi-Krishnan30/FoodExpress.git
   cd FoodExpress

# API Testing Guide with Postman

This guide provides details on how to test the routes of the application using Postman. Below are the API routes categorized based on their functionalities, including the expected responses for each route.

## **Authentication Routes (`authRoutes.js`)**

### 1. **Login**
- **Method**: `POST`
- **URL**: `http://localhost:<PORT>/api/auth/login`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }

Responses :
        Status 200: Successful login, returns JWT token
        Status 401: Invalid credentials



### 2. Create Food Item
Method: POST
URL: http://localhost:3000/api/admin/food

{
  "Authorization": "Bearer <JWT_TOKEN>"
}
{
  "name": "Pizza",
  "price": 12.99,
  "description": "Cheesy pizza with fresh toppings"
}
Expected Response:
    Status 201: Food created successfully.

        {
        "message": "Food created successfully",
        "newFood": {
            "id": "food_id",
            "name": "Pizza",
            "price": 12.99,
            "description": "Cheesy pizza with fresh toppings"
        }
        }
        Status 403: Access denied for non-admin users.
        {
        "message": "Access denied"
        }
### 3. View Orders
Method: GET
URL: http://localhost:3000/api/admin/orders

        Expected Response:
        Status 200: List of orders in the format
        [
        {
            "id": "order_id",
            "user": "user_id",
            "items": [
            { "food": "food_id", "quantity": 2 }
            ],
            "status": "Pending"
        }
        ]
### 4. Delete Food Item
Method: DELETE
URL: http://localhost:3000/api/admin/food/:id

{
  "Authorization": "Bearer <JWT_TOKEN>"
}
Expected Response:
    Status 200: Food deleted.
    {
    "message": "Food deleted successfully"
    }
### 5. View Food Items
Method: GET
URL: http://localhost:3000/api/user/food
Expected Response:
Status 200: List of food items.

    [
    {
        "id": "food_id",
        "name": "Pizza",
        "price": 12.99,
        "description": "Cheesy pizza with fresh toppings"
    }
    ]
### 6. Place an Order
Method: POST
URL: http://localhost:3000/api/user/order

    {
    "Authorization": "Bearer <JWT_TOKEN>"
    }
    {
    "items": [
        { "foodId": "food_id", "quantity": 2 }
    ]
    }
    Expected Response:
    Status 201: Order placed successfully.
    {
    "message": "Order placed successfully",
    "order": {
        "id": "order_id",
        "items": [
        { "food": "food_id", "quantity": 2 }
        ]
    }
    }
   
### 7. View Orders to Deliver
Method: GET
URL: http://localhost:3000/api/delivery/orders
    {
    "Authorization": "Bearer <JWT_TOKEN>"
    }
    Expected Response:
    Status 200: List of orders assigned for delivery.
    [
    {
        "id": "order_id",
        "status": "Pending",
        "address": "123 Street, City",
        "items": [
        { "food": "Pizza", "quantity": 2 }
        ]
    }
    ]
### 8. Update Order Status
Method: PUT
URL: http://localhost:3000/api/delivery/order/:id

    {
    "Authorization": "Bearer <JWT_TOKEN>"
    }
    {
    "status": "Delivered"
    }
    Expected Response:
        Status 200: Order status updated.
        {
        "message": "Order status updated successfully"
        }
