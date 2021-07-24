import React from 'react';

import uniqid from 'uniqid';
 

const AccordionData = [{
	question: "what is your name",
	answer :" my name is anonymous",
   id : uniqid()

},
	{
		question: ' what is react',
		answer:'React is a JS library',
   id : uniqid()
	},
	{

		question: 'why to learn react',
		answer:' From past Several years developer are using react because it have a reusable  components that can be very benificial for the large application,also react can make a one page application which gives you a feel of the mobile app while using website',
   id : uniqid()
	}

]
export default AccordionData;