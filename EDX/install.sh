#!/bin/bash

DEBIAN_FRONTEND=noninteractive
#JPEG_TURBO_NAME="libjpeg-turbo8"

cd /tmp

wget http://archive.ubuntu.com/ubuntu/pool/main/libj/libjpeg-turbo/libjpeg-turbo8_2.0.6-0ubuntu2_amd64.deb-o libjpeg-turbo8.deb
sudo apt install ./libjpeg-turbo8_2.0.6-0ubuntu2_amd64.deb

wget  http://archive.ubuntu.com/ubuntu/pool/main/libj/libjpeg8-empty/libjpeg8_8c-2ubuntu8_amd64.deb
sudo apt install ./libjpeg8_8c-2ubuntu8_amd64.deb

wget http://archive.ubuntu.com/ubuntu/pool/main/libj/libjpeg-turbo/libjpeg-turbo8-dev_2.0.6-0ubuntu2_amd64.deb
sudo apt install ./libjpeg-turbo8-dev_2.0.6-0ubuntu2_amd64.deb

wget http://archive.ubuntu.com/ubuntu/pool/main/l/language-pack-en/language-pack-en_21.04+20210415_all.deb
sudo apt install ./language-pack-en_21.04+20210415_all.deb

ln -s /usr/share/locale /usr/share/locales
wget http://archive.ubuntu.com/ubuntu/pool/main/l/language-pack-en-base/language-pack-en-base_21.04+20210415_all.deb
wget http://archive.ubuntu.com/ubuntu/pool/main/l/language-pack-en/language-pack-en_21.04+20210415_all.deb
sudo apt install ./language-pack-en*



sudo apt-get update && \
    sudo apt-get install --yes \
    build-essential \
    curl \
    g++ \
    gcc \
    git \
    git-core \
    language-pack-en \
    libfreetype6-dev \
    default-libmysqlclient-dev \
    libssl-dev \
    libxml2-dev \
    libxmlsec1-dev \
    libxslt1-dev \
    swig \
    gettext \
    gfortran \
    graphviz \
    libffi-dev \
    libfreetype6-dev \
    libgeos-dev \
    libgraphviz-dev \
    libjpeg8-dev \
    liblapack-dev \
    libpng-dev \
    libsqlite3-dev \
    libxml2-dev \
    libxmlsec1-dev \
    libxslt1-dev \
    lynx \
    ntp \
    pkg-config \
    python3-dev \
    python3-venv \
