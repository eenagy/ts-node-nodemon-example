// WRONG error messages
// import * as tt from "telegraf/typings/telegram-types";

declare module "module-example" {
  // THIS WORKS
  // import * as tt from "telegraf/typings/telegram-types";
  export interface SimpleType {
    working: boolean;
    message: string;
  }
}
