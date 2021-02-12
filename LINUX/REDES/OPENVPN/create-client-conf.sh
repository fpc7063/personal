#!/bin/bash
./easyrsa build-client-full ../../../client/"$1" nopass

FILE=$1
BASE_FILE=`cat example.ovpn`


CA="<ca>"
CA="$CA\n"`cat /etc/openvpn/server/ca.crt`
CA="$CA\n</ca>"
#echo -e "$CA"

CERT="<cert>\n"`cat /etc/openvpn/client/$1.crt`"\n</cert>"
#echo -e "$CERT"

KEY="<key>\n"`cat /etc/openvpn/client/$1.key`"\n</key>"
#echo -e "$KEY"

echo -e "\n$BASE_FILE\n$CA\n$CERT\n$KEY" > ../client/$1.ovpn


mkdir /etc/openvpn/client/$1
mv /etc/openvpn/client/$1.* /etc/openvpn/client/$1
