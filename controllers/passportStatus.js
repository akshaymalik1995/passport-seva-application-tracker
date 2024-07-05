import { getPage, getPassportStatus } from "../utils/index.js";

export default async (req, res) => {
    const data = req.body

    try {
        const $ = await getPage(data);
        const table = await getPassportStatus($);
        if (table["File Number"]) {
            res.send({
                status: "success",
                data: table

            })
        } else {
            res.status(400).send({
                status: "error",
                message: "Invalid inputs"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "error",
            message: "Internal server error"

        })
    }
}