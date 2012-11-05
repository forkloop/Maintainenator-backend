# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Photo'
        db.create_table('trackings_photo', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('tracking', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['trackings.Tracking'])),
            ('photo', self.gf('django.db.models.fields.files.ImageField')(max_length=100)),
        ))
        db.send_create_signal('trackings', ['Photo'])

        # Deleting field 'Tracking.photo'
        db.delete_column('trackings_tracking', 'photo')

        # Adding field 'Tracking.building'
        db.add_column('trackings_tracking', 'building',
                      self.gf('django.db.models.fields.CharField')(default='', max_length=20, blank=True),
                      keep_default=False)

        # Adding field 'Tracking.floor'
        db.add_column('trackings_tracking', 'floor',
                      self.gf('django.db.models.fields.IntegerField')(null=True, blank=True),
                      keep_default=False)

        # Adding field 'Tracking.room'
        db.add_column('trackings_tracking', 'room',
                      self.gf('django.db.models.fields.CharField')(default='', max_length=10, blank=True),
                      keep_default=False)

        # Adding field 'Tracking.indoor'
        db.add_column('trackings_tracking', 'indoor',
                      self.gf('django.db.models.fields.BooleanField')(default=True),
                      keep_default=False)


        # Changing field 'Tracking.description'
        db.alter_column('trackings_tracking', 'description', self.gf('django.db.models.fields.CharField')(max_length=100))

    def backwards(self, orm):
        # Deleting model 'Photo'
        db.delete_table('trackings_photo')

        # Adding field 'Tracking.photo'
        db.add_column('trackings_tracking', 'photo',
                      self.gf('django.db.models.fields.files.ImageField')(max_length=100, null=True, blank=True),
                      keep_default=False)

        # Deleting field 'Tracking.building'
        db.delete_column('trackings_tracking', 'building')

        # Deleting field 'Tracking.floor'
        db.delete_column('trackings_tracking', 'floor')

        # Deleting field 'Tracking.room'
        db.delete_column('trackings_tracking', 'room')

        # Deleting field 'Tracking.indoor'
        db.delete_column('trackings_tracking', 'indoor')


        # Changing field 'Tracking.description'
        db.alter_column('trackings_tracking', 'description', self.gf('django.db.models.fields.CharField')(max_length=50))

    models = {
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
            'floor': ('django.db.models.fields.IntegerField', [], {'null': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'indoor': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'latitude': ('django.db.models.fields.DecimalField', [], {'null': 'True', 'max_digits': '13', 'decimal_places': '10', 'blank': 'True'}),
            'location': ('django.db.models.fields.CharField', [], {'max_length': '100', 'blank': 'True'}),
            'longitude': ('django.db.models.fields.DecimalField', [], {'null': 'True', 'max_digits': '13', 'decimal_places': '10', 'blank': 'True'}),
            'room': ('django.db.models.fields.CharField', [], {'max_length': '10', 'blank': 'True'}),
            'severity': ('django.db.models.fields.IntegerField', [], {'default': '1'}),
            'vote': ('django.db.models.fields.IntegerField', [], {'default': '1'})
        }
    }

    complete_apps = ['trackings']