$(document).ready(function(){
    chrome.extension.sendRequest({action:"getReady"},function(response) {
        if(!response) {
            return;
        }
        $("body").append(response);
    }); 

});
