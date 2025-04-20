import app from './app';


app.listen(app.get('port'));

console.log('escuchando en el puerto', app.get('port'));