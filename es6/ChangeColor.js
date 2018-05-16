export class ChangeColor{
  constructor(color){
    const sheetId = 'YOUR_SHEET_ID';
    const sheetName = 'シート1'
    this.parent_sheet = SpreadsheetApp.openById(sheetId);
    this.source_sheet = this.parent_sheet.getSheetByName(sheetName);
    this.color = color;
  }

  changeBackgroundColor(){
    let range = this.source_sheet.getRange('A1:A3');
    range.setBackgroundColor(this.color);
  }
}

