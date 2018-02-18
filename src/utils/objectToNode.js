import Node from '@/lib/Node'
import uuidV4 from '@/utils/uuidV4'

/**
* Default Node's states
*/
const nodeStates = {
  selected: false,
  selectable: true,
  checked: false,
  expanded: false,
  disabled: false,
  visible: true,
  indeterminate: false
}

function merge(state = {}) {
  return Object.assign({}, nodeStates, state)
}

export default function objectToNode(tree, obj) {
  let node = null

  if ('string' == typeof obj) {
    node = new Node(tree, {
      text: obj,
      state: merge(),
      id: uuidV4()
    })
  } else {
    node = new Node(tree, obj)
    node.states = merge(node.states)

    if (!node.id) {
      node.id = uuidV4()
    }

    if (node.children.length) {
      node.children = node.children.map(child => {
        child = objectToNode(tree, child)
        child.parent = node

        return child
      })
    }
  }

  return node
}