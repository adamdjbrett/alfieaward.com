import { DateTime } from "luxon";

export default function (eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
			format || "dd LLLL yyyy"
		);
	});
	eleventyConfig.addNunjucksFilter("limit", (arr, limit) =>
		arr.slice(0, limit)
	);
	eleventyConfig.addCollection("awards", (collectionApi) =>
		collectionApi
			.getFilteredByGlob("content/award/*.md")
			.sort((a, b) => b.date - a.date)
	);
	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
	});

	eleventyConfig.addFilter("head", (array, n) => {
		if (!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	eleventyConfig.addFilter("getKeys", (target) => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(
			(tag) => ["all", "posts", "awards", "galleries"].indexOf(tag) === -1
		);
	});
}
