
// request based on jquery
$(document).ready(()=>{
  $('#lookup').click(()=>{
    var word= $('#word').val();
    $.ajax({
      "url": "http://localhost:2021/", 
      "data": {"word": word},  // user input to be send to the server, ?word=''
      "type": "GET",
      "success": updateHtml,
      "error": errorHandler
      });
  })

}
);

$(document).ready(()=>{
  $("#word").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#lookup").click();
    }
  });
})

function updateHtml(data){

  // console.log(data[0].definition);

  var showThis= "";
  for(var i=0; i<data.length; i++){
    var type= data[i].wordtype;
    var def= data[i].definition;
    showThis+= "<div class= 'row'>"+ (i+1) + "("+type+")"+ " :: "+def + ' </div> <hr>'
  }
  $("#show").html(showThis);

}

function errorHandler(){
  console.log('Error ocured from the server');
}


