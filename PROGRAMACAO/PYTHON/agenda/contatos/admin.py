from django.contrib import admin
from .models import Categoria, Contato

class ContatoAdmin(admin.ModelAdmin):
    list_display = ("nome", "sobrenome", "telefone", "email", "data_criacao", "categoria", "mostrar", "id")
    list_display_links = ("id", "nome", "sobrenome")
    list_filter = ("categoria", "data_criacao")
    list_editable = ("telefone", "mostrar")
    list_per_page = 10
    search_fields = ("nome", "sobrenome", "telefone", "email")

# Register your models here.
admin.site.register(Categoria)
admin.site.register(Contato, ContatoAdmin)