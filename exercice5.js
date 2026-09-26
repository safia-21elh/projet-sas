const candidats = [
    {cin : "CD554322" , nom : "ELFASSI" , prenom : "KARIM" , partipolitique : "PJD" , age: 35 , electeurs : []},
    {cin : "EF567891" , nom : "ALAMI" , prenom : "AHMED" , partipolitique : "PAM" , age : 40 , electeurs : []},
    {cin : "MN432157" , nom : "BENNANI" , prenom : "SARA" , partipolitique : "RNI" , age : 30 , electeurs : []}
];
function modifierpartipolitique(cin , nouveaupartipilitique) {
    for(let i = 0; i < candidats.length; i++) { 
        if(candidats[i].cin === cin){
            candidats[i].partipolitique = nouveaupartipilitique;
        }
    }
} 
modifierpartipolitique("CD554322" , "PI");
console.log(candidats) ;

