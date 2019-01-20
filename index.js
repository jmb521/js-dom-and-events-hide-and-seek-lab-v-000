function nestedTarget() {
  return document.querySelector("#nested .target")

}

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function deepestChild() {
  var node = document.querySelector("#grand-node")
  var next_node = node.children[0]
  while (next_node) {
    node = next_node
    next_node = node.children[0]
  }
  return node
}

function increaseRankBy(n) {
  var list = document.querySelectorAll(".ranked-list")

  for(var i = 0; i< list.length; i++) {
    for(var j =0; j< list[i].children.length; j++) {
      
      list[i].children[j].innerHTML = parseInt(list[i].children[j].innerHTML) + n
    }
  }
}
