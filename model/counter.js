class Counter {
    id;
    currentValue;

    constructor(id, count) {
        this.id = id;
        this.currentValue = count;
    }

    static Zero() {
        return new Counter(undefined, 0);
    }

    static fromDoc(doc) {
        return new Counter(doc._id, doc.count)
    }

    increment() {
        this.currentValue++
    }

    toDoc() {
        return { count: this.currentValue };
    }
}

module.exports = { Counter };