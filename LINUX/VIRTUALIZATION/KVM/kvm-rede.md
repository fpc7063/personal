`apt install qemu-kvm libvirt-daemon-system libvirt-clients gir1.2-spiceclientgtk-3.0 dnsmasq`

`virsh net-list --all`

```
cat <<EOF > nat255.xml
<network>
  <name>nat255</name>
  <forward mode='nat' dev='br0'/>
  <bridge name='virbr255' stp='on' delay='2'/>
  <ip address='192.168.225.1' netmask='255.255.255.0'>
    <dhcp>
      <range start='192.168.225.1' end='192.168.225.254'/>
      <host name='nat225' ip='192.168.225.1'/>
    </dhcp>
  </ip>
</network>
EOF
```

new
```nat255.xml
<network>
  <name>nat255</name>
  <uuid>a1ea7f4d-be6d-4448-82ae-3ba42a140483</uuid>
  <forward dev='enp39s0' mode='nat'>
    <nat>
      <port start='1024' end='65535'/>
    </nat>
    <interface dev='enp39s0'/>
  </forward>
  <bridge name='virbr1' stp='on' delay='0'/>
  <mac address='52:54:00:11:8d:b2'/>
  <domain name='internal'/>
  <ip address='192.168.255.1' netmask='255.255.255.0'>
    <dhcp>
      <range start='192.168.255.1' end='192.168.255.254'/>
    </dhcp>
  </ip>
</network>
```

# create libvirt NAT network (net-create is for transient)
`virsh net-define nat255.xml`
`virsh net-start nat255`
`virsh net-autostart nat255`

# NAT state should be active, autostart, and persistent
`virsh net-list --all`

# rules are created in iptables to support this new network.
https://libvirt.org/firewall.html#fw-virtual-network-driver
