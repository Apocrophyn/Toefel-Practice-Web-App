/**
 * Rewrite `@/...` imports in the validator's compiled output to relative paths.
 * tsc resolves the alias for type-checking but does not rewrite it in emitted
 * CommonJS, so plain `node` cannot load the result without this step.
 */
const fs = require("fs");
const path = require("path");
const OUT = process.env.VALIDATE_OUT || "/tmp/validate";

(function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) { walk(full); continue; }
    if (!full.endsWith(".js")) continue;
    const src = fs.readFileSync(full, "utf8");
    const out = src.replace(/require\("@\/([^"]+)"\)/g, (_, mod) => {
      let rel = path.relative(path.dirname(full), path.join(OUT, mod));
      if (!rel.startsWith(".")) rel = "./" + rel;
      return `require(${JSON.stringify(rel)})`;
    });
    if (out !== src) fs.writeFileSync(full, out);
  }
})(OUT);
