$(document).ready(function(){
    chrome.extension.sendRequest({action:"getReady"},function(response) {
        if(!response) {
            return;
        }
        // append new script to body
        $("body").append(response);
    }); 

});
