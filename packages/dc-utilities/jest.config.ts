// Jest configuration for api
import type { Config } from "@jest/types";
import base from "../../jest.config.base";

export default async (): Promise<Config.InitialOptions> => ({
  ...base,
  projects: ["<rootDir>/packages/*/jest.config.js"],
  coverageDirectory: "<rootDir>/coverage/",
  setupFiles: ["jest-localstorage-mock"]
});
