function encriptar() {
  var text = document.getElementById("textA1").value;
  var encriptar = text;

  if (text === "") {
    alert("Ingrese un texto para encriptar o desencriptar");
  } else {
    document.getElementById("tempp").style.display = "none";
    document.getElementById("salidaa").style.display = "block";

    encriptar = encriptar.replaceAll("e", "enter");
    encriptar = encriptar.replaceAll("i", "imes");
    encriptar = encriptar.replaceAll("a", "ai");
    encriptar = encriptar.replaceAll("o", "ober");
    encriptar = encriptar.replaceAll("u", "ufat");

    document.getElementById("textA2").value = encriptar;
    document.getElementById("textA1").value = "";
  }
}

function desEncriptar() {
  var text = document.getElementById("textA1").value;
  var encriptar = text;

  if (text === "") {
    alert("Ingrese un texto para encriptar o desencriptar");
  } else {
    document.getElementById("tempp").style.display = "none";
    document.getElementById("salidaa").style.display = "block";
    
    encriptar = encriptar.replaceAll("enter", "e");
    encriptar = encriptar.replaceAll("imes", "i");
    encriptar = encriptar.replaceAll("ai", "a");
    encriptar = encriptar.replaceAll("ober", "o");
    encriptar = encriptar.replaceAll("ufat", "u");

    document.getElementById("textA2").value = encriptar;
    document.getElementById("textA1").value = "";
  }
}

function copiarTexto() {
  var text = document.getElementById("textA2").value;
  var textoCopy = document.getElementById("textA2");

  textoCopy.select();
  document.execCommand("copy");
  alert("Texto Copiado Correctamente!");
  

}
