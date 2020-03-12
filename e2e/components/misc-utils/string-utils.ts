

export class StringUtils {

    /**
     * Get number from string
     * @param name 
     */
    static async getTestCaseId(name: string) {
        var string1 = name.split(":");
        return await Number(string1[0].trim())
    }

    static async getRandomString(length: any) {

        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(result)
        return await result;

    }

}
