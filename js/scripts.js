$(document).on('click', 'ul li', function(){
  $(this).addClass("active").siblings().removeClass("active")
})
$(function() {
  "use strict"; // Start of use strict
  //default slide up and hide cart details

  //$("#cart-items").slideUp();

  $(".cart").on("click", function() {
    $("#cart-items").slideToggle(); // onn basckaet click show

  });
  $(".add-to-cart").on("click", function() {
   // $("#cart-items").slideDown();
    /*setTimeout(function() {
      $("#cart-items").slideUp();
    }, 2000);*/
    //add items to basket
     $("#cart-items").slideUp();
    $(this).each(function() {
      var name = $(this)
        .parents(".item")
        .find(".product-name")
        .text();
      var price = "<span class='eachPrice'>" + $(this)
        .parents(".item")
        .find(".product-price")
        .text() + "</span>";

      var remove = "<span class='remove'> X </span>";
      $("#list-item").append(
        "<li>" + name + "&#09; - &#09;" + price +"&#09; - &#09;" + remove + "</li>"
      );
      //number of items in basket
      $("#items-basket").text($("#list-item").children().length).css('display', 'table');
      $("#emptyCart").css('display', 'none');
    });

    var totalPrice = 0;
    $(".eachPrice").each(function() {
        var pricePerItem = parseFloat($(this).text().replace('ksh', ''));
      totalPrice += pricePerItem;

    });

    $("#total-price").text("ksh" + totalPrice);

    //remove items from basket
    $(".remove").on("click", function() {
      $(this)
        .parent()
        .remove();
      // Re -Calculate total of the exisitng items
       var totalPrice = 0;
    $(".eachPrice").each(function() {
        var pricePerItem = parseFloat($(this).text().replace('ksh', ''));
      totalPrice += pricePerItem;

    });

    $("#total-price").text("ksh" + totalPrice);
      // same here again re-calculate existing items

     var totalItem = $("#list-item").children().length;
      if(totalItem>0){

      $("#items-basket").text(totalItem).css('display', 'table');
      }
      else{
         $("#items-basket").css('display', 'none');
          $("#emptyCart").css('display', 'table');
      }

    });
  });
})(jQuery); // End of use strict
$("#mp").click(function(){
  $("#mpesa").show();
});
$("#mp").dblclick(function(){
  $("#mpesa").hide();
});
$("#mp").click(function(){
  $("#mpesab").show();
});
$("#mp").dblclick(function(){
  $("#mpesab").hide();
});
function mp(){
  prompt("PLEASE ENTER YOUR MPESA PIN")
  alert("THANK YOU FOR SHOPPING WITH US ")
}

$("#am").click(function(){
  $("#airtel").show();
});
$("#am").dblclick(function(){
  $("#airtel").hide();
});
$("#am").click(function(){
  $("#airtelb").show();
});
$("#am").dblclick(function(){
  $("#airtelb").hide();
});
function am(){
  prompt("PLEASE ENTER YOUR AIRTEL MONEY PIN")
  alert("THANK YOU FOR SHOPPING WITH US ")
}

//visa payment

$("#vs").click(function(){
  $("#visa").show();
});
$("#vs").dblclick(function(){
  $("#visa").hide();
});
$("#vs").click(function(){
  $("#visab").show();
});
$("#vs").dblclick(function(){
  $("#visab").hide();
});
function vs(){

  prompt("PLEASE ENTER YOUR CARD SECURITY PIN")
  alert("THANK YOU FOR SHOPPING WITH US ")
}
