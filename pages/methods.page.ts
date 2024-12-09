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
    
    /**
     * @function clickAnElement It executes the main browser method to open a specific URL within the actual capability
     * @param {Locator} item A Selector to do a click;
     * @param {string} locator Wait for the selector relative to the element handle to satisfy state option (either appear/disappear from dom, or become visible/hidden). If at the moment of calling the method selector already satisfies the condition, the method will return immediately. If the selector doesn't satisfy the condition for the timeout milliseconds, the function will throw.
     */
     async clickAnElement(item, locator = '') {
        await this.page.waitForLoadState('load');
         if (locator) { //if the locator was sent, wait the element
            await this.waitForAnElement(locator);
        }
        await item.click();
    }
    /**
     * @function waitForAnElement It Wait for the selector relative to the element handle to satisfy state option
     * @param {string} locator Wait for the selector relative to the element handle to satisfy state option (either appear/disappear from dom, or become visible/hidden). If at the moment of calling the method selector already satisfies the condition, the method will return immediately. If the selector doesn't satisfy the condition for the timeout milliseconds, the function will throw.
     */
    async waitForAnElement(locator){
        if (locator) {
            await this.page.waitForSelector(locator);
        }
    }

    /**
     * @function hoverElement Wait for the element to be visible and then hover it
     * @param {Locator} item Enable hover state for an element,  which is reset upon next interaction.
     */
    async hoverAnElement(item, locator) {
        await this.waitForAnElement(locator);
        await item.hover();
    }

    /** EXTRAS **/
    removeDollarSign(item){//Removing $ sign and converting a string to number
        if (item.includes('$')) {
            return Number(item.replace('$',''));
        }
    }
}

export default Methods;
