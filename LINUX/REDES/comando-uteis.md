#Linux tcp connections file
cat /proc/net/tcp | grep " 01 " | wc -l

#Linux better "netstat"
ss -tulw | grep LISTEN

#Calculos de ips,netmask, etc
ipcalc 192.168.0.10
Retornando quais as configuracoes de rede que devem ser utilizadas



#
# NETCAT
#
#https://tiparaleigo.wordpress.com/2019/08/26/8-comando-netcat-nc-com-exemplos/

#PROXY WITH NETCAT
#http://www.noah.org/wiki/TCP_proxy_with_netcat

#Listen for connections
sudo nc -kl $PORT
-k DONT RESET PROCESS AFTER ONE REQUEST, KEEPS LISTENING
-l LISTEN



#Get files of connections
lsof -i -n
-i select IPv[46] files
-n no HOSTAMES
