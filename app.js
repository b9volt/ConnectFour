window.onload = function(){
  console.log('heeloooo');
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
