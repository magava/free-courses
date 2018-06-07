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
			sum += power(i, e);
		}

		process.stdout.write(`${sum}`);
		isSumDefined = true;	
	} 

} 

return isSumDefined ? sum : null;

}());


function power(n, k) {
	if (k == 0) return 1;
	var p = 1;
	for (var i = 1; i <= k; i++) {
		p *= n;
	}
	return p;
}
