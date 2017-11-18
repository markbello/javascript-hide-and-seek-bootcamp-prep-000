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
  let node = document.querySelector('div#grand-node');
  console.log(`node is ${node}`);
  let current = node.children;
  console.log(`current is ${current} and ${current.length} long`);
  let next = [];
  let selector = '#grand-node div';
  while(current){
    if(current.children > 0){
      next.push(current.children.querySelector('div'));
      selector += ' div';
      console.log(`selector is ${selector}`);
    }
    current = next.shift();
  }
  console.log(`the final selector is ${selector}`);
  return document.querySelector(selector);
}

deepestChild();
