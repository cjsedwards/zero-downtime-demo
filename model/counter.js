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
        const counterValue = doc.counter?.newValue ?? doc.counter?.newerValue;
        return new Counter(doc._id, counterValue)
    }

    toDoc() {
        return { counter: { newValue: this.currentValue, newerValue: this.currentValue } };
    }

    increment() {
        this.currentValue++
    }

    get count() { return this.currentValue }


}

module.exports = { Counter };