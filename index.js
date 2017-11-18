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
  let node = document.getElementById('#grand-node');
  console.log(`the node is ${node}`);
  let current = node.children.querySelector('div');
  let next = [];
  let selector = '#grand-node div';
  while(current.length > 0){
    if(current.querySelectorAll('div') > 0){
      for(var i = 0; i < current.length; i++){
        next.push(current.querySelectorAll('div'));
        selector += ' div';
        console.log(`selector is ${selector}`);
      }
    }
    current = next.shift();
  }

  return document.querySelector(selector);
}

deepestChild();
