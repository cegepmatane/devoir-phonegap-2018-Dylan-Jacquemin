var PartyVue = (
    function()
    {
        var pageParty = document.getElementById("page-party").innerHTML;

        return function(party)
        {
            var partyTitre;
            var partyDescription;
            var partyParticipants;

            this.afficher = function()
            {
                document.getElementsByTagName("body")[0].innerHTML = pageParty;

                partyTitre = document.getElementById("party-titre");
                partyTitre.innerHTML = party.titre;

                partyDescription = document.getElementById("party-description");
                partyDescription.innerHTML = party.description;

                partyParticipants = document.getElementById("party-participants");
                partyParticipants.innerHTML = party.participants;
            }

        };
    }
)();