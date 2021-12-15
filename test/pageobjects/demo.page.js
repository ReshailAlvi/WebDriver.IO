const Page = require('./page');

class demo extends Page{
  
    get searchBox(){
        return $('//input[@type="search"]')
    }
    
    get table(){
       return $('//table[@id="example"]');
    }

    get officeColumn(){
        return this.table.$$('//td[3]')
    }
   async typeInSearchBox(input){
        await this.searchBox.click();
        await this.searchBox.setValue(input);
    }

   async getColumnValues(){
       const officeNamesList = await this.officeColumn
       return officeNamesList
   }

    open(path) {
        return super.open(path);
    }
}

module.exports = new demo();
