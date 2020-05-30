import { FormControl } from '@angular/forms'

//restrictedWords is a custom validator that checks to see if a restricted word is entered.
export function restrictedWords(words: any[]){
  return (control: FormControl): {[key: string]: any} =>{
    if(!words)
    {
      return null;
    }

    //invalidWords contains all of the invalid words found in the controls value.
    let invalidWords = words.map(word => control.value.includes(word) ? word : null).filter(word => word != null);

      //The key of the object named "restrictedWords" should match the name of the validator function it is in.
      return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(", ")} : null;
    }
}
