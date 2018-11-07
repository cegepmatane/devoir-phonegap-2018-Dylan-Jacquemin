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
        for(var i = 0; i < listeParty.length; i++)
        {
            if(listeParty[i].id == id)
            {
                return listeParty[i];
            }
        }
    }

    this.ajouter = function(party)
    {
        if (listeParty.length > 0)
            party.id = listeParty[listeParty.length-1].id + 1;
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

            var party = new Party(
                listeParty[position].id,
                listeParty[position].titre,
                listeParty[position].description,
                listeParty[position].participants
                );
            listeParty[position] = party;
        }
        return listeParty;
    }

    initialiser();
}