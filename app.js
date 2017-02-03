window.onload = function() {

  var turn = 1;
  // function for buttonClick to be called when user clicks a button
  var buttonClick = function() {
      console.log("This is button # " + this.id.charAt(1));
      // charAt(1) calls the index of the button
      // By adding the id of 'c', it also references the coresponding column
      var column = document.getElementById('c' + this.id.charAt(1));
      var buttons = document.getElementById('b' + this.id.charAt(1));
      var pturn = document.getElementById('pturn');
      // console.log('These are the columns children: ', column.children);
      // Loop backwards by accessing last child with column.length - 1.
      for (var i = column.children.length -1; i >= 0; i--) {
        if (column.children[i].classList.contains('red') || column.children[i].classList.contains('yellow')) {
          continue;
        } else {
          if (turn == 1) {
            column.children[i].classList.add('red');
            turn = 0;
          } else {
            column.children[i].classList.add('yellow');
            turn = 1;
          }
          console.log(turn);
          if (turn == 1) {
            buttons.className = "rbutton";
            pturn.className = "rbutton";
            console.log("Player 1's turn");
          }
          else {
            buttons.className = "ybutton";
            pturn.className = "ybutton";
            console.log("Player 2's turn");
          };
          break;
        } // end if statement
      } // end for loop

      verticalWin();
      horizontalWin();
      diagonalWin();
    }; // end buttonClick function

    // var buttonClick = function() {
    //
    // }

  // declare nav variable
  var nav = document.getElementById('nav');

  // create loop to add navbar
  for (var n = 1; n <= 1; n++) {
    var navbar = document.createElement('div');
    navbar.className = "navbar";
    nav.appendChild(navbar);

  // create loop to add 7 buttons
    for (var x = 1; x <= 7; x++) {
      var buttons = document.createElement('navButton');
      buttons.id = "b" + x;
      navbar.appendChild(buttons);
      buttons.className = "navButton";
      buttons.addEventListener("click", buttonClick);


    }; // end button loop
  }; // end navbar loop

  // declare container variable
  var container = document.getElementById('container');

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

  var reset = document.getElementsByName('name')

 // Vertical Win
 // ==============================
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
          alert("Red Wins!");
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
      if (c4.children[i].classList.contains('yellow')) {
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
          alert("Red Wins!")
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
          alert("Yellow Wins!")
          break;
        }
      } else if (c7.children[i].classList.contains('red')) {
          yellowwins7 = 0;
          // console.log("yellowwins7 is reset");
      } else {
          //  console.log("space is empty");
          break;
      }; // end if statement
    } // end for loop

  }; // end verticalWin function

  // Horizontal Win
  // ==============================
  var horizontalWin = function() {
    var redwins1 = 0, redwins2 = 0, redwins3 = 0, redwins4 = 0,
        redwins5 = 0, redwins6 = 0;
    var yellowwins1 = 0, yellowwins2 = 0, yellowwins3 = 0, yellowwins4 = 0,
        yellowwins5 = 0, yellowwins6 = 0;

    for (var j = t6.length -1; j >= 0; j--) {
      if (t6[j].classList.contains('red')) {
        redwins6++
        // console.log("I am red", redwins6);
        if (redwins6 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (t6[j].classList.contains('yellow')) {
          redwins6 = 0;
          // console.log("redwins6 is reset");
      }
      if (t6[j].classList.contains('yellow')) {
        yellowwins6++
        // console.log("I am yellow", yellowwins6);
        if (yellowwins6 === 4) {
          alert("Yellow Wins!")
          break;
        }
      }
      if (t6[j].classList.contains('red')) {
          yellowwins6 = 0;
          // console.log("yellowwins6 is reset");
      };
    } // end for loop 6

    for (var j = t5.length -1; j >= 0; j--) {
      if (t5[j].classList.contains('red')) {
        redwins5++
        // console.log("I am red", redwins5);
        if (redwins5 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (t5[j].classList.contains('yellow')) {
          redwins5 = 0;
          // console.log("redwins5 is reset");
      }
      if (t5[j].classList.contains('yellow')) {
        yellowwins5++
        // console.log("I am yellow", yellowwins5);
        if (yellowwins5 === 4) {
          alert("Yellow Wins!")
          break;
        }
      }
      if (t5[j].classList.contains('red')) {
          yellowwins5 = 0;
          // console.log("yellowwins5 is reset");
      };
    } // end for loop 5

    for (var j = t4.length -1; j >= 0; j--) {
      if (t4[j].classList.contains('red')) {
        redwins4++
        // console.log("I am red", redwins4);
        if (redwins4 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (t4[j].classList.contains('yellow')) {
          redwins4 = 0;
          // console.log("redwins4 is reset");
      }
      if (t4[j].classList.contains('yellow')) {
        yellowwins4++
        // console.log("I am yellow", yellowwins4);
        if (yellowwins4 === 4) {
          alert("Yellow Wins!")
          break;
        }
      }
      if (t4[j].classList.contains('red')) {
          yellowwins4 = 0;
          // console.log("yellowwins4 is reset");
      };
    } // end for loop 4

    for (var j = t3.length -1; j >= 0; j--) {
      if (t3[j].classList.contains('red')) {
        redwins3++
        // console.log("I am red", redwins3);
        if (redwins3 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (t3[j].classList.contains('yellow')) {
          redwins3 = 0;
          // console.log("redwins3 is reset");
      }
      if (t3[j].classList.contains('yellow')) {
        yellowwins3++
        // console.log("I am yellow", yellowwins3);
        if (yellowwins3 === 4) {
          alert("Yellow Wins!")
          break;
        }
      }
      if (t3[j].classList.contains('red')) {
          yellowwins3 = 0;
          // console.log("yellowwins3 is reset");
      };
    } // end for loop 3

    for (var j = t2.length -1; j >= 0; j--) {
      if (t2[j].classList.contains('red')) {
        redwins2++
        // console.log("I am red", redwins2);
        if (redwins2 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (t2[j].classList.contains('yellow')) {
          redwins2 = 0;
          // console.log("redwins2 is reset");
      }
      if (t2[j].classList.contains('yellow')) {
        yellowwins2++
        // console.log("I am yellow", yellowwins2);
        if (yellowwins2 === 4) {
          alert("Yellow Wins!")
          break;
        }
      }
      if (t2[j].classList.contains('red')) {
          yellowwins2 = 0;
          // console.log("yellowwins2 is reset");
      };
    } // end for loop 2

    for (var j = t1.length -1; j >= 0; j--) {
      if (t1[j].classList.contains('red')) {
        redwins1++
        // console.log("I am red", redwins1);
        if (redwins1 === 4) {
          alert("Red Wins!")
          break;
        }
      }
      if (t1[j].classList.contains('yellow')) {
          redwins1 = 0;
          // console.log("redwins1 is reset");
      }
      if (t1[j].classList.contains('yellow')) {
        yellowwins1++
        // console.log("I am yellow", yellowwins1);
        if (yellowwins1 === 4) {
          alert("Yellow Wins!")
          break;
        }
      }
      if (t1[j].classList.contains('red')) {
          yellowwins1 = 0;
          // console.log("yellowwins1 is reset");
      };
    } // end for loop 1

  } // end horizontalWin function

  // Diagonal Win
  // ==============================
  var diagonalWin = function() {
    var redwins1 = 0, redwins2 = 0, redwins3 = 0, redwins4 = 0, redwins5 = 0,
        redwins6 = 0, redwins7 = 0, redwins8 = 0, redwins9 = 0, redwins10 = 0,
        redwins11 = 0, redwins12 = 0, redwins13 = 0, redwins14 = 0, redwins15 = 0,
        redwins16 = 0, redwins17 = 0, redwins18 = 0, redwins19 = 0, redwins20 = 0,
        redwins21 = 0, redwins22 = 0, redwins23 = 0, redwins24 = 0;
    var yellowwins1 = 0, yellowwins2 = 0, yellowwins3 = 0, yellowwins4 = 0,
        yellowwins5 = 0, yellowwins6 = 0, yellowwins7 = 0, yellowwins8 = 0, yellowwins9 = 0, yellowwins10 = 0, yellowwins11 = 0, yellowwins12 = 0,
        yellowwins13 = 0, yellowwins14 = 0, yellowwins15 = 0, yellowwins16 = 0,
        yellowwins17 = 0, yellowwins18 = 0, yellowwins19 = 0, yellowwins20 = 0, yellowwins21 = 0, yellowwins22 = 0, yellowwins23 = 0, yellowwins24 = 0;

      if (c1.children[3].classList.contains('red')) {
        redwins1++
        // console.log("redwins1", redwins1);
        if (c2.children[2].classList.contains('red')) {
          redwins1++
          // console.log("redwins1", redwins1);
          if (c3.children[1].classList.contains('red')) {
            redwins1++
            // console.log("redwins1", redwins1);
            if (c4.children[0].classList.contains('red')) {
              redwins1++
              // console.log("redwins1", redwins1);
              if (redwins1 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins1
      if (c1.children[3].classList.contains('yellow')) {
        yellowwins1++
        // console.log("yellowwins1", yellowwins1);
        if (c2.children[2].classList.contains('yellow')) {
          yellowwins1++
          // console.log("yellowwins1", yellowwins1);
          if (c3.children[1].classList.contains('yellow')) {
            yellowwins1++
            // console.log("yellowwins1", yellowwins1);
            if (c4.children[0].classList.contains('yellow')) {
              yellowwins1++
              // console.log("yellowwins1", yellowwins1);
              if (yellowwins1 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins1

      if (c1.children[4].classList.contains('red')) {
        redwins2++
        if (c2.children[3].classList.contains('red')) {
          redwins2++
          if (c3.children[2].classList.contains('red')) {
            redwins2++
            if (c4.children[1].classList.contains('red')) {
              redwins2++
              if (redwins2 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins2
      if (c1.children[4].classList.contains('yellow')) {
        yellowwins2++
        if (c2.children[3].classList.contains('yellow')) {
          yellowwins2++
          if (c3.children[2].classList.contains('yellow')) {
            yellowwins2++
            if (c4.children[1].classList.contains('yellow')) {
              yellowwins2++
              if (yellowwins2 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins2

      if (c2.children[3].classList.contains('red')) {
        redwins3++
        if (c3.children[2].classList.contains('red')) {
          redwins3++
          if (c4.children[1].classList.contains('red')) {
            redwins3++
            if (c5.children[0].classList.contains('red')) {
              redwins3++
              if (redwins3 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins3
      if (c2.children[3].classList.contains('yellow')) {
        yellowwins3++
        if (c3.children[2].classList.contains('yellow')) {
          yellowwins3++
          if (c4.children[1].classList.contains('yellow')) {
            yellowwins3++
            if (c5.children[0].classList.contains('yellow')) {
              yellowwins3++
              if (yellowwins3 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins3

      if (c1.children[5].classList.contains('red')) {
        redwins4++
        if (c2.children[4].classList.contains('red')) {
          redwins4++
          if (c3.children[3].classList.contains('red')) {
            redwins4++
            if (c4.children[2].classList.contains('red')) {
              redwins4++
              if (redwins4 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins4
      if (c1.children[5].classList.contains('yellow')) {
        yellowwins4++
        if (c2.children[4].classList.contains('yellow')) {
          yellowwins4++
          if (c3.children[3].classList.contains('yellow')) {
            yellowwins4++
            if (c4.children[2].classList.contains('yellow')) {
              yellowwins4++
              if (yellowwins4 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins4

      if (c2.children[4].classList.contains('red')) {
        redwins5++
        if (c3.children[3].classList.contains('red')) {
          redwins5++
          if (c4.children[2].classList.contains('red')) {
            redwins5++
            if (c5.children[1].classList.contains('red')) {
              redwins5++
              if (redwins5 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins5
      if (c2.children[4].classList.contains('yellow')) {
        yellowwins5++
        if (c3.children[3].classList.contains('yellow')) {
          yellowwins5++
          if (c4.children[2].classList.contains('yellow')) {
            yellowwins5++
            if (c5.children[1].classList.contains('yellow')) {
              yellowwins5++
              if (yellowwins5 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins5

      if (c3.children[3].classList.contains('red')) {
        redwins6++
        if (c4.children[2].classList.contains('red')) {
          redwins6++
          if (c5.children[1].classList.contains('red')) {
            redwins6++
            if (c6.children[0].classList.contains('red')) {
              redwins6++
              if (redwins6 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins6
      if (c3.children[3].classList.contains('yellow')) {
        yellowwins6++
        if (c4.children[2].classList.contains('yellow')) {
          yellowwins6++
          if (c5.children[1].classList.contains('yellow')) {
            yellowwins6++
            if (c6.children[0].classList.contains('yellow')) {
              yellowwins6++
              if (yellowwins6 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins6

      if (c2.children[5].classList.contains('red')) {
        redwins7++
        if (c3.children[4].classList.contains('red')) {
          redwins7++
          if (c4.children[3].classList.contains('red')) {
            redwins7++
            if (c5.children[2].classList.contains('red')) {
              redwins7++
              if (redwins7 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins7
      if (c2.children[5].classList.contains('yellow')) {
        yellowwins7++
        if (c3.children[4].classList.contains('yellow')) {
          yellowwins7++
          if (c4.children[3].classList.contains('yellow')) {
            yellowwins7++
            if (c5.children[2].classList.contains('yellow')) {
              yellowwins7++
              if (yellowwins7 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins7

      if (c3.children[4].classList.contains('red')) {
        redwins8++
        if (c4.children[3].classList.contains('red')) {
          redwins8++
          if (c5.children[2].classList.contains('red')) {
            redwins8++
            if (c6.children[1].classList.contains('red')) {
              redwins8++
              if (redwins8 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins8
      if (c3.children[4].classList.contains('yellow')) {
        yellowwins8++
        if (c4.children[3].classList.contains('yellow')) {
          yellowwins8++
          if (c5.children[2].classList.contains('yellow')) {
            yellowwins8++
            if (c6.children[1].classList.contains('yellow')) {
              yellowwins8++
              if (yellowwins8 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins8

      if (c4.children[3].classList.contains('red')) {
        redwins9++
        if (c5.children[2].classList.contains('red')) {
          redwins9++
          if (c6.children[1].classList.contains('red')) {
            redwins9++
            if (c7.children[0].classList.contains('red')) {
              redwins9++
              if (redwins9 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins9
      if (c4.children[3].classList.contains('yellow')) {
        yellowwins9++
        if (c5.children[2].classList.contains('yellow')) {
          yellowwins9++
          if (c6.children[1].classList.contains('yellow')) {
            yellowwins9++
            if (c7.children[0].classList.contains('yellow')) {
              yellowwins9++
              if (yellowwins9 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins9

      if (c3.children[5].classList.contains('red')) {
        redwins10++
        if (c4.children[4].classList.contains('red')) {
          redwins10++
          if (c5.children[3].classList.contains('red')) {
            redwins10++
            if (c6.children[2].classList.contains('red')) {
              redwins10++
              if (redwins10 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins10
      if (c3.children[5].classList.contains('yellow')) {
        yellowwins10++
        if (c4.children[4].classList.contains('yellow')) {
          yellowwins10++
          if (c5.children[3].classList.contains('yellow')) {
            yellowwins10++
            if (c6.children[2].classList.contains('yellow')) {
              yellowwins10++
              if (yellowwins10 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins10

      if (c4.children[4].classList.contains('red')) {
        redwins11++
        if (c5.children[3].classList.contains('red')) {
          redwins11++
          if (c6.children[2].classList.contains('red')) {
            redwins11++
            if (c7.children[1].classList.contains('red')) {
              redwins11++
              if (redwins11 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins11
      if (c4.children[4].classList.contains('yellow')) {
        yellowwins11++
        if (c5.children[3].classList.contains('yellow')) {
          yellowwins11++
          if (c6.children[2].classList.contains('yellow')) {
            yellowwins11++
            if (c7.children[1].classList.contains('yellow')) {
              yellowwins11++
              if (yellowwins11 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins11

      if (c4.children[5].classList.contains('red')) {
        redwins12++
        if (c5.children[4].classList.contains('red')) {
          redwins12++
          if (c6.children[3].classList.contains('red')) {
            redwins12++
            if (c7.children[2].classList.contains('red')) {
              redwins12++
              if (redwins12 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins12
      if (c4.children[5].classList.contains('yellow')) {
        yellowwins12++
        if (c5.children[4].classList.contains('yellow')) {
          yellowwins12++
          if (c6.children[3].classList.contains('yellow')) {
            yellowwins12++
            if (c7.children[2].classList.contains('yellow')) {
              yellowwins12++
              if (yellowwins12 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins12

      if (c7.children[3].classList.contains('red')) {
        redwins13++
        if (c6.children[2].classList.contains('red')) {
          redwins13++
          if (c5.children[1].classList.contains('red')) {
            redwins13++
            if (c4.children[0].classList.contains('red')) {
              redwins13++
              if (redwins13 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins13
      if (c7.children[3].classList.contains('yellow')) {
        yellowwins13++
        if (c6.children[2].classList.contains('yellow')) {
          yellowwins13++
          if (c5.children[1].classList.contains('yellow')) {
            yellowwins13++
            if (c4.children[0].classList.contains('yellow')) {
              yellowwins13++
              if (yellowwins13 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins13

      if (c7.children[4].classList.contains('red')) {
        redwins14++
        if (c6.children[3].classList.contains('red')) {
          redwins14++
          if (c5.children[2].classList.contains('red')) {
            redwins14++
            if (c4.children[1].classList.contains('red')) {
              redwins14++
              if (redwins14 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins14
      if (c7.children[4].classList.contains('yellow')) {
        yellowwins14++
        if (c6.children[3].classList.contains('yellow')) {
          yellowwins14++
          if (c5.children[2].classList.contains('yellow')) {
            yellowwins14++
            if (c4.children[1].classList.contains('yellow')) {
              yellowwins14++
              if (yellowwins14 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins14

      if (c6.children[3].classList.contains('red')) {
        redwins15++
        if (c5.children[2].classList.contains('red')) {
          redwins15++
          if (c4.children[1].classList.contains('red')) {
            redwins15++
            if (c3.children[0].classList.contains('red')) {
              redwins15++
              if (redwins15 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins15
      if (c6.children[3].classList.contains('yellow')) {
        yellowwins15++
        if (c5.children[2].classList.contains('yellow')) {
          yellowwins15++
          if (c4.children[1].classList.contains('yellow')) {
            yellowwins15++
            if (c3.children[0].classList.contains('yellow')) {
              yellowwins15++
              if (yellowwins15 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins15

      if (c7.children[5].classList.contains('red')) {
        redwins16++
        if (c6.children[4].classList.contains('red')) {
          redwins16++
          if (c5.children[3].classList.contains('red')) {
            redwins16++
            if (c4.children[2].classList.contains('red')) {
              redwins16++
              if (redwins16 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins16
      if (c7.children[5].classList.contains('yellow')) {
        yellowwins16++
        if (c6.children[4].classList.contains('yellow')) {
          yellowwins16++
          if (c5.children[3].classList.contains('yellow')) {
            yellowwins16++
            if (c4.children[2].classList.contains('yellow')) {
              yellowwins16++
              if (yellowwins16 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins16

      if (c6.children[4].classList.contains('red')) {
        redwins17++
        if (c5.children[3].classList.contains('red')) {
          redwins17++
          if (c4.children[2].classList.contains('red')) {
            redwins17++
            if (c3.children[1].classList.contains('red')) {
              redwins17++
              if (redwins17 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins17
      if (c6.children[4].classList.contains('yellow')) {
        yellowwins17++
        if (c5.children[3].classList.contains('yellow')) {
          yellowwins17++
          if (c4.children[2].classList.contains('yellow')) {
            yellowwins17++
            if (c3.children[1].classList.contains('yellow')) {
              yellowwins17++
              if (yellowwins17 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins17

      if (c5.children[3].classList.contains('red')) {
        redwins18++
        if (c4.children[2].classList.contains('red')) {
          redwins18++
          if (c3.children[1].classList.contains('red')) {
            redwins18++
            if (c2.children[0].classList.contains('red')) {
              redwins18++
              if (redwins18 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins18
      if (c5.children[3].classList.contains('yellow')) {
        yellowwins18++
        if (c4.children[2].classList.contains('yellow')) {
          yellowwins18++
          if (c3.children[1].classList.contains('yellow')) {
            yellowwins18++
            if (c2.children[0].classList.contains('yellow')) {
              yellowwins18++
              if (yellowwins18 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins18

      if (c6.children[5].classList.contains('red')) {
        redwins19++
        if (c5.children[4].classList.contains('red')) {
          redwins19++
          if (c4.children[3].classList.contains('red')) {
            redwins19++
            if (c3.children[2].classList.contains('red')) {
              redwins19++
              if (redwins19 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins19
      if (c6.children[5].classList.contains('yellow')) {
        yellowwins19++
        if (c5.children[4].classList.contains('yellow')) {
          yellowwins19++
          if (c4.children[3].classList.contains('yellow')) {
            yellowwins19++
            if (c3.children[2].classList.contains('yellow')) {
              yellowwins19++
              if (yellowwins19 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins19

      if (c5.children[4].classList.contains('red')) {
        redwins20++
        if (c4.children[3].classList.contains('red')) {
          redwins20++
          if (c3.children[2].classList.contains('red')) {
            redwins20++
            if (c2.children[1].classList.contains('red')) {
              redwins20++
              if (redwins20 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins20
      if (c5.children[4].classList.contains('yellow')) {
        yellowwins20++
        if (c4.children[3].classList.contains('yellow')) {
          yellowwins20++
          if (c3.children[2].classList.contains('yellow')) {
            yellowwins20++
            if (c2.children[1].classList.contains('yellow')) {
              yellowwins20++
              if (yellowwins20 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins20

      if (c4.children[3].classList.contains('red')) {
        redwins21++
        if (c3.children[2].classList.contains('red')) {
          redwins21++
          if (c2.children[1].classList.contains('red')) {
            redwins21++
            if (c1.children[0].classList.contains('red')) {
              redwins21++
              if (redwins21 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins21
      if (c4.children[3].classList.contains('yellow')) {
        yellowwins21++
        if (c3.children[2].classList.contains('yellow')) {
          yellowwins21++
          if (c2.children[1].classList.contains('yellow')) {
            yellowwins21++
            if (c1.children[0].classList.contains('yellow')) {
              yellowwins21++
              if (yellowwins21 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins21

      if (c5.children[5].classList.contains('red')) {
        redwins22++
        if (c4.children[4].classList.contains('red')) {
          redwins22++
          if (c3.children[3].classList.contains('red')) {
            redwins22++
            if (c2.children[2].classList.contains('red')) {
              redwins22++
              if (redwins22 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins22
      if (c5.children[5].classList.contains('yellow')) {
        yellowwins22++
        if (c4.children[4].classList.contains('yellow')) {
          yellowwins22++
          if (c3.children[3].classList.contains('yellow')) {
            yellowwins22++
            if (c2.children[2].classList.contains('yellow')) {
              yellowwins22++
              if (yellowwins22 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins22

      if (c4.children[4].classList.contains('red')) {
        redwins23++
        if (c3.children[3].classList.contains('red')) {
          redwins23++
          if (c2.children[2].classList.contains('red')) {
            redwins23++
            if (c1.children[1].classList.contains('red')) {
              redwins23++
              if (redwins23 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins23
      if (c4.children[4].classList.contains('yellow')) {
        yellowwins23++
        if (c3.children[3].classList.contains('yellow')) {
          yellowwins23++
          if (c2.children[2].classList.contains('yellow')) {
            yellowwins23++
            if (c1.children[1].classList.contains('yellow')) {
              yellowwins23++
              if (yellowwins23 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins23

      if (c4.children[5].classList.contains('red')) {
        redwins24++
        if (c3.children[4].classList.contains('red')) {
          redwins24++
          if (c2.children[3].classList.contains('red')) {
            redwins24++
            if (c1.children[2].classList.contains('red')) {
              redwins24++
              if (redwins24 === 4) {
                alert("Red Wins!")
              }
            }
          }
        }
      } // end redwins24
      if (c4.children[5].classList.contains('yellow')) {
        yellowwins24++
        if (c3.children[4].classList.contains('yellow')) {
          yellowwins24++
          if (c2.children[3].classList.contains('yellow')) {
            yellowwins24++
            if (c1.children[2].classList.contains('yellow')) {
              yellowwins24++
              if (yellowwins24 === 4) {
                alert("Yellow Wins!")
              }
            }
          }
        }
      } // end yellowwins24

  } // end diagonalWin function

}; // close window.onload
