window.onload = function(){
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

    buttons.addEventListener("click", function() {
      console.log('Hello World');
    });
  };
  // declare container variable
  var container = document.getElementById('container');
  console.log(container);
  // create loop to add 7 columns
  for (var i = 0; i < 7; i++) {
    var column = document.createElement('div');
    column.className = "column";
    container.appendChild(column);
  // create loop to add 6 tokens inside columns
    for (var j = 0; j < 6; j++) {
      var token = document.createElement('div');
      token.className = "token";
      column.appendChild(token);
    };
  };
  // var piece = [];
  // var addToken = function() {
  //   piece[i]++;
  // };


};
