/*
 * © 2014 Per Johansson
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Based on code from Simple Currency Converter
 * https://addons.mozilla.org/en-US/firefox/addon/simple-currency-converter/
 *
 * Module pattern is used.
 */
const PriceRegexes = (function() {
    const makePriceRegexes = function(aRegex1, aRegex2) {
        aRegex1.AED = /(^|\s)(Dhs?|AED)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.AED = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(Dhs?|dirhams?|AED)(?!\w)/g;
        aRegex1.AFN = /(^|\s)(؋|افغانۍ|[aA]fs?|AFN)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.AFN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(\s؋\s?afs?|afs?|افغانۍ|afghanis?|AFN)(?!\w)/g;
        aRegex1.ALL = /(^|\s)(Lekë?|ALL)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.ALL = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)([lL]ekë?|ALL|L)(?!\w)/g;
        aRegex1.AMD = /(^|\s)(\u058F|Դրամ|drams?|драм|AMD)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.AMD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(\u058F|Դրամ|drams?|драм|AMD)(?!\w)/g;
        aRegex1.ANG = /(^|\s)(NAƒ|ƒ|NAf\.?|ANG)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.ANG = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(NAƒ|ƒ|NAf\.?|\sgulden|ANG)(?!\w)/g;
        aRegex1.AOA = /(^|\s)([KK]z|AOA)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.AOA = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(Kz|kwanzas?|AOA)(?!\w)/g;
        aRegex1.ARS = /(^|\s)(AR\$|\$|ARS)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.ARS = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(AR\$|\$|pesos?|ARS)(?!\w)/g;
        aRegex1.AUD = /(^|\s)(AUD\s?\$|AU\$|\$|AUD)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.AUD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(AUD\$|AU\$|\$|dollars?|AUD)(?!\w)/g;
        aRegex1.AWG = /(^|\s)(Afl\.?|AWG\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.AWG = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)([aA]fl\.?|\sflorin|AWG)(?!\w)/g;
        aRegex1.AZN = /(^|\s)(₼|AZN)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.AZN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(₼|manat|man\.?|AZN)(?!\w)/g;
        aRegex1.BAM = /(^|\s)(BAM|KM)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BAM = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(KM|BAM)(?!\w)/g;
        aRegex1.BBD = /(^|\s)(BBD|Bds\$?|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BBD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(\$|dollars?|BBD)(?!\w)/g;
        aRegex1.BDT = /(^|\s)(BDT|৳|Tk\.?|Taka)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BDT = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BDT|টাকা|Tk|taka)(?!\w)/g;
        aRegex1.BGN = /(^|\s)(BGN)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BGN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BGN|лв\.?|лева?|lv\.?|leva?)(?!\w)/g;
        aRegex1.BHD = /(^|\s)(BHD|دينار|BD\.?|\.د\.ب)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BHD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BHD|\.د\.ب|dinars?|دينار)(?!\w)/g;
        aRegex1.BIF = /(^|\s)(BIF)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BIF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BIF|Fbu?|francs|Fr)(?!\w)/g;
        aRegex1.BMD = /(^|\s)(BMD\$|BMD|BD\$?|Bd\$?|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BMD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BMD|\$|dollars?)(?!\w)/g;
        aRegex1.BND = /(^|\s)(BND\$|BND|B\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BND = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BND|\$|dollars?)(?!\w)/g;
        aRegex1.BOB = /(^|\s)(BOB|Bs\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BOB = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BOB|Bs\.?|Bolivianos?)(?!\w)/g;
        aRegex1.BOV = /(^|\s)(BOV)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BOV = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BOV|MVDOL)(?!\w)/g;
        aRegex1.BRL = /(^|\s)(BRL|R\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BRL = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BRL|R\$|real|reais)(?!\w)/g;
        aRegex1.BSD = /(^|\s)(BSD\$|BSD|B\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BSD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BSD|\$|dollars?)(?!\w)/g;
        aRegex1.BTN = /(^|\s)(BTN|Nu\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BTN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BTN|[nN]gultrum|དངུལ་ཀྲམ)(?!\w)/g;
        aRegex1.BWP = /(^|\s)(BWP|\sP)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BWP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BWP|pula)(?!\w)/g;
        aRegex1.BYR = /(^|\s)(BYR|Br\.?|бр\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BYR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(BYR|Br\.?|бр\.?|рубель|рублёў|рублей|rubles?)(?!\w)/g;
        aRegex1.BZD = /(^|\s)(BZD|BZ\s?\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.BZD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(\$|dollars?|BZD)(?!\w)/g;
        aRegex1.CAD = /(^|\s)(CAD\$|C\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CAD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CAD|\$|dollars?)(?!\w)/g;
        aRegex1.CDF = /(^|\s)(CDF|F[Cc])(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CDF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CDF|F[Cc]|francs)(?!\w)/g;
        aRegex1.CHE = /(^|\s)(CHE)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CHE = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CHE)(?!\w)/g;
        aRegex1.CHF = /(^|\s)(Fr\.|CHF)(\s?(\d{1,3}(('|,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CHF = /((\d{1,3}(('|,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(Fr\.|Franken|CHF)(?!\w)/g;
        aRegex1.CHW = /(^|\s)(CHW)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CHW = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CHW)(?!\w)/g;
        aRegex1.CLF = /(^|\s)(CLF|UF)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CLF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CLF|U\.?F\.?|Unidades de Fomentos)(?!\w)/g;
        aRegex1.CLP = /(^|\s)(CLP|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CLP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CLP|[Pp]esos?)(?!\w)/g;
        aRegex1.CNY = /(^|\s)(CNY|¥|[yY]u[áa]n|[rR]enminbi|RMB)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CNY = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CNY|¥|[yY]u[áa]n|[rR]enminbi|RMB)(?!\w)/g;
        aRegex1.COP = /(^|\s)(COP\s?\$|COP|COL\$|Col\$|CO\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.COP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(COP|pesos?)(?!\w)/g;
        aRegex1.COU = /(^|\s)(COU)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.COU = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(COU|UVR|Unidades de Valor Real)(?!\w)/g;
        aRegex1.CRC = /(^|\s)(CRC|₡)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CRC = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CRC|[cC]ol[oó]n(es))(?!\w)/g;
        aRegex1.CUC = /(^|\s)(CUC\s?\$|CUC|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CUC = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CUC|[pP]esos [cC]onvertibles)(?!\w)/g;
        aRegex1.CUP = /(^|\s)(CUP\s?\$|CUP|MN\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CUP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CUP|[pP]esos?)(?!\w)/g;
        aRegex1.CVE = /(^|\s)(CVE)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CVE = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CVE|\$|ESC(UDOS)?|Esc(udos)?|esc(udos)?)(?!\w)/g;
        aRegex1.CZK = /(^|\s)(CZK)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.CZK = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(CZK|Kč|koruna?y?)(?!\w)/g;
        aRegex1.DJF = /(^|\s)(DJF)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.DJF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(DJF|[Ff][Dd][Jj]|francs?)(?!\w)/g;
        aRegex1.DKK = /(^|\s)(kr|kr\.|dkr|DKK)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.DKK = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(mio\. kroner|million(er)? kroner|mia\. kroner|kroner|s?mia\. krónur|milliard(ir)? krónur?|s?mio\. krónur|millión(ir)? krónur?|miljón(ir)? krónur?|krónur?|kr|dkr|DKK|:-|,-)(?!\w)/g;
        aRegex1.DOP = /(^|\s)(DOP\s?\$|DOP|RD\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.DOP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(DOP|pesos?)(?!\w)/g;
        aRegex1.DZD = /(^|\s)(DZD|دج|DA)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.DZD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(DZD|دج|DA|dinars?)(?!\w)/g;
        aRegex1.EGP = /(^|\s)(EGP|L\.?E\.?\s?|E£|ج\.م)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.EGP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(EGP|L\.?E|EGL|E£|ج\.م|pounds?)(?!\w)/g;
        aRegex1.ERN = /(^|\s)(ERN|Nkf|Nfk|NFA|ናቕፋ)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.ERN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(ERN|Nkf|Nfk|ናቕፋ|[nN]akfa)(?!\w)/g;
        aRegex1.ETB = /(^|\s)(ETB|Br\.?|ብር|Birr)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.ETB = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(ETB|Br|ብር|[bB]irr)(?!\w)/g;
        aRegex1.EUR = /(^|\s)(€|euro|EUR)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.EUR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(€|euro|EUR)(?!\w)/g;
        aRegex1.FJD = /(^|\s)(FJD|FJ\$?|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.FJD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(FJD|\$|dollars?)(?!\w)/g;
        aRegex1.FKP = /(^|\s)(FKP|FK£|£)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.FKP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(FKP|pounds?)(?!\w)/g;
        aRegex1.GBP = /(^|\s)(GBP|£)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.GBP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(£|GBP|pounds?)(?!\w)/g;
        aRegex1.GEL = /(^|\s)(GEL)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.GEL = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(GEL|ლარი|lari)(?!\w)/g;
        aRegex1.GHS = /(^|\s)(GHS|GH₵|GH¢|GH[cC])(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.GHS = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(GHS|GH₵|cedi)(?!\w)/g;
        aRegex1.GIP = /(^|\s)(GIP|£)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.GIP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(GIP|pounds?)(?!\w)/g;
        aRegex1.GMD = /(^|\s)(GMD|D)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.GMD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(GMD|Dalasis?)(?!\w)/g;
        aRegex1.GNF = /(^|\s)(GNF)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.GNF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(GNF|FG|fg|francs?)(?!\w)/g;
        aRegex1.GTQ = /(^|\s)(GTQ|Q\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.GTQ = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(GTQ|Q|quetzal(es)?|q)(?!\w)/g;
        aRegex1.GYD = /(^|\s)(GYD|GYD\$|G\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.GYD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(GYD|\$|dollars?)(?!\w)/g;
        aRegex1.HKD = /(^|\s)(HKD|HK\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.HKD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(HKD|\$|dollars?)(?!\w)/g;
        aRegex1.HNL = /(^|\s)(HNL|L\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.HNL = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(HNL|lempiras?)(?!\w)/g;
        aRegex1.HRK = /(^|\s)(HRK)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.HRK = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(HRK|kn|kuna)(?!\w)/g;
        aRegex1.HTG = /(^|\s)(HTG)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.HTG = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(HTG|[gG]ourdes?|G)(?!\w)/g;
        aRegex1.HUF = /(^|\s)(HUF)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.HUF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(HUF|Ft|forint)(?!\w)/g;
        aRegex1.IDR = /(^|\s)(IDR|Rp\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.IDR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(IDR|[rR]upiah)(?!\w)/g;
        aRegex1.ILS = /(^|\s)(ILS|NIS|₪|שֶׁקֶל)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.ILS = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(ILS|NIS|₪|שֶׁקֶל|shekel)(?!\w)/g;
        aRegex1.INR = /(^|\s)(INR|₹|₨|Rs\.?|रु\.?|ரூ\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.INR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(INR|Rs\.?|rupees)(?!\w)/g;
        aRegex1.IQD = /(^|\s)(IQD|دينار|د\.ع)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.IQD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(IQD|دينار|د\.ع|dinars?)(?!\w)/g;
        aRegex1.IRR = /(^|\s)(IRR|ریال|﷼)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.IRR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(IRR|ریال|﷼|[rR]ials?)(?!\w)/g;
        aRegex1.ISK = /(^|\s)(kr|iskr|ISK)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.ISK = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(milljarð(ar?)?(ur)? króna|milljón(a)?(ir)?(um)? króna|þúsund króna?(ur)?|króna?(ur)?|kr|iskr|ISK|:-|,-)(?!\w)/g;
        aRegex1.JMD = /(^|\s)(JMD\$|JMD|J\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.JMD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(JMD|\$|dollars?)(?!\w)/g;
        aRegex1.JOD = /(^|\s)(JOD|دينار|JD\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.JOD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(JOD|JD|dinars?|دينار)(?!\w)/g;
        aRegex1.JPY = /(^|\s)(JPY|¥|￥|yen|円|圓)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.JPY = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(JPY|¥|￥|yen|円|圓)(?!\w)/g;
        aRegex1.KES = /(^|\s)(KES|Kshs?\.?|KSh|KSH)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.KES = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(KES|ksh|Shillings?)(?!\w)/g;
        aRegex1.KGS = /(^|\s)(KGS)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.KGS = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(KGS|soms?|сом)(?!\w)/g;
        aRegex1.KHR = /(^|\s)(KHR|៛|រៀល)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.KHR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(KHR|៛|រៀល|[rR]iels?)(?!\w)/g;
        aRegex1.KMF = /(^|\s)(KMF)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.KMF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(KMF|[fF][cC]|francs?)(?!\w)/g;
        aRegex1.KPW = /(^|\s)(KPW|₩|￦|원)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.KPW = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(KPW|₩|￦|원|wons?)(?!\w)/g;
        aRegex1.KRW = /(^|\s)(KRW|₩|￦|원)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.KRW = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(KRW|₩|￦|원|wons?)(?!\w)/g;
        aRegex1.KWD = /(^|\s)(KWD|دينار|K\.?D\.?\.?|\.د\.ب)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.KWD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(KWD|K\.?D\.?|\.د\.ب|dinars?|دينار)(?!\w)/g;
        aRegex1.KYD = /(^|\s)(KYD\$?|CI\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.KYD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(KYD)(?!\w)/g;
        aRegex1.KZT = /(^|\s)(KZT|₸)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.KZT = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(KZT|₸|tenge|теңге)(?!\w)/g;
        aRegex1.LAK = /(^|\s)(LAK|ກີ|₭N?|KIP)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.LAK = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(LAK|ກີ|₭N?|[kK]ip|KIP)(?!\w)/g;
        aRegex1.LBP = /(^|\s)(LBP|L\.L\.?|ل\.ل\.|ليرات)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.LBP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(LBP|Lebanese [pP]ounds?|L\.L\.?|ل\.ل\.|ليرات)(?!\w)/g;
        aRegex1.LKR = /(^|\s)(LKR|රු|₨\.?|SLRs\.?|Rs\.?|ரூபாய்\.?|රුපියල්\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.LKR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(LKR|Rs\.?|rupees|ரூபாய்)(?!\w)/g;
        aRegex1.LRD = /(^|\s)(LRD|LD\$?|L\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.LRD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(LRD|\$|dollars?)(?!\w)/g;
        aRegex1.LSL = /(^|\s)(LSL|Maloti|M|Loti)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.LSL = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(LSL|Maloti|LOTI)(?!\w)/g;
        aRegex1.LTL = /(^|\s)(LTL)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.LTL = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(LTL|Lt|litai|litų)(?!\w)/g;
        aRegex1.LYD = /(^|\s)(LYD|L\.?D\.?|ل\.د|دينار)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.LYD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(LYD|L\.?D\.?|ل\.د|دينار|dinars?)(?!\w)/g;
        aRegex1.MAD = /(^|\s)(MAD|د\.م\.|دراهم)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MAD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MAD|د\.م\.|دراهم|dhs|Dh\.?|dirhams?)(?!\w)/g;
        aRegex1.MDL = /(^|\s)(MDL)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MDL = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MDL|leu|lei|лей|леев)(?!\w)/g;
        aRegex1.MGA = /(^|\s)(MGA|Ar)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MGA = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MGA|[aA]riary|[aA]r)(?!\w)/g;
        aRegex1.MKD = /(^|\s)(MKD)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MKD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MKD|денари?|ден|den(ari?)?)(?!\w)/g;
        aRegex1.MMK = /(^|\s)(MMK|[kK][sS]|[kK]yat)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MMK = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MMK|[kK][sS]|[kK]yat|ကျပ်)(?!\w)/g;
        aRegex1.MNT = /(^|\s)(MNT|₮)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MNT = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MNT|₮|ᠲᠥᠭᠦᠷᠢᠭ|төгрөг|tögrögs?|tugrik)(?!\w)/g;
        aRegex1.MOP = /(^|\s)(MOP|MOP\s?\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MOP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MOP\$|澳門圓|澳门圆|[pP]atacas?)(?!\w)/g;
        aRegex1.MRO = /(^|\s)(MRO|أوقية)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MRO = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MRO|أوقية|ouguiya|um|UM)(?!\w)/g;
        aRegex1.MUR = /(^|\s)(MUR|₨\.?|[rR]s)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MUR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MUR|[rR]upees?|[rR]oupies?|[rR]s)(?!\w)/g;
        aRegex1.MVR = /(^|\s)(MVR|MRF\.?|MRf\.?|Mrf\.?|Rf\.?|RF\.?|Rufiyaa)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MVR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MVR|mrf|Rufiyaa)(?!\w)/g;
        aRegex1.MWK = /(^|\s)(MWK|MwK|Mwk|M?K)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MWK = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MWK|MK|[kK]wacha)(?!\w)/g;
        aRegex1.MXN = /(^|\s)(MXN|MEX\$|Mex\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MXN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MXN|MEX\$|Mex\$|[pP]esos?)(?!\w)/g;
        aRegex1.MXV = /(^|\s)(MXV)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MXV = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MXV|UDIS?|[uU]nidades de Inversión|UNIDADES DE INVERSIÓN)(?!\w)/g;
        aRegex1.MYR = /(^|\s)(MYR|RM)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MYR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MYR|[rR]inggit)(?!\w)/g;
        aRegex1.MZN = /(^|\s)(MZN)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.MZN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(MZN|MTn|[mM]etical|[mM]eticais)(?!\w)/g;
        aRegex1.NAD = /(^|\s)(NAD|N?\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.NAD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(NAD|dollars?)(?!\w)/g;
        aRegex1.NGN = /(^|\s)(NGN|₦|N)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.NGN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(NGN|[nN]aira)(?!\w)/g;
        aRegex1.NIO = /(^|\s)(NIO|C?\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.NIO = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(NIO|córdoba)(?!\w)/g;
        aRegex1.NOK = /(^|\s)(NOK|kr\.?|NKR\.?|NKr\.?|Nkr\.?|nkr\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.NOK = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(NOK|milliard(er)? kroner|million(er)? kroner|kroner|kr\.?|NKR|NKr|Nkr|nkr|:-|,-)(?!\w)/g;
        aRegex1.NPR = /(^|\s)(NPR|N?Rs\.?|रू)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.NPR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(NPR|rupees?|रूपैयाँ)(?!\w)/g;
        aRegex1.NZD = /(^|\s)(NZD|NZ\s?\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.NZD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(NZD|[dD]ollars?)(?!\w)/g;
        aRegex1.OMR = /(^|\s)(OMR|ر\.ع\.|ر\.ع|ريال‎|[rR]ials?|R\.?O\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.OMR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(OMR|ريال عماني|ر\.ع\.|ر\.ع|ريال‎|Omani [rR]ials?|[rR]ials?)(?!\w)/g;
        aRegex1.PAB = /(^|\s)(PAB|B\/\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.PAB = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(PAB|[bB]alboa)(?!\w)/g;
        aRegex1.PEN = /(^|\s)(PEN|S\/\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.PEN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(PEN|SOL|Sol(es)?|sol(es)?)(?!\w)/g;
        aRegex1.PGK = /(^|\s)(PGK|K)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.PGK = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(PGK|[kK]ina)(?!\w)/g;
        aRegex1.PHP = /(^|\s)(PHP|₱|PhP|Php|P)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.PHP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(PHP|[pP]esos)(?!\w)/g;
        aRegex1.PKR = /(^|\s)(PKR|₨\.?|Rs\.?|روپیہ)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.PKR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(PKR|[rR]upees?|روپیہ)(?!\w)/g;
        aRegex1.PLN = /(^|\s)(PLN|zł)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.PLN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(PLN|zł|złoty|zlotys?)(?!\w)/g;
        aRegex1.PYG = /(^|\s)(PYG|₲|Gs?\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.PYG = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(PYG|[gG]s\.?|guaraní(es)?)(?!\w)/g;
        aRegex1.QAR = /(^|\s)(QAR|QR\.?|ريال|ر\.ق)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.QAR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(QAR|[rR]iyals?|ريال|ر\.ق)(?!\w)/g;
        aRegex1.RON = /(^|\s)(RON)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.RON = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(RON|[lL]eu|[lL]ei)(?!\w)/g;
        aRegex1.RSD = /(^|\s)(RSD)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.RSD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(RSD|РСД|dinars?|din\.?|динара?|дин\.?)(?!\w)/g;
        aRegex1.RUB = /(^|\s)(RUB|₽)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.RUB = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(RUB|₽|рублей|рубль|руб\.?|[рP]\.|[rR]o?ubles?|rub\.?)(?!\w)/g;
        aRegex1.RWF = /(^|\s)(RWF|RwF|Rwf)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.RWF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(RWF|Rwf|Rwandan [fF]rancs?|[fF]rancs?)(?!\w)/g;
        aRegex1.SAR = /(^|\s)(SAR|SR|﷼|ريال|ر\.س)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SAR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SAR|SR|﷼|ريال|ر\.س|Saudi [rR]iyals?|[rR]iyals?)(?!\w)/g;
        aRegex1.SBD = /(^|\s)(SBD\.?\$?|SI\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SBD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SBD|\$|dollars?)(?!\w)/g;
        aRegex1.SCR = /(^|\s)(SCR|SR|Sr\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SCR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SCR|[rR]upees?|[rR]oupies?)(?!\w)/g;
        aRegex1.SDG = /(^|\s)(SDG|جنيه)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SDG = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SDG|جنيه|Sudanese [pP]ounds?|[pP]ounds?)(?!\w)/g;
        aRegex1.SEK = /(^|\s)(kr|skr|SEK)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,|:)\d{1,9})?)/g;
        aRegex2.SEK = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,|:)\d{1,9})?\s?)(öre|(svenska\s)?kronor|miljon(er)? kronor|miljard(er)? kronor|mnkr|mdkr|mkr|s?[kK]r|kSEK|MSEK|GSEK|SEK|:-|,-)(?!\w)/g;
        aRegex1.SGD = /(^|\s)(SGD\s?\$?|S?\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SGD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SGD|(Singapore)?\s?[dD]ollars?)(?!\w)/g;
        aRegex1.SHP = /(^|\s)(SHP|£)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SHP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SHP|pounds?)(?!\w)/g;
        aRegex1.SLL = /(^|\s)(SLL|L[eE]\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SLL = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SLL|[lL]eone)(?!\w)/g;
        aRegex1.SOS = /(^|\s)(SOS)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SOS = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SOS|Sh\.?\s?So\.?|[sS]hillings?)(?!\w)/g;
        aRegex1.SRD = /(^|\s)(SRD|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SRD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SRD|[dD]ollars?)(?!\w)/g;
        aRegex1.SSP = /(^|\s)(SSP)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SSP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SSP|pounds?)(?!\w)/g;
        aRegex1.STD = /(^|\s)(STD|Dbs?\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.STD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(STD|dbs|[dD]obra)(?!\w)/g;
        aRegex1.SVC = /(^|\s|\()(SVC|₡|¢)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SVC = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SVC|svc|[cC]ol[oó]n(es)?)(?!\w)/g;
        aRegex1.SYP = /(^|\s)(SYP|S\.?P\.?|ليرة)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SYP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SYP|S\.?P\.?|(de )?L\.?S\.?|(Syrian )?[pP]ounds?|[lL]ivres? [sS]yriennes?|[lL]ivres?|ليرة)(?!\w)/g;
        aRegex1.SZL = /(^|\s)(SZL|[eE]malangeni|E)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.SZL = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(SZL|Lilangeni)(?!\w)/g;
        aRegex1.THB = /(^|\s)(THB|฿)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.THB = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(THB|(Thai )?[bB]aht|บาท)(?!\w)/g;
        aRegex1.TJS = /(^|\s)(TJS|سامانی)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.TJS = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(TJS|[sS]omoni|cомонӣ)(?!\w)/g;
        aRegex1.TMT = /(^|\s)(TMT)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.TMT = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(TMT|[mM]anat|манат)(?!\w)/g;
        aRegex1.TND = /(^|\s)(TND)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.TND = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(TND|DT|[dD][tT]|[dD]inars?|د\.ت|دينار)(?!\w)/g;
        aRegex1.TOP = /(^|\s)(TOP\$|T?\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.TOP = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(TOP|[pP]a'anga)(?!\w)/g;
        aRegex1.TRY = /(^|\s)(TRY|₺|TL)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.TRY = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(TRY|[lL]ira|TL)(?!\w)/g;
        aRegex1.TTD = /(^|\s)(TTD\$?|TT\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.TTD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(TTD|dollars?)(?!\w)/g;
        aRegex1.TWD = /(^|\s)(TWD|NT\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.TWD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(TWD|NTD|dollars?)(?!\w)/g;
        aRegex1.TZS = /(^|\s)(TZS|TZs|Tsh\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.TZS = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(TZS|TSH|Tsh|(Tanzanian )?[sS]hillings?)(?!\w)/g;
        aRegex1.UAH = /(^|\s)(UAH|₴)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.UAH = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(UAH|[hH]rn\.?|грн\.?|[hH]ryvnia?|[hH]ryven|гривна|гривня|гривні|гривень)(?!\w)/g;
        aRegex1.UGX = /(^|\s)(UGX|USH\.?|USh\.?|Ush\.?|[sS]hillings)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.UGX = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(UGX|USh|(Ugandan? )?[sS]hillings?)(?!\w)/g;
        aRegex1.USD = /(^|\s)(USD\s?\$?|US\s?\$|\$|\$USD|U\$S)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.USD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(USD|US\s?\$|\$|[dD]ollars?)(?!\w)/g;
        aRegex1.USN = /(^|\s)(USN)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.USN = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(USN)(?!\w)/g;
        aRegex1.UYI = /(^|\s)(UYI)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.UYI = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(UYI|U\.?I\.?|[uU]nidades [iI]ndexadas)(?!\w)/g;
        aRegex1.UYU = /(^|\s)(UYU|\$U|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.UYU = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(UYU|\$U|[pP]esos?)(?!\w)/g;
        aRegex1.UZS = /(^|\s)(UZS)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.UZS = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(UZS|uzs|som|сўм|сум)(?!\w)/g;
        aRegex1.VEF = /(^|\s)(VEF|[bB]s\.?[fF]?\.?)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.VEF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(VEF|[bB]s\.?[fF]?|[bB]olívar(es)?)(?!\w)/g;
        aRegex1.VND = /(^|\s)(VND|₫)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.VND = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(VND|vnd|₫|[dD]ong|đồng|đ|ĐỒNG|Đ)(?!\w)/g;
        aRegex1.VUV = /(^|\s)(VUV|VT|Vt)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.VUV = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(VUV|VT|vt|[vV]atu)(?!\w)/g;
        aRegex1.WST = /(^|\s)(WST\$?|WS\$|\$|SAT\$?|ST\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.WST = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(WST\$?|[tT]ālā|[tT]ala)(?!\w)/g;
        aRegex1.XAF = /(^|\s)(XAF|FCFA|CFA)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XAF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XAF|FCFA|Fcfa|cfa|CFA [fF]rancs?|[fF]rancs?|[fF])(?!\w)/g;
        aRegex1.XAG = /(^|\s)(XAG)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XAG = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XAG)(?!\w)/g;
        aRegex1.XAU = /(^|\s)(XAU)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XAU = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XAU)(?!\w)/g;
        aRegex1.XBA = /(^|\s)(XBA)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XBA = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XBA)(?!\w)/g;
        aRegex1.XBB = /(^|\s)(XBB)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XBB = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XBB)(?!\w)/g;
        aRegex1.XBC = /(^|\s)(XBC)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XBC = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XBC)(?!\w)/g;
        aRegex1.XBD = /(^|\s)(XBD)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XBD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XBD)(?!\w)/g;
        aRegex1.XCD = /(^|\s)(XCD|ECD?\s?\$|\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XCD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XCD|ECD|[dD]ollars?)(?!\w)/g;
        aRegex1.XDR = /(^|\s)(XDR|SDR)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XDR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XDR|SDRs?|[sS]pecial [dD]rawing [rR]ights)(?!\w)/g;
        aRegex1.XOF = /(^|\s)(XOF|FCFA|CFA)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XOF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XOF|xof|FCFA|Fcfa|CFA [fF]rancs?|Frs CFA|CFA|cfa|[fF]rancos?|[fF]rancs?|[fF]rancos?|[fF])(?!\w)/g;
        aRegex1.XPD = /(^|\s)(XPD)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XPD = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XPD)(?!\w)/g;
        aRegex1.XPF = /(^|\s)(XPF)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XPF = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XPF|CFP|cfp|[fF]\s?(cfp)|(CFP)|[fF]rcs CFP|[fF]rcs|[fF]rancs?|[fF])(?!\w)/g;
        aRegex1.XPT = /(^|\s)(XPT)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XPT = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XPT)(?!\w)/g;
        aRegex1.XSU = /(^|\s)(XSU)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XSU = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XSU)(?!\w)/g;
        aRegex1.XTS = /(^|\s)(XTS)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XTS = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XTS)(?!\w)/g;
        aRegex1.XUA = /(^|\s)(XUA)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XUA = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XUA)(?!\w)/g;
        aRegex1.XXX = /(^|\s)(XXX)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.XXX = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(XXX)(?!\w)/g;
        aRegex1.YER = /(^|\s)(YER|Y\.?R\.?|﷼|ريال)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.YER = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(YER|Y\.?R\.?|[rR]iy?als?|﷼|ريال)(?!\w)/g;
        aRegex1.ZAR = /(^|\s)(ZAR|R)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.ZAR = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(ZAR|[rR]ands?)(?!\w)/g;
        aRegex1.ZMW = /(^|\s)(ZMW|Zmk|K)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.ZMW = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(ZMW|[kK]wacha)(?!\w)/g;
        aRegex1.ZWL = /(^|\s)(ZWL|Z\$)(\s?(\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)/g;
        aRegex2.ZWL = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?\s?)(ZWL)(?!\w)/g;
        aRegex1.inch = /NOMATCH(?!\w)/g;
        aRegex2.inch = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?tum|-tums?|\s?"|\s?″)(?!\w)/g;
        aRegex1.kcal = /NOMATCH(?!\w)/g;
        aRegex2.kcal = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?kcal|\s?kalorier)(?!\w)/g;
        aRegex1.nmi = /NOMATCH(?!\w)/g;
        aRegex2.nmi = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?sjömil|\s?nautiska mil?|\s?nautical miles?)(?!\w)/g;
        aRegex1.mile = /NOMATCH(?!\w)/g;
        aRegex2.mile = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?mile|\s?miles)(?!\w)/g;
        aRegex1.mil = /NOMATCH(?!\w)/g;
        aRegex2.mil = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?mil)(?!\w)/g;
        aRegex1.knots = /NOMATCH(?!\w)/g;
        aRegex2.knots = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?knop)(?!\w)/g;
        aRegex1.hp = /NOMATCH(?!\w)/g;
        aRegex2.hp = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?hästkrafter|\s?hkr?|\s?hp)(?!\w)/g;
    };
    return {
        makePriceRegexes : makePriceRegexes
    };
})();
