TrelloClone.Views.CardsShow = Backbone.View.extend ({

  events: {
    "click button.delete-card": "deleteCard"
  },

  template: JST['cards/show'],

  render: function () {
    this.$el.html(this.template( { card: this.model }));
    return this;
  },

  leave: function () {
    this.remove();
  },

  deleteCard: function () {
    this.model.destroy({
      success: function () {
        console.log("hi")
        this.collection.list.trigger("update");
      }.bind(this),
      error: function () {
        console.log("For some reason that card won't delete itself?");
      }
    });
  }

});
