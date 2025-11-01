document.addEventListener("DOMContentLoaded", () => {
  const searchInputs = document.querySelectorAll(".search-bar");
  searchInputs.forEach(input => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const q = input.value.trim();
        if (q) window.location.href = `resultados.html?q=${encodeURIComponent(q)}`;
      }
    });
  });

  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  if (q && document.querySelector("#resultados")) {
    mostrarResultados(q);
  }
});

function mostrarResultados(query) {
  const cont = document.querySelector("#resultados");
  cont.innerHTML = `<h2>Resultados para: "${query}"</h2>`;
  const encontrados = medicamentos.filter(m =>
    m.nombre.toLowerCase().includes(query.toLowerCase()) ||
    m.via.toLowerCase().includes(query.toLowerCase()) ||
    m.grupo.toLowerCase().includes(query.toLowerCase())
  );
  if (encontrados.length === 0) {
    cont.innerHTML += "<p>No se encontraron resultados.</p>";
    return;
  }
  const grupos = {};
  encontrados.forEach(m => {
    if (!grupos[m.grupo]) grupos[m.grupo] = [];
    grupos[m.grupo].push(m);
  });
  for (const g of Object.keys(grupos)) {
    cont.innerHTML += `<h3 style="color:#7b1f3c;">${g}</h3>`;
    grupos[g].forEach(m => {
      cont.innerHTML += `<div class="resultado-card"><h4>${m.nombre}</h4><p><strong>Vía:</strong> ${m.via}</p><p>${m.descripcion}</p><a class="btn" href="${m.link}">Ver más</a></div>`;
    });
  }
}
