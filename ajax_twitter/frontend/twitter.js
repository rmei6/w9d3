const FollowToggle = require('./follow_toggle');


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