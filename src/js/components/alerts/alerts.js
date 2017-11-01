import React, { Component } from 'react';
import $ from 'jquery';
import CodeGenerator from '../../containers/CodeGenerator.js';

class Alerts extends Component {

  render() {
    return (
      <div>
      
    <div className="row">
        <div className="small-12 columns">
            <h1>Alerts &amp; Messaging</h1>
            <h2>Nulla vitae elit libero, a pharetra augue nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
    </div>
    <div className="row" id="code-generator">
        <div className="small-12 columns">
            <hr />
            <h3>Code Generator</h3>


            <CodeGenerator 
                formFields={
                    [
                        
                        { 
                            fieldType: 'select',
                            displayLabel: 'Status',
                            name: 'code_alert_status',
                            value: [
                                {
                                    text: 'Neutral',
                                    value: 'msg-neutral'
                                },
                                {
                                    text: 'Success',
                                    value: 'msg-success'
                                },
                                {
                                    text: 'Warning',
                                    value: 'msg-warning'
                                },
                                {
                                    text: 'Error',
                                    value: 'msg-error'
                                }

                            ],
                            defaultSelect: 'msg-success'
                        },
                        { 
                            fieldType: 'checkbox',
                            displayLabel: 'Full Width',
                            name: 'code_alert_width',
                            value: 'btn-full',
                            defaultSelect: 'true'
                        },
                        { 
                            fieldType: 'checkbox',
                            displayLabel: 'Dismissable',
                            name: 'code_alert_dismissable',
                            value: '[[format_br]]<[[format_tag_start]]button[[format_tag_end]] [[format_attribute_start]]type="[[format_attribute_end]][[format_tag_value_start]]button[[format_tag_value_end]][[format_attribute_start]]" class="[[format_attribute_end]][[format_tag_value_start]]msg-close[[format_tag_value_end]][[format_attribute_start]]"[[format_attribute_end]]></[[format_tag_start]]button[[format_tag_end]]>',
                            defaultSelect: 'true'
                        }
                    ]}
                htmlPattern="<[[format_tag_start]]div[[format_tag_end]] [[format_attribute_start]]
                            class=&quot;[[format_attribute_end]][[format_tag_value_start]]msg mrg-M [[code_alert_status]] [[format_tag_value_end]][[format_attribute_start]]&quot;[[format_attribute_end]]>
                            [[format_tab_start]]
                                This is an alert message.[[code_alert_dismissable]]
                            [[format_tab_end]]
                        <[[format_tag_start]]/div[[format_tag_end]]>"

              />
        </div>
    </div>


    <div className="row" id="when-to-use">
        <div className="small-12 columns">
            <h3>When to Use</h3>
            <p class=" mrg-L">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor don ullamco nulla non metus auctor fringilla. </p>
            <div class="msg msg-success mrg-M">Success! Item added to cart.</div>
            <div class="msg msg-error mrg-M">Please select a size.</div>

            <h5>Best Practices</h5>
            <ul>
                <li>Aenean lacinia bibendum nulla sed consectetur</li>
                <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consec</li>
            </ul>
        </div>
    </div>
    <div className="row" id="appearance">
        <div className="small-12 columns">
            <hr />
            <h3>Appearance</h3>
            <p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <div className="row">
                <div className="small-12 medium-5 large-4 columns alert-preview-col">
                    <div class="msg msg-success mrg-M">Success alert. <a href="javascript:void();">Text Link</a></div>
                    <div class="msg msg-success mrg-M">Example to display a longer alert message with a full paragraph of content.</div>
                </div>
                <div className="small-12 medium-7 large-8 columns">
                    <h5 className="button-title">Success</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>
            <div className="row">
                <div className="small-12 medium-5 large-4 columns alert-preview-col">
                    <div class="msg msg-error mrg-M">Error alert.</div>
                    <div class="msg msg-error mrg-M">Example to display a longer alert message with a full paragraph of content.</div>
                </div>
                <div className="small-12 medium-7 large-8 columns">
                    <h5 className="button-title">Error</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
            </div>
          
        </div>
    </div>
    <div className="row" id="content-guidelines">
        <div className="small-12 columns">
            <hr />
            <h3>Content Guidelines</h3>
            <p className="mrg-L">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>

            <h5>How to write effective alerts:</h5>
            <ul>
                <li>Aenean lacinia bibendum nulla sed consectetur</li>
                <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
                <li>Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consec</li>
            </ul>
        </div>
    </div>
    <div className="row" id="related-content">
        <div className="small-12 columns">
            <hr />
            <h3>Related Content</h3>
            <ul>
                <li><a href="javascript:void();">Form Fields</a></li>
            </ul>
        </div>
    </div>
    <div className="row created-by">
        <div className="small-12 columns">
            <hr />
            <p>Created by: <strong>Tony Stark</strong> and <strong>Bruce Banner</strong>
                <br /> Latest update: 04/05/2017</p>
        </div>
    </div>
</div>
    
    );
  }
}

export default Alerts;