const ul = document.querySelector('ul');
const arr1 = ['Dace', 'Matt', 'Maddy', 'Scott', 'Phil', 'Zane', 'Jamie'];
const search = document.querySelector('[type]')
let targetFriendList = '';

// create a function that takes items from first array and then shifts them into the second array based on search criteria

// let input = prompt('What names should come through into the second array?')


function newResults(list, input) {
	let newArray = [];
	targetFriendList = '';
	input = input.toLowerCase();
	for (i=0; i < list.length; i++){
		if (list[i].toLowerCase().indexOf(input) > -1) {
			newArray.push(list[i]);
		}
	}
	for (i=0; i < newArray.length; i++) {
		targetFriendList += `<li>${newArray[i]}</li>`
	}
	return targetFriendList;
}

search.addEventListener('keyup', () => {
	ul.innerHTML = '';
	input = search.value;
	newResults(arr1, input);
	ul.insertAdjacentHTML('beforeend', targetFriendList);
})