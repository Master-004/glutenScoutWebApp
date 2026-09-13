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

1. Need: “When you and your partner were trying to figure out if a restaurant would actually work, what happened when you looked for that information?”
   - Prediction: The person will describe checking a menu, calling ahead, or looking through confusing restaurant information, and they will say the uncertainty stayed with them until they were already at the table.

2. Value: “If you never had to wonder whether a restaurant would actually work for your partner, what feeling would that give you?”
   - Prediction: The user will describe relief, peace of mind, or confidence rather than simply convenience or speed.

3. Persona: “How often do you end up checking restaurants on your phone before deciding where to go?”
   - Prediction: The user will say this happens often, and they are mentally checking whether the restaurant can safely accommodate their partner before they commit.

4. Capability: “When you first see this landing screen, what do you think the app is for?”
   - Prediction: The user should say something like “finding safe gluten-free restaurants” or “a place that is verified safe,” without needing the app to explain itself.

## 4) Design justification and first read

Affordance statement: GlutenScout affords a quick, trusted decision about where to eat with a gluten-free partner by making verified safety visible before the user has to dig through restaurant details.

### First read of the live prototype

- Does the landing screen signal the primary capability and fundamental value at first glance, before reading?
  - Yes. The revised landing screen gives the core value — certainty — and the core capability — verified safe restaurants — immediate visual weight before the user reads supporting text.

- Does every element on the landing screen earn its place, or does anything compete with the primary job?
  - The revised landing screen improves hierarchy by reducing competing actions and keeping the primary signal dominant. The app does not ask the user to parse a generic browse layout before seeing the value proposition.

- What information and actions belong together on each screen, and which Gestalt grouping principle communicates that?
  - Screen 1 uses proximity and similarity to group the main promise, the verified-safe signal, and the primary action together.
  - Screen 2 uses grouping and common region to keep verification details together so the user reads one verdict instead of a scattered list of data points.
  - Screen 3 uses grouping and sequence to turn safe dishes into a clear recommendation path: “order this,” “why,” and “what to avoid” stay in the same action cluster.

- Do screens 2 and 3 stay on mission, and can you return to the landing screen from everywhere?
  - Yes. The detail screen stays focused on readabilty and verification rather than decoration, and the picks screen stays focused on a concrete decision. The app also keeps a consistent back-to-home pattern so the user can return to the landing/search flow from every step.

- What did the AI initially get wrong, skip, or oversimplify, and what did you change?
  - The first pass created a more generic restaurant search feel instead of a value-first decision tool. The landing screen did not establish the primary signal fast enough, the navigation was unclear, and the layout had too many competing elements.
  - I changed the hierarchy so the value proposition is first, reduced competing actions, and made the search flow feel like one product instead of a collection of loosely related screens.
  - I also corrected the actual pain point: the problem is not simply “looking at a PDF,” but that allergen information is too dense and confusing on phones, so it needs to be reorganized into a scannable verdict.

- Which design question or grouping/signaling decision motivated each important change?
  - The strongest design question was: “Does the landing screen signal the primary capability and fundamental value at first glance?”
  - This drove the landing page redesign, improved hierarchy, and the decision to remove competing actions.
  - A second key decision was to fix the weak grouping on the restaurant detail screen so the phone user can read verification data as one clear verdict rather than as a confusing table.

## Before-and-after comparison

### Before
- The original landing screen did not establish the core value quickly enough. The app felt like a generic restaurant list because the primary signal was weak and the hierarchy was unclear.
- The original navigation also gave the app a less focused, more cluttered feel.
- The detail screen was still too close to raw data presentation, which made a mobile user work harder than necessary to interpret the information.

### After
- The revised landing screen now signals certainty immediately, before the user reads supporting text.
- The navigation is simpler and the hierarchy is clearer, so the user sees the value proposition before browse details.
- The detail screen is reorganized around grouping and scannability so the user can understand safety information as one mobile-friendly verdict instead of a dense table.

This revision matters because the original design had weak signal strength and competing elements: the main job of the product was not dominant enough, so the interface failed to support the user’s real decision task. A better hierarchy and clearer grouping fix that problem.

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
