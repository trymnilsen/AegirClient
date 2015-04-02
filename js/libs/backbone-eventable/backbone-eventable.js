(function() {
    var eventable = Backbone.Eventable = function() {};
    // Attach all inheritable methods to the Model prototype.
    _.extend(Backbone.Eventable.prototype, Backbone.Events, {});
})();

