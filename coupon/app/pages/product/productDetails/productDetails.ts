/**
 * Created by liuchao on 6/25/16.
 */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/product/productDetails/productDetails.html',
})
export class ProductDetails {
    product;
    pet;



    constructor(params: NavParams) {
        this.product = params.data.product;
        this.pet = "kittens";
        console.log(params.data);
    }
}