import { LoggerService } from "../extendedLogger";

describe("LoggerService", () => {
  const logSpy = jest.spyOn(console, "log");
  const infoSpy = jest.spyOn(console, "info");
  const assertSpy = jest.spyOn(console, "assert");
  const clearSpy = jest.spyOn(console, "clear");
  const countSpy = jest.spyOn(console, "count");
  const countResetSpy = jest.spyOn(console, "countReset");
  const debugSpy = jest.spyOn(console, "debug");
  const dirSpy = jest.spyOn(console, "dir");
  const dirxmlSpy = jest.spyOn(console, "dirxml");
  const errorSpy = jest.spyOn(console, "error");
  const groupSpy = jest.spyOn(console, "group");
  const groupCollapsedSpy = jest.spyOn(console, "groupCollapsed");
  const groupEndSpy = jest.spyOn(console, "groupEnd");
  const tableSpy = jest.spyOn(console, "table");
  const timeSpy = jest.spyOn(console, "time");
  const timeEndSpy = jest.spyOn(console, "timeEnd");
  const timeLogSpy = jest.spyOn(console, "timeLog");
  // const timeStampSpy = jest.spyOn(console, "timeStamp");
  const traceSpy = jest.spyOn(console, "trace");
  const warnSpy = jest.spyOn(console, "warn");

  it("initializes a new LoggerService wit log level 0-5", () => {
    for (let i = 0; i <= 5; i++) {
      const logger = new LoggerService(i);
      logger.log("test", i);

      expect(logSpy).toHaveBeenCalledWith("test", i);
      expect(infoSpy).toHaveBeenCalledWith(
        `Logger initialized. Loglevel: ${i}`
      );
    }
  });
  it("logger.logLevelProxy returns the log level", () => {
    for (let i = 0; i <= 5; i++) {
      const logger = new LoggerService(i);
      const logLevel = logger.logLevelProxy;
      expect(logLevel).toEqual(i);
    }
  });
  it("logger.setPrefix sets the log prefix", () => {
    const prefix = ["zero", "one", "two", "three", "four", "five"];
    for (let i = 0; i <= 5; i++) {
      const logger = new LoggerService(i);
      logger.setPrefix = prefix[i];
      logger.log("test", i);

      expect(logSpy).toHaveBeenCalledWith(prefix[i], `test`, i);
    }
  });
  it("assert: asserts a condition against an array of data", () => {
    const errorMsg = "the # is not even";
    for (let number = 2; number <= 5; number += 1) {
      const logger = new LoggerService(number);
      const assertion = number % 2 === 0;

      logger.log(`the # is ${  number}`);
      logger.assert(assertion, { number, errorMsg });
      expect(assertSpy).toHaveBeenCalledWith(assertion, {
        number,
        errorMsg
      });
    }
  });
  it("clear, calls coinsole.clear", () => {
    const logger = new LoggerService(1);
    logger.clear();

    expect(clearSpy).toHaveBeenCalled();
  });
  it("count, outputs the number of times it has been called", () => {
    const label = "counted";
    const logger = new LoggerService(4);
    logger.count(label);

    for (let i = 0; i < 5; i++) {
      logger.count(label);
    }
    expect(countSpy).toHaveBeenCalledWith(label);
    expect(countSpy).toHaveBeenCalledWith(label);
    expect(countSpy).toHaveBeenCalledTimes(6);
  });
  it("countReset, resets the count of logger.count", () => {
    const label = "Reset Me!";
    const logger = new LoggerService(4);
    for (let i = 0; i < 5; i++) {
      logger.count(label);
    }

    logger.countReset(label);
    logger.count(label);

    expect(countResetSpy).toHaveBeenCalledTimes(1);
  });
  it("debug, calls console.debug", () => {
    const logger = new LoggerService(4);
    const message = { debug: "something worth looking at." };
    logger.debug(message);
    expect(debugSpy).toHaveBeenCalledWith(message);
  });
  it("dir, calls console.dir", () => {
    const logger = new LoggerService(4);
    const message = { dir: "something worth looking at." };
    logger.dir(message, {});
    expect(dirSpy).toHaveBeenCalledWith(message, {});
  });
  it("dirxml, calls console.dirxml", () => {
    const logger = new LoggerService(4);
    const message = { dirxml: "something worth looking at." };
    logger.dirxml(message);
    expect(dirxmlSpy).toHaveBeenCalledWith(message);
  });
  it("error, calls console.error", () => {
    const logger = new LoggerService(4);
    const message = { error: "something worth looking at." };
    logger.error(message);
    expect(errorSpy).toHaveBeenCalledWith(message);
  });
  it("group, calls console.group", () => {
    const logger = new LoggerService(4);
    const message = "this is a message";
    for (let i = 0; i < 3; i++) {
      logger.group();
      logger.log(message, `level ${i}`);
    }
    expect(groupSpy).toHaveBeenCalledTimes(3);
  });
  it("groupCollapsed, calls console.groupCollapsed", () => {
    const logger = new LoggerService(4);
    const message = { groupCollapsed: "something worth looking at." };
    logger.groupCollapsed();
    logger.log(message);
    expect(groupCollapsedSpy).toHaveBeenCalledTimes(1);
  });
  it("groupEnd, calls console.groupEnd", () => {
    const logger = new LoggerService(4);
    const message = { groupEnd: "something worth looking at." };
    logger.groupCollapsed();

    logger.log(message);
    logger.groupEnd();

    expect(groupEndSpy).toHaveBeenCalledTimes(1);
  });
  it("info, calls console.info", () => {
    const logger = new LoggerService(4);
    const message = { info: "something worth looking at." };
    logger.info(message);
    expect(infoSpy).toHaveBeenCalledWith(message);
  });
  it("table, calls console.table", () => {
    const logger = new LoggerService(4);
    const message = [1, 2, 3];
    logger.table(message);
    expect(tableSpy).toHaveBeenCalledTimes(1);
  });
  it("time, calls console.time", () => {
    const logger = new LoggerService(4);

    logger.time("TIME!");
    expect(timeSpy).toHaveBeenCalledTimes(1);
  });
  it("timeEnd, calls console.timeEnd", () => {
    const logger = new LoggerService(4);

    logger.timeEnd("TIME!");
    expect(timeEndSpy).toHaveBeenCalledTimes(1);
  });
  it("timeLog, calls console.timeLog", () => {
    const logger = new LoggerService(4);
    const message = [1, 2, 3];
    logger.timeLog("TIMELOG!", message);
    expect(timeLogSpy).toHaveBeenCalledTimes(1);
  });
  // it("timeStamp, calls console.timeStamp", () => {
  //   const logger = new LoggerService(4);
  //   logger.timeStamp("TIMEStamp!");
  //   expect(timeStampSpy).toHaveBeenCalledTimes(1);
  // });
  it("trace, calls console.trace", () => {
    const logger = new LoggerService(4);
    logger.trace("TRACE");
    expect(traceSpy).toHaveBeenCalledTimes(1);
  });
  it("warn, calls console.warn", () => {
    const logger = new LoggerService(4);
    logger.warn("warn");
    expect(warnSpy).toHaveBeenCalledTimes(1);
  });
  it("logRegisterRoute, calls console.logRegisterRoute", () => {
    const logger = new LoggerService(4);
    const path = "path";
    const method = "log";
    const proxy = "proxy";
    const name = "name";
    const logEntry = `—
| Route ${name !== null ? `'${name}' registered` : "registered"}:
| ${String(method).toUpperCase()} -> ${path}
${proxy !== null ? `| Proxy to location: ${proxy}${path}\n—` : ""}—`;

    logger.logRegisterRoute(path, method, proxy, name);
    expect(logSpy).toHaveBeenCalledWith(logEntry);
  });
  it("getPrefixedInstance, returns a new Logger instance with prefix", () => {
    const logger = new LoggerService(5);
    const prefix = "prefix";

    const prefixedLogger = logger.getPrefixedInstance(prefix, 5);
    prefixedLogger.log("test");
    expect(logSpy).toHaveBeenCalledWith(prefix, `test`);
  });
});
