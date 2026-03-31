import { describe, test, expect } from '@jest/globals';
import { cleanCSS } from './clean-css.js';

describe('cleanCSS', () => {
  test('should return empty string for empty input', () => {
    expect(cleanCSS("")).toBe("");
    expect(cleanCSS(null)).toBe("");
    expect(cleanCSS(undefined)).toBe("");
  });

  test('should return empty string for non-string input', () => {
    expect(cleanCSS(42)).toBe("");
    expect(cleanCSS({})).toBe("");
  });

  test('should return empty string for input with no CSS blocks', () => {
    expect(cleanCSS("just some plain text")).toBe("");
    expect(cleanCSS("no blocks here either")).toBe("");
  });

  test('should preserve a simple single-line rule', () => {
    const result = cleanCSS(".card { color: red; }");
    expect(result).toContain("color: red");
  });

  test('should strip block comments', () => {
    const input = ".card { /* a comment */ color: red; }";
    const result = cleanCSS(input);
    expect(result).not.toContain("comment");
    expect(result).toContain("color: red");
  });

  test('should strip multiline block comments', () => {
    const input = ".card {\n  /* line 1\n     line 2 */\n  color: red;\n}";
    const result = cleanCSS(input);
    expect(result).not.toContain("line 1");
    expect(result).toContain("color: red");
  });

  test('should remove empty declarations (prop:;)', () => {
    const input = ".card { color: ; background: blue; }";
    const result = cleanCSS(input);
    expect(result).not.toMatch(/color\s*:/);
    expect(result).toContain("background: blue");
  });

  test('should remove undefined values outside quotes', () => {
    const input = '.card { color: undefined; content: "undefined"; }';
    const result = cleanCSS(input);
    expect(result).not.toContain("color: undefined");
    expect(result).not.toContain("color:undefined");
    expect(result).toContain('"undefined"'); // quoted value must be preserved
  });

  test('should remove empty blocks', () => {
    const input = ".empty { } .full { color: red; }";
    const result = cleanCSS(input);
    expect(result).not.toContain("empty");
    expect(result).toContain("color: red");
  });

  test('should handle @media rules', () => {
    const input = "@media (max-width: 600px) { .card { color: red; } }";
    const result = cleanCSS(input);
    expect(result).toContain("@media");
    expect(result).toContain("color: red");
  });

  test('should handle @keyframes rules', () => {
    const input = "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }";
    const result = cleanCSS(input);
    expect(result).toContain("@keyframes");
    expect(result).toContain("rotate");
  });

  test('should filter free text outside CSS blocks', () => {
    const input = `
      This is some random text
      .card {
        color: red;
      }
      More random text here
    `;
    const result = cleanCSS(input);
    expect(result).not.toContain("random text");
    expect(result).toContain("color: red");
  });

  test('should keep content at nesting level 0 that looks like a selector', () => {
    const input = ".parent .child {\n  color: red;\n}";
    const result = cleanCSS(input);
    expect(result).toContain("color: red");
  });

  test('should normalize whitespace', () => {
    const input = ".card  {  color:   red;   }";
    const result = cleanCSS(input);
    // Multiple whitespace collapsed
    expect(result).toContain("color: red");
    expect(result).not.toMatch(/\s{2,}/);
  });

  test('should remove trailing commas before closing brace', () => {
    // RE_TRAILING_COMMA handles comma immediately before }
    const input = ".card { color: red, }";
    const result = cleanCSS(input);
    expect(result).not.toMatch(/,\s*\}/);
    expect(result).toContain("color: red");
  });

  test('should return identical result on repeated calls (LRU cache)', () => {
    const input = ".test { color: blue; background: green; }";
    const result1 = cleanCSS(input);
    const result2 = cleanCSS(input);
    expect(result1).toBe(result2);
    expect(typeof result1).toBe("string");
  });

  test('should return empty string when CSS reduces to only comments', () => {
    const input = "/* just a comment */";
    const result = cleanCSS(input);
    expect(result).toBe("");
  });

  test('should return empty string when all blocks are empty', () => {
    const input = ".a {} .b {} .c {}";
    const result = cleanCSS(input);
    expect(result).toBe("");
  });

  test('should handle CSS custom properties (variables)', () => {
    const input = ".card { --my-color: red; color: var(--my-color); }";
    const result = cleanCSS(input);
    expect(result).toContain("--my-color: red");
    expect(result).toContain("var(--my-color)");
  });

  test('should handle nested @media with multiple rules', () => {
    const input = `
      .card { color: red; }
      @media (max-width: 600px) {
        .card { color: blue; }
      }
    `;
    const result = cleanCSS(input);
    expect(result).toContain("color: red");
    expect(result).toContain("@media");
    expect(result).toContain("color: blue");
  });

  test('should handle CSS-variable-only declarations', () => {
    const input = ":host { --bubble-icon-size: 24px; }";
    const result = cleanCSS(input);
    expect(result).toContain("--bubble-icon-size: 24px");
  });

  test('short-circuit: returns empty string immediately for no-block input', () => {
    // After comment stripping, no "{" → must short-circuit
    expect(cleanCSS("/* comment only */")).toBe("");
    expect(cleanCSS("plain text")).toBe("");
    expect(cleanCSS("key: value;")).toBe(""); // not wrapped in a block
  });
});
