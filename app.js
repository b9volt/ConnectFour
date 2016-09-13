window.onload = function(){
  console.log('heeloooo');
  var nav = document.getElementById('nav');
  console.log(nav);
  for (var x = 0; x < 7; x++) {
    var buttons = document.createElement('button');
    buttons.className = "buttons";
    nav.appendChild(buttons);
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
};
