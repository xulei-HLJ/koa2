const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'hello koa2';
})

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');

console.log('master 修改');
console.log('master aaa');


const a = 12;
