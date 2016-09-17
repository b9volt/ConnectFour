window.onload = function() {
  console.log('heeloooo');
  // declare nav variable
  var nav = document.getElementById('nav');
  console.log(nav);
  // declare player variable.
  var player = 1;
  // function for buttonClick to be called when user clicks a button

  var buttonClick = function() {
      // token.classList.add("red");
      // console.log("red");
      console.log("This is button id " + this.id);
      // this.id calls on the button that is pressed
      // console.log(this.id.charAt(1));
      // charAt(1) calls the index of the button
      // By adding the id of 'c', it also references its coresponding column
      var column = document.getElementById('c' + this.id.charAt(1));
      console.log('These are the columns children: ', column.children);
      // console.log('This is the last child of the column: ', column.children[column.children.length - 1]);
      // var lastChild = column.children[column.children.length - 1];
      // console.log(lastChild);
      // lastChild.classList.add('red');
      // Loop backwards by accessing last child with column.length - 1.
      for (var p = column.children.length -1; p >= 0; p--){
      console.log(p);
      if (column.children[p].classList.contains('red') || column.children[p].classList.contains('black')) {
        continue;
      } else {
        if (player == 1) {
          column.children[p].classList.add('red');
          player = 0;
        } else {
          column.children[p].classList.add('black');
          player = 1;
        }
        // column.children[p].classList.add('red');
        break;
      }
    }

        console.log(player);
      win();
    };

  var win = function() {
    var column1 = document.getElementById('c1');
    var redwins = 0;
    var blackwins = 0;
    // console.log("I am: ", column1.children);
    // console.log("I am the chilren of column1: ", column1.children);
    for (var w = column1.children.length -1; w >= 0; w--) {
      // console.log("What is: " ,column1.children[w]);
      if (column1.children[w].classList.contains('red')) {
        // redwins = redwins + 1;
        redwins++
        console.log("I am red" ,redwins);
        if (redwins == 4) {
          console.log("Red Wins!")
        }

      } else if (column1.children[w].classList.contains('black')) {
          redwins = 0;
          console.log("redwins is reset");
      }

      if (column1.children[w].classList.contains('black')) {
        // redwins = redwins + 1;
        blackwins++
        console.log("I am black" ,blackwins);
        if (blackwins == 4) {
          console.log("Black Wins!")
        }

      } else if (column1.children[w].classList.contains('red')) {
          blackwins = 0;
          console.log("blackwins is reset");
      } else {
           console.log("space is empty");
      }; // end if statement

    } // end for loop

  }; // end win function

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
  console.log(container);

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
      // token.id = j;
      column.appendChild(token);
    };
  };

}; // close window.onload
