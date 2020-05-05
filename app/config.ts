/* eslint no-process-env: 0 */

export interface IConfig {
	[index: string]: any;
	NODE_ENV: string;
	DATABASE: string;
	PORT: number;
	UI_URL: string;
}

const envs: { [index: string]: any } = {
	production: {
	},
};

const config: IConfig = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	DATABASE: 'mongodb://localhost:27017/database_name',
	PORT: 9998,
	UI_URL: 'http://localhost:3000',
	...(envs[process.env.NODE_ENV || 'development'] || {}),
};

export default config;
