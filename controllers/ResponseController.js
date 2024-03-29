'use strict'

function ok(values, message, reply) {
    return reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            code: 200,
            values: values,
            message: message,
        });
}

function notFound(values, message, reply) {
    return reply
        .code(404)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            code: 404,
            values: values,
            message: message,
        });
}

module.exports = {
    ok,
    notFound
}