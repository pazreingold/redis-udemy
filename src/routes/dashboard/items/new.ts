import type { RequestHandler } from '@sveltejs/kit';
import { createItem } from '$services/queries/items/items';

export const post: RequestHandler = async ({ request, locals }) => {
	const data = await request.json();
	const id = await createItem({ ...data }, locals.session.userId);

	return {
		status: 200,
		body: {
			id
		}
	};
};
