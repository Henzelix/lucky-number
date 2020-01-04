const people = [
  "Ernest coś zepsuł", // Edge case, when the API will return 0 (no lucky number this day)
  "Michał",
  "Aurelia",
  "Mateusz",
  "Maksymin",
  "Tomasz",
  "Paulina",
  "Anal",
  "Mikołaj",
  "Ziemowit",
  "CzarnyJanek",
  "Jendrek",
  "Szymon. K",
  "Kamil K.",
  "Marek",
  "Krzysztof",
  "Szymon Ł.",
  "Eryk",
  "Aleksander",
  "Wiktor",
  "Wit",
  "Hubcio",
  "Karyna",
  "Wojciech",
  "Adam",
  "Bartosz",
  "Dawid",
  "Marcin W.",
  "Kamil W.",
  "Ernest",
  "Joanna"
]

//Fetching lucky-number from get-lucky.netlify.com to display todays lucky number.
fetch('https://get-lucky.netlify.com/.netlify/functions/get')
  .then((response) => {
    response.json().then(({ data }) => {
      let number = data.luckyNumber;
      document.querySelector("#number").textContent = number;
      document.querySelector("#person").textContent = people[number];
    })
  });