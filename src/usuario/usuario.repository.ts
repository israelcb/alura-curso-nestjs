import { Injectable } from "@nestjs/common"

@Injectable()
export class UsuarioRepository {
    private usuarios = []

    async listar() {
        return this.usuarios
    }

    async salvar(usuario) {
        this.usuarios.push(usuario)
    }

    async existeComEmail(email: string): Promise<boolean> {
        return this.usuarios.some(
            usuario => usuario.email === email
        )
    }
}