//	1

var tab = [];
for (var i=0; i<5; i++) {    
    tab[i] = prompt("Podaj zainteresowanie: "); 
    
}

var list = document.getElementById("lista");

tab.forEach(item => {
    var listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
});

//	2

document.getElementById('button').addEventListener('click', function() {
    let opinion = document.getElementById('input').value;
    let opinionElement = document.getElementById('text');
    
    if (opinion) {
        opinionElement.textContent = opinion;
        opinionElement.style.color = 'green';
		opinionElement.style.fontFamily = 'Arial';
        opinionElement.style.fontWeight = 'bold';
    } else {
        opinionElement.textContent = 'Proszę wpisać opinię!';
        opinionElement.style.color = 'red';
		opinionElement.style.fontFamily = 'Arial';
		opinionElement.style.fontWeight = 'normal';
    }
});

// zadanie dodatkowe

$(document).ready(function() {
    $('#znika').fadeOut(500).delay(5000).queue(function(next) {
        $(this).css('color', '#8458B3');
        next();
    }).fadeIn(500);
});

