TrelloClone.Views.BoardsShow = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST['boards/show'],

  render: function () {
    this.$el.html(this.template( {
      board: this.model,
      lists: this.model.lists()
    }));
    return this;
  },

  leave: function () {
    this.remove();
  }
});
