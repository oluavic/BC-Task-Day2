var myapp = {
 getAddress: function (callback){
	var http = require('http');
	var options ={
        host: 'maps.googleapis.com',
        path: '/maps/api/geocode/json?latlng=6.549927,3.369857&sensor=true'
    };
    callback = function(response){
    	//Continuously update stream with data
       var body = '';
        response.on('data', function(d) {
            body += d;
       });
        response.on('end', function() {

            
            var parsed = JSON.parse(body);
            var mm= parsed.results[0].formatted_address;
                
            return  mm;
        });
    }
    

}

}
module.exports=myapp;
