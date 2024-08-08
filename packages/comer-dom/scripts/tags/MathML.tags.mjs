import { toCamelCase } from "ntils";

export const MathMLElementTagNameMap = ["MathML", {
  // "annotation:MAnnotation": "MathMLElement",
  // "annotation-xml": "MathMLElement",
  "maction": "MathMLElement",
  "math": "MathMLElement",
  "merror": "MathMLElement",
  "mfrac": "MathMLElement",
  "mi": "MathMLElement",
  "mmultiscripts": "MathMLElement",
  "mn": "MathMLElement",
  "mo": "MathMLElement",
  "mover": "MathMLElement",
  "mpadded": "MathMLElement",
  "mphantom": "MathMLElement",
  "mprescripts": "MathMLElement",
  "mroot": "MathMLElement",
  "mrow": "MathMLElement",
  "ms": "MathMLElement",
  "mspace": "MathMLElement",
  "msqrt": "MathMLElement",
  "mstyle": "MathMLElement",
  "msub": "MathMLElement",
  "msubsup": "MathMLElement",
  "msup": "MathMLElement",
  "mtable": "MathMLElement",
  "mtd": "MathMLElement",
  "mtext": "MathMLElement",
  "mtr": "MathMLElement",
  "munder": "MathMLElement",
  "munderover": "MathMLElement",
  "semantics": "MathMLElement",
}, (t, e) => "M" + toCamelCase(t.slice(1), 1)];
