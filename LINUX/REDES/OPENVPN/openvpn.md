# OpenVpn Settup
</usr/share/doc/openvpn/examples/sample-config-files>

* Ip Forward
echo 1 > /proc/sys/net/ipv4/ip_forward
vim /etc/sysctl.conf


* Settup daemon
vim /lib/systemd/system/openvpn.service
systemctl enable openvpn
