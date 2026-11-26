const original = {
name: "Ada",
settings: { theme: "light", fontSize: 14 },
};

// Intent: an independent copy we can edit without touching the original.
const copy = { ...original };
copy.settings.theme = "light";

if (original.settings.theme !== "light") {
throw new Error(
  "Original was mutated! theme is now: " + original.settings.theme
);
}
console.log("Original preserved:", original.settings.theme);