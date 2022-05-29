/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * application logger
 *
 * @args log-level define the logging level (0-5) default is 5
 */

import { isNode, isBrowser } from "./environment";

declare let global: any;
declare let process: any;

interface LoggerOptions {
  withTimestamp?: boolean;
  customConsoleFunctionality?: string[];
}

interface SupportedMethods {
  error?: boolean;
  warn?: boolean;
  info?: boolean;
  log?: boolean;
  debug?: boolean;
  group?: boolean;
  groupEnd?: boolean;
  time?: boolean;
  timeEnd?: boolean;
}

// For one reason or the other this is a known bug, enums always seem shadowed for eslint
/* eslint-disable-next-line no-shadow */
declare enum LogLevel {
  LEVEL_NONE = 0,
  LEVEL_ERROR = 1,
  LEVEL_WARN = 2,
  LEVEL_INFO = 3,
  LEVEL_LOG = 4,
  LEVEL_DEBUG = 5
}

/**
 * Logger service class
 */
export class LoggerService {
  private supported: boolean;

  private withTimestamp: boolean;

  private silent: boolean;

  private logLevel: LogLevel;

  private currentConsoleFunctionality: string[];

  private supportedMethods: SupportedMethods;

  private prefix?: string;

  memory: any;

  /**
   * @param logLevel
   */
  constructor(logLevel: LogLevel, silent = false, isChild = false, options: LoggerOptions = {}) {
    const scope = typeof global === "undefined" ? window : global;
    this.supported = typeof scope.console === "object";
    this.supportedMethods = {};
    this.silent = silent;
    this.currentConsoleFunctionality =
      options.customConsoleFunctionality || Object.keys(console || {});
    this.withTimestamp = options.withTimestamp || (isNode() && !isBrowser());
    this.logLevel = logLevel;
    if (!isChild) {
      console.info(`Logger initialized. Loglevel: ${logLevel}`);
    }
  }

  get logLevelProxy(): LogLevel {
    return this.logLevel;
  }

  set setPrefix(prefix: string) {
    if (this.prefix) return;
    this.prefix = prefix;
  }

  get methodsAvailable(): string[] {
    return this.currentConsoleFunctionality;
  }

  assert(condition?: boolean, ...data: any[]): void {
    if (this.currentConsoleFunctionality.includes("assert") && this.logLevel >= 2) {
      this.use("assert", [condition, ...data], true);
    }
  }

  clear(): void {
    if (this.currentConsoleFunctionality.includes("clear") && this.logLevel >= 2) {
      console.clear();
    }
  }

  count(label?: string): void {
    if (this.currentConsoleFunctionality.includes("count") && this.logLevel >= 4) {
      this.use("count", [label], true);
    }
  }

  countReset(label?: string): void {
    if (this.currentConsoleFunctionality.includes("countReset") && this.logLevel >= 4) {
      this.use("countReset", [label], true);
    }
  }

  debug(...data: any[]): void {
    if (this.currentConsoleFunctionality.includes("debug") && this.logLevel >= 5) {
      this.use("debug", data);
    }
  }

  dir(item?: unknown, options?: unknown): void {
    if (this.currentConsoleFunctionality.includes("dir") && this.logLevel >= 4) {
      this.use("dir", [item, options], true);
    }
  }

  dirxml(...data: any[]): void {
    if (this.currentConsoleFunctionality.includes("dirxml") && this.logLevel >= 4) {
      this.use("dirxml", data, true);
    }
  }

  error(...data: any[]): void {
    if (this.currentConsoleFunctionality.includes("error") && this.logLevel >= 1) {
      this.use("error", data);
    }
  }

  group(...data: any[]): void {
    if (this.currentConsoleFunctionality.includes("group") && this.logLevel >= 4) {
      this.use("group", data, true);
    }
  }

  groupCollapsed(...data: any[]): void {
    if (this.currentConsoleFunctionality.includes("groupCollapsed") && this.logLevel >= 4) {
      this.use("groupCollapsed", data, true);
    }
  }

  groupEnd(): void {
    if (this.currentConsoleFunctionality.includes("groupEnd") && this.logLevel >= 4) {
      this.use("groupEnd", [], true);
    }
  }

  info(...data: any[]): void {
    if (this.currentConsoleFunctionality.includes("info") && this.logLevel >= 3) {
      this.use("info", data);
    }
  }

  log(...data: any[]): void {
    if (this.currentConsoleFunctionality.includes("log") && this.logLevel >= 4) {
      this.use("log", data);
    }
  }

  table(tabularData?: unknown, properties?: string[]): void {
    if (this.currentConsoleFunctionality.includes("table") && this.logLevel >= 4) {
      console.table.call(tabularData, properties);
    }
  }

  time(label?: string): void {
    if (this.currentConsoleFunctionality.includes("time") && this.logLevel >= 4) {
      this.use("time", [label], true);
    }
  }

  timeEnd(label?: string): void {
    if (this.currentConsoleFunctionality.includes("timeEnd") && this.logLevel >= 4) {
      this.use("timeEnd", [label], true);
    }
  }

  timeLog(label?: string, ...data: unknown[]): void {
    if (this.currentConsoleFunctionality.includes("timeLog") && this.logLevel >= 4) {
      this.use("timeLog", [label, ...data], true);
    }
  }

  timeStamp(label?: string): void {
    if (this.currentConsoleFunctionality.includes("timeStamp") && this.logLevel >= 4) {
      this.use("timeStamp", [label], true);
    }
  }

  trace(...data: any[]): void {
    if (this.currentConsoleFunctionality.includes("trace") && this.logLevel >= 5) {
      this.use("trace", data);
    }
  }

  warn(...data: any[]): void {
    if (this.currentConsoleFunctionality.includes("warn") && this.logLevel >= 2) {
      this.use("warn", data);
    }
  }

  use(method: keyof typeof console, callArray: any[], noPrefix = false): void {
    if (this.silent) {
      return;
    }
    const outArray = Array.from(callArray).flat();

    if (this.prefix && !noPrefix) {
      outArray.unshift(this.prefix);
    }

    if (this.withTimestamp) {
      outArray.unshift(this.getTimestampString());
    }

    console[method].apply(null, outArray);
  }

  logRegisterRoute(
    path: string,
    method: string,
    proxy: string | null = null,
    name: string | null = null
  ): void {
    const logEntry = `
| Route ${name !== null ? `'${name}' registered` : "registered"}:
| ${String(method).toUpperCase()} -> ${path}
${proxy !== null ? `| Proxy to location: ${proxy}${path}\n—` : ""}—`;
    this.log(logEntry);
  }

  getPrefixedInstance(prefix: string, logLevel: LogLevel): LoggerService {
    const copy = new LoggerService(logLevel, false, true);
    copy.setPrefix = prefix;
    return copy;
  }

  logTracedRoute(trace: string, ...data: unknown[]): void {
    this.log(trace, ...data);
  }

  private getTimestampString() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth()).padStart(2, "0")}-${String(
      now.getDate()
    ).padStart(2, "0")} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} | `;
  }
}

// variables
export const logLevel: LogLevel =
  process.env.LOGGER_LEVEL !== undefined ? (process.env.LOGGER_LEVEL as unknown as LogLevel) : 5;

export const logger = new LoggerService(logLevel);

export const getPrefixedLogger: (prefix: string) => LoggerService = function (
  prefix: string
): LoggerService {
  return logger.getPrefixedInstance(prefix, logLevel);
};
