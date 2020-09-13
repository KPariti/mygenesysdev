$(document).ready(function(){
    $("#btnLogin").on('click', function(){
        let email = $("#txtEmail").val();
        if(email == 'venki.perni@migenesys.com'){
            window.location.href = "intialauthentication.html"
        }else{
            $(".notexistalert").show()
        }
    })
   
    var availableTags = [
        "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
      ];
      
      $( "#txtmonth" ).autocomplete({
        source: availableTags
      });

      var avaiableyears = ["1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"];
      
      $( "#txtYear").autocomplete({
        source: avaiableyears
      });
      $(".btnNewPasswordforDoctor").on('click', function(){
        window.location.href = "verifyphone.html"
      });
      $("#btnPhone").on('click', function(){
        let pnums = '1234567890';
        let enterpnum = $("#txtPhone").val();
        if(enterpnum == pnums){
            window.location.href = "newpassword.html"
        }else{
            $(".notexistalert").show()
        }
      });
});