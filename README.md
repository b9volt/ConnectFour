# ConnectFour
Unit 1 project for General Assembly

Wireframe
https://wireframe.cc/xBysA4

Create board =

Navigation:
Declare nav variable.
Create loop to add 7 buttons.
Declare variable for buttons and create a button.
Add class to buttons.
Add id to buttons to give them individual names.
Append the button to the nav.
Create event listener for buttons.

Columns:
Declare container variable.
Create loop to add 7 columns.
Declare variable for column and create a div.
Add class to column.
Append the column to the container.

Tokens:
Create loop to add 6 tokens inside columns.
Declare variable for token and create a div.
Add class to token.
Append the token to the column.

Subject42 seperate divs? Use for loops
rows and columns. nested for loops.
Use ids for individual, class for groups, ie. rows, columns.

9/12/16=>
In css:
Make a class that will a div height and width and background-color

In Javascript loop:
give your column variable that class

Extrapolate:
adding an id to each element in the column
Putting each column div inside of a container, instead of the document.body
Setting each column div to have a display of inline-block

Reach:
adding a nested for loop that will create rows

9/13/16=>
Write out reverse pseudo code for the column and token loops

Add in an event listener and handler for the tokens

Investigate and pseudo code whether the listener should be on a column or a token

Somehow put buttons at the top of each column

Getting a token to place

Getting it into the right column

Getting it into the right row

Notes from Derek=>
button should have an id of A,B,C
when you click a button the id should be saved as a variable,
and all elements with class name of the button id variable  should be grabbed in an array
getElementsByClassName('className') returns array
start at the bottom, and work your way up until you find
a blue circle, then change it to red

buttons.addEventListener("click", function(){
  this. get its id
  change color(id)
});

grab all the buttons
add event listener that reads the id, then calls a function
