function getnombre(a) {
  return a;
}
function getgenero(a) {
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

export {getnombre,getgenero,getedad};
