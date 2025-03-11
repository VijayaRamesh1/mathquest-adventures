// Placeholder Unity loader for development/testing
// In a real Unity build, this would be the actual Unity Loader script

var UnityLoader = {
  instantiate: function(containerElId, fileUrl, onProgress) {
    console.log("Unity WebGL placeholder loader");
    
    // Create a mock game instance
    var gameInstance = {
      Module: {},
      SetFullscreen: function() {
        console.log("SetFullscreen called");
      },
      SendMessage: function(obj, method, param) {
        console.log("SendMessage", obj, method, param);
        
        // Simulate point updates
        if (obj === "GameManager" && method === "UpdatePoints") {
          localStorage.setItem("Points", param);
        }
      }
    };
    
    // Simulate loading progress
    var progress = 0;
    var interval = setInterval(function() {
      progress += 0.1;
      if (progress >= 1) {
        clearInterval(interval);
        progress = 1;
        
        // Show placeholder content
        var container = document.getElementById('unity-container');
        if (container) {
          document.getElementById('loading-text').style.display = 'none';
          document.getElementById('game-placeholder').style.display = 'flex';
        }
      }
      
      if (onProgress) {
        onProgress(gameInstance, progress);
      }
    }, 200);
    
    // Return the mock instance
    return gameInstance;
  }
};
