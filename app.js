var btntrans = document.querySelector("#btn-translate");

var bstxt = document.querySelector("#basic-text");

var out = document.querySelector("#output");

btntrans.addEventListener("click", newFunction());

function err() {
    console.log("eroor occured during api tran");
    out.innerHTML = "error occured during api transaction !!!"
}

function newFunction() {
    return function clickenevthandler() {
        var url = "https://api.funtranslations.com/translate/minion.json?text=";
        url = url + bstxt.value;
        let cntxt;

        console.log("clcikedd");
        console.log("given input : " + bstxt.value);

        fetch(url)
            .then(response => { return response.json(); })
            .then(json => {
                console.log(json.contents.translated);
                cntxt = json.contents.translated;
                out.innerHTML = cntxt;
            })
            .catch(err());


    };
}