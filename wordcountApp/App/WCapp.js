var WC = { 
	words:function (n){
		//declarations
		var m = WC.WordCount(n);
		var count = 0;
		var arr =[];
		var dict = {};
		//unique count
		for (var i = 0; i< m.length; i++){
			//skip already counted
  			if (!(WC.doneAlready(arr,m[i]))){
  				//count
    			for (var a = 0; a < m.length; a++){
      				if (m[i] === m[a]){
        				count++;
      				}
    			}
    			//polpulate searched list
    			arr.push(m[i]);
    			//populate output
    			dict[m[i]]= count;
    			//initialize count
    			count =0;
  			}
  
		}
 		//return output
		return dict;
	},

	//slliter module
	WordCount:function (str) { 
  		return str.split(/[ ;,|()<>{}\[\]\r\n\t/\\]+/);
	},

	//check for already counted word module
	doneAlready: function (arr,v) {
    	for(var i = 0; i < this.length; i++) {
        	if (arr[i] === v) {
        		return true;
        	}
    	}
    	return false;
	},
	
};
module.exports = WC;
