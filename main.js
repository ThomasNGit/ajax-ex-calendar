// Controllare quanti giorni ha il mese  formando così una lista;
// Chiedere all’api quali sono le festività per il mese ;
// Evidenziare le festività nella lista
$(document).ready(function () {


    $.ajax({
       url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
       method: "GET",
       success: function (data) {
          console.log(data.response)
        //creo il ciclo for per stampare i giorni del mese in pagina
          var daysNumber = moment("2018-01-01", "YYYY-MM-DD").daysInMonth();
          
          for (i = 1; i <= daysNumber; i++) {
             var dayToday = "2018-01-" + i;
             var dateFormat = moment(dayToday).format("YYYY-MM-DD")
             var currentDay = moment(dayToday).format("dddd D MMMM");
             $(".mese").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
          }

          //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
          for (var i = 0; i < data.response.length; i++) {
             console.log(data.response[i].date)
 
             var dataFeste = data.response[i].date;
             

             var nomeFesta = data.response[i].name;

             var giornoDiFesta = $(".mese [data-date='" + dataFeste + "']");

             giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
                        
          }
 
       },
       error: function () {
          alert("Error");
       }
    });
 
 })