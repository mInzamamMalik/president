/* eslint-disable  func-names */
/* eslint-disable  dot-notation */
/* eslint-disable  new-cap */
/* eslint quote-props: ['error', 'consistent']*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports en-US lauguage.
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-trivia
 **/

'use strict';

const Alexa = require('alexa-sdk');
const APP_ID = "amzn1.ask.skill.e7a0bc69-e313-46a9-9186-87a6091a991f"; // TODO replace with your app ID (OPTIONAL)

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least ANSWER_COUNT answers, any extras will be shuffled in.
 */



/**
 * Get the answers for a given question, and place the correct answer at the spot marked by the
 * correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
 * only ANSWER_COUNT will be selected.
 * */


var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'come_on_stage': function () {
        this.emit('SayHello');
    },
    'MyNameIsIntent': function () {
        this.emit('SayHelloName');
    },
    'SayHello': function () {
        this.response.speak(`<s>
    <emphasis level="reduced">
        Thank you very much Inzamam
    </emphasis>
         
    <break strength="x-weak"/>
    for inviting me
    <break strength="x-weak"/>
    <emphasis level="reduced"> in this historical event </emphasis>
     of 
    <emphasis level="reduced"> Artificial intelligence </emphasis>
</s>
<s>My name is Alexa</s>
<s>and I am the future of the Artificial intelligence</s> 
                
    now
    <break strength="x-strong"/>
    in you big hands i would like to invite
    <break strength="x-weak"/>
    the honorable
    <break strength="x-weak"/>
    and respected
    <break strength="x-weak"/>
    president of islamic republic of Pakistan
    <break strength="x-strong"/>
    
    <prosody volume="loud">
        Mr. 
        <emphasis level="reduced">Arif alvi</emphasis> 
    </prosody>
    
    <prosody volume="x-loud">
        Sir
    </prosody>
    
    <prosody volume="x-loud">
        please come on the stage and share your thoughts with us   
    </prosody>
    Thank you
`)
            
        // .cardRenderer('hello world', 'hello world');
        this.emit(':responseReady');
    },
    
    'SayHelloName': function () {
        var name = this.event.request.intent.slots.name.value;
        this.response.speak('Hello ' + name)
            .cardRenderer('hello world', 'hello ' + name);
        this.emit(':responseReady');
    },
    'SessionEndedRequest' : function() {
        console.log('Session ended with reason: ' + this.event.request.reason);
    },
    'AMAZON.StopIntent' : function() {
        this.response.speak('Bye');
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent' : function() {
        this.response.speak("You can try: 'alexa, hello world' or 'alexa, ask hello world my" +
            " name is awesome Aaron'");
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent' : function() {
        this.response.speak('Bye');
        this.emit(':responseReady');
    },
    'Unhandled' : function() {
        this.response.speak("Sorry, I didn't get that. You can try: 'alexa, hello world'" +
            " or 'alexa, ask hello world my name is awesome Aaron'");
    }
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};
