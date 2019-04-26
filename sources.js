
// Renvoyer une valeur arrondie au centième
function arrondi(n) {
    return Math.round(n * 100) / 100
}

$(document).ready(function () {

    // Quand la valeur de txtNbNotes a changé (l'utilisateur a appuyé sur Entrée ou TAB)...
    $("#txtNbNotes").on("change", function () {

        // Vider le div de notes au cas où il contiendrait déjà des éléments
        $("#divNotes").empty()

        // Si le nombre de notes n'est pas dans [3 ; 8], la page ne fait rien d'autre
        var nbNotes = $("#txtNbNotes").val
        if (nbNotes < 3 || nbNotes > 8) return

        // Ajouter autant de nouveaux inputs que l'utilisateur a demandé
        for (i = 0; i < $("#txtNbNotes").val(); i++) {

            // NECESSAIRE POUR LA MISE EN FORME : créer un nouveau div qui contiendra un input (c-à-d la note)
            $("#divNotes").append($("<div></div>").attr("id", "divNote" + i))
            $("#divNote" + i).attr("class", "col-md-2")

            // Créer un nouvel input dans lequel entrer une note
            $("#divNote" + i).append($("<input></input>").attr("id", "txtNote" + i))
            $("#txtNote" + i).attr("type", "number")
            $("#txtNote" + i).attr("min", "0")
            $("#txtNote" + i).attr("max", "20")
            $("#txtNote" + i).attr("class", "form-control")
            $("#txtNote" + i).attr("placeholder", "(de 0 à 20)")
        }

        // Calculer la moyenne
        // On commence par récupérer (.find) tous les input de l'élément #divNotes
        $("#divNotes").find("input").on("change", function () {
            var somme = 0
            var Nb = 0

            // Pour chaque input de #divNotes, on exécute les instructions suivantes :
            $("#divNotes").find("input").each(function (index) {

                // Sans parseFloat(), le calcul de moyenne est impossible (typage erroné ?)
                var note = parseFloat($(this).val())

                // On vérifie que la note est dans [0 ; 20], sinon on ne la compte pas
                // (évite de calculer la moyenne en incluant les inputs vides)
                if (note > -1 & note < 21) {
                    somme += note
                    Nb += 1
                }
            })

            // Afficher la moyenne dans le dernier input de la page
            $("#txtMoyenne").val(arrondi(somme / Nb))
        })

    })
})