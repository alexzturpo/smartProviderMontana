sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("adp.aplication.controller.vRegFacturaSinAsuntoFisico", {
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },
        onInit: function () {

        },
        onPageBack: function () { 
            this.getRouter().getTargets().display("vMenuPrincipal");
        },
        //FRAGMENTS PARA LOS MODULOS 
        //FRAGMENT Documentos
        fragmentSinAsuntoDocumentos: function () { this._dgSinAsuntoDocumentos().open() },
        _dgSinAsuntoDocumentos: function () { 
            var e = this.getView();
            if (!this.dgSinAsuntoDocumentos) { this.dgSinAsuntoDocumentos = sap.ui.xmlfragment("idDgSinAsuntoDocumentos", "spm.aplication.view.fragments.dgSinAsuntoDocumentos", this) };
            e.addDependent(this.dgSinAsuntoDocumentos);
            return this.dgSinAsuntoDocumentos 
        },
        dgSinAsuntoDocumentosOk: function () {  
            this.dgCancelSinAsuntoDocumentos() 
        },
        dgCancelSinAsuntoDocumentos: function () { this._dgSinAsuntoDocumentos().close() },
    });
});
