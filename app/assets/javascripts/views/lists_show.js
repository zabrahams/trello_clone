TrelloClone.Views.ListsShow = Backbone.View.extend({

  tagName: "li",

  events: {
    "click button.delete-list": "deleteList"
  },

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
