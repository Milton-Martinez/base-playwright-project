import { type Locator, type FrameLocator, type Page, expect } from "@playwright/test";
import Methods from "./methods.page";


export class  HomePage extends Methods {
    
    readonly page:Page;

    constructor(page:Page) {
        super(page);
        this.page = page
    }
    async openURL(url){
        await this.navigateTo(url)
    }

}
