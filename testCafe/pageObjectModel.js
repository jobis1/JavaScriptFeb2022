
import { Selector } from "testcafe";


const label = Selector('label');
class feature {
    constructor (text){
        this.label = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox');
        this.radio_windows = Selector('input[type=radio][value="Windows"]');
    }
}
class Page {
  constructor() {
    this.nameInput = Selector("#developer-name");
    this.checkbox1 = Selector('#remote-testing');
    this.featureList =[
        new feature('Support for testing on remote devices'),
        new feature('Re-using existing JavaScript code for testing'),
        new feature('Running tests in background and/or in parallel in multiple browsers'),
        new feature('Easy embedding into a Continuous integration system'),
        new feature('Advanced traffic and markup analysis')
    ]
  }
}

export default new Page();
