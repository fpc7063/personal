</usr/share/easy-rsa>

# EasyRSA comman sheet

./easyrsa init-pki

./easyrsa build-ca nopass

./easyrsa build-server-full server  nopass

./easyrsa build-client-full client nopass
./easyrsa build-client-full ../../../client/client nopass
