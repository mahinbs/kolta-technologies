import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "src", "content", "ourServices.js");

/** Unsplash CDN — https://unsplash.com/license (ixlib recommended for stable hotlinks) */
const u = (id, w = 1400) =>
  `"https://images.unsplash.com/photo-${id}?ixlib=rb-4.1.0&auto=format&fit=crop&w=${w}&q=80"`;

const map = {
  "../assets/images/services/app-dev1.jpeg": u("1512941937669-90a1b58e7e9c", 1600),
  "../assets/images/services/app-dev/banner.jpeg": u("1511707171634-5f897ff02aa9", 1920),
  "../assets/images/services/app-dev/1.jpeg": u("1512941937669-90a1b58e7e9c", 1200),
  "../assets/images/services/app-dev/2.jpeg": u("1526498460520-4c246636d76d", 1200),
  "../assets/images/services/app-dev/expertise1.jpeg": u("1595675024853-0f4cbe929bc9", 900),
  "../assets/images/services/app-dev/expertise2.jpeg": u("1556656743-8878517d4751", 900),
  "../assets/images/services/app-dev/expertise3.jpeg": u("1551650975-87deedd944c3", 900),
  "../assets/images/services/app-dev/expertise4.png": u("1573164713714-d95e436ab8d6", 900),
  "../assets/images/services/app-dev/expertise5.png": u("1587624644562-7b543b0e4f2e", 900),
  "../assets/images/services/app-dev/expertise6.jpeg": u("1460925895917-afdab827c52f", 900),
  "../assets/images/services/app-dev/process1.jpeg": u("1531403009284-440f852dccd7", 1000),
  "../assets/images/services/app-dev/process2.jpeg": u("1581291518857-4e27b48ff24e", 1000),
  "../assets/images/services/app-dev/process3.jpeg": u("1498050108023-c5249f4df085", 1000),

  "../assets/images/services/web-dev1.jpeg": u("1498050108023-c5249f4df085", 1600),
  "../assets/images/services/web-dev/banner.jpeg": u("1460925895917-afdab827c52f", 1920),
  "../assets/images/services/web-dev/1.jpeg": u("1504639725590-04d09742dc99", 1200),
  "../assets/images/services/web-dev/2.jpeg": u("1547658719-da2baa511082", 1200),
  "../assets/images/services/web-dev/expertise1.png": u("1517696284717-15275bf3e43c", 900),
  "../assets/images/services/web-dev/expertise2.jpeg": u("1587623871861-3e8b2cf55d7f", 900),
  "../assets/images/services/web-dev/expertise3.jpeg": u("1504384308090-c894fdcc538d", 900),
  "../assets/images/services/web-dev/expertise4.jpeg": u("1556742049-0cfed4f6a45d", 900),
  "../assets/images/services/web-dev/expertise5.jpeg": u("1432889491730-186f2e9d6d8f", 900),
  "../assets/images/services/web-dev/process1.jpeg": u("1522071820081-736f071d7ff7", 1000),
  "../assets/images/services/web-dev/process2.jpeg": u("1561070791-2526d30994b5", 1000),
  "../assets/images/services/web-dev/process3.jpeg": u("1498050108023-c5249f4df085", 1000),

  "../assets/images/services/custom-software1.jpeg": u("1558494949-ef010cbdcc31", 1600),
  "../assets/images/services/custom-software/banner.jpeg": u("1544197150-b99a580bb7a8", 1920),
  "../assets/images/services/custom-software/1.jpeg": u("1485827404703-89b55fcc665e", 1200),
  "../assets/images/services/custom-software/2.png": u("1451187580459-43490279c0fa", 1200),
  "../assets/images/services/custom-software/expertise1.png": u("1550751827-4bd374ca5507", 900),
  "../assets/images/services/custom-software/expertise2.jpeg": u("1518770660439-4636190a5126", 900),
  "../assets/images/services/custom-software/expertise3.jpeg": u("1565684220208-36b224f40726", 900),
  "../assets/images/services/custom-software/expertise4.jpeg": u("1558494949-ef010cbdcc31", 900),
  "../assets/images/services/custom-software/expertise5.jpeg": u("1551434678-e076c223a692", 900),
  "../assets/images/services/custom-software/expertise6.jpeg": u("1454166155748-4659b0362af6", 900),
  "../assets/images/services/custom-software/process1.jpeg": u("1551288049-bebda4e38f71", 1000),
  "../assets/images/services/custom-software/process2.jpeg": u("1558494949-ef010cbdcc31", 1000),
  "../assets/images/services/custom-software/process3.jpeg": u("1544197150-b99a580bb7a8", 1000),

  "../assets/images/services/data-science1.jpeg": u("1551288049-bebda4e38f71", 1600),
  "../assets/images/services/data-science/banner.jpeg": u("1551434678-e076c223a692", 1920),
  "../assets/images/services/data-science/1.png": u("1460925895917-afdab827c52f", 1200),
  "../assets/images/services/data-science/2.jpeg": u("1551288049-bebda4e38f71", 1200),
  "../assets/images/services/data-science/expertise1.jpeg": u("1552664730-69683e0349a4", 900),
  "../assets/images/services/data-science/expertise2.jpeg": u("1504384308090-c894fdcc538d", 900),
  "../assets/images/services/data-science/expertise3.jpeg": u("1543286386-4481490c2efb", 900),
  "../assets/images/services/data-science/expertise4.jpeg": u("1551288049-bebda4e38f71", 900),
  "../assets/images/services/data-science/expertise5.jpeg": u("1551836022-d5d88e1017e5", 900),
  "../assets/images/services/data-science/expertise6.jpeg": u("1639322536848-5a268d8b6b5a", 900),
  "../assets/images/services/data-science/process1.jpeg": u("1551434678-e076c223a692", 1000),
  "../assets/images/services/data-science/process2.jpeg": u("1551288049-bebda4e38f71", 1000),
  "../assets/images/services/data-science/process3.jpeg": u("1460925895917-afdab827c52f", 1000),

  "../assets/images/services/game-dev1.jpeg": u("1542751371-adc38448a05e", 1600),
  "../assets/images/services/game-dev/banner.jpeg": u("1511512578047-dfb367046420", 1920),
  "../assets/images/services/game-dev/1.jpeg": u("1538481199705-c710c4e965fc", 1200),
  "../assets/images/services/game-dev/2.jpeg": u("1493711662062-fa541adb3fc8", 1200),
  "../assets/images/services/game-dev/expertise1.jpeg": u("1511882150382-421056c89033", 900),
  "../assets/images/services/game-dev/expertise2.jpeg": u("1509197977929-164956edb800", 900),
  "../assets/images/services/game-dev/expertise3.jpeg": u("1511512578047-dfb367046420", 900),
  "../assets/images/services/game-dev/expertise4.jpeg": u("1538481199705-c710c4e965fc", 900),
  "../assets/images/services/game-dev/expertise5.jpeg": u("1622979615264-af2edfb84ce0", 900),
  "../assets/images/services/game-dev/expertise6.jpeg": u("1542751371-adc38448a05e", 900),
  "../assets/images/services/game-dev/process1.jpeg": u("1538481199705-c710c4e965fc", 1000),
  "../assets/images/services/game-dev/process2.jpeg": u("1511512578047-dfb367046420", 1000),
  "../assets/images/services/game-dev/process3.jpeg": u("1542751371-adc38448a05e", 1000),

  "../assets/images/services/uiux1.jpeg": u("1561070791-2526d30994b5", 1600),
  "../assets/images/services/uiux/banner.jpeg": u("1586717799252-bd134ad00e26", 1920),
  "../assets/images/services/uiux/1.jpeg": u("1581291518857-4e27b48ff24e", 1200),
  "../assets/images/services/uiux/2.jpeg": u("1563986768609-322da13575d3", 1200),
  "../assets/images/services/uiux/expertise1.jpeg": u("1586717799252-bd134ad00e26", 900),
  "../assets/images/services/uiux/expertise2.jpeg": u("1587441371026-9a1d8d19a42b", 900),
  "../assets/images/services/uiux/expertise3.jpeg": u("1561070791-2526d30994b5", 900),
  "../assets/images/services/uiux/expertise4.jpeg": u("1581291518857-4e27b48ff24e", 900),
  "../assets/images/services/uiux/expertise5.jpeg": u("1563986768609-322da13575d3", 900),
  "../assets/images/services/uiux/expertise6.jpeg": u("1559027615-cd4628902d4a", 900),
  "../assets/images/services/uiux/process1.jpeg": u("1586717799252-bd134ad00e26", 1000),
  "../assets/images/services/uiux/process2.jpeg": u("1561070791-2526d30994b5", 1000),
  "../assets/images/services/uiux/process3.jpeg": u("1581291518857-4e27b48ff24e", 1000),

  "../assets/images/services/ai1.png": u("1451187580459-43490279c0fa", 1600),
  "../assets/images/services/ai/banner.jpeg": u("1454166155748-4659b0362af6", 1920),
  "../assets/images/services/ai/1.png": u("1544197150-b99a580bb7a8", 1200),
  "../assets/images/services/ai/2.jpeg": u("1558494949-ef010cbdcc31", 1200),
  "../assets/images/services/ai/expertise1.jpeg": u("1451187580459-43490279c0fa", 900),
  "../assets/images/services/ai/expertise2.jpeg": u("1544197150-b99a580bb7a8", 900),
  "../assets/images/services/ai/expertise3.jpeg": u("1454166155748-4659b0362af6", 900),
  "../assets/images/services/ai/expertise4.jpeg": u("1551288049-bebda4e38f71", 900),
  "../assets/images/services/ai/expertise5.jpeg": u("1558494949-ef010cbdcc31", 900),
  "../assets/images/services/ai/expertise6.jpeg": u("1485827404703-89b55fcc665e", 900),
  "../assets/images/services/ai/process1.jpeg": u("1454166155748-4659b0362af6", 1000),
  "../assets/images/services/ai/process2.jpeg": u("1544197150-b99a580bb7a8", 1000),
  "../assets/images/services/ai/process3.jpeg": u("1558494949-ef010cbdcc31", 1000),
};

let text = fs.readFileSync(file, "utf8");
for (const [rel, urlExpr] of Object.entries(map)) {
  const needle = `require("${rel}")`;
  const n = text.split(needle).length - 1;
  if (n === 0) console.warn("Missing:", rel);
  text = text.split(needle).join(urlExpr);
}

text = text.replace(
  /^\/\/ Seven core offerings[^\n]*\n/,
  `// Seven core offerings — copy refreshed for koltatech.ai positioning
// Imagery: thematic photos via Unsplash (https://unsplash.com/license). Hotlinked; replace with your CDN in production if required.

`
);

fs.writeFileSync(file, text);
console.log("OK:", file);
