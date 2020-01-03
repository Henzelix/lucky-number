//Fetching JSON string from get-lucky.netlify.com to display todays lucky number.
fetch('https://get-lucky.netlify.com/.netlify/functions/get')
  .then((response) => {
    return response.json();
  })
  //Displaying lucky number.
  .then((ok) => {
    let number = ok.data.luckyNumber;
    console.log(number);
    //Displaying lucky number in div "number".
    document.getElementById("number").innerHTML = number;

    if(number == 24){
      document.getElementById("person").innerHTML = "Henzel";
    }
  });