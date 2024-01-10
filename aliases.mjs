

// aliases.mjs
import { fileURLToPath } from 'url';
import * as path from 'path'
import moduleAlias from 'module-alias';

// Obtén el directorio actual del módulo usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);
console.log(path.normalize(__dirname+'/app/Controllers'));

moduleAlias.addAliases({
  '@raiz': path.normalize(__dirname),
  '@app': path.normalize(`${__dirname}/app`),
  '@controllers': path.normalize(`${__dirname}/app/Controllers`),
  '@models': path.normalize(`${__dirname}/app/models`),
  // Agrega más alias según tus necesidades
});