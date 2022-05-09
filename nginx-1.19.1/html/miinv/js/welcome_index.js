        $(function () {
             $("#index-cis-1").mouseover(function(){
            	$("#index-show-1").stop().animate({'opacity':1},800);
            	$("#more1").removeClass("icon-more").addClass("icon-cancel")
                });
             $("#index-cis-1").mouseout(function(){
            	$("#index-show-1").stop().animate({'opacity':0},800);
            	$("#more1").removeClass("icon-cancel").addClass("icon-more")

                });
             
             
             $("#index-cis-2").mouseover(function(){
             	$("#more2").removeClass("icon-more").addClass("icon-cancel")
             	$("#index-show-2").stop().animate({'opacity':1},800);
                 });
              $("#index-cis-2").mouseout(function(){
             	$("#index-show-2").stop().animate({'opacity':0},800);
            	$("#more2").removeClass("icon-cancel").addClass("icon-more")

                 });
              
              
              $("#index-cis-3").mouseover(function(){
              	$("#index-show-3").stop().animate({'opacity':1},800);
            	$("#more3").removeClass("icon-more").addClass("icon-cancel")

                  });
               $("#index-cis-3").mouseout(function(){
               	$("#more3").removeClass("icon-cancel").addClass("icon-more")

              	$("#index-show-3").stop().animate({'opacity':0},800);
                  });
               
               $("#index-cis-4").mouseover(function(){
               	$("#index-show-4").stop().animate({'opacity':1},800);
            	$("#more4").removeClass("icon-more").addClass("icon-cancel")

                   });
                $("#index-cis-4").mouseout(function(){
                	$("#more4").removeClass("icon-cancel").addClass("icon-more")

               	$("#index-show-4").stop().animate({'opacity':0},800);
                   });
        })