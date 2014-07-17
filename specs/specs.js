describe("Product", function() { 
	describe("totalCost", function() { 
		it("multiples quantity by the amount of Product", function(){ 
			var testProduct = Object.create(Product); 
			testProduct.quantity(1); 
			testProduct.amount(5);
			testProduct.totalCost().should.equal(5); 
		}); 
	});
});

