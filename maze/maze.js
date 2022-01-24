
$(document).ready(function () {
  
    $("#start").click(function () {
        $("#status").text('Click the "S" to begin.');
        Action.setGameStatus(false);
        $("div.boundary").css("background-color", "#eeeeee");  
      if (!Action.getGameStatus()) {
        $("div .boundary").mouseenter(function(){
            Action.lostAction();
            Action.setGameStatus(true);
          });
        $("#maze").mouseleave(function(){
            Action.lostAction();
            Action.setGameStatus(true);
          });
        $("#end").mouseenter(function () {
          Action.winAction();
          Action.setGameStatus(false);
        });
      }
    })
  
  });
  
  let Action = (function(){
      let gameStatus=false;
      return {
          getGameStatus:function(){
              return gameStatus;
          },
          setGameStatus:function(status){
              gameStatus = status;
          },
        lostAction:function(){
            $("div.boundary").css("background-color", "#ff8888");
            $("div .boundary").addClass("youlose");
            $("#status").text("");
            $("#status").append("You Lose! &#128078;");
            $("#end").unbind("mouseenter");
          },
          
        winAction:function(){
            $("#status").text("");
            $("#status").append("You Win! &#128077;");
            $("div .boundary").unbind("mouseenter");
            $("#maze").unbind("mouseleave");
          }
      };
  })();
  