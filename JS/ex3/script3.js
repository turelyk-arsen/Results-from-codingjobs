window.onload = function () {
    let x = document.getElementById("container");
    let arrayForDiv = ["one", "two", "three", "four"];
    for (var i = 0; i < 5; i++) {
        let div = document.createElement("div");
        div.className = arrayForDiv[i];
        x.appendChild(div);
    }
}

// function addElementInDOM (x, child, classname) {
//     let c = document.createElement(child);
//     c.className = classname;
//     x.appendChild(div)
// }

let x = document.getElementById("container");
x.addEventListener("click", function () {
    document.getElementById("outPut").innerHTML = "Hello"
});

