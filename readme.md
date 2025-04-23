 Galeria de Fotos - Faça Upload e Gerencie Suas Imagens



Neste projeto, a gente desenvolveu uma aplicação web que deixa você fazer upload, mostrar e administrar suas imagens. Usamos Node.js, Express, MongoDB e mais algumas tecnologias pra criar uma galeria de fotos bem bacana.



## Funcionalidades



- Faça upload de imagens com limite de tamanho (5MB).

- Veja suas imagens numa grade que se adapta a vários tamanhos de tela.

- Exclua as imagens que você não precisa mais.

- API RESTful pra gerenciar as imagens no backend.



---



## Estrutura do Projeto



### 1. **Backend**



#### **`app.js`**

- Configura o servidor Express.

- Define as rotas pra `/pictures`.

- Ajusta o CORS pra permitir requisições de diferentes origens.

- Conecta com o banco de dados MongoDB.



#### **`db.js`**

- Configura a conexão com o MongoDB usando as credenciais do arquivo `.env`.

- Mostra mensagens de sucesso ou erro na hora de conectar ao banco.



#### **`models/Picture.js`**

- Define o modelo `Picture` pro MongoDB.

- Tem os campos:

 - `name`: Nome da imagem (String, obrigatório).

 - `image`: Buffer da imagem (obrigatório).

 - `contentType`: Tipo MIME da imagem (obrigatório).



#### **`config/multer.js`**

- Configura o middleware `multer` pra fazer upload de arquivos.

- Armazenamos os arquivos na memória.

- Limita o tamanho dos arquivos a 5MB.



#### **`routes/picture.js`**

- Define as rotas pra gerenciar as imagens:

 - `POST /`: Faz upload de uma nova imagem.

 - `GET /`: Retorna todas as imagens.

 - `GET /:id/image`: Retorna uma imagem específica.

 - `DELETE /:id`: Remove uma imagem específica.



#### **`controllers/PictureController.js`**

- Contém as funções pra manipular as imagens no banco de dados:

 - `create`: Salva uma nova imagem no banco.

 - `findAll`: Retorna todas as imagens.

 - `getImage`: Retorna uma imagem específica.

 - `remove`: Remove uma imagem específica.



---



### 2. **Frontend**



#### **`index.html`**

- Estrutura HTML da aplicação.

- Tem:

 - Um botão pra abrir o modal de upload.

 - Uma grade pra exibir as imagens.

 - Um modal pra fazer upload de novas imagens.



#### **`styles.css`**

- Estiliza a aplicação.

- Inclui:

 - Estilos pra grade de fotos.

 - Estilos pro modal de upload.

 - Estilos responsivos pra dispositivos menores.



#### **`script.js`**

- Gerencia a interação do usuário com a interface.

- Funções principais:

 - `fetchPhotos`: Busca as fotos da API.

 - `renderPhotoGrid`: Renderiza as fotos na grade.

 - `uploadNewPhoto`: Faz upload de uma nova foto.

 - `deletePhoto`: Remove uma foto.

 - `openUploadModal` e `closeUploadModal`: Abrem e fecham o modal de upload.

 - `showNotification`: Exibe notificações temporárias.



---



### 3. **Configuração**



#### **`package.json`**

- Lista as dependências do projeto:

 - `express`: Framework pra criar o servidor.

 - `mongoose`: Biblioteca pra interagir com o MongoDB.

 - `multer`: Middleware pra upload de arquivos.

 - `dotenv`: Gerencia variáveis de ambiente.

 - `nodemon`: Reinicia o servidor automaticamente durante o desenvolvimento.



#### **`.env`**

- Contém as variáveis de ambiente:

 - `DB_USER`: Usuário do banco de dados.

 - `DB_PASS`: Senha do banco de dados.

 - `PORT`: Porta do servidor.



---



## Como Executar o Projeto



1. **Clone o repositório:**

  ```bash

  git clone

  cd