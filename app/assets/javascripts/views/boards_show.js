TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({

  tagName: "ul",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST['boards/show'],

  render: function () {
    this.$el.html(this.template( { board: this.model} ) );
    this.model.lists().each(function (list) {
      var listView = new TrelloClone.Views.ListsShow( { model: list });
      this.addSubview("ul.list-container", listView);
    }.bind(this));

    return this;
  }

});
