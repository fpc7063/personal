# Installation

```
apt install -y python3 pip python3-argcomplete
echo "deb http://ppa.launchpad.net/ansible/ansible/ubuntu trusty main"| tee -a /etc/apt/sources.list.d/ansible.list
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 93C4A3FD7BB9C367
apt update
apt install -y ansible
```
