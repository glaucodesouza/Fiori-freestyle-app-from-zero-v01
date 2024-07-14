sap.ui.define([
    // "sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"

], function(
    // XMLView
    meuComponentContainer
) {
    'use strict';
    
    // alert('Alo dentro do index.js !');
    
    // XMLView.create({
    //     viewName: "freestyledozerov01.view.App"
    // }).then(function (oView) {
    //     oView.placeAt("contentDoIndex");
    // });

    //informar ao meu Callback,
    //que deve iniciar o meu Component.js
    new meuComponentContainer({
        name: 'freestyledozerov01',
        settings: {
            id: 'template' //id da aplicacao
        },
        async: true
    }).placeAt('contentDoIndex');
});