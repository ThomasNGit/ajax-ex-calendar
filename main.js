// Controllare quanti giorni ha il mese  formando così una lista;
// Chiedere all’api quali sono le festività per il mese ;
// Evidenziare le festività nella lista
$(document).ready(function () {

    var month = 1;

    conteggioMesi(month); //richiamo la funzione del conteggio giorni
    
    festa(month);   //richiamo la funzione delle feste
    
    var currMonth = $(".mese"); //salvo la variabile per richiamare il contenitore mese
            

            //funzione al click per il mese successivo
            $("#next").click(function(){

               if(month == 12){  //se il mese è il dodicesimo, torna al primo

                   month = 1

                   currMonth.html("");

                   conteggioMesi(month);

                   festa(month);

               } else { //altrimenti incrementa la variabile mese e stampa in pagina l'output del mese successivo

                   month++;
                   currMonth.html("");

                   conteggioMesi(month);

                   festa(month);
               }

            })

            //funzione al click per il mese precedente
            $("#prev").click(function(){

                if(month == 1){  //se il mese è il primo, torna al dodicesimo

                    month = 12
 
                    currMonth.html("");

                    conteggioMesi(month);

                    festa(month);

                } else { //altrimenti decrementa la variabile mese e stampa in pagina l'output del mese successivo
                    month--;
                    currMonth.html("");

                    conteggioMesi(month);

                    festa(month);
                }

            })

})


//funzione per stampare i giorni del mese
function conteggioMesi(month){

    //imposto una variabile per calcolare i giorni del mese del mese che imposto
    var giorniMese = moment("2018-" + month, "YYYY-MM").daysInMonth();
    
    
    //apro un ciclo for sulla lunghezza del mese che ho selezionato nella mia variabile
    for (i = 1; i <= giorniMese; i++) {
       //variabile che valorizza la data
       var currentDate = moment('2018-' + month + '-' + i , 'YYYY-MM-D').format('YYYY-MM-DD');

       //creo la variabile che mi stamperà in pagina l'output
       var currentDay = moment(currentDate).format("dddd DD MMMM");
       //stampo in pagina
       $(".mese").append('<div data-date="' + currentDate + '">' + currentDay + '</div>');
    }
 }
 
 //funzione per effettuare la chiamata AJAX
 function festa(month){
    $.ajax({
       url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=" + (month - 1),
       method: "GET",
       
       success: function (data) {
          //controllo per verificare se il mese ha effettivamente una festa controllando l'array di response che mi genera l'API
          if (data.response.length > 0) {
             for (var i = 0; i < data.response.length; i++) {
 
                //Creo una variabile coi valori che mi passa l'API
                var feste = data.response[i].date;

                var nomeFesta = data.response[i].name;
                //sostituisco in pagina gli elementi che hanno come attributo un valore uguale alla mia festività , li coloro di rosso e APPEND il nome della festività (altra chiave della mia api)
                $(".mese [data-date='" + feste + "']").removeClass("white").addClass("holiday").append("<br>" + nomeFesta)
             }
 
          }
       },
       error: function () {
          alert("ERROR");
       }
    })
 }
 