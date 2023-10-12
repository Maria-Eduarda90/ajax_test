function carregarImagens() {
  var xmlHttprequest = new XMLHttpRequest();
  var url = "https://dog.ceo/api/breeds/image/random";

  xmlHttprequest.open("GET", url, true);

  xmlHttprequest.onreadystatechange = () => {
    if (xmlHttprequest.readyState == 3) {
      console.log("Carregando o conteudo");
    }
    if (xmlHttprequest.readyState == 4) {
      var jsonResponse = JSON.parse(xmlHttprequest.responseText);

      console.log("Requisição Finalizada");
      console.log("Resultado da Requisição: " + jsonResponse);
      console.log("Resultado da Requisição: " + jsonResponse.message);

      var imgDog = document.getElementById("img_dog");
      imgDog.src = jsonResponse.message;
    }
  };

  xmlHttprequest.send();
}
