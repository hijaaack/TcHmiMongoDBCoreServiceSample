// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            function SetAggregationPipeline(collectionName, data, pipelineId) {

                var jsonObj = {
                    "collection": collectionName,
                    "data": data,
                    "pipelineId": pipelineId
                };

                var sendFunction = TcHmi.Functions.getFunction('CallServerFunction');

                //console.log(">>>SetAggregationPipeline");
                //console.log(jsonObj);

                if (sendFunction) {
                    //call the server request function
                    sendFunction('MongoDBCoreService.SetAggregationPipeline', jsonObj);
                }
            }
            TcHmiProject.SetAggregationPipeline = SetAggregationPipeline;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('SetAggregationPipeline', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.SetAggregationPipeline);
