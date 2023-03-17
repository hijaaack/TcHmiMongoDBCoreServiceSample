// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject;
        (function (TcHmiProject) {
            async function CallServerFunctionPromise(FunctionName, Parameter) {
                //console.log(">>>CallServerFunctionPromise");

                return new Promise(function (resolve, reject) {
                    
                    let request = {
                        'requestType': 'ReadWrite',
                        'commands': [{
                            'symbol': FunctionName,
                            'commandOptions': ['SendErrorMessage']
                        }]
                    };

                    //Set request write object
                    request.commands[0].writeValue = Parameter;

                    //Send request to the TwinCAT HMI Server
                    TcHmi.Server.request(request, function (data) {

                        //If no error return read value as JSON
                        if (data.error == TcHmi.Errors.NONE && data.results[0].error == TcHmi.Errors.NONE) {
                            return resolve(data.response.commands[0].readValue);
                        }

                        //Check callback data for errors
                        if (data.error !== TcHmi.Errors.NONE) {
                            //Handle Server error here
                            TcHmi.Log.error(TcHmi.Log.buildMessage(data.error), false);
                            return reject(data);
                        }

                        //If no commands are defined in the response return
                        if (!data.response.commands || !Array.isArray(data.response.commands)) return reject(data);

                        //Check all commands in the response for errors
                        for (var i = 0; i < data.response.commands.length; i++) {
                            //console.log(data);
                            let errorObject = data.response.commands[i].error;
                            if (errorObject) {
                                //Handle HMI Server command level error here
                                let handleErrorCodes = TcHmi.Functions.getFunction("HandleErrorCodes");
                                if (handleErrorCodes) {
                                    handleErrorCodes(errorObject);
                                }
                            }
                        }

                        return reject(data);

                    });

                });

            }
            TcHmiProject.CallServerFunctionPromise = CallServerFunctionPromise;
        })(TcHmiProject = Functions.TcHmiProject || (Functions.TcHmiProject = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CallServerFunctionPromise', 'TcHmi.Functions.TcHmiProject', TcHmi.Functions.TcHmiProject.CallServerFunctionPromise);
