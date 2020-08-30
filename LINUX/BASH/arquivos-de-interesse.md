#USERS & GROUPS
/etc/passwd -> qual o shell que sera executado por padrao pelo usuario
USER:?:UUID:?:?:SHELL/PATH
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin

/etc/shadow -> senhas

/etc/groups


#DEVICES /DEV
/dev/urandom -> gerador aleatorio do linux
head /dev/urandom | strings -> absorve parte do gerador e converte em string

/dev/null -> "buraco negro" do linux



#LOGS
/etc/rsyslog.d/50-default.conf -> SYSTEM LOGS default configurations
#Facility: Servico que cria a mensagem
Ex: auth, authpriv, cron, daemon, kern, lpl, mail, mark, news, security, syslog, user, uucp
#Priority: Criticidade da mesagem
Ex: debug, info, notice, warning/warn, err/error, crit, alert, emerg/panic
Ex: myservice.err /var/log/scripts.log
myservice.* /output/to/file

logger -p myservice.err "Teste de mensagem de erro"



#SERVICE MANAGEMENT
/etc/systemd/system

/etc/init.d




/etc/profile -> root ".bashrc"

/etc/sudoers -> sudo .bashrc



/proc/cpuinfo -> cpu usage and info
/proc/meminfo -> ram memory and info
