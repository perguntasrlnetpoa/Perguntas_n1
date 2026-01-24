let securityActive = false;

function onFullscreenChange() {
  if (securityActive && !document.fullscreenElement) {
    alert("Você saiu da tela cheia. Prova encerrada.");
    window.location.reload();
  }
}

function onVisibilityChange() {
  if (securityActive && document.hidden) {
    alert("Troca de aba detectada. Prova encerrada.");
    window.location.reload();
  }
}

function onBlur() {
  if (securityActive) {
    alert("Janela perdeu foco. Prova encerrada.");
    window.location.reload();
  }
}

function onKeyDown(e) {
  if (
    securityActive &&
    (e.key === "F5" || (e.ctrlKey && e.key.toLowerCase() === "r"))
  ) {
    e.preventDefault();
  }
}

function onContextMenu(e) {
  if (securityActive) e.preventDefault();
}

export function activateSecurity() {
  securityActive = true;

  document.documentElement.requestFullscreen?.();

  document.addEventListener("fullscreenchange", onFullscreenChange);
  document.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("blur", onBlur);
  window.addEventListener("keydown", onKeyDown);
  document.addEventListener("contextmenu", onContextMenu);

  window.history.pushState(null, "", window.location.href);
  window.onpopstate = () => {
    if (securityActive) {
      window.history.pushState(null, "", window.location.href);
    }
  };
}

export function deactivateSecurity() {
  securityActive = false;

  document.removeEventListener("fullscreenchange", onFullscreenChange);
  document.removeEventListener("visibilitychange", onVisibilityChange);
  window.removeEventListener("blur", onBlur);
  window.removeEventListener("keydown", onKeyDown);
  document.removeEventListener("contextmenu", onContextMenu);

  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}
