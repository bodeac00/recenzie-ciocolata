const produse = [
  { nume: "Telefon", rating: 4 },
  { nume: "Laptop", rating: 5 },
  { nume: "Mouse", rating: 3 },
];

function genereazaStele(nr) {
  let stele = "";
  for (let i = 0; i < 5; i++) {
    stele += i < nr ? "★" : "☆";
  }
  return stele;
}

let html = "<h2>Recenzii produse</h2><ul>";
for (let produs of produse) {
  html += `<li>${produs.nume}: <span class="stele">${genereazaStele(
    produs.rating
  )}</span></li>`;
}
html += "</ul>";

document.getElementById("recenzii").innerHTML = html;
