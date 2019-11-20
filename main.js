$( document ).ready(function(){

    // var data = moment("2018-01").day("1").month("0").year("2018").format("dddd DD/MMMM/YYYY");
    var daysNumber = moment("01/01/2018", "DD/MM/YYYY").daysInMonth();

    console.log(daysNumber);

    var monthContainer = $(".mese");

    for(var i = 1; i <= daysNumber; i++){

        var giorno = moment("2018-01-" + i).format("YYYY-MM-DD")

        console.log(giorno);
        
        monthContainer.append("<li>" + giorno + "</li>")
    }

    $.ajax({

        url : "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",

        method : "GET",

        success : function(data){

            var festa = data.response;
            console.log(festa);
            
            if(festa === giorno){

                giorno.css("color: red")
            }

        }
    })

})