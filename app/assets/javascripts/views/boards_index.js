TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  events: {
    "click li.board": "navigateToBoard",
    "click li.make-board": "displayBoardForm"
  },

  template: JST['boards/index'],

  render: function () {
    this.$el.html(this.template( {boards: this.collection} ));
    board = new TrelloClone.Models.Board();
    boardsNewView = new TrelloClone.Views.BoardsNew({
      model: board,
      collection: this.collection
    });
    this._formView = boardsNewView;

    this.$("li.make-board").html(boardsNewView.render().$el)
    return this;
  },

  leave: function () {
    this._formView.remove();
    this.remove();
  },

  navigateToBoard: function (event) {
    var $li, boardId;

    $li = $(event.currentTarget);
    boardId = $li.data('id');
    Backbone.history.navigate("#/boards/" + boardId, { trigger: true } );
  },

  displayBoardForm: function (event) {
    var $li = $(event.currentTarget);
    $li.find("form").removeClass("hidden");
  }
});
