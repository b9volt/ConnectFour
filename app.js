window.onload = function() {
  console.log('heeloooo');
  // declare nav variable
  var nav = document.getElementById('nav');
  console.log(nav);
  // function for buttonClick to be called when user clicks a button
  var buttonClick = function() {
      // token.classList.add("red");
      // console.log("red");
      console.log("This is button id " + this.id);
      // this.id calls on the button that is pressed
      console.log(this.id.charAt(1));
      // charAt(1) calls the index of the button
      // By adding the id of 'c', it also references its coresponding column
      var column = document.getElementById('c' + this.id.charAt(1));
      // console.log('These are the columns children: ', column.children);
      // console.log('This is the last child of the column: ', column.children[column.children.length - 1]);
      var lastChild = column.children[column.children.length - 1];
      console.log(lastChild);
      lastChild.classList.add('red');
      // var s = document.getElementsByClassName(column).children;
      // s[1].classList.add("red");
    };
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

// close window.onload
};
