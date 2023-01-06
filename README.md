# Project Overview

Planetarium serves as a dashboard and resource showcasing the planets in our galaxy and providing information about near earth objects.

## Project Description

The front-end app utilizes ReactJS along with a few other technologies like Tailwind-CSS and Resium(Cesium) for the 3D-globe. The front-end makes several API calls to various NASA and US.GOV data end-points. The returned data is displayed to the user in the syle of a dashboard. 

The front-end app will also make another API call to the accompanying Django back-end server, which will store user and forum data.

## Project Links

[Deployed Frontend](https://capstone-front-end-seven.vercel.app/)
[Deployed Backend](https://polar-everglades-56224.herokuapp.com/astronauts/)

## Wireframes & Component Hierarchy

[Wireframe](https://media.git.generalassemb.ly/user/45667/files/0f8b8fa1-bef4-44b1-bc41-87278b3df362)

## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router | 
| NavHeader | This will render the navbar with links | 
| Tail | This will render the footer | 
| Home | This will render the home page. All components are rendered on the home page.| 
| AstroCreate | Handles creation of new users or "astronauts" | 
| AstroDelete | Handles deletion of astronaut data | 
| AstroDetails | Displays astronaut information | 
| AstroUpdate | Handles update of astronaut data | 
| ASOD | Astronomy Picture of the Day|
| Asteroids | Daily asteroid approaching log|
| EPIC | Earth Polychromatic Imagining Camera - daily images |
| Forums | User forums and comments |
| Globe | Resium (Cesium) globe component for React.js |
| Image | NASA Image and Video Library search component |
| MediaPlayer  | Image and Video player |

## MVP 

- User is able to see the ASOD, Asteroid Data, Mars Rover images along with EPIC on the front page.
- User is able to search for videos and images and view them in the media player.
- User is able to view their positon on the globe.
- User is able to create new 'astronaut' profiles.

## Post-MVP

- Better Image handling for the Mars Rover. Too many images.
- More robust forum functionality, this would require a back-end serever update of the models.
- Ability to upload user photos to database.

## Other Technologies User

- Front-end application is deployed on Vercel.
- Django back-end server uses a PostgresSQL database all deployed on Heroku.

## Issues and Resolutions

Project 4 for General Assembly. 

## Built by: Nikhil Prasad.

