# qolly-react-mediator
Useful higher order react component for passing events upstream.

# Usage
```javascript
import {withMediator} from "qolly-react-mediator";

class MyComponent extends Component {
  componentDidMount() {
  
    // Subscribing to events
    this.props.subscribe("my-event-listener", (data) => this.doSomething(data));
    
    // Publishing events with data to available listeners
    this.props.publish("my-other-event-listener", "Hello!");
  }
}

export default withMediator(MyComponent);
```;
