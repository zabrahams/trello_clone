TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({

  tagName: "ul",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button.delete-board": "deleteBoard"
  },

  template: JST['boards/show'],

  render: function () {
    this.$el.html(this.template( { board: this.model} ) );

    this.model.lists().each(function (list) {
      var listView = new TrelloClone.Views.ListsShow( { model: list, collection: this.model.lists() });
      this.addSubview("ul.list-container", listView);
    }.bind(this));

    var listFormView = new TrelloClone.Views.ListsForm( {
      model: new TrelloClone.Models.List(),
      collection: this.model.lists()
    });
    this.addSubview("ul.list-container", listFormView);

    return this;
  },

  deleteBoard: function () {
    this.model.destroy({
      success: function () {
        Backbone.history.navigate("", { trigger: true });
      },

      error: function () {
        console.log("Model refused to be destroyed");
      }
    });
  }

});
