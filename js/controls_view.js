// ボタン用View
var ControlsView = Backbone.View.extend({
  el: '#controls',

  events: {
    'click #button_sort_by_name': 'onSortByName',
    'click #button_sort_by_priority': 'onSortByPriority',
  },

  onSortByName: function () {
    this.collection.sortByName();
  },

  onSortByPriority: function () {
    this.collection.sortByPriority();
  }
});

