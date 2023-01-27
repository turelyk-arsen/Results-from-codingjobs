window.onload = function () {
    let x = document.getElementById("container");

//WITH FUNCTION
    function addElement (parent, child, className) {
        let c = document.createElement(child);
        c.className = className;
        parent.appendChild(c);
    }

    let array = ["one", "two", "three", "four"];
    for (let i = 0; i < 4; i++) {
        addElement(container, "div", array[i]);
    }

    function addDumbElement () {
        let div = document.createElement("div");
        div.className = "one";
        x.appendChild(div);
    }

    function myFunction () {
        let pLike = document.createElement("p");
        pLike.className = "my-text";
        x.appendChild(pLike);
        pLike.innerHTML = "My function is nice!";
    }

    function paintGreen () {
        let paintGreen = document.createElement("div");
        paintGreen.className = "paintGreen";
        x.appendChild(paintGreen);
    }

    function alert () {
        console.log("Hello world!");
    }

    let target2 = x.children[2];
    target2.addEventListener("click", myFunction);

    let target3 = x.children[3];
    target3.addEventListener("click", addDumbElement);

    let target0 = x.children[0];
    target0.addEventListener("click", paintGreen);

    let targer1 = x.children[1];
    targer1.addEventListener("click", alert);

    //WITHOUT FUNCTION
    for (let i = 0; i < 4; i++) {
        let div = document.createElement("div");
        div.className = array[i];
        container.appendChild(div);
    }
};

