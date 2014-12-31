TrelloClone.Views.ListsShow = Backbone.View.extend({

  tagName: "li",

  template: JST['lists/show'],

  render: function () {
    this.$el.html(this.template( {
      list: this.model,
      cards: this.model.cards()
    }));

    return this
  },

  leave: function () {
    this.remove();
  }

});
