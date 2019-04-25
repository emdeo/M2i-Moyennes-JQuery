
var lstNotes = [] // liste des notes

// Contient tous les blocs d'instructions JQuery. Ils se lançent dès que la page est chargée = $(document).ready()
$(document).ready(
    function () {

        //// SOLUTION DU PROF
        // $("#txtNbNotes").on("keypress", function (e) {
        //     var keycode = e.keycode || e.which
        //     if (keycode > 0) {
        //         let nb = parseInt($("#txtNbNotes").val())

        //         if (nb < 3 || nb > 8) return

        //         $("#txtMoyenne").val("")
        //         $("#serieNotes").empty()
        //         for (i = 0; i < nb; i++) {
        //             $("#serieNotes").append($("<input></input>").attr("type", "number"))
        //         }
        //     }
        // })

        //// SOLUTION DU PROF
        // $("#serieNotes > input").on("change", function () {
        //     let somme = 0
        //     let Nb = 0
        //     {
        //         $("#serieNotes > input").each(
        //             function (index) {
        //                 somme += parseFlaot($(this).val())
        //                 Nb++
        //             })
        //         if (Nb > 0) {
        //             $("#txtMoyenne").val(somme / Nb)
        //         }
        //     }
        // })

        // Ajouter autant d'éléments input que la valeur entrée par l'utilisateur
        $("#txtNbNotes").change(
            function () {

                // si mon élément div n'est pas vide, je supprime tous ses éléments enfants
                $("#serieNotes").empty()

                // je vérifie que le nombre de notes est compris entre 3 et 8
                if ($("#txtNbNotes").val() > 2 & $("#txtNbNotes").val() < 9) {

                    for (i = 0; i < $("#txtNbNotes").val(); i++) {

                        // j'ajoute un élément div à mon div principal (pour la mise en forme)
                        $("#serieNotes").append($("<div></div>").attr('id', 'divNote' + i))
                        $("#divNote" + i).attr("class", "col-md-3")

                        // j'ajoute un élément input à mon div 2ndaire (pour entrer une note)
                        $("#divNote" + i).append($("<input></input>").attr('id', 'inputNote' + i))

                        // je définis les attributs de mon élément input (porur le mettre en forme et pour l'identifier)
                        $("#inputNote" + i).attr("type", "number")
                        $("#inputNote" + i).attr("name", 'note' + i)
                        $("#inputNote" + i).attr("class", "form-control")
                        $("#inputNote" + i).attr("placeholder", "(de 0 à 20)")
                    }
                }
            }
        )

        // A chaque nouvel input (ou modification d'input), mettre à jour la moyenne
        $("#serieNotes > input").change(
            function () {
                lstNotes.push($(this).val())
                $("#txtMoyenne").val(Moyenne(lstNotes))
            }
        )
    }
)

// Calculer la moyenne d'un tableau passé en paramètre
function Moyenne(liste) {
    if (liste.length == 0) {
        return -1
    }

    var somme = 0

    liste.forEach(function (element) {
        somme += element
    })

    return somme / liste.length
}