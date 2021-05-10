











function question(question){



    $("#title").text(question.question);
    let previous=question.pk-1;
    if(question.pk!=0){
 
        switch(questions[previous].input){
            case "months":
                $('.field-wrap#drop').css('display', 'none')
            
                break;
    
            
            case "text":

                $('.field-wrap#text').css('display', 'none')
                break;


        }
    }
        switch (question.input) {
            case "months":
                $("#times-month").val($("#times-month option:first").val());

                $('.field-wrap#drop').css('display', 'grid')
            

            break;

        
            case "text":
                $("#answer").val("");

                $('.field-wrap#text').css('display', 'grid')

                break;

        }

         
    // if(question.pk!=0){

    //     let previous=question.pk-1;
        
    //     console.log(previous);
    //     console.log(questions[previous]);
    //     if (questions[previous].input==="months"){
    //         $('.field-wrap#text').css('display', 'grid')
    //         $('.field-wrap#drop').css('display', 'none')
    
    
    //     }
    // }


    // if(question.input==="months"){
    //     $('.field-wrap#text').css('display', 'none')
    //     $('.field-wrap#drop').css('display', 'grid')



    // }
    
}



function calc(r,tm,my){
    let calc=(r*tm)*my;

    
    console.log(r);
    console.log(tm);
    console.log(my);
    return calc

}


function calcy(calc,y){

    return calc*y
}


function clean(){

    $("#answer").val("");
    
    $("#title").text("Select your business");
    

    $("#times-month").val($("#times-month option:first").val());

    $('.field-wrap#drop').css('display', 'none');
    $('.field-wrap#text').css('display', 'none');


    answers=[];

    questionNumber=0;
}




function renderError(){



    


    $(".container-questions").prepend('<div class="error"><p>Please, check your values</p></div>');
    

}

function check(field){
    if(field){
        if(isNaN(field)){
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

 





    $("#next").click(function() {
        
        $( ".error" ).remove();
        








        if (questions[questionNumber].input==="text"){

            answer=$("#answer").val();
        }
        else{
            answer=$("#times-month").find(":selected").val()

        }

        console.log(answer);
        if (check(answer)){

            
            
                    answers.push(parseInt(answer));
                    console.log(answers);
                    questionNumber++;
                   
            
                    
            
            
            
                    if(questionNumber != questions.length){
            
                        question(questions[questionNumber]);
            
                    }
                    else{
                        $("#title").text("Results");
                        
                        let val=calc(selected.money,answers[0],answers[1]);
                        console.log(val);
                        console.log(selected.money);
            
                        $("#value-y").text(val);
                        
                        $("#value-life").text(calcy(val,answers[2]))
                        $('#container-results').toggle();
                        $('.container-questions').toggle();
            
            
            
            
            
                    }


        }
        else{
           renderError();

        }
        // let revenue=parseInt(selected.money) ;

        
        // let timeM=parseInt($("#month").val());
        // let my=parseInt($("#times-month").find(":selected").val());
        // let y=parseInt($("#costumer-years").val());
        
        // if (checkRequiredFields(timeM,my,y)){

            
            
        //             let val=calc(revenue,timeM,my)
        //             $("#value-y").text(val);
            
        //             $("#value-life").text(calcy(val,y))
            
        //             $('#container-results').toggle();
        //             $('.container-questions').toggle();
                    


        // }


        // else{

        //     renderError();

        // }
        // console.log(checkRequiredFields(timeM,my,y));

        // console.log(calc(60,2,12));
    });
    $("#back").click(function() {
        
        clean();
        $('#container-results').toggle();
        $('.container-buttons').toggle();
        

        // console.log(calc(60,2,12));
    });

});

