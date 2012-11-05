from trackings.models import Tracking, Photo
from logs.models import Log
from django.contrib import admin

class PhotoInline(admin.StackedInline):
    extra = 0
    classes = ('grp-collapse grp-open',)
    inline_classes = ('grp-collapse grp-open',)
    model = Photo

class LogInline(admin.TabularInline):
    extra = 1
    model = Log

class TrackingAdmin(admin.ModelAdmin):
    change_list_template = "admin/change_list_filter_sidebar.html"
    fieldsets = (
            (None, {
                'classes': ('tracking',),
                'fields': ('description', 'severity', 'building', 'floor', 'room', 'location', 'fixed', 'indoor', 'latitude', 'longitude', 'pub_date')
                }),
    )
    inlines = [PhotoInline, LogInline]
    date_hierarchy = 'pub_date'
    list_display = ('description', 'building', 'location', 'fixed', 'pub_date')
    list_display_links = ('description',)
    #list_editable = ('fixed',)
    list_filter = ('indoor', 'building')
    list_per_page = 15
    search_fields = ['building', 'description']
    readonly_fields = ['latitude', 'longitude', 'pub_date']

class PhotoAdmin(admin.ModelAdmin):
    raw_id_fields = ('tracking',)
    related_lookup_fields = { 'fk': ['tracking'] }

    def photo_canvas(self, obj):
        return u'<img src="%s" />' % obj.photo.url
    photo_canvas.allow_tags = True
    list_display = ('photo_canvas',)
    list_display_link = ('photo_canvas',)

admin.site.register(Tracking, TrackingAdmin)
#admin.site.register(Photo, PhotoAdmin)
