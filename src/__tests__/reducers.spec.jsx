import React from "react";
import reducers from '../reducers';

test('reducers', () => {
  let state;
  state = reducers({forecastData:{query:{count:1,created:'2018-08-17T21:18:38Z',lang:'en-US',results:{channel:{units:{distance:'mi',pressure:'in',speed:'mph',temperature:'F'},title:'Yahoo! Weather - New York, NY, US',link:'http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2459115/',description:'Yahoo! Weather for New York, NY, US',language:'en-us',lastBuildDate:'Fri, 17 Aug 2018 05:18 PM EDT',ttl:'60',location:{city:'New York',country:'United States',region:' NY'},wind:{chill:'86',direction:'165',speed:'22'},atmosphere:{humidity:'70',pressure:'1013.0',rising:'0',visibility:'16.1'},astronomy:{sunrise:'6:8 am',sunset:'7:52 pm'},image:{title:'Yahoo! Weather',width:'142',height:'18',link:'http://weather.yahoo.com',url:'http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif'},item:{title:'Conditions for New York, NY, US at 04:00 PM EDT',lat:'40.71455','long':'-74.007118',link:'http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2459115/',pubDate:'Fri, 17 Aug 2018 04:00 PM EDT',condition:{code:'28',date:'Fri, 17 Aug 2018 04:00 PM EDT',temp:'86',text:'Mostly Cloudy'},forecast:[{code:'4',date:'17 Aug 2018',day:'Fri',high:'87',low:'76',text:'Thunderstorms'},{code:'4',date:'18 Aug 2018',day:'Sat',high:'86',low:'75',text:'Thunderstorms'},{code:'4',date:'19 Aug 2018',day:'Sun',high:'76',low:'70',text:'Thunderstorms'},{code:'12',date:'20 Aug 2018',day:'Mon',high:'78',low:'67',text:'Rain'},{code:'47',date:'21 Aug 2018',day:'Tue',high:'78',low:'69',text:'Scattered Thunderstorms'},{code:'4',date:'22 Aug 2018',day:'Wed',high:'84',low:'74',text:'Thunderstorms'},{code:'30',date:'23 Aug 2018',day:'Thu',high:'80',low:'68',text:'Partly Cloudy'},{code:'30',date:'24 Aug 2018',day:'Fri',high:'81',low:'68',text:'Partly Cloudy'},{code:'30',date:'25 Aug 2018',day:'Sat',high:'79',low:'67',text:'Partly Cloudy'},{code:'4',date:'26 Aug 2018',day:'Sun',high:'81',low:'71',text:'Thunderstorms'}],description:'<![CDATA[<img src="http://l.yimg.com/a/i/us/we/52/28.gif"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Mostly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Fri - Thunderstorms. High: 87Low: 76\n<BR /> Sat - Thunderstorms. High: 86Low: 75\n<BR /> Sun - Thunderstorms. High: 76Low: 70\n<BR /> Mon - Rain. High: 78Low: 67\n<BR /> Tue - Scattered Thunderstorms. High: 78Low: 69\n<BR />\n<BR />\n<a href="http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2459115/">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>',guid:{isPermaLink:'false'}}}}}},currentData:'',theme:''}, {type:'SET_THEME',payload:'#4242BA'});
  expect(state).toEqual({forecastData:{query:{count:1,created:'2018-08-17T21:18:38Z',lang:'en-US',results:{channel:{units:{distance:'mi',pressure:'in',speed:'mph',temperature:'F'},title:'Yahoo! Weather - New York, NY, US',link:'http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2459115/',description:'Yahoo! Weather for New York, NY, US',language:'en-us',lastBuildDate:'Fri, 17 Aug 2018 05:18 PM EDT',ttl:'60',location:{city:'New York',country:'United States',region:' NY'},wind:{chill:'86',direction:'165',speed:'22'},atmosphere:{humidity:'70',pressure:'1013.0',rising:'0',visibility:'16.1'},astronomy:{sunrise:'6:8 am',sunset:'7:52 pm'},image:{title:'Yahoo! Weather',width:'142',height:'18',link:'http://weather.yahoo.com',url:'http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif'},item:{title:'Conditions for New York, NY, US at 04:00 PM EDT',lat:'40.71455','long':'-74.007118',link:'http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2459115/',pubDate:'Fri, 17 Aug 2018 04:00 PM EDT',condition:{code:'28',date:'Fri, 17 Aug 2018 04:00 PM EDT',temp:'86',text:'Mostly Cloudy'},forecast:[{code:'4',date:'17 Aug 2018',day:'Fri',high:'87',low:'76',text:'Thunderstorms'},{code:'4',date:'18 Aug 2018',day:'Sat',high:'86',low:'75',text:'Thunderstorms'},{code:'4',date:'19 Aug 2018',day:'Sun',high:'76',low:'70',text:'Thunderstorms'},{code:'12',date:'20 Aug 2018',day:'Mon',high:'78',low:'67',text:'Rain'},{code:'47',date:'21 Aug 2018',day:'Tue',high:'78',low:'69',text:'Scattered Thunderstorms'},{code:'4',date:'22 Aug 2018',day:'Wed',high:'84',low:'74',text:'Thunderstorms'},{code:'30',date:'23 Aug 2018',day:'Thu',high:'80',low:'68',text:'Partly Cloudy'},{code:'30',date:'24 Aug 2018',day:'Fri',high:'81',low:'68',text:'Partly Cloudy'},{code:'30',date:'25 Aug 2018',day:'Sat',high:'79',low:'67',text:'Partly Cloudy'},{code:'4',date:'26 Aug 2018',day:'Sun',high:'81',low:'71',text:'Thunderstorms'}],description:'<![CDATA[<img src="http://l.yimg.com/a/i/us/we/52/28.gif"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Mostly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Fri - Thunderstorms. High: 87Low: 76\n<BR /> Sat - Thunderstorms. High: 86Low: 75\n<BR /> Sun - Thunderstorms. High: 76Low: 70\n<BR /> Mon - Rain. High: 78Low: 67\n<BR /> Tue - Scattered Thunderstorms. High: 78Low: 69\n<BR />\n<BR />\n<a href="http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2459115/">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>',guid:{isPermaLink:'false'}}}}}},currentData:'',theme:'#4242BA'});
});