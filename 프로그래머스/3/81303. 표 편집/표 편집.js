function solution(n, k, cmd) {
    const answer = Array(n).fill('O')
    const root = new Node(0)
    let curNode = root
    let prevNode = root
    for(let i = 1 ; i < n ; i ++) {
        // 연결된 노드 리스트 생성
        const newNode = new Node(i, prevNode)
        prevNode.next = newNode
        prevNode = newNode
        
        // 선택되었다면
        if(i === k) {
            curNode = newNode
        }
    }
    
    const deleted = []
    cmd.forEach((order) => {
        const [ord, val] = order.split(' ')
        let i = 0
        switch(ord) {
            case 'U':
                while(i < val && curNode.prev) {
                    curNode = curNode.prev
                    i++
                }
                break
            case 'D':
                while(i < val && curNode.next) {
                    curNode = curNode.next
                    i++
                }
                break
            case 'C':
                deleted.push(curNode)
                const prev = curNode.prev
                const next = curNode.next
                if(prev && next) {
                    prev.next = next
                    next.prev = prev
                    curNode = next
                } else if (prev) {
                    prev.next = null
                    curNode = prev
                } else if (next) {
                    next.prev = null
                    curNode = next
                }
                break
            case 'Z':
                const node = deleted.pop()
                const prevNode = node.prev
                const nextNode = node.next
                if(prevNode) {
                    prevNode.next = node
                }
                if(nextNode) {
                    nextNode.prev = node
                }
                break
        }
    })
    
    deleted.forEach(node => {
        answer[node.idx] = 'X'
    })
    return answer.join('')
    return 
}

function Node(idx,prevNode) {
    this.idx = idx
    this.prev = prevNode
    this.next
}
