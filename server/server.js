exports = {
getSearchedDocument: function(options){
    let requestURL = `https://en5dm918ae.execute-api.us-east-1.amazonaws.com/default/fsPdf?search=${options.search}`;
        
        var headers = {
            "Content-Type": "application/json",
         
        };
        var options = { headers: headers};
        
		$request.get(requestURL, options)
		.then (
		function(data) {
            console.log('THIS IS DATA',data)
            renderData({ "status": 200 , "message" : data });
        },
        function(error) {
            console.log( "getContactList" + JSON.stringify(error));
            renderData({ "status": 400 });
    });
}
};