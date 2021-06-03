<p align="center"><a rel="noopener noreferrer" href="" onClick="javascript:return false;"><br /><img src="https://img.shields.io/badge/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-%23228B22?style=for-the-badge&logo=" alt="React-Hebrew-DatePicke" style="max-width:100%;"><br /><img src="https://github.com/meir-gazit/React-Hebrew-DatePicker/raw/main/logo.svg" alt="Logo" style="max-width:100%;"><br /><kbd>You can customize React-Hebrew-DatePicker to (almost) any language</kbd><br /><img src="https://img.shields.io/badge/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-%23228B22?style=for-the-badge&logo=" alt="React-Hebrew-DatePicke" style="max-width:100%;"></a></p>

[![](https://img.shields.io/badge/-In%20general-%23FFD700?style=for-the-badge&logo=)](#)
-----------------------------------
As well known, react-dates library provides an easily internationalizable datepicker. You can customize some parts from the UI, and a lot more if you put your fingers under the hood. The react-dates library documentation exposes and explains some parts of the code functionality. In the last project I've worked on I had to use and twick it so the UI will be in Hebrew, a RTL language, so before I started I was googling on "change language of the react datepicker". However,  I couldn't find a working example to bootstrap, so now after I've finished it, I thought that maybe someone could use it. Please read carefully the following, including the important note at the end. you can see a live demo on <a href='https://codesandbox.io/s/priceless-microservice-b9k3z' target='_blank'>my code-sand-box</a>.

<p style='font-size: 15px; color: #00ff00; font-weight: 900; '>I'm encouraging you to explore the react-dates and the moment folders in order to get familiar with the code and styling - you can find some more things that you want to update.</p>

[![](https://img.shields.io/badge/The%20react%20dates%20library-%23FF1493?style=for-the-badge&logo=)](#)
-----------------------------------
There are some parts of the code you have to change in order to customize the datepicker to your language.

The first one lays in "[your project]/node_modules/react-dates/lib/components/DateRangePicker.js" (I needed the date-range-picker but I think you can tweak other pickers in this folder) that's on lines 71/72 there are 2 variables <kbd style='color: blue'>varNames: startDatePlaceholderText, endDatePlaceholderText</kbd> that will display in the input placeholder text, on the same file you can define the direction <kbd>rtl</kbd> or <kbd>ltr</kbd> its on line 111 <kbd>varName: isRTL - true/false</kbd>.

Second is the interface settings part in the "[your project]/node_modules/react-dates/lib/defaultPhrases.js", this file contain the datepicker shortcuts - when you click on the question mark at the bottom right corner of the gui the help window will appear, this file holds the help text - change the file to your language.

[![](https://img.shields.io/badge/The%20moment%20library-lime?style=for-the-badge&logo=)](#)
-----------------------------------
The react-dates relay on the moment library as its date format, that's mean you have to update some settings in it and you do it from your code, it's on the top of DatePicker.js file in the project's root, there you have to change date and time to your needed language. this part of code is taken from moment file "[your project]/node_modules/moment/min/locales.js". 

⚠️ [![](https://img.shields.io/badge/Important%20note-red?style=for-the-badge&logo=)](#) ⚠️
-----------------------------------
The code in this repository is provided with no guarantee, so you can do with it anything you want, at your own risk. It is most advised to test it in a debug env. before taking it to a production website. 


[![](https://img.shields.io/badge/install-blue?style=for-the-badge&logo=)](#)
-----------------------------------
after cloning the repo just run npm install or yarn add .

[![](https://img.shields.io/badge/Resources-%23008B8B?style=for-the-badge&logo=)](#)
-----------------------------------

<details>
<summary>npm</summary>

 * [`react-dates`](https://www.npmjs.com/package/react-dates)
 * [`moment`](https://www.npmjs.com/package/moment)
 
</details>
<details>
<summary>yarn</summary>
 
   * [`react-dates`](https://yarnpkg.com/package/react-dates)
   * [`moment`](https://yarnpkg.com/package/moment)
 
</details>
<details>
<summary>github</summary>
 
   * [`react-dates`](https://github.com/airbnb/react-dates) 
   * [`moment`](https://github.com/moment/moment) 

</details>
<details>
<summary>example - react-dates on airbnb story</summary>
 
   * [`react-dates`](http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default)  
 
</details>
<details>
<summary>embrace yourself</summary>
 
   * [`momentjs-docs`](https://momentjs.com/docs)
   * [`changing-locale`](https://momentjscom.readthedocs.io/en/latest/moment/06-i18n/01-changing-locale/#/customization)
 
</details>
<details>
<summary>google search results</summary>
 
   * [`google`](https://www.google.com/search?q=change+language+of+the+react+datepicker&oq=change+language+of+the+react+datepicker)
 
</details>

<br /><br />

 [![](https://img.shields.io/badge/Enjoy%20&%20have%20fun!-%23FFD700?style=for-the-badge&logo=)](#)

