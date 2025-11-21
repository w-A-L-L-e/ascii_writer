const figlet = require("figlet");

async function write_ascii(ascii_font, text) {
  try {
    console.log(
      await figlet.text(text, {
        font: ascii_font,
        horizontalLayout: "default",
        verticalLayout: "default",
        // whitespaceBreak: true,
        // width: 80,
      }),
    );
  } catch (err) {
    console.log("Something went wrong...");
    console.dir(err);
  }
}

async function main() {
  if (process.argv.length != 4) {
    console.log("\n");
    await write_ascii("Nancyj-Underlined", "Ascii Writer");
    console.log("USAGE: node ascii_writer.js <FONT> <YOUR TEXT>");
    console.log(
      "   Example fonts: Kban, Georgi16, Graffiti, Terrace, DOS Rebel. ",
    );
    console.log("   (more fonts in ./node_modules/figlet/fonts/)\n");
    return;
  }

  await write_ascii(process.argv[2], process.argv[3]);
  console.log("\n");
}

main();
