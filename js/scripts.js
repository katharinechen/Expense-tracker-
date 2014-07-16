var Product = {

};


$(document).ready(function() {

  // var PurchaseObject = {};

  $("#add-purchases").submit(function(event) {
    Product.descriptionProduct = $("#description").val();
    Product.amount = $("#amount").val();

    $("#tbody-results").append("<tr><td>" + Product.descriptionProduct +
                               "</td><td>" + Product.amount + "</td></tr>" );

    $("#description").val("");
    $("#amount").val("");

    event.preventDefault();
  });


});
