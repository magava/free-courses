/* Task 2 */

/* Put your code here */

(function CaesarCipher() {
const argumentList = process.argv;
const arguments = argumentList.slice(2,argumentList.length);

if (arguments.length === 2) {
	let text = arguments[0];
	let shift = Number(arguments[1]); 
	
	let result = "";
 
    for (var i = 0; i < text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            result += String.fromCharCode((text[i].charCodeAt(0)+shift-65)%26 +65);
		} else if (text[i] >= 'a' && text[i] <= 'z'){
			result += String.fromCharCode((text[i].charCodeAt(0)+shift-97)%26 +97);
		} else {
			result += text[i];
		}
    }
 
	process.stdout.write(`${result}`);
    return result;
} 
}());