(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{269:function(t,e,r){var content=r(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("0b5dbb31",content,!0,{sourceMap:!1})},276:function(t,e,r){"use strict";r(269)},277:function(t,e,r){var n=r(51)(!1);n.push([t.i,".product__item-inner{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-top:20px;margin-left:-10px}.product__item-inner .spinner{margin-top:50px}.product__item-inner .spinner-border{width:8rem;height:8rem}.product__item-inner-box{width:100%;box-shadow:11px 6px 17px rgba(108,111,115,.6);border-radius:4px;margin-bottom:30px;min-width:290px;flex-basis:calc(33.333% - 10px);margin-left:10px;text-align:center}.product__item-inner-box img{width:100%;height:250px;-o-object-fit:cover;object-fit:cover}.product__item-box{padding:0 10px}.product__item-title{padding:15px 20px 10px}.product__item__icons .active{color:red}.product__item__icons.icons-2{position:relative;margin-left:50px}.product__item__icons.icons-2 .activeCart{display:block;position:absolute;width:24px;height:22px;border-radius:50%;text-align:center;font-size:14px;font-weight:500;right:-11px;top:-8px;background-color:#0674ec;color:#fff;line-height:17px}.product__item-action{display:flex;justify-content:space-around;padding:15px 20px 10px}",""]),t.exports=n},283:function(t,e,r){"use strict";r.r(e);r(60),r(13),r(76);var n=r(0),c=r(44);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={data:function(){return{}},computed:d(d({},Object(c.c)({cart:"cart/cart",petsList:"cart/petsList",pageNumber:"cart/pageNumber",wishList:"cart/wishList",isLoading:"cart/isLoading"})),{},{arrayPets:function(){return this.petsList.length<=12?this.petsList:this.petsList.slice(12*(this.pageNumber-1),12*this.pageNumber)}}),mounted:function(){this.fetchPets()},methods:d(d({},Object(c.b)({fetchPets:"cart/fetchPets",filterPets:"cart/filterPets",addToWishList:"cart/addToWishList",addToCart:"cart/addToCart",pageNumb:"cart/pageNumb",deleteFromWishList:"cart/deleteFromWishList",deleteFromCart:"cart/deleteFromCart"})),{},{petImage:function(image){var t="";switch(image){case"doggie":t="doggie";break;case"fish":t="fish";break;case"test":t="test";break;case"lion":t="lion";break;default:t="default"}return t},addPetToWishList:function(t){this.wishList.includes(t)?this.deleteFromWishList(t):this.addToWishList(t)},addItemToCart:function(t){this.cart.includes(t)?this.deleteFromCart(t):"sold"===t.status?this.$toast("danger","Sorry , this item is not available"):this.addToCart(t)},inWishList:function(t){return this.wishList.includes(t)},inCart:function(t){return this.cart.includes(t)}})},h=(r(276),r(53)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product__item-inner"},[t.isLoading?n("b-spinner",{staticClass:"mx-auto spinner",attrs:{variant:"primary"}}):t._l(t.arrayPets,(function(e){return n("div",{key:""+(e.id+Math.random().toFixed(8)),staticClass:"product__item-inner-box"},[n("img",{attrs:{src:r(96)("./"+t.petImage(e.name)+".png"),alt:""}}),t._v(" "),n("div",{staticClass:"product__item-box"},[n("h3",{staticClass:"product__item-title"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("div",{staticClass:"product__item-text"},[t._v("\n        Status : "+t._s(e.status)+"\n      ")]),t._v(" "),n("div",{staticClass:"product__item-action"},[n("div",{staticClass:"product__item__icons",on:{click:function(r){return t.addPetToWishList(e)}}},[n("svg",{staticClass:"svg-inline--fa fa-heart fa-w-16",class:{active:t.inWishList(e)},attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"heart",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"}})])]),t._v(" "),n("div",{staticClass:"product__item__icons icons-2",on:{click:function(r){return t.addItemToCart(e)}}},[n("svg",{class:{active:t.inCart(e)},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 26 28"}},[n("title",[t._v("shopping-cart")]),t._v(" "),n("path",{attrs:{d:"M10 24c0 1.094-0.906 2-2 2s-2-0.906-2-2 0.906-2 2-2 2 0.906 2 2zM24 24c0 1.094-0.906 2-2 2s-2-0.906-2-2 0.906-2 2-2 2 0.906 2 2zM26 7v8c0 0.5-0.391 0.938-0.891 1l-16.312 1.906c0.078 0.359 0.203 0.719 0.203 1.094 0 0.359-0.219 0.688-0.375 1h14.375c0.547 0 1 0.453 1 1s-0.453 1-1 1h-16c-0.547 0-1-0.453-1-1 0-0.484 0.703-1.656 0.953-2.141l-2.766-12.859h-3.187c-0.547 0-1-0.453-1-1s0.453-1 1-1h4c1.047 0 1.078 1.25 1.234 2h18.766c0.547 0 1 0.453 1 1z"}})]),t._v(" "),t.inCart(e)?n("div",[n("span",{class:{activeCart:t.inCart(e)}},[t._v("1")])]):t._e()])])])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);