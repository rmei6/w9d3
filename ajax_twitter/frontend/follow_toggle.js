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