/**
 * Created by liuchao on 6/25/16.
 */
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Page,App, NavController, NavParams, Popover,} from 'ionic-angular';
import {Category} from "./popoverPages/category";
import {Location} from "./popoverPages/location";
import {Order} from "./popoverPages/order";

@Component({
    templateUrl: 'build/pages/product/productDetails/productDetails.html',
})
export class ProductDetails {
    @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
    @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;
    product;
    productOrShop;

    constructor(private params: NavParams,private nav:NavController) {
        this.product = params.data.product;
        this.productOrShop = "product";
        console.log(params.data);
    }

    presentCategoryPopover(ev) {
        let category = Popover.create(Category, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        console.log("presentPopover");
        this.nav.present(category, {
            ev: ev
        });
    }

    presentLocationPopover(ev) {
        let location = Popover.create(Location, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        console.log("presentPopover");
        this.nav.present(location, {
            ev: ev
        });
    }

    presentOrderPopover(ev) {
        let order = Popover.create(Order, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        console.log("presentPopover");
        this.nav.present(order, {
            ev: ev
        });
    }

    onPageWillEnter() {
        console.log("this");
       document.querySelector('#tabs ion-tabbar-section').style.display = "none";
    }
}