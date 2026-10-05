import xlsx from 'xlsx'

export class ExcelUtils {

  static getDataFromExcel(filePath: string, sheetName: string) {

    try {
      const wb = xlsx.readFile(filePath)

      const sheet = wb.Sheets[sheetName]

      if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found in ${filePath}`)
      }

      const data = xlsx.utils.sheet_to_json(sheet)

      return data

    } catch (e) {
      console.error('Error reading Excel file:', e)
      throw e
    }
  }
}