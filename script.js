// if(document.getElementById("number").innerText.length > 3){
//   document.getElementById("number").style.fontSize = "10vh"
// }
// else{
//   document.getElementById("number").style.fontSize = "50vh"
// }

//Fetching JSON string from get-lucky.netlify.com to display todays lucky number.
fetch('https://zsk-poznan.github.io/szczesliwy-numerek-backend/')
  .then((response) => {
    return response.json();
  })
  //Displaying lucky number.
  .then((ok) => {
    let number = ok.TK;
    console.log(number);
    //Displaying lucky number in div "number".
    document.getElementById("number").innerHTML = number;
    //Listing names of my classmates
    if(number == 1){
      document.getElementById("person").innerHTML = "Michał";
    } else if(number == 2){
      document.getElementById("person").innerHTML = "Aurelia";
    } else if(number == 3){
      document.getElementById("person").innerHTML = "Mateusz";
    } else if(number == 4){
      document.getElementById("person").innerHTML = "Maksymin";
    } else if(number == 5){
      document.getElementById("person").innerHTML = "Tomasz";
    } else if(number == 6){
      document.getElementById("person").innerHTML = "Paulina";
    } else if(number == 7){
      document.getElementById("person").innerHTML = "Anal";
    } else if(number == 8){
      document.getElementById("person").innerHTML = "Mikołaj";
    } else if(number == 9){
      document.getElementById("person").innerHTML = "Ziemowit";
    } else if(number == 10){
      document.getElementById("person").innerHTML = "CzarnyJanek";
    } else if(number == 11){
      document.getElementById("person").innerHTML = "Jądrek";
    } else if(number == 12){
      document.getElementById("person").innerHTML = "Szymon K.";
    } else if(number == 13){
      document.getElementById("person").innerHTML = "Kamil K.";
    } else if(number == 14){
      document.getElementById("person").innerHTML = "Marek";
    } else if(number == 15){
      document.getElementById("person").innerHTML = "Krzysztof";
    } else if(number == 16){
      document.getElementById("person").innerHTML = "Szymon Ł.";
    } else if(number == 17){
      document.getElementById("person").innerHTML = "Eryk";
    } else if(number == 18){
      document.getElementById("person").innerHTML = "Aleksander";
    } else if(number == 19){
      document.getElementById("person").innerHTML = "Wiktor";
    } else if(number == 20){
      document.getElementById("person").innerHTML = "Wit";
    } else if(number == 21){
      document.getElementById("person").innerHTML = "Hubcio";
    } else if(number == 22){
      document.getElementById("person").innerHTML = "Wojciech";
    } else if(number == 23){
      document.getElementById("person").innerHTML = "Adaß";
    } else if(number == 24){
      document.getElementById("person").innerHTML = "Bartosz";
    } else if(number == 25){
      document.getElementById("person").innerHTML = "Dawid";
    } else if(number == 26){
      document.getElementById("person").innerHTML = "Marcin W.";
    } else if(number == 27){
      document.getElementById("person").innerHTML = "Kamil W.";
    } else if(number == 28){
      document.getElementById("person").innerHTML = "Ernest";
    } else if(number == 29){
      document.getElementById("person").innerHTML = "Joanna";
    } else if(number > 29){
      document.getElementById("person").innerHTML = "Nie ma nas tylu";
    } else{
      document.getElementById("person").innerHTML = "Pobierz Classy";
    }
  });
