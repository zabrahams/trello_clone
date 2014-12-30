TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$main = options.$main;
    this.boards = options.boards;
  },

  routes: {
    "": "boardsIndex"
  },

  boardsIndex: function () {
    this.boards.fetch();
    boardsIndexView = new TrelloClone.Views.BoardsIndex( {collection: this.boards} );
    this.$main.html(boardsIndexView.render().$el);
  }
});
