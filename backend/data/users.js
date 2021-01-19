/** @format */

import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@amantek.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Aman Tek',
		email: 'aman@amantek.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Haimi Abiy',
		email: 'haimi@haimiabiy.com',
		password: bcrypt.hashSync('123456', 10),
	},
];
export default users;
