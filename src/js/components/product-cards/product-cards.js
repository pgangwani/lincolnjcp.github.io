import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import RecommendationZone from '../recommendation-zone/recommendation-zone';
import $ from 'jquery';

const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');
const heartfillImage = require('!!raw-loader?es5=1!../../../images/global/icons/action/heart-fill.svg');
const starImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star.svg');
const starhalfImage = require('!!raw-loader?es5=1!../../../images/global/icons/utility/star-half.svg');

class ProductCards extends Component {

    componentDidMount() {

        $(".heart").on("click", function () {
            var parent = $(this).closest('.like-icon');
            var tooltip = parent.find('.tooltip-content');
            parent.closest('.like-icon').toggleClass("is-active");
            if (parent.hasClass("is-active")) {
                tooltip.html('Added<br /><a href="/#/page-layouts/pdp">View My Favorites</a>');
            }
        });

        $(".like-icon").mouseleave(function () {
            var parent = $(this).closest('.like-icon');
            var tooltip = parent.find('.tooltip-content');
            if (parent.hasClass("is-active")) {
                tooltip.html('Remove Favorite');
            } else {
                tooltip.html('Favorite');
            }
        });

        $(document).ready(function () {
            $(this).scrollTop(0);
            $(".design-system-content").css('padding', 0);
            $(".design-system-enable-hide").css('display', 'none');
            $('.design-system-nav-mobile-header').hide();
            $(".design-system-wrap").css('margin', 0);
            $(".main-menu").css('margin-bottom', '16px');
        });


        $(window).on("resize", function () {
            var gridYPos = 0;
            var gridRow = [];
            var gridRowHasCompare = false;
            $(".product-card-pane-grid").each(function (index) {
                if ($(this).find('.product-card-compare').length > 0) {
                    gridRowHasCompare = true;
                }
                if (gridYPos == 0) {
                    gridYPos = $(this).offset().top;
                    gridRow.push($(this));
                } else if (gridYPos !== $(this).offset().top) { //New Row
                    $(gridRow).each(function (index) {
                        if (gridRowHasCompare === false) {

                            $(this).addClass('product-card-pane-grid-no-compare');
                        } else {
                            $(this).removeClass('product-card-pane-grid-no-compare');
                        }
                    });
                    gridRow = [];
                    gridRow.push($(this));
                    gridYPos = $(this).offset().top;
                    gridRowHasCompare = false;
                } else {
                    gridRow.push($(this));
                }


            });
            $(gridRow).each(function (index) {
                if (gridRowHasCompare === false) {
                    $(this).addClass('product-card-pane-grid-no-compare');
                } else {
                    $(this).removeClass('product-card-pane-grid-no-compare');
                }
            });
        }).resize();
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                <div class="row">
                    <div class="sm12 columns">
                        <h2>9 Results for <strong> "home expression bath towels"</strong></h2>
                        <hr />
                        <div class="product-card-wrapper mrg-btm-M">
                            <div class="product-card product-card-pane-grid">
                                <a href="/#/page-layouts/pdp">
                                    <div class="product-card-inner">
                                        <div class="product-card-image">
                                            <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                            <div className="like-icon">
                                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                                <div className="tooltip tooltip-single tooltip-top-right">
                                                    <span className="tooltip-content">Favorite</span>
                                                </div>
                                            </div>
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="http://s7d4.scene7.com/is/image/JCPenney/DP0513201417083570M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                                            </div>
                                        </div>
                                        <div className="color-swatches-block hide-for-small-only">
                                            <div>
                                                <div className="color-swatches-medium">
                                                    <ul className="list-product-colors-container">
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch list-color-swatch-active"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li className="swatches-list-link">
                                                            <a href="/#/page-layouts/pdp" className="std-txt std-txt-S color-nightsky">
                                                                +23
                                          </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-card-details">
                                            <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                            <div class="price price-M">
                                                <span class="title title-XS from-label color-penneyred">from</span>
                                                <div class="price price-M flag flag-price"><sup class="sup-text">$</sup>2<sup class="sup-text">24</sup></div>
                                                <span class="price price-note color-penneyred after-coupon">after coupon</span>
                                                <div class="price price-note-M std-txt">
                                                    <span class="mrg-rght-S">was $6- $48</span>
                                                </div>
                                            </div>

                                       

                                            <div class="product-card-name-wrap">
                                                <a href="/#/page-layouts/pdp" class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Home Expressions™ Solid Bath Towels</a>
                                            </div>
                                            <div class="star-preview-col review-star mrg-top-XS">
                                                <ul class="star-ratings-S">
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-half">
                                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                    </li>
                                                    <li class="star-ratings star-rating-empty">
                                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings">
                                                        <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-card-compare">
                                            <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on" /> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card product-card-pane-grid">
                                <a href="/#/page-layouts/pdp">
                                    <div class="product-card-inner">
                                        <div class="product-card-image">
                                            <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                            <div className="like-icon">
                                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                                <div className="tooltip tooltip-single tooltip-top-right">
                                                    <span className="tooltip-content">Favorite</span>
                                                </div>
                                            </div>
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="http://s7d4.scene7.com/is/image/JCPenney/DP1106201708094517C.tif
?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                                            </div>
                                        </div>
                                        <div className="color-swatches-block hide-for-small-only">
                                            <div>
                                                <div className="color-swatches-medium">
                                                    <ul className="list-product-colors-container">
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch list-color-swatch-active"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li className="swatches-list-link">
                                                            <a href="/#/page-layouts/pdp" className="std-txt std-txt-S color-nightsky">
                                                                +23
                                          </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-card-details">
                                            <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                            <div class="price price-M">
                                                <span class="title title-XS from-label color-penneyred">from</span>
                                                <div class="price price-M flag flag-price"><sup class="sup-text">$</sup>2<sup class="sup-text">24</sup></div>
                                                <span class="price price-note color-penneyred after-coupon">after coupon</span>
                                                <div class="price price-note-M std-txt">
                                                    <span class="mrg-rght-S">was $6 - $10</span>
                                                </div>
                                            </div>
                                           
                                            <div class="product-card-name-wrap">
                                                <a href="/#/page-layouts/pdp" class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Home Expressions™ Ombre Stripe Bath Towels</a>
                                            </div>
                                            <div class="star-preview-col review-star mrg-top-XS">
                                                <ul class="star-ratings-S">
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-half">
                                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                    </li>
                                                    <li class="star-ratings star-rating-empty">
                                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings">
                                                        <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-card-compare">
                                            <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on" /> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card product-card-pane-grid">
                                <a href="/#/page-layouts/pdp">
                                    <div class="product-card-inner">
                                        <div class="product-card-image">
                                            <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                            <div className="like-icon">
                                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                                <div className="tooltip tooltip-single tooltip-top-right">
                                                    <span className="tooltip-content">Favorite</span>
                                                </div>
                                            </div>
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="http://s7d4.scene7.com/is/image/JCPenney/DP1217201520314502C.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                                            </div>
                                        </div>
                                        <div className="color-swatches-block hide-for-small-only">
                                            <div>
                                                <div className="color-swatches-medium">
                                                    <ul className="list-product-colors-container">
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch list-color-swatch-active"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li className="swatches-list-link">
                                                            <a href="/#/page-layouts/pdp" className="std-txt std-txt-S color-nightsky">
                                                                +23
                                          </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-card-details">
                                            <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                            <div class="price price-M">
                                                <div class="price price-M flag flag-price"><sup class="sup-text">$</sup>14<sup class="sup-text">99</sup></div>
                                                <span class="price price-note color-penneyred after-coupon-wrap">after coupon</span>
                                                <div class="price price-note-M std-txt mrg-top-XS">
                                                    <span class="mrg-rght-S">was $48</span>
                                                </div>
                                            </div>
                                            <div class="product-card-name-wrap">
                                                <a href="/#/page-layouts/pdp" class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Home Expressions™ 6-pc. Solid Bath Towel Set</a>
                                            </div>
                                            <div class="star-preview-col review-star mrg-top-XS">
                                                <ul class="star-ratings-S">
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-half">
                                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                    </li>
                                                    <li class="star-ratings star-rating-empty">
                                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings">
                                                        <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card product-card-pane-grid">
                                <a href="/#/page-layouts/pdp">
                                    <div class="product-card-inner">
                                        <div class="product-card-image">
                                            <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                            <div className="like-icon">
                                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                                <div className="tooltip tooltip-single tooltip-top-right">
                                                    <span className="tooltip-content">Favorite</span>
                                                </div>
                                            </div>
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="http://s7d4.scene7.com/is/image/JCPenney/DP0624201617292505M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                                            </div>
                                        </div>
                                        <div className="color-swatches-block hide-for-small-only">
                                            <div>
                                                <div className="color-swatches-medium">
                                                    <ul className="list-product-colors-container">
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch list-color-swatch-active"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li className="swatches-list-link">
                                                            <a href="/#/page-layouts/pdp" className="std-txt std-txt-S color-nightsky">
                                                                +23
                                          </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-card-details">
                                            <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                            <div class="price price-M">
                                                <div class="price price-M flag flag-price"><sup class="sup-text">$</sup>14<sup class="sup-text">99</sup></div>
                                                <span class="price price-note color-penneyred after-coupon-wrap">after coupon</span>
                                                <div class="price price-note-M std-txt mrg-top-XS">
                                                    <span class="mrg-rght-S">was $48</span>
                                                </div>
                                            </div>
                                            <div class="product-card-name-wrap">
                                                <a href="/#/page-layouts/pdp" class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Home Expressions™ 6-pc. Bath Towel Set</a>
                                            </div>
                                            <div class="star-preview-col review-star mrg-top-XS">
                                                <ul class="star-ratings-S">
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-half">
                                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                    </li>
                                                    <li class="star-ratings star-rating-empty">
                                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings">
                                                        <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div class="product-card product-card-pane-grid">
                                <a href="/#/page-layouts/pdp">
                                    <div class="product-card-inner">
                                        <div class="product-card-image">
                                            <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                            <div className="like-icon">
                                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                                <div className="tooltip tooltip-single tooltip-top-right">
                                                    <span className="tooltip-content">Favorite</span>
                                                </div>
                                            </div>
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="http://s7d4.scene7.com/is/image/JCPenney/DP0526201717230454M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                                            </div>
                                        </div>
                                        <div className="color-swatches-block hide-for-small-only">
                                            <div>
                                                <div className="color-swatches-medium">
                                                    <ul className="list-product-colors-container">
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch list-color-swatch-active"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li className="swatches-list-link">
                                                            <a href="/#/page-layouts/pdp" className="std-txt std-txt-S color-nightsky">
                                                                +23
                                          </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-card-details">
                                            <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                            <div class="price price-M">
                                                <sup class="sup-text">$</sup>16 - <sup class="sup-text">$</sup>550
                                            </div>
                                            <div class="product-card-name-wrap">
                                                <a href="/#/page-layouts/pdp" class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Home Expressions™ Bath Towel Collection</a>
                                            </div>
                                            <div class="star-preview-col review-star mrg-top-XS">
                                                <ul class="star-ratings-S">
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-half">
                                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                    </li>
                                                    <li class="star-ratings star-rating-empty">
                                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings">
                                                        <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div class="product-card product-card-pane-grid">
                                <a href="/#/page-layouts/pdp">
                                    <div class="product-card-inner">
                                        <div class="product-card-image">
                                            <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                            <div className="like-icon">
                                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                                <div className="tooltip tooltip-single tooltip-top-right">
                                                    <span className="tooltip-content">Favorite</span>
                                                </div>
                                            </div>
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="http://s7d4.scene7.com/is/image/JCPenney/DP0220201717172632M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                                            </div>
                                        </div>
                                        <div className="color-swatches-block hide-for-small-only">
                                            <div>
                                                <div className="color-swatches-medium">
                                                    <ul className="list-product-colors-container">
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch list-color-swatch-active"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li className="swatches-list-link">
                                                            <a href="/#/page-layouts/pdp" className="std-txt std-txt-S color-nightsky">
                                                                +23
                                          </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-card-details">
                                            <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                            <span class="title title-XS from-label color-penneyred">from</span>
                                            <div class="price price-M flag flag-price"><sup class="sup-text">$</sup>2<sup class="sup-text">99</sup></div>
                                            <span class="price price-note color-penneyred after-coupon">after coupon</span>
                                            <div class="price price-note-M std-txt mrg-top-XS">
                                                <span class="mrg-rght-S">was $74.99 - $99.99</span>
                                            </div>
                                            <div class="product-card-name-wrap">
                                                <a href="/#/page-layouts/pdp" class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Home Expressions™ Solid or Print Bath Wraps</a>
                                            </div>
                                            <div class="star-preview-col review-star mrg-top-XS">
                                                <ul class="star-ratings-S">
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-half">
                                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                    </li>
                                                    <li class="star-ratings star-rating-empty">
                                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings">
                                                        <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div class="product-card product-card-pane-grid">
                                <a href="/#/page-layouts/pdp">
                                    <div class="product-card-inner">
                                        <div class="product-card-image">
                                            <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                            <div className="like-icon">
                                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                                <div className="tooltip tooltip-single tooltip-top-right">
                                                    <span className="tooltip-content">Favorite</span>
                                                </div>
                                            </div>
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="http://s7d4.scene7.com/is/image/JCPenney/DP0609201520364949C.tif
?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                                            </div>
                                        </div>
                                        <div className="color-swatches-block hide-for-small-only">
                                            <div>
                                                <div className="color-swatches-medium">
                                                    <ul className="list-product-colors-container">
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch list-color-swatch-active"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li className="swatches-list-link">
                                                            <a href="/#/page-layouts/pdp" className="std-txt std-txt-S color-nightsky">
                                                                +23
                                          </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-card-details">
                                            <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                            <div class="price price-M mrg-btm-XS">
                                                <sup class="sup-text">$</sup>16 - <sup class="sup-text">$</sup>240
                                            </div>
                                            <div class="product-card-name-wrap">
                                                <a href="/#/page-layouts/pdp" class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Home Expressions™ Solid or Print Bath Wraps</a>
                                            </div>
                                            <div class="star-preview-col review-star mrg-top-XS">
                                                <ul class="star-ratings-S">
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-half">
                                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                    </li>
                                                    <li class="star-ratings star-rating-empty">
                                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings">
                                                        <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-card-compare">
                                            <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on" /> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card product-card-pane-grid">
                                <a href="/#/page-layouts/pdp">
                                    <div class="product-card-inner">
                                        <div class="product-card-image">
                                            <div class="flag flag-info std-txt std-txt-XS">Low Stock</div>
                                            <div className="like-icon">
                                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                                <div className="tooltip tooltip-single tooltip-top-right">
                                                    <span className="tooltip-content">Favorite</span>
                                                </div>
                                            </div>
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="http://s7d4.scene7.com/is/image/JCPenney/DP1217201520314502C.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                                            </div>
                                        </div>
                                        <div className="color-swatches-block hide-for-small-only">
                                            <div>
                                                <div className="color-swatches-medium">
                                                    <ul className="list-product-colors-container">
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch list-color-swatch-active"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li>
                                                            <a href="/#/page-layouts/pdp" className="list-color-swatch"></a>
                                                        </li>
                                                        <li className="swatches-list-link">
                                                            <a href="/#/page-layouts/pdp" className="std-txt std-txt-S color-nightsky">
                                                                +23
                                          </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-card-details">
                                            <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                            <div class="price price-M">
                                                <span class="mrg-rght-XS">
                                                <sup class="sup-text-S">$</sup>11<sup class="sup-text-S">99</sup>
                                                <span data-automation-id="at-price-label" className="sale">sale</span>
                                                </span>
                                            </div>
                                            <div class="price price-note-M std-txt">
                                                <span class="mrg-rght-S">was $14.99 | 20% off</span>
                                            </div>
                                           
                                            <div class="product-card-name-wrap">
                                                <a href="/#/page-layouts/pdp" class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Home Expressions™ Solid Bath Towels</a>
                                            </div>
                                            <div class="star-preview-col review-star mrg-top-XS">
                                                <ul class="star-ratings-S">
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-half">
                                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                    </li>
                                                    <li class="star-ratings star-rating-empty">
                                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings">
                                                        <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-card-compare">
                                            <div class="product-card-compare-inner input-group"><label class="checkbox"><input type="checkbox" value="on" /> <span class="std-txt std-txt-S color-nightsky">Compare</span></label></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="sm12 columns">
                        <h2><strong>Product Panes List</strong></h2>
                        <hr />
                        <div class="product-card-wrapper mrg-btm-M">
                            <div class="product-card product-card-pane-list">
                                <a href="/#/page-layouts/pdp">
                                    <div class="product-card-inner">
                                        <div class="product-card-image">
                                            <div class="flag flag-info std-txt std-txt-XS">NEW</div>
                                            <div className="like-icon">
                                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                                <div className="tooltip tooltip-single tooltip-top-right">
                                                    <span className="tooltip-content">Favorite</span>
                                                </div>
                                            </div>
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="https://s7d4.scene7.com/is/image/JCPenney/DP0602201717294441M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                                            </div>
                                            <div class="color-swatches-block hide-for-small-only">
                                                <div>
                                                    <div class="color-swatches-medium">
                                                        <ul class="list-product-colors-container">
                                                            <li><a href="/#/page-layouts/pdp" class="list-color-swatch list-color-swatch-active"></a></li>
                                                            <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                            <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                            <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                            <li class="swatches-list-link"><a href="/#/page-layouts/pdp" class="std-txt std-txt-S color-nightsky">+23</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="product-card-details">
                                            <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                            <span class="title title-XS from-label">from</span>
                                            <div class="price price-M flag flag-price"><sup class="sup-text">$</sup>29<sup class="sup-text">99</sup></div>
                                            <span class="price price-note color-penneyred after-coupon">after coupon</span>
                                            <div class="price price-note-M std-txt mrg-top-XS">
                                                <span class="mrg-rght-S">was $74.99 - $99.99</span>
                                            </div>
                                            <div class="product-card-name-wrap">
                                                <a href="/#/page-layouts/pdp" class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Home Expressions™ Solid Bath Towels</a>
                                            </div>
                                            <div class="star-preview-col review-star mrg-top-XS">
                                                <ul class="star-ratings-S">
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-half">
                                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                    </li>
                                                    <li class="star-ratings star-rating-empty">
                                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings">
                                                        <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div class="std-txt std-txt-S product-features color-nightsky hide-for-small-only">Product Features</div>
                                                <ul class="list hide-for-small-only">
                                                    <li class="price price-note color-slate std-txt">wide open pantry to store long, flat and wide food items</li>
                                                    <li class="price price-note color-slate std-txt">humidity-controlled crispers</li>
                                                    <li class="price price-note color-slate std-txt">3-door french door refrigerator with 2 fresh food doors, one freezer door and ice maker</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="product-card product-card-pane-list">
                                <a href="/#/page-layouts/pdp">
                                    <div class="product-card-inner">
                                        <div class="product-card-image">
                                            <div class="flag flag-info std-txt std-txt-XS">NEW</div>
                                            <div className="like-icon">
                                                <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                                <div className="tooltip tooltip-single tooltip-top-right">
                                                    <span className="tooltip-content">Favorite</span>
                                                </div>
                                            </div>
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="https://s7d9.scene7.com/is/image/JCPenney/DP0209201717113978M?wid=450&amp;hei=450&amp;op_sharpen=1" alt="Samsung ENERGY STAR" /></a>
                                                <div class="shop-collection title title-XS"><span class="hide-for-small-only">SHOP THE</span> COLLECTION</div>
                                            </div>
                                            <div class="color-swatches-block hide-for-small-only">
                                                <div>
                                                    <div class="color-swatches-medium">
                                                        <ul class="list-product-colors-container">
                                                            <li><a href="/#/page-layouts/pdp" class="list-color-swatch list-color-swatch-active"></a></li>
                                                            <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                            <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                            <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                            <li class="swatches-list-link"><a href="/#/page-layouts/pdp" class="std-txt std-txt-S color-nightsky">+23</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="product-card-details">
                                            <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                            <div class="price price-M flag flag-price"><sup class="sup-text">$</sup>29<sup class="sup-text">99</sup></div>
                                            <span class="price price-note color-penneyred after-coupon">after coupon</span>
                                            <div class="price price-note-M std-txt">
                                                <span class="mrg-rght-S">was $74</span><span> 41% off</span>
                                            </div>
                                            <div class="product-card-name-wrap">
                                                <a href="/#/page-layouts/pdp" class="product-card-name std-txt std-txt-S std-txt-XS-at-S color-nightsky">Home Expressions™ Solid Bath Towels</a>
                                            </div>
                                            <div class="star-preview-col review-star mrg-top-XS">
                                                <ul class="star-ratings-S">
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-full">
                                                        <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings start-ratings-half">
                                                        <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                    </li>
                                                    <li class="star-ratings star-rating-empty">
                                                        <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                    </li>
                                                    <li class="star-ratings">
                                                        <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div class="std-txt std-txt-S product-features color-nightsky hide-for-small-only">Product Features</div>
                                                <ul class="list hide-for-small-only">
                                                    <li class="price price-note color-slate std-txt">wide open pantry to store long, flat and wide food items</li>
                                                    <li class="price price-note color-slate std-txt">humidity-controlled crispers</li>
                                                    <li class="price price-note color-slate std-txt">3-door french door refrigerator with 2 fresh food doors, one freezer door and ice maker</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="sm12 columns">
                        <h2><strong>Large Gallery Panes</strong></h2>
                        <hr />
                        <div class="product-card-wrapper mrg-btm-M">
                            <a href="/#/page-layouts/pdp">
                                <div class="product-card product-card-pane-L">
                                    <div class="product-card-inner">
                                        <div class="flag flag-info std-txt std-txt-XS">NEW</div>
                                        <div className="like-icon">
                                            <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                            <div className="tooltip tooltip-single tooltip-top-right">
                                                <span className="tooltip-content">Favorite</span>
                                            </div>
                                        </div>
                                        <div class="product-card-image">
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="https://s7d4.scene7.com/is/image/JCPenney/DP0117201317033970M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="color-swatches-block">
                                        <div>
                                            <div class="color-swatches-medium">
                                                <ul class="list-product-colors-container">
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch list-color-swatch-active"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li class="swatches-list-link"><a href="/#/page-layouts/pdp" class="std-txt std-txt-S color-nightsky">+23</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                    <div class="price price-M">
                                        <span class="mrg-rght-XS">
                                            <sup class="sup-text-S">$</sup>33<sup class="sup-text-S">99</sup>
                                        </span>
                                        <span class="price price-note color-penneyred clearance-S">clearance</span>
                                    </div>
                                    <div class="price price-note-M std-txt mrg-top-XS">
                                        <span class="mrg-rght-S">was $74   </span>
                                        <span> 41% off</span>
                                    </div>
                                    <div class="product-card-name std-txt std-txt-S color-nightsky">Home Expressions™ Solid Bath Towels</div>
                                    <div class="star-preview-col review-star mrg-top-XS">
                                        <ul class="star-ratings-S">
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-half">
                                                <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                            </li>
                                            <li class="star-ratings star-rating-empty">
                                                <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings">
                                                <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                            <a href="/#/page-layouts/pdp">
                                <div class="product-card product-card-pane-L">
                                    <div class="product-card-inner">
                                        <div class="flag flag-info std-txt std-txt-XS">NEW</div>
                                        <div className="like-icon">
                                            <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                            <div className="tooltip tooltip-single tooltip-top-right">
                                                <span className="tooltip-content">Favorite</span>
                                            </div>
                                        </div>
                                        <div class="product-card-image">
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="https://s7d4.scene7.com/is/image/JCPenney/DP0425201617044942M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="color-swatches-block">
                                        <div>
                                            <div class="color-swatches-medium">
                                                <ul class="list-product-colors-container">
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch list-color-swatch-active"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li class="swatches-list-link"><a href="/#/page-layouts/pdp" class="std-txt std-txt-S color-nightsky">+23</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="promo-lbl promo-lbl-XS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                    <div class="price price-M color-penneyred">
                                        <span class="mrg-rght-XS">
                                            <sup class="sup-text-S">$</sup>33<sup class="sup-text-S">99</sup>
                                        </span>
                                        <span class="price price-note color-penneyred clearance-S">clearance</span>
                                    </div>
                                    <div class="price price-note-M std-txt mrg-top-XS">
                                        <span class="mrg-rght-S">was $74   </span>
                                        <span> 41% off</span>
                                    </div>
                                    <div class="product-card-name std-txt std-txt-S color-nightsky">Home Expressions™ Solid Bath Towels</div>
                                    <div class="star-preview-col review-star mrg-top-XS">
                                        <ul class="star-ratings-S">
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-half">
                                                <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                            </li>
                                            <li class="star-ratings star-rating-empty">
                                                <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings">
                                                <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="sm12 columns">
                        <h2><strong>Small Gallery Panes</strong></h2>
                        <hr />
                        <div class="product-card-wrapper mrg-btm-M">
                            <a href="/#/page-layouts/pdp">
                                <div class="product-card product-card-pane-S">
                                    <div class="product-card-inner">
                                        <div class="flag flag-info std-txt std-txt-XS">NEW</div>
                                        <div className="like-icon">
                                            <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                            <div className="tooltip tooltip-single tooltip-top-right">
                                                <span className="tooltip-content">Favorite</span>
                                            </div>
                                        </div>
                                        <div class="product-card-image">
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="https://s7d4.scene7.com/is/image/JCPenney/DP0209201717114233M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="color-swatches-block">
                                        <div>
                                            <div class="color-swatches-small">
                                                <ul class="list-product-colors-container">
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch list-color-swatch-active"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li class="swatches-list-link"><a href="/#/page-layouts/pdp" class="std-txt std-txt-S color-nightsky">+23</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="promo-lbl promo-lbl-XXS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                    <span class="title title-XS from-label-S">from</span>
                                    <div class="price price-S flag flag-price"><sup class="sup-text-S">$</sup>29<sup class="sup-text-S">99</sup></div>
                                    <span class="price price-note color-penneyred after-coupon">after coupon</span>
                                    <div class="price price-note std-txt mrg-top-XS">
                                        <span class="mrg-rght-S">was $74.99 - $99.99</span>
                                    </div>
                                    <div class="product-card-name std-txt std-txt-XS color-nightsky">JCPenney Home™ Solid Bath Towels</div>
                                    <div class="star-preview-col review-star mrg-top-XS">
                                        <ul class="star-ratings-S">
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-half">
                                                <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                            </li>
                                            <li class="star-ratings star-rating-empty">
                                                <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings">
                                                <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                            <a href="/#/page-layouts/pdp">
                                <div class="product-card product-card-pane-S">
                                    <div class="product-card-inner">
                                        <div className="like-icon">
                                            <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                            <div className="tooltip tooltip-single tooltip-top-right">
                                                <span className="tooltip-content">Favorite</span>
                                            </div>
                                        </div>
                                        <div class="product-card-image">
                                            <div class="product-card-thumbnail">
                                                <a href="/#/page-layouts/pdp"><img src="https://s7d9.scene7.com/is/image/JCPenney/DP0602201717294641M?wid=450&amp;hei=450&amp;op_sharpen=1" alt="Samsung ENERGY STAR" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="color-swatches-block">
                                        <div>
                                            <div class="color-swatches-small">
                                                <ul class="list-product-colors-container">
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch list-color-swatch-active"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li><a href="/#/page-layouts/pdp" class="list-color-swatch"></a></li>
                                                    <li class="swatches-list-link"><a href="/#/page-layouts/pdp" class="std-txt std-txt-S color-nightsky">+23</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="promo-lbl promo-lbl-XXS mrg-btm-XS color-penneyred">BLACK FRIDAY DEAL!</div>
                                    <div class="price price-S color-penneyred"><span class="title title-XS from-label-S">packages from</span><sup class="sup-text-S">$</sup>9,999<sup class="sup-text-S">99</sup>
                                    </div>
                                    <div class="price price-note std-txt mrg-top-XS">
                                        <span class="mrg-rght-S">was $9,999 - $9,999</span>
                                    </div>
                                    <div class="product-card-name std-txt std-txt-XS color-nightsky">JCPenney Home™ Solid Bath Towels</div>
                                    <div class="star-preview-col review-star mrg-top-XS">
                                        <ul class="star-ratings-S">
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-full">
                                                <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings start-ratings-half">
                                                <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                            </li>
                                            <li class="star-ratings star-rating-empty">
                                                <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                            </li>
                                            <li class="star-ratings">
                                                <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="sm12 columns">
                        <h2><strong>Gallery List View</strong></h2>
                        <hr />
                        <div class="mrg-btm-M">
                            <a href="/#/page-layouts/pdp">
                                <div class="product-card product-card-list-view">
                                    <div class="product-card-thumbnail">
                                        <a href="/#/page-layouts/pdp"><img src="https://s7d4.scene7.com/is/image/JCPenney/DP0209201717114233M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" alt="Samsung ENERGY STAR" /></a>
                                        <div class="flag flag-info flag-S std-txt std-txt-XXS">JCP Only</div>
                                        <div className="like-icon">
                                            <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                            <div className="tooltip tooltip-single tooltip-top-right">
                                                <span className="tooltip-content">Favorite</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-card-details">
                                        <div class="price price-S color-penneyred"><span class="title title-XS from-label-S">packages from</span><sup class="sup-text-S">$</sup>9,999<sup class="sup-text-S">99</sup>
                                        </div>
                                        <div class="price price-note std-txt mrg-top-XS">
                                            <span class="mrg-rght-S">was $9,999 - $9,999</span>
                                        </div>
                                        <div class="product-card-name std-txt std-txt-XS color-nightsky">Home Expressions™ Solid Bath Towels</div>
                                        <div class="star-preview-col review-star mrg-top-XS">
                                            <ul class="star-ratings-S">
                                                <li class="star-ratings start-ratings-full">
                                                    <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                </li>
                                                <li class="star-ratings start-ratings-full">
                                                    <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                </li>
                                                <li class="star-ratings start-ratings-full">
                                                    <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                </li>
                                                <li class="star-ratings start-ratings-half">
                                                    <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                </li>
                                                <li class="star-ratings star-rating-empty">
                                                    <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                </li>
                                                <li class="star-ratings">
                                                    <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/#/page-layouts/pdp">
                                <div class="product-card product-card-list-view">
                                    <div class="product-card-thumbnail">
                                        <a href="/#/page-layouts/pdp"><img src="/images/design-system/fpo/product-cards/product-card-recommendations-3.jpg" alt="Samsung ENERGY STAR" /></a>
                                        <div className="like-icon">
                                            <span className="icon heart" dangerouslySetInnerHTML={{ __html: heartfillImage }} />
                                            <div className="tooltip tooltip-single tooltip-top-right">
                                                <span className="tooltip-content">Favorite</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-card-details">
                                        <span class="title title-XS from-label-S">from</span>
                                        <div class="price price-S flag flag-price"><sup class="sup-text-S">$</sup>29<sup class="sup-text-S">99</sup></div>
                                        <span class="price price-note color-penneyred after-coupon">after coupon</span>
                                        <div class="price price-note std-txt mrg-top-XS">
                                            <span class="mrg-rght-S">was $74.99 - $99.99</span>
                                        </div>
                                        <div class="product-card-name std-txt std-txt-XS color-nightsky">Home Expressions™ Solid Bath Towels</div>
                                        <div class="star-preview-col review-star mrg-top-XS">
                                            <ul class="star-ratings-S">
                                                <li class="star-ratings start-ratings-full">
                                                    <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                </li>
                                                <li class="star-ratings start-ratings-full">
                                                    <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                </li>
                                                <li class="star-ratings start-ratings-full">
                                                    <span class="icon " dangerouslySetInnerHTML={{ __html: starImage }} />
                                                </li>
                                                <li class="star-ratings start-ratings-half">
                                                    <span class="icon" dangerouslySetInnerHTML={{ __html: starhalfImage }} />
                                                </li>
                                                <li class="star-ratings star-rating-empty">
                                                    <span class="icon color-concrete-svg" dangerouslySetInnerHTML={{ __html: starImage }} />
                                                </li>
                                                <li class="star-ratings">
                                                    <a href="/#/page-layouts/pdp" class="rating-count std-txt std-txt-S">99</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <RecommendationZone />
                </div>

                <div class="row">
                    <div class="sm12 columns">
                        <hr />
                        <p class="S">Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                            <br /> Latest update: 04/05/2017
              </p>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ProductCards;