// 🌐 Webmail-Ziel
const WEBMAIL_URL = "https://webmail-web145.alfahosting-server.de/";

// 👩‍💻 Schülerliste mit Passwörtern
const accounts = Array.from({ length: 20 }, (_, i) => ({
  email: `schueler${i + 1}@codeclass.de`,
  password: "itcamp2025",
}));

// URL einsetzen & Button verlinken
document.getElementById("webmailUrl").textContent = WEBMAIL_URL;
document.getElementById("openWebmail").addEventListener("click", () => {
  window.open(WEBMAIL_URL, "_blank", "noopener");
});

// Hilfsfunktionen
function makeBtn(label, onClick, extraClass = "") {
  const b = document.createElement("button");
  b.className = extraClass ? `small ${extraClass}` : "small";
  b.textContent = label;
  b.addEventListener("click", onClick);
  return b;
}

function showCopied(el, text = "✔️ Kopiert!") {
  el.textContent = text;
  el.classList.add("copied");
  setTimeout(() => {
    el.textContent = "";
    el.classList.remove("copied");
  }, 1200);
}

// Karten erzeugen
const listEl = document.getElementById("list");
accounts.forEach(acc => {
  const card = document.createElement("div");
  card.className = "card";

  const row = document.createElement("div");
  row.className = "row";

  const emailSpan = document.createElement("span");
  emailSpan.className = "email";
  emailSpan.textContent = acc.email;

  const status = document.createElement("span");

  const btnCopyMail = makeBtn("✉️ E-Mail kopieren", async () => {
    await navigator.clipboard.writeText(acc.email);
    showCopied(status, "✉️ E-Mail kopiert!");
  });

  const btnCopyPw = makeBtn("🔒 Passwort kopieren", async () => {
    await navigator.clipboard.writeText(acc.password);
    showCopied(status, "🔒 Passwort kopiert!");
  });

  row.append(emailSpan, btnCopyMail, btnCopyPw, status);
  card.append(row);
  listEl.append(card);
});
