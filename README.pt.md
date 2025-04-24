# Improved Node Fs # 
![Node Version](https://img.shields.io/badge/node-v20.11.1-yellow)
</br>
</br>

Pacote focado em melhorar o Node fs tradicional, com funções contendo funcionalidades extras e simplificadas

<h3> Instalação </h3>
Para instalar o pacote, execute o comando <code>npm i improved_nodefs</code>
</br>
Utiliza o mecanismo de <b>ES Modules</b> para importar e exportar funções

<h3> Funções Exportadas </h3>
Todas as funções abaixo usam node fs, portanto o uso será semelhante ao node fs
</br>
</br>

<ul>
  <li><b>accessFile = </b> fs.access
    <ul>
      <li><b>path (string);</b> Caminho do arquivo</li>
      <li><b>constants (fs.constants);</b> Constante usada</li>
      <li><b>options (object);</b>
        <ul>
          <li><b>console_error (boolean);</b> Se ocorrer um erro, ele será exibido no console</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>renameFile = </b> fs.rename
    <ul>
      <li><b>old_path (string);</b> Caminho atual do arquivo</li>
      <li><b>new_path (string);</b> Caminho novo do arquivo</li>
      <li><b>options (object);</b>
        <ul>
          <li><b>console_error (boolean);</b> Se ocorrer um erro, ele será exibido no console</li>
          <li><b>dont_throw (boolean);</b> Se ocorrer um error, ele lançará "throw" dentro de um objeto de error</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>unlinkFile = </b> fs.unlink
    <ul>
      <li><b>path (string);</b> Caminho do arquivo</li>
      <li><b>options (object);</b>
        <ul>
          <li><b>console_error (boolean);</b> Se ocorrer um erro, ele será exibido no console</li>
          <li><b>dont_throw (boolean);</b> Se ocorrer um error, ele lançará "throw" dentro de um objeto de error</li>
          <li><b>return_boolean (boolean);</b> Retornará <i>true</i> se for bem-sucedido e <i>false</i> se ocorrer alguma falha</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>copyFile = </b> fs.copyFile
    <ul>
      <li><b>path (string);</b> Caminho do arquivo que será copiado</li>
      <li><b>new_path (object);</b> Caminho do novo arquivo</li>
      <li><b>options (object);</b>
        <ul>
          <li><b>console_error (boolean);</b> Se ocorrer um erro, ele será exibido no console</li>
          <li><b>dont_throw (boolean);</b> Se ocorrer um error, ele lançará "throw" dentro de um objeto de error</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>writeFile = </b> fs.writeFile
    <ul>
      <li><b>path (string);</b> Caminho do arquivo</li>
      <li><b>data (qualquer);</b> Conteúdo do arquivo</li>
      <li><b>options (object);</b> As mesmas opções da função node fs</li>
    </ul>
  </li>
  <li><b>mkdir = </b> fs.mkdir
    <ul>
      <li><b>path (string);</b> Caminho da pasta</li>
      <li><b>options (object);</b> As mesmas opções da função node fs</li>
    </ul>
  </li>
  <li><b>remove = </b> fs.rm
    <ul>
      <li><b>path (string);</b> Caminho do arquivo</li>
      <li><b>options (object);</b> As mesmas opções da função node fs e funcionalidades extras
        <ul>
          <li><b>dontremove (array);</b> Não removerá arquivos/pastas com esses nomes (usado em emptyfolder e deletefolder)</li>
          <li><b>emptyfolder (boolean);</b> Esvazia uma pasta sem removê-la</li>
          <li><b>deletefolder (boolean);</b> Remove uma pasta e todos os seus arquivos</li>
          <li><b>console_error (boolean);</b> Se ocorrer um erro, ele será exibido no console</li>
          <li><b>dont_throw (boolean);</b> Se ocorrer um error, ele lançará "throw" dentro de um objeto de error</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
exemplo de uso das funções;

```javascript
// accessFile
const file_exist = await accessFile('path', fs.constants.F_OK, { console_error: false })
if (file_exist) {
  console.log('file exist')
}

// renameFile
await renameFile('old_path', 'new_path', { console_error: false, dont_throw: true })

// unlinkFile
await unlinkFile('path', { console_error: false, dont_throw: true, return_boolean: true })

// copyFile
await copyFile('path', 'new_path', { console_error: false, dont_throw: true })

// writeFile
await writeFile('path', { "example": "" }, { ...options })

// mkdir
await mkdir('path', { ...options })

// remove
await remove('path', { deletefolder: true, console_error: false, dont_throw: true })
await remove('path', { emptyfolder: true, console_error: false, dont_throw: true })
```