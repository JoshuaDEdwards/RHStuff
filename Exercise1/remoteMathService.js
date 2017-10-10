function remoteMathService(cb) {
	var one, two;
	//queue our promises to resolve after they actually execute
	Promise.all([callOneService,callTwoService]).then(responses => {
		one = responses[0];
		two = responses[1];
		//maintained the existing logic with the callback
		return cb(undefined, one + two);
	}, function(err){
		console.log("error happened");
	});

}

//make our service calls promises, so they can resolve asynchronously
//uncomment the console.logs to see the order in which these Promises
//get executed
const callOneService = new Promise(resolve => {
	setTimeout(function() {
		//console.log("in func 1");
		resolve(1);
	}, 1000);
}
)

const callTwoService = new Promise(resolve => {
	setTimeout(function() {
		//console.log("in func 2");
		resolve(2);
	}, 1500);
})

//returns a promise that we can tie into either as a service return or for testing
remoteMathService(function(err, answer) {
	if (err) console.log("error ", err);
	if (answer !== 3) {
		console.log("wrong answer", answer);
		return new Promise(resolve =>{
			resolve("wrong answer");
		});
	} else {
		console.log("correct");
		return new Promise(resolve =>{
			resolve("correct");
		});
	}
});