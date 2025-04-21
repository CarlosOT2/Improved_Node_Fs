export default function FSHttpCode(error) {
    const code = error.code
    const httpcode =
        code === 'ENOENT' ? 404
            :
            code === 'EACCESS' || code === 'EROFS' ? 403
                :
                code === 'EEXIST' || code === 'ENOTEMPTY' ? 409
                    :
                    code === 'EMFILE' || code === 'ENFILE' ? 503
                        :
                        code === 'EINVAL' || code === 'EISDIR' ? 400
                            :
                            code === 'EIO' || code === 'ENOTDIR' ? 500
                                : 500
    return httpcode
}