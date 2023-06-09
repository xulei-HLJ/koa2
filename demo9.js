const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}));

app.use(async (ctx) => {
  let title = 'hello koa2';
  // 渲染模板
  await ctx.render('index', {
    title
  })
})

app.listen(3000);
console.log('[demo9] start-quick is starting at port 3000');