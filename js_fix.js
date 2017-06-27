'use strict';

var code = `
function getServerTime() {
	document.getElementById("RelogioPesquisador").innerHTML = "cucko!";
}
`;

var script = document.createElement('script');
script.textContent = code;
document.body.appendChild(script);
//https://stackoverflow.com/questions/35580017/override-javascript-file-in-chrome