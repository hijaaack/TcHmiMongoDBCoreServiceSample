// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    // If you want to unregister an event outside the event code you need to use the return value of the method register()
    let destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', (e, data) => {
        // This event will be raised only once, so we can free resources. 
        // It's best practice to use destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();
        // ----------------------
        // Place your code here!
        // ----------------------

        if (TCHMI_DESIGNER) {
            return; // Don't subscribe to server symbols in the designer.
        }

        const expressionName = "MongoDBCoreService.CollectionList";
        // Build the subscription command object
        const command = [{
            commandOptions: ['SendErrorMessage'], // Basic command options. In this case we want to receive error messages as strings in addition to the numerical codes.
            symbol: expressionName
        }];

        // Send the subscription command to the server
        TcHmi.Server.subscribeEx(command, TcHmi.Config.get().tcHmiServer.websocketIntervalTime, null, function (callback) {
            
            let data = callback.response.commands[0].readValue;
            let json = JSON.parse(data);

            var carObject = json.find(o => o['carData']);
            TcHmi.Symbol.writeEx("%i%carDataList%/i%", carObject.carData);

            var dummyObject = json.find(o => o['newCollection']);
            TcHmi.Symbol.writeEx("%i%newCollectionList%/i%", dummyObject.newCollection);
            console.log(dummyObject);
        });
    });
})(TcHmi);