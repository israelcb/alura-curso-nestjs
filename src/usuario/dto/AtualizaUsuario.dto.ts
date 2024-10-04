import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"
import { EmailUnico } from "../validacao/email-unico.validator"

export class AtualizaUsuarioDTO {

    @IsOptional()
    nome: string

    @IsEmail({}, { message: 'O e-mail informado é inválido' })
    @IsOptional()
    email: string

    @MinLength(6, { message: 'A senha precisa ter, pelo menos, 6 caracteres' })
    @IsOptional()
    senha: string
}