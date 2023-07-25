class Counter {
    id;
    currentValue;

    constructor(id, count) {
        this.id = id;
        this.currentValue = count ?? 0;
    }

    static Zero() {
        return new Counter(undefined, 0);
    }

    static fromDoc(doc) {
        return new Counter(doc._id, doc.counter?.currentValue)
    }

    increment() {
        this.currentValue++
    }

    toDoc() {
        return { counter: { currentValue: this.currentValue } };
    }
}

module.exports = { Counter };