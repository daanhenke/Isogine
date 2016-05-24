var $__Engine_47_engine_46_js__ = (function() {
  "use strict";
  var __moduleName = "Engine/engine.js";
  function run() {
    console.log('im running too');
  }
  console.log('sup');
  return {get run() {
      return run;
    }};
})();

var $__Game_47_game_46_js__ = (function() {
  "use strict";
  var __moduleName = "Game/game.js";
  var Engine = $__Engine_47_engine_46_js__;
  console.log('im running');
  Engine.run();
  return {};
})();

//# sourceMappingURL=game.js.map
