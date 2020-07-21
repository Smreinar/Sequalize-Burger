# Sequalize-Burger
---

## Discription
this assignment was a remake of eat-da-burger. On the application it self you can `Add` a burger and `Devour` a burger. if you add a burger then it will be added to the data-base and will then render on the left side of the web page. Now if you click on the `devoured` button next to the burger then it will update that burger in the database to have devoured boolean to be switch to true and the burger will then render to the left side of the web page.remeber to have fun and enjoy! 

[Live App](https://sequelizeburger1021.herokuapp.com/burger)

---

## Install
Clone the git repo to your computer.

Then you will run the following command in terminal

> > `npm install`
>
> This command will download all the dependencies for you.



---

## Technologies
- Bootstrap
- CSS
- jQuery 
- node.js
  - fs
  - path
  - sequelize 
  - express
  - handlebars
  - handlebars-express


---

## Code Snippets

The code snippet below is how'd I set up the sequlize model instance. It has a name and devoured columes.
![seq-burger-model](https://user-images.githubusercontent.com/57015344/88010139-10f5c180-cac9-11ea-81e1-638f63aefaff.png)

On the back-end I have a few important routes. The first one is to create a new burger in the database then res.json the results.
![seq-burger-create-route](https://user-images.githubusercontent.com/57015344/88010162-1c48ed00-cac9-11ea-9891-b8648abc4ec6.png)

This route gets all of the burgers in the database then res.render() to the index page in handlebar format.
![seq-burger-findall-hbs-route](https://user-images.githubusercontent.com/57015344/88010172-223ece00-cac9-11ea-850c-3bff3e507eff.png)

Last but not least we have the route to update the devoured field in the database to be true then refresh the page.
![seq-burger-post-update-route](https://user-images.githubusercontent.com/57015344/88010190-2a970900-cac9-11ea-84c4-805479bfda85.png)

The jQuery on the front-end to call to the back-end using .ajax. with the code below we use ajax to make a post request to /burger/create with the burger's name and then the back-end will do its work on creating the burger in the database. 
![seq-burger-jQuery-frontend-create](https://user-images.githubusercontent.com/57015344/88010202-32ef4400-cac9-11ea-9e0b-149d4f32a4d9.png)

This jQuery is for the devoured button for when it gets clicked then it will take the id of that burger and use ajax to make a post request to /burger/eat/:id with the id and the back-end will do its work.
![seq-burger-jQuery-frontend-update](https://user-images.githubusercontent.com/57015344/88010218-37b3f800-cac9-11ea-892c-413f9562b72d.png)


---

## License
    MT

---
