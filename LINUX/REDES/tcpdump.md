# tcpdump REFERENCE

-l -> Listen
-i -> Interface
-w -> Escrever para um arquivo inves da stdout
-r -> Ler pacotes de um arquivo previamente escrito
-s -> 
-c $NUM -> Sair apost campturar $NUM pacotes
-X -> Mostra conteudo em HEX e tambem ASC2
-XX -> Mostra cabecalho ethernet tambem no formato acima
-D -> Mostra lista de interfaces de rede do sistema \
  que podem ser lidas
-n -> nao realizar resolucao de nomes
-v -> Saida verbosa: Algumas informações adicionais são \
exibidas, tais como os valores dos campos TTL, \
Identificação, Comprimento Total e Opções do pacote IP
-vv -> Mais verbosa: pacotes SMB sao decodificados
port $NUM -> Ouve apenas porta $NUM
portrange $A-$B -> Le portas no range $A-$B
src $IP|$NAME -> Le apenas pacotes originados de \
  $IP ou $NAME
dst $IP|$NAME -> Le apenas pacotes destinados para
  $IP ou $NAME
greater $BYTES -> mostra pacotes < $BYTES
less $BYTES -> mostra pacotes > $BYTES

# Exemplos:
`sudo tcpdump -i eth0` -> Ouve interface eth0
`sudo tcpdump -i eth0 icmp` -> Ouve trafego associado \
ao protocolo ICMP
`sudo tcpdump -w captura.cap` -> Escreve os pacotes \
interceptados para captura.cap
`sudo tcpdump -n -i eth0` -> Mostra pacotes capturados \
mostrando IPs inves de nomes
`sudo tcpdump -i eth0 greater 100` -> Mostra pacotes \
maiores que 100 bytes
