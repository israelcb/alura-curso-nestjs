# Usando uma imagem base do Node.js
FROM node:20-alpine

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install
RUN npm install -g tsc-watch

# Copiando o restante dos arquivos da aplicação
COPY . .

# Expondo a porta que o aplicativo usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"]