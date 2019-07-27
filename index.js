exports.handler = async (event, context, callback) => {
    // get contents of the request
    const request = event.Records[0].cf.request;
    
    // get contents of the response
    const response = event.Records[0].cf.response;
    const headers = response.headers;
    
    headers['x-client-ip-address'] = [{key: 'X-Client-Ip-Address', value: request.clientIp}];
    
    callback(null, response);
};
