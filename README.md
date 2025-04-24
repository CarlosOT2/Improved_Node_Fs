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
      <li><b>path (string);</b> File path</li>
      <li><b>constants (fs.constants);</b> Used constants</li>
      <li><b>options (object);</b>
        <ul>
          <li><b>console_error (boolean);</b> If an error occurs, it'll be displayed in the console</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>renameFile = </b> fs.rename
    <ul>
      <li><b>old_path (string);</b> Current file path</li>
      <li><b>new_path (string);</b> New file path</li>
      <li><b>options (object);</b>
        <ul>
          <li><b>console_error (boolean);</b> If an error occurs, it'll be displayed in the console</li>
          <li><b>dont_throw (boolean);</b> If an error occurs, it'll throw an object error</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>unlinkFile = </b> fs.unlink
    <ul>
      <li><b>path (string);</b> File path</li>
      <li><b>options (object);</b>
        <ul>
          <li><b>console_error (boolean);</b> If an error occurs, it'll be displayed in the console</li>
          <li><b>dont_throw (boolean);</b> If an error occurs, it'll throw an object error</li>
          <li><b>return_boolean (boolean);</b> It'll return <i>true</i> if successful and <i>false</i> if a failure occurs</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>copyFile = </b> fs.copyFile
    <ul>
      <li><b>path (string);</b> File path to be copied</li>
      <li><b>new_path (object);</b> Path to new copied file</li>
      <li><b>options (object);</b>
        <ul>
          <li><b>console_error (boolean);</b> If an error occurs, it'll be displayed in the console</li>
          <li><b>dont_throw (boolean);</b> If an error occurs, it'll throw an object error</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>writeFile = </b> fs.writeFile
    <ul>
      <li><b>path (string);</b> File path</li>
      <li><b>data (any);</b> File content</li>
      <li><b>options (object);</b> Same options as the Node fs function</li>
    </ul>
  </li>
  <li><b>mkdir = </b> fs.mkdir
    <ul>
      <li><b>path (string);</b> File path</li>
      <li><b>options (object);</b> Same options as the Node fs function</li>
    </ul>
  </li>
  <li><b>remove = </b> fs.rm
    <ul>
      <li><b>path (string);</b> File path</li>
      <li><b>options (object);</b> Same options as the Node fs function and additional options
        <ul>
          <li><b>dontremove (array);</b> It'll not remove files/folders with these names (used in emptyFolder and deleteFolder)</li>
          <li><b>emptyfolder (boolean);</b> Empties a folder without removing it</li>
          <li><b>deletefolder (boolean);</b> Deletes a folder along with all its files</li>
          <li><b>console_error (boolean);</b> If an error occurs, it'll be displayed in the console</li>
          <li><b>dont_throw (boolean);</b> If an error occurs, it'll throw an object error</li>
        </ul>
      </li>
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

