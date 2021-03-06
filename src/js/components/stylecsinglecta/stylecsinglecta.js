import React, { Component } from 'react';
import $ from 'jquery';
// const plusImage = require('!!raw-loader?es5=1!../../../images/global/icons/nav/plus.svg');

class styleCSingleCTA extends Component {

  componentDidMount() {


    //Preview top nav without design system wrapper
    $("#HideDesignSystem").unbind('click').on('click', function (event) {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        $(this).text('Show Design System Wrapper');
        $(".design-system-nav-col").css('display', 'none');
        $(".design-system-content").css('padding', 0);
        $(".design-system-inner-content").css('padding', 0);
        $(".design-system-enable-hide").css('display', 'none');
        $(".design-system-nav-mobile").css('display', 'none');
        $(".design-system-wrap").css('margin', 0);
      } else {
        $(this).text('Hide Design System Wrapper');
        $(".design-system-nav-col").removeAttr('style');
        $(".design-system-content").removeAttr('style');
        $(".design-system-inner-content").removeAttr('style');
        $(".design-system-enable-hide").removeAttr('style');
        $(".design-system-nav-mobile").removeAttr('style');
        $(".design-system-wrap").removeAttr('style');
      }
      console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
    });




  }

  render() {
    return (
      <div class="stylec">
        {/* <p class="S"><br />
          <a href="javascript:void(0);" id="HideDesignSystem">Hide Design System Wrapper</a>
        </p> */}
        <div class="stylec stylec-single">
          <div class="banner-container">
            <div class="sm12 lg12 md12 xl12 xxl12 nopad">
              <div class="sm12 lg6 md6 xl6 xxl6 nopad">
                <a class="banner-image fl-left" href="javascript:void(0)">
                  <img src="/images/design-system/image-story-1.png" alt="productImg" />
                </a>
              </div>
              <div class="sm12 lg6 md6 xl6 xxl6 nopad-sm mrg-top-XL pad-lft-L">
                <h1 class="promo-title promo-lbl mrg-top-S mrg-XXS-at-S">25% OFF</h1>
                <h4 class="promo-content std-txt mrg-XS mrg-XS-at-M mrg-XS-at-XS mrg-XS-at-S">Nike for the family</h4>
                <p class="std-txt std-txt-XS nopad">reg $20 - $70 <a href="#" class="mrg-lft-S">see details</a></p>
                <ul class="promo-links mrg-top-M std-txt std-txt-M std-txt-XS-at-S">
                  <li><a href="javascript:void(0)">Shop All</a></li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default styleCSingleCTA;