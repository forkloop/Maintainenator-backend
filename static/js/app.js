/**
 * XXX
 * Backbone support for tracking index.
 */

$(function() {

    var Tracking = Backbone.Model.extend({
        initialize: function() {
            this.set('description': this.get('description'));
            this.set('location': this.get('location'));
        }

    });

    var TrackingList = Backbone.Collection.extend({
        url: 'api/v1/trackings',
        model: Tracking,
    });

    var TrackingView = Backbone.View.extend({
        tagName: 'li',

        template: '',

        //default impl is a no-op. good convenion is return this to enable chained calls.
        render: function() {
            this.$el.html();
            return this;
        }
    });

    /*
    var TrackingRouter = Backbone.Router.extend({

    });
    */

    var Trackings = new TrackingList();

    var AppView = Backbone.View.extend({

        el: $('#tracking-app'),

        initialize: function() {
            this.wrapper = this.$('tracking-wrapper');
            Trackings.on('reset', this.addAll, this);
            // trigger reset event
            Trackings.fetch();
        },

        render: function() {
            if (Tracking.length) {
                this.wrapper.show();
            } else {
                this.wrapper.hide();
            }
        },

        addOne: function(tracking) {
            var view = new TrackingView({t: tracking});
            this.$('#tracking-list').append(view.render().el);
        },

        allAll: function() {
            Trackings.each(this.addOne);
        }
    });

    var App = new AppView();
});
