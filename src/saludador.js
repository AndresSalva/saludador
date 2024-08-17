const translations = {
  "español": {
    "Hola": "Hola",
    "señor": "señor",
    "señora": "señora",
    "de": "de",
    "años": "años"
  },
  "ingles": {
    "Hola": "Hello",
    "señor": "mister",
    "señora": "miss",
    "de": "of",
    "años": "years"
  }
};

function traducir(text, targetLanguage) {
  const words = text.split(" ");
  return words.map(word => translations[targetLanguage][word] || word).join(" ");
}

function getnombre(a) {
  return a;
}
function getgenero(a) {
  let resu
  if (a == "masculino"){
    resu = "señor"
  }
  else{
    resu = "señora"
  }
  return resu;
}
function getedad(a) {
  return "de "+ a + " años";
}

export {getnombre,getgenero,getedad,traducir};
