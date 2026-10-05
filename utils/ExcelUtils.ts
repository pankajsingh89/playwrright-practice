import xlsx from 'xlsx'

export class ExcelUtils {

    static getDataFromExcel(filePath: string, sheetName: string) {

        try {

            const wb = xlsx.readFile(filePath)
            const sheet = wb.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data

        } catch (e) {
            console.log(e);

        }
    }
}