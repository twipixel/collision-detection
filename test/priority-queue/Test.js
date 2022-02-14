import PriorityQueue from 'stablepriorityqueue';

export default class Test {
  constructor() {
    // https://github.com/lemire/StablePriorityQueue.js
    // https://www.tutorialspoint.com/java/util/priorityqueue_poll.htm
    // https://www.javatpoint.com/post/java-priorityqueue-poll-method
    const prq = new PriorityQueue();
    for (let i = 3; i < 10; i++) {
      prq.add(i);
    }
    const head = prq.poll();
    console.log('head', head);

    const prq1 = new PriorityQueue();
    prq1.add(1);
    prq1.add(0);
    prq1.add(5);
    prq1.add(4);
    prq1.add(3);
    prq1.add(1);
    prq1.add(0);
    console.log('---------------');
    console.log('prq1', prq1);
    // 최우선 순위 반환
    console.log(prq1.peek());
    console.log(prq1.size);
    while (!prq1.isEmpty()) {
      // 최우선 순위 요소 제거
      console.log(prq1.poll());
    }
    // 사용하지 않는 메모리 복구
    prq1.trim();
  }
}