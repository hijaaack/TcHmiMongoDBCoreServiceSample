// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            function RemoveSelectedDocument(id) {

                var removeFunction = TcHmi.Functions.getFunction('RemoveDocument');
                if (removeFunction) {
                    removeFunction('newCollection', id);
                }

            }
            TcHmiProject.RemoveSelectedDocument = RemoveSelectedDocument;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('RemoveSelectedDocument', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.RemoveSelectedDocument);
