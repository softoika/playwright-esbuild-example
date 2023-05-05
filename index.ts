import playwright from "playwright";
import yargs from "yargs";

declare const VERSION: string;

const command = yargs(process.argv.slice(2))
  .command("sub", "subcommand")
  .option("option", { describe: "option", alias: "o" })
  .help()
  .version(VERSION)
  .parseSync();
if (command._[0] === "sub") {
  (async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://github.com/neoclide/coc.nvim");
    await browser.close();
  })();
}
