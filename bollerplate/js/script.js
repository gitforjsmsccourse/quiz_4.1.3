console.log('you are at ' + window.location);

const TEXT = document.querySelector('.textBlock');
let answer = prompt("Введите число");
answer = parseInt(answer);

if (answer >= 0) {
	console.log(answer);
} else {
	console.log(answer * -1);
}