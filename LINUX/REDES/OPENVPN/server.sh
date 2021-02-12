#!/bin/bash

#sysctl -w net.ipv4.ip_forward=1
echo "1" | sudo tee /proc/sys/net/ipv4/ip_forward

sudo openvpn \
  --ifconfig 10.200.0.1 10.200.0.2 \
  --dev tun \
  --secret secret.key \
  --port 1194 \
  --daemon \
  --log /var/log/openvpn.log \
  --route 192.168.0.0 255.255.255.0 \
  --verb 0

#route add -net 192.168.0.0/24 gw 10.200.0.2



#ifconfig - INTERFACE CONFIGURATION
# --ifconfing $VPN_IP $VPN_IP2 ?????????????

#dev - DEVICE NAME
#--dev $DEV_NAME

#secret ???????????

#port - SPECIFY PORT LISTEN FOR OPENVPN (1194 - default port)
#--port $PORT

#daemon - Start on background as DAEMON
#--daemon

#log - Specify log output file
#--log /path/to/log

#route - Specify routing for the openvpn net
# !!Notice that this REQUIRE IP FORWADING ON THE SYSTEM!!!
#--route $NETWORK $MASK

#verb - Set log verbosity 0-6 ???????????????
#--verb 0
