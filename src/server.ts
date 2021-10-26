import app from "./app";

const PORT = process.env.PORT || 8080;

//Listen Port
if (require.main == module) {
    app.listen(8080, () => {
        console.log(`SERVER RUNNING ON PORT -- ${PORT} --`);
    });
}

