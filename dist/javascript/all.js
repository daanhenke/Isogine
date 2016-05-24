var $___46__46__47__46__46__47_src_47_Client_47_Engine_47_engine_46_js__ = (function() {
  "use strict";
  var __moduleName = "../../src/Client/Engine/engine.js";
  function run() {
    console.log('im running too');
  }
  console.log('sup');
  return {get run() {
      return run;
    }};
})();
var $___46__46__47__46__46__47_src_47_Client_47_Game_47_game_46_js__ = (function() {
  "use strict";
  var __moduleName = "../../src/Client/Game/game.js";
  var Engine = $___46__46__47__46__46__47_src_47_Client_47_Engine_47_engine_46_js__;
  console.log('im running');
  Engine.run();
  return {};
})();
