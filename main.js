(()=>{"use strict";function t(t,e,n,r,a,i){const o=document.getElementById("maincontent"),s=document.createElement("div");s.classList.add("listedtasks");let u=document.createElement("img");!1===i?(u.src="icons/circle.svg",u.classList.add("circle"),u.id=t):!0===i&&(u.src="icons/check.svg",u.classList.add("check"),u.id=t);const c=document.createElement("div");c.innerText=t;const d=document.createElement("div");d.innerText=e;const l=document.createElement("div");l.innerText=n;let m=document.createElement("button");m.id=t,"Low"==r?(m.classList.add("taskpriority"),m.innerText="Low",m.classList.add("prioritylow")):"High"==r&&(m.classList.add("taskpriority"),m.innerText="High",m.classList.add("priorityhigh"));const h=document.createElement("div");h.innerText=a,s.appendChild(u),s.appendChild(c),s.appendChild(d),s.appendChild(l),s.appendChild(m),s.appendChild(h),o.appendChild(s)}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(t){return e(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function r(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(e(1,arguments),!n(t)&&"number"!=typeof t)return!1;var a=r(t);return!isNaN(Number(a))}var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var s,u={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function l(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?h(u,(function(t){return t.test(s)})):m(u,(function(t){return t.test(s)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(s.length);return{value:o,rest:d}}}function m(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function h(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const g={code:"en-US",formatDistance:function(t,e,n){var r,a=i[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(t,e,n,r){return c[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(s={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(s.matchPattern);if(!n)return null;var r=n[0],a=t.match(s.parsePattern);if(!a)return null;var i=s.valueCallback?s.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function p(t,n){e(2,arguments);var a=r(t).getTime(),i=f(n);return new Date(a+i)}function w(t,n){e(2,arguments);var r=f(n);return p(t,-r)}var v=864e5;function y(t){e(1,arguments);var n=1,a=r(t),i=a.getUTCDay(),o=(i<n?7:0)+i-n;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function b(t){e(1,arguments);var n=r(t),a=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=y(i),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var u=y(s);return n.getTime()>=o.getTime()?a+1:n.getTime()>=u.getTime()?a:a-1}function T(t){e(1,arguments);var n=b(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=y(r);return a}var C=6048e5;function D(t,n){e(1,arguments);var a=n||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:f(o),u=null==a.weekStartsOn?s:f(a.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=r(t),d=c.getUTCDay(),l=(d<u?7:0)+d-u;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function k(t,n){e(1,arguments);var a=r(t),i=a.getUTCFullYear(),o=n||{},s=o.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:f(u),d=null==o.firstWeekContainsDate?c:f(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var m=D(l,n),h=new Date(0);h.setUTCFullYear(i,0,d),h.setUTCHours(0,0,0,0);var g=D(h,n);return a.getTime()>=m.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}function M(t,n){e(1,arguments);var r=n||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:f(i),s=null==r.firstWeekContainsDate?o:f(r.firstWeekContainsDate),u=k(t,n),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var d=D(c,n);return d}var x=6048e5;function E(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const S=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return E("yy"===e?r%100:r,e.length)},N=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):E(n+1,2)},L=function(t,e){return E(t.getUTCDate(),e.length)},P=function(t,e){return E(t.getUTCHours()%12||12,e.length)},U=function(t,e){return E(t.getUTCHours(),e.length)},W=function(t,e){return E(t.getUTCMinutes(),e.length)},Y=function(t,e){return E(t.getUTCSeconds(),e.length)},q=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return E(Math.floor(r*Math.pow(10,n-3)),e.length)};function j(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+E(i,2)}function O(t,e){return t%60==0?(t>0?"-":"+")+E(Math.abs(t)/60,2):H(t,e)}function H(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+E(Math.floor(a/60),2)+n+E(a%60,2)}const F={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return S(t,e)},Y:function(t,e,n,r){var a=k(t,r),i=a>0?a:1-a;return"YY"===e?E(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):E(i,e.length)},R:function(t,e){return E(b(t),e.length)},u:function(t,e){return E(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return E(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return E(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return N(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return E(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,a,i){var o=function(t,n){e(1,arguments);var a=r(t),i=D(a,n).getTime()-M(a,n).getTime();return Math.round(i/x)+1}(t,i);return"wo"===n?a.ordinalNumber(o,{unit:"week"}):E(o,n.length)},I:function(t,n,a){var i=function(t){e(1,arguments);var n=r(t),a=y(n).getTime()-T(n).getTime();return Math.round(a/C)+1}(t);return"Io"===n?a.ordinalNumber(i,{unit:"week"}):E(i,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):L(t,e)},D:function(t,n,a){var i=function(t){e(1,arguments);var n=r(t),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=n.getTime(),o=a-i;return Math.floor(o/v)+1}(t);return"Do"===n?a.ordinalNumber(i,{unit:"dayOfYear"}):E(i,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return E(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return E(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return E(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return P(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):U(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):E(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):E(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):W(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Y(t,e)},S:function(t,e){return q(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return O(a);case"XXXX":case"XX":return H(a);default:return H(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return O(a);case"xxxx":case"xx":return H(a);default:return H(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+j(a,":");default:return"GMT"+H(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+j(a,":");default:return"GMT"+H(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return E(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return E((r._originalDate||t).getTime(),e.length)}};function I(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function z(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var A={p:z,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return I(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",I(a,e)).replace("{{time}}",z(i,e))}};const R=A;function B(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var Q=["D","DD"],J=["YY","YYYY"];function G(t){return-1!==Q.indexOf(t)}function X(t){return-1!==J.indexOf(t)}function Z(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,V=/^'([^]*?)'?$/,K=/''/g,tt=/[a-zA-Z]/;function et(t){return t.match(V)[1].replace(K,"'")}Math.pow(10,8);var nt=36e5,rt={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},at=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,it=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ot=/^([+-])(\d{2})(?::?(\d{2}))?$/;function st(t){var e,n={},r=t.split(rt.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],rt.timeZoneDelimiter.test(n.date)&&(n.date=t.split(rt.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=rt.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function ut(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}function ct(t,e){if(null===e)return new Date(NaN);var n=t.match(at);if(!n)return new Date(NaN);var r=!!n[4],a=dt(n[1]),i=dt(n[2])-1,o=dt(n[3]),s=dt(n[4]),u=dt(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,s,u)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,s,u):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(gt[e]||(ft(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(ft(t)?366:365)}(e,a)?(c.setUTCFullYear(e,i,Math.max(a,o)),c):new Date(NaN)}function dt(t){return t?parseInt(t):1}function lt(t){var e=t.match(it);if(!e)return NaN;var n=mt(e[1]),r=mt(e[2]),a=mt(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*nt+6e4*r+1e3*a:NaN}function mt(t){return t&&parseFloat(t.replace(",","."))||0}function ht(t){if("Z"===t)return 0;var e=t.match(ot);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*nt+6e4*a):NaN}var gt=[31,null,31,30,31,30,31,31,30,31,30,31];function ft(t){return t%400==0||t%4==0&&t%100!=0}!function(){const t=document.getElementById("allprojects"),e=document.createElement("div"),n=document.createElement("input");n.classList.add("projecttitleinput"),n.placeholder="Project Title";const r=document.createElement("button");r.innerText="Add Project",r.classList.add("addprojbutton"),e.appendChild(n),e.appendChild(r),t.appendChild(e)}(),(()=>{let n=[],i=[];function o(){if(null===localStorage.getItem("tasks"))i=[];else{let t=JSON.parse(localStorage.getItem("tasks"));i=t}}document.querySelector(".addprojbutton").addEventListener("click",(()=>{const t={getTitle:document.querySelector(".projecttitleinput").value};n.push(t),localStorage.setItem("projects",JSON.stringify(n)),function(){const t=document.querySelector(".projecttitleinput").value,e=document.getElementById("allprojects"),n=document.createElement("div");n.id=t,n.classList.add("listedprojects"),n.innerText=t,e.appendChild(n)}()})),document.addEventListener("click",(t=>{t.target.classList.contains("prioritylow")?(t.target.innerText="High",t.target.classList.add("priorityhigh"),t.target.classList.remove("prioritylow"),i.forEach((e=>{t.target.id===e.getTitle&&(e.getPriority="High",localStorage.setItem("tasks",JSON.stringify(i)))}))):t.target.classList.contains("priorityhigh")&&(t.target.innerText="Low",t.target.classList.add("prioritylow"),t.target.classList.remove("priorityhigh"),i.forEach((e=>{t.target.id===e.getTitle&&(e.getPriority="Low",localStorage.setItem("tasks",JSON.stringify(i)))})))})),document.addEventListener("click",(t=>{t.target.classList.contains("circle")?(t.target.src="icons/check.svg",t.target.classList.add("check"),t.target.classList.remove("circle"),i.forEach((e=>{t.target.id===e.getTitle&&(e.isChecked=!0,localStorage.setItem("tasks",JSON.stringify(i)))}))):t.target.classList.contains("check")&&(t.target.classList.add("circle"),t.target.classList.remove("check"),t.target.src="icons/circle.svg",i.forEach((e=>{t.target.id===e.getTitle&&(e.isChecked=!1,localStorage.setItem("tasks",JSON.stringify(i)))})))})),function(){if(null===localStorage.getItem("projects"))n=[];else{let t=JSON.parse(localStorage.getItem("projects"));n=t}}(),n.forEach((t=>{!function(t){const e=document.getElementById("allprojects"),n=document.createElement("div");n.classList.add("listedprojects"),n.id=t,n.innerText=t,e.appendChild(n)}(t.getTitle)})),function(){const n=document.getElementById("maincontent");document.addEventListener("click",(s=>{var u;s.target.classList.contains("listedprojects")?(n.innerHTML="",function(){const t=document.getElementById("maincontent"),e=document.createElement("div");e.classList.add("taskbox");const n=document.createElement("div");n.innerText="Task Title:";let r=document.createElement("input");r.classList.add("tasktitleinput");const a=document.createElement("div");a.innerText="Description:";let i=document.createElement("input");i.classList.add("taskdescriptioninput");const o=document.createElement("div");o.innerText="Assigned Person:";let s=document.createElement("input");s.classList.add("taskresponsibleinput");const u=document.createElement("div");u.innerText="Priority:";let c=document.createElement("button");c.classList.add("taskpriority"),c.innerText="Low",c.classList.add("prioritylow");const d=document.createElement("div");d.innerText="Task due on:";let l=document.createElement("input");l.setAttribute("type","date"),l.classList.add("taskdatedueinput");const m=document.createElement("button");m.classList.add("addtaskbutton"),m.innerText="Add New Task",e.appendChild(n),e.appendChild(r),e.appendChild(a),e.appendChild(i),e.appendChild(o),e.appendChild(s),e.appendChild(u),e.appendChild(c),e.appendChild(d),e.appendChild(l),e.appendChild(m),t.appendChild(e)}(),o(),u=s.target.id,i.forEach((e=>{e.getAssociatedproject==u&&t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)})),function(t){const e=document.querySelector(".addtaskbutton"),n=t;e.addEventListener("click",(()=>{const t=document.querySelector(".tasktitleinput").value,e=document.querySelector(".taskdescriptioninput").value,r=document.querySelector(".taskresponsibleinput").value,a=document.querySelector(".taskdatedueinput").value,o={getTitle:t,getDescription:e,getResponsible:r,getPriority:document.querySelector(".taskpriority").innerText,getDuedate:a,getAssociatedproject:n,isChecked:!1};i.push(o),function(){const t=document.getElementById("maincontent"),e=document.createElement("div");e.classList.add("listedtasks");const n=document.querySelector(".tasktitleinput").value,r=document.createElement("div");r.innerText=n;let a=document.createElement("img");a.src="icons/circle.svg",a.classList.add("circle"),a.id=n;const i=document.querySelector(".taskdescriptioninput").value,o=document.createElement("div");o.innerText=i;const s=document.querySelector(".taskresponsibleinput").value,u=document.createElement("div");u.innerText=s;const c=document.querySelector(".taskpriority");let d=document.createElement("button");d.id=n,c.classList.contains("prioritylow")?(d.classList.add("taskpriority"),d.innerText="Low",d.classList.add("prioritylow")):c.classList.contains("priorityhigh")&&(d.classList.add("taskpriority"),d.innerText="High",d.classList.add("priorityhigh"));const l=document.querySelector(".taskdatedueinput").value,m=document.createElement("div");m.innerText=l,e.appendChild(a),e.appendChild(r),e.appendChild(o),e.appendChild(u),e.appendChild(d),e.appendChild(m),t.appendChild(e)}(),localStorage.setItem("tasks",JSON.stringify(i))}))}(s.target.id)):"important"===s.target.id?(n.innerHTML="",o(),i.forEach((e=>{"High"==e.getPriority&&t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)}))):"alltasks"===s.target.id?(n.innerHTML="",o(),i.forEach((e=>{t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)}))):"today"===s.target.id?(n.innerHTML="",o(),function(){let n=Date.parse(function(t,n,i){e(2,arguments);var o=String(n),s=i||{},u=s.locale||g,c=u.options&&u.options.firstWeekContainsDate,d=null==c?1:f(c),l=null==s.firstWeekContainsDate?d:f(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=u.options&&u.options.weekStartsOn,h=null==m?0:f(m),p=null==s.weekStartsOn?h:f(s.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var v=r(t);if(!a(v))throw new RangeError("Invalid time value");var y=B(v),b=w(v,y),T={firstWeekContainsDate:l,weekStartsOn:p,locale:u,_originalDate:v};return o.match(_).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,R[e])(t,u.formatLong,T):t})).join("").match($).map((function(e){if("''"===e)return"'";var r=e[0];if("'"===r)return et(e);var a=F[r];if(a)return!s.useAdditionalWeekYearTokens&&X(e)&&Z(e,n,t),!s.useAdditionalDayOfYearTokens&&G(e)&&Z(e,n,t),a(b,e,u.localize,T);if(r.match(tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return e})).join("")}(new Date,"yyyy-MM-dd"));i.forEach((e=>{n==Date.parse(e.getDuedate)&&t(e.getTitle,e.getDescription,e.getResponsible,e.getPriority,e.getDuedate,e.isChecked)}))}()):"thisweek"===s.target.id&&(n.innerHTML="",o(),i.forEach((n=>{let a=function(t,n){e(1,arguments);var r=n||{},a=null==r.additionalDigits?2:f(r.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var i,o=st(t);if(o.date){var s=ut(o.date,a);i=ct(s.restDateString,s.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var u,c=i.getTime(),d=0;if(o.time&&(d=lt(o.time),isNaN(d)))return new Date(NaN);if(!o.timezone){var l=new Date(c+d),m=new Date(0);return m.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),m.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),m}return u=ht(o.timezone),isNaN(u)?new Date(NaN):new Date(c+d+u)}(n.getDuedate);(function(t){let n=function(t,n){e(2,arguments);var a=r(t),i=f(n);return isNaN(i)?new Date(NaN):i?(a.setDate(a.getDate()+i),a):a}(new Date,8);return function(t,n){e(2,arguments);var a=r(t).getTime(),i=r(n.start).getTime(),o=r(n.end).getTime();if(!(i<=o))throw new RangeError("Invalid interval");return a>=i&&a<=o}(t,{start:new Date,end:n})})(a)&&t(n.getTitle,n.getDescription,n.getResponsible,n.getPriority,n.getDuedate,n.isChecked)})))}))}()})()})();