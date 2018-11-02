var AjouterPartyVue = (
    function()
    {
        var pageAjouterParty = document.getElementById("page-ajouter-party").innerHTML;

        return function(actionEnregistrerParty)
        {
            this.afficher = function()
            {
                document.getElementsByTagName("body")[0].innerHTML = pageAjouterParty;

                var formulaireAjouter = document.getElementById("formulaire-ajouter");
                formulaireAjouter.addEventListener("submit", enregistrerParty);
            }

            var enregistrerParty = function(evenement)
            {
                evenement.preventDefault();

                var titre = document.getElementById("titre").value;
                var description = document.getElementById("description").value;
                var participants = document.getElementById("participants").value;

                var party = new Party(null, titre, description, participants);

                actionEnregistrerParty(party);
            }
        };
    }
)();