# Web server

The idea of this project was build a real Node JS server using [Express](https://expressjs.com/), and as a bonus we added a templateing tool called [Handlebars](https://handlebarsjs.com/) to manage layouts and partials.

In this project we used the modules created on [Weather app](https://github.com/faqndo97/the-complete-nodejs-developer-course-faqndo97/tree/master/weather-app) to get location and forecast information based on an address.

## Setup

* Clone project
* run `npm install`
* Setup [Weather Stack](https://weatherstack.com/) and [Mapbox](https://www.mapbox.com/) services
* Run `mv env.example .env` and set the correct API tokens for the services.
* Start the project using `npm run dev`

## Deploy

This web server is deployed on [Heroku](https://learning-node-basic-app.herokuapp.com/)

## TODO

As personal challanges I want add tailwind to this project to practice css and styling.

- [ ] Add Tailwind
- [ ] Improve styles
- [ ] Improve loader style
- [ ] Add icons