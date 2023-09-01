const date = new Date()

const CriticalData = [

{
	id:'1',
	name:'Dudeman23',
	message: 'please send me all the data you have on me (Player data will be sent in accordance with GDPR rules)',
	requestType:'warning',
	days: 'This request is over 30 days late',
	date:date.toDateString(),
},

{
	id:'2',
	name:'FlyLady24',
	message: 'please send me all the data you have on me (Player data will be sent in accordance with GDPR rules)',
	requestType:'warning',
	days: 'This request is over 30 days late',
	date:date.toDateString(),
},

{
	id:'3',
	name:'Rampage',
	message: 'please send me all the data you have on me (Player data will be sent in accordance with GDPR rules)',
	requestType:'critical',
	days: 'This request is over 30 days late',
	date:date.toDateString(),
},

{
	id:'4',
	name:'Chandler',
	message: 'please send me all the data you have on me (Player data will be sent in accordance with GDPR rules)',
	requestType:'critical',
	days: 'This request is over 30 days late',
	date:date.toDateString(),
},

];

export default CriticalData