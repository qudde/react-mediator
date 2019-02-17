class Mediator {
    constructor() {
        this.events = {};
    }

    publish(name, obj) {
        let e = this.events[name];

        if (!e) {
            return;
        }

        e.forEach(fn => fn.apply(this, [obj]));
    }

    subscribe(name, func) {
        if (!this.events[name]) {
            this.events[name] = [];
        }

        const index = this.events[name].push(func) - 1;

        return index;
    }

    remove(name, index) {
        let e = this.events[name];

        if (e && typeof index === "undefined") {
            delete this.events[name];
            return true;
        }

        if (e && e[index]) {
            delete this.events[name][index];
            if (this.events[name] && !this.events[name][0]) {
                delete this.events[name];
            }
            return true;
        }

        return;
    }

    getEvents() {
        return this.events;
    }
}

export default Mediator;
