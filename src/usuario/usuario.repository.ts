import { Injectable } from "@nestjs/common"
import { UsuarioEntity } from "./usuario.entity"

@Injectable()
export class UsuarioRepository {
    private usuarios: UsuarioEntity[] = []

    async listar() {
        return this.usuarios
    }

    async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario)
    }

    async existeComEmail(email: string): Promise<boolean> {
        return this.usuarios.some(
            usuario => usuario.email === email
        )
    }

    async atualiza(id: string, dadosAtualizacao: Partial<UsuarioEntity>) {
        const usuario = this.buscaPorId(id)

        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return
            }

            usuario[chave] = valor
        })

        return usuario
    }

    async remove(id: string) {
        const usuario = this.buscaPorId(id)
        this.usuarios = this.usuarios.filter(
            usuarioSalvo => usuarioSalvo !== usuario
        )

        return usuario
    }

    private buscaPorId(id: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.id === id
        )

        if (!possivelUsuario) {
            throw new Error('Usuário não existe')
        }

        return possivelUsuario
    }
}