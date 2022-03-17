#!/bin/python3


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


import re
import sys
import subprocess
from typing import Tuple


def check_dependencies():
    p = subprocess.run("virt-resize --help", shell=True, stdout=subprocess.DEVNULL)
    sys.exit(2) if (p.returncode == 127) else None

def resize_qcow2():
    pass

def extract_name_and_path(file) -> Tuple[str, str]:
    file_match = re.search("[^/]*.qcow2", file)
    path_match = re.sub("[^/]*.qcow2", "", file)
    return (path_match, file_match.group())

def print_usage():
    print("Usage: ./resize.sh /path/to/file +SIZE_TO_ADD /dev/to/grow")

def main_function() -> int:
    check_dependencies()
    args = sys.argv.copy()
    if args[1] == "--help":
        print_usage()
        return 0

    try:
        space_to_add = args.pop()
        file = args.pop()
    except Exception as e:
        if(e)
        return 1

    print(file, space_to_add)
    return 0


if __name__ == "__main__":
    exit_code: int = main_function()
    sys.exit(exit_code or 0)