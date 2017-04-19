function getFirstSelector(selector) {
  return document.querySelector(selector )
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function deepestChild() {
  const lis = document.querySelectorAll('#grand-node div div div div')[0]
  return lis
}


function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (i + 1).toString()
  }
}
