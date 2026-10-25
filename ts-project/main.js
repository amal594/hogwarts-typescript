/*import { NewWizard, Wizard } from "./types";
// La méthode qui enregistre le sorcier et lui attribue un identifiant
function addWizard(wizardData: NewWizard): Wizard {
  const generatedId = Math.floor(Math.random() * 1000); // Génère un ID aléatoire
  
  return {
    id: generatedId,
    ...wizardData
  };
}
// Le test de création (sans fournir d'ID)
const student: NewWizard = {
  name: "AmalSadki",
  house: "EHEI"
};

const registeredStudent = addWizard(student);
console.log(registeredStudent);*/
/*import { WizardRepository } from "./repository.js";

const repo = new WizardRepository();
console.log(repo.findByHouse("FMPO"));*/
/*import type { SpellCastEvent } from "./types.js";

function handleSpellCast(event: SpellCastEvent): void {
  console.log(`Wizard ${event.wizardId} cast ${event.spellName}`);
}

handleSpellCast({
  type: "spell-cast",
  wizardId: 1,
  spellName: "Expelliarmus"
});*/
/*import { SpellRepository } from "./repository.js";

const spellRepo = new SpellRepository();

console.log("--- Test 1 : Sort valide ---");
try {
  spellRepo.add({ name: "Lumos", power: 10 });
} catch (error: any) {
  console.error("Erreur :", error.message);
}

console.log("\n--- Test 2 : Sort invalide ---");
try {
  spellRepo.add({ name: "Cursed Fire", power: -50 });
} catch (error: any) {
  console.error("Erreur :", error.message);
}*/
/*import { Memoize } from "./decorators.js";

class SpellPowerCalculator {
  @Memoize
  calculateTotalPower(basePower: number, multiplier: number): number {
    // Simulation d'un calcul coûteux
    return basePower * multiplier;
  }
}

const calculator = new SpellPowerCalculator();

console.log("--- Premier appel (devrait calculer) ---");
console.log("Résultat :", calculator.calculateTotalPower(50, 2));

console.log("\n--- Deuxième appel avec les mêmes arguments (devrait utiliser le cache) ---");
console.log("Résultat :", calculator.calculateTotalPower(50, 2));

console.log("\n--- Troisième appel avec de nouveaux arguments (devrait re-calculer) ---");
console.log("Résultat :", calculator.calculateTotalPower(100, 3));*/
import { isWizard } from "./types.js";
const validWizard = {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor"
};
const invalidWizard = {
    id: 2,
    name: "Viktor Krum",
    house: "Durmstrang" // Maison hors Poudlard
};
console.log("--- Test 1 : Sorcier de Poudlard valide ---");
console.log("Est un sorcier valide ?", isWizard(validWizard));
console.log("\n--- Test 2 : Sorcier avec maison invalide ---");
console.log("Est un sorcier valide ?", isWizard(invalidWizard));
