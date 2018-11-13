function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + parseInt(n)).toString();
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
