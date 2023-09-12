sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("adp.aplication.controller.vRegFacturaManualSinVale", {
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },
        onInit: function () {

        },
        onPageBack: function () { 
            this.getRouter().getTargets().display("vMenuPrincipal");
        },
        //FRAGMENTS PARA LOS MODULOS 
        //FRAGMENT Asignar posiciones
        fragmentAsigPosiciones: function () { this._dgAsigPosiciones().open() },
        _dgAsigPosiciones: function () { 
            var e = this.getView();
            if (!this.dgAsigPosiciones) { this.dgAsigPosiciones = sap.ui.xmlfragment("idDgAsigPosiciones", "spm.aplication.view.fragments.dgAsigPosiciones", this) };
            e.addDependent(this.dgAsigPosiciones);
            return this.dgAsigPosiciones 
        },
        dgAsigPosicionesOk: function () {  
            this.dgCancelAsigPosiciones() 
        },
        dgCancelAsigPosiciones: function () { this._dgAsigPosiciones().close() },
        //FRAGMENT Documentos
        fragmentDocumentos: function () { this._dgDocumentos().open() },
        _dgDocumentos: function () { 
            var e = this.getView();
            if (!this.dgDocumentos) { this.dgDocumentos = sap.ui.xmlfragment("idDgDocumentos", "spm.aplication.view.fragments.dgDocumentos", this) };
            e.addDependent(this.dgDocumentos);
            return this.dgDocumentos 
        },
        dgDocumentosOk: function () {  
            this.dgCancelDocumentos() 
        },
        dgCancelDocumentos: function () { this._dgDocumentos().close() },
    });
});
