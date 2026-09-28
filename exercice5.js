const candidats = [
    {cin : "CD554322" , nom : "ELFASSI" , prenom : "KARIM" , partipolitique : "PJD" , age: 35 , electeurs : []},
    {cin : "EF567891" , nom : "ALAMI" , prenom : "AHMED" , partipolitique : "PAM" , age : 40 , electeurs : []},
    {cin : "MN432157" , nom : "BENNANI" , prenom : "SARA" , partipolitique : "RNI" , age : 30 , electeurs : []}
];
function modifierpartipolitique(cin , nouveaupartipolitique) {
    for(let i = 0; i < candidats.length; i++) { 
        if(candidats[i].cin === cin){
            candidats[i].partipolitique = nouveaupartipolitique;
        }
    }
} 
function modifierage(cin , nouvelage) {
  if(nouvelage < 25) {
 return false;
}
    for(let i = 0; i < candidats.length; i++) {
      if(candidats[i].cin === cin) {
        candidats[i].age = nouvelage;
      }
    }
}
modifierpartipolitique("CD554322" ,"PI");
modifierage("MN432157" , 32);
console.log(candidats) ;

