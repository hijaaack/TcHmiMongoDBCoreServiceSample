// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            function AddNewDocument() {

                var jsonData = {
                    "randomNumber": Math.random(),
                    "comment": "Dummy Data"
                };

                var updateFunction = TcHmi.Functions.getFunction('CreateDocument');

                if (updateFunction) {
                    //call the server request function
                    updateFunction('newCollection', jsonData);
                }



            }
            TcHmiProject.AddNewDocument = AddNewDocument;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('AddNewDocument', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.AddNewDocument);
