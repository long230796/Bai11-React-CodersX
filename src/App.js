import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import OrderList from './components/OrderList';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      // {title: "đi chợ", isComplete: false},
      // {title: "đổ xăng", isComplete: true}
    ];

    this.listItem = [
      {type: 1, isRender: true},
      {type: 'A', isRender: true},
      {type: 'a', isRender: false}

    ]
  }

  render() {
    return (
      <div className="App">
        {this.todoItems.length > 0 && this.todoItems.map((item, index) => <TodoItem item={item} />)}
        {this.todoItems.length == 0 && <TodoItem item={{title: 'Nothing here'}} />}
        {this.listItem.map((item) => item.isRender && <OrderList item={item} />)}
      </div>
        
    );
  }
}


export default App;
