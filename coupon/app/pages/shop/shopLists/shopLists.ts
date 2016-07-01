/**
 * Created by liuchao on 6/25/16.
 */
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Page,App, Events, NavController, NavParams, Popover,} from 'ionic-angular';
import {Category} from "./popoverPages/category";
import {Location} from "./popoverPages/location";
import {Order} from "./popoverPages/order";
import {getSelectedShopLists} from '../../../providers/shopLists-GetSelectedShopLists-service/shopLists-GetSelectedShopLists-service';

@Component({
    templateUrl: 'build/pages/shop/shopLists/shopLists.html',
    providers:[getSelectedShopLists]
})
export class ShopLists {
    @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
    @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;
    shop;
    productOrShop;
    shopLists;

    constructor(private params: NavParams,
    private nav:NavController,
    private events: Events,
    public shopListsService:getSelectedShopLists) {
        this.shop = params.data.shop;
        this.productOrShop = "shop";
        console.log(params.data);
        this.loadSelectedShopLists();
    }

    loadSelectedShopLists() {
      this.shopListsService.load()
          .then(data => {
            this.shopLists = data;
            console.log(this.shopLists);
          });
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
      this.hideTabs();
    }

    hideTabs(){
      console.log("enter");
      this.events.publish('hideTabs');
    }

    showTabs() {
      console.log("leave")
      this.events.publish('showTabs');
    }
}
