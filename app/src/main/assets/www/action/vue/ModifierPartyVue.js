var ModifierPartyVue = (
    function () {
        var pageModifierParty = document.getElementById("page-modifier-party").innerHTML;

        return function (actionEnregistrerModificationParty, party)
        {
            this.afficher = function()
            {
                document.getElementsByTagName("body")[0].innerHTML = pageModifierParty;

                var formulaireModifier = document.getElementById("formulaire-modifier");
                formulaireModifier.addEventListener("submit", enregistrerModificationParty);
            
                document.getElementById("titre").value = party.titre;
                document.getElementById("description").value = party.description;
                document.getElementById("participants").value = party.participants;
            }

            var enregistrerModificationParty = function(evenement)
            {
                evenement.preventDefault();

                if (document.getElementById("titre").value == "")
                {
                    window.alert("Vous devez entrer un titre !");
                    return;
                }

                var titre = document.getElementById("titre").value;
                var description = document.getElementById("description").value;
                var participants = document.getElementById("participants").value;

                var partyModifiee = new Party(party.id, titre, description, participants);

                actionEnregistrerModificationParty(partyModifiee);
            }
        };
    }
)();