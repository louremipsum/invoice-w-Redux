# Invoice Manager with React-redux

Original Repo -> `https://github.com/johnuberbacher/invoice-generator`

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![icons](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) ![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

An Invoice Manager project built with React + Bootstrap + React-redux toolkit. Create a new Invoice and Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Manage a number of Invoices together. Edit, Delete, Copy an existing Invoice. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.

## Features

* Integrated Redux for centralized state management.
* View all the invoices on home page and manage them.
* Create new Invoice and Add itemized items, configure quantity, prices, tax rates and discounts
* View the full details of Invoice by clicking on View button.
* Edit the full details of an existing invoice by clicking on Edit button in Full detail Invoice modal.
* Copy the details of an existing invoice using copy icon.
* Delete an Invoice. A confirmation dialog box will be shown.
* Download an Invoice in PDF format with dynamically generated name using invoice number.
* The Invoices are saved into LocalStorage so you can close and open the website but invoices will still be there.

## Live Demo

`https://invoice-w-redux.vercel.app/`

### Screenshots

![image](https://github.com/johnuberbacher/invoice-generator/assets/72456774/9695fa37-5786-486a-86b0-20119561cbd8)
![image](https://github.com/johnuberbacher/invoice-generator/assets/72456774/cf4caf91-fd6f-43e8-9559-07188edd0465)
![image](https://github.com/johnuberbacher/invoice-generator/assets/72456774/9a9aaba4-4f62-4a76-a44d-d5d8d0d2d084)
![image](https://github.com/johnuberbacher/invoice-generator/assets/72456774/da05c178-7b8c-4da5-a8f2-f387a56e49ab)
![image](https://github.com/johnuberbacher/invoice-generator/assets/72456774/624c621b-d711-4b99-bad3-30094b6cb938)

### Installation

```bash
git clone https://github.com/louremipsum/invoice-w-Redux.git

npm install

npm start / npm run build
```
