window.onload = function() {
  // declare nav variable
  var nav = document.getElementById('nav');
  // console.log(nav);
  // declare player variable.
  var player = 1;
  // function for buttonClick to be called when user clicks a button
  var buttonClick = function() {
      // token.classList.add("red");
      // console.log("red");
      // console.log("This is button id " + this.id);
      // this.id calls on the button that is pressed
      // console.log(this.id.charAt(1));
      // charAt(1) calls the index of the button
      // By adding the id of 'c', it also references its coresponding column
      var column = document.getElementById('c' + this.id.charAt(1));
      // console.log('These are the columns children: ', column.children);
      // console.log('This is the last child of the column: ', column.children[column.children.length - 1]);
      // var lastChild = column.children[column.children.length - 1];
      // console.log(lastChild);
      // lastChild.classList.add('red');
      // Loop backwards by accessing last child with column.length - 1.
      for (var i = column.children.length -1; i >= 0; i--) {
        // console.log(p);
        if (column.children[i].classList.contains('red') || column.children[i].classList.contains('yellow')) {
          continue;
        } else {
          if (player == 1) {
            column.children[i].classList.add('red');
            player = 0;
          } else {
            column.children[i].classList.add('yellow');
            player = 1;
          }
          break;
        } // end if statement
      } // end for loop
      // console.log(player);

      verticalWin();
      // horizontalWin();
    }; // end buttonClick function

  var verticalWin = function() {
    var redwins1 = 0, redwins2 = 0, redwins3 = 0, redwins4 = 0,
        redwins5 = 0, redwins6 = 0, redwins7 = 0;
    var yellowwins1 = 0, yellowwins2 = 0, yellowwins3 = 0, yellowwins4 = 0,
        yellowwins5 = 0, yellowwins6 = 0,  yellowwins7 = 0;

    for (var i = c1.children.length -1; i >= 0; i--) {
      if (c1.children[i].classList.contains('red')) {
        redwins1++
        // console.log("I am red", redwins1);
        if (redwins1 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (c1.children[i].classList.contains('yellow')) {
          redwins1 = 0;
          // console.log("redwins1 is reset");
      }
      if (c1.children[i].classList.contains('yellow')) {
        yellowwins1++
        // console.log("I am yellow", yellowwins1);
        if (yellowwins1 === 4) {
          alert("Yellow Wins!")
          break;
        }
      } else if (c1.children[i].classList.contains('red')) {
          yellowwins1 = 0;
          // console.log("yellowwins1 is reset");
      } else {
          //  console.log("space is empty");
           break;
      }; // end if statement
    }; // end for loop

    for (var i = c2.children.length -1; i >= 0; i--) {
      if (c2.children[i].classList.contains('red')) {
        redwins2++
        // console.log("I am red", redwins2);
        if (redwins2 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (c2.children[i].classList.contains('yellow')) {
          redwins2 = 0;
          // console.log("redwins2 is reset");
      }
      if (c2.children[i].classList.contains('yellow')) {
        yellowwins2++
        // console.log("I am yellow", yellowwins2);
        if (yellowwins2 === 4) {
          alert("Yellow Wins!")
          break;
        }
      } else if (c2.children[i].classList.contains('red')) {
          yellowwins2 = 0;
          // console.log("yellowwins is reset");
      } else {
          //  console.log("space is empty");
          break;
      }; // end if statement
    } // end for loop

    for (var i = c3.children.length -1; i >= 0; i--) {
      if (c3.children[i].classList.contains('red')) {
        redwins3++
        // console.log("I am red", redwins3);
        if (redwins3 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (c3.children[i].classList.contains('yellow')) {
          redwins3 = 0;
          // console.log("redwins3 is reset");
      }
      if (c3.children[i].classList.contains('yellow')) {
        yellowwins3++
        // console.log("I am yellow", yellowwins3);
        if (yellowwins3 === 4) {
          alert("Yellow Wins!")
          break;
        }
      } else if (c3.children[i].classList.contains('red')) {
          yellowwins3 = 0;
          // console.log("yellowwins3 is reset");
      } else {
          //  console.log("space is empty");
          break;
      }; // end if statement
    } // end for loop

    for (var i = c4.children.length -1; i >= 0; i--) {
      if (c4.children[i].classList.contains('red')) {
        redwins4++
        // console.log("I am red", redwins4);
        if (redwins4 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (c4.children[i].classList.contains('black')) {
          redwins4 = 0;
          // console.log("redwins4 is reset");
      }
      if (c4.children[i].classList.contains('yellow')) {
        yellowwins4++
        // console.log("I am yellow", yellowwins4);
        if (yellowwins4 === 4) {
          alert("Yellow Wins!")
          break;
        }
      } else if (c4.children[i].classList.contains('red')) {
          yellowwins4 = 0;
          // console.log("yellowwins4 is reset");
      } else {
          //  console.log("space is empty");
          break;
      }; // end if statement
    } // end for loop

    for (var i = c5.children.length -1; i >= 0; i--) {
      if (c5.children[i].classList.contains('red')) {
        redwins5++
        // console.log("I am red", redwins5);
        if (redwins5 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (c5.children[i].classList.contains('yellow')) {
          redwins5 = 0;
          // console.log("redwins5 is reset");
      }
      if (c5.children[i].classList.contains('yellow')) {
        yellowwins5++
        // console.log("I am yellow", yellowwins5);
        if (yellowwins5 === 4) {
          alert("Yellow Wins!")
          break;
        }
      } else if (c5.children[i].classList.contains('red')) {
          yellowwins5 = 0;
          // console.log("yellowwins5 is reset");
      } else {
          //  console.log("space is empty");
          break;
      }; // end if statement
    } // end for loop

    for (var i = c6.children.length -1; i >= 0; i--) {
      if (c6.children[i].classList.contains('red')) {
        redwins6++
        // console.log("I am red", redwins6);
        if (redwins6 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (c6.children[i].classList.contains('yellow')) {
          redwins6 = 0;
          // console.log("redwins6 is reset");
      }
      if (c6.children[i].classList.contains('yellow')) {
        yellowwins6++
        // console.log("I am yellow", yellowwins6);
        if (yellowwins6 === 4) {
          alert("Yellow Wins!")
          break;
        }
      } else if (c6.children[i].classList.contains('red')) {
          yellowwins6 = 0;
          // console.log("yellowwins6 is reset");
      } else {
          //  console.log("space is empty");
          break;
      }; // end if statement
    } // end for loop

    for (var i = c7.children.length -1; i >= 0; i--) {
      if (c7.children[i].classList.contains('red')) {
        redwins7++
        // console.log("I am red", redwins7);
        if (redwins7 === 4) {
          return("Red Wins!")
          break;
        }
      }
      if (c7.children[i].classList.contains('yellow')) {
          redwins7 = 0;
          // console.log("redwins7 is reset");
      }
      if (c7.children[i].classList.contains('yellow')) {
        yellowwins7++
        // console.log("I am yellow", yellowwins7);
        if (yellowwins7 === 4) {
          return("Yellow Wins!")
          break;
        }
      } else if (c7.children[i].classList.contains('red')) {
          blackwins7 = 0;
          // console.log("yellowwins7 is reset");
      } else {
          //  console.log("space is empty");
          break;
      }; // end if statement
    } // end for loop

  }; // end verticalWin function

  // var horizontalWin = function() {
  //   // var row = document.getElementById('t' + this.id.charAt(1));
  //   var hRedwins = 0;
  //   var hBlackwins = 0;
  //   // var row = document.getElementById('t');
  //   for (var j = t6.length -1; j >= 0; j--) {
  //     console.log(t6);
  //   }
  // } // end horizontalWin function

  // create loop to add 7 buttons
  for (var x = 1; x <= 7; x++) {
    var buttons = document.createElement('button');
    buttons.className = "buttonstyle";
    buttons.id = "b" + x;
    nav.appendChild(buttons);
    buttons.addEventListener("click", buttonClick);
  };

  // declare container variable
  var container = document.getElementById('container');
  // console.log(container);
  var playerTurn = document.getElementById('playerTurn');
  // var logo = document.getElementById('logo');

  // create loop to add 7 columns
  for (var i = 1; i <= 7; i++) {
    var column = document.createElement('div');
    column.className = "column";
    column.id = "c" + i;
    container.appendChild(column);

  // create loop to add 6 tokens inside columns
    for (var j = 1; j <= 6; j++) {
      var token = document.createElement('div');
      token.className = "token";
      token.id = "t" + j;
      column.appendChild(token);
    };
  };

}; // close window.onload
