import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository) {}

    async validate(value: any): Promise<boolean> {
        const usuarioExistente = await this.usuarioRepository.existeComEmail(value)
        return !usuarioExistente
    }
}

export const EmailUnico = (opcoesValidacao: ValidationOptions) => {
    return (obj: Object, propriedade: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            validator: EmailUnicoValidator,
        })
    }
}