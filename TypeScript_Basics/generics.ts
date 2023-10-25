class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove(item: T) {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();
nameQueue.add("Mensa");
nameQueue.add("Adore");

const numberQueue = new Queue<number>();
numberQueue.add(90);
numberQueue.add(900);
