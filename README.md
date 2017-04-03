Weekend Challenge 4 - Mongo and Bootstrap

Prime Week 4 Challenge

Setup:
1. npm install

2. Download 'listingData.js'

    - Run this command in your Terminal: mongoimport --db realestate --collection listings --file listingData.js

    - Note that you will need to run this from the folder which you download the ‘listingData.js’ to.

Project Requirements:

1. Create a Full Stack application from the ground up using jQuery, Node, and MongoDB,

2. Work with the data set that we provide for you,

3. Use Bootstrap to present the data,

4. Account for the different data (“rent” versus “cost) and ensure that this is noted on the display of the information, by listing “For Rent” or “For Sale” based on which of the two properties that it has.


**Tasks**
1. Create Full Stack Application using the MEAN stack.
  [X] MVP that pulls data from the database and displays it on the DOM
    - [X] install provided data into a Mongo DB, using the different schemas
    - [X] Set up GET command that connects Client.js to app.js to database
    - [X] display information on DOM
  [x] Account for the different data ('rent' vs 'cost')
    - [x] logic to take information into account on client side
  [x] Use Bootstrap to display the data.

Hard Mode
Create an interface for adding additional properties to the collection. You will need to give the user an option for either a Rent property or a Sale property. Check out this Stack Overflow for information on how to accomplish this: http://stackoverflow.com/questions/14453864/use-more-than-one-schema-per-collection-on-mongodb

2. Create interface for adding additional properties
  - [x] POST command from Front to Back end
  - [x] Edit options on the DOM

Pro Mode
Host the application on Heroku and mLabs. You will need to transfer the data up to mLabs. In will need to research to accomplish this.

3. Host project on Heroku and mLabs.
