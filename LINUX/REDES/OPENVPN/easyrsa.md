</usr/share/easy-rsa>

`cp -R /usr/share/easy-rsa /etc/openvpn/`

# EasyRSA comman sheet

./easyrsa init-pki

./easyrsa build-ca nopass

./easyrsa build-server-full server  nopass

./easyrsa build-client-full client nopass
./easyrsa build-client-full ../../../client/client nopass
