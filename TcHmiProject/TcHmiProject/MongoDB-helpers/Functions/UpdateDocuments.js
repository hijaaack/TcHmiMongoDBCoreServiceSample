// Keep these lines for a best effort IntelliSense in the editor.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.4.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            function UpdateDocuments(collectionName, jsonData) {

                var jsonObj = {
                    "collection": collectionName,
                    "data": jsonData
                };

                var sendFunction = TcHmi.Functions.getFunction('CallServerFunction');

                if (sendFunction) {
                    //call the server request function
                    sendFunction('MongoDBCoreService.UpdateDocuments', jsonObj);
                }
            }
            TcHmiProject.UpdateDocuments = UpdateDocuments;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('UpdateDocuments', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.UpdateDocuments);
