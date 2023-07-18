# LeCun

Predict the classification of whether the new customer will purchase the car based on social network ad dataset using K Nearest Neighbour.

## Table of Contents

- [Team Members](#team-members)
- [Problem Statement](#problem-statement)
- [Project Tasks](#project-tasks)
- [Installation](#installation)
- [Usage](#usage)

## Team Members

- Aditya Dwivedi - CDEA
- Swaraj Pal - DPE
- Vikas Shahu - DSE
- Sahil Mankar - DPE

## Problem Statement

The goal of this project is to predict whether a new customer will purchase a car based on the social network ad dataset using the K Nearest Neighbors (KNN) algorithm. The dataset, provided as a CSV file, contains information such as age, estimated salary, and whether the customer made a purchase or not. The task is to build a model that can classify whether a new customer will purchase a car or not based on their age and salary.

## Project Tasks

- Aditya Dwivedi (CDEA):
  - Develop a Flask API to integrate the KNN model.
  - Create endpoints to handle input and output data for new customers.
  - Connect the API to a SQLite database for storing customer data.
  
- Swaraj Pal (DPE):
  - [.....]
  
- Vikas Shahu (DSE):
  - Build and train the KNN model using the social network ad dataset.
  - Fine-tune the model and evaluate its performance.
  
- Sahil Mankar (DPE):
  - [.....]

## Installation

To set up the project, follow these steps:

1. Install the required Python libraries: `flask`, `sqlite3`, `csv`, `sklearn`. You can install them using pip:
   ```
   pip install flask sqlite3 csv sklearn
   ```

2. Run the `csv_to_db.py` script to create a SQLite database `car_prediction.db`. This script will create a database using the provided CSV file that will be used for the project.

## Usage

To use the project, follow these steps:

1. Ensure that the `car_prediction.db` database has been created by running the `csv_to_db.py` script.

2. Run the `lecun_api.py` script. This will start the Flask API and make the website accessible.

3. Open your web browser and navigate to `127.0.0.1:5001` to access the website. Here, you can input the age and salary of a new customer and get the predicted probability of the customer buying a car.
