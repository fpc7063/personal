#!/bin/bash

GPG_KEY_PATH=/usr/share/keyrings/kubernetes-archive-keyring.gpg
REPO_FILE_PATH=/etc/apt/sources.list.d/kubernetes.list

if [[ `whoami` != "root" ]]; then
    echo "This script is suppose to be run by root, gracefully exiting..."
    echo "Current user: `whoami`"
    exit 4
fi

# Script requisites
apt update
apt install -y apt-transport-https ca-certificates curl

# IMPORT GPG KEY
ls $GPG_KEY_PATH &> /dev/null
GPG_KEY_EXISTS=$(echo "$?")
#echo "GPG: $GPG_KEY_EXISTS"
if [[ $GPG_KEY_EXISTS ]]; then
	echo "Gpg key exists on: $GPG_KEY_PATH"
	echo "Skipping GPG IMPORT step..."
else
	curl -fsSLo $GPG_KEY_PATH https://packages.cloud.google.com/apt/doc/apt-key.gpg
fi

# IMPORT REPOSITORY
ls $REPO_FILE_PATH &> /dev/null
REPO_FILE_EXISTS=$(echo "$?")
#echo "REPO: $REPO_FILE_EXISTS"
if [[ $REPO_FILE_EXISTS ]]; then
	echo "Repository file exists on: $REPO_FILE_PATH"
	echo "Skipping APT REPOSITORY IMPORT step..."
else
	echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee $REPO_FILE_PATH
	apt update
fi

apt install -y kubectl
exit 0

