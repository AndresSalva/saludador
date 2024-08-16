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

export {getnombre,getgenero};
