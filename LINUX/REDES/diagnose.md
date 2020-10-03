#Network
lspci -> dispositivos conectados ao servidor

ip addr/ip address/ip a-> interfaces de rede e IPS
LO -> loopback, aponta para a propria maquina
ifconfig -> configuracao de interfaces de rede
#Reiniciado interface
ifdown $NOMEDODISPOSITVODEREDE
ifup $NOMEDODISPOSITIVODEREDE

eth0 -> interfaces antigas
enp0s3 -> interfaces novas (deb09) NOME ESPECIFICO DO DRIVER DO VIRTIUALBOX

link/ether -> endereco fisico da placa de rede

inet -> IP do computador

brd -> broadcast, ip de acesso a internet



#CONFIGURACOES DE IPS
</etc/network/interfaces>
#iface enp0s3 inet dhcp
#Apontando para a placa de rede
auto enp0s3
#Instrucoes para o roteador?
iface enp0s3 inet static
#IP da maquina
address 192.168.0.241
#Padrao de destribuicao de IPS
netmask 255.255.255.0
#IP da rede (.0)
network 192.168.25.0
#Faixa de ips?
broadcast 192.168.25.255
#Roteador
gateway 192.168.25.1


</etc/resolv.conf>
domain $DOMINIO
search $DOMINIO?
#namerserver $ROTEADOR
nameserver 192.168.25.1
#namerserver do GOOGLE, atribui um ip publico pra sua maquina?????
namerserver 8.8.8.8

#TESTART PINGS DE SITES EXTERNOS E PINGAR A MAQUINA REAL
