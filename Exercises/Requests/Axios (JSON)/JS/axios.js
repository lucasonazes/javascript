fetch('pessoas.json')
    .then(response => response.json())
    .then(json => loadElements(json))

function loadElements(json) {
    
}