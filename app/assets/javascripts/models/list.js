TrelloClone.Models.List = Backbone.Model.extend({

  cards: function () {
    this._cards = this._cards || new TrelloClone.Collections.Cards( { list: this } );
    return this._cards;
  },

  parse: function (list) {
    if (list.cards) {
      this.cards().set(list.cards, { parse: true} );
      delete list.cards;
    }

    return list;
  }

});
