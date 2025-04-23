# fsHelpers # 
![Node Version](https://img.shields.io/badge/node-v20.11.1-yellow)
<br/>
<br/>
<b>A documentação está disponível em português. Você pode alternar para o português clicando em [Versão português](README.pt.md)</b>

A package focused on improving the traditional Node fs, with functions containing additional and simplified features.

<h3> Install </h3>
to install the package, run the command <code>npm i fshelpers</code>
</br>
uses <b>ES Modules</b> mechanism to import and export functions

<h3> Exported Functions </h3>

<ul>
  <li><b>accessFile = </b> fs.access
    <ul>
      <li><b>path (string);</b></li>
      <li><b>constants (fs.constants);</b></li>
      <li><b>options (object);</b></li>
    </ul>
  </li>
  <li><b>renameFile = </b> fs.rename
    <ul>
      <li><b>old_path (string);</b></li>
      <li><b>new_path (string);</b></li>
      <li><b>options (object);</b></li>
    </ul>
  </li>
  <li><b>unlinkFile = </b> fs.unlink
    <ul>
      <li><b>path (string);</b></li>
      <li><b>options (object);</b></li>
    </ul>
  </li>
  <li><b>copyFile  = </b> fs.copyFile
    <ul>
      <li><b>path (string);</b></li>
      <li><b>new_path (object);</b></li>
      <li><b>options (object);</b></li>
    </ul>
  </li>
  <li><b>writeFile = </b> fs.writeFile
    <ul>
      <li><b>path (string);</b></li>
      <li><b>data (any);</b></li>
      <li><b>options (object);</b></li>
    </ul>
  </li>
  <li><b>mkdir = </b> fs.mkdir
    <ul>
      <li><b>path (string);</b></li>
    </ul>
  </li>
  <li><b>remove = </b> fs.rm
    <ul>
      <li><b>path (string);</b></li>
      <li><b>options (object);</b></li>
    </ul>
  </li>
</ul>
functions usage example;

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

