/*
                                                   # COMO FUNCIONA ?

..                              IRÁ FUNCIONAR COMO O MÓDULO 'fs; file system' COM FUNÇÕES Á MAIS.
..                 IRÁ VERIFICAR VALORES, ENVIAR RESPOSTAS AO CLIENTE, LANÇAR MENSAGENS NO CONSOLE, SE NECESSÁRIO.

*/

//# Import //
import fs from 'fs'
import FSHttpCode from './FSHttpCode.js'

//# Classes //
//.. HTTPError //
class HTTPError extends Error {
    constructor(message, status) {
        super(message);
        this.name = 'HTTPError';
        this.status = status;
    }
}

//# Functions //
//.. promiseFs //
function promiseFs(fs_config) {
    const { path, old_path, new_path } = fs_config
    const { type, data, options, constants } = fs_config
    const fs_arguments = {
        access: [path, constants],
        rename: [old_path, new_path],
        unlink: [path],
        rm: [path, options],

        mkdir: [path],
        writeFile: [path, data, options],
        copyFile: [path, new_path],
    }

    let type_arguments = []
    try {
        if (!type) throw new Error(`Missing argument 'type'`)

        type_arguments = fs_arguments[type]
        if (!type_arguments) {
            throw new Error(`'fs_arguments' not found, ${type}`)
        }

        if (type_arguments.some(arg => !arg && arg !== 0)) {
            throw new Error(`Missing required arguments`)
        }
    } catch (error) {
        throw new HTTPError(`promiseFs; ${error.message}`, 500)
    }

    return new Promise((resolve, reject) => {
        function fs_cb(fsError) {
            if (fsError) {
                const HttpCode = FSHttpCode(fsError)
                reject(new HTTPError(fsError, HttpCode))
            } else {
                resolve()
            }
        }
        fs[type](...type_arguments, fs_cb)
    })
}



//.. accessFile //
export async function accessFile(path, constants, options = {}) {
    const { console_error = true } = options
    try {
        if (!path || constants) throw new Error(`Required arguments cannot be null (path, constants)`)
        await promiseFs({ type: 'access', path, constants })
        return true
    } catch (accessError) {
        if (console_error) console.error(';------- Error Access -------;', accessError.message)
        return false
    }
}
//.. renameFile //
export async function renameFile(old_path, new_path, options = {}) {
    const { dont_throw = false, console_error = true } = options
    try {
        if (!old_path || !new_path) throw new Error(`Required arguments cannot be null (oldPath, newPath)`)
        await promiseFs({ type: 'rename', old_path, new_path })
    } catch (renameError) {
        if (console_error) console.error(';------- Error Rename -------;', renameError.message)
        if (dont_throw) return
        throw renameError
    }
}
//.. unlinkFile //
export async function unlinkFile(path, options = {}) {
    const { return_boolean, dont_throw, console_error = true } = options
    try {
        if (!path) throw new Error(`Required arguments cannot be null (path)`)
        await promiseFs({ type: 'unlink', path: path })
        if (return_boolean) return true
    } catch (unlinkError) {
        if (console_error) console.error(';------- Error Unlink -------;', unlinkError.message)
        if (return_boolean) return false
        if (dont_throw) return
        throw unlinkError
    }
}
//.. copyFile // 
export async function copyFile(path, new_path, options = {}) {
    const { dont_throw = false, console_error = true } = options
    try {
        if (!path || !new_path) throw new Error(`Required arguments cannot be null (path, new_path)`)
        await promiseFs({ type: 'copyFile', path, new_path })
    } catch (copyFileError) {
        if (console_error) console.error(`;------- Error copyFile -------;`, copyFileError.message)
        if (dont_throw) return
        throw copyFileError
    }
}
//.. writeFile //
export async function writeFile(path, data, options = {}) {
    try {
        if (!path || !data) {
            throw new Error(`Required arguments cannot be null (path, data)`)
        }
        await promiseFs({ type: 'writeFile', path, data, options })
    } catch (writeFileError) {
        console.error(';------- Error writeFile -------;', writeFileError.message)
        throw writeFileError
    }
}
//.. mkdir //
export async function mkdir(path) {
    try {
        if (!path) {
            throw new Error(`Required arguments cannot be null (path)`)
        }
        await promiseFs({ type: 'mkdir', path })
    } catch (mkdirError) {
        console.error(';------- Error mkdir -------;', mkdirError.message)
        throw mkdirError
    }
}
//.. remove //
export async function remove(path, options = {}) {
    const { emptyfolder, deletefolder, dontremove = [] } = options
    const { console_error = true, dont_throw = false } = options

    try {
        if (!path) {
            throw new Error(`Required arguments cannot be null (path)`)
        }
        if (!await accessFile(path, fs.constants.F_OK, { console_error: false })) {
            throw new Error(`'path' does not exist`)
        }
        if (emptyfolder) {
            await Promise.all(
                fs.readdirSync(path)
                    .filter(file_name => !dontremove.includes(file_name))
                    .map(file_name => fs.promises.rm(`${path}/${file_name}`, { recursive: true, ...options }))
            )
        } else if (deletefolder) {
            const params = { console_error, dontremove, dont_throw }
            /*
            await remove(path, { emptyfolder: true, console_error, dontremove, dont_throw })
            */
            await remove(path, { emptyfolder: true, ...params })
            await remove(path, { recursive: true, ...params })
        } else {
            await promiseFs({ type: 'rm', path, options })
        }
    } catch (removeError) {
        if (console_error) console.error(';------- Error remove -------;', removeError.message)
        if (dont_throw) return
        throw removeError
    }
}