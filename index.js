
$(function () {

    $("#creer").click(function () { // creer 
        var color;
        switch ($("#input").val()) {
            case "bleu":
                color = "bleu";
                break;
            case "rouge":
                color = "rouge";
                break;
            case "vert":
                color = "vert";
                break;
            default:
                color = "jaune";
                break;
        }
        var div = $("<div></div>").css("width", "50px").css("height", "50px").addClass(color);
        $("#cadre").append(div);
    });

    $("#supprimer").click(function () {
        var color = $("#input").val(); // Supprime la couleur entrer 
        $("#cadre div").remove("." + color);
    });

    $("#detruire").click(function () { //supprime tous les blocs
        $("#cadre div").remove();
    });

    $("#ecrire").click(function () {
        var enter = $("#input").val(); //ecrit sur les div l'entrée de l'input
        $("#cadre div").text(enter);
    });
    $("#vider").click(function () { //vide tout ce qu'il y a a l'interieur des div
        $("#cadre div").html("")
    });

    $("#shake").click(function () {
        $("#cadre div").effect("shake", {
            times: 4
        }, 2000); //secoue toutes les div 
    });

    $("#cadre").on('click', ".rouge", function () { //Explose les rouges
        $(this).hide("explode", {
            pieces: 16
        }, 2000);
    });
    $("#cadre").on('click', ".rouge", function () { //Les faits réaparaitre
        $(this).show("explode", {
            pieces: 16
        }, 2000);
    });

   $('#cadre').on('mouseover',".vert", function () {   //function qui change le style de la classe .vert
       $(this).css({
           background: 'blue'
       })
   })

   $('#cadre').on('click',".jaune", function () {
       $(this).css('transition-delay', '2s').css('background','red');  //fonction qui ajoute un delay de 2sec sur le changement de css
   })



   /**
    * function qui au double click et au chargement des div, compte sur le double click l'attribut class
    * et le stock dans count ensuite je concatene le nombre de class sur la longueur
    * la function dialog doit se remplir dans une div vide pour l'affichage
    */
   $('#cadre').on('dblclick',"div", function() {
       var color = $(this).attr('class')
       var count = $("."+color).length                          
       $('#modal').dialog({
           modal: true,
           title: `Vous avez ${count} div de couleur ${color}`
       })

    });
});