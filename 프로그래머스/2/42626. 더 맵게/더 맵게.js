class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() { return this.heap.length; }
    peek() { return this.heap[0]; }
    
    push(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;

        while (
          index > 0 &&
          this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
        ) {
            const temp = this.heap[index];
            this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
            this.heap[Math.floor((index - 1) / 2)] = temp;
            index = Math.floor((index - 1) / 2);
        }
    }

    // 값을 빼되, 오름차 순 정렬 함
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;

        while (index * 2 + 1 < this.heap.length) {
            let minChildIndex = 
              (index * 2 + 2 < this.heap.length 
                && this.heap[index*2 + 2] < this.heap[index*2 + 1]) 
                ? index * 2 + 2 : index * 2 + 1;
            
            if (this.heap[index] < this.heap[minChildIndex]) {
                break;
            }

            const temp = this.heap[index];
            this.heap[index] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            index = minChildIndex;
        }
        return minValue;
    }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0;

  // 힙 안에 음식이 2개 이상 있고
  // 스코빌 지수가 가장 작은 음식의 수치가 K보다 작을 때까지 반복
  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    // 스코빌 지수가 가장 작은 두 음식 섞기
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedFood = first + second * 2;
    minHeap.push(mixedFood);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}