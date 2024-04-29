sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/m/Token',
    "sap/ui/core/Fragment"
],
    /*
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, Token,Fragment) {
        "use strict";
        return Controller.extend("com.app.booksdetails.controller.Home", {
            onInit: function () {
                var oView = this.getView();
                var oMultiInput1 = oView.byId("idAuthorFilterValue");
                var oMultiInput2 = oView.byId("idTitleFilterValue");
                var oMultiInput3 = oView.byId("idStockFilterValue");
                var oMultiInput4 = oView.byId("idPhoneFilterValue");
                let validate = function (args) {
                    if (true) {
                        var text = args.text;
                        return new Token({ key: text, text: text });
                    }
                }
                oMultiInput1.addValidator(validate);
                oMultiInput2.addValidator(validate);
                oMultiInput3.addValidator(validate);
                oMultiInput4.addValidator(validate);
            },
            onGoPress: function () {
                const oView = this.getView(),
                    oAuthor = oView.byId("idAuthorFilterValue"),
                    sAuthor = oAuthor.getTokens(),
                    oTitle = oView.byId("idTitleFilterValue"),
                    sTitle = oTitle.getTokens(),
                    oStock = oView.byId("idStockFilterValue"),
                    sStock = oStock.getTokens(),
                    oPhone = oView.byId("idPhoneFilterValue"),
                    sPhone = oPhone.getTokens(),
 
                    oTable = oView.byId("idBooksTable"),
                    aFilter = [];
                // console.log(sTitle);
                // console.log(sAuthor),
                // console.log("Naveen")
                sAuthor.filter((element) => {
 
                    element ? aFilter.push(new Filter("author", FilterOperator.EQ, element.getKey())) : "";
                });
                sTitle.filter((element) => {
 
                    element ? aFilter.push(new Filter("title", FilterOperator.EQ, element.getKey())) : "";
                });
                sStock.filter((element) => {
 
                    element ? aFilter.push(new Filter("stock", FilterOperator.EQ, element.getKey())) : "";
                });
                sPhone.filter((element) => {
                    element ? aFilter.push(new Filter("phone", FilterOperator.EQ, element.getKey())) : "";
                })
 
                // sAuthor ? aFilter.push(new Filter("author", FilterOperator.EQ, sAuthor)) : "";
                // sTitle ? aFilter.push(new Filter("title", FilterOperator.EQ, sTitle)) : "";
                // sStock ? aFilter.push(new Filter("stock", FilterOperator.EQ, sStock)) : "";
                // sPhone? aFilter.push(new Filter("phone", FilterOperator.EQ, sPhone)) : "";
                oTable.getBinding("items").filter(aFilter)
 
            },
            onClearFilterPress: function () {
                const oView = this.getView(),
                    oAuthor = oView.byId("idAuthorFilterValue").destroyTokens(),
                    oTitle = oView.byId("idTitleFilterValue").destroyTokens(),
                    oStock = oView.byId("idStockFilterValue").destroyTokens(),
                    oPhone = oView.byId("idPhoneFilterValue").destroyTokens();
            },
            onSelectBook : function (oEvent) {
             
                const { ID, author } = oEvent.getSource().getSelectedItem().getBindingContext().getObject();
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteDetails", {
                    bookId: ID,
                    author: author
                })
            },
            onCreateBtnPress: async function () {
                if (!this.oCreateBooksDialog) {
                    this.oCreateBooksDialog = await Fragment.load({
                        id: this.getView().getId(),
                      name: "com.app.booksdetails.fragments.CreateBooksDialog",
                        controller: this
                    });
                    this.getView().addDependent(this.oCreateBooksDialog);
                }

                this.oCreateBooksDialog.open();
            },

            onCloseDialog: function(){
                if(this.oCreateBooksDialog.isOpen()){
                    this.oCreateBooksDialog.close()
                }
            }
        });
    });
    
  
 

// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/Filter",
//     "sap/ui/model/FilterOperator",
//     "sap/m/Token"
// ],

//     /*
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller, Filter, FilterOperator,Token) {
//         "use strict";

//         return Controller.extend("com.app.bookdetailsapp.controller.Home", {
//             onInit: function () {

//                 var oView = this.getView();
//                 var oMultiInput1 = oView.byId("idAuthorFilterValue");
//                 var oMultiInput2 = oView.byId("idTitleFilterValue");
//                 var oMultiInput3 = oView.byId("idStockFilterValue");
//                 var oMultiInput4 = oView.byId("idPhoneFilterValue");
//                 oMultiInput1.function (args) {
                 
//                     if(true) {
//                         var text = args.text;
//                         return new Token({ key: text, text: text });
//                     }
                        
//                     }
//                 }
//                 oMultiInput1.addValidator(validate);
//                 // oMultiInput2.addValidator(validate);
//                 // oMultiInput3.addValidator(validate);
//                 // oMultiInput4.addValidator(validate);
//             },

//                 // const oView1 = this.getView();
//                 // const oMulti = oView1.byId("multiInput1");
//                 // oMulti.addValidator(function(arg) {
//                 //     let bool=true
//                 //     if(bool) {

//                 //         var text = arg.text;
//                 //         return new Token({key:text, text:text} );
//                 //     }                    
//                 // });
                
            
        
//             onGoPress: function () {
//                 const oView = this.getView(),
//                 oAuthor = oView.byId("idAuthorFilterValue"),
//                 sAuthor = oAuthor.getTokens(),
//                 oTitle = oView.byId("idTitleFilterValue"),
//                 sTitle = oTitle.getTokens(),
//                 oStock = oView.byId("idStockFilterValue"),
//                 sStock = oStock.getTokens(),
//                 oPhone = oView.byId("idPhoneFilterValue"),
//                 sPhone = oPhone.getTokens(),

//                 oTable = oView.byId("idBooksTable"),
//                 aFilter = [];
             
//             sAuthor.filter((element) => {

//                 element ? aFilter.push(new Filter("Author", FilterOperator.EQ, element.getKey())) : "";
//             });
//             sTitle.filter((element) => {

//                 element ? aFilter.push(new Filter("Title", FilterOperator.EQ, element.getKey())) : "";
//             });
//             sStock.filter((element) => {

//                 element ? aFilter.push(new Filter("Stock", FilterOperator.EQ, element.getKey())) : "";
//             });
//             sPhone.filter((element) => {
//                 element ? aFilter.push(new Filter("Phone", FilterOperator.EQ, element.getKey())) : "";
//             })

//             sAuthor ? aFilter.push(new Filter("author", FilterOperator.EQ, sAuthor)) : "";
//             sTitle ? aFilter.push(new Filter("title", FilterOperator.EQ, sTitle)) : "";
//             sStock ? aFilter.push(new Filter("stock", FilterOperator.EQ, sStock)) : "";
//             sPhone? aFilter.push(new Filter("phone", FilterOperator.EQ, sPhone)) : "";
//             oTable.getBinding("items").filter(aFilter)

//         },
//         onClearFilterPress: function () {
//             const oView = this.getView(),
//                 oAuthor = oView.byId("idAuthorFilterValue").destroyTokens(),
//                 oTitle = oView.byId("idTitleFilterValue").destroyTokens(),
//                 oStock = oView.byId("idStockFilterValue").destroyTokens(),
//                 oPhone = oView.byId("idPhoneFilterValue").destroyTokens();
//         }
//     });
// });

                
//     //             const oView = this.getView();
                
//     //             const  oAuthor = oView.byId("idAuthorFilterValue"),
                
//     //                 sAuthor = oAuthor.getValue(),
//     //                 oTitle = oView.byId("idTitleFilterValue"),
//     //                 sTitle = oTitle.getValue(),
//     //                 oStock = oView.byId("idStockFilterValue"),
//     //                 sStock = oStock.getValue(),
//     //                 oPhone = oView.byId("idPhoneFilterValue"),
//     //                 sPhone= oPhone.getValue(),

//     //                 oTable = oView.byId("idBooksTable"),
//     //                 aFilter = [];

//     //                 oView.addValidator(function(arg) {
//     //                 let bool=true
//     //                 if(bool) {

//     //                     var text = arg.text;
//     //                     return new Token({key:text, text:text} );
//     //                 }                    
//     //             });

//     //             sAuthor ? aFilter.push(new Filter("author", FilterOperator.EQ, sAuthor)) : "";
//     //             sTitle ? aFilter.push(new Filter("title", FilterOperator.EQ, sTitle)) : "";
//     //             sStock ? aFilter.push(new Filter("stock", FilterOperator.EQ, sStock)) : "";
//     //             sPhone? aFilter.push(new Filter("phone", FilterOperator.EQ, sPhone)) : "";
//     //             oTable.getBinding("items").filter(aFilter)

//     //         },
//     //         onClearFilterPress:function(){
//     //             const oView=this.getView(),
//     //             oAuthor = oView.byId("idAuthorFilterValue").setValue(),
//     //             oTitle = oView.byId("idTitleFilterValue").setValue(),
//     //             oStock = oView.byId("idStockFilterValue").setValue(),
//     //             oPhone = oView.byId("idPhoneFilterValue").setValue();
//     //         }
//     //     });
//     // });