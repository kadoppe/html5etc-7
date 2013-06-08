// Todo数表示用View
var StatsView = Backbone.View.extend({
  el: '#stats',

  initialize: function() {
    this.collection.on('add', this.onAdd, this);
  },

  onAdd: function(todo, todos) {
    this.$('#todo_num').text(todos.length);
  }
});

