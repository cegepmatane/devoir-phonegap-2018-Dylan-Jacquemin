var ListePartyVue = (
    function()
    {
        var pageListeParty = document.getElementById("page-liste-party").innerHTML;

        return function (listePartyDonnee) {
            this.afficher = function () {
                document.getElementsByTagName("body")[0].innerHTML = pageListeParty;

                var listeParty = document.getElementById("liste-party");

                var li = "";
                for (var numeroParty in listePartyDonnee) {
                    if(listePartyDonnee[numeroParty] != null)
                        li += '<li><a class="aListe" href="#party/' + numeroParty + '">' + listePartyDonnee[numeroParty].titre + '</a></li>';
                }
                listeParty.innerHTML = li;
            }
        };
    }
)();