## Sanskar_Dhungana_NodeJS

This is a Casino Bonus system where we can calculate casino bonus system based on deposit amount created using Nodejs for backend and Nextjs for frontend

----------------------------------------------------------------------------------------------------------------------------------------------------------

## Requirements

1. Node.js
2. PostgreSQL

----------------------------------------------------------------------------------------------------------------------------------------------------------

## Backend 

1. Clone the repository to your system

    git clone <repository-url>

2. Install Node dependencies

    - cd backend
    - npm install
  
3. Database

   - Create a database name 'casino_bonus_system'

     CREATE DATABASE casino_bonus_system

   - Create table 'player_data'
  
     CREATE TABLE player_data (
      id SERIAL PRIMARY KEY,
      deposit NUMERIC,
      bonus NUMERIC,
      total NUMERIC);

   - Start Backend Server

     npm start

----------------------------------------------------------------------------------------------------------------------------------------------------------

## Frontend

1. Install Nextjs Dependencies

   npm install

2. Start Frontend server

   npm run dev

----------------------------------------------------------------------------------------------------------------------------------------------------------

## Output

1. Open the application

   http://localhost:3000

2. Calculate the bonus amount

   - Enter deposite amount
   - Choose bonus type
   - Click on Calculate Bonus button to get bonus amount and total amount

----------------------------------------------------------------------------------------------------------------------------------------------------------
   



