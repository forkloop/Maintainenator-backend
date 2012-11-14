(function ($) {

	var issues = [
		{ 
			title : "Leaky Faucet", 
			time : "November 12th 2012 12:30 PM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Squeaky Door",
			time : "November 11th 2012 1:30 PM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY", 
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123", 
				long : "17.6" 
			} 
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 12th 2012 12:30 PM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Squeaky Door",
			time : "November 11th 2012 1:30 PM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY", 
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123", 
				long : "17.6" 
			} 
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 12th 2012 12:30 PM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Squeaky Door",
			time : "November 11th 2012 1:30 PM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY", 
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123", 
				long : "17.6" 
			} 
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 12th 2012 12:30 PM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Squeaky Door",
			time : "November 11th 2012 1:30 PM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY", 
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123", 
				long : "17.6" 
			} 
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 12th 2012 12:30 PM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Squeaky Door",
			time : "November 11th 2012 1:30 PM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY", 
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123", 
				long : "17.6" 
			} 
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 12th 2012 12:30 PM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Squeaky Door",
			time : "November 11th 2012 1:30 PM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY", 
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123", 
				long : "17.6" 
			} 
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 12th 2012 12:30 PM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Squeaky Door",
			time : "November 11th 2012 1:30 PM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY", 
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123", 
				long : "17.6" 
			} 
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 12th 2012 12:30 PM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Squeaky Door",
			time : "November 11th 2012 1:30 PM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY", 
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123", 
				long : "17.6" 
			} 
		},
		{ 
			title : "Broken Door", 
			time : "November 11th 2012 10:30 AM", 
			images : [], 
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 1 Room 113A",
				lat : "43.2123",
				long : "17.6" 
			} 
		},
		{ 
			title : "Light Switch Broken",
			time : "November 11th 2012 9:30 AM",
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 2 Room 213A",
				lat : "43.2123",
				long : "17.6" 
				}
		},
		{ 
			title : "Leaky Faucet", 
			time : "November 11th 2012 8:30 AM", 
			images : [],
			location : { 
				coarseLocation : "Buffalo NY",
				fineLocation : "Davis Floor 3 Room 113A",
				lat : "43.2123",
				long : "17.6"
			}
		},
	];

	// application main view
	var MaintainenatorView = Backbone.View.extend({
		el : $('#application'),
		initialize : function() {
			this.issuesView = new IssueView();
		}
	});

	var IssueView = Backbone.View.extend({
		el : $('#issueTable'),
		template : '#issueTableTemplate',
		initialize : function() {

			var that = this;

			this.$el.css({
				'height' : $(window).height()
			});

			this.render();
			this.collection = new IssueCollection(issues);
			this.detailedIssueView = new DetailedIssueView();

			this.collection.each( function( item ) {
				new IssueRowView( item, that.$el.find('tbody'), that.detailedIssueView);
			});
		},
		render : function() {
			this.$el.html($(this.template).html());
		}
	});

	// issue row view
	var IssueRowView = Backbone.View.extend({
		tagName : "tr",
		className : "issue-row",
		template : $('#issueRowTemplate').html(),
		initialize : function( model, table, detailedView ) {
			this.model = model;
			this.table = table;
			this.detailedView = detailedView;

			this.render();
		},
		events : {
			"mouseover" : "highlightRow",
			"mouseout" : "restoreRowColor",
			"click" : "displayIssue"
		},
		render : function() {
			var temp = _.template(this.template);
			$(this.table).append( this.$el.append(temp( this.model.toJSON() )));
		},
		highlightRow : function(e) {
			this.$el.css({ "background-color" : "#F00" });
		},
		restoreRowColor : function(e) {
			this.$el.removeAttr("style");
		},
		displayIssue : function(e) {
			this.detailedView.render( this.model );
		}
	});

	// issue detailed view
	var DetailedIssueView = Backbone.View.extend({
		el : $('#detailedIssue'),
		template : $('#detailedIssueTemplate').html(),
		initialize : function() {
			console.log('ok... I made it...');	
		},
		render : function( model ) {
			console.log(this.template);
			var temp = _.template(this.template);
			
			this.$el.html(temp(model.toJSON()));
		}
	});

	// issue model
	var Issue = Backbone.Model.extend({
		defaults : {
			title : "Not Provided",
			time : "Not Provided",
			images : [],
			location : {
				coarsLocation : "Not Provided",
				fineLocation : "Not Provided",
				lat : "",
				long : ""
			}
		}
	});
	
	// issue collection
	var IssueCollection = Backbone.Collection.extend({
		model : Issue
	});

	//
	var mainView = new MaintainenatorView();

}(jQuery));
