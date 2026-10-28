const authorizationMiddleware = (req, res, next) => {
    console.log('Hola soy el Middleaware de Autorizacion');
    next();
}
export {
    authorizationMiddleware
}