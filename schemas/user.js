const z = require("zod");

const UserSchema = z.object({
  name: z.string({
required_error: "Nome obrigatório",
    invalid_type_error: "Nome somente letras",
  })
    .min(3),
  email: z.string({
    required_error: "Descrição obrigatória",
    invalid_type_error: "Descrição somente letras",
  })
    .email("Email inválido"), 
  password: z.string({
    required_error: "Senha obrigatória",
    invalid_type_error: "Senha somente letras",
  })
    .min(8, "Minimo 8 caracteres")
    .regex(new RegExp('.*[A-Z].*'), "Um caractere maiúsculo")
    .regex(new RegExp('.*[a-z].*'), "Um caractere minúsculo")
    .regex(new RegExp('.*[0-9].*'), "Um número")
    .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'), "Um caractere especial"),
});

module.exports = {
  UserSchema
}