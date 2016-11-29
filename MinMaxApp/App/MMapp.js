var minmax={
	find_max_min:function (arr){
		//check inoput is an array
		if (Array.isArray(arr)){
			//declare output array
			var minmax = []
			//sort array numerically
  			arr.sort(function(a,b){return a - b});
  			//check for equal min max
	  		if (arr[0] !== arr[arr.length -1]){
	  			//populate output array with min max
	     		minmax.push(arr[0]);
	     		minmax.push(arr[arr.length -1]);
	     		//return outpur
	     		return minmax;
	  		}
		  	else{
		  		//output for equal min max
	    		minmax.push(arr.length);
	    		return minmax;
	  		}
		}
		//invalid input
		else{
			return 'Invalid Input';
		}
		
		
	}

};
module.exports = minmax;