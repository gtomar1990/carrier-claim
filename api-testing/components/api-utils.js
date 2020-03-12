var frisby = require("frisby")

module.exports = class APIHelper {
    /**
     * @description
     * @param {*} URL
     */
    static getRequest(URL) {
        return frisby.get(URL)
    }

    /**
     * @description
     * @param {*} URL
     * @param  {...any} args 
     */
    static postRequest(URL) {
        return frisby.fetch(URL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                id: '1',
                name: 'wefaw'
            }
        })
    }

    /**
     * 
     * @param {*} URL 
     */
    static delRequest(URL) {
        return frisby.del(URL)
    }

}