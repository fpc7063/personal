from django.urls import path
from . import views

urlpatterns = [
    path('', views.contatos, name="contatos"),
    path('<int:contato_id>', views.contato, name='contato'),
    path('busca/', views.busca, name="busca_contatos"),
]
