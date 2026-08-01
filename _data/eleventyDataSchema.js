import { z } from "zod";
import { fromZodError } from 'zod-validation-error';

export default function(data) {
	// Draft/publish state front matter.
	let result = z.object({
		draft: z.boolean().optional(),
		published: z.boolean().optional(),
	}).safeParse(data);

	if(result.error) {
		throw fromZodError(result.error);
	}
}
