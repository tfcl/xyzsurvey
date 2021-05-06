
function calc(r,tm,my){
    let calc=(r*tm)*my;
    return calc

}


function calcy(calc,y){

    return calc*y
}


function clean(){

    let timeM=$("#month").val("");
    
    let y=$("#costumer-years").val("");

    $("#times-month").val($("#times-month option:first").val());
}




function renderError(){



    


    $(".container-questions").prepend('<div class="error"><p>Please, check your values</p></div>');
    

}

function checkRequiredFields(tm,my,y){

        console.log(tm);
        console.log(my);
        console.log(y);
    if (tm || my  || y ){
        

        if(isNaN(tm)||isNaN(my)||isNaN(y)){
            return false
        }
        else{
            return true
        }
        
    }
    
    else{
        return false

    }
}



$(document).ready(function()    {
  
    let submit =$("#submit");
    console.log(array)


    var $dropdown = $("#times-month");
    $dropdown.append($("<option />").val("1").text("1 month"));

    for (i = 2; i <= 12; i++) {
        $dropdown.append($("<option />").val(i).text(i+' months'));
      } 

 





    $("#submit").click(function() {
        
        $( ".error" ).remove();
        
        
        let revenue=parseInt(selected.money) ;

        
        let timeM=parseInt($("#month").val());
        let my=parseInt($("#times-month").find(":selected").val());
        let y=parseInt($("#costumer-years").val());
        
        if (checkRequiredFields(timeM,my,y)){

            
            
                    let val=calc(revenue,timeM,my)
                    $("#value-y").text(val);
            
                    $("#value-life").text(calcy(val,y))
            
                    $('#container-results').toggle();
                    $('.container-questions').toggle();
                    


        }


        else{

            renderError();

        }
        console.log(checkRequiredFields(timeM,my,y));

        // console.log(calc(60,2,12));
    });
    $("#back").click(function() {
        
        clean();
        $('#container-results').toggle();
        $('.container-buttons').toggle();
        

        // console.log(calc(60,2,12));
    });

});

