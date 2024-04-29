sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.app.booksdetails.controller.Details", {
        onInit: function() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onBook, this);
          },
          onBook: function(oEvent ){
           
            const {bookId} = oEvent.getParameter("arguments");
            //const sRouterName = oEvent.getParameter("name");
            const oObjectPage = this.getView().byId("idBooksDetailsForm");
   
            oObjectPage.bindElement(`/Books(${bookId})`, {
                expand: 'addresses'
            });
         
        }
    });
});