const candidats = [];
function AjouterCandidat(cin, nom, prenom, partipolitique, age) {
    for(let i = 0; i < candidats.length; i++) {
        if(candidats[i].cin === cin) {
            return false;
        }
    }
    if(age < 25) {
        return false;
    }
let NouveauCandidat = {cin : cin, nom : nom, prenom : prenom, partipolitique : partipolitique, age : age, electeurs : []};
candidats.push(NouveauCandidat);
return true;
}
AjouterCandidat( "CD554322" , "ELFASSI" , "KARIM" , "PJD" , 35 );
console.log(candidats);

