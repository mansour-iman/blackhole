var Async= function(){
    var self = this;

    this.map= function (array, func, callback){
	// array => image
	//func =>downloadImage
	//callback => function anonyme

	var count = array.length;
	var errors=[]; 
	var results =[];

	for(var i=0; i<array.length; i++){
	    (function(i){
		func(array[i], function (error, result){
		    count --;

		    if(error) errors[i]= eror;
		    else results[i] = result;

		    if(count <1 ) return callback((errors.length >0) ? errors: null,results);
		});
	    })(i);
	}
    };
    this.waterfall= function(){

	var jobs= arguments[0];
	
	var job= jobs.shift();
	var after= function (error, result){

	    if(error) return callback(error);
	    if(jobs.length <1) return callback(null, result);

	    var args=[];
	    args.push(jobs);
	    if(result!= undefined) args.push(result);
	    args.push(function (error, result){
		if (error) return callback (null, result);
		else return callback(null, result);
	    });
	    self.waterfall.apply(this, args);
	};
	var args =[];
	if(arguments.length >2) args.push(arguments[1]);
	args.push(after);
	job.apply(this, args);
    };
};

module.exports = new Async();
