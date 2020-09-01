import React from 'react';

// function Car() {
//     return (
//         <h3>this is car component</h3>
//     )
// }

// const Car = () => (
//     <div>This is car 
//     <strong>text strong</strong>
//     </div>
// )


export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <strong>Year: {props.year} </strong>
        {props.children}
        <button onClick={props.onChangeTitle}>click</button>
    </div>
)
