import { Wizard } from "./types.js";
import { ValidateSpellPower } from "./decorators.js";


export class WizardRepository {
  private wizards: Wizard[] = [
    { id: 1, name: "Harry Potter", house: "Gryffindor" },
    { id: 2, name: "Draco Malfoy", house: "Slytherin" },
    { id: 3, name: "Hermione Granger", house: "Gryffindor" }
  ];

  getAll(): Wizard[] {
    return this.wizards;
  }

  findByHouse(house: Wizard["house"]): Wizard[] {
    return this.getAll().filter(
      wizard => wizard.house === house
    );
  }
}

export type Spell = {
  name: string;
  power: number;
};

export class SpellRepository {
  private spells: Spell[] = [];

  @ValidateSpellPower
  add(spell: Spell) {
    this.spells.push(spell);
    console.log(`Spell ${spell.name} added successfully!`);
  }
}