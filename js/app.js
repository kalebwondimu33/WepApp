'use strict';
const state = { clicks: 0 };
const qs = (sel) => document.querySelector(sel);
function log(msg) {
  const out = qs("#output");
  if (out) out.textContent = msg;
  console.log(msg);
}
function handlePrimaryClick() {
  state.clicks += 1;
  log(`Primary clicked ${state.clicks} times`);
}
function handleExportClick(e) {
  e.preventDefault();
  log("Export requested (not implemented)");
}
function handleFormSubmit(e) {
  e.preventDefault();
  const q = (qs("#query")?.value || "").trim();
  log(q ? `Searching for: ${q}` : "Please enter a search term.");
}
function bindUI() {
  const primaryBtn = qs(".primary-button");
  const exportBtn = qs("#exportBtn"); const form = qs("#searchForm");
  if (primaryBtn) primaryBtn.addEventListener("click", handlePrimaryClick);
  if (exportBtn) exportBtn.addEventListener("click", handleExportClick);
  if (form) form.addEventListener("submit", handleFormSubmit);
}
document.addEventListener("DOMContentLoaded", () => {
  bindUI();
  log("App initialized");
});
