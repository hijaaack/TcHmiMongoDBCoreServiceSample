// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            function CreateDocument(collectionName, jsonData) {

                var jsonObj = {
                    "collection": collectionName,
                    "data": jsonData
                };

                var sendFunction = TcHmi.Functions.getFunction('CallServerFunction');

                if (sendFunction) {
                    //call the server request function
                    sendFunction('MongoDBCoreService.CreateDocument', jsonObj);
                }

            }
            TcHmiProject.CreateDocument = CreateDocument;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CreateDocument', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.CreateDocument);
