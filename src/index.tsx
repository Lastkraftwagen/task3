import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './App';
//import * as serviceWorker from './serviceWorker';

// class TodoApp extends React.Component<myprops, {}=""> {
//   constructor(props) {
//     super(props);
//     this.state = 
//     { 
//       items: [], 
//       text: '' 
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h3>Список дел</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Что нужно сделать?
//           </label>
//           <input
//             id="new-todo"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>
//             Добавить #{this.state.items.length + 1}
//           </button>
//         </form>
//       </div>
//     );
//   }
//   render() {
//     return <h1>Привет от {this.props.compiler} и {this.props.framework}!</h1>;
// }
// }
// </myprops,>

// interface Props { name: string; surname: string; }

// class Hello extends React.Component<Props> {
//     render() {
//         return <h1>Привет от {this.props.name} {this.props.surname}!</h1>;
//     }
// }

//ReactDOM.render( <Hello name="Vova" surname="Evdokimov"/>, document.getElementById("root"));
ReactDOM.render(<TodoApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
