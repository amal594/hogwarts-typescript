export const HOUSES = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"] as const;

// Type House dérivé du tableau HOUSES
export type House = (typeof HOUSES)[number];

export interface Wizard {
  id: number;
  name: string;
  house: House;
}

export type NewWizard = Omit<Wizard, "id">;

export type AcademyEvent =
  | { type: "spell-cast"; wizardId: number; spellName: string }
  | { type: "level-up"; wizardId: number; newLevel: number }
  | { type: "wizard-expelled"; wizardId: number };

export type SpellCastEvent = Extract<AcademyEvent, { type: "spell-cast" }>;

export function isHouse(value: unknown): value is House {
  return typeof value === "string" && HOUSES.includes(value as House);
}

export function isWizard(obj: unknown): obj is Wizard {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj &&
    typeof (obj as any).id === "number" &&
    "name" in obj &&
    typeof (obj as any).name === "string" &&
    "house" in obj &&
    isHouse((obj as any).house)
  );
}