// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            function CreateCollection(collectionName) {

                var sendFunction = TcHmi.Functions.getFunction('CallServerFunction');

                if (sendFunction) {
                    //call the server request function
                    sendFunction('MongoDBCoreService.CreateCollection', collectionName);
                }

            }
            TcHmiProject.CreateCollection = CreateCollection;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CreateCollection', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.CreateCollection);
