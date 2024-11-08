import { parseArgs } from "jsr:@std/cli/parse-args";

const resorts = {
  Whistler: {
    elevation: 2214,
    snow: "Powder",
    expectedSnowfall: "20",
  },
  Aspen: {
    elevation: 7945,
    snow: "Packed Powder",
    expectedSnowfall: "15",
  },
  Vail: {
    elevation: 8120,
    snow: "Powder",
    expectedSnowfall: "25",
  },
};

const args = parseArgs(Deno.args, {
  alias: {
    resort: "r",
    help: "h",
  },
  default: {
    resort: "Whistler",
  },
});

const resortName = args.resort as keyof typeof resorts;
const resort = resorts[resortName];

if (!resort) {
  console.error(
    `Resort ${resortName} not found. Valid resorts Whistler, Aspen or Vail.`
  );
  Deno.exit(1);
}

if (args.help) {
  console.log(`
    usage: deno-cli-ex1 --resort <resort name>
    -h, --help    Shows Help
    -r, --resort  Name of the ski resort (default: Whistler)
    `);
  Deno.exit(0);
}

console.log(
  `
    %c
    Resort: ${resortName}
    Elevation: ${resort.elevation} feet
    Snow Conditions: ${resort.snow}
    Expected Snowfall: ${resort.expectedSnowfall}
    `,
  "color: blue"
);
