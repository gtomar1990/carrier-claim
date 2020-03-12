import { browser } from "protractor";
import { PageHelper } from "../html/page-helper";
var fs = require('fs');

export class FileUtils {

  /**
   * Verify file downloaded in folder
   * @param filePath file path with file name
   */
  static async verifyFileDownload(filePath: string) {
    console.log(filePath);
    await browser.driver.wait(async () => {
      return await fs.existsSync(filePath);
    }, PageHelper.timeout.xl).then(async () => {
      console.log("Getting the ERROR while downloading file as file is not downloaded.");
    });
  }

  static async verifyFile(fileName : string) {
    if ((await browser.getCapabilities()).get('browserName') === 'chrome') {
      await browser.driver.get('chrome://downloads/');
      const items = await browser.executeScript('return downloads.Manager.get().items_') as any[];
      // expect(items.length).toBe(1);
      console.log(items)
      expect(items[0].fileName).toContain(fileName);
    }
  }
  static async getDowloadFileName(fileName: string) {
    if ((await browser.getCapabilities()).get('browserName') === 'chrome') {
      await browser.driver.get('chrome://downloads/');
      const items = await browser.executeScript('return downloads.Manager.get().items_') as any[];
      // expect(items.length).toBe(1);
      // console.log(items)
      var filename = items[0].fileName
      console.log(items[0])
      return filename
    }
  }
}
