import { type Locator, type FrameLocator, type Page, expect } from "@playwright/test";


class Methods {
    
    readonly page:Page;

    constructor(page: Page) {
        this.page = page; 
    }
     /**
     * @function navigateTo It executes the main browser method to open a specific URL within the actual capability
     * @param {String} path the URL path you want to pass to the Browser object
     */
    
     async navigateTo(path = 'www.gooogle.com') {
        await this.page.goto(path);
    }

}

export default Methods;
