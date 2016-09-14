window.onload = function() {
  console.log('heeloooo');
  // declare nav variable
  var nav = document.getElementById('nav');
  console.log(nav);
  // create loop to add 7 buttons
  for (var x = 1; x <= 7; x++) {
    var buttons = document.createElement('button');
    buttons.className = "buttonstyle";
    buttons.id = "b" + x;
    nav.appendChild(buttons);



    var red = function() {
        token.id = "red";
      }
  // var A = function() {
  //   this.ClassName = "token A";
  // }
//button should have an id of A,B,C
//when you click a button the id should be saved as a variable,
//and all elements with class name of the button id variable  should be grabbed in an array
// getElementsByClassName('className') returns array
// start at the bottom, and work your way up until you find
// a blue circle, then change it to red

    // };
    buttons.addEventListener("click", red);
  };

  //grab all the buttons
  //add event listener that reads the id, then calls a function


      // buttons.addEventListener("click", function(){
      //   this.getElementById("b1");
      //   var b1 = function() {
      //
      //   }
      //   change color(id)
      // });

  // declare container variable
  var container = document.getElementById('container');
  console.log(container);
  // create loop to add 7 columns
  for (var i = 1; i <= 7; i++) {
    var column = document.createElement('div');
    column.className = "column";
    container.appendChild(column);
  // create loop to add 6 tokens inside columns
    for (var j = 1; j <= 6; j++) {
      var token = document.createElement('div');
      token.className = "token";
      column.appendChild(token);
    };
  };

// close window.onload
};
