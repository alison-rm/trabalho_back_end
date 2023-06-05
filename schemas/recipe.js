const z = require("zod");

const RecipeSchema = z.object({
  name: z.string({
    required_error: "Nome obrigatório",
    invalid_type_error: "Nome somente letras",
  }),
  description: z.string({
    required_error: "Descrição obrigatória",
    invalid_type_error: "Descrição somente letras",
  }), 
  preparationTime: z.number({
    required_error: "Tempo de preparo obrigatório",
  }).min(0),
});

module.exports = {
  RecipeSchema
}