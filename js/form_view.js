// フォーム用View
var FormView = Backbone.View.extend({
  el: '#form',

  events: {
    'click #input_submit': 'onSubmit'
  },

  onSubmit: function(e) {
    var name, priority;

    e.preventDefault();

    name = this.$('#input_name').val();
    priority = this.$('#input_priority').val();

    todo = new Todo({name: name, priority: priority}, {sort: false});

    this.collection.add(todo);
  }
});
