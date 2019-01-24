sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
	"use strict";

	sap.ui.getCore().attachInit(function () {

		var url = "https://services.odata.org/TripPinRESTierService/People?$select=*";
		var oModel = new JSONModel(url);

		console.log(oModel);

		sap.ui.getCore().setModel(oModel, "data");
	
		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n"
		});

		sap.ui.getCore().setModel(oResourceModel, "i18n");

		var oView = new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");

		oView.placeAt("content");

	});
});