TrelloClone.Collections.Lists = Backbone.Collection.extend({

  initialize: function (options) {
    this.board = options.board;
  },

  model: TrelloClone.Models.List

});
