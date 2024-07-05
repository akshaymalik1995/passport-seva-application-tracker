
import axios from "axios";
import https from "https";
import crypto from "crypto";
import cheerio from "cheerio";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT
});


/**
 * Retrieves the page content from the given URL using a POST request with the provided data.
 * @param {Object} data - The data to be sent in the POST request.
 * @returns {Object} - The parsed HTML content of the response.
 */
export async function getPage(data) {
    //     data = {
    //         "fileNo": "",
    //         "optStatus": "Application_Status",
    //         "applDob": "",
    //    }

    const url = "https://passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusForFileNoNew"
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    }
    const response = await axios.post(url, data, { httpsAgent, headers });
    const html = response.data;

    const $ = cheerio.load(html);
    return $;
}


/**
 * Retrieves the passport status from the provided jQuery object.
 * @param {Object} $ - The jQuery object.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the passport status data.
 */
export async function getPassportStatus($) {
    // Get div with class block_right_inner
    const div = $(".block_right_inner")
    // // Get table inside div
    const table = div.find("table").find("table")
    // console.log(table.html())
    // Get all rows with no id

    const rows = table.find("tr").not("[id]")

    const data = {}

    // Get all cells in each row
    rows.map((i, row) => {
        const cells = $(row).find("td")
        const key = $(cells[0]).text().trim()
        const value = $(cells[1]).text().trim()
        data[key] = value
    })
    return data
}