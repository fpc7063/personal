estrela(sol).
orbita(terra, sol).
orbita(jupiter, sol).
orbita(lua, terra).
orbita(ganimedes, jupiter).

planeta(B) :- orbita(B, E), estrela(E).
satelite(B) :- orbita(B, P), planeta(P).