// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            function HandleErrorCodes(errorObject) {

                //Handle MongoDBCoreService extension specific error codes
                switch (errorObject.code) {

                    case 10:
                        TcHmi.Log.warn('MongoDBCoreService error: Update Document Failed');
                        break;

                    case 11:
                        TcHmi.Log.warn('MongoDBCoreService error: Create Document Failed');
                        break;

                    case 12:
                        TcHmi.Log.warn('MongoDBCoreService error: Create Collection Failed');
                        break;

                    case 13:
                        TcHmi.Log.warn('MongoDBCoreService error: Data is wrong type or empty');
                        break;

                    case 14:
                        TcHmi.Log.warn('MongoDBCoreService error: Remove Document failed');
                        break;

                    case 15:
                        TcHmi.Log.warn('MongoDBCoreService error: Set Aggregation Pipeline failed');
                        break;

                    case 16:
                        TcHmi.Log.warn('MongoDBCoreService error: Get Aggregation Result failed');
                        break;

                    default:
                        TcHmi.Log.warn('MongoDBCoreService error: ' + errorObject.reason);
                        break;
                }

            }
            TcHmiProject.HandleErrorCodes = HandleErrorCodes;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('HandleErrorCodes', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.HandleErrorCodes);
