/**
 * Backbone support for tracking index.
 */
$(function() {

    Mustache.tags = ['<%', '%>'];

    /**
     * Model.
     */
    var Tracking = Backbone.Model.extend({
        defaults: {
            'description': '',
            'location': 'University at Buffalo',
        },
        /* This is called when an instance is created, or `specifically`, after the instance created.
         * Add `event` if necessary here.
         */
        initialize: function() {
        }

    });

    /**
     * Collection.
     */
    var TrackingsCollection = Backbone.Collection.extend({
        model: Tracking,

        url: 'http://127.0.0.1:5000/api/v1/trackings/set/1;44/',

        parse: function(response) {
            return response['objects'];
        }
    });

    //TODO
    var TrackingDetailView = Backbone.View.extend({
        el: $('#tracking-app'),

        template: $('#tracking-detail-template').html(),

        events: {
            'click #back': 'back'
        },

        render: function() {
            console.log('Rendering id = ' + this.model.get('id'));
            this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
        },

        back: function(evt) {
            evt.preventDefault();
            console.log('Rendering all trackings.');
            app.render();
        }
    });

    /**
     * List View.
     */
    var TrackingListView = Backbone.View.extend({
        // Each tracking is embedded in the `ul` tag of index page.
        tagName: 'div',

        className: 'tracking-basic',

        template: $('#tracking-list-template').html(),

        //default impl is a no-op. good convenion is return this to enable chained calls.
        render: function() {
            //TODO Use Mustache.render() ?
            this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
            return this;
        },

        events: {
            'click': 'detail',
        },

        // Render detail view.
        detail: function() {
            var detailView = new TrackingDetailView({model: this.model});
            detailView.render();
        }
    });

    /*
    var TrackingRouter = Backbone.Router.extend({
    });
    */

    var allTrackings = new TrackingsCollection();
    allTrackings.on('add', function(model) {
        console.log(model.get('description'));
    });

    var AppView = Backbone.View.extend({

        el: $('#tracking-app'),

        initialize: function() {
            allTrackings.on('reset', this.addAll, this);
            /* `fetch` triggers `reset` event.
             */
            allTrackings.fetch();
        },

        render: function() {
            console.log('Rendering the app.');
            this.$el.html('<div id="all-trackings"></div>');
            this.addAll();
        },

        addOne: function(tracking) {
            var view = new TrackingListView({model: tracking});
            this.$('#all-trackings').append(view.render().el);
        },

        addAll: function() {
            allTrackings.each(this.addOne);

            var $container = $('#tracking-app');
            $container.imagesLoaded(function() {
                $container.masonry({
                    itemSelector: '.tracking-basic',
                    columnWidth: 340,
                });
            });
        }
    });

    var app = new AppView();
});
