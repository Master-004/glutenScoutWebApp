# GlutenScout — Three-Screen Mock-up

## Project summary

This prototype explores a mobile-first concept for helping gluten-free diners answer one question quickly: can we eat here without the gamble? The product focuses on certainty, trust, and action instead of a general restaurant browse experience.

Live prototype: https://gluten-scout-web-app.vercel.app/

## 1) Need, persona, primary capability, and fundamental value

| Element | Description |
| --- | --- |
| Need | When choosing a restaurant with a gluten-free partner, people often discover too late whether the kitchen can serve a full, safe meal. The problem is not just finding a menu label; it is that the allergen information is difficult to interpret on a phone, and without a clear verdict it becomes hard to trust. |
| Persona | A person who eats out with a gluten-free partner multiple times a week. They check restaurant information on their phone before or during a decision and want certainty before committing. |
| Primary capability | Find a nearby restaurant that is verified safe for a full gluten-free meal. |
| Fundamental value | Certainty — the ability to say yes to eating out without anxiety, backup snacks, or risk. |

## 2) The three screens

| Screen | Single job | Why it earned a slot | Design question it helps examine |
| --- | --- | --- | --- |
| 1. Landing / Search | Signal the core value and capability immediately. | This is the first thing the user sees, so it has to answer: “Can this make my decision easier right now?” | Does the landing screen communicate certainty before the user reads anything? |
| 2. Restaurant Detail / Verified Breakdown | Turn a confusing restaurant allergen table into a scannable, phone-friendly verdict. | This screen addresses the real pain point: allergen information is hard to read on mobile when it is presented as a dense table with too much competing information. | Does the verification data read as one clear decision instead of a hard-to-scan table? |
| 3. Safe Picks / What to Order | Turn the verification data into a concrete action. | This is the payoff moment: the user leaves with a recommendation, not a wall of information. | Does the app help the user decide what to order without more research? |

## 3) Design question plan

### Questions and predictions

1. Does the landing screen signal the primary capability and fundamental value at first glance, before reading?
   - Prediction: The user should immediately understand that the app helps them identify safe places to eat without uncertainty.

2. Does the design reduce the problem of a confusing mobile allergen table into one clear verdict?
   - Prediction: The user should understand what is safe, how it was verified, and what the risk level is without reading a dense table.

3. Does the app help the user move from “information” to “action” in a single step?
   - Prediction: The “safe picks” screen should convert a verified restaurant into a confident order recommendation.

4. Can the user always return to the landing / search flow?
   - Prediction: Navigation should feel obvious and consistent across all screens so the user never feels lost or trapped in a detail view.

## 4) Design justification and first read

### First read of the live prototype

- Does the landing screen signal the primary capability and fundamental value at first glance, before reading?
  - Yes. The revised landing page is value-first and gives the app a clear purpose before the user reads detail.

- Does every element on the landing screen earn its place, or does anything compete with the primary job?
  - The revised version reduces competing actions and keeps the primary job visible: safe restaurant discovery and certainty.

- What information and actions belong together on each screen, and which Gestalt grouping principle communicates that?
  - Screen 1 uses proximity and similarity to group the value proposition, the trust mark, and the next action together.
  - Screen 2 groups verification-related information into one verdict cluster so users can scan the key points instead of reading a dense table.
  - Screen 3 groups recommendations around each dish so the user sees a clear “order this” pattern instead of raw data.

- Do screens 2 and 3 stay on mission, and can you return to the landing screen from everywhere?
  - Yes. Screen 2 remains focused on verification and readability; Screen 3 stays focused on confident ordering. The app also keeps a clear path back to the landing/search flow.

- What did the AI initially get wrong, skip, or oversimplify, and what did you change?
  - The initial prototype had a few problems that were easy to miss in a first pass: it felt like a generic restaurant search app, the navigation was unclear, and there was no dominant landing value statement. The app did not clearly signal the primary capability before the user had to read through several cards.
  - The biggest improvement was not in the concept itself; it was in hierarchy and flow. I added a dedicated landing screen, reduced visual clutter, and simplified the navigation so the app establishes the core value before showing results.
  - I also corrected the product story around the actual pain point: the problem is not that people are “squinting at a PDF,” but that the allergen information is presented in a confusing table that does not read well on phones.

- Which design question or grouping/signaling decision motivated each important change?
  - The strongest design question was: “Does the landing screen signal the primary capability and fundamental value at first glance?”
  - That drove the landing-page redesign, clearer hierarchy, and the decision to reduce competing actions and noise.
  - A second key decision was to reframe Screen 2 around readability and grouping, not raw data density, so the verification information reads as one clear verdict on mobile.

## Before-and-after comparison

### Before
- The original version felt more like a generic restaurant list app than a value-first decision tool.
- The landing screen did not clearly signal the primary capability, and there was too much clutter competing for attention.
- The navigation was weak, which made the app feel less focused and less trustworthy.

### After
- The revised version introduces a clear landing screen with a value-first message and a dominant verified-safe signal.
- The app reduces clutter and gives the most important function — finding a safe restaurant — clearer priority.
- The detail screen is reorganized around readability and scannability so phone users can understand the verdict instead of decoding a dense table.

This is the kind of issue the course vocabulary helps name: the first version lacked hierarchy, signal strength, and a clear primary task. The revised version improves those problems by making the value proposition, navigation, and grouping more intentional.

## Screenshots

### Original screens
- [original_landing.png](images/original_landing.png)
- [original_restaurant_detail.png](images/original_restaurant_detail.png)
- [original_safe_picks.png](images/original_safe_picks.png)

### Revised landing screen
- [revised_landing.png](images/revised_landing.png)

## Run locally

```bash
python -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

## Design direction

- Pine, parchment, amber, rust, and moss palette
- Serif headline + sans body pairing
- Left-aligned composition for mobile clarity
- Consistent verified badge treatment across screens
- Simple, value-first navigation
