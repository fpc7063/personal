% Fatos
gerou(kelly, maria).
gerou(cleber, maria).
gerou(cleber, bruna).
gerou(maria, julia).
gerou(maria, pedro).
gerou(pedro, lucas).


feminino(kelly).
feminino(maria).
feminino(bruna).
feminino(julia).

masculino(cleber).
masculino(pedro).
masculino(lucas).



% Regras
mae(X, Y) :-
    gerou(X, Y),
    feminino(X).
pai(X, Y) :-
    gerou(X, Y),
    masculino(X).
irmao(X, Y) :-
    gerou(Z, X),
    gerou(Z, Y),
    masculino(X).
irma(X, Y) :-
    gerou(Z, X),
    gerou(Z, Y),
    feminino(X).
filho(X, Y) :-
    gerou(Y, X),
    masculino(X).
filha(X, Y) :-
    gerou(Y, X),
    feminino(X).
avo_masc(X, Y) :-
    gerou(X, Z),
    gerou(Z, Y),
    masculino(X).
avo_fem(X, Y) :-
    gerou(X, Z),
    gerou(Z, Y),
    masculino(X).
neto(X, Y) :-
    gerou(Y, Z),
    gerou(Z, X),
    masculino(X).
neto(X, Y) :-
    gerou(Y, Z),
    gerou(Z, X),
    feminino(X).


% Perguntas
% Irmaos: gerou(Z, X), gerou(Z, Y).
% Avos: gerou(X, Y), gerou(Y, pedro).
% Netos: gerou(cleber, X), gerou(X, Y).
