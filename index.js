function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var lis = document.querySelector('.ranked-list');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + parseInt(n)).toString();
  }
}
