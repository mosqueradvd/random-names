const messages = [
  "David",
  "Flor",
  "Carol",
  "Julian",
  "Emilse",
  "Sophia",
  "Tatiana",
  "Santiago",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
