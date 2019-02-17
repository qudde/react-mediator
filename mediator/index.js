import React, {Component} from "react";
import mediator from "./store";

function withMediator(WrappedComponent) {
    class WithMediator extends Component {
        constructor(props) {
            super(props);
            this.listeners = [];
        }

        subscribe(name, fn) {
            this.listeners[name] = mediator.subscribe(name, fn);
        }

        publish(name, data) {
            mediator.publish(name, data);
        }

        unsubscribe() {
            for (let key in this.listeners) {
                mediator.remove(key, this.listeners[key]);
            }

            this.listeners = {};
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    publish={this.publish}
                    subscribe={this.subscribe}
                    listeners={this.listeners}
                />
            );
        }
    }

    WithMediator.displayName = `withMediator(${WrappedComponent.displayName ||
        WrappedComponent.name})`;

    return WithMediator;
}

export {withMediator, mediator};
