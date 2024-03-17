import type { Actions } from './$types';

// export const load: PageServerLoad = async ({ cookies }) => {
// 	const user = await db.getUserFromSession(cookies.get('sessionid'));
// 	return { user };
// };

export const actions = {
	createCampaign: async ({ request }) => {
		const data = await request.formData();

        console.log({data});
		// const email = data.get('email');
		// const password = data.get('password');

		// const user = await db.getUser(email);
		// cookies.set('sessionid', await db.createSession(user), { path: '/' });

		return { success: true };
	}
} satisfies Actions;
