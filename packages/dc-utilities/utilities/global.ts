/**
 * global handler
 */

// get glocal scope for ssr or browser
/* eslint-disable no-restricted-globals */

function getGlobalThis() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof globalThis !== "undefined") {
    // eslint-disable-next-line no-undef
    return globalThis;
  }
  throw new Error("unable to locate global object");
}

function getExports() {
  let mutIsBrowser = false;
  let mutUserAgent = "";
  let mutLocation = {};
  const { body } = window.document;
  mutUserAgent = window.navigator.userAgent;
  mutLocation = window.location;
  mutIsBrowser = true;

  const location = mutLocation;
  const userAgent = mutUserAgent;
  const isBrowser = mutIsBrowser;

  return { body, userAgent, location, isBrowser };
}

const { body, userAgent, isBrowser, location } = getExports();

export { isBrowser, userAgent, location };
export const scope = getGlobalThis();

export function addEventListener(name: string, handler: EventListenerOrEventListenerObject): void {
  if (isBrowser) {
    scope.addEventListener(name, handler);
  }
}

export function removeEventListener(
  name: string,
  handler: EventListenerOrEventListenerObject
): void {
  if (isBrowser) {
    scope.addEventListener(name, handler);
  }
}

/**
 * set body class
 * @param name
 * @param value
 */
export const bodyClass = {
  add(name: string) {
    if (isBrowser) {
      body.classList.add(name);
    }
    return this;
  },
  has(name: string) {
    if (isBrowser) {
      return body.classList.contains(name);
    }
    return null;
  },
  remove(name: string) {
    if (isBrowser) {
      return body.classList.remove(name);
    }
    return this;
  }
};

export function getBodyNode(): HTMLElement | null {
  return isBrowser ? scope.document.body : null;
}

// TODO: Is there something like react-helmet for Vue?
// https://github.com/nfl/react-helmet
export function includeScript(
  src: string,
  key: string,
  ready: (this: GlobalEventHandlers, ev?: Event) => any
): HTMLScriptElement | HTMLElement {
  if (isBrowser) {
    const id = `include_script_${key}`;
    const existsScript = document.getElementById(`${id}`);
    if (existsScript) {
      try {
        ready.apply(null);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Method not available: ", err);
      }
      return existsScript;
    }

    const parent = document.body;
    const script = document.createElement("script");

    script.async = true;
    script.src = src;
    if (key) {
      script.id = id;
    }
    script.onload = ready;
    parent.insertBefore(script, parent.childNodes[0]);

    return script;
  }

  return null;
}
