(()=>{"use strict";function t(t,e,n,a,r,i){const o=document.getElementById("maincontent"),s=document.createElement("div");s.classList.add("listedtasks");let d=document.createElement("img");!1===i?(d.src="icons/circle.svg",d.classList.add("circle"),d.id=t):!0===i&&(d.src="icons/check.svg",d.classList.add("check"),d.id=t);const c=document.createElement("div");c.classList.add("tasktitleanddescriptionbox");const u=document.createElement("div");u.innerText=t;const l=document.createElement("div");l.innerText=e,l.classList.add("descriptiontext");const m=document.createElement("div");m.innerText=n,m.classList.add("taskresponsible");let g=document.createElement("button");g.id=t,"Low"==a?(g.classList.add("taskpriority"),g.innerText="Low",g.classList.add("prioritylow")):"High"==a&&(g.classList.add("taskpriority"),g.innerText="High",g.classList.add("priorityhigh"));const h=document.createElement("div");h.innerText=""===r?"No due date":r,h.classList.add("datedue");const f=document.createElement("img");f.classList.add("deletebutton"),f.src="icons/delete.svg",f.id=t,s.appendChild(d),c.appendChild(u),c.appendChild(l),s.appendChild(c),s.appendChild(m),s.appendChild(g),s.appendChild(h),s.appendChild(f),o.appendChild(s)}function e(){document.getElementById("maincontent").innerHTML=""}function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){return n(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function r(t){n(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(n(1,arguments),!a(t)&&"number"!=typeof t)return!1;var e=r(t);return!isNaN(Number(e))}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var d,c={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,d=r.width?String(r.width):t.defaultWidth;a=t.values[d]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function m(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,s=i[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?h(d,(function(t){return t.test(s)})):g(d,(function(t){return t.test(s)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var u=e.slice(s.length);return{value:o,rest:u}}}function g(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function h(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const f={code:"en-US",formatDistance:function(t,e,n){var a,r=o[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:c,formatRelative:function(t,e,n,a){return u[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(d.matchPattern);if(!n)return null;var a=n[0],r=t.match(d.parsePattern);if(!r)return null;var i=d.valueCallback?d.valueCallback(r[0]):r[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(a.length);return{value:i,rest:o}}),era:m({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:m({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:m({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:m({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function v(t,e){n(2,arguments);var a=r(t).getTime(),i=p(e);return new Date(a+i)}function w(t,e){n(2,arguments);var a=p(e);return v(t,-a)}var y=864e5;function b(t){n(1,arguments);var e=1,a=r(t),i=a.getUTCDay(),o=(i<e?7:0)+i-e;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function T(t){n(1,arguments);var e=r(t),a=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=b(i),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var d=b(s);return e.getTime()>=o.getTime()?a+1:e.getTime()>=d.getTime()?a:a-1}function C(t){n(1,arguments);var e=T(t),a=new Date(0);a.setUTCFullYear(e,0,4),a.setUTCHours(0,0,0,0);var r=b(a);return r}var k=6048e5;function D(t,e){n(1,arguments);var a=e||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:p(o),d=null==a.weekStartsOn?s:p(a.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=r(t),u=c.getUTCDay(),l=(u<d?7:0)+u-d;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function x(t,e){n(1,arguments);var a=r(t),i=a.getUTCFullYear(),o=e||{},s=o.locale,d=s&&s.options&&s.options.firstWeekContainsDate,c=null==d?1:p(d),u=null==o.firstWeekContainsDate?c:p(o.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,u),l.setUTCHours(0,0,0,0);var m=D(l,e),g=new Date(0);g.setUTCFullYear(i,0,u),g.setUTCHours(0,0,0,0);var h=D(g,e);return a.getTime()>=m.getTime()?i+1:a.getTime()>=h.getTime()?i:i-1}function E(t,e){n(1,arguments);var a=e||{},r=a.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:p(i),s=null==a.firstWeekContainsDate?o:p(a.firstWeekContainsDate),d=x(t,e),c=new Date(0);c.setUTCFullYear(d,0,s),c.setUTCHours(0,0,0,0);var u=D(c,e);return u}var L=6048e5;function S(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const M=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return S("yy"===e?a%100:a,e.length)},N=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):S(n+1,2)},P=function(t,e){return S(t.getUTCDate(),e.length)},U=function(t,e){return S(t.getUTCHours()%12||12,e.length)},W=function(t,e){return S(t.getUTCHours(),e.length)},j=function(t,e){return S(t.getUTCMinutes(),e.length)},q=function(t,e){return S(t.getUTCSeconds(),e.length)},O=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return S(Math.floor(a*Math.pow(10,n-3)),e.length)};function Y(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+S(i,2)}function I(t,e){return t%60==0?(t>0?"-":"+")+S(Math.abs(t)/60,2):H(t,e)}function H(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+S(Math.floor(r/60),2)+n+S(r%60,2)}const F={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return M(t,e)},Y:function(t,e,n,a){var r=x(t,a),i=r>0?r:1-r;return"YY"===e?S(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):S(i,e.length)},R:function(t,e){return S(T(t),e.length)},u:function(t,e){return S(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return S(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return S(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return N(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return S(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,a,i){var o=function(t,e){n(1,arguments);var a=r(t),i=D(a,e).getTime()-E(a,e).getTime();return Math.round(i/L)+1}(t,i);return"wo"===e?a.ordinalNumber(o,{unit:"week"}):S(o,e.length)},I:function(t,e,a){var i=function(t){n(1,arguments);var e=r(t),a=b(e).getTime()-C(e).getTime();return Math.round(a/k)+1}(t);return"Io"===e?a.ordinalNumber(i,{unit:"week"}):S(i,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):P(t,e)},D:function(t,e,a){var i=function(t){n(1,arguments);var e=r(t),a=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),o=a-i;return Math.floor(o/y)+1}(t);return"Do"===e?a.ordinalNumber(i,{unit:"dayOfYear"}):S(i,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return S(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return S(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return S(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):W(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):S(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):S(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):j(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):q(t,e)},S:function(t,e){return O(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return I(r);case"XXXX":case"XX":return H(r);default:return H(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return I(r);case"xxxx":case"xx":return H(r);default:return H(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Y(r,":");default:return"GMT"+H(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Y(r,":");default:return"GMT"+H(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return S(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return S((a._originalDate||t).getTime(),e.length)}};function z(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function B(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var A={p:B,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return z(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",z(r,e)).replace("{{time}}",B(i,e))}};const R=A;function J(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var G=["D","DD"],Q=["YY","YYYY"];function X(t){return-1!==G.indexOf(t)}function Z(t){return-1!==Q.indexOf(t)}function $(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,tt=/''/g,et=/[a-zA-Z]/;function nt(t){return t.match(K)[1].replace(tt,"'")}Math.pow(10,8);var at=36e5,rt={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},it=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ot=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,st=/^([+-])(\d{2})(?::?(\d{2}))?$/;function dt(t){var e,n={},a=t.split(rt.dateTimeDelimiter);if(a.length>2)return n;if(/:/.test(a[0])?e=a[0]:(n.date=a[0],e=a[1],rt.timeZoneDelimiter.test(n.date)&&(n.date=t.split(rt.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var r=rt.timezone.exec(e);r?(n.time=e.replace(r[1],""),n.timezone=r[1]):n.time=e}return n}function ct(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(n);if(!a)return{year:NaN,restDateString:""};var r=a[1]?parseInt(a[1]):null,i=a[2]?parseInt(a[2]):null;return{year:null===i?r:100*i,restDateString:t.slice((a[1]||a[2]).length)}}function ut(t,e){if(null===e)return new Date(NaN);var n=t.match(it);if(!n)return new Date(NaN);var a=!!n[4],r=lt(n[1]),i=lt(n[2])-1,o=lt(n[3]),s=lt(n[4]),d=lt(n[5])-1;if(a)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,s,d)?function(t,e,n){var a=new Date(0);a.setUTCFullYear(t,0,4);var r=7*(e-1)+n+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+r),a}(e,s,d):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(ft[e]||(pt(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(pt(t)?366:365)}(e,r)?(c.setUTCFullYear(e,i,Math.max(r,o)),c):new Date(NaN)}function lt(t){return t?parseInt(t):1}function mt(t){var e=t.match(ot);if(!e)return NaN;var n=gt(e[1]),a=gt(e[2]),r=gt(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,a,r)?n*at+6e4*a+1e3*r:NaN}function gt(t){return t&&parseFloat(t.replace(",","."))||0}function ht(t){if("Z"===t)return 0;var e=t.match(st);if(!e)return 0;var n="+"===e[1]?-1:1,a=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,r)?n*(a*at+6e4*r):NaN}var ft=[31,null,31,30,31,30,31,31,30,31,30,31];function pt(t){return t%400==0||t%4==0&&t%100!=0}!function(){const t=document.getElementById("projectbox"),e=document.createElement("div");e.classList.add("projectbox");const n=document.createElement("input");n.placeholder="Give me a fresh and unique name!",n.id="projecttitleinput";const a=document.createElement("button");a.innerText="Add Project",a.classList.add("addprojbutton"),e.appendChild(n),e.appendChild(a),t.appendChild(e)}(),(()=>{let a=[],o=[];function s(){document.getElementById("listedprojects").innerHTML="",function(){if(null===localStorage.getItem("projects"))a=[];else{let t=JSON.parse(localStorage.getItem("projects"));a=t}}(),a.forEach((t=>{!function(t){const e=document.getElementById("listedprojects"),n=document.createElement("div");n.id=t,n.classList.add("listedproject");const a=document.createElement("img");a.src="icons/arrow.svg",a.classList.add("icons");const r=document.createElement("div");r.classList.add("listedprojecttitle"),r.innerText=t,n.appendChild(a),n.appendChild(r),e.appendChild(n)}(t.getTitle),function(t){const e=document.getElementById(t);if(!e.classList.contains("deleteoptionactivated")){const n=document.createElement("img");n.src="icons/delete.svg",n.id=t,n.classList.add("deleteproject"),e.appendChild(n),e.classList.add("deleteoptionactivated")}}(t.getTitle)}))}function d(){if(null===localStorage.getItem("tasks"))o=[];else{let t=JSON.parse(localStorage.getItem("tasks"));o=t}}!function(){const t=document.querySelector(".addprojbutton");let e=document.getElementById("projecttitleinput");t.addEventListener("click",(()=>{if(function(){let t=document.getElementById("projecttitleinput");for(let e=0;e<a.length;e++)if(a[e].getTitle===t.value)return!0}())alert("Project title already taken. Find a unique title!");else if(""===e.value)alert("Please enter a unique project title!");else{const t={getTitle:e.value};a.push(t),localStorage.setItem("projects",JSON.stringify(a)),e.value="",s()}}))}(),document.addEventListener("click",(t=>{t.target.classList.contains("prioritylow")?(t.target.innerText="High",t.target.classList.add("priorityhigh"),t.target.classList.remove("prioritylow"),o.forEach((e=>{t.target.id===e.getTitle&&(e.getPriority="High",localStorage.setItem("tasks",JSON.stringify(o)))}))):t.target.classList.contains("priorityhigh")&&(t.target.innerText="Low",t.target.classList.add("prioritylow"),t.target.classList.remove("priorityhigh"),o.forEach((e=>{t.target.id===e.getTitle&&(e.getPriority="Low",localStorage.setItem("tasks",JSON.stringify(o)))})))})),document.addEventListener("click",(t=>{t.target.classList.contains("circle")?(t.target.src="icons/check.svg",t.target.classList.add("check"),t.target.classList.remove("circle"),o.forEach((e=>{t.target.id===e.getTitle&&(e.isChecked=!0,localStorage.setItem("tasks",JSON.stringify(o)))}))):t.target.classList.contains("check")&&(t.target.classList.add("circle"),t.target.classList.remove("check"),t.target.src="icons/circle.svg",o.forEach((e=>{t.target.id===e.getTitle&&(e.isChecked=!1,localStorage.setItem("tasks",JSON.stringify(o)))})))})),s(),document.addEventListener("click",(a=>{var s;a.target.classList.contains("listedprojecttitle")?(e(),function(){const t=document.getElementById("maincontent"),e=document.createElement("div");e.classList.add("taskbox");const n=document.createElement("div");n.classList.add("tasktitleresponsibleprioritydatebox");const a=document.createElement("div");a.innerText="Task Title",a.classList.add("taskboxinfo");let r=document.createElement("input");r.classList.add("tasktitleinput"),r.placeholder="Give me a fresh and unique name!";const i=document.createElement("div");i.innerText="Assigned Person",i.classList.add("taskboxinfo");let o=document.createElement("input");o.classList.add("taskresponsibleinput"),o.placeholder="Whooo's going to do it?";const s=document.createElement("div");s.innerText="Priority",s.classList.add("taskboxinfo");let d=document.createElement("button");d.classList.add("taskpriority"),d.innerText="Low",d.classList.add("prioritylow");const c=document.createElement("div");c.innerText="Task due on",c.classList.add("taskboxinfo");let u=document.createElement("input");u.setAttribute("type","date"),u.classList.add("taskdatedueinput");const l=document.createElement("div");l.classList.add("taskdescriptionbox");const m=document.createElement("div");m.innerText="Details",m.classList.add("taskboxinfo");let g=document.createElement("input");g.classList.add("taskdescriptioninput"),g.placeholder="Gimme the deets!";const h=document.createElement("div");h.classList.add("addtaskbuttonbox");const f=document.createElement("button");f.classList.add("addtaskbutton"),f.innerText="Add Task",n.appendChild(a),n.appendChild(r),n.appendChild(i),n.appendChild(o),n.appendChild(s),n.appendChild(d),n.appendChild(c),n.appendChild(u),l.appendChild(m),l.appendChild(g),e.appendChild(n),e.appendChild(l),h.appendChild(f),e.appendChild(h),t.appendChild(e)}(),d(),s=a.target.parentNode.id,o.forEach((e=>{e.getAssociatedproject==s&&t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)})),function(t){const e=document.querySelector(".addtaskbutton"),n=t;let a=document.querySelector(".tasktitleinput");e.addEventListener("click",(()=>{if(function(){let t=document.querySelector(".tasktitleinput");for(let e=0;e<o.length;e++)if(o[e].getTitle===t.value)return!0}())alert("Task title already taken. Choose a unique task title!");else if(""===a.value)alert("Please choose a unique task title!");else{let t=document.querySelector(".taskdescriptioninput"),e=document.querySelector(".taskresponsibleinput"),r=document.querySelector(".taskdatedueinput"),i=document.querySelector(".taskpriority");const s={getTitle:a.value,getDescription:t.value,getResponsible:e.value,getPriority:i.innerText,getDuedate:r.value,getAssociatedproject:n,isChecked:!1};o.push(s),function(){const t=document.getElementById("maincontent"),e=document.createElement("div");e.classList.add("listedtasks");let n=document.createElement("img");n.src="icons/circle.svg",n.classList.add("circle");const a=document.createElement("div");a.classList.add("tasktitleanddescriptionbox");const r=document.querySelector(".tasktitleinput").value,i=document.createElement("div");i.innerText=r,n.id=r;const o=document.querySelector(".taskdescriptioninput").value,s=document.createElement("div");s.innerText=o,s.classList.add("descriptiontext");const d=document.querySelector(".taskresponsibleinput").value,c=document.createElement("div");c.innerText=d,c.classList.add("taskresponsible");const u=document.querySelector(".taskpriority");let l=document.createElement("button");l.id=r,u.classList.contains("prioritylow")?(l.classList.add("taskpriority"),l.innerText="Low",l.classList.add("prioritylow")):u.classList.contains("priorityhigh")&&(l.classList.add("taskpriority"),l.innerText="High",l.classList.add("priorityhigh"));const m=document.querySelector(".taskdatedueinput").value,g=document.createElement("div");g.innerText=""===m?"No due date":m,g.classList.add("datedue");const h=document.createElement("img");h.classList.add("deletebutton"),h.src="icons/delete.svg",h.id=r,e.appendChild(n),a.appendChild(i),a.appendChild(s),e.appendChild(a),e.appendChild(c),e.appendChild(l),e.appendChild(g),e.appendChild(h),t.appendChild(e)}(),localStorage.setItem("tasks",JSON.stringify(o)),a.value="",t.value="",e.value="",r.value="",i.innerText="Low",i.classList.remove("priorityhigh"),i.classList.add("prioritylow")}}))}(a.target.parentNode.id)):"important"===a.target.id?(e(),d(),o.forEach((e=>{"High"==e.getPriority&&t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)}))):"alltasks"===a.target.id?(e(),d(),o.forEach((e=>{t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)}))):"today"===a.target.id?(e(),d(),function(){let e=Date.parse(function(t,e,a){n(2,arguments);var o=String(e),s=a||{},d=s.locale||f,c=d.options&&d.options.firstWeekContainsDate,u=null==c?1:p(c),l=null==s.firstWeekContainsDate?u:p(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=d.options&&d.options.weekStartsOn,g=null==m?0:p(m),h=null==s.weekStartsOn?g:p(s.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var v=r(t);if(!i(v))throw new RangeError("Invalid time value");var y=J(v),b=w(v,y),T={firstWeekContainsDate:l,weekStartsOn:h,locale:d,_originalDate:v};return o.match(V).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,R[e])(t,d.formatLong,T):t})).join("").match(_).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return nt(n);var r=F[a];if(r)return!s.useAdditionalWeekYearTokens&&Z(n)&&$(n,e,t),!s.useAdditionalDayOfYearTokens&&X(n)&&$(n,e,t),r(b,n,d.localize,T);if(a.match(et))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("")}(new Date,"yyyy-MM-dd"));o.forEach((n=>{e==Date.parse(n.getDuedate)&&t(n.getTitle,n.getDescription,n.getResponsible,n.getPriority,n.getDuedate,n.isChecked)}))}()):"thisweek"===a.target.id&&(e(),d(),o.forEach((e=>{(function(t){let e=function(t,e){n(2,arguments);var a=r(t),i=p(e);return isNaN(i)?new Date(NaN):i?(a.setDate(a.getDate()+i),a):a}(new Date,8);return function(t,e){n(2,arguments);var a=r(t).getTime(),i=r(e.start).getTime(),o=r(e.end).getTime();if(!(i<=o))throw new RangeError("Invalid interval");return a>=i&&a<=o}(t,{start:new Date,end:e})})(function(t,e){n(1,arguments);var a=e||{},r=null==a.additionalDigits?2:p(a.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var i,o=dt(t);if(o.date){var s=ct(o.date,r);i=ut(s.restDateString,s.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var d,c=i.getTime(),u=0;if(o.time&&(u=mt(o.time),isNaN(u)))return new Date(NaN);if(!o.timezone){var l=new Date(c+u),m=new Date(0);return m.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),m.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),m}return d=ht(o.timezone),isNaN(d)?new Date(NaN):new Date(c+u+d)}(e.getDuedate))&&t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)})))})),document.addEventListener("click",(t=>{t.target.classList.contains("deletebutton")&&o.forEach((e=>{if(t.target.id===e.getTitle){const n=o.indexOf(e);o.splice(n,1),localStorage.setItem("tasks",JSON.stringify(o)),t.target.parentNode.style.display="none"}}))})),document.addEventListener("click",(t=>{t.target.classList.contains("deleteproject")&&(a.forEach((e=>{if(t.target.id===e.getTitle){const n=a.indexOf(e);a.splice(n,1),localStorage.setItem("projects",JSON.stringify(a)),t.target.parentNode.style.display="none"}})),e(),o.forEach((e=>{if(t.target.id===e.getAssociatedproject){const t=o.indexOf(e);o.splice(t,1),localStorage.setItem("tasks",JSON.stringify(o))}})))}))})()})();