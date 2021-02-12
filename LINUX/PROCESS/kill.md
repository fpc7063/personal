# Process Signals
`kill -l`
```
1 - SIGHUP
2 - SIGINT
3 - SIGQUIT
9 - SIGKILL - Terminates process and the process will not
perform any clean-up operations
15 - SIGTERM - Request process to terminate
(by default kill will send this)
20 - SIGSTP - Request process to stop
```
  
To send a signal to a process, use the kill,  
pkill or pgrep commands we mentioned earlier on.  
But programs can only respond to signals if they  
are programmed to recognize those signals.
  
  
# Setting Process PRIORITY
Ranges from [0-20]
`renice +$VALUE $PID`
