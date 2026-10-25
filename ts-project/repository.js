var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ValidateSpellPower } from "./decorators.js";
export class WizardRepository {
    wizards = [
        { id: 1, name: "Harry Potter", house: "Gryffindor" },
        { id: 2, name: "Draco Malfoy", house: "Slytherin" },
        { id: 3, name: "Hermione Granger", house: "Gryffindor" }
    ];
    getAll() {
        return this.wizards;
    }
    findByHouse(house) {
        return this.getAll().filter(wizard => wizard.house === house);
    }
}
export class SpellRepository {
    spells = [];
    add(spell) {
        this.spells.push(spell);
        console.log(`Spell ${spell.name} added successfully!`);
    }
}
__decorate([
    ValidateSpellPower
], SpellRepository.prototype, "add", null);
