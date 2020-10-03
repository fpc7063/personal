#systemd-analyze -> tempo de carregamento do sistema total
systemd-analyze blame -> tempo de inicio por processo


#hostnamectl -> informacoes do host


#systemctl -> gerenciador de servicos
systemctl status ssh.service -> mostra status do servico
systemctl is-enabled ssh -> responde se o servico inicia junto ao servidor
systemctl stop ssh.service -> para o servico
systemctl start ssh.service -> inicia o servico
systemctl restart ssh -> reinicia o servico
systemctl status ssh -> status do servico + logs
systemctl enable/disable ssh -> inicia/desativa a inicializacao do servico junto ao servidor

systemctl reboot -> reinicia a MAQUINA
