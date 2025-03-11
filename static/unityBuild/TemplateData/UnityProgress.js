// Unity progress helper script (placeholder)
function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module) {
    return;
  }
  
  if (!gameInstance.loadingBox) {
    gameInstance.loadingBox = document.createElement("div");
    gameInstance.loadingBox.className = "loading-box";
    gameInstance.loadingBox.innerHTML = "<div class='loading-bar'><div class='loading-fill'></div></div>";
    
    var container = document.getElementById('unity-container');
    if (container) {
      container.appendChild(gameInstance.loadingBox);
    }
  }
  
  if (progress === 1) {
    // Loading complete
    if (gameInstance.loadingBox) {
      gameInstance.loadingBox.style.display = "none";
    }
  } else if (gameInstance.loadingBox && gameInstance.loadingBox.querySelector('.loading-fill')) {
    // Update progress bar
    gameInstance.loadingBox.querySelector('.loading-fill').style.width = Math.round(progress * 100) + "%";
  }
}
