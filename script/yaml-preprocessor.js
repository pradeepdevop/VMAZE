/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const glob = require("glob");
const YAML = require("yaml-js");
const extendify = require("extendify");

glob("src/controllers/**/spec.yaml", function (er, files) {
  const contents = files.map((f) => {
    console.log(`Processing ${f} file`);
    return YAML.load(fs.readFileSync(f).toString());
  });

  const extend = extendify({
    inPlace: false,
    isDeep: true,
  });
  const merged = contents.reduce(extend);
  console.log("Generating swagger.yaml, swagger.json for Hub API");
  fs.existsSync("src/docs") || fs.mkdirSync("src/docs");
  fs.writeFileSync("src/docs/openapi.yaml", YAML.dump(merged));
  fs.writeFileSync("src/docs/openapi.json", JSON.stringify(merged, null, 2));
});
