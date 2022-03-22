#!/bin/bash

apt-get install -y libavcodec-dev libavutil-dev libswscale-dev \
    libxtst-dev libxdamage-dev libxfixes-dev libxrandr-dev \
    libpam-dev libgnutls28-dev libfltk1.3-dev fluid gettext \
    appstream libjpeg-dev


cmake -DENABLE_H264=on -DCMAKE_BUILD_TYPE=Debug -S . -B build