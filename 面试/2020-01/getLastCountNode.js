//
// 给定一个单向链表获取指定倒数某个节点
//

function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

function reverseLink(l) {
  let head = l;
  let prev = null;
  let current = null;
  let next = null;
  while(head) {
    current = head;
    next = head.next;
    current.next = prev;
    prev = current;
    head = next;

    // 到达末尾
    if (!head) {
      head = current;
      break;
    }
  }
  return head;
}

/**
 * @param {Node}} head 
 * @param {Number} lastCount 倒数个数
 */
function getLastCountNode(head, lastCount) {
  // 反转链表
  head = reverseLink(head);

  console.log('reversedLink:', JSON.stringify(head));

  let count = 0;
  while(head) {
    count += 1;
    if (lastCount === count) {
      return head;
    }
    head = head.next;
  }
}

function makeLink(valArr) {
  const nodes = valArr.map(val => new Node(val));
  nodes.forEach((node, idx) => {
    node.next = nodes[idx + 1] || null;
  });
  return nodes[0];
}

const l1 = makeLink([1, 3, 5, 7, 8, 9]);

console.log(getLastCountNode(l1, 2)); // Node(8);