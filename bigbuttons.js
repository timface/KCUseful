console.log("Big Buttons Beginning");
$.get(chrome.extension.getURL('/bigbutts.html'), function(data){
    $($.parseHTML(data)).prependTo('body');
    var learnJCUButton = $('button[name="kcuButton"]');
})

