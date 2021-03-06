from django.shortcuts import render

# Create your views here.
from django.views.generic.edit import FormView
from django.contrib.auth.forms import UserCreationForm

class RegisterFormView(FormView):
    form_class = UserCreationForm

    # Ссылка, на которую будет перенаправляться пользователь в случае успешной регистрации.
    # В данном случае указана ссылка на страницу входа для зарегистрированных пользователей.
    # success_url = '/login/'

    # Шаблон, который будет использоваться при отображении представления.
    template_name = '../registr/template/registr/registr.html'

    def form_valid(self, form):
        # Создаём пользователя, если данные в форму были введены корректно.
        form.save()

        # Вызываем метод базового класса
        return super(RegisterFormView, self).form_valid(form)

# # Опять же, спасибо django за готовую форму аутентификации.
# from django.contrib.auth.forms import AuthenticationForm
#
# # Функция для установки сессионного ключа.
# # По нему django будет определять, выполнил ли вход пользователь.
# from django.contrib.auth import login
#
# class LoginFormView(FormView):
#     form_class = AuthenticationForm
#
#     # Аналогично регистрации, только используем шаблон аутентификации.
#     template_name = "../templates/registr/template/registr/login.html"
#
#     # В случае успеха перенаправим на главную.
#     success_url = "/"
#
#     def form_valid(self, form):
#         # Получаем объект пользователя на основе введённых в форму данных.
#         self.user = form.get_user()
#
#         # Выполняем аутентификацию пользователя.
#         login(self.request, self.user)
#         return super(LoginFormView, self).form_valid(form)
#
# from django.http import HttpResponseRedirect
# from django.views.generic.base import View
# from django.contrib.auth import logout
#
# class LogoutView(View):
#     def get(self, request):
#         # Выполняем выход для пользователя, запросившего данное представление.
#         logout(request)
#
#         # После чего, перенаправляем пользователя на главную страницу.
#         return HttpResponseRedirect("/")
#
#
#
# from django.shortcuts import render_to_response
# from django.template import RequestContext
# from news.views import Post
#
#
# # можно переписать как в news/views.py
# def home(request):
#     vars = dict (
#             posts=Post.objects.all().order_by('-timestamp')[:10],
#                 )
#
#     return render_to_response('index.html', vars, context_instance=RequestContext(request))