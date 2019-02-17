function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from "react";
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
      return React.createElement(WrappedComponent, _extends({}, this.props, {
        publish: this.publish,
        subscribe: this.subscribe,
        listeners: this.listeners
      }));
    }

  }

  WithMediator.displayName = `withMediator(${WrappedComponent.displayName || WrappedComponent.name})`;
  return WithMediator;
}

export { withMediator, mediator };