//Pegando o texto inserido
const phraseElement = document.querySelector("#mainSentence");
const newPhraseElement = document.querySelector(".texto-descriptografado");
const botaoDeCriptografar = document.querySelector(".make-text");

function codificar(text) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "e":
        encryptedText += "enter";
        break;
      case "i":
        encryptedText += "imes";
        break;
      case "a":
        encryptedText += "ai";
        break;
      case "o":
        encryptedText += "ober";
        break;
      case "u":
        encryptedText += "ufat";
        break;
      default:
        encryptedText += text[i];
    }
  }
  return encryptedText;
}

botaoDeCriptografar.addEventListener("click", () => {
  const phrase = phraseElement.value;
  console.log(phrase)
  //passando como parâmetro
  const encryptedPhrase = codificar(phrase);
  newPhraseElement.textContent = encryptedPhrase;
});

//Decodificar
const botaoDescriptografar = document.querySelector(".remake-text");

function descodificar(text) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "enter":
        encryptedText += "e";
        break;
      case "imes":
        encryptedText += "i";
        break;
      case "ai":
        encryptedText += "a";
        break;
      case "ober":
        encryptedText += "o";
        break;
      case "ufat":
        encryptedText += "u";
        break;
      default:
        encryptedText += text[i];
    }
  }
  return encryptedText;
}

botaoDescriptografar.addEventListener("click", () => {
  const phrase = phraseElement.value;
  const encryptedPhrase = descodificar(phrase);
  newPhraseElement.textContent = encryptedPhrase;
});