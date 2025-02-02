class Observable {
    #observers;
    
    constructor() {
        this.#observers = new Set();
    }
    subscribe(observer) {
        this.#observers.add(observer);
    }
    unsubscribe(observer) {
        this.#observers.delete(observer);
    }
    notify(data) {
        this.#observers.forEach(observer => observer(data));
    }
}

export default Observable