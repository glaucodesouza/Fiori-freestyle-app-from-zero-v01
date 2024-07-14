sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/m/MessageToast"
], function(meuController, minhaMessageToast) {
    'use strict';

    // ----------------------------------------------------------------
    // redefining my controller (ampliando ele)
    // Assim, eu posso extender o Conrtoller standard
    // sap/ui/core/mvc/Controller
    // ----------------------------------------------------------------
    return meuController.extend("freestyledozerov01.controller.App", {
        //////////////////// ini metodos customizados (meus)
        onInit: function() {
            // Modificar o texto do botão da VEIW
            this.byId("botao").setText("Novo Texto pelo oninit(), mas, me clica !");
        },
        onClique: function() {
            // alert("ola pelo controller!");	
            minhaMessageToast.show("Ola pessoal no onClique()")
        }
        //////////////////// fim metodos customizados (meus)
    });
    
});