TrelloClone.Views.BoardsNew = Backbone.View.extend({

  events: {
    "submit form.new-board", "createBoard"
  },

  template: JST['boards/form'],

  render: function () {
    this.$el.html( this.template( {board: this.model } ));
    return this;
  },

  createBoard = function (event) {

  }

});
