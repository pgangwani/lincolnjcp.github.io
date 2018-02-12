import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import ExpandCollapse from '../expand-collapse/expand-collapse'
import Wells from '../wells/wells';
import RecommendationZone from '../recommendation-zone/recommendation-zone';
import Carousel from '../carousel/carousel'



class Pdp extends Component {

    componentDidMount() {
        (function () {
          var d = document,
            accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
            setAria,
            setAccordionAria,
            switchAccordion,
            touchSupported = ('ontouchstart' in window),
            pointerSupported = ('pointerdown' in window);
    
          var skipClickDelay = function (e) {
            e.preventDefault();
            e.target.click();
          }
    
          var setAriaAttr = function (el, ariaType, newProperty) {
            el.setAttribute(ariaType, newProperty);
          };
          setAccordionAria = function (el1, el2, expanded) {
            switch (expanded) {
              case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
              case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
              default:
                break;
            }
          };
          //function
          switchAccordion = function (e) {
            console.log("triggered");
            e.preventDefault();
            var thisAnswer = e.target.parentNode.nextElementSibling;
            var thisQuestion = e.target;
            if (thisAnswer.classList.contains('is-collapsed')) {
              setAccordionAria(thisQuestion, thisAnswer, 'true');
            } else {
              setAccordionAria(thisQuestion, thisAnswer, 'false');
            }
            thisQuestion.classList.toggle('is-collapsed');
            thisQuestion.classList.toggle('is-expanded');
            thisAnswer.classList.toggle('is-collapsed');
            thisAnswer.classList.toggle('is-expanded');
    
            thisAnswer.classList.toggle('animateIn');
          };
          for (var i = 0, len = accordionToggles.length; i < len; i++) {
            if (touchSupported) {
              accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
            }
            if (pointerSupported) {
              accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
            }
            accordionToggles[i].addEventListener('click', switchAccordion, false);
          }
        })();
      }
    render() {
        return (
            <div>
                <div className="row">
                    <Header />  
                    <div className="product-title-block">

                    </div>                  
                    <Carousel />
                    <ExpandCollapse />
                    <RecommendationZone />
                    <RecommendationZone />
                    <RecommendationZone />
                    <RecommendationZone />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Pdp;