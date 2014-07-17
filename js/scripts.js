var Product = {

  totalCost: function() { 
    var total = 0; 
    var total = this.quantity * this.amount; 

    return total; 
  }
};


$(document).ready(function() {

  var Categories = { name: name, products: []}; 

  $("#add-purchases").submit(function(event) {
    Product.descriptionProduct = $("#description").val();
    Product.quantity = $("#quantity").val(); 
    Product.amount = $("#amount").val();

    $("#tbody-results").append("<tr><td>" + Product.descriptionProduct +
                               "</td><td>" + Product.quantity + 
                               "</td><td>" + Product.amount +
                               "</td><td>" + Product.totalCost() + 
                               "</td></tr>" );

    var newPurchase = Object.create(Product); 
    newPurchase.descriptionProduct = Product.descriptionProduct; 
    newPurchase.quantity = Product.quantity; 
    newPurchase.amount = Product.amount; 
    newPurchase.amount = Product.totalCost(); 

    console.log(newPurchase);  

    $("#description").val("");
    $("#quantity").val(""); 
    $("#amount").val("");

    event.preventDefault();

  });


});


// var yourBankAccount = Object.create(BankAccount);