var APIHelper = require("../../components/api-utils")


describe("API testing framework", function () {
   const url = 'https://petstore.swagger.io/v2/pet/5'

   fit("Get the request form the swagger", async function () {
      var x = await APIHelper.getRequest(url)
         .expect('status', 200);
      console.log(x)
   });

   it("Post the request to the swagger", async function () {
      var x = await APIHelper.postRequest(url)
         // .expect('status', 200);
      console.log(x)
   });

   fit("Delete the request to the swagger", async function () {
      var x = await APIHelper.delRequest(url)
      .expect('status', 200);
      console.log(x)
   });

});