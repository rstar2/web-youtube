// 'await' requires to be used only inside an 'async' function
const main = async () => {
    const { app, apiRouter, viewRouter } = await require('./app')();
    // load the local routers
    require('./routes/api/local')(apiRouter);
    require('./routes/view/local')(viewRouter);

    // run the Express server locally on port 3000
    app.listen(process.env.PORT || 3000);
};

main();