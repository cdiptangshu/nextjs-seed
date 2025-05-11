import qs from "qs";
import { getCmsUrl, getCmsApiKey } from "@/lib/utils";


const baseUrl = getCmsUrl();
const apiKey = getCmsApiKey();


async function fetchData(url: string) {

    console.log('Fetching data:', url);

    const headers = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
    };

    try {
        const response = await fetch(url, apiKey ? headers : {});

        if (!response.ok) {
            const { error } = await response.json();
            const { status, message } = error;
            throw new Error(`${status}: ${message}`)
        }

        return await response.json();

    } catch (error) {
        console.error("Failed to fetch data from:", url);
        throw error;
    }
}

export async function getHomePageData() {
    const url = new URL("/api/home", baseUrl);

    url.search = qs.stringify({
        populate: {
            links: {
                fields: ['url', 'text', 'isExternal']
            },
            banner: {
                fields: ['alternativeText', 'caption', 'url']
            }
        }
    });

    return await fetchData(url.href);
}