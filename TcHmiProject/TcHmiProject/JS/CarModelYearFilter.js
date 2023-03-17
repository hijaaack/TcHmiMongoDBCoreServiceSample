// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    // If you want to unregister an event outside the event code you need to use the return value of the method register()
    let destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', (e, data) => {
        // This event will be raised only once, so we can free resources. 
        // It's best practice to use destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();
        // ----------------------
        // Place your code here!
        // ----------------------

        TcHmi.EventProvider.register('TcHmiTextbox.onTextChanged', function (e, data) {
            if (data) {
                var arrayFilter = [];
                var filterObject = {};
                filterObject.comparator = "==";
                filterObject.path = "carModelYear";
                filterObject.value = data;
                arrayFilter.push(filterObject);
                TcHmi.Symbol.writeEx("%i%carDatagridFilter%/i%", arrayFilter, function (callback) { console.log(callback); });
            } else {
                TcHmi.Symbol.writeEx("%i%carDatagridFilter%/i%", null, function (callback) { console.log(callback); });
            }
        });


    });
})(TcHmi);
