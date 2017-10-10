//this is my first time playing with Mochajs; though not my first time writing a test 
//currently has a deprecation warning on unhandled promise rejections
//TODO: revisit this later

const assert = require('assert');
const rms = require('./remoteMathService.js');
describe("testing Remote Math Service", function(){
	it("returns 'correct' if executed successfully", function(){
		//console.log (rms);
		Promise.all([rms]).then(result =>{
			assert.equal(result[0], 'correct');
		});
	})
});