// Todoを表すModel
var Todo = Backbone.Model.extend({

});

// 複数のToDoを表すCollection
var Todos = Backbone.Collection.extend({
  sortByName: function() {
    this.comparator = function(model) {
      return model.get('name');
    };
    this.sort();
  },

  sortByPriority: function() {
    this.comparator = function(model) {
      return -model.get('priority');
    };
    this.sort();
  }
});
