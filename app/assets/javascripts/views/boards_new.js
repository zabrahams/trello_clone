TrelloClone.Views.BoardsNew = Backbone.View.extend({

  events: {
    "submit form.new-board": "createBoard"
  },

  template: JST['boards/form'],

  render: function () {
    this.$el.html( this.template( {board: this.model } ));
    return this;
  },

  createBoard: function (event) {
    event.preventDefault();
    var view = this;
    var attrs = $(event.currentTarget).serializeJSON();

    this.model.save(attrs, {
      success: function () {
        view.collection.add(view.model);
        Backbone.history.navigate("", { trigger: true } )
      },

      error: function () {
        console.log("Model failed to save");
      }
    });
  },

  leave: function () {
    this.remove();
  }

});
