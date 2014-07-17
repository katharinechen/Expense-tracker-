var Categories = { 
  products: [] 
}; 

var Product = {

  totalCost: function() { 
    var total = 0; 
    var total = this.quantity * this.amount; 

    return total; 
  }
};



$(document).ready(function() {

  var CategoriesArray = []; 

  $("#category-form").submit(function(event) { 
    var newCategory = Object.create(Categories); 
    newCategory.nameOf = $("#category").val(); 
    CategoriesArray.push(newCategory); 
    event.preventDefault(); 

    $("#cat-results").append("<li>" + newCategory.nameOf + "</li>"); 
    $("#category").val(""); 

    $("#cat-results").last().click(function() { 
      $("#add-purchases").show(); 
      $("#add-purchases h3").text("Add Purchases to" ); 
      event.preventDefault(); 
    }); 

  }); 



    // $(".contact").last().click(function() {
    //   $("#show-contact").show();

    //   $("#show-contact h2").text(newContact.firstName);
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);

    //   $("ul#addresses").text("");
    //   newContact.addresses.forEach(function(address) {
    //     $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
    //   });
    // });

  

  // $("#add-purchases").submit(function(event) {
  //   Product.descriptionProduct = $("#description").val();
  //   Product.quantity = $("#quantity").val(); 
  //   Product.amount = $("#amount").val();

  //   $("#tbody-results").append("<tr><td>" + Product.descriptionProduct +
  //                              "</td><td>" + Product.quantity + 
  //                              "</td><td>" + Product.amount +
  //                              "</td><td>" + Product.totalCost() + 
  //                              "</td></tr>" );

  //   var newPurchase = Object.create(Product); 
  //   newPurchase.descriptionProduct = Product.descriptionProduct; 
  //   newPurchase.quantity = Product.quantity; 
  //   newPurchase.amount = Product.amount; 
  //   newPurchase.amount = Product.totalCost(); 

  //   console.log(newPurchase);  

  //   $("#description").val("");
  //   $("#quantity").val(""); 
  //   $("#amount").val("");

  //   event.preventDefault();
  // });
});
