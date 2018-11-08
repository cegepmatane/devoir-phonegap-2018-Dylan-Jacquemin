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

                if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
                    alert('Les APIs pour gérer les fichiers ne sont pas supportées dans votre navigateur');
                }
                else {
                    document.getElementById('selectionner-image').addEventListener('change', gererFichierSelectionne, false);
                }

            }

            var enregistrerParty = function(evenement)
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

                var party = new Party(null, titre, description, participants);

                actionEnregistrerParty(party);
            }

            var gererFichierSelectionne = function(evt) {
                var fichier = evt.target.files[0];
                var sortie = [];

                sortie.push('<p>', escape(fichier.name), " \- ", fichier.size, ' octets</p>');

                document.getElementById('fichier-selectione').innerHTML = '<ul>' + sortie.join('') + '</ul>';
            }
        };
    }
)();