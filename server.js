import express from 'express';

const api = express();

api.listen(8001, () => {
	console.log("Escuchando puerto 8001");
});


