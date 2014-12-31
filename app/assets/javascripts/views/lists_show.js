TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.model, "update", function () {  // Not sure why the one liner doesn't work...
      this.collection.board.fetch();
    }.bind(this)
  )},

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

    var cardFormView = new TrelloClone.Views.CardsNew( {
      model: new TrelloClone.Models.Card(),
      collection: this.model.cards()
    });
    this.addSubview("dl.list", cardFormView);

    return this
  },

  deleteList: function (event) {
    this.model.destroy({
      success: this.collection.board.fetch,
      error: function () {
        console.log("Error: List could not be destroyed.")
      }
    });

  }

});
