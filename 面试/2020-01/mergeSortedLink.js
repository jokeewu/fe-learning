//
// 链表合并
//

function Node(val, nextNode = null) {
  this.val = val;
  this.next = nextNode;
}

function mergeSortedLink(...links) {
  const getLinkNodes = l => {
    const nodes = [];
    while(l) {
      nodes.push(l);
      l = l.next;
    }
    return nodes;
  }

  let nodes = [];
  links
    .map(l => getLinkNodes(l))
    .forEach(ns => nodes.push.apply(nodes, ns));

  nodes = nodes.sort((n1, n2) =>  n1.val - n2.val);

  nodes.forEach((n, idx) => {
    n.next = nodes[idx + 1] || null;
  })

  return nodes[0];
}

function makeLink(valArr) {
  const nodes = valArr.map(val => new Node(val));
  nodes.forEach((node, idx) => {
    node.next = nodes[idx + 1] || null;
  });
  return nodes[0];
}

const l1 = makeLink([1, 3, 5, 7, 8, 9]);
const l2 = makeLink([2, 4, 6, 10, 11, 13]);
const l3 = makeLink([10, 102, 14, 99, 109, 137]);

console.log(JSON.stringify(l1));
console.log(JSON.stringify(l2));
console.log(JSON.stringify(l3));
console.log(JSON.stringify(mergeSortedLink(l1, l2, l3), null, 2));