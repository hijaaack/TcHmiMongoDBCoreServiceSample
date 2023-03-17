// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            async function GetAggregationResult(ctx, Collection, Data, Result) {

                //console.log(">>>GetAggregationResult (async)");

                var jsonObj = {
                    "collection": Collection,
                    "data": Data,
                };

                var sendFunction = TcHmi.Functions.getFunction('CallServerFunctionPromiseJson');

                if (sendFunction) {
                    const readValue = await sendFunction('MongoDBCoreService.GetAggregationResult', jsonObj);
                    Result.write(readValue);
                }

                ctx.success();

            }
            TcHmiProject.GetAggregationResult = GetAggregationResult;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('GetAggregationResult', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.GetAggregationResult);
