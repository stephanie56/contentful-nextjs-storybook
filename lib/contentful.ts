import * as contentful from "contentful";

const space_id = process.env.NEXT_PUBLIC_SPACE_ID || '';
const access_token = process.env.NEXT_PUBLIC_DELIVERY_TOKEN || '';
const preview_token = process.env.NEXT_PUBLIC_PREVIEW_TOKEN || '';
const environment = process.env.NEXT_PUBLIC_ENVIRONMENT || '';

const getOptions = (is_preview: boolean) => {
    return {
        space: space_id,
        host: is_preview ? "preview.contentful.com" : undefined,
        accessToken: is_preview ? preview_token : access_token,
        environment: environment ? environment : "master",
    };
};

export const getEntriesByContentType = async(content_type: any, slug?: any) => {
    const options = getOptions(false);

    try {
        const contentfulClient = contentful.createClient(options);
        if (contentfulClient) {
            let params = { content_type: content_type, include: 3 };

            if (slug) {
                // @ts-ignore
                params["fields.slug"] = slug;
            }

            let entries = await contentfulClient.getEntries(params);
            const items = entries && entries.items ? entries.items : [];

            return { items };
        } else {
            return false;
        }
    } catch (error) {
        console.log("any errors? ->", error);
        return false;
    }
};