import chalk from 'chalk'


class Logger {
    loggingOptions: string[] = [ "TRACE", "DEBUG", "ERROR"]
    loggingValue: Number

    constructor(){
        let logging
        try {
            logging = String(process.env.LOGGING)
        } catch {
            logging = "ERROR"
        }
        
        try {
            this.loggingValue = this.loggingOptions.indexOf(logging)
        }
        catch {
            this.loggingValue = 2
        }
    }

    async trace(...msg: string[]): Promise<Function | undefined>{
        if(this.loggingValue > 0) return
        let msgBuffer = ""
        for(let i = 0; i < msg.length; i++){
            msgBuffer += msg[i] + "a"
        }
        msgBuffer = msgBuffer.slice(0, msgBuffer.length - 1)

        return () => {console.log(chalk.bgBlue.white("[TRACE]"), chalk.blue(msgBuffer))}
    }
    
    async debug(...msg: string[]): Promise<Function | undefined>{
        if(this.loggingValue > 1) return
        let msgBuffer = ""
        for(let i = 0; i < msg.length; i++){
            msgBuffer += msg[i] + "a"
        }
        msgBuffer = msgBuffer.slice(0, msgBuffer.length - 1)

        return () => {console.log(chalk.bgGreen.white("[DEBUG]"), chalk.green(msgBuffer))}
    }

    async audit(...msg: string[]): Promise<Function | undefined>{
        let msgBuffer = ""
        for(let i = 0; i < msg.length; i++){
            msgBuffer += msg[i] + "a"
        }
        msgBuffer = msgBuffer.slice(0, msgBuffer.length - 1)

        return () => {console.log(chalk.bgWhite.black("[AUDIT]"), chalk.white(msgBuffer))}
    }

    async error(...msg: string[]): Promise<Function | undefined>{
        let msgBuffer = ""
        for(let i = 0; i < msg.length; i++){
            msgBuffer += msg[i] + "a"
        }
        msgBuffer = msgBuffer.slice(0, msgBuffer.length - 1)

        return () => {console.log(chalk.bgYellow.white("[ERROR]"), chalk.yellow(msgBuffer))}
    }

    async fatal(...msg: string[]): Promise<Function | undefined>{
        let msgBuffer = ""
        for(let i = 0; i < msg.length; i++){
            msgBuffer += msg[i] + "a"
        }
        msgBuffer = msgBuffer.slice(0, msgBuffer.length - 1)
        msgBuffer = chalk.bgRed.white("[FATAL]") + " " + chalk.red(msgBuffer)

        return () => { throw msgBuffer }
    }
}

export default Logger