function pareil(ent1, ent2){
  var rep;
  if (typeof ent1 === typeof ent2){ 
      rep ="Type similaire";
  }

  else {
      rep = "Type non similaire"
  }
  console.log(rep);
}
pareil("abc", "a");