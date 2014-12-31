TrelloClone.Views.CardsNew = Backbone.View.extend({

  tagName: "li",

  events: {
    "submit form.new-card": "newCard"
  },

  template: JST['cards/form'],

  render: function () {
    this.$el.html(this.template( { card: new TrelloClone.Models.Card() } ));
    return this;
  },

  leave: function () {
    this.remove();
  },

  newCard: function (event) {
    event.preventDefault();
    var cardAttrs;

    cardAttrs = $(event.currentTarget).serializeJSON();
    cardAttrs.card.list_id = this.collection.list.id;
    this.model.save(cardAttrs, {
      success: function () {
        this.collection.list.trigger("update");
      }.bind(this),
      error: function () {
        console.log("Card failed to save for mysterious reasons.")
      }
    });
  }

});
