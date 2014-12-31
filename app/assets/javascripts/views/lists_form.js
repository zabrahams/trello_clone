TrelloClone.Views.ListsForm = Backbone.View.extend({

  tagName: "li",

  events: {
    "submit form.new-list": "createList"
  },

  template: JST['lists/form'],

  render: function () {
    this.$el.html(this.template( { list: this.model } ));
    return this;
  },

  leave: function () {
    this.remove();
  },

  createList: function (event) {
    event.preventDefault();
    var listAttrs = $(event.currentTarget).serializeJSON();
    listAttrs.list.board_id = this.collection.board.id;
    console.log(listAttrs);
    this.model.save(listAttrs.list);
  }

});
