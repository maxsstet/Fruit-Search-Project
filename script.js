const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const lowerCaseInput = str.toLowerCase();
	const fruitFilter = fruit.filter(function(val){
		return val.includes(lowerCaseInput)
	});
	results = fruitFilter;
	


	return results;

}



function searchHandler(e) {
	const fruitIdInnerText = document.getElementById('fruit').innerText;
	search(fruitIdInnerText);
}

function showSuggestions(results, inputVal) {
	results = searchHandler();
	const fruitResults = document.getElementsByClassName('suggestions');
	const fruitResultsUl = document.getElementsByClassName('suggestions').children;
	let li = document.createElement("li");
	li.push(results);
	fruitResultsUl.appendChild(li);
	fruitResults.appendChild(fruitResultsUl);
	document.appendChild('fruitResults');

}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);