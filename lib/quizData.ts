import type { PlanetId, Question, PlanetInfo } from "./types";

// Rewritten to sound more natural and conversational, less AI-generated.
export const questions: Question[] = [
  {
    id: "q1",
    topic: "motivation",
    prompt: "What motivates you most days?",
    options: [
      { id: "a", text: "Curiosity — I love to learn new things.", weights: { mercury: 1, uranus: 0.5 } },
      { id: "b", text: "Connection — being around people energizes me.", weights: { venus: 1, earth: 0.5 } },
      { id: "c", text: "Making a difference — I want to have an impact.", weights: { mars: 1, jupiter: 0.5 } },
      { id: "d", text: "Wonder — I enjoy exploring new and unusual ideas.", weights: { neptune: 1 } },
    ],
  },
  {
    id: "q2",
    topic: "emotions",
    prompt: "How would you describe your emotions?",
    options: [
      { id: "a", text: "I bounce back quickly when things go wrong.", weights: { mercury: 1 } },
      { id: "b", text: "I’m warm and I get along easily with others.", weights: { venus: 1, earth: 0.5 } },
      { id: "c", text: "I’m passionate and care deeply.", weights: { mars: 1 } },
      { id: "d", text: "I feel things deeply and sometimes take time to process.", weights: { neptune: 1, saturn: 0.5 } },
    ],
  },
  {
    id: "q3",
    topic: "creativity",
    prompt: "What does creativity mean to you?",
    options: [
      { id: "a", text: "Mixing ideas in new and interesting ways.", weights: { mercury: 1, uranus: 0.5 } },
      { id: "b", text: "Making things that are beautiful or meaningful.", weights: { venus: 1, saturn: 0.5 } },
      { id: "c", text: "Building practical things that solve problems.", weights: { mars: 1, jupiter: 0.5 } },
      { id: "d", text: "Expressing my dreams and imagination.", weights: { neptune: 1 } },
    ],
  },
  {
    id: "q4",
    topic: "teamwork",
    prompt: "What role do you usually take on in a group?",
    options: [
      { id: "a", text: "The planner — I help organize and guide the group.", weights: { mercury: 0.8, saturn: 0.8 } },
      { id: "b", text: "The supporter — I keep everyone’s spirits up.", weights: { venus: 1, earth: 0.5 } },
      { id: "c", text: "The leader — I like driving things forward.", weights: { mars: 1, jupiter: 0.5 } },
      { id: "d", text: "The creative — I bring new ideas and like doing things differently.", weights: { uranus: 1 } },
    ],
  },
  {
    id: "q5",
    topic: "communication",
    prompt: "How would you describe your communication style?",
    options: [
      { id: "a", text: "Quick and to the point.", weights: { mercury: 1 } },
      { id: "b", text: "Friendly and thoughtful.", weights: { venus: 1, neptune: 0.5 } },
      { id: "c", text: "Direct and confident.", weights: { mars: 1, saturn: 0.5 } },
      { id: "d", text: "Creative — I like using humor or different approaches.", weights: { uranus: 1, jupiter: 0.3 } },
    ],
  },
  {
    id: "q6",
    topic: "habits",
    prompt: "What habits help you stay on track?",
    options: [
      { id: "a", text: "Making lists and keeping notes.", weights: { mercury: 1, saturn: 0.5 } },
      { id: "b", text: "Spending time with friends or family.", weights: { earth: 1, venus: 0.5 } },
      { id: "c", text: "Setting goals and tracking progress.", weights: { mars: 1, saturn: 0.5 } },
      { id: "d", text: "Taking breaks to daydream or relax.", weights: { neptune: 1, uranus: 0.3 } },
    ],
  },
  {
    id: "q7",
    topic: "challenge",
    prompt: "How do you handle challenges?",
    options: [
      { id: "a", text: "I quickly adapt and look for solutions.", weights: { mercury: 1, uranus: 0.5 } },
      { id: "b", text: "I try to support others and keep things steady.", weights: { earth: 1, venus: 0.5 } },
      { id: "c", text: "I face things head-on with determination.", weights: { mars: 1, saturn: 0.5 } },
      { id: "d", text: "I try to find the deeper meaning or lesson.", weights: { neptune: 1 } },
    ],
  },
  {
    id: "q8",
    topic: "values",
    prompt: "What's most important to you?",
    options: [
      { id: "a", text: "Learning and understanding the world.", weights: { jupiter: 1, mercury: 0.5 } },
      { id: "b", text: "Love and kindness.", weights: { venus: 1, earth: 0.3 } },
      { id: "c", text: "Discipline and leaving a legacy.", weights: { saturn: 1, mars: 0.3 } },
      { id: "d", text: "Freedom and the chance to change.", weights: { uranus: 1 } },
    ],
  },
  {
    id: "q9",
    topic: "lifestyle",
    prompt: "If you lived on a space station, what would your ideal lifestyle be?",
    options: [
      { id: "a", text: "A busy lab full of new ideas.", weights: { mercury: 1, uranus: 0.5 } },
      { id: "b", text: "A peaceful place with lots of plants and friends.", weights: { earth: 1, venus: 0.5 } },
      { id: "c", text: "A training area with lots of activities.", weights: { mars: 1, saturn: 0.5 } },
      { id: "d", text: "A quiet spot for thinking and dreaming.", weights: { neptune: 1, jupiter: 0.3 } },
    ],
  },
];

export const planets: Record<PlanetId, PlanetInfo> = {
  mercury: {
    id: "mercury",
    name: "Mercury",
    emoji: "🧠",
    tagline: "Quick-silver mind, cosmic courier.",
    description:
      "You zip through ideas at orbital velocity. Patterns reveal themselves to you like star maps — you're curious, clever, and always tuned to the next signal.",
    funFact: "A day on Mercury is longer than its year. Wild clock math.",
    imageUrl: "/planets/mercury.jpg",
    imageAlt: "Mercury planet image",
  },
  venus: {
    id: "venus",
    name: "Venus",
    emoji: "💫",
    tagline: "Beauty-maker, heart-warmer, vibe artist.",
    description:
      "You design harmony in a noisy universe. Your presence softens edges and turns static into symphony. People feel seen in your orbit.",
    funFact: "Venus spins backwards — it prefers its own rhythm.",
    imageUrl: "/planets/venus.jpg",
    imageAlt: "Venus planet image",
  },
  earth: {
    id: "earth",
    name: "Earth",
    emoji: "🌍",
    tagline: "Balance-bringer, life weaver.",
    description:
      "Grounded yet generous, you bring order to chaos and care to action. You keep ecosystems — and teams — flourishing.",
    funFact: "Earth is the only known planet with liquid water on the surface.",
    imageUrl: "/planets/earth.jpg",
    imageAlt: "Earth planet image",
  },
  mars: {
    id: "mars",
    name: "Mars",
    emoji: "🔥",
    tagline: "Fearless motion, forged in flame.",
    description:
      "You pulse with Mars energy — fearless, fiery, and unstoppable. Goals are fuel; momentum is your native tongue.",
    funFact: "Mars hosts the tallest volcano in the solar system: Olympus Mons.",
    imageUrl: "/planets/mars.jpg",
    imageAlt: "Mars planet image",
  },
  jupiter: {
    id: "jupiter",
    name: "Jupiter",
    emoji: "🌀",
    tagline: "Grand optimist, sage of storms.",
    description:
      "You think big and lift others bigger. Wisdom meets whimsy — you expand possibilities like a gas giant expanding horizons.",
    funFact: "Jupiter's magnetic field is the largest structure in the solar system.",
    imageUrl: "/planets/jupiter.jpg",
    imageAlt: "Jupiter planet image",
  },
  saturn: {
    id: "saturn",
    name: "Saturn",
    emoji: "⏳",
    tagline: "Architect of time, ring-bearer of focus.",
    description:
      "Disciplined, strategic, quietly powerful. You build legacies with patience and polish — constraints are your canvas.",
    funFact: "Saturn could float in water — it's less dense than a bath.",
    imageUrl: "/planets/saturn.jpg",
    imageAlt: "Saturn planet image",
  },
  uranus: {
    id: "uranus",
    name: "Uranus",
    emoji: "⚡",
    tagline: "Rebel sage with future sight.",
    description:
      "Visionary, inventive, delightfully off-axis. You tilt the status quo and spark the new — systems bend when you arrive.",
    funFact: "Uranus rotates on its side — like a cosmic barrel roll.",
    imageUrl: "/planets/uranus.jpg",
    imageAlt: "Uranus planet image",
  },
  neptune: {
    id: "neptune",
    name: "Neptune",
    emoji: "🌊",
    tagline: "Dream diver, mystic of the blue.",
    description:
      "Like Neptune, you dream in colors no telescope can see. Empathy and imagination are your superpowers.",
    funFact: "Neptune's winds can scream faster than sound.",
    imageUrl: "/planets/neptune.jpg",
    imageAlt: "Neptune planet image",
  },
};

// Planet id list reused in normalization and scoring
export const PLANET_IDS: PlanetId[] = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

// Compute how often each planet appears (and with what weight) across all options.
// We'll normalize final scores by this "opportunity" so rarely-appearing planets aren't disadvantaged.
const PLANET_OPPORTUNITY: Record<PlanetId, number> = (() => {
  const totals = Object.fromEntries(PLANET_IDS.map((id) => [id, 0])) as Record<PlanetId, number>;
  for (const q of questions) {
    for (const opt of q.options) {
      for (const [pid, w] of Object.entries(opt.weights)) {
        const k = pid as PlanetId;
        totals[k] = (totals[k] ?? 0) + (w ?? 0);
      }
    }
  }
  return totals;
})();

// Scale factors so that each planet's total opportunity is normalized around the average.
export const PLANET_NORMALIZATION: Record<PlanetId, number> = (() => {
  const vals = PLANET_IDS.map((id) => PLANET_OPPORTUNITY[id] || 0);
  const sum = vals.reduce((a, b) => a + b, 0);
  const avg = (sum / PLANET_IDS.length) || 1;
  const EPS = 1e-6;
  const out = Object.fromEntries(
    PLANET_IDS.map((id) => [id, avg / Math.max(PLANET_OPPORTUNITY[id], EPS)])
  ) as Record<PlanetId, number>;
  return out;
})();

// Public helper: apply normalization to raw scores
export function getAdjustedScores(scores: Partial<Record<PlanetId, number>>): Record<PlanetId, number> {
  const out: Record<PlanetId, number> = Object.fromEntries(PLANET_IDS.map((id) => [id, 0])) as Record<PlanetId, number>;
  for (const id of PLANET_IDS) {
    const raw = scores[id] ?? 0;
    out[id] = raw * (PLANET_NORMALIZATION[id] ?? 1);
  }
  return out;
}

// Public helper: return planets ranked by adjusted score, desc
export function rankPlanets(scores: Partial<Record<PlanetId, number>>): Array<{ id: PlanetId; score: number }> {
  const adjusted = getAdjustedScores(scores);
  return PLANET_IDS
    .map((id) => ({ id, score: adjusted[id] }))
    .sort((a, b) => b.score - a.score);
}

// Public helper: return normalization-adjusted planet scores
// (Duplicate removed) getAdjustedScores is defined above.

// Deterministic tie-breaking to avoid bias toward earlier planets in the list.
export function computeResult(scores: Partial<Record<PlanetId, number>>): PlanetId {
  const ids: PlanetId[] = PLANET_IDS;

  // Apply normalization so planets that appear less frequently are up-weighted fairly.
  const adjusted = ids.map((id) => (scores[id] ?? 0) * (PLANET_NORMALIZATION[id] ?? 1));
  // Find maximum score with tolerance for floating point rounding.
  const values = adjusted;
  const max = Math.max(...values);
  const EPS = 1e-6;
  const top: PlanetId[] = ids.filter((_, i) => Math.abs(values[i] - max) < EPS);

  if (top.length === 0) return "earth"; // fallback
  if (top.length === 1) return top[0];

  // Stable, deterministic selection among ties based on a hash of the score vector.
  const signature = ids.map((id) => `${id}:${(scores[id] ?? 0).toFixed(4)}`).join("|");
  const index = stableIndex(signature, top.length);
  return top[index];
}

function stableIndex(input: string, mod: number): number {
  // FNV-1a 32-bit hash (simple, fast, deterministic)
  let hash = 0x811c9dc5; // 2166136261
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = (hash >>> 0) + ((hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24));
    hash = hash >>> 0; // ensure uint32
  }
  return mod > 0 ? (hash % mod) : 0;
}
