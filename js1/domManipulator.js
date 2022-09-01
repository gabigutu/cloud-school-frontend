function whenDocumentIsReady() {
    const detailsElement = document.querySelector('#main > #details');
    
    const newParagElement = document.createElement('p');
    newParagElement.innerText = 'This is the new paragraph';
    newParagElement.style.color = 'red';
    newParagElement.style.fontWeight = 'bold';
    detailsElement.prepend(newParagElement);
}

// document.addEventListener('DOMContentLoaded', whenDocumentIsReady);
// window.onload = whenDocumentIsReady;
// window.addEventListener('load',whenDocumentIsReady );

window.addEventListener('beforeunload', function() { // ?
    alert('Leaving page');
    const confirmed = confirm('Are you sure you wanr to leave the page?');
    if (!confirmed) {
        return;
    }
});

