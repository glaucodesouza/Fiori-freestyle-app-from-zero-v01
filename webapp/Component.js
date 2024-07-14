sap.ui.define([
    "sap/ui/core/UIComponent"
], function(meuUIComponent) {
    'use strict';
    
    return meuUIComponent.extend("freestyledozerov01.Component",{
        metadata: {
            rootView: {
                "viewName": "freestyledozerov01.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            }
        },

        /////INITIALIZATION
        init: function() {
            //chamar superclasse
            meuUIComponent.prototype.init.apply(this, arguments);
            // alert('Alo dentro do Component.js!');

        }

        
        ///////////implementação customizada

        //////////////////////////
    });
});