import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "8g3j1fq0",
	dataset: "production",
	apiVersion: "2022-02-01",
	useCdn: "",
	token:
		"skesBPS0T3nql591IEpMDNAYR3lagX4eGGCz29huO2M3gIjEzAOB3HPjcBV54fVHkvgin0D3DGBuYRWNwDqfsoIoum1VvpNwXmYYkKw3QYEg4AXfb2P7DCEpCzRq7n4QltUs1A98P8fLzp01aTDDuSoTr5OWAE3grKKLvXGnbzo0a8pX3rA2",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
