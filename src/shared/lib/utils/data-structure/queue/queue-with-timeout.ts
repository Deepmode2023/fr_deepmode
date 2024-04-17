import { LinkedList, ToStringCallback } from "../linked-list/linked-list";
import { CompareFunctionType } from "../comparator";
import { eventTimeoutBus } from "../../eventBus/eventTimeoutBus";
import { v4 as uuidv4 } from "uuid";

type UniqKeyType = { uniqKey: ReturnType<typeof uuidv4> };

export class QueueWithTimeout<TValue extends UniqKeyType> {
  timeout: number;
  resolveList = new LinkedList<LinkedList<Promise<void>>>();
  blockedTime = 0;
  cacheNode: string[] = [];
  queueList: LinkedList<TValue>;
  constructor(timeout: number, compareFunction?: CompareFunctionType<TValue>) {
    this.timeout = timeout;
    this.queueList = new LinkedList<TValue>(compareFunction);
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queueList?.head?.value;
  }

  isEmpty() {
    return !!this.queueList.head;
  }

  enqueue(value: TValue) {
    if (this.isCache(value.uniqKey)) return;
    this.queueList.append(value);
  }

  dequeue() {
    const callback = () => {
      this.blockedTime = this.blockedTime - this.timeout;
      return this.queueList.deleteHead();
    };
    const eventBus = eventTimeoutBus<typeof callback>(
      this.blockedTime,
      callback
    );
    this.blockedTime = this.blockedTime + this.timeout;

    return eventBus;
  }

  isCache(uniqKey: string) {
    return this.cacheNode.includes(String(uniqKey));
  }

  toString(callback: ToStringCallback<TValue>) {
    return this.queueList.toString(callback);
  }
}
