#!/bin/bash

#Linux tcp connections file
cat /proc/net/tcp | grep " 01 " | wc -l

#Linux better "netstat"
ss -tulw | grep LISTEN
