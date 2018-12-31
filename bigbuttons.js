console.log("Big Buttons Beginning");

if (document.location.href === 'https://www.jcu.edu.au/'){
    $.get(chrome.extension.getURL('/bigbutts.html'), function(data){
         $($.parseHTML(data)).prependTo('.megamenu');
    })
}

