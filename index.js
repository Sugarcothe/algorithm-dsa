class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item;
    this.length++
    return this.length;
  }

  pop(item) {
    // this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--;
    return item
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = 0; i < this.length - 1; i++) 
    {
      this.data[i] = this.data[i+1];
    }
  } 
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('key');
newArray.push('angel');
newArray.pop();
newArray.pop();
 