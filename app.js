var elementByID = document.getElementById('main-heading');
console.log(elementByID)

var elementByClass = document.getElementsByClassName('list-items');
console.log(elementByClass);

elementByID.style.color = "red";

var elementByQuerrySelectors = document.querySelectorAll('.list-items');
console.log(elementByQuerrySelectors);

for (const iterator of elementByQuerrySelectors) {
    iterator.style.backgroundColor = 'aqua';
}