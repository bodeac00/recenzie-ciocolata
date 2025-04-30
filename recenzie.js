const trimiteRecenzie = () => {
  const valoare = document.querySelector("#stelute").value;
  const divStele = document.getElementById("stele");
  divStele.innerHTML = "";

  if (valoare >= 1 && valoare <= 5) {
    for (let i = 0; i < valoare; i++) {
      divStele.innerHTML += "★";
    }

    document.querySelector("#stelute").value = "";
    document.getElementById("mesaj").innerText = "Mulțumim pentru recenzie!";
  } else {
    document.getElementById("mesaj").innerText =
      "Introduceți un număr între 1 și 5.";
  }
};

document.getElementById("trimite").onclick = trimiteRecenzie;
