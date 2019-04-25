
// Arrondir une valeur au centième près
function arrondi(n) {
    return Math.round(n*100)/100
}

// Contient tous les blocs d'instructions JQuery
// Ceux-ci se lançent dès que la page est chargée = $(document).ready()
$(document).ready(
    function () {

        //// SOLUTION DU PROF
        $("#txtNbNotes").on("keypress", function (e) {

            var keycode = e.keycode || e.which

            if (keycode == 13) {

                let nb = parseInt($("#txtNbNotes").val())

                if (nb < 3 || nb > 8) return

                $("#txtMoyenne").val("")
                $("#serieNotes").empty() // supprimer les éléments input avant d'en créer de nouveaux (évite de multiplier les inputs)

                for (i = 0; i < nb; i++) {
                    $("#serieNotes").append($("<div></div>").attr('id', 'divNote' + i))
                    $("#divNote" + i).attr("class", "col-md-3")

                    // j'ajoute un élément input à mon div 2ndaire (pour entrer une note)
                    $("#divNote" + i).append($("<input></input>").attr('id', 'inputNote' + i))

                    // je définis les attributs de mon élément input (porur le mettre en forme et pour l'identifier)
                    $("#inputNote" + i).attr("type", "number")
                    $("#inputNote" + i).attr("name", "note" + i)
                    $("#inputNote" + i).attr("class", "form-control")
                    $("#inputNote" + i).attr("placeholder", "(de 0 à 20)")
                    $("#inputNote" + i).attr("min", "0")
                    $("#inputNote" + i).attr("max", "20")

                }

                // Calculer la moyenne
                $("#serieNotes").find("input").on("change", function () {
                    let somme = 0
                    let Nb = 0

                    $("#serieNotes").find("input").each(
                        function (index) {

                            // Permet de calculer la moyenne en ignorant les inputs vides
                            var note = parseFloat($(this).val())

                            if (note > -1 & note < 21){
                                somme += note
                                Nb++
                            }
                        });

                    if (Nb > 0) {
                        $("#txtMoyenne").val(arrondi(somme / Nb))
                    }

                })
            }
        })
    }
)
