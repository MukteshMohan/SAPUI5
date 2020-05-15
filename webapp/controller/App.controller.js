sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"opensap/myapp/model/formatter"
], function (Controller, MessageToast, formatter) {
	"use strict";

	return Controller.extend("opensap.myapp.controller.App", {
		formatter: formatter,
		onShowHello: function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sRecipient1 = "Muk";
			var sMsg = oBundle.getText("helloMsg", [sRecipient, sRecipient1]);

			// show message
			MessageToast.show(sMsg);

		}
	});
});