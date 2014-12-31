TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  events: {
    "click li.board": "navigateToBoard"
  },

  template: JST['boards/index'],

  render: function () {
    this.$el.html(this.template( {boards: this.collection} ));
    return this;
  },

  leave: function () {
    this.remove();
  },

  navigateToBoard: function (event) {
    var $li, boardId;

    $li = $(event.currentTarget);
    boardId = $li.data('id');
    Backbone.history.navigate("#/boards/" + boardId, { trigger: true } );
  }
});
