const search = document.querySelector('[type]');
const ul = document.querySelector('ul');
const friendList = ['Dace', 'Matt', 'Maddy', 'Scott', 'Phil', 'Zane', 'Jamie'];

// this function will take two arguments and return new results into an Array
const filterResults = (list, inputSource) => {
    let newArray = [];
    inputSource = inputSource.value.toLowerCase();
	for (i=0; i < list.length; i++){
		if (list[i].toLowerCase().indexOf(inputSource) > -1) {
			newArray.push(list[i]);
		}
	}
	return newArray;
}

// function that will append the list to the page
const insertList = (list, target) => {
    target.innerHTML = '';
    let listHTML = '';
    for (i=0; i < list.length; i++) {
        listHTML += `<li>${list[i]}</li>`
    }
    target.insertAdjacentHTML('beforeend', listHTML);
}

// Page load results
insertList(filterResults(friendList, search), ul);

// Event listener for search
search.addEventListener('keyup', () => {
	insertList(filterResults(friendList, search), ul);
});