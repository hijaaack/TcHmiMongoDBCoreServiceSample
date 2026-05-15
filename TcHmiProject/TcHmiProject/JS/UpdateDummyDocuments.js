// Keep these lines for a best effort IntelliSense in the editor.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.4.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            function UpdateDummyDocuments(id1, id2, comment1, comment2, number1, number2) {

                var jsonArray = [
                    {
                        "_id": id1,
                        "comment": comment1,
                        "randomNumber": number1
                    },
                    {
                        "_id": id2,
                        "comment": comment2,
                        "randomNumber": number2
                    }
                ];
                
                var updateFunction = TcHmi.Functions.getFunction('UpdateDocuments');
                if (updateFunction) {
                    updateFunction('newCollection', jsonArray);
                }
            }
            TcHmiProject.UpdateDummyDocuments = UpdateDummyDocuments;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('UpdateDummyDocuments', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.UpdateDummyDocuments);
