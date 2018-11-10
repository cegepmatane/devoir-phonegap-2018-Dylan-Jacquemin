var PartyDAO = function()
{
    var listeParty;

    var initialiser = function()
    {
        if(!listeParty)
        {
            listeParty = [];
        }
    }

    this.chercherAvecId = function(id)
    {
        return listeParty[id];
    }

    this.ajouter = function(party)
    {
        if (listeParty.length > 0)
            party.id = listeParty.length;
        else
            party.id = 0;

        listeParty[party.id] = party;
        localStorage['party'] = JSON.stringify(listeParty);
        //console.log("lister->listeParty : " + JSON.stringify(listeParty));
    }

    this.modifier = function(party)
    {
        listeParty[party.id] = party;
        localStorage['party'] = JSON.stringify(listeParty);
    }

    this.lister = function()
    {
        //console.log("lister->listeParty : " + listeParty);
        //console.log("lister->localStorage['party'] : " + localStorage['party']);
        if (localStorage['party'])
            listeParty = JSON.parse(localStorage['party']);

        for (position in listeParty)
        {
            if (listeParty[position] != null)
            {
                var party = new Party(
                    listeParty[position].id,
                    listeParty[position].titre,
                    listeParty[position].description,
                    listeParty[position].participants
                );
                listeParty[position] = party;
            }
            else
                listeParty[position] = null;
        }
        return listeParty;
    }

    this.supprimer = function(id)
    {
        listeParty[id] = null;

        localStorage['party'] = JSON.stringify(listeParty);
    }

    initialiser();
}