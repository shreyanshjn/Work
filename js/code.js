$(document).ready(function(){
    $(".loadMore").click(function(){
       $(".hide").css({"display":"flex","transition":"display 2s"});
       $(".loadMore").css("display","none");
    });
});
$(document).ready(function(){
    $(".ticket").click(function(){
      $(".ticketButton").css({"text-align":"left"});
      $(".ticketButton").css({"display":"inline"});
      $(".details").css({"display":"inline"});
    });
});
/*function displayMessi()d
{ 
   alert("Ticket id  will be send to your email soon");
}*/
function validateForm() {
    var x = document.forms["myform"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    else
    {
        alert("Ticket id will sent to your email address soon");
        return true;
    }
}
