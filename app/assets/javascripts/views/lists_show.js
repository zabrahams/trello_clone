TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({

  tagName: "li",

  events: {
    "click button.delete-list": "deleteList"
  },

  template: JST['lists/show'],

  render: function () {
    this.$el.html(this.template( { list: this.model }));

    this.model.cards().each( function (card) {
      var cardView = new TrelloClone.Views.CardsShow( { model: card });
      this.addSubview("dl.list", cardView);
    }.bind(this));

    var cardFormView = new TrelloClone.Views.CardsNew( { model: new TrelloClone.Models.Card() } );
    this.addSubview("dl.list", cardFormView);

    return this
  },

  deleteList: function (event) {
    this.model.destroy({
      success: function () {
        this.collection.board.fetch();
      }.bind(this),
      error: function () {
        console.log("Error: List could not be destroyed.")
      }
    });

  }

});
