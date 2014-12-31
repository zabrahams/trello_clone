TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$main = options.$main;
    this.boards = options.boards;
  },

  routes: {
    "": "boardsIndex",
    "boards/new": "boardsNew",
    "boards/:id": "boardsShow"
  },

  boardsIndex: function () {
    var boardsIndexView;

    this.boards.fetch();
    boardsIndexView = new TrelloClone.Views.BoardsIndex( {collection: this.boards} );
    this._swapView(boardsIndexView);
  },

  boardsShow: function (id) {
    var board, boardsShowView;

    board = this.boards.getOrFetch(id);
    board.fetch();
    boardsShowView = new TrelloClone.Views.BoardsShow( {model: board} );
    this._swapView(boardsShowView);
  },

  boardsNew: function () {
    var board;

    board = new TrelloClone.Models.Board();
    boardsNewView = new TrelloClone.Views.BoardsNew( {model: board, collection: this.boards} );
    this._swapView(boardsNewView);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.leave();
    this._currentView = newView;
    this.$main.html(newView.render().$el);
  }
});
