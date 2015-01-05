TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.model, "update", function () {
      this.collection.board.fetch();
    }.bind(this)
  )},

  tagName: "li",

  className: "list-container",

  events: {
    "click button.delete-list": "deleteList"
  },

  template: JST['lists/show'],
  render: function () {
    this.$el.html(this.template( { list: this.model }));

    this.model.cards().each( function (card) {
      var cardView = new TrelloClone.Views.CardsShow( { model: card, collection: this.model.cards() });
      this.addSubview("ul.list", cardView);
    }.bind(this));

    var cardFormView = new TrelloClone.Views.CardsNew( {
      model: new TrelloClone.Models.Card(),
      collection: this.model.cards()
    });

    this.addSubview("ul.list", cardFormView);
    this.$('ul.list').sortable();
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
