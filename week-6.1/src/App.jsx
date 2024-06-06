///usage of React.memo to reduce the rerender and the moving state var drom top to bottom to reduce the rerenders 


//////////////////////////////
// import React, { useState } from "react"; // Add React here


// function App(){ // Capitalize the function name to App
//   const [firstTitle, setFirstTitle] = useState("my name is kirat");

//   function updateButton(){
//     setFirstTitle("my name is " + Math.random());
//   }
  

//   return (
//     <div>
//       <button onClick={updateButton}>Click to change the title</button>
//       <Header title={firstTitle}></Header> 
//       <Header title="is kirat "></Header>
//       <Header title="2nd kirat"></Header>
//     </div>
//   );
// }
// function headerWithButton(){
//  const [firstTitle, setFirstTitle] = useState("my name is kirat");

//   function updateButton(){
//     setFirstTitle("my name is " + Math.random());
//   }
//  return(
//    <div>
//      <button onClick={updateButton}>Click to change the title</button>
//       <Header title={firstTitle}></Header> 
//    </div>
//  )
// }
// const Header = React.memo(function Header({title}){
// return (
// <div>
//  {title}
// </div>
// );
// }
// )
// export default App; 
//////////////////////////////////////////////////
///creating the todo list for usage of keys in react



// import React,{useState} from 'react';
// function App(){
//   const[todos,setTodos]=useState([{
//     id:1,
//     title:"to to gym",
//     description:"go gym today",
//   },
// {
// id:2,
// title:"make coffe",
// description:"drink copy and n joy",
// },
// {
//   id:3,
//   title:"do gsoc",
//   description:"mandatory to do gsoc everyday", 
// }
// ]);

// function putTodo(){
//  setTodos([...todos,{
//   id:4,
//   title:Math.random(),
//   description:Math.random(),
//  }])
// }

//   return(
//     /// to iterate over the state variable  array and render it using map fn
//     <div>
//       <button onClick={putTodo}>add todo</button>
//       {todos.map(function (todo){
//         return <Todo key={todo.id} title={todo.title} description={todo.description} />
//       })}
//     </div>
//   );
  
// }


// function Todo(props){
//   return(
//     <div>
//       <h1>{props.title}</h1>
//       <h5>{props.description}</h5>
//     </div>
//   )
// }
//export default App;


function App() {

  return (
    <div style={{display: "flex"}}>
      <Card>
        hi there
      </Card>
      <Card>
        <div>
          hello from the 2nd card
        </div>
      </Card>
    </div>
  )
}

function Card({children}) {
  return <div style={{
    border: "1px solid black",
    padding: 10,
    margin: 10
  }}>
    {children}
  </div>
}

export default App