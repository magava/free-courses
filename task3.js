/* Task 3 */

/* Put your code here */
(function numberToFormattedTime() {
	const argumentList = process.argv;
	const numbers = argumentList.slice(2,argumentList.length);

	let isSumDefined = false;

	if (numbers.length === 2) {
		let num1 = Number(numbers[0]);
		let num2 = Number(numbers[1]); 

		if (num1 <= 10000 && num1 >=1 && num2>=1 && num2<=10000) {
			var sum = num1 + num2;
			var formattedTime = "";
			isSumDefined = true;
			
			var h = Math.floor(sum / 3600);
			var m = Math.floor(sum % 3600 / 60);
			var s = Math.floor(sum % 3600 % 60);
			
			var hDisplay = h > 0 ? h + formatTimePart(h, 'h'): "";
			var mDisplay = m > 0 ? m + formatTimePart(m, 'm'): "";
			var sDisplay = s > 0 ? s + formatTimePart(s, 's') : "";
					
			formattedTime = hDisplay + mDisplay + sDisplay; 
			process.stdout.write(`${formattedTime}`);
		} 

	} 

	return isSumDefined ? formattedTime : null;

}());

function formatTimePart(number, part){
	var lastDigit = number%10;
	let formattedPart = "";
	if (number == 1 || (number > 20 && lastDigit==1)) {
		formattedPart = (part == 's') ? " секунда " : (part == 'm') ? " минута " : (part == 'h') ? " час " : "";
	} else if ((number >= 2 && number <= 4) || (number > 20 && (lastDigit >= 2 && lastDigit <= 4))) {
		formattedPart = (part == 's') ? " секунды " : (part == 'm') ? " минуты " : (part == 'h') ? " часа " : "";
	} else {
		formattedPart = (part == 's') ? " секунд ": (part == 'm') ? " минут " :  (part == 'h') ? " часов " : "";
	}
	
	return formattedPart;
}