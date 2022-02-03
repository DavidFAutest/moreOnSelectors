const Page = require("./page");

class FormPage extends Page {
     
     //define selectors using getter methods
     
     // Header Selector
     get header() {
          return $('h1=Form Fields'); //uses Element with certain text selector
     }

     // Email Selector
     get inputEmail() {
          return $("#mail"); //uses CSS query selector
     }

     // Error text
    get errorText() {
        return $('.error-text')
    }
     
     // Submit Button Selector
     get submit() {
          return $('button=Register'); //uses Element with certain text selector
     }
     /**
      * a method to encapsule automation code to interact with the page
      * e.g. to login using username and password
      */
     async email() {
          await this.inputEmail.setValue(input);
          await this.submit.click();
     }

     /**
      * overwrite specific options to adapt it to page object
      */
     open() {
          return super.open('');
     }
     get interest() {
          return $('#title option:nth-child(3)'); // //uses CSS query selector (class)
     }
}

module.exports = new FormPage();
