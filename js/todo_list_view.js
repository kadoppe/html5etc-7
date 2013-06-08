// Todoリスト用View
var TodoListView = Backbone.View.extend({
  el: '#todo_list',

  template: "<li class='todo'>名前:<span class='todo-name'></span> 優先度:<span class='todo-priority'></span></li>",

  initialize: function() {
    this.collection.on('add', this.onAdd, this);
    this.collection.on('sort', this.onSort, this);
  },

  add: function(todo) {
    var $todo;

    $todo = $(this.template);
    $todo.find('.todo-name').text(todo.get('name'));
    $todo.find('.todo-priority').text(todo.get('priority'));

    this.$el.append($todo);
  },

  onAdd: function(todo) {
    this.add(todo);
  },

  onSort: function () {
    this.$el.empty();
    this.collection.each(function(todo) {
      this.add(todo);
    }, this);
  }
});

