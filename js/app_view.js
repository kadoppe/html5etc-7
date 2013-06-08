// アプリ全体を管理するView
var AppView = Backbone.View.extend({
  el: 'body',

  initialize: function() {
    this.formView = new FormView({collection: this.collection});
    this.controlsView = new ControlsView({collection: this.collection});
    this.TodoView = new TodoListView({collection: this.collection});
    this.StatsView = new StatsView({collection: this.collection});
  }
});
