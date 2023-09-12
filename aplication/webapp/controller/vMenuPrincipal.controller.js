sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("spm.aplication.controller.vMenuPrincipal", {
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },
        onInit: function () {

        },
        //RUTAS
            logoff: function () {  this.getRouter().getTargets().display("TargetvMain"); },
            // PRE REGISTRO DE FACTURA
            pageRegFacturaSinVale: function () { this.getRouter().getTargets().display("vRegFacturaSinVale") },
            pageRegFacturaManualSinVale: function () { this.getRouter().getTargets().display("vRegFacturaManualSinVale") },

            //Registro factura sin Vale/HES
                pageRegFacturaSinAsuntoElectronico: function () { this.getRouter().getTargets().display("vRegFacturaSinAsuntoElectronico") },
                pageRegFacturaSinAsuntoFisico: function () { this.getRouter().getTargets().display("vRegFacturaSinAsuntoFisico") },
                
            pageConsultaAnulacionPR: function () { this.getRouter().getTargets().display("vConsultaAnulacionPR") },
            pageConsProgramPago: function () { this.getRouter().getTargets().display("vConsultaProgramacionPago") },
        //FRAGMENTS PARA LOS MODULOS 
        //FRAGMENT Pre-Registro de Factura
        fragmentRegisterFactura: function () { this._dgRegisterFactura().open() },
        _dgRegisterFactura: function () { 
            var e = this.getView();
            if (!this.dgRegisterFactura) { this.dgRegisterFactura = sap.ui.xmlfragment("idDgRegisterFactura", "spm.aplication.view.fragments.dgRegisterFactura", this) };
            e.addDependent(this.dgRegisterFactura);
            return this.dgRegisterFactura 
        },
        dgRegisterFactura_electronica: function () {  
            this.dgCancelRegisterFactura()
            this.pageRegFacturaSinVale()
        },
        dgRegisterFactura_fisica: function () { 
            this._dgRegisterFactura().close() 
            this.pageRegFacturaManualSinVale()
        },
        dgCancelRegisterFactura: function () { this._dgRegisterFactura().close() },
        //FRAGMENT Pre-Registro de Factura sin sustento
        fragmentRegisterFacturaSinAsunto: function () { this._dgRegisterFacturaSinAsuntos().open() },
        _dgRegisterFacturaSinAsuntos: function () { 
            var e = this.getView();
            if (!this.dgRegisterFacturaSinAsuntos) { this.dgRegisterFacturaSinAsuntos = sap.ui.xmlfragment("idDgRegisterFacturaSinAsuntos", "spm.aplication.view.fragments.dgRegisterFacturaSinAsuntos", this) };
            e.addDependent(this.dgRegisterFacturaSinAsuntos);
            return this.dgRegisterFacturaSinAsuntos 
        },
        dgRegisterFacturaSinAsuntos_electronica: function () {  
            this.dgCancelRegisterFacturaSinAsuntos()
            this.pageRegFacturaSinAsuntoElectronico()
        },
        dgRegisterFacturaSinAsuntos_fisica: function () { 
            this._dgRegisterFacturaSinAsuntos().close() 
            this.pageRegFacturaSinAsuntoFisico()
        },
        dgCancelRegisterFacturaSinAsuntos: function () { this._dgRegisterFacturaSinAsuntos().close() },
    });
});
