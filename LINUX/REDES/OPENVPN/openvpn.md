# OpenVpn Settup
</usr/share/doc/openvpn/examples/sample-config-files>

* Ip Forward
`echo 1 > /proc/sys/net/ipv4/ip_forward ` -> Habilita no momento

`vim /etc/sysctl.conf` -> Habilita permanentemente 
```
[...]
net.ipv4.ip_forward=1
[...]
```

- Ler valor atual
`sysctl -p`



* Settup daemon
vim /lib/systemd/system/openvpn.service 
systemctl enable openvpn
systemctl $OPERATION openvpn@configFileName

* Move easy-rsa to /etc/openvpn/
```
cp -R /usr/share/easy-rsa /etc/openvpn
cd /etc/openvpn/easy-rsa/
```

* Rename vars.example to vars AND change vars as YOU FEEL LIKE
`mv vars.example vars`

* Generate Public Key Infraestructure (PKI)
`./easyrsa init-pki`

* Build Certification Authority (CA)
`./easyrsa build-ca nopass`



* Move base openvpn server config file to /etc/openvpn
```
cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz /etc/openvpn/
gzip -d /etc/openvpn/server.conf.gz
```




* Generate Keys
`openvpn --genkey --secret name.key`
