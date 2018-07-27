import {protractor,element,browser,$,$$,By,by,wrapDriver,ExpectedConditions} from 'protractor';

var convertExcel = require('excel-as-json').processFile;
convertExcel('C:/Users/adalakoti/workspace/SNAP/SNAP_TestCases.xlsx', 'C:/Users/adalakoti/workspace/SNAP/json/OR.json');