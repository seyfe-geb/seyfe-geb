
$(document).ready(()=>{
  $('#lookup').click(()=>{
    var word= $('#word').val();
    $.ajax({
      "url": "http://localhost:7070/", 
      "data": {"word": word},
      "type": "GET",
      "success": showResult,
      "error": errorHandler
      });

      $("#word").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#lookup").click();
        }
      });
  })

});

function showResult(data){
  var output= "";
  for(var i=0; i<data.length; i++){
    var type= data[i].wordtype;
    var def= data[i].definition;
    output+= "<div class= 'row'>"+ (i+1) + "("+type+")"+ " :: "+ def + ' </div> <hr>'
  }
  $("#show").html(output);

}

function errorHandler(){
  console.log('Error ocured from the server');
}


