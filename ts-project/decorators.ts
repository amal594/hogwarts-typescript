export function ValidateSpellPower(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const spell = args[0];
    if (spell && spell.power < 0) {
      throw new Error("Spell power cannot be negative");
    }
    return originalMethod.apply(this, args);
  };
}
export function Memoize(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  // WeakMap pour stocker le cache de chaque instance de classe séparément
  const instanceCaches = new WeakMap<object, Map<string, any>>();

  descriptor.value = function (...args: any[]) {
    // 1. Récupérer ou créer le cache propre à l'instance courante
    let cache = instanceCaches.get(this);
    if (!cache) {
      cache = new Map<string, any>();
      instanceCaches.set(this, cache);
    }

    // 2. Créer une clé unique basée sur les arguments reçus
    const key = JSON.stringify(args);

    // 3. Vérifier si le résultat est déjà en cache
    if (cache.has(key)) {
      console.log(`[Cache Hit] Résultat récupéré du cache pour les arguments : ${key}`);
      return cache.get(key);
    }

    // 4. Exécuter la méthode originale et enregistrer le résultat
    console.log(`[Cache Miss] Calcul en cours pour les arguments : ${key}...`);
    const result = originalMethod.apply(this, args);
    cache.set(key, result);

    return result;
  };
}