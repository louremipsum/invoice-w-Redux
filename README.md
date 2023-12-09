# Invoice Generator with React-redux

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![icons](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.

## Live Demo

//url to be made

### Screenshots

### Installation

```bash
git clone https://github.com/louremipsum/invoice-generator

npm install

npm start / npm run build
```

### To-Do

[ ] /create page: empty the state of the whole page
[ ] /create page: fix->the first item is not editable for some reason
[ ] /create page: give a notification that a new note is created and close the model
[ ] /home page: fix the style and border of notes
[ ] /home page: show the modal for view invoice on clicking on any small note and from there we can download(nothing to add) or
we can edit-> which will take us to already filled out form of AddInvoice(with Edit heading?) and we can edit and save again
pitfall: there might be a chance that the old and new(edited ver.) both are present in the invoiceList due to the implementation of `uuiV4` function so will have to see to that
[ ] /home page: add a duplicate note option.
