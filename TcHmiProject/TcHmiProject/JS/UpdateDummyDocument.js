// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            function UpdateDummyDocument(id, comment, randomNumber) {

                var jsonData = {
                    "_id": id,
                    "comment": comment,
                    "randomNumber": randomNumber     
                };
                console.log(jsonData);
                var updateFunction = TcHmi.Functions.getFunction('UpdateDocument');
                if (updateFunction) {
                    updateFunction('newCollection', jsonData);
                }

            }
            TcHmiProject.UpdateDummyDocument = UpdateDummyDocument;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('UpdateDummyDocument', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.UpdateDummyDocument);
