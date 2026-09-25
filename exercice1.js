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
function AjouterPlusieursCandidats(TableauDeCandidats) {
    for(let i = 0; i < TableauDeCandidats.length; i++) {
        let c = TableauDeCandidats[i];
        AjouterCandidat(c.cin, c.nom, c.prenom, c.partipolitique, c.age);
    }
    return true;
}
AjouterPlusieursCandidats([ 
{cin : "EF567891", nom : "ALAMI", prenom : "AHMED", partipolitique : "PAM" , age : 40},
{cin : "MN432157", nom : "BENNANI", prenom : "SARA", partipolitique : "RNI", age : 30}
]);

AjouterCandidat( "CD554322" , "ELFASSI" , "KARIM" , "PJD" , 35 );
console.log(candidats);

