#!/bin/bash

##################################################################
#
# Author: Francisco Pena <fpc7063@gmail.com>
#
# Description: Backup all libvirtd domains images
#
# REFERENCE: https://libvirt.org/kbase/live_full_disk_backup.html
#
##################################################################

BACKUP_DIR=/mnt/btrfs/libvirt/backups
IMAGES_DIR=/var/lib/libvirt/images

ALL_DOMAINS=$(virsh list --all | tail -n +2 | awk '{printf $2"\n"}' | tail -n +2)
ALL_DISKS=""


for DOMAIN in $ALL_DOMAINS; do
	echo "LIBVIRTD DOMAIN: $DOMAIN"
	
	DOMAIN_DISKS=$(virsh domblklist $DOMAIN | tail -n +3 | awk '{printf $1"\n"}')
	for DISK in $DOMAIN_DISKS; do
		if [[ "$DISK" == "-" ]]; then
			echo "NO DISK, ONLY CONNECTION"
		else
			echo "$DISK"	
			ALL_DISKS=$(echo -e "$ALL_DISKS\n$DOMAIN&$DISK")
		fi
	done
done


clear
ALL_DISKS=$(echo "$ALL_DISKS" | tail -n +2)
for DISK in $ALL_DISKS; do
	CURRENT_DISK=$(echo "$DISK" | cut -f2 -d "&")
	CURRENT_DOMAIN=$(echo -n "$DISK" | cut -f1 -d "&")
	echo "$CURRENT_DOMAIN $CURRENT_DISK"

    # Actually the backup
    virsh snapshot-create-as \
	--domain $CURRENT_DOMAIN overlay_$CURRENT_DOMAIN \
	--diskspec vda,file=$IMAGES_DIR/overlay_$CURRENT_DOMAIN.qcow2 \
	--disk-only

    [[ $? != 0 ]] && exit 1
    cp $IMAGES_DIR/$CURRENT_DOMAIN.qcow2 $BACKUP_DIR/$CURRENT_DOMAIN-$(date +"%Y%m%d-%H:%M").qcow2
    [[ $? != 0 ]] && exit 2
    virsh blockcommit $CURRENT_DOMAIN vda --active --verbose --pivot
    [[ $? != 0 ]] && exit 3
    virsh snapshot-delete --metadata $CURRENT_DOMAIN overlay_$CURRENT_DOMAIN
    [[ $? != 0 ]] && exit 4
    rm $IMAGES_DIR/overlay_$CURRENT_DOMAIN.qcow2
    [[ $? != 0 ]] && exit 5
    exit 0
done




