TrelloClone.Views.CardsNew = Backbone.View.extend({

  tagName: "li",

  template: JST['cards/form'],

  render: function () {
    this.$el.html(this.template( { card: new TrelloClone.Models.Card() } ));
    return this;
  },

  leave: function () {
    this.remove();
  }

});
