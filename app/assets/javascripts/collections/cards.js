TrelloClone.Collections.Cards = Backbone.Collection.extend({

  initialize: function (options) {
    this.list = options.list;
  },

  model: TrelloClone.Models.Card,

  url: "/api/cards"

});
