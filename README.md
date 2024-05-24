# Airbnb Analysis using CRISP-DM 

## Table of Contents
- [Installations](#installations)
- [Project Description](#project-description)
- [File Descriptions](#file-descriptions)
- [How to Interact with the Project](#how-to-interact-with-the-project)
- [Results and Discussion](#results-and-discussion)
- [Licensing, Authors, Acknowledgements, etc.](#licensing-authors-acknowledgements)

## Installations

### Prerequisites
- **Python 3.7 or higher**: Ensure you have Python installed. You can download it from the [official Python website](https://www.python.org/downloads/).
- **Git**: To clone the repository. Download it from the [official Git website](https://git-scm.com/).

### Dependencies
- numpy==1.21.5
- pandas==1.4.4
- seaborn==0.11.2
- matplotlib==3.8.4

## Project Description

This project demonstrates the application of the CRISP-DM (Cross Industry Standard Process for Data Mining) framework to analyze and predict Airbnb rental prices in Boston. Using data from the [Boston Airbnb dataset on Kaggle](https://www.kaggle.com/datasets/airbnb/boston/data), the aim is to systematically approach a data mining project, from understanding the business problem to deploying a model. By understanding the factors that influence Airbnb rental prices, hosts can optimize their listings and maximize revenue.

### Significance

As a former consultant and current data scientist, this project serves as an educational resource, illustrating that by clearly identifying and articulating the problem, we ensure that the project's goals align with the client's objectives, address the right scope, and focus on specific challenges. This structured approach not only enhances the clarity and effectiveness of the analysis but also provides a replicable methodology for future data mining projects.

### Objectives

The primary objectives of this project are:
- **Identify and Articulate the Business Problem**: Understand the client's objectives, the scope of the issue, and the specific challenges related to Airbnb rental pricing in Boston.
- **Data Exploration and Understanding**: Gain insights from the dataset to identify key factors influencing rental prices.
- **Data Preparation and Cleaning**: Process the dataset to ensure it is suitable for analysis and modeling.
- **Model Building and Evaluation**: Develop models to estimate rental prices and evaluate their performance.

## File Descriptions
Overview of the main files and directories in the repository:
- `README.md`: This file.
- `AirbnbAnalysis.ipynb`: The Jupyter Notebook with the analysis.
- `data/`: Directory containing the dataset.

## How to Interact with the Project
The dataset use here is open source. I strongly advise you to make your own project using CRISP-DM. I would very much like to see the different questions you had and how you made it.
If you enjoyed reading my notebook, feel free to send me any comments so we can engage and discuss further!

## Results and Discussion
Considering the Main Points of this analysis,
1. The first thing you should look for is what does the competition in your city look like. If you have an apartment, compare what you provide with these types of properties.
2. Pricing tends to be relatively consistent across different property types. The value you provide has more impact in other features.
3. Middle-range prices are the most common, while higher and lower prices are less frequent.
4. location of your homestay significantly impacts its value. The most expensive areas are typically close to key attractions such as the city center, tourist spots, the airport, and the coast
5. The number of accommodates is the most critical feature. Guests value options that fit their needs, such as elevators, TVs, air conditioning, and internet. Some of these amenities might be challenging to provide, but creativity in offering these can be highly valuable.
6. If you have an extra room, add a bed! Properties if more beds, bedrooms, and guests included, generally have higher prices.
7. Hosts with more listings tend to charge higher prices, possibly due to a more professional or business-like approach. Consider asking experienced hosts for tips on attracting high-quality clients.
8. Information like summary, host about and review scores rating, generally considered of high importance, do not impact in the value of homestays. Indeed, the quality of these descriptions is expected at any price condition you place. You must have then if you want to consider having any AirBnb accommodations.

## Licensing, Authors, Acknowledgements
This project wouldn't be possible without the help of my mentors at Udacity. Follow their [Udacity course](https://www.udacity.com/course/data-scientist-nanodegree--nd025) to learn more
