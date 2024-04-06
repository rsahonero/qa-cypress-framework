describe('Cart feature', () => {
    it("TC-001: BE | Add new product to cart ", () => {
        cy.request("POST", "https://api.demoblaze.com/addtocart", {
          id: "545baef5-4db5-26e1-0dec-b47b97ebc533",
          cookie: "user=95c8dec3-e8a7-bbb5-035a-d808ab10869b",
          prod_id: 1,
          flag: false
      }).then((response) => {
          expect(response.status).to.eq(200);
        });
     });
     
     it("TC-002: BE | Delete product from cart", () => {
      cy.request("POST", "https://api.demoblaze.com/deletecart", {
              cookie: "user=e5f604e9-8155-9b21-60b0-f65f4d7368d7",
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.eq("Item deleted.");
        cy.log(JSON.stringify(response.body));
      });
   });
});