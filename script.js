(() => {
  "use strict";

  const data = window.CARNET_DATA;
  if (!data) {
    document.body.innerHTML = "<p>Impossible de charger le carnet.</p>";
    return;
  }

  const storageKey = `aubenas-street-art-${data.version}`;

  const els = {
    visitTitle: document.getElementById("visit-title"),
    notebookTitle: document.getElementById("notebook-title"),
    introText: document.getElementById("intro-text"),
    worksList: document.getElementById("works-list"),
    mapText: document.getElementById("map-text"),
    mapLink: document.getElementById("map-link"),
    bonusCard: document.getElementById("bonus-card"),
    bonusName: document.getElementById("bonus-name"),
    bonusText: document.getElementById("bonus-text"),
    updateDate: document.getElementById("update-date"),
    resetButton: document.getElementById("reset-button"),
    progressTopText: document.getElementById("progress-top-text"),
    progressTopPercent: document.getElementById("progress-top-percent"),
    progressTopFill: document.getElementById("progress-top-fill"),
    progressBottomText: document.getElementById("progress-bottom-text"),
    progressBottomPercent: document.getElementById("progress-bottom-percent"),
    progressBottomFill: document.getElementById("progress-bottom-fill")
  };

  let checkedIds = loadProgress();

  function loadProgress() {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey));
      return Array.isArray(stored) ? new Set(stored) : new Set();
    } catch {
      return new Set();
    }
  }

  function saveProgress() {
    localStorage.setItem(storageKey, JSON.stringify([...checkedIds]));
  }

  function renderText() {
    document.title = `${data.visite.carnet} — ${data.visite.titre}`;
    els.visitTitle.textContent = data.visite.titre;
    els.notebookTitle.textContent = data.visite.carnet;
    els.introText.textContent = data.visite.introduction;
    els.mapText.textContent = data.visite.texteCarte;
    els.mapLink.href = data.visite.lienCarte;
    els.updateDate.textContent =
      `Liste vérifiée : ${data.visite.derniereMiseAJour}`;
    els.bonusName.textContent = data.bonus.nom;
    els.bonusText.textContent = data.bonus.texte;
  }

  function renderWorks() {
    els.worksList.innerHTML = "";

    data.oeuvres.forEach((work) => {
      const label = document.createElement("label");
      label.className = "work-item";
      label.dataset.id = work.id;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "work-checkbox";
      checkbox.checked = checkedIds.has(work.id);
      checkbox.setAttribute("aria-label", `J’ai repéré : ${work.nom}`);

      const name = document.createElement("span");
      name.className = "work-name";
      name.textContent = work.nom;

      label.append(checkbox, name);

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          checkedIds.add(work.id);
        } else {
          checkedIds.delete(work.id);
        }
        saveProgress();
        updateInterface();
      });

      els.worksList.appendChild(label);
    });

    updateInterface();
  }

  function updateInterface() {
    const validIds = new Set(data.oeuvres.map((work) => work.id));
    checkedIds = new Set([...checkedIds].filter((id) => validIds.has(id)));

    document.querySelectorAll(".work-item").forEach((item) => {
      const checkbox = item.querySelector(".work-checkbox");
      item.classList.toggle("is-found", checkbox.checked);
    });

    const found = checkedIds.size;
    const total = data.oeuvres.length;
    const percent = total === 0 ? 0 : Math.round((found / total) * 100);
    const label = `${found} / ${total} œuvre${total > 1 ? "s" : ""} repérée${found > 1 ? "s" : ""}`;

    [
      [els.progressTopText, els.progressTopPercent, els.progressTopFill],
      [els.progressBottomText, els.progressBottomPercent, els.progressBottomFill]
    ].forEach(([text, percentage, fill]) => {
      text.textContent = label;
      percentage.textContent = `${percent} %`;
      fill.style.width = `${percent}%`;
    });

    els.bonusCard.hidden = !(total > 0 && found === total);
  }

  els.resetButton.addEventListener("click", () => {
    const confirmed = window.confirm(
      "Remettre toutes les cases du carnet à zéro ?"
    );
    if (!confirmed) return;

    checkedIds.clear();
    saveProgress();

    document.querySelectorAll(".work-checkbox").forEach((checkbox) => {
      checkbox.checked = false;
    });

    updateInterface();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  renderText();
  renderWorks();
})();
