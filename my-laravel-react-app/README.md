# Laravel 11 User Roles API

This is a Laravel 11 backend that manages users with multiple roles: Author, Editor, Subscriber, and Administrator.

## 🛠 Features

- Create users with full name, email, and one or more roles
- Fetch users filtered by role
- API validation and relationships
- Uses RESTful API routes

## 🧱 Tech Stack

- Laravel 11
- MySQL (or compatible)
- Eloquent ORM

## 🚀 Setup Instructions


### 2. Install dependencies
```bash
composer install
```

### 3. Set up environment variables
```bash
cp .env.example .env
php artisan key:generate
```

### 4. Run migrations
```bash
php artisan migrate
```

### 5. Run seeder
```bash
php artisan db:seed
```

### 6. Run the development server
```bash
php artisan serve
```

### 7. API Endpoints

- POST /api/users : Create a new user
- GET /api/users : Get all users
