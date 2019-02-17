# react-mediator
Useful higher order react component for passing events upstream.

## Usage with React
```javascript
import {withMediator} from "react-mediator";

class MyComponent extends Component {
  componentDidMount() {
  
    const {publish, subscribe} = this.props;
  
    // Subscribing to events
    subscribe("my-event-listener", data => this.doSomething(data));
    
    // Publishing events with data to available listeners
    publish("my-other-event-listener", "Hello!");
  }
}

export default withMediator(MyComponent);
```

## Standalone usage (or combined with React)
```javascript
import {mediator} from "react-mediator";

// Subscribing to events
mediator.subscribe("my-event-listener", data => this.doSomething(data));

// Publishing events
mediator.publish("my-listener", {whatsUp: "!"});

// Unsubscribing single listener
const myListener = mediator.subscribe("my-event-listener", data => this.doSomething(data));
mediator.remove("my-event-listener", myListener);

// Remove entire group of listeners
mediator.remove("my-event-listener");

// Useful for debugging purposes
mediator.getEvents();

```

## ToDo
- [ ] Proper tests with Jest and full test coverage
- [ ] Socket integration for server <-> client message communication
- [ ] CI pipelines and checks/linting
- [ ] Add examples
- [ ] Throw errors and warnings
- [ ] Static typing with Flow
