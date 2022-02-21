#Create public key from private key
ssh-keygen -y -f key.pem > key.pub

#Create new SSH KEY
ssh-keygen -t ecdsa -b 521

#Add PRIVATE KEY to ssh-agent

#Send PUBLIC key to server
ssh-copy-id demo@198.51.100.0

#Run script on server
ssh usuario@server "bash -s" < ./ex.bash "hi" "bye"





#/etc/ssh
PasswordAuthentication no -> Only SSH keys

#PASSWORD FOR ONE USER
 Match User <username>
	PasswordAuthentications yes
