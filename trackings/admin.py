from trackings.models import Tracking, Photo
from django.contrib import admin

class PhotoInline(admin.TabularInline):
    model = Photo

class TrackingAdmin(admin.ModelAdmin):
    inlines = [PhotoInline]

class PhotoAdmin(admin.ModelAdmin):
    raw_id_fields = ('tracking',)
    related_lookup_fields = { 'fk': ['tracking'] }

    list_display = ('photo_url',)
    def photo_url(self, obj):
        return obj.photo.url

admin.site.register(Tracking, TrackingAdmin)
admin.site.register(Photo, PhotoAdmin)
