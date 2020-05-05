import app from './app';
import config from './config';

app.listen(config.PORT, () => {
	Object.keys(config).forEach((key) => console.log(`${key}: ${config[key]}`));
	console.log(`Listing on port ${config.PORT}`);
});

process.on('SIGINT', async () => {
	console.log('Bye bye!');
	process.exit();
});
