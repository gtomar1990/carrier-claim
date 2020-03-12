import { DateUtils } from "./date-utilities";
import { element, By } from "protractor";
import { ElementHelper } from "../html/element-helper";

export class ArrayUtils {

    /**
     * verify array values contains text
     * @param arrayValue 
     * @param value 
     */
    static assertArrayValuesContains(arrayValue: any[], value: string) {
        arrayValue.forEach(async function (text) {
            expect(text).toContain(value, text + " Value not contains " + value);
        });
    }

    /**
     * 
     * @param arrayValue Verify array value contains expected array list
     * @param expArray 
     */
    static assertArrayValuesContainsList(arrayValue: any[], expArray: any[]) {
        expArray.forEach(async function (text) {
            expect(arrayValue).toContain(text, "Array value does not match with expected list");
        })
    }

    /**
     * verify array values start with text
     * @param arrayValue 
     * @param value 
     */
    static assertArrayValuesStartWith(arrayValue: any[], value: string) {
        arrayValue.forEach(async function (text) {
            expect(text.startsWith(value)).toBe(true, text + " Value not start with " + value);
        });
    }


    /**
     * verify array values start with text
     * @param arrayValue 
     * @param value 
     */
    static assertArrayValuesEndWith(arrayValue: any[], value: string) {
        arrayValue.forEach(async function (text) {
            expect(text.endsWith(value)).toBe(true, text + " Value not start with " + value);
        });
    }

    /**
    * verify array values equal to text
    * @param arrayValue 
    * @param value 
    */
    static assertArrayValuesEqual(arrayValue: any[], value: string) {
        arrayValue.forEach(async function (text) {
            expect(text).toEqual(value, text + " Value not contains " + value);
        });
    }

    /**
    * verify array values not equal to text
    * @param arrayValue 
    * @param value 
    */
    static assertArrayValuesNotEqual(arrayValue: any[], value: string) {
        arrayValue.forEach(async function (text) {
            expect(text).not.toEqual(value, text + " Value not contains " + value);
        });
    }

    /**
     * 
     * @param arrayValue 
     * @param value 
     */
    static assertValueNotInArray(arrayValue: any[], value: string) {
        //expect(value in arrayValue).toBe(false, value+" should not exist in array")
        expect(arrayValue.indexOf(value)).toBe(-1, value + " should not exist in array");
    }

    /**
    * 
    * @param arrayValue 
    * @param value 
    */
    static assertValueInArray(arrayValue: any[], value: string) {
        //expect(value in arrayValue).toBe(false, value+" should not exist in array")
        expect(arrayValue.indexOf(value)).toBeGreaterThan(0, value + " should not exist in array");
    }

    /**
    * verify array values contains text
    * @param arrayValue 
    * @param value 
    */
    static assertArrayValueNotContains(arrayValue: any[], value: string) {
        if (arrayValue.length < 1)
            expect(true).toEqual(false, "Array not contains any value")
        arrayValue.forEach(async function (text) {
            expect(text).not.toContain(value, text + " Value not contains " + value);
        });
    }

    /**
     * verify array values less than value
     * @param arrayValue  : this is integer array
     * @param value  : integre value
     */
    static lessThanValue(arrayValue: any[], value: number) {
        arrayValue.forEach(async function (text) {
            expect(+text).toBeLessThan(value, text + " Value not contains " + value);
        });
    }

    /**
     * verify array values greater than value
     * @param arrayValue  : this is integer array
     * @param value  : integre value
     */
    static greaterThanValue(arrayValue: any[], value: number) {
        arrayValue.forEach(async function (text) {
            expect(+text).toBeGreaterThan(value, text + " Value not contains " + value);
        });
    }

    /**
    * verify all  values of array contains blank
    * @param arrayValue 
    * @param value 
    */
    static assertAllValuesBlank(arrayValue: any[], value: string) {
        arrayValue.forEach(async function (text) {
            expect(text).toEqual(" ", "Array value" + text + " not null");
        });
    }

    /**
     * 
     * @param arrayValue
     */
    static toArrayLowerValues(arrayValue: any[]) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (text) {
            await updatedArray.push(text.toLowerCase())
        });
        return updatedArray;
    }


    /**
    * 
    * @param arrayValue
    */
    static toSubString(arrayValue: any[], num: number, num2: number) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (text) {
            await updatedArray.push(text.substring(num, num2).trim())
        });
        return updatedArray;
    }

    /**
    * 
    * @param arrayValue
    */
    static toString(arrayValue: any[]) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (text) {
            await updatedArray.push(text.toString())
        });
        return updatedArray;
    }
    /**
    * 
    * @param arrayValue
    */
    static toPadStart(arrayValue: any[], num: number, text: number) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (text) {
            await updatedArray.push(text.padStart(20, "abc"))
        });
        return updatedArray;
    }


    /* 
    * @param arrayValue
    */
    static toReplaceText(arrayValue: any[], str1: string, str2: string) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (text) {
            await updatedArray.push(text.replace(str1, str2))
        });
        return updatedArray;
    }

    /* 
   * @param arrayValue
   */
    static toTrim(arrayValue: any[]) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (text) {
            await updatedArray.push(text.trim())
        });
        return updatedArray;
    }

    /**
    * 
    * @param arrayValue
    */
    static toArrayUpperValues(arrayValue: any[]) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (text) {
            await updatedArray.push(text.toUpperCase())
        });
        return updatedArray;
    }

    /**
    * Return list of character by index from array list
    * @param arrayValue
    */
    static getListCharAt(arrayValue: any[], index: Number) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (text) {
            await updatedArray.push(text.charAt(index))
        });
        return updatedArray;
    }

    /**
     * Add text in all values of array and return updated list
     * @param arrayValue 
     * @param text 
     */
    static getListConcatText(arrayValue: any[], text: Number) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (value) {
            await updatedArray.push(value.concat(text))
        });
        return updatedArray;
    }

    /** 
     * @param arrayValue It return list of boolean values if array value end with
     * @param text 
     */
    static getListArrayValueEndWithText(arrayValue: any[], text: Number) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (value) {
            await updatedArray.push(String(value.endsWith(text)))
        });
        return updatedArray;
    }

    /** 
    * @param arrayValue It return list of boolean values if array include text
    * @param text 
    */
    static getListArrayValueIncludeText(arrayValue: any[], text: Number) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (value) {
            await updatedArray.push(String(value.includes(text)))
        });
        return updatedArray;
    }

    /** 
    * @param arrayValue It return list of boolean values if array value start with
    * @param text 
    */
    static getListArrayValuesStartWithText(arrayValue: any[], text: Number) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (value) {
            await updatedArray.push(String(value.startsWith(text)))
        });
        return updatedArray;
    }

    static getListOfUpdateDate(arrayValue: any[], dateEl: String, value: number) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (text) {
            await updatedArray.push(DateUtils.add(text, dateEl, value));
        });
        return updatedArray;
    }


    static getListDateDiff(arrayValue1: any[], arrayValue2: any[], dateEl: any) {
        let updatedArray: string[] = [];
        arrayValue1.forEach(async function (text, index) {

            await updatedArray.push(String(
                (DateUtils.diffDate(arrayValue1[index], arrayValue2[index], dateEl).toFixed(2))
            )
            );
        });
        return updatedArray;
    }

    /**
      * Add text in all values of array and return updated list
      * @param arrayValue 
      * @param text 
      */
    static getArrayRemovedComma(arrayValue: any[]) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (value) {
            await updatedArray.push(value.replace(/\,/g, ''))
        });
        return updatedArray;
    }

    /**
     * 
     * @param arrayValue 
     * @param value   
     * @param message1 
     * @param message2 
     */
    static toCheckConditionAndPrepareList(arrayValue: any[], text: string,
        message1: string, message2: string) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (value) {
            if (await value > text) {
                await updatedArray.push(message1)
            } else {
                await updatedArray.push(message2)
            }
        });
        return updatedArray;
    }
    /**
    * 
    * @param arrayValue 
    * @param value   
    * @param message1 
    * @param message2 
    */
    static toCheckConditionLessThanAndPrepareList(arrayValue: any[], text: string,
        message1: string, message2: string) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (value) {
            if (await value < text) {
                await updatedArray.push(message1)
            } else {
                await updatedArray.push(message2)
            }
        });
        return updatedArray;
    }

    /**
     * check array contains date in format DD/MM/YYYY
     * @param arrayValue 
     * @param text 
     */
    static checkArrayContainsDate(arrayValue: any[]) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (value) {
            await expect(await DateUtils.isDateFormate(value)).toBe(true, "String " + value + " is not in date format")
        });
        return updatedArray;
    }

    /** 
     * @param arrayValue 
     * @param text 
     * @param message1 
     * @param message2 
     */
    static checkDateGreaterAndPrepareList(arrayValue: any[], text: any,
        message1: string, message2: string) {
        let updatedArray: string[] = [];
        arrayValue.forEach(async function (date) {
            if (DateUtils.compareDate(date, text)) {
                await updatedArray.push(message1)
            } else {
                await updatedArray.push(message2)
            }
        });
        return updatedArray;
    }



    /** 
    * @param arrayValue 
    * @param text 
    * @param message1 
    * @param message2 
    */
    static checkIntValueConditionLessThanAndPrepareList(arrayValue: any[],
        value1: number, value2: number) {
        let updatedArray: String[] = [];
        arrayValue.forEach(async function (date) {
            if (date < value1) {
                await updatedArray.push(value1.toFixed(2))
            } else {
                await updatedArray.push(value2.toFixed(2))
            }
        });
        return updatedArray;
    }



    /** 
   * @param arrayValue 
   * @param text 
   * @param message1 
   * @param message2 
   */
    static verifyCustomColumnValueAsPerCondition(arrayValue: any[],
        condition: number, columnValue1: any[], columnValue2: any[]) {
        arrayValue.forEach(async function (value, index) {
            if (columnValue1[index] > condition) {
                expect(await parseInt(columnValue1[index])).toEqual(parseInt(value));
            } else {
                expect(await parseInt(columnValue2[index])).toEqual(parseInt(value));
            }
        });
    }

    /** 
     * @param arrayValue 
     * @param text 
     * @param message1 
     * @param message2 
     */
    static checkIntValueConditionThenPrepareList(customColumn: any[], columnValue: any[],
        value1: number, value2: number) {

        columnValue.forEach(async function (value, index) {
            if (value > value1) {
                expect(await parseInt(customColumn[index])).toEqual(value1);
            } else {
                expect(await parseInt(customColumn[index])).toEqual(value2);
            }
        });
    }

    /**
    * @description This method is used to get text from the provided list
    */
    static async getListText(locator: string) {
        let listText: string[] = [];
        await element.all(By.xpath(locator)).each(async function (element) {
            await element.getText().then(async function (text) {
                await listText.push(text)
            });
        });
        return listText;
    }

    /**
* @description This method is used to get text from the provided list
*/
    static async getListAttribute(locator: string, attribute: string) {
        let listText: string[] = [];
        await element.all(By.xpath(locator)).each(async function (element) {
            await element.getAttribute(attribute).then(async function (text) {
                listText.push(text)
            });
        });
        return listText;
    }

    /**
    *@description This method is used to get CSS value from the provided list
    */
    static async getListCss(locator: string, value: string) {
        let listText: string[] = [];
        await element.all(By.xpath(locator)).each(async function (element) {
            await element.getCssValue(value).then(async function (text) {
                listText.push(text)
            });
        });
        return listText;
    }

    /**
* @description This method is used to get text from the provided list including hidden text
*/
    static async getListWithHiddenText(locator: string) {
        let listText: string[] = [];
        await element.all(By.xpath(locator)).each(async function (element) {
            var text = await ElementHelper.getHiddenText(element);
            listText.push(text)
        });
        return listText;
    }

    /**
     *@description  Array sort with ignore case
     * @param arrayValues
     */
    static sortArrayIgnoreCase(arrayValues: any[]) {
        arrayValues.sort(function (x, y) {
            var a = String(x).toUpperCase();
            var b = String(y).toUpperCase();
            if (a > b)
                return 1
            if (a < b)
                return -1
            return 0;
        });
        return arrayValues
    }

    /**
    * @description Array reverse sort with ignore case
    * @param arrayValues
    */
    static reverseSortArrayIgnoreCase(arrayValues: any[]) {
        arrayValues.sort(function (x, y) {
            var a = String(x).toUpperCase();
            var b = String(y).toUpperCase();
            if (a < b)
                return 1
            if (a > b)
                return -1
            return 0;
        });
        return arrayValues
    }

    static async getListValue(locator: string) {
        let listText: string[] = [];
        await element.all(By.xpath(locator)).each(async function (element) {
            var text = await ElementHelper.getValue(element);
            //await element.getText().then(async function (text) {
            await listText.push(text)
        });
        return listText;
    }
}