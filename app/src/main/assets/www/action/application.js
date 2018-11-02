(
    function () {
        var instance = this;

        var initialiser = function()
        {
            this.partyDAO = new PartyDAO();
            window.addEventListener("hashchange", naviguer);
            naviguer();
        };

        var naviguer = function(evenement)
        {
            var hash = window.location.hash;

            if (!hash)
            {
                this.listePartyDonnee = this.partyDAO.lister();
                var listePartyVue = new ListePartyVue(instance.listePartyDonnee);
                listePartyVue.afficher();
            }
            else if (hash.match(/^#ajouter-party/))
            {
                var ajouterPartyVue = new AjouterPartyVue(actionEnregistrerParty);
                ajouterPartyVue.afficher();
            }
            else
            {
                var navigation = hash.match(/^#party\/([0-9]+)/);
                //alert(navigation);
                var idParty = navigation[1];
                //alert(idParty);
                var partyVue = new PartyVue(instance.listePartyDonnee[idParty]);
                partyVue.afficher();
            }
        };

        var actionEnregistrerParty = function(party)
        {
            this.partyDAO.ajouter(party);
            naviguerAccueil();
        };

        var naviguerAccueil = function()
        {
            window.location.hash = "";
        };

        initialiser();
    }
)();