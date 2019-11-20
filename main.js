$( document ).ready(function(){

    $.ajax({

        url : "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",

        method : "GET",

        success : function(data){
            console.log(data.response);
            
            for(j = 0; j < data.response.length; j++)

            var festa = data.response[j]

            giornoDiFesta = festa.date;

            console.log(giornoDiFesta);
            
            $(".festa").append(giornoDiFesta);

                // var data = moment("2018-01").day("1").month("0").year("2018").format("dddd DD/MMMM/YYYY");
            var daysNumber = moment("01/01/2018", "DD/MM/YYYY").daysInMonth();

            console.log(daysNumber);

            var monthContainer = $(".mese");

            for(var i = 1; i <= daysNumber; i++){

                var giorno = moment("2018-01-" + i).format("YYYY-MM-DD")

                console.log(giorno);
                
                monthContainer.append("<li>" + giorno + "</li>")

                if(giornoDiFesta === giorno){

                    giorno.addClass("holiday")
                }
                    

            }


        }

    })



})