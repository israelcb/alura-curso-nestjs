import { Module } from '@nestjs/common';
import { UsuarioModule } from './ussuario/usuario.module';

@Module({
  imports: [UsuarioModule],
})
export class AppModule {}
