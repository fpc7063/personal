#Reference
https://www.tecmint.com/linux-iptables-firewall-rules-examples-commands/
https://www.cyberciti.biz/faq/iptables-block-port/
https://blog.remontti.com.br/3086




#SAVE
sudo /sbin/iptables-save

#LIST
iptables -L

#ALLOW
iptables -A INPUT  -p tcp --dport 53 -j ACCEPT
iptables -A INPUT  -p tcp --dport 22 -j ACCEPT

#ALOW SPECIFIC IP
iptables -D INPUT -s xxx.xxx.xxx.xxx -j DROP

#ALLOW SPECIFIC RANGE OF IPS
iptables -A OUTPUT -p tcp -d 192.168.100.0/24 --dport 22 -j ACCEPT

#BLOCK
/sbin/iptables -A INPUT -p tcp --destination-port 80 -j DROP
/sbin/iptables -A INPUT -p tcp --destination-port 443 -j DROP
iptables -A INPUT -p tcp -m multiport --sports 80,443 -j DROP

#BLOCK PING
iptables -A INPUT -p icmp -i eth0 -j DROP

#BLOCK BY MAC ADRESS
iptables -A INPUT -m mac --mac-source 00:00:00:00:00:00 -j DROP

#BLOCK DNS
host facebook.com
$ facebook.com has address 66.220.156.68
whois 66.220.156.68 | grep CIDR
$ CIDR: 66.220.144.0/20
iptables -A OUTPUT -p tcp -d 66.220.144.0/20 -j DROP

#MAX NUMBER OF CONNECTIONS/IP
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 3 -j REJECT
#MAX NUUMBER OF CONNECTIONS/PORT
iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute --limit-burst 200 -j ACCEPT


#LOGGING
iptables -A INPUT -i eth0 -j LOG --log-prefix "IPtables dropped packets:"


#LOOPBACK
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT


#PORT FORWARDING
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 25 -j REDIRECT --to-port 2525


#SAVE
iptables-save > ~/iptables.rules

#RESTORE
iptables-restore < ~/iptables.rules

#DELETE A RULE


#RESET
iptables -F
