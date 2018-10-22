import PriorityQueue from 'stablepriorityqueue';

export default class Test {
    constructor() {
        // https://github.com/lemire/StablePriorityQueue.js
        // https://www.tutorialspoint.com/java/util/priorityqueue_poll.htm
        // https://www.javatpoint.com/post/java-priorityqueue-poll-method
        const prq = new PriorityQueue();
        for (let  i = 3; i < 10; i++) {
            prq.add(i);
        }
        const head = prq.poll();
        console.log('head', head);

    }
}