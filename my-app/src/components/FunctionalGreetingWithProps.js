import React from "react";

// function FunctionalGreeting() {
//     return <h1> Hello from my react</h1>
// }


const FunctionalGreetingWithProps = (props) => {
    return <h1>Hello,  {props.greeting} My name is {props.name} and I am {props.age}. </h1>;
}

export default FunctionalGreetingWithProps;
