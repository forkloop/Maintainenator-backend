# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'Tracking.submitter'
        db.add_column('trackings_tracking', 'submitter',
                      self.gf('django.db.models.fields.CharField')(default='', max_length=20, blank=True),
                      keep_default=False)

        # Adding field 'Tracking.sub_email'
        db.add_column('trackings_tracking', 'sub_email',
                      self.gf('django.db.models.fields.EmailField')(default='', max_length=75, blank=True),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'Tracking.submitter'
        db.delete_column('trackings_tracking', 'submitter')

        # Deleting field 'Tracking.sub_email'
        db.delete_column('trackings_tracking', 'sub_email')


    models = {
        'trackings.audio': {
            'Meta': {'object_name': 'Audio'},
            'audio': ('django.db.models.fields.files.FileField', [], {'max_length': '100'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'tracking': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['trackings.Tracking']"})
        },
        'trackings.photo': {
            'Meta': {'object_name': 'Photo'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'photo': ('django.db.models.fields.files.ImageField', [], {'max_length': '100'}),
            'tracking': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['trackings.Tracking']"})
        },
        'trackings.tracking': {
            'Meta': {'object_name': 'Tracking'},
            'building': ('django.db.models.fields.CharField', [], {'max_length': '20', 'blank': 'True'}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'fixed': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'floor': ('django.db.models.fields.CharField', [], {'max_length': '10', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'indoor': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'latitude': ('django.db.models.fields.DecimalField', [], {'null': 'True', 'max_digits': '13', 'decimal_places': '10', 'blank': 'True'}),
            'location': ('django.db.models.fields.CharField', [], {'max_length': '100', 'blank': 'True'}),
            'longitude': ('django.db.models.fields.DecimalField', [], {'null': 'True', 'max_digits': '13', 'decimal_places': '10', 'blank': 'True'}),
            'pub_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'room': ('django.db.models.fields.CharField', [], {'max_length': '10', 'blank': 'True'}),
            'severity': ('django.db.models.fields.IntegerField', [], {'default': '1'}),
            'sub_email': ('django.db.models.fields.EmailField', [], {'max_length': '75', 'blank': 'True'}),
            'submitter': ('django.db.models.fields.CharField', [], {'max_length': '20', 'blank': 'True'})
        }
    }

    complete_apps = ['trackings']