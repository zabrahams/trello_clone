TrelloClone.Collections.Boards = Backbone.Collection.extend({

  model: TrelloClone.Models.Board,

  url: "/api/boards",

  getOrFetch: function (id) {
    var board, boards;
    boards = this;

    board = boards.get(id);
    if (!board) {
      console.log("hello");
      board = new TrelloClone.Models.Board( {id: id});
      board.fetch({
        success: function () {
          boards.add(board);
        }
      });
    }
    return board;
  }

});
