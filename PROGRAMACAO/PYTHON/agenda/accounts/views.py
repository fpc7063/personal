from django.http.response import Http404
from django.shortcuts import render
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'accounts/login.html')

def login(request):
    return render(request, 'accounts/login.html')

def logout(request):
    return render(request, 'accounts/logout.html')

def register(request):
    #messages.success(request, 'Olá Mundo')
    if request.method == 'GET':
        return render(request, 'accounts/register.html')
    if request.method == 'POST':
        nome = request.POST.get('nome')
        sobrenome = request.POST.get('sobrenome')
        email = request.POST.get('email')
        usuario = request.POST.get('usuario')
        senha = request.POST.get('senha')
        senha2 = request.POST.get('senha2')

        if not nome or not sobrenome or not email or not usuario or not senha or not senha2:
            messages.error(request, "Nenhum campo pode estar vazio")

        print(request.POST)
        return render(request, 'accounts/register.html')
    else:
        raise Http404

def dashboard(request):
    return render(request, 'accounts/dashboard.html')