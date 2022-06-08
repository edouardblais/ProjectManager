(()=>{"use strict";function t(t,e,n,r,a,i){const o=document.getElementById("maincontent"),s=document.createElement("div");s.classList.add("listedtasks");let u=document.createElement("img");!1===i?(u.src="icons/circle.svg",u.classList.add("circle"),u.id=t):!0===i&&(u.src="icons/check.svg",u.classList.add("check"),u.id=t);const c=document.createElement("div");c.innerText=t;const d=document.createElement("div");d.innerText=e;const l=document.createElement("div");l.innerText=n;let g=document.createElement("button");g.id=t,"Low"==r?(g.classList.add("taskpriority"),g.innerText="Low",g.classList.add("prioritylow")):"High"==r&&(g.classList.add("taskpriority"),g.innerText="High",g.classList.add("priorityhigh"));const m=document.createElement("div");m.innerText=a;const h=document.createElement("img");h.classList.add("deletebutton"),h.src="icons/delete.svg",h.id=t,s.appendChild(u),s.appendChild(c),s.appendChild(d),s.appendChild(l),s.appendChild(g),s.appendChild(m),s.appendChild(h),o.appendChild(s)}function e(){document.getElementById("maincontent").innerHTML=""}function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){return n(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function a(t){n(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(n(1,arguments),!r(t)&&"number"!=typeof t)return!1;var e=a(t);return!isNaN(Number(e))}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var u,c={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function g(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?h(u,(function(t){return t.test(s)})):m(u,(function(t){return t.test(s)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(s.length);return{value:o,rest:d}}}function m(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function h(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const f={code:"en-US",formatDistance:function(t,e,n){var r,a=o[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:function(t,e,n,r){return d[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(u={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(u.matchPattern);if(!n)return null;var r=n[0],a=t.match(u.parsePattern);if(!a)return null;var i=u.valueCallback?u.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function w(t,e){n(2,arguments);var r=a(t).getTime(),i=p(e);return new Date(r+i)}function v(t,e){n(2,arguments);var r=p(e);return w(t,-r)}var y=864e5;function b(t){n(1,arguments);var e=1,r=a(t),i=r.getUTCDay(),o=(i<e?7:0)+i-e;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function T(t){n(1,arguments);var e=a(t),r=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=b(i),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var u=b(s);return e.getTime()>=o.getTime()?r+1:e.getTime()>=u.getTime()?r:r-1}function C(t){n(1,arguments);var e=T(t),r=new Date(0);r.setUTCFullYear(e,0,4),r.setUTCHours(0,0,0,0);var a=b(r);return a}var D=6048e5;function k(t,e){n(1,arguments);var r=e||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:p(o),u=null==r.weekStartsOn?s:p(r.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=a(t),d=c.getUTCDay(),l=(d<u?7:0)+d-u;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function E(t,e){n(1,arguments);var r=a(t),i=r.getUTCFullYear(),o=e||{},s=o.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:p(u),d=null==o.firstWeekContainsDate?c:p(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var g=k(l,e),m=new Date(0);m.setUTCFullYear(i,0,d),m.setUTCHours(0,0,0,0);var h=k(m,e);return r.getTime()>=g.getTime()?i+1:r.getTime()>=h.getTime()?i:i-1}function x(t,e){n(1,arguments);var r=e||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:p(i),s=null==r.firstWeekContainsDate?o:p(r.firstWeekContainsDate),u=E(t,e),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var d=k(c,e);return d}var S=6048e5;function M(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const N=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return M("yy"===e?r%100:r,e.length)},L=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):M(n+1,2)},P=function(t,e){return M(t.getUTCDate(),e.length)},U=function(t,e){return M(t.getUTCHours()%12||12,e.length)},W=function(t,e){return M(t.getUTCHours(),e.length)},O=function(t,e){return M(t.getUTCMinutes(),e.length)},Y=function(t,e){return M(t.getUTCSeconds(),e.length)},j=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return M(Math.floor(r*Math.pow(10,n-3)),e.length)};function q(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+M(i,2)}function H(t,e){return t%60==0?(t>0?"-":"+")+M(Math.abs(t)/60,2):I(t,e)}function I(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+M(Math.floor(a/60),2)+n+M(a%60,2)}const F={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return N(t,e)},Y:function(t,e,n,r){var a=E(t,r),i=a>0?a:1-a;return"YY"===e?M(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):M(i,e.length)},R:function(t,e){return M(T(t),e.length)},u:function(t,e){return M(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return M(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return M(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return L(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return M(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){var o=function(t,e){n(1,arguments);var r=a(t),i=k(r,e).getTime()-x(r,e).getTime();return Math.round(i/S)+1}(t,i);return"wo"===e?r.ordinalNumber(o,{unit:"week"}):M(o,e.length)},I:function(t,e,r){var i=function(t){n(1,arguments);var e=a(t),r=b(e).getTime()-C(e).getTime();return Math.round(r/D)+1}(t);return"Io"===e?r.ordinalNumber(i,{unit:"week"}):M(i,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):P(t,e)},D:function(t,e,r){var i=function(t){n(1,arguments);var e=a(t),r=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),o=r-i;return Math.floor(o/y)+1}(t);return"Do"===e?r.ordinalNumber(i,{unit:"dayOfYear"}):M(i,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return M(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return M(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return M(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):W(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):M(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):M(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):O(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Y(t,e)},S:function(t,e){return j(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return H(a);case"XXXX":case"XX":return I(a);default:return I(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return H(a);case"xxxx":case"xx":return I(a);default:return I(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+q(a,":");default:return"GMT"+I(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+q(a,":");default:return"GMT"+I(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return M(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return M((r._originalDate||t).getTime(),e.length)}};function z(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function A(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var B={p:A,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return z(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",z(a,e)).replace("{{time}}",A(i,e))}};const R=B;function J(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var Q=["D","DD"],G=["YY","YYYY"];function X(t){return-1!==Q.indexOf(t)}function Z(t){return-1!==G.indexOf(t)}function $(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,tt=/''/g,et=/[a-zA-Z]/;function nt(t){return t.match(K)[1].replace(tt,"'")}Math.pow(10,8);var rt=36e5,at={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},it=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ot=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,st=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ut(t){var e,n={},r=t.split(at.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],at.timeZoneDelimiter.test(n.date)&&(n.date=t.split(at.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=at.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function ct(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}function dt(t,e){if(null===e)return new Date(NaN);var n=t.match(it);if(!n)return new Date(NaN);var r=!!n[4],a=lt(n[1]),i=lt(n[2])-1,o=lt(n[3]),s=lt(n[4]),u=lt(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,s,u)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,s,u):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(ft[e]||(pt(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(pt(t)?366:365)}(e,a)?(c.setUTCFullYear(e,i,Math.max(a,o)),c):new Date(NaN)}function lt(t){return t?parseInt(t):1}function gt(t){var e=t.match(ot);if(!e)return NaN;var n=mt(e[1]),r=mt(e[2]),a=mt(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*rt+6e4*r+1e3*a:NaN}function mt(t){return t&&parseFloat(t.replace(",","."))||0}function ht(t){if("Z"===t)return 0;var e=t.match(st);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*rt+6e4*a):NaN}var ft=[31,null,31,30,31,30,31,31,30,31,30,31];function pt(t){return t%400==0||t%4==0&&t%100!=0}!function(){const t=document.getElementById("projectbox"),e=document.createElement("div"),n=document.createElement("input");n.placeholder="Project Title",n.id="projecttitleinput";const r=document.createElement("button");r.innerText="Add Project",r.classList.add("addprojbutton"),e.appendChild(n),e.appendChild(r),t.appendChild(e)}(),(()=>{let r=[],o=[];function s(){document.getElementById("listedprojects").innerHTML="",function(){if(null===localStorage.getItem("projects"))r=[];else{let t=JSON.parse(localStorage.getItem("projects"));r=t}}(),r.forEach((t=>{!function(t){const e=document.getElementById("listedprojects"),n=document.createElement("div");n.classList.add("listedprojects"),n.id=t,n.innerText=t,e.appendChild(n)}(t.getTitle),function(t){const e=document.getElementById(t);if(!e.classList.contains("deleteoptionactivated")){const n=document.createElement("img");n.src="icons/delete.svg",n.id=t,n.classList.add("deleteproject"),e.appendChild(n),e.classList.add("deleteoptionactivated")}}(t.getTitle)}))}function u(){if(null===localStorage.getItem("tasks"))o=[];else{let t=JSON.parse(localStorage.getItem("tasks"));o=t}}document.querySelector(".addprojbutton").addEventListener("click",(()=>{let t=document.getElementById("projecttitleinput");const e={getTitle:t.value};r.push(e),localStorage.setItem("projects",JSON.stringify(r)),t.value="",s()})),document.addEventListener("click",(t=>{t.target.classList.contains("prioritylow")?(t.target.innerText="High",t.target.classList.add("priorityhigh"),t.target.classList.remove("prioritylow"),o.forEach((e=>{t.target.id===e.getTitle&&(e.getPriority="High",localStorage.setItem("tasks",JSON.stringify(o)))}))):t.target.classList.contains("priorityhigh")&&(t.target.innerText="Low",t.target.classList.add("prioritylow"),t.target.classList.remove("priorityhigh"),o.forEach((e=>{t.target.id===e.getTitle&&(e.getPriority="Low",localStorage.setItem("tasks",JSON.stringify(o)))})))})),document.addEventListener("click",(t=>{t.target.classList.contains("circle")?(t.target.src="icons/check.svg",t.target.classList.add("check"),t.target.classList.remove("circle"),o.forEach((e=>{t.target.id===e.getTitle&&(e.isChecked=!0,localStorage.setItem("tasks",JSON.stringify(o)))}))):t.target.classList.contains("check")&&(t.target.classList.add("circle"),t.target.classList.remove("check"),t.target.src="icons/circle.svg",o.forEach((e=>{t.target.id===e.getTitle&&(e.isChecked=!1,localStorage.setItem("tasks",JSON.stringify(o)))})))})),s(),document.addEventListener("click",(r=>{var s;r.target.classList.contains("listedprojects")?(e(),function(){const t=document.getElementById("maincontent"),e=document.createElement("div");e.classList.add("taskbox");const n=document.createElement("div");n.innerText="Task Title:";let r=document.createElement("input");r.classList.add("tasktitleinput");const a=document.createElement("div");a.innerText="Description:";let i=document.createElement("input");i.classList.add("taskdescriptioninput");const o=document.createElement("div");o.innerText="Assigned Person:";let s=document.createElement("input");s.classList.add("taskresponsibleinput");const u=document.createElement("div");u.innerText="Priority:";let c=document.createElement("button");c.classList.add("taskpriority"),c.innerText="Low",c.classList.add("prioritylow");const d=document.createElement("div");d.innerText="Task due on:";let l=document.createElement("input");l.setAttribute("type","date"),l.classList.add("taskdatedueinput");const g=document.createElement("button");g.classList.add("addtaskbutton"),g.innerText="Add New Task",e.appendChild(n),e.appendChild(r),e.appendChild(a),e.appendChild(i),e.appendChild(o),e.appendChild(s),e.appendChild(u),e.appendChild(c),e.appendChild(d),e.appendChild(l),e.appendChild(g),t.appendChild(e)}(),u(),s=r.target.id,o.forEach((e=>{e.getAssociatedproject==s&&t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)})),function(t){const e=document.querySelector(".addtaskbutton"),n=t;e.addEventListener("click",(()=>{let t=document.querySelector(".tasktitleinput"),e=document.querySelector(".taskdescriptioninput"),r=document.querySelector(".taskresponsibleinput"),a=document.querySelector(".taskdatedueinput"),i=document.querySelector(".taskpriority");const s={getTitle:t.value,getDescription:e.value,getResponsible:r.value,getPriority:i.innerText,getDuedate:a.value,getAssociatedproject:n,isChecked:!1};o.push(s),function(){const t=document.getElementById("maincontent"),e=document.createElement("div");e.classList.add("listedtasks");const n=document.querySelector(".tasktitleinput").value,r=document.createElement("div");r.innerText=n;let a=document.createElement("img");a.src="icons/circle.svg",a.classList.add("circle"),a.id=n;const i=document.querySelector(".taskdescriptioninput").value,o=document.createElement("div");o.innerText=i;const s=document.querySelector(".taskresponsibleinput").value,u=document.createElement("div");u.innerText=s;const c=document.querySelector(".taskpriority");let d=document.createElement("button");d.id=n,c.classList.contains("prioritylow")?(d.classList.add("taskpriority"),d.innerText="Low",d.classList.add("prioritylow")):c.classList.contains("priorityhigh")&&(d.classList.add("taskpriority"),d.innerText="High",d.classList.add("priorityhigh"));const l=document.querySelector(".taskdatedueinput").value,g=document.createElement("div");g.innerText=l;const m=document.createElement("img");m.classList.add("deletebutton"),m.src="icons/delete.svg",m.id=n,e.appendChild(a),e.appendChild(r),e.appendChild(o),e.appendChild(u),e.appendChild(d),e.appendChild(g),e.appendChild(m),t.appendChild(e)}(),localStorage.setItem("tasks",JSON.stringify(o)),t.value="",e.value="",r.value="",a.value="",i.innerText="Low"}))}(r.target.id)):"important"===r.target.id?(e(),u(),o.forEach((e=>{"High"==e.getPriority&&t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)}))):"alltasks"===r.target.id?(e(),u(),o.forEach((e=>{t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)}))):"today"===r.target.id?(e(),u(),function(){let e=Date.parse(function(t,e,r){n(2,arguments);var o=String(e),s=r||{},u=s.locale||f,c=u.options&&u.options.firstWeekContainsDate,d=null==c?1:p(c),l=null==s.firstWeekContainsDate?d:p(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=u.options&&u.options.weekStartsOn,m=null==g?0:p(g),h=null==s.weekStartsOn?m:p(s.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var w=a(t);if(!i(w))throw new RangeError("Invalid time value");var y=J(w),b=v(w,y),T={firstWeekContainsDate:l,weekStartsOn:h,locale:u,_originalDate:w};return o.match(V).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,R[e])(t,u.formatLong,T):t})).join("").match(_).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return nt(n);var a=F[r];if(a)return!s.useAdditionalWeekYearTokens&&Z(n)&&$(n,e,t),!s.useAdditionalDayOfYearTokens&&X(n)&&$(n,e,t),a(b,n,u.localize,T);if(r.match(et))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date,"yyyy-MM-dd"));o.forEach((n=>{e==Date.parse(n.getDuedate)&&t(n.getTitle,n.getDescription,n.getResponsible,n.getPriority,n.getDuedate,n.isChecked)}))}()):"thisweek"===r.target.id&&(e(),u(),o.forEach((e=>{(function(t){let e=function(t,e){n(2,arguments);var r=a(t),i=p(e);return isNaN(i)?new Date(NaN):i?(r.setDate(r.getDate()+i),r):r}(new Date,8);return function(t,e){n(2,arguments);var r=a(t).getTime(),i=a(e.start).getTime(),o=a(e.end).getTime();if(!(i<=o))throw new RangeError("Invalid interval");return r>=i&&r<=o}(t,{start:new Date,end:e})})(function(t,e){n(1,arguments);var r=e||{},a=null==r.additionalDigits?2:p(r.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var i,o=ut(t);if(o.date){var s=ct(o.date,a);i=dt(s.restDateString,s.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var u,c=i.getTime(),d=0;if(o.time&&(d=gt(o.time),isNaN(d)))return new Date(NaN);if(!o.timezone){var l=new Date(c+d),g=new Date(0);return g.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),g.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),g}return u=ht(o.timezone),isNaN(u)?new Date(NaN):new Date(c+d+u)}(e.getDuedate))&&t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)})))})),document.addEventListener("click",(t=>{t.target.classList.contains("deletebutton")&&o.forEach((e=>{if(t.target.id===e.getTitle){const n=o.indexOf(e);o.splice(n,1),localStorage.setItem("tasks",JSON.stringify(o)),t.target.parentNode.style.display="none"}}))})),document.addEventListener("click",(t=>{t.target.classList.contains("deleteproject")&&(r.forEach((e=>{if(t.target.id===e.getTitle){const n=r.indexOf(e);r.splice(n,1),localStorage.setItem("projects",JSON.stringify(r)),t.target.parentNode.style.display="none"}})),e(),o.forEach((e=>{if(t.target.id===e.getAssociatedproject){const t=o.indexOf(e);o.splice(t,1),localStorage.setItem("tasks",JSON.stringify(o))}})))}))})()})();