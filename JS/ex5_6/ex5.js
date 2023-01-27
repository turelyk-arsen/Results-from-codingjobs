window.onload = function () {
  let parent = document.createElement("div");
  parent.className = "parent";

  let body = document.getElementsByTagName("body")[0];
  body.appendChild(parent);

  function createCard(imageSource, movieTitle, movieInfo) {
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.src = imageSource;
    card.appendChild(image);

    let info = document.createElement("div");
    info.className = "info";

    let text = document.createElement("div");
    text.className = "text";

    let title = document.createElement("h3");
    title.innerText = movieTitle;

    let prg = document.createElement("p");
    prg.innerText = movieInfo;

    let heart = document.createElement("div");
    heart.className = "heart-white";
    function onClick() {
      if (heart.className === "heart-white") {
        heart.className = "heart-red";
      } else {
        heart.className = "heart-white";
      }
    }
    heart.addEventListener("click", onClick);

    text.appendChild(title);
    text.appendChild(prg);

    info.appendChild(text);
    info.appendChild(heart);

    card.appendChild(info);

    parent.appendChild(card);
  }
  let boxOffice = [
    {
      image: "https://m.media-amazon.com/images/I/71wtexfLmDL._AC_SL1200_.jpg",
      title: "Despicable Me",
      info: "140 MIN | COMEDY",
    },
    {
      image: "https://m.media-amazon.com/images/I/71wtexfLmDL._AC_SL1200_.jpg",
      title: "Mission: Impossible – Fallout",
      info: "47 MIN | ADVENTURE",
    },
  ];

  for (let i = 0; i < boxOffice.length; i++) {
    createCard(boxOffice[i].image, boxOffice[i].title, boxOffice[i].info);
  }
};
