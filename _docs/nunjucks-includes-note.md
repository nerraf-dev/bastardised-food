# Eleventy Nunjucks Includes: Passing Data to Components (Hero Example)

## Problem
Nunjucks `{% include "file.njk" with { ... } %}` syntax does not work in Eleventy 3.x.

## Solution: Use Variables

1. **Set variables before including the component:**
   ```njk
   {% set heroTitle = "Welcome to Bastardised Food" %}
   {% set heroSubtitle = "Bollocks to conventions!" %}
   {% include "hero.njk" %}
   ```

2. **In your component (e.g., `_includes/hero.njk`):**
   ```njk
   <section class="hero">
     <h1>{{ heroTitle }}</h1>
     <p>{{ heroSubtitle }}</p>
   </section>
   ```

## Why?
- The `with { ... }` object syntax is not supported in Nunjucks 3.x (used by Eleventy 3.x).
- Setting variables before the include is the most compatible and future-proof way to pass data to includes/components.

## Best Practices
- Use this pattern for all reusable components (hero, cards, etc.).
- Document variable names and expected data in your component files for clarity.

---

**Reference:** [Eleventy Docs: Nunjucks Includes](https://www.11ty.dev/docs/languages/nunjucks/#nunjucks-includes)
