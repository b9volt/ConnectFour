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
        if (column.children[i].classList.contains('red') || column.children[i].classList.contains('black')) {
          continue;
        } else {
          if (player == 1) {
            column.children[i].classList.add('red');
            player = 0;
          } else {
            column.children[i].classList.add('black');
            player = 1;
          }
          break;
        } // end if statement
      } // end for loop
      // console.log(player);

      verticalWin();
    }; // end buttonClick function

  var verticalWin = function() {
    var redwins1 = 0, redwins2 = 0, redwins3 = 0, redwins4 = 0,
        redwins5 = 0, redwins6 = 0, redwins7 = 0;
    var blackwins1 = 0, blackwins2 = 0, blackwins3 = 0, blackwins4 = 0,
        blackwins5 = 0, blackwins6 = 0,  blackwins7 = 0;

    for (var i = c1.children.length -1; i >= 0; i--) {
      if (c1.children[i].classList.contains('red')) {
        redwins1++
        // console.log("I am red", redwins1);
        if (redwins1 === 4) {
          console.log("Red Wins!")
          break;
        }
      }
      if (c1.children[i].classList.contains('black')) {
          redwins1 = 0;
          // console.log("redwins1 is reset");
      }
      if (c1.children[i].classList.contains('black')) {
        blackwins1++
        // console.log("I am black", blackwins1);
        if (blackwins1 === 4) {
          console.log("Black Wins!")
          break;
        }
      } else if (c1.children[i].classList.contains('red')) {
          blackwins1 = 0;
          // console.log("blackwins1 is reset");
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
          console.log("Red Wins!")
          break;
        }
      }
      if (c2.children[i].classList.contains('black')) {
          redwins2 = 0;
          // console.log("redwins2 is reset");
      }
      if (c2.children[i].classList.contains('black')) {
        blackwins2++
        // console.log("I am black", blackwins2);
        if (blackwins2 === 4) {
          console.log("Black Wins!")
          break;
        }
      } else if (c2.children[i].classList.contains('red')) {
          blackwins2 = 0;
          // console.log("blackwins is reset");
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
          console.log("Red Wins!")
          break;
        }
      }
      if (c3.children[i].classList.contains('black')) {
          redwins3 = 0;
          // console.log("redwins3 is reset");
      }
      if (c3.children[i].classList.contains('black')) {
        blackwins3++
        // console.log("I am black", blackwins3);
        if (blackwins3 === 4) {
          console.log("Black Wins!")
          break;
        }
      } else if (c3.children[i].classList.contains('red')) {
          blackwins3 = 0;
          // console.log("blackwins3 is reset");
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
          console.log("Red Wins!")
          break;
        }
      }
      if (c4.children[i].classList.contains('black')) {
          redwins4 = 0;
          // console.log("redwins4 is reset");
      }
      if (c4.children[i].classList.contains('black')) {
        blackwins4++
        // console.log("I am black", blackwins4);
        if (blackwins4 === 4) {
          console.log("Black Wins!")
          break;
        }
      } else if (c4.children[i].classList.contains('red')) {
          blackwins4 = 0;
          // console.log("blackwins4 is reset");
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
          console.log("Red Wins!")
          break;
        }
      }
      if (c5.children[i].classList.contains('black')) {
          redwins5 = 0;
          // console.log("redwins5 is reset");
      }
      if (c5.children[i].classList.contains('black')) {
        blackwins5++
        // console.log("I am black", blackwins5);
        if (blackwins5 === 4) {
          console.log("Black Wins!")
          break;
        }
      } else if (c5.children[i].classList.contains('red')) {
          blackwins5 = 0;
          // console.log("blackwins5 is reset");
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
          console.log("Red Wins!")
          break;
        }
      }
      if (c6.children[i].classList.contains('black')) {
          redwins6 = 0;
          // console.log("redwins6 is reset");
      }
      if (c6.children[i].classList.contains('black')) {
        blackwins6++
        // console.log("I am black", blackwins6);
        if (blackwins6 === 4) {
          console.log("Black Wins!")
          break;
        }
      } else if (c6.children[i].classList.contains('red')) {
          blackwins6 = 0;
          // console.log("blackwins6 is reset");
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
          console.log("Red Wins!")
          break;
        }
      }
      if (c7.children[i].classList.contains('black')) {
          redwins7 = 0;
          // console.log("redwins7 is reset");
      }
      if (c7.children[i].classList.contains('black')) {
        blackwins7++
        // console.log("I am black", blackwins7);
        if (blackwins7 === 4) {
          console.log("Black Wins!")
          break;
        }
      } else if (c7.children[i].classList.contains('red')) {
          blackwins7 = 0;
          // console.log("blackwins7 is reset");
      } else {
          //  console.log("space is empty");
          break;
      }; // end if statement
    } // end for loop

  }; // end verticalWin function

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
