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
        return new Counter(doc._id, doc.counter?.newerValue)
    }

    toDoc() {
        return { counter: { newerValue: this.currentValue } };
    }

    increment() {
        this.currentValue++
    }

    get count() { return this.currentValue }


}

module.exports = { Counter };