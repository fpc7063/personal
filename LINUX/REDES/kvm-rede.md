`virsh net-list --all`

```
cat <<EOF > nat223.xml
<network>
  <name>nat223</name>
  <forward mode='nat' dev='br0'/>
  <bridge name='virbr223' stp='on' delay='2'/>
  <ip address='192.168.223.1' netmask='255.255.255.0'>
    <dhcp>
      <range start='192.168.223.141' end='192.168.223.254'/>
      <host name='myclone3' ip='192.168.223.143'/>
    </dhcp>
  </ip>
</network>
EOF
```

# create libvirt NAT network (net-create is for transient)
`virsh net-define nat223.xml`
`virsh net-start nat223`
`virsh net-autostart nat223`

# NAT state should be active, autostart, and persistent
`virsh net-list --all`

# rules are created in iptables to support this new network.
https://libvirt.org/firewall.html#fw-virtual-network-driver
