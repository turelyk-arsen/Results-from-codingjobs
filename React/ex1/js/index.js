// ReactDOM.render(<div>
//     <h1>Hello world!</h1>
//     <h2>Second tag in div</h2>
//     </div>, document.getElementById("app"))

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse over")
const helpText = "Help text!"

const element = (<div className = "container  bg-primary-subtle"> 
    <h1>{helpText}</h1>
    <input placeholder={helpText} onClick={inputClick} onMouseEnter = {mouseOver} />
    <p>{helpText == "Help text!" ? "Yes" : "No"}</p>
    </div>)

const app = document.getElementById("app")
ReactDOM.render(element, app)