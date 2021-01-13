window.onload=function()
      {
$( document ).ready(function() {
  $('.nav-search-dropdown').change(function() {
    var selectedText = $(this).find('option:selected').text();
    $('#nav-search').find('#nav-search-label-id').html(selectedText);
    console.log(selectedText);
  $("#search-text").keyup(function(){
    var contentText = $(this).val();
    console.log(contentText);
 
  
    $("#nav-search-submit-button").click(function()
    {
      if(selectedText=="Books")
      {
    if( contentText=="books" || contentText=="Julia Quinn" || contentText=="kindle eBooks"||contentText=="limitless")
    {
      $('html, body').animate({
          
        scrollTop: $("#myDivBook").offset().top},'slow');
        return false;

    }
    return false;
  }


 else if(selectedText=="Home & Kitchen")
      {
    if( contentText=="decore" || contentText=="home" || contentText=="Kitchen")
    {
      $('html, body').animate({
          
        scrollTop: $("#myDivHome").offset().top},'slow');
        return false;

    }
    return false;
  }

  else if(selectedText=="Toys & Games")
  {
if( contentText=="toys" || contentText=="childern" || contentText=="game")
{
  $('html, body').animate({
      
    scrollTop: $("#myDivToys").offset().top},'slow');
    return false;

}
}

else if(selectedText=="Beauty & Personal Care")
{
if( contentText=="Care" || contentText=="Beauty" || contentText=="Personal Care")
{
$('html, body').animate({
    
  scrollTop: $("#myDivCare").offset().top},'slow');
  return false;

}
}


else if(selectedText=="Baby")
{
if( contentText=="games" || contentText=="baby" || contentText=="childern")
{
$('html, body').animate({
    
  scrollTop: $("#myDivBaby").offset().top},'slow');
  return false;

}
}
    })
    })  
  });
  
  });




$("#login-register") .click(function() 
{ 
      var email=$("#ap_email").val();
      if (email in localStorage) 
      {
        window.location.href = "login.html";
      //  console.log("login");

      } 
      else 
      {
        window.location.href = "register.html";
        //console.log("register")
      }     
}); 


        
    


}










    
