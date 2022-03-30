/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

function FollowToggle(el) {
  // debugger;
  this.el = $(el);
  // this.userId = this.el.dataset.userId;
  this.userId = this.el.data('user-id');
  // console.log(this.userId);
  // debugger;
  this.followState = this.el.data('initial-follow-state');
  this.render();
  this.handleClick = this.handleClick.bind(this);
  this.el.on('click', this.handleClick);
    // .then(res => res.render);
}

FollowToggle.prototype.render = function(){
  // debugger;
  if (this.followState === "followed"){
    this.el.text("Unfollow!");
    // this.prop('initial-follow-state', 'followed');
  } else {
    this.el.text("Follow!");
    // this.prop('initial-follow-state', 'unfollowed');
    // debugger;
  }
};

FollowToggle.prototype.handleClick = function(e){
  // debugger;
  e.preventDefault();
  debugger;
  if (e.target.textContent === "Follow!"){
    $.ajax({
      method: "POST",
      url: `/users/${$(e).data('user-id')}/follow`,
      dataType: 'JSON',
    })
    .then(result => result.render());
  } else {
    $.ajax({
      method: "DELETE",
      url: `/users/${$(e).data('user-id')}/follow`,
      dataType: 'JSON'
    })
    .then(result => result.render());
  }
};

module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");


// setButtons on DOM load
// function setButtons() {
//   $('follow-toggle').each( (idx,el) => {
//     // debugger;
//     new FollowToggle(el);
//   });
// }
const setButtons = function () {
  $('.follow-toggle').each( (idx,el) => {
    // debugger;
    new FollowToggle(el);
  });
};




$(setButtons);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map