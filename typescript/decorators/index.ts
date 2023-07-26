enum LoggingLevel{
    ERROR = "ERROR",
    INFO = "INFO",
    WARN = "WARN",
    DEBUG = "DEBUG",
    TRACE = "TRACE",
}

const appMaxLoggingLevel = LoggingLevel.DEBUG;

const Log = (level:LoggingLevel):MethodDecorator =>{
    console.log("applyin @log decorator")
    return (target:any , propertyKey:string,descriptor:PropertyDescriptor)=>{

    }
}

class DbService{

    @Log(appMaxLoggingLevel)
    saveData(data:object){

    }
}