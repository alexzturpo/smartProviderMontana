/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "spm/aplication/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("spm.aplication.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                var oData = {
                    "listaEmpresasUser":[],
                    "listaProveedoresUser":[],
                    "listUsuarios":[{"RUC":"1241412"}],
                    "listEmpresa":[{"RUC":"1241412"}],
                    "listProveedores":[{"RUC":"1241412"}],
                    "listServicios":[{"SERVICIO":"1241412"}],
                    "listEmpresasAssign":[{"ruc":"20131565659","descripcion":"TAL S.A"}],
                    "listAuditRol":[
                        {"key":"L","value":"LOGISTICA"},
                        {"key":"R","value":"RH"},
                        {"key":"SM","value":"SIGMA"},
                        {"key":"SG","value":"SIG"},
                        {"key":"P","value":"PROVEEDOR"},
                        {"key":"A","value":"ALL"},
                    ],
                    "listConsultaResumenFactura":{"ID_FACTURA": 1,"CO_FACTURA":"cod001","TOTAL_IGV": 100.00,"EM_RUC":"ruc001","US_RUC":"prov001"},
                    "listFactura":[
                        {"ID_FACTURA": 1,"FC_FEC_REGISTRO":"11/09/2023","TOTAL_IMP": 100.00,"NOM_DEM_RAZ_COMERCIAL":"ruc001","NOM_DEM_RAZ_ADQ":"prov001","EM_RUC":"ruc002","US_RUC":"prov002"}
                    ]

                };
                var oModel = new sap.ui.model.json.JSONModel(oData);
                this.setModel(oModel);
                this.setModel(oModel, "myParam"); 
            }
        });
    }
);