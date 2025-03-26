import jsdom from "jsdom";
import type { info } from "../types/types";

const { JSDOM } = jsdom;

const scrap = (domString: string): Array<info> => {
	const dom = new JSDOM(domString);
	const lis = dom.window.document.getElementsByTagName("li");
	const lis_items = [...lis].filter((li) => li.className.includes("s-item"));

	const info = extractInfo(lis_items);
		
	return info;
};

function extractInfo(items: Array<any>): Array<info>
{
    const info =  items.map((e) => {
        const title = e.querySelector("span[role='heading']").innerHTML.replaceAll(/<(.*?)>/g, "");

        if(title == "Shop on eBay") return;
        const img = e.querySelector("img").src;
        const spanReview = e.querySelector("span.s-item__seller-info-text");

        if (spanReview == null) return {title: title, img: img, rating: "", numReviews: "" };
        const ratingPercent = spanReview.innerHTML.match(/[0-9]?[0-9][.,]?[0-9]?%/)[0];
        const numReviews = spanReview.innerHTML.match(/\((.*?)\)/)[0].replace(/[\(\)]/g, "");

        return {
            title: title,
            imgSrc: img,
            rating: ratingPercent,
            numReviews: numReviews,
        };
    })
    
    const infoFiltered = info.filter((e) => e != undefined);

    return infoFiltered;
}

export default scrap;
