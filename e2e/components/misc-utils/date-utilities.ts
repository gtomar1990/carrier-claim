import * as moment from 'moment';
import { CommonPageConstants } from '../../page-objects/pages/common/common-page.constants';

export class DateUtils {

    /**
     * THis function add value in date like add 1 in years
     * @param date : date value
     * @param type : its type like date, month years, minutes, second
     * @param number : number how much we want to add
     */
    static add(date: any, dateEl: String, value: number, formate = CommonPageConstants.DateConstant.FullFormat) {

        //const formate = CommonPageConstants.DateConstant.FullFormat;
        let now;
        switch (dateEl) {
            case CommonPageConstants.DateConstant.Years:
                now = moment(date).add('years', value).format(formate);
                break;
            case CommonPageConstants.DateConstant.Months:
                now = moment(date).add('months', value).format(formate);
                break;
            case CommonPageConstants.DateConstant.Days:
                now = moment(date).add('days', value).format(formate);
                break;
            case CommonPageConstants.DateConstant.Hours:
                now = moment(date).add('hours', value).format(formate);
                break;
            case CommonPageConstants.DateConstant.Minutes:
                now = moment(date).add('minutes', value).format(formate);
                break;
        }
        return now;
    }

    /**
    * This function subtract value in date like minus 1 in years
    * @param formate: formate type of dates. Ex:
    * const formate = CommonPageConstants.DateConstant.DateSingleDigit;
    * @param date : date value
    * @param type : its type like date, month years, minutes, second
    * @param number : number how much we want to subtract
    */
    static subtract(formate: any, date: any, dateEl: String, value: number) {

        let now;
        switch (dateEl) {
            case CommonPageConstants.DateConstant.Years:
                now = moment(date).subtract('years', value).format(formate);
                break;
            case CommonPageConstants.DateConstant.Months:
                now = moment(date).subtract('months', value).format(formate);
                break;
            case CommonPageConstants.DateConstant.Days:
                now = moment(date).subtract('days', value).format(formate);
                break;
            case CommonPageConstants.DateConstant.Hours:
                now = moment(date).subtract('hours', value).format(formate);
                break;
            case CommonPageConstants.DateConstant.Minutes:
                now = moment(date).subtract('minutes', value).format(formate);
                break;
        }
        return now;
    }

    /**
     * This method is to get the date in given format mm/dd/yyyy
     */
    static getCurrentDate() {
        return moment(new Date()).format(CommonPageConstants.DateConstant.DateFormat)
    }

    static getCurrentDateInGivenFormat(format: any) {
        return moment(new Date()).format(format)
    }
    /**
     * 
     * @param date1 
     * @param date2 
     * @param dateEl 
     */
    static diffDate(date1: any, date2: any, dateEl: any) {
        return moment(date1).diff(date2, dateEl);
    }

    /**
     * 
     * @param date : date 
     * @param formate : fromate of date
     */
    static dateFormate(date: any, formate: any) {
        return moment(date).format(formate)
    }

    /**
     * check is date is valid format
     * @param date : date in string 
     */
    static isDateFormate(date: string) {
        return moment(date).isValid();
    }

    static compareDate(date1: any, date2: any) {
        if (moment(date1) > moment(date2)) {
            return true;
        }
        else {
            return false
        }
    }

    static async getDateFromStringArray(array: any[]) {
        let dateArray: string[] = [];
        await array.forEach(async function (element) {
            var date = await element.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g)
            await dateArray.push(date.toString())
        });
        return dateArray
    }

}
