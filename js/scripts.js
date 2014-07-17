var Categories = {

  initialize: function(categoryName) {
    this.nameOf = categoryName;
    this.products = [];
  },

  pushFunction: function(purchaseItem) {
    products.push(purchaseItem);
  },
  getNameOf: function() {
    return this.nameOf;
  }
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
  var currentCategory;

  $("#category-form").submit(function(event) {
    var newCategory = Object.create(Categories);
    newCategory.initialize($("#category").val());
    CategoriesArray.push(newCategory);
    event.preventDefault();

    $("#cat-results").append("<li>" + newCategory.nameOf + "</li>");
    $("#category").val("");

    $("#cat-results li").last().click(function(event) {
      $("#tbody-results").empty();
      $("#purchase-list").show();
      currentCategory = newCategory;
      $("#add-purchases").show();
      $("#purchase-category").text("Add Purchases to " + currentCategory.nameOf);

      currentCategory.products.forEach(function(item) {
      $("#tbody-results").append("<tr><td>" +  item.descriptionProduct +
                               "</td><td>" + item.quantity +
                               "</td><td>" + item.amount +
                               "</td><td>" + item.totalCost() +
                               "</td></tr>" );
    });
      event.preventDefault();
    });
  });

  $("#add-purchases").submit(function(event) {
    var newPurchase = Object.create(Product);
    newPurchase.descriptionProduct = $("#description").val();
    newPurchase.quantity = $("#quantity").val();
    newPurchase.amount = $("#amount").val();
    newPurchase.total = newPurchase.totalCost();





    $("#tbody-results").append("<tr><td>" +  newPurchase.descriptionProduct +
                               "</td><td>" + newPurchase.quantity +
                               "</td><td>" + newPurchase.amount +
                               "</td><td>" + newPurchase.totalCost() +
                               "</td></tr>" );

    currentCategory.products.push(newPurchase);

    $("#description").val("");
    $("#quantity").val("");
    $("#amount").val("");
    $("#description").focus();

    event.preventDefault();
  });
});









    // Product.descriptionProduct = $("#description").val();
    // Product.quantity = $("#quantity").val();
    // Product.amount = $("#amount").val();

    // $("#tbody-results").append("<tr><td>" + Product.descriptionProduct +
    //                            "</td><td>" + Product.quantity +
    //                            "</td><td>" + Product.amount +
    //                            "</td><td>" + Product.totalCost() +
    //                            "</td></tr>" );

    // var newPurchase = Object.create(Product);
    // newPurchase.descriptionProduct = Product.descriptionProduct;
    // newPurchase.quantity = Product.quantity;
    // newPurchase.amount = Product.amount;
    // newPurchase.amount = Product.totalCost();
