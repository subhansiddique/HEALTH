// Array of card data
const cardData = [
  {
    imageUrl: "./Assests/image1.jpg",
    title: "Exercise as self-care",
    description:
      "August 23, 2018  No Comments Nec nec porttitor orci proin ullam proin. Magnis eleifend pharetra adipisci…",
    buttonText: "Read more",
  },
  {
    imageUrl: "./Assests/image2.jpg",
    title: "Importance of yoga",
    description:
      "August 23, 2018  No Comments Dui risus egestas consequat commodo, quas minus turpis nisl, voluptate! Quam,….",
    buttonText: "Read more",
  },
  {
    imageUrl: "./Assests/image3.jpg",
    title: "Meditate for 15 minutes everyday",
    description:
      "August 23, 2018  No CommentsDui risus egestas consequat commodo, quas minus turpis nisl, voluptate! Quam,…",
    buttonText: "Read more",
  },
  {
    imageUrl: "./Assests/image4.jpg",
    title: "Swimming is the best stress buster",
    description:
      "August 23, 2018  No CommentsDui risus egestas consequat commodo, quas minus turpis nisl, voluptate! Quam,…",
    buttonText: "Read more",
  },
  {
    imageUrl: "./Assests/image6.jpg",
    title: "Have your breakfast like a king",
    description:
      "August 23, 2018  No CommentsDui risus egestas consequat commodo, quas minus turpis nisl, voluptate! Quam,…",
    buttonText: "Read more",
  },
  {
    imageUrl: "./Assests/image5.jpg",
    title: "5 simple stretches to relax body muscles",
    description:
      "August 23, 2018  No CommentsDui risus egestas consequat commodo, quas minus turpis nisl, voluptate! Quam,…",
    buttonText: "Read more",
  },
];

// Create a function to generate a card
function createCard(imageUrl, title, description, buttonText) {
  // Create a card container
  const card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.borderRadius = "8px";
  card.style.width = "300px";
  card.style.overflow = "hidden";
  card.style.boxShadow = "0 4px 8px grey";
  card.style.margin = "16px";
  card.style.fontFamily = "Arial, sans-serif";
  card.style.backgroundColor = "white";
  card.style.boxShadow = " 10px 20px 22px black;"


  // Create and append the image element
  const img = document.createElement("img");
  img.src = imageUrl;
  img.style.width = "100%";
  img.style.height = "auto";
  card.appendChild(img);

  // Create and append the title element
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = title;
  cardTitle.style.fontSize = "24px";
  cardTitle.style.margin = "16px";
  card.appendChild(cardTitle);

  // Create and append the description paragraph
  const cardDescription = document.createElement("p");
  cardDescription.textContent = description;
  cardDescription.style.fontSize = "16px";
  cardDescription.style.color = "#555";
  cardDescription.style.margin = "0 16px 16px";
  card.appendChild(cardDescription);

  // Create and append the button element
  const button = document.createElement("button");
  button.textContent = buttonText;
  button.style.display = "block";
  button.style.width = "calc(100% - 32px)";
  button.style.margin = "16px";
  button.style.padding = "10px";
  button.style.fontSize = "16px";
  button.style.color = "#fff";
  button.style.backgroundColor = "#8d037b";
  button.style.border = "none";
  button.style.borderRadius = "4px";
  button.style.cursor = "pointer";

  button.onmouseover = function() {
    button.style.backgroundColor = '#2d0133'; // Darker purple on hover
};
button.onmouseout = function() {
    button.style.backgroundColor = '#8d037b'; // Original color when not hovered
};
  button.onclick = function () {
    alert("Button clicked on " + title);
  };
  card.appendChild(button);

  return card;
}

// Get the container to hold the cards
const container = document.getElementById("card-container");

// Loop through the card data and create a card for each item
cardData.forEach((data) => {
  const card = createCard(
    data.imageUrl,
    data.title,
    data.description,
    data.buttonText
  );
  container.appendChild(card);
});


 function handleSendmsg (){
  Swal.fire({
    title: "MESSAGE SEND",
    text: "Your Message has been send",
    icon: "success"
  });
 }
