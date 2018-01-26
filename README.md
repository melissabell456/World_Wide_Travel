# Wide World Travel Guides
## Part 1: Using a controller
### Set Up:

#### + Create the following file structure:

#### world_wide_travel
 #### |_ app
 #### |    |_ controllers
 #### |    |     |_ bookCtrl.js
 #### |    |
 #### |    |_ app.js
 #### |
 #### |_ data
 #### |    |_ guides.json
 #### |
 #### |_ lib
 #### |    |_ gulpfile.js (or gruntfile.js)
 #### |
 #### |_ index.html

### + Add the data to guides.json. You will need to display all three pieces of information about each book, in any format you choose.

#### Remember to also add a .gitignore to the project root folder.

#### cd into lib and run npm init then install all of your dependencies for your task runner. Remember to use the --save-dev flag to add them to your package.json file.

#### Install Angular with npm install angular. Remember to add the script tag for angular to index.html.


### Requirements

#### + For this project you need to use Angular to list a collection of travel guides in the DOM. Build an application that has one view, and one controller that will be responsible for retrieving the data and exposing it for use in the view. The view needs to list all book titles, which type of book it is, and the price for the book.

#### + Fetch your data using an http call that returns a promise. Save the returned data as a property of the $scope object and loop through it to display the guidebook info to the user.

