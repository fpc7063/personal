#!/bin/bash
# First argument: internal/external
# Second argument: Name of the client


# Initial variable extraction
FILE_STORAGE="$HOME/root-ca/client-configuration"
CLIENT=$2
if [[ "$1" == "--internal" ]]; then
        echo "INTERNO!!"
        BASE_FILE="$FILE_STORAGE/internal-client.conf"
        FILE_STORAGE="$FILE_STORAGE/files/internal"
elif [[ "$1" == "--external" ]]; then
        echo "EXTERNO!!"
        BASE_FILE="$FILE_STORAGE/external-client.conf"
        FILE_STORAGE="$FILE_STORAGE/files/external"
else
        echo -e "[ERROR]Invalid option.\nCorrect usage:\n--internal\n--external"
        exit 1
fi
BASE_FILE_CONT=`cat $BASE_FILE`



# Simple logging for audict and easy debugging
echo "[DEBUG]: Client Name: $CLIENT"
if [[ -e $BASE_FILE ]]; then
        echo "[DEBUG]: Found Base File: $BASE_FILE"
else
        echo "[DEBUG]: Did not find File: $BASE_FILE"
        exit 2
fi


# Create on PKI
./easyrsa build-client-full "$CLIENT" nopass
KEY=$(echo -e "\n<key>\n`cat ./pki/private/$CLIENT.key`\n</key>")
CRT=$(echo -e "\n<cert>\n`cat ./pki/issued/$CLIENT.crt`\n</cert>")
CA=$(echo -e "\n<ca>\n`cat ./pki/ca.crt`\n</ca>")

# Move File
NW_CT="$BASE_FILE_CONT\n\n\n"
NW_CT=`echo -e "$NW_CT$CA$CRT$KEY"`

echo "$NW_CT" | tee "$FILE_STORAGE/$CLIENT.ovpn"

exit 0