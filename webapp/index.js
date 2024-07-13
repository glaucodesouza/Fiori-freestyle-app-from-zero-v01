sap.ui.define([
    // "sap/m/Text",
    // "sap/m/Button"	
    "sap/ui/core/mvc/XMLView"

], function(
    // Text, 
    // Button
    XMLView
) {
    'use strict';
    
    // alert('Alo dentro do index.js !');

    // new sap.m.Text({
    //     text: 'Alo mundo pelo index.js!'
    // }).placeAt("contentDoIndex");

    // new Button({
    //     text: "Me clica"
    // }).placeAt("contentDoIndex");

    // new Button({
    //     text: "Nao me clica"
    // }).placeAt("contentDoIndex");
    
    XMLView.create({
        viewName: "freestyledozerov01.view.App"
    }).then(function (oView) {
        oView.placeAt("contentDoIndex");
    });

});