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

        url: function() {
            var urlRoot = $('#base-url').html();
            console.log(urlRoot);
            if (this.meta) {
                return (urlRoot + this.meta['next']);
            } else {
                return (urlRoot + '/api/v1/trackings/');
            }
        },

        meta: '',

        parse: function(response) {
            this.meta = response['meta'];
            return response['objects'];
        },
    });

    var TrackingDetailView = Backbone.View.extend({
        el: '#tracking-app',

        template: $('#tracking-detail-template').html(),

        events: {
            'click #all-trackings-btn': 'back',
        },

        render: function() {
            console.log('Rendering id = ' + this.model.get('id'));
            this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
            this.loadmap();
        },

        back: function(evt) {
            evt.preventDefault();
            console.log('Rendering all trackings.');
            app.render();
        },

        loadmap: function() {
            var latitude = this.model.get('latitude') || 42.96114;
            console.log('latitude: ' + latitude);
            var longitude = this.model.get('longitude') || -78.81498;
            var latLng = new google.maps.LatLng(latitude, longitude);
            var mapOptions = {
                zoom: 18,
                center: latLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
            });
        },
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
            var json = this.model.toJSON();
            // ONLY use the first photo to reduce index page overhead.
            if (json.photos.length) {
                json.photos = json.photos[0];
            }
            this.$el.html(Mustache.to_html(this.template, json));
            //this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
            return this;
        },

        events: {
            'click': 'detail',
        },

        // Render detail view.
        detail: function() {
            var detailView = new TrackingDetailView({model: this.model});
            detailView.render();
        },
     });

    /*
    var TrackingRouter = Backbone.Router.extend({
        routes: {

        },
    });
    */

    var $container = $('#all-trackings');

    var allTrackings = new TrackingsCollection();
    allTrackings.on('add', function(tracking) {
        var $view = new TrackingListView({model: tracking}).render().$el;
        $view.imagesLoaded(function() {
            $container.append($view);
            $container.masonry('appended', $view, true);
        });
    });

    var AppView = Backbone.View.extend({

        el: '#tracking-app',

        initialize: function() {
            window.isLoading = false;
            allTrackings.on('reset', this.addAll, this);
            /* `fetch` triggers `reset` event.
             */
            allTrackings.fetch();
            ///*
            $(window).on('scroll', function() {
                var triggerHeight = 0;
                if (!window.isLoading && ($(window).scrollTop() + $(window).height() + triggerHeight > $container.height())) {
                    console.log('fetching...');
                    window.isLoading = true;
                    allTrackings.fetch({
                        add: true,
                        success: function() {
                            console.log('Fetched successfully, ' + this);
                            if (allTrackings['meta']['next']) {
                                window.isLoading = false;
                            }
                        },
                    });
                }
            });
            //*/
        },

        render: function() {
            console.log('Rendering the app.');
            this.$el.html('<h1>Trackings</h1><div id="all-trackings"></div>');
            this.addAll();
        },

        addOne: function(tracking) {
            var view = new TrackingListView({model: tracking});
            this.$('#all-trackings').append(view.render().el);
        },

        addAll: function() {
            console.log('add all trackings...');
            allTrackings.each(this.addOne);

            // Enable `pinterest` style with masonry.js.
            $container.imagesLoaded(function() {
                console.log('Mansorying...');
                $container.masonry({
                    itemSelector: '.tracking-basic',
                    columnWidth: 320,
                });
            });
        },
   });

    var app = new AppView();
});
