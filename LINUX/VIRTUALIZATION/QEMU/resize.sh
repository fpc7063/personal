#!/bin/bash

##################################################################
#
# Author: Francisco Pena <fpc7063@gmail.com>
#
# Description: Changes QEMU image size and resize the filesystem
#
#
#
# Error code 1 -> No qcow2 file on argument ($1)
# Error code 2 -> Missing libguestfs-tools package (debian bullseye)
# Error code 3 -> No specified size for resizing on  ($2)
# Error code 4 - > Any qemu-img error
#
##################################################################


# Resize QCOW2 file
FILE=$1
if [[ -e $FILE ]]; then
    SIZE_TO_ADD=$2
    if [[ -n $SIZE_TO_ADD ]]; then
        qemu-img resize $FILE +$SIZE_TO_ADD\G
    else
        echo "Size not specified"
        exit 3
    fi
else
    echo "File does not exist."
    exit 1
fi

if [[ $? == 0 ]]; then
    echo "qemu-img uknown error"
    exit 4
fi


# Extract file path from file name


# Resize filesystem
cp $FILE