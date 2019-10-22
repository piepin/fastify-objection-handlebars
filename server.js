require('dotenv').config();

const join = require('path').join;
const fastify = require('fastify')({
    logger: false
});

fastify.register(require('fastify-static'), {
    root: join(__dirname, 'public'),
    prefix: '/assets/',
})

fastify.register(require('point-of-view'), {
    engine: {
        handlebars: require('handlebars'),
    },
    templates: 'views',
    includeViewExtension: true,
    templates: join(__dirname, 'views/'),
    options: {
        partials: {
            head: 'partials/head.hbs',
            nav: 'partials/nav.hbs'
        }
    }
})

fastify.register(require('fastify-formbody'));
fastify.register(require('./routes'), {
    prefix: '/v1'
});

const server = async() => {
    try {
        await fastify.listen(process.env.PORT || 3100);
        console.log(`Server listening on ${fastify.server.address().port}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

server();