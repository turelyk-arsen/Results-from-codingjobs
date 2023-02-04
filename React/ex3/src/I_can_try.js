
// class Car {
//     constructor(name) {
//         this.brand = name;
//     }
//     present () {
//         return "I have a " + this.brand;
//     }
// }

// const myCar = new Car("Ford");
// document.write(myCar.brand);
// document.writr(myCar.present());

// class Model extends Car {
//     constructor (name, mod) {
//         super(name);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ",it is a " + this.model;
//     }
// }
// const twoCar = new Model("Ford", "Mustang")
// document.write(twoCar.show());

// const hello = function () {
//     return "Hello world"
// };
// hello();

// const hey = () => {
//     return "Hello"
// }
// hey();

// const hey2 = () => "good morning"
// hey2();


// ReactDOM.render(
//     <h1>Hello world!!! </h1>, document.getElementById("root")
// );

// const element = <h1>Hello world!</h1>;

// const newElement = <h1> Hello {element} </h1>
// const element = <h1>Hello world!</h1>;
// const newElement = <h1> {element} </h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(newElement)

// import React from "react";
// import ReactDOM from 'react-dom/client';

// class Myclass extends React.Component {
//     constructor (props) {
//         super (props)
//         this.state = {color: "red"}
//     }
//     render() {
//         return (<div>
//             <h1>Hello I learn react</h1>
//             <p>I am a {this.state.color} Car!</p>
//             <p>I am a {this.props.lenght} Car!</p>
//             <Car/>


//         </div>)

//     }
// }

// class Car extends React.Component {
//     constructor (props) {
//         super(props)
//         this.state = {color: "blue",
//           model: "Ford"}
//     }
//     changeColor = () => {
//         this.setState({color: "red"});
//     }
   
//     render () {
//         return (<div>
//             <span>My car is {this.state.color} .</span>
//             <button type="button" onClick={this.changeColor}>Change colour</button>
//         </div>)
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Myclass lenght="2 meters"/>);

// import React from 'react';
// import ReactDom from 'react-dom/client';

// function Car(props) {
//     return (<div>
//     <h1>I am a { props.brand } !</h1>
//     <h2>I am a { props.brand.model }</h2></div>)
// }

// function Garage() {
//     const carName = "Audi";
//     const carInfo = {name: "it's my car", model: "Seat"};
    //    const cars = [
    //     {id:1, brand: 'Ford'},
    //     {id:2, brand: 'BMW'},
    //     {id: 3, brand: 'Audi'}
    //    ];
//     return (
//         <>
//         <h1>We live in my garage?</h1>
//         <Car brand="Ford" />
//         <Car brand={ carName }/>
//         <Car brand={ carInfo }/>
        //    <ul>
        //     {cars.map((car) => <Car key={car.id} brand={car.brand}/>)}
        //    </ul>
//         </>
//     );
// }

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Garage/>);

import React from 'react';
import ReactDOM from 'react-dom/client';

function Football() {
    const shoot = () => {
        alert("Great shoot!");
    }
    const shootNew = (a, b) => {
        alert(a);
        alert(b.type);
    }

    return (
        <>
        <button onClick={shoot}>Take the shot!</button>
        <button onClick={(event) => shootNew("Goal!", event)}>Take the shot!</button>
    </>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football/>);