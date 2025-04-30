const submitRecenzie = () => {
  const stelute = document.querySelector("#stelute").value;
  const steluteContainer = document.querySelector("#steluteContainer");

  // Ștergem stelele anterioare
  steluteContainer.innerHTML = "";

  // Verificăm dacă numărul introdus e valid (1–5)
  if (stelute >= 1 && stelute <= 5) {
    for (let i = 0; i < stelute; i++) {
      steluteContainer.innerHTML += `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gold">
            <path d="M12 2l2.5 7.5h8l-6 4.5 2.5 7.5L12 16l-6 4.5 2.5-7.5-6-4.5h8z" />
          </svg>`;
    }
  }

  // Resetăm câmpul input
  document.querySelector("#stelute").value = "";
};

document.querySelector("#trimite").onclick = submitRecenzie;
