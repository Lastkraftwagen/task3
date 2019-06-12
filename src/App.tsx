import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function assert<T, U>(t: T): U {
  return t as unknown as U; // works
}

interface IProps { }

export interface IItems {
  text: string;
  id: number;
}

interface IState {
  // items: IItems[]; 
  value: string;
};

class TodoApp extends React.Component<IProps, IState> {
  state = {
    // items: [],
    value: ''
  }

  items:IItems[] =[];

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!this.state.value.length) {
      return;
    }
    const newItem = {
      text: this.state.value,
      id: Date.now()
    };
    this.items.push(newItem);
    this.setState({
      value: ''
    })

    // if (this.state.items === null) {
    //   this.setState({
    //     items: [newItem],
    //     value: ''
    //   })
    // }
    
  }

  render() {
    return (
      <div>
        <h3>Список дел</h3>
        <ul>
          {this.items.map(el => (<TodoList id={el.id} text={el.text} />))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Что нужно сделать?
          </label>
          <input id="new-todo" onChange={this.handleChange} value={this.state.value} />
          <button>
            Добавить #{this.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
}


export default TodoApp;

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <p>{gr.invoke()}</p>
//     </div>
//   );
// }



// class Greeter extends React.Component {
//   render(){
//     return(
//       <div className="App">
//         <p>Hello, {this.props}</p>
//       </div>
//     )
//   }
// }

// class Greeter{
//   greeting:string;
//   constructor(message: string)
//   {
//     this.greeting = message;
//   }
  
//   invoke(){
//     return "Hello " + this.greeting;
//   }
//   render(){
//     return(
//       <div className="App">
//         <p>{this.invoke()}</p>
//       </div>
//     )
//   }
// }

//export default Greeter;




