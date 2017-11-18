function getFirstSelector(selector){
  let elt = document.querySelector(selector);
  return elt;
}

function nestedTarget(){
  let elt = document.querySelector('#nested .target');
  return elt;
}

function increaseRankBy(n){
  let lis = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < lis.length; i++){
    let temp = parseInt(lis[i].innerHTML) + n;
    lis[i].innerHTML = temp.toString();
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node');
  let current = node.querySelectorAll('div');
  let next = [];
  let selector = '#grand-node';
  while(current.length > 0){
    for(var i = 0; i < current.length; i++){
      next.push(current[i].querySelector('div'));
      selector += ' div';
    }
    current = next.shift();
  }
  return document.querySelector(selector);
}
