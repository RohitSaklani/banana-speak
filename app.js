var btntrans = document.querySelector("#btn-translate");

var bstxt = document.querySelector("#basic-text");

var out = document.querySelector("#output");

btntrans.addEventListener("click", newFunction());

function err() {
  out.innerHTML = "error occured during api transaction !!!";
}

function newFunction() {
  return async function clickenevthandler() {
    var url = "https://api.funtranslations.com/translate/minion.json?text=";
    url = url + bstxt.value;
    let cntxt;

    try {
      const res = await fetch(url)
        .then((response) => response.json())
        .catch(() => err());

      cntxt = res.contents.translated;
      out.innerHTML = cntxt;
    } catch (error) {
      err();
    }
  };
}
