export function downloadUserInformation(userInformation){
    var fileText = new Blob([JSON.stringify(userInformation)],{type:"application/json"});
    var textURL = window.URL.createObjectURL(fileText);
    console.log(textURL);
    var downloadLink = document.createElement("a");
    downloadLink.download = "UserInformation.json";
    downloadLink.innerHTML="";
    downloadLink.href=textURL;
    document.body.appendChild(downloadLink);
    downloadLink.click();
}