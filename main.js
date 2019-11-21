// Controllare quanti giorni ha il mese  formando così una lista;
// Chiedere all’api quali sono le festività per il mese ;
// Evidenziare le festività nella lista
$(document).ready(function () {

        //chiamate mese 1
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
                $(".mese-1").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
            }

            //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
            for (var i = 0; i < data.response.length; i++) {
                console.log(data.response[i].date)
    
                var dataFeste = data.response[i].date;
                
                var nomeFesta = data.response[i].name;

                var giornoDiFesta = $(".mese-1 [data-date='" + dataFeste + "']");

                if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa

                giornoDiFesta.addClass("holiday").append(" " + nomeFesta);

                }
                            
            }
    
        },
        error: function () {
            alert("Error");
        }
        });

        // chiamata mese 2
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=1",
            method: "GET",
            success: function (data) {
                console.log(data.response)
                //creo il ciclo for per stampare i giorni del mese in pagina
                var daysNumber = moment("2018-02-01", "YYYY-MM-DD").daysInMonth();
                
                for (i = 1; i <= daysNumber; i++) {
                    var dayToday = "2018-02-" + i;
                    var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                    var currentDay = moment(dayToday).format("dddd D MMMM");
                    $(".mese-2").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                }
    
                //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                for (var i = 0; i < data.response.length; i++) {
                    console.log(data.response[i].date)
        
                    var dataFeste = data.response[i].date;
                    
                    var nomeFesta = data.response[i].name;
    
                    var giornoDiFesta = $(".mese-2 [data-date='" + dataFeste + "']");
    
                    if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
    
                    giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
    
                    }
                                
                }
        
            },
            error: function () {
                alert("Error");
            }
            });

            // chiamata mese 3
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=2",
            method: "GET",
            success: function (data) {
                console.log(data.response)
                //creo il ciclo for per stampare i giorni del mese in pagina
                var daysNumber = moment("2018-03-01", "YYYY-MM-DD").daysInMonth();
                
                for (i = 1; i <= daysNumber; i++) {
                    var dayToday = "2018-03-" + i;
                    var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                    var currentDay = moment(dayToday).format("dddd D MMMM");
                    $(".mese-3").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                }
    
                //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                for (var i = 0; i < data.response.length; i++) {
                    console.log(data.response[i].date)
        
                    var dataFeste = data.response[i].date;
                    
                    var nomeFesta = data.response[i].name;
    
                    var giornoDiFesta = $(".mese-3 [data-date='" + dataFeste + "']");
    
                    if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
    
                    giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
    
                    }
                                
                }
        
            },
            error: function () {
                alert("Error");
            }
            });

            // chiamata mese 4
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=3",
            method: "GET",
            success: function (data) {
                console.log(data.response)
                //creo il ciclo for per stampare i giorni del mese in pagina
                var daysNumber = moment("2018-04-01", "YYYY-MM-DD").daysInMonth();
                
                for (i = 1; i <= daysNumber; i++) {
                    var dayToday = "2018-04-" + i;
                    var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                    var currentDay = moment(dayToday).format("dddd D MMMM");
                    $(".mese-4").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                }
    
                //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                for (var i = 0; i < data.response.length; i++) {
                    console.log(data.response[i].date)
        
                    var dataFeste = data.response[i].date;
                    
                    var nomeFesta = data.response[i].name;
    
                    var giornoDiFesta = $(".mese-4 [data-date='" + dataFeste + "']");
    
                    if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
    
                    giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
    
                    }
                                
                }
        
            },
            error: function () {
                alert("Error");
            }
            });

            // chiamata mese 5
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=4",
            method: "GET",
            success: function (data) {
                console.log(data.response)
                //creo il ciclo for per stampare i giorni del mese in pagina
                var daysNumber = moment("2018-05-01", "YYYY-MM-DD").daysInMonth();
                
                for (i = 1; i <= daysNumber; i++) {
                    var dayToday = "2018-05-" + i;
                    var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                    var currentDay = moment(dayToday).format("dddd D MMMM");
                    $(".mese-5").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                }
    
                //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                for (var i = 0; i < data.response.length; i++) {
                    console.log(data.response[i].date)
        
                    var dataFeste = data.response[i].date;
                    
                    var nomeFesta = data.response[i].name;
    
                    var giornoDiFesta = $(".mese-5 [data-date='" + dataFeste + "']");
    
                    if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
    
                    giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
    
                    }
                                
                }
        
            },
            error: function () {
                alert("Error");
            }
            });

            // chiamata mese 6
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=5",
            method: "GET",
            success: function (data) {
                console.log(data.response)
                //creo il ciclo for per stampare i giorni del mese in pagina
                var daysNumber = moment("2018-06-01", "YYYY-MM-DD").daysInMonth();
                
                for (i = 1; i <= daysNumber; i++) {
                    var dayToday = "2018-06-" + i;
                    var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                    var currentDay = moment(dayToday).format("dddd D MMMM");
                    $(".mese-6").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                }
    
                //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                for (var i = 0; i < data.response.length; i++) {
                    console.log(data.response[i].date)
        
                    var dataFeste = data.response[i].date;
                    
                    var nomeFesta = data.response[i].name;
    
                    var giornoDiFesta = $(".mese-6 [data-date='" + dataFeste + "']");
    
                    if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
    
                    giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
    
                    }
                                
                }
        
            },
            error: function () {
                alert("Error");
            }
            });

            // chiamata mese 7
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=6",
            method: "GET",
            success: function (data) {
                console.log(data.response)
                //creo il ciclo for per stampare i giorni del mese in pagina
                var daysNumber = moment("2018-07-01", "YYYY-MM-DD").daysInMonth();
                
                for (i = 1; i <= daysNumber; i++) {
                    var dayToday = "2018-07-" + i;
                    var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                    var currentDay = moment(dayToday).format("dddd D MMMM");
                    $(".mese-7").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                }
    
                //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                for (var i = 0; i < data.response.length; i++) {
                    console.log(data.response[i].date)
        
                    var dataFeste = data.response[i].date;
                    
                    var nomeFesta = data.response[i].name;
    
                    var giornoDiFesta = $(".mese-7 [data-date='" + dataFeste + "']");
    
                    if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
    
                    giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
    
                    }
                                
                }
        
            },
            error: function () {
                alert("Error");
            }
            });

            // chiamata mese 8
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=7",
            method: "GET",
            success: function (data) {
                console.log(data.response)
                //creo il ciclo for per stampare i giorni del mese in pagina
                var daysNumber = moment("2018-08-01", "YYYY-MM-DD").daysInMonth();
                
                for (i = 1; i <= daysNumber; i++) {
                    var dayToday = "2018-08-" + i;
                    var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                    var currentDay = moment(dayToday).format("dddd D MMMM");
                    $(".mese-8").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                }
    
                //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                for (var i = 0; i < data.response.length; i++) {
                    console.log(data.response[i].date)
        
                    var dataFeste = data.response[i].date;
                    
                    var nomeFesta = data.response[i].name;
    
                    var giornoDiFesta = $(".mese-8 [data-date='" + dataFeste + "']");
    
                    if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
    
                    giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
    
                    }
                                
                }
        
            },
            error: function () {
                alert("Error");
            }
            });

            // chiamata mese 9
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=8",
            method: "GET",
            success: function (data) {
                console.log(data.response)
                //creo il ciclo for per stampare i giorni del mese in pagina
                var daysNumber = moment("2018-09-01", "YYYY-MM-DD").daysInMonth();
                
                for (i = 1; i <= daysNumber; i++) {
                    var dayToday = "2018-09-" + i;
                    var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                    var currentDay = moment(dayToday).format("dddd D MMMM");
                    $(".mese-9").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                }
    
                //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                for (var i = 0; i < data.response.length; i++) {
                    console.log(data.response[i].date)
        
                    var dataFeste = data.response[i].date;
                    
                    var nomeFesta = data.response[i].name;
    
                    var giornoDiFesta = $(".mese-9 [data-date='" + dataFeste + "']");
    
                    if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
    
                    giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
    
                    }
                                
                }
        
            },
            error: function () {
                alert("Error");
            }
            });

            //chiamata mese 10
            $.ajax({
                url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=9",
                method: "GET",
                success: function (data) {
                    console.log(data.response)
                    //creo il ciclo for per stampare i giorni del mese in pagina
                    var daysNumber = moment("2018-10-01", "YYYY-MM-DD").daysInMonth();
                    
                    for (i = 1; i <= daysNumber; i++) {
                        var dayToday = "2018-10-" + i;
                        var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                        var currentDay = moment(dayToday).format("dddd D MMMM");
                        $(".mese-10").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                    }
        
                    //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                    for (var i = 0; i < data.response.length; i++) {
                        console.log(data.response[i].date)
            
                        var dataFeste = data.response[i].date;
                        
                        var nomeFesta = data.response[i].name;
        
                        var giornoDiFesta = $(".mese-10 [data-date='" + dataFeste + "']");
        
                        if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
        
                        giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
        
                        }
                                    
                    }
            
                },
                error: function () {
                    alert("Error");
                }
                });

                //chiamata mese 11
                $.ajax({
                    url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=10",
                    method: "GET",
                    success: function (data) {
                        console.log(data.response)
                        //creo il ciclo for per stampare i giorni del mese in pagina
                        var daysNumber = moment("2018-11-01", "YYYY-MM-DD").daysInMonth();
                        
                        for (i = 1; i <= daysNumber; i++) {
                            var dayToday = "2018-11-" + i;
                            var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                            var currentDay = moment(dayToday).format("dddd D MMMM");
                            $(".mese-11").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                        }
            
                        //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                        for (var i = 0; i < data.response.length; i++) {
                            console.log(data.response[i].date)
                
                            var dataFeste = data.response[i].date;
                            
                            var nomeFesta = data.response[i].name;
            
                            var giornoDiFesta = $(".mese-11 [data-date='" + dataFeste + "']");
            
                            if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
            
                            giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
            
                            }
                                        
                        }
                
                    },
                    error: function () {
                        alert("Error");
                    }
                    });

                    //chiamata mese 12
                    $.ajax({
                        url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=11",
                        method: "GET",
                        success: function (data) {
                            console.log(data.response)
                            //creo il ciclo for per stampare i giorni del mese in pagina
                            var daysNumber = moment("2018-12-01", "YYYY-MM-DD").daysInMonth();
                            
                            for (i = 1; i <= daysNumber; i++) {
                                var dayToday = "2018-12-" + i;
                                var dateFormat = moment(dayToday).format("YYYY-MM-DD")
                                var currentDay = moment(dayToday).format("dddd D MMMM");
                                $(".mese-12").append('<li data-date="' + dateFormat +'">'+ currentDay +'</li>');
                            }
                
                            //ciclo for che controlla i giorni di festa passati dalla chiamata ajax e che gli assegna una classe per colorarli di rosso
                            for (var i = 0; i < data.response.length; i++) {
                                console.log(data.response[i].date)
                    
                                var dataFeste = data.response[i].date;
                                
                                var nomeFesta = data.response[i].name;
                
                                var giornoDiFesta = $(".mese-12 [data-date='" + dataFeste + "']");
                
                                if(giornoDiFesta){ //controllo che verifica che ci sia un giorno di festa
                
                                giornoDiFesta.addClass("holiday").append(" " + nomeFesta);
                
                                }
                                            
                            }
                    
                        },
                        error: function () {
                            alert("Error");
                        }
                        });
            
    
            //funzione al click per il mese successivo
            $("#next").click(function(){

                var curMonth = currentMonth();

                function currentMonth(){

                    meseAttuale = $("ul.active-month");

                    meseAttuale.removeClass("active-month");

                    if(meseAttuale.hasClass("last")){

                        $("ul.first").addClass("active-month");

                    } else{

                    meseAttuale.next("ul").addClass("active-month")
                    }
                }

            })

            //funzione al click per il mese precedente
            $("#prev").click(function(){

                var curMonth = currentMonth();

                function currentMonth(){

                    meseAttuale = $("ul.active-month");

                    meseAttuale.removeClass("active-month");

                    if(meseAttuale.hasClass("first")){

                        $("ul.last").addClass("active-month");

                    } else{

                    meseAttuale.prev("ul").addClass("active-month")
                    }
                }

            })

})
 
















