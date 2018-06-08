/* Task 1 */

/* Put your code here */
(function sumOfKthPowers() {
const argumentList = process.argv;
const numbers = argumentList.slice(2,argumentList.length);

let isSumDefined = false;

if (numbers.length === 2) {
	let n = Number(numbers[0]);
	let e = Number(numbers[1]); 

	if (e <= 100 && e >=1 && n>=1 && n<=100) {
		var sum = 0;
		for (var i = 1; i <= n; i++) {
			var q = 1;
			for(var j = 0; j < e;j++) q *= i;
			sum += q;
		}

		process.stdout.write(`${sum}`);
		isSumDefined = true;	
	} 

} 

return isSumDefined ? sum : null;

}());

