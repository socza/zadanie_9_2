var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames)

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	var allNames = allNames.push(newName);
	console.log('Dodano imię ' + newName + ' do tablicy "allNames"');
	console.log(allNames);
} else {
	console.log('Imię ' + newName + ' istnieje w tablicy "allNames"');
}