export type PlanetId =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"
  | "pluto";

export interface AnswerOption {
  id: string;
  text: string;
  weights: Partial<Record<PlanetId, number>>; // weight contribution to planets
}

export interface Question {
  id: string;
  topic:
    | "motivation"
    | "emotions"
    | "creativity"
    | "teamwork"
    | "communication"
    | "habits"
    | "challenge"
    | "values"
    | "lifestyle";
  prompt: string;
  options: AnswerOption[];
}

export interface PlanetInfo {
  id: PlanetId;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  funFact: string;
  imageUrl?: string; // Optional Unsplash image URL
  imageAlt?: string; // Optional alt text for the image
}
