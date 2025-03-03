export interface ValidationErrors {
  id?: string[];
  name?: string[];
  team?: string[];
  price?: string[];
  stock?: string[];
}

export function validateProduct(formData: any): ValidationErrors {
  const errors: ValidationErrors = {};

  if (typeof formData.id !== "number") {
    errors.id = ["L'ID doit être un nombre."];
  }

  if (!formData.name || formData.name.trim() === "") {
    errors.name = ["Le nom est obligatoire."];
  }

  if (!formData.team || formData.team.trim() === "") {
    errors.team = ["L'équipe est obligatoire."];
  }

  if (typeof formData.price !== "number") {
    errors.price = ["Le prix doit être un nombre."];
  } else if (formData.price < 0) {
    errors.price = ["Le prix ne peut pas être négatif."];
  }

  if (typeof formData.stock !== "number") {
    errors.stock = ["Le stock doit être un nombre."];
  } else if (formData.stock < 0) {
    errors.stock = ["Le stock ne peut pas être négatif."];
  }

  return errors;
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
