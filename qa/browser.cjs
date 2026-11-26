const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const version = process.argv[2];
const dir = path.join(root, "screenshots", "website-v" + version);
const url = "http://127.0.0.1:" + (5176 + Number(version));
const { strict: assert } = require("node:assert");
(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  try {
    const results = [],
      errors = [];
    for (const [name, width, height] of [
      ["desktop", 1440, 900],
      ["mobile", 390, 844],
      ["tablet", 768, 1024],
      ["compact", 320, 720],
    ]) {
      const page = await browser.newPage({
        viewport: { width, height },
        deviceScaleFactor: 1,
      });
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (v) => {
        if (v.type() === "error") errors.push(v.text());
      });
      await page.goto(url, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      const m = await page.evaluate(() => {
        const nodes = {
          nav: ".masthead",
          hero: ".hero",
          headline: "h1",
          search: ".property-search",
          field: ".filter-field",
          button: ".property-search .button",
          collection: ".collection-heading",
          card: ".property-card",
          photo: ".property-photo",
          dest: ".destination-grid",
          cta: ".advisory",
          footer: ".footer",
        };
        const bounds = {};
        for (const [key, sel] of Object.entries(nodes)) {
          const el = document.querySelector(sel),
            r = el.getBoundingClientRect(),
            s = getComputedStyle(el);
          bounds[key] = {
            x: r.x,
            y: r.y,
            width: r.width,
            height: r.height,
            font: s.fontSize,
            weight: s.fontWeight,
            line: s.lineHeight,
            radius: s.borderRadius,
            padding: s.padding,
            color: s.color,
            background: s.backgroundColor,
          };
        }
        return {
          width: innerWidth,
          height: innerHeight,
          documentWidth: document.documentElement.scrollWidth,
          documentHeight: document.documentElement.scrollHeight,
          bodyBackground: getComputedStyle(document.documentElement)
            .backgroundColor,
          bounds,
          columns: getComputedStyle(document.querySelector(".cards-grid"))
            .gridTemplateColumns,
          images: [...document.images].every(
            (img) => img.complete && img.naturalWidth > 0,
          ),
        };
      });
      assert(m.images);
      assert.equal(m.width, m.documentWidth);
      if (name !== "compact") {
        await page.screenshot({
          path: path.join(dir, name + ".png"),
          fullPage: true,
        });
        await page.screenshot({ path: path.join(dir, name + "-viewport.png") });
      }
      await page
        .getByLabel("Destination", { exact: true })
        .selectOption("Lisbon");
      await page
        .getByRole("button", { name: "Search residences", exact: true })
        .click();
      assert.equal(await page.locator(".property-card").count(), 1);
      await page.getByRole("button", { name: "View Alfama Residence" }).click();
      await page.getByRole("dialog").waitFor();
      await page.keyboard.press("Escape");
      await page.getByLabel("Property type").selectOption("Chalet");
      await page
        .getByRole("button", { name: "Search residences", exact: true })
        .click();
      assert.equal(await page.locator(".property-card").count(), 0);
      await page.getByRole("button", { name: "Clear filters" }).click();
      assert.equal(await page.locator(".property-card").count(), 3);
      await page.getByLabel("Price range").selectOption("over");
      await page
        .getByRole("button", { name: "Search residences", exact: true })
        .click();
      assert.equal(await page.locator(".property-card").count(), 1);
      assert.match(
        await page.locator(".property-card").innerText(),
        /Chalet Saanen/,
      );
      await page
        .getByRole("button", { name: "Browse residences in Costa Blanca" })
        .click();
      assert.match(
        await page.locator(".property-card").innerText(),
        /Casa de los Pinos/,
      );
      if (width <= 700) {
        await page.getByRole("button", { name: "Menu", exact: true }).click();
        await page
          .getByRole("navigation", { name: "Mobile" })
          .getByText("Destinations")
          .click();
        assert.match(page.url(), /#destinations$/);
      }
      await page.getByRole("button", { name: "Start a conversation" }).click();
      await page.getByRole("textbox").fill("A three-bedroom sample home.");
      const download = page.waitForEvent("download");
      await page.getByRole("button", { name: "Download brief" }).click();
      assert.equal((await download).suggestedFilename(), "maison-enquiry.txt");
      await page.keyboard.press("Escape");
      results.push({
        name,
        ...m,
        filters: "pass",
        details: "pass",
        emptyAndReset: "pass",
        destinationLink: "pass",
        briefDownload: "pass",
      });
      await page.close();
    }
    assert.deepEqual(errors, []);
    fs.writeFileSync(
      path.join(root, "report", "browser-v" + version + ".json"),
      JSON.stringify(
        { browser: browser.version(), url, errors, results },
        null,
        2,
      ),
    );
    console.log(
      results.map((v) => [
        v.name,
        v.documentWidth,
        v.documentHeight,
        v.columns,
      ]),
    );
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
