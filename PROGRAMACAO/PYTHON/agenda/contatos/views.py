from django.http.response import Http404
from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator
from django.db.models import Q, Value
from django.db.models.functions import Concat
from django.contrib import messages
from .models import Contato

# Create your views here.
def contatos(request):
    contatos = Contato.objects.all().exclude(mostrar=False).order_by("nome")
    # Para ordernar decrescente "-nome"

    # Breaks result in pages
    paginator = Paginator(contatos, 3)

    # GET QUERY ELEMENT
    page_number = request.GET.get('p')

    # Get page for current query element 'p'
    contatos = paginator.get_page(page_number)
    return render(request, 'contatos/index.html', {'contatos': contatos})

def contato(request, contato_id):
    contato = get_object_or_404(Contato, id=contato_id)
    if not contato.mostrar:
        raise Http404
    return render(request, 'contatos/_contato.html', { 'contato': contato })

def busca(request):
    termo = request.GET.get('q')
    if(len(termo) == 0):
        messages.add_message(request, messages.WARNING, "Não se pode procurar por vazio")
        return redirect("contatos")
    campos = Concat("nome", Value(" "),"sobrenome")

    contatos = Contato.objects.annotate(
        nome_completo=campos
    ).filter(Q(nome_completo__icontains=termo) | Q(telefone__icontains=termo), mostrar=True)
    """
    contatos = Contato.objects.filter(
        Q(nome__icontains=termo) | Q(sobrenome__icontains=termo),
        mostrar=True
    ).order_by("nome")
    """
    paginator = Paginator(contatos, 3)
    page_number = request.GET.get('p')
    
    contatos = paginator.get_page(page_number)
    return render(request, "contatos/busca.html", {'contatos': contatos})