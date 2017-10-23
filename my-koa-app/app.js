const Koa = require('koa');
var Router = require('koa-router');

const app = new Koa();
var router = new Router();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

router.get('/hello/:name', function (ctx, next) {
  // ctx.router available 
  ctx.body = 'Hello ' + ctx.params.name;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);