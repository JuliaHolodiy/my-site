from django.shortcuts import get_object_or_404, render_to_response
from django.template import RequestContext
from .models import Post


def news(request):
    ''' Show all news '''
    posts = Post.objects.all().order_by('-timestamp')
    return render_to_response('news/news.html', {'posts':posts})

def one_new(request, post_id):
    ''' Show single news'''
    post = get_object_or_404(Post, pk=post_id)


    vars = dict(
        title=post.title,
        body=post.body,
        author=post.author,
        timestamp=post.timestamp,
        )

    return render_to_response('news/one_new.html', vars, context_instance=RequestContext(request))

from django.shortcuts import render_to_response
from django.template import RequestContext
#from news.views import Post


# можно переписать как в news/views.py
def home(request):
    vars = dict (
            posts=Post.objects.all().order_by('-timestamp')[:10],
                )

    return render_to_response('index.html', vars, context_instance=RequestContext(request))