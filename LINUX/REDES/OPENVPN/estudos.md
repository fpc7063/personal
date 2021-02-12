# Start UNENCRYPTED NETWORK
`openvpn --ifconfig 10.200.0.1 255.255.255.0 \ --dev tap`
Note: this will start a VPN without any encryption 
Almost like an VLAN? 
 
The same can be done with TCP:
`openvpn --ifconfig 10.200.0.1 10.200.0.2 \ --dev tun --proto tcp-server`
ote: connections over tcp are way slower and 
can cause TCP overhead






















