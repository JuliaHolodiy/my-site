from django.contrib import admin
from .models import Post


class PostAdmin(admin.ModelAdmin):
    models = Post
    list_display = ('title', 'timestamp')
    list_filter = ('timestamp',)


admin.site.register(Post, PostAdmin)