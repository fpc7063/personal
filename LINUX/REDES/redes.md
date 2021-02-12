#Mascaras
/8 equivale a mascara 255.0.0.0.0
/24 equivale a mascara 255.255.255.0


# routing
`route add -net 192.168.4.0/24 gw 10.200.0.2`
adiciona rota para a REDE 192.168.4.0 com GATEWAY em 10.200.0.2
192.168.4.0 e 10.200.0.0 sao redes diferentes
isso torna NECESSARIO habilitar o IP FORWARDING de IPV4
entre interfaces de rede
`sysctl -w net.ipv4.ip_forward=1`
