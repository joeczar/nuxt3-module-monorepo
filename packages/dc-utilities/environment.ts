// eslint-disable
declare const importScripts: never;

export function isBrowser(): boolean {
  // Check if the environment is Node.js
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }

  // Check if the environment is a
  // Service worker
  if (typeof importScripts === "function") {
    return false;
  }

  // Check if the environment is a Browser
  if (typeof window === "object") {
    return true;
  }

  return false;
}

export function isNode(): boolean {
  // Check if the environment is Node.js
  if (typeof process === "object" && typeof require === "function") {
    return true;
  }

  // Check if the environment is a
  // Service worker
  if (typeof importScripts === "function") {
    return false;
  }

  // Check if the environment is a Browser
  if (typeof window === "object") {
    return false;
  }

  return false;
}

export function isServiceWorker(): boolean {
  // Check if the environment is Node.js
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }

  // Check if the environment is a
  // Service worker
  if (typeof importScripts === "function") {
    return true;
  }

  // Check if the environment is a Browser
  if (typeof window === "object") {
    return false;
  }

  return false;
}

export default function returnEnvironment(): string | undefined {
  const envIsNode = isNode();
  const envIsServiceWorker = isServiceWorker();
  const envIsBrowser = isBrowser();

  if (envIsNode) return "node";
  if (envIsServiceWorker) return "sw";
  if (envIsBrowser) return "browser";

  return undefined;
}
