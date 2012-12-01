# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Audio'
        db.create_table('trackings_audio', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('tracking', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['trackings.Tracking'])),
            ('audio', self.gf('django.db.models.fields.files.FileField')(max_length=100)),
        ))
        db.send_create_signal('trackings', ['Audio'])


    def backwards(self, orm):
        # Deleting model 'Audio'
        db.delete_table('trackings_audio')


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
            'severity': ('django.db.models.fields.IntegerField', [], {'default': '1'})
        }
    }

    complete_apps = ['trackings']