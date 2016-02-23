var labelType, useGradients, nativeTextSupport, animate;
var colorCold = [0, 0, 200], colorWarm = [0, 200, 0];
var priorityAttribute = true, startAttribute = true, finishAttribute = true, durationAttribute = true, completeAttribute = true;
var treemap;

(function()
{
	var ua = navigator.userAgent,
		iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
		typeOfCanvas = typeof HTMLCanvasElement,
		nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
		textSupport = nativeCanvasSupport && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
	labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
	nativeTextSupport = labelType == 'Native';
	useGradients = nativeCanvasSupport;
	animate = !(iStuff || !nativeCanvasSupport);
})();

function RgbToHsl(r, g, b)
{
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;
	if(max == min)
	{
		h = s = 0;
	}
	else
	{
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max)
		{
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}
	return [h, s, l];
}

function HslToRgb(h, s, l)
{
	var r, g, b;
	if(s == 0)
	{
		r = g = b = l;
	}
	else
	{
		function Hue2Rgb(p, q, t)
		{
			if(t < 0) t += 1;
			if(t > 1) t -= 1;
			if(t < 1/6) return p + (q - p) * 6 * t;
			if(t < 1/2) return q;
			if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
			return p;
		}
		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = Hue2Rgb(p, q, h + 1/3);
		g = Hue2Rgb(p, q, h);
		b = Hue2Rgb(p, q, h - 1/3);
	}
	return [r*255, g*255, b*255];
}

function ColorBlendArray(color1, color2, ratio)
{
	if((ratio < 0.0) || (ratio > 1.0))
	{
		ratio = 0.5;
	}
	var hsl1 = RgbToHsl(color1[0], color1[1], color1[2]);
	var hsl2 = RgbToHsl(color2[0], color2[1], color2[2]);
	var h = (1.0-ratio)*hsl1[0] + ratio*hsl2[0];
	var s = (1.0-ratio)*hsl1[1] + ratio*hsl2[1];
	var l = (1.0-ratio)*hsl1[2] + ratio*hsl2[2];
	var result = HslToRgb(h, s, l);
	return result;
};

function ColorBlend(color1, color2, ratio)
{
	if((ratio < 0.0) || (ratio > 1.0))
	{
		ratio = 0.5;
	}
	var hsl1 = RgbToHsl(color1[0], color1[1], color1[2]);
	var hsl2 = RgbToHsl(color2[0], color2[1], color2[2]);
	var h = (1.0-ratio)*hsl1[0] + ratio*hsl2[0];
	var s = (1.0-ratio)*hsl1[1] + ratio*hsl2[1];
	var l = (1.0-ratio)*hsl1[2] + ratio*hsl2[2];
	var result = HslToRgb(h, s, l);
	return 'rgba(' + Math.round(result[0]) + ', ' + Math.round(result[1]) + ', ' + Math.round(result[2]) + ', 0)';
};

function ColorToHex(color)
{
	var m = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(color);
	return m ? (1 << 24 | m[1] << 16 | m[2] << 8 | m[3]).toString(16).substr(1) : color;
};

var Log =
{
	elem: false,
	write: function(text)
	{
		if(!this.elem)
			this.elem = document.getElementById('log');
		this.elem.innerHTML = text;
		this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
	}
};

function init()
{
	var json =
	{
		"name": "CommercialConstructionProjectPlan.mpp",
		"data":
		{
			"$color": "#606060"
		},
		"children":
		[
			{
				"id": "1",
				"name": "Three-story Office Building (76,000 square feet)",
				"data": 
				{
					"$area": 344.0,
					"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7702269408079988)),
					"priority": "500",
					"start": "Mon Jan 03 08:00:00 EST 2000",
					"finish": "Thu Apr 26 17:00:00 EDT 2001",
					"duration": "344.0",
					"percentageComplete": "0.7702269408079988",
					"milestone": "false",
					"notes": ""
				},
				"children": 
				[
				{
					"id": "2",
					"name": "General Conditions",
					"data": 
					{
						"$area": 17.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.14441455238801093)),
						"priority": "500",
						"start": "Mon Jan 03 08:00:00 EST 2000",
						"finish": "Tue Jan 25 17:00:00 EST 2000",
						"duration": "17.0",
						"percentageComplete": "0.14441455238801093",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "3",
						"name": "Receive notice to proceed and sign contract",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.43779533057789033)),
							"priority": "500",
							"start": "Mon Jan 03 08:00:00 EST 2000",
							"finish": "Wed Jan 05 17:00:00 EST 2000",
							"duration": "3.0",
							"percentageComplete": "0.43779533057789033",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "4",
						"name": "Submit bond and insurance documents",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.757890854587266)),
							"priority": "500",
							"start": "Thu Jan 06 08:00:00 EST 2000",
							"finish": "Fri Jan 07 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.757890854587266",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "5",
						"name": "Prepare and submit project schedule",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9288617286830411)),
							"priority": "500",
							"start": "Mon Jan 10 08:00:00 EST 2000",
							"finish": "Tue Jan 11 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.9288617286830411",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "6",
						"name": "Prepare and submit schedule of values",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5666082219515007)),
							"priority": "500",
							"start": "Wed Jan 12 08:00:00 EST 2000",
							"finish": "Thu Jan 13 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.5666082219515007",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "7",
						"name": "Obtain building permits",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4471974584867632)),
							"priority": "500",
							"start": "Thu Jan 06 08:00:00 EST 2000",
							"finish": "Tue Jan 11 17:00:00 EST 2000",
							"duration": "4.0",
							"percentageComplete": "0.4471974584867632",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "8",
						"name": "Submit preliminary shop drawings",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.026085671132354715)),
							"priority": "500",
							"start": "Wed Jan 12 08:00:00 EST 2000",
							"finish": "Tue Jan 25 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.026085671132354715",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "9",
						"name": "Submit monthly requests for payment",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9480971670812306)),
							"priority": "500",
							"start": "Thu Jan 06 08:00:00 EST 2000",
							"finish": "Thu Jan 06 17:00:00 EST 2000",
							"duration": "1.0",
							"percentageComplete": "0.9480971670812306",
							"milestone": "false",
							"notes": "Monthly requests for payment can be entered as a recurring task. See the Help topic \"Enter a recurring task.\"\n"
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "10",
					"name": "Long Lead Procurement",
					"data": 
					{
						"$area": 70.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8774861587549787)),
						"priority": "500",
						"start": "Fri Jan 07 08:00:00 EST 2000",
						"finish": "Thu Apr 13 17:00:00 EDT 2000",
						"duration": "70.0",
						"percentageComplete": "0.8774861587549787",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "11",
						"name": "Submit shop drawings and order long lead items - steel",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.651133253945794)),
							"priority": "500",
							"start": "Fri Jan 07 08:00:00 EST 2000",
							"finish": "Thu Jan 20 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.651133253945794",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "12",
						"name": "Submit shop drawings and order long lead items - roofing",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.20875488057428204)),
							"priority": "500",
							"start": "Wed Jan 26 08:00:00 EST 2000",
							"finish": "Tue Feb 08 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.20875488057428204",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "13",
						"name": "Submit shop drawings and order long lead items - elevator",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.16530370946264938)),
							"priority": "500",
							"start": "Wed Jan 26 08:00:00 EST 2000",
							"finish": "Tue Feb 08 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.16530370946264938",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "14",
						"name": "Submit shop drawings and order long lead items - plumbing",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.24321506810561389)),
							"priority": "500",
							"start": "Wed Jan 26 08:00:00 EST 2000",
							"finish": "Tue Feb 08 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.24321506810561389",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "15",
						"name": "Submit shop drawings and order long lead items - electric",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5308047749705601)),
							"priority": "500",
							"start": "Wed Jan 26 08:00:00 EST 2000",
							"finish": "Tue Feb 08 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.5308047749705601",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "16",
						"name": "Submit shop drawings and order long lead items - HVAC",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.3612088366160212)),
							"priority": "500",
							"start": "Wed Jan 26 08:00:00 EST 2000",
							"finish": "Tue Feb 08 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.3612088366160212",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "17",
						"name": "Detail, fabricate and deliver steel",
						"data": 
						{
							"$area": 12.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5035182788711479)),
							"priority": "500",
							"start": "Fri Jan 21 08:00:00 EST 2000",
							"finish": "Thu Apr 13 17:00:00 EDT 2000",
							"duration": "12.0",
							"percentageComplete": "0.5035182788711479",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "18",
					"name": "Mobilize on Site",
					"data": 
					{
						"$area": 10.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9116839501696327)),
						"priority": "500",
						"start": "Thu Jan 06 08:00:00 EST 2000",
						"finish": "Wed Jan 19 17:00:00 EST 2000",
						"duration": "10.0",
						"percentageComplete": "0.9116839501696327",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "19",
						"name": "Install temporary power",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.22767820956928386)),
							"priority": "500",
							"start": "Thu Jan 06 08:00:00 EST 2000",
							"finish": "Fri Jan 07 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.22767820956928386",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "20",
						"name": "Install temporary water service",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5045132110760944)),
							"priority": "500",
							"start": "Thu Jan 06 08:00:00 EST 2000",
							"finish": "Fri Jan 07 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.5045132110760944",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "21",
						"name": "Set up site office",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.887833275480077)),
							"priority": "500",
							"start": "Mon Jan 10 08:00:00 EST 2000",
							"finish": "Wed Jan 12 17:00:00 EST 2000",
							"duration": "3.0",
							"percentageComplete": "0.887833275480077",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "22",
						"name": "Set line and grade benchmarks",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.6763305817450568)),
							"priority": "500",
							"start": "Thu Jan 13 08:00:00 EST 2000",
							"finish": "Mon Jan 17 17:00:00 EST 2000",
							"duration": "3.0",
							"percentageComplete": "0.6763305817450568",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "23",
						"name": "Prepare site - lay down yard and temporary fencing",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5280165736876105)),
							"priority": "500",
							"start": "Tue Jan 18 08:00:00 EST 2000",
							"finish": "Wed Jan 19 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.5280165736876105",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "24",
					"name": "Site Grading and Utilities",
					"data": 
					{
						"$area": 35.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.826665051533216)),
						"priority": "500",
						"start": "Thu Jan 20 08:00:00 EST 2000",
						"finish": "Wed Mar 08 17:00:00 EST 2000",
						"duration": "35.0",
						"percentageComplete": "0.826665051533216",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "25",
						"name": "Clear and grub site",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.10563342736630166)),
							"priority": "500",
							"start": "Thu Jan 20 08:00:00 EST 2000",
							"finish": "Mon Jan 24 17:00:00 EST 2000",
							"duration": "3.0",
							"percentageComplete": "0.10563342736630166",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "26",
						"name": "Stone site access and temporary parking area",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.18395619024237186)),
							"priority": "500",
							"start": "Tue Jan 25 08:00:00 EST 2000",
							"finish": "Wed Jan 26 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.18395619024237186",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "27",
						"name": "Rough grade site (cut and fill)",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8813821530150021)),
							"priority": "500",
							"start": "Thu Jan 27 08:00:00 EST 2000",
							"finish": "Wed Feb 02 17:00:00 EST 2000",
							"duration": "1.0",
							"percentageComplete": "0.8813821530150021",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "28",
						"name": "Install storm drainage",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9801490765192736)),
							"priority": "500",
							"start": "Thu Feb 03 08:00:00 EST 2000",
							"finish": "Wed Feb 16 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.9801490765192736",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "29",
						"name": "Install exterior fire line and building fire riser",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9962393105198737)),
							"priority": "500",
							"start": "Thu Feb 03 08:00:00 EST 2000",
							"finish": "Wed Feb 16 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.9962393105198737",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "30",
						"name": "Perform final site grading",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.35247873948038666)),
							"priority": "500",
							"start": "Thu Feb 17 08:00:00 EST 2000",
							"finish": "Wed Mar 01 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.35247873948038666",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "31",
						"name": "Erect building batter boards and layout building",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.23239374417554493)),
							"priority": "500",
							"start": "Thu Mar 02 08:00:00 EST 2000",
							"finish": "Wed Mar 08 17:00:00 EST 2000",
							"duration": "1.0",
							"percentageComplete": "0.23239374417554493",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "32",
					"name": "Foundations",
					"data": 
					{
						"$area": 33.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8095277765152277)),
						"priority": "500",
						"start": "Thu Mar 09 08:00:00 EST 2000",
						"finish": "Mon Apr 24 17:00:00 EDT 2000",
						"duration": "33.0",
						"percentageComplete": "0.8095277765152277",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "33",
						"name": "Excavate foundations",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.2765756706072674)),
							"priority": "500",
							"start": "Thu Mar 09 08:00:00 EST 2000",
							"finish": "Wed Mar 22 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.2765756706072674",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "34",
						"name": "Excavate elevator pit",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.28134412938271625)),
							"priority": "500",
							"start": "Thu Mar 09 08:00:00 EST 2000",
							"finish": "Fri Mar 10 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.28134412938271625",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "35",
						"name": "Form column piers and spread foundations",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.2810215977053888)),
							"priority": "500",
							"start": "Thu Mar 23 08:00:00 EST 2000",
							"finish": "Tue Mar 28 17:00:00 EST 2000",
							"duration": "4.0",
							"percentageComplete": "0.2810215977053888",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "36",
						"name": "Rough-in electric and plumbing in elevator",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4588901174171437)),
							"priority": "500",
							"start": "Mon Mar 13 08:00:00 EST 2000",
							"finish": "Thu Mar 16 17:00:00 EST 2000",
							"duration": "4.0",
							"percentageComplete": "0.4588901174171437",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "37",
						"name": "Form elevator pit walls",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.2109273341223008)),
							"priority": "500",
							"start": "Fri Mar 17 08:00:00 EST 2000",
							"finish": "Wed Mar 22 17:00:00 EST 2000",
							"duration": "4.0",
							"percentageComplete": "0.2109273341223008",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "38",
						"name": "Set reinforcing and anchor bolts",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.6111975010732265)),
							"priority": "500",
							"start": "Wed Mar 29 08:00:00 EST 2000",
							"finish": "Mon Apr 03 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.6111975010732265",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "39",
						"name": "Pour column piers and foundations",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.6441976147718672)),
							"priority": "500",
							"start": "Tue Apr 04 08:00:00 EDT 2000",
							"finish": "Mon Apr 10 17:00:00 EDT 2000",
							"duration": "5.0",
							"percentageComplete": "0.6441976147718672",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "40",
						"name": "Pour concrete elevator walls",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.2209088730144444)),
							"priority": "500",
							"start": "Thu Mar 23 08:00:00 EST 2000",
							"finish": "Thu Mar 23 17:00:00 EST 2000",
							"duration": "1.0",
							"percentageComplete": "0.2209088730144444",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "41",
						"name": "Cure elevator wall concrete",
						"data": 
						{
							"$area": 7.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.26631004960062554)),
							"priority": "500",
							"start": "Fri Mar 24 08:00:00 EST 2000",
							"finish": "Mon Apr 03 17:00:00 EDT 2000",
							"duration": "7.0",
							"percentageComplete": "0.26631004960062554",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "42",
						"name": "Cure piers and foundations",
						"data": 
						{
							"$area": 7.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.46778330014926073)),
							"priority": "500",
							"start": "Tue Apr 11 08:00:00 EDT 2000",
							"finish": "Wed Apr 19 17:00:00 EDT 2000",
							"duration": "7.0",
							"percentageComplete": "0.46778330014926073",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "43",
						"name": "Strip wall forms",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7742729027550599)),
							"priority": "500",
							"start": "Tue Apr 04 08:00:00 EDT 2000",
							"finish": "Tue Apr 04 17:00:00 EDT 2000",
							"duration": "1.0",
							"percentageComplete": "0.7742729027550599",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "44",
						"name": "Strip column piers and foundation forms",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8274989819396433)),
							"priority": "500",
							"start": "Thu Apr 20 08:00:00 EDT 2000",
							"finish": "Mon Apr 24 17:00:00 EDT 2000",
							"duration": "3.0",
							"percentageComplete": "0.8274989819396433",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "45",
						"name": "Install pneumatic tube in elevator pit",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.6156909180077249)),
							"priority": "500",
							"start": "Wed Apr 05 08:00:00 EDT 2000",
							"finish": "Fri Apr 07 17:00:00 EDT 2000",
							"duration": "3.0",
							"percentageComplete": "0.6156909180077249",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "46",
						"name": "Prepare and pour concrete floor in elevator pit",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4886512159762778)),
							"priority": "500",
							"start": "Mon Apr 10 08:00:00 EDT 2000",
							"finish": "Mon Apr 10 17:00:00 EDT 2000",
							"duration": "1.0",
							"percentageComplete": "0.4886512159762778",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "47",
					"name": "Steel Erection",
					"data": 
					{
						"$area": 45.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4926262938863817)),
						"priority": "500",
						"start": "Tue Apr 25 08:00:00 EDT 2000",
						"finish": "Mon Jun 26 17:00:00 EDT 2000",
						"duration": "45.0",
						"percentageComplete": "0.4926262938863817",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "48",
						"name": "Erect steel columns, beams and joist - 1st and 2nd floors",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.45354680946024306)),
							"priority": "500",
							"start": "Tue Apr 25 08:00:00 EDT 2000",
							"finish": "Mon May 08 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.45354680946024306",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "49",
						"name": "Erect steel columns, beams and joist - 3rd floor and roof",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5846922383928537)),
							"priority": "500",
							"start": "Tue May 09 08:00:00 EDT 2000",
							"finish": "Mon May 22 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.5846922383928537",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "50",
						"name": "Install miscellaneous iron and bracing - 1st and 2nd floors",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.0946423129974775)),
							"priority": "500",
							"start": "Tue May 09 08:00:00 EDT 2000",
							"finish": "Mon May 22 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.0946423129974775",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "51",
						"name": "Install miscellaneous iron and bracing - 3rd floor and roof",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7512014950185331)),
							"priority": "500",
							"start": "Tue May 23 08:00:00 EDT 2000",
							"finish": "Mon Jun 05 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.7512014950185331",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "52",
						"name": "Install stairs and miscellaneous iron railing",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.3567978145768279)),
							"priority": "500",
							"start": "Tue Jun 06 08:00:00 EDT 2000",
							"finish": "Mon Jun 19 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.3567978145768279",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "53",
						"name": "Touch-up paint on steel",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5379877139680098)),
							"priority": "500",
							"start": "Tue Jun 20 08:00:00 EDT 2000",
							"finish": "Mon Jun 26 17:00:00 EDT 2000",
							"duration": "1.0",
							"percentageComplete": "0.5379877139680098",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "54",
					"name": "Form and Pour Concrete - Floors and Roof",
					"data": 
					{
						"$area": 85.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.21475774066729125)),
						"priority": "500",
						"start": "Tue May 09 08:00:00 EDT 2000",
						"finish": "Mon Sep 04 17:00:00 EDT 2000",
						"duration": "85.0",
						"percentageComplete": "0.21475774066729125",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "55",
						"name": "Form 2nd floor including all floor openings",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.272762919322029)),
							"priority": "500",
							"start": "Tue Jun 27 08:00:00 EDT 2000",
							"finish": "Mon Jul 03 17:00:00 EDT 2000",
							"duration": "5.0",
							"percentageComplete": "0.272762919322029",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "56",
						"name": "Install rebar and in-floor utilities (including mechanical, electrical, plumbing)",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.43331688445947236)),
							"priority": "500",
							"start": "Tue May 09 08:00:00 EDT 2000",
							"finish": "Mon May 15 17:00:00 EDT 2000",
							"duration": "5.0",
							"percentageComplete": "0.43331688445947236",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "57",
						"name": "Pour 2nd floor slab",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8123663460472798)),
							"priority": "500",
							"start": "Tue Jul 04 08:00:00 EDT 2000",
							"finish": "Fri Jul 07 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.8123663460472798",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "58",
						"name": "Cure 2nd floor slab",
						"data": 
						{
							"$area": 7.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4606123051417623)),
							"priority": "500",
							"start": "Mon Jul 10 08:00:00 EDT 2000",
							"finish": "Tue Jul 18 17:00:00 EDT 2000",
							"duration": "7.0",
							"percentageComplete": "0.4606123051417623",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "59",
						"name": "Strip forms from 2nd floor slab",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7512121178916658)),
							"priority": "500",
							"start": "Wed Jul 19 08:00:00 EDT 2000",
							"finish": "Thu Jul 20 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.7512121178916658",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "60",
						"name": "Form 3rd floor including all floor openings",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5473179799577309)),
							"priority": "500",
							"start": "Wed Jul 19 08:00:00 EDT 2000",
							"finish": "Tue Jul 25 17:00:00 EDT 2000",
							"duration": "5.0",
							"percentageComplete": "0.5473179799577309",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "61",
						"name": "Install rebar and in-floor utilities (including mechanical, electrical, plumbing)",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.3794558093411541)),
							"priority": "500",
							"start": "Wed Jul 19 08:00:00 EDT 2000",
							"finish": "Tue Jul 25 17:00:00 EDT 2000",
							"duration": "5.0",
							"percentageComplete": "0.3794558093411541",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "62",
						"name": "Pour 3rd floor slab",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8178395900692853)),
							"priority": "500",
							"start": "Wed Jul 26 08:00:00 EDT 2000",
							"finish": "Mon Jul 31 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.8178395900692853",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "63",
						"name": "Cure 3rd floor slab",
						"data": 
						{
							"$area": 7.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5406739061750475)),
							"priority": "500",
							"start": "Tue Aug 01 08:00:00 EDT 2000",
							"finish": "Wed Aug 09 17:00:00 EDT 2000",
							"duration": "7.0",
							"percentageComplete": "0.5406739061750475",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "64",
						"name": "Strip forms from 3rd floor slab",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5083161764390967)),
							"priority": "500",
							"start": "Thu Aug 10 08:00:00 EDT 2000",
							"finish": "Fri Aug 11 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.5083161764390967",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "65",
						"name": "Form roof slab including all floor openings",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.626954919196296)),
							"priority": "500",
							"start": "Thu Aug 10 08:00:00 EDT 2000",
							"finish": "Wed Aug 16 17:00:00 EDT 2000",
							"duration": "5.0",
							"percentageComplete": "0.626954919196296",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "66",
						"name": "Install rebar and in-floor utilities (including mechanical, electrical, plumbing)",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5080683776115407)),
							"priority": "500",
							"start": "Thu Aug 10 08:00:00 EDT 2000",
							"finish": "Wed Aug 16 17:00:00 EDT 2000",
							"duration": "5.0",
							"percentageComplete": "0.5080683776115407",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "67",
						"name": "Pour roof slab",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8782843219740034)),
							"priority": "500",
							"start": "Thu Aug 17 08:00:00 EDT 2000",
							"finish": "Tue Aug 22 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.8782843219740034",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "68",
						"name": "Cure roof slab",
						"data": 
						{
							"$area": 7.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.16130768591565303)),
							"priority": "500",
							"start": "Wed Aug 23 08:00:00 EDT 2000",
							"finish": "Thu Aug 31 17:00:00 EDT 2000",
							"duration": "7.0",
							"percentageComplete": "0.16130768591565303",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "69",
						"name": "Strip forms from roof slab",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8169673647164094)),
							"priority": "500",
							"start": "Fri Sep 01 08:00:00 EDT 2000",
							"finish": "Mon Sep 04 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.8169673647164094",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "70",
						"name": "Form 1st floor",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7535942883905471)),
							"priority": "500",
							"start": "Fri Jul 21 08:00:00 EDT 2000",
							"finish": "Wed Jul 26 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.7535942883905471",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "71",
						"name": "Install electrical underground",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.18985168484288795)),
							"priority": "500",
							"start": "Fri Jul 21 08:00:00 EDT 2000",
							"finish": "Thu Jul 27 17:00:00 EDT 2000",
							"duration": "1.0",
							"percentageComplete": "0.18985168484288795",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "72",
						"name": "Install plumbing underground",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.0034564892111418333)),
							"priority": "500",
							"start": "Fri Jul 21 08:00:00 EDT 2000",
							"finish": "Thu Jul 27 17:00:00 EDT 2000",
							"duration": "1.0",
							"percentageComplete": "0.0034564892111418333",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "73",
						"name": "Install rebar and in-floor utilities",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7235245084523403)),
							"priority": "500",
							"start": "Fri Jul 21 08:00:00 EDT 2000",
							"finish": "Wed Jul 26 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.7235245084523403",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "74",
						"name": "Pour 1st floor slab",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.10174311140114445)),
							"priority": "500",
							"start": "Fri Jul 28 08:00:00 EDT 2000",
							"finish": "Wed Aug 02 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.10174311140114445",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "75",
						"name": "Cure 1st floor slab",
						"data": 
						{
							"$area": 7.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.017283194147595493)),
							"priority": "500",
							"start": "Thu Aug 03 08:00:00 EDT 2000",
							"finish": "Fri Aug 11 17:00:00 EDT 2000",
							"duration": "7.0",
							"percentageComplete": "0.017283194147595493",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "76",
						"name": "Strip forms from 1st floor slab",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7143285423357109)),
							"priority": "500",
							"start": "Mon Aug 14 08:00:00 EDT 2000",
							"finish": "Tue Aug 15 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.7143285423357109",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "77",
					"name": "Carpentry Work",
					"data": 
					{
						"$area": 15.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4341948950366501)),
						"priority": "500",
						"start": "Tue Sep 05 08:00:00 EDT 2000",
						"finish": "Mon Sep 25 17:00:00 EDT 2000",
						"duration": "15.0",
						"percentageComplete": "0.4341948950366501",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "78",
						"name": "Install exterior sheathing and metal studs",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.36796143550949567)),
							"priority": "500",
							"start": "Tue Sep 05 08:00:00 EDT 2000",
							"finish": "Mon Sep 25 17:00:00 EDT 2000",
							"duration": "3.0",
							"percentageComplete": "0.36796143550949567",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "79",
					"name": "Masonry Work",
					"data": 
					{
						"$area": 110.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.03246008290086366)),
						"priority": "500",
						"start": "Tue Jun 06 08:00:00 EDT 2000",
						"finish": "Mon Nov 06 17:00:00 EST 2000",
						"duration": "110.0",
						"percentageComplete": "0.03246008290086366",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "80",
						"name": "Rough-in plumbing at toilets and masonry walls",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5332887085006638)),
							"priority": "500",
							"start": "Wed Aug 16 08:00:00 EDT 2000",
							"finish": "Tue Sep 12 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.5332887085006638",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "81",
						"name": "Lay masonry at core, mechanical, and toilets",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.714084364350053)),
							"priority": "500",
							"start": "Tue Jun 06 08:00:00 EDT 2000",
							"finish": "Mon Jul 03 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.714084364350053",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "82",
						"name": "Install exterior masonry work",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.49676284552797634)),
							"priority": "500",
							"start": "Tue Sep 26 08:00:00 EDT 2000",
							"finish": "Mon Oct 30 17:00:00 EST 2000",
							"duration": "5.0",
							"percentageComplete": "0.49676284552797634",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "83",
						"name": "Install roof drains",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.05488324085156915)),
							"priority": "500",
							"start": "Tue Oct 31 08:00:00 EST 2000",
							"finish": "Wed Nov 01 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.05488324085156915",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "84",
						"name": "Install tile in toilet rooms",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.3880782688468114)),
							"priority": "500",
							"start": "Wed Sep 13 08:00:00 EDT 2000",
							"finish": "Tue Sep 26 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.3880782688468114",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "85",
						"name": "Clean masonry",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9561221674801514)),
							"priority": "500",
							"start": "Tue Oct 31 08:00:00 EST 2000",
							"finish": "Mon Nov 06 17:00:00 EST 2000",
							"duration": "1.0",
							"percentageComplete": "0.9561221674801514",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "86",
						"name": "Clean toilet room tile",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.22962849172862154)),
							"priority": "500",
							"start": "Wed Sep 27 08:00:00 EDT 2000",
							"finish": "Tue Oct 03 17:00:00 EDT 2000",
							"duration": "1.0",
							"percentageComplete": "0.22962849172862154",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "87",
					"name": "Roofing",
					"data": 
					{
						"$area": 31.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.0019155469354128485)),
						"priority": "500",
						"start": "Tue Oct 31 08:00:00 EST 2000",
						"finish": "Tue Dec 12 17:00:00 EST 2000",
						"duration": "31.0",
						"percentageComplete": "0.0019155469354128485",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "88",
						"name": "Install flashing at parapet walls",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.042375863281303716)),
							"priority": "500",
							"start": "Tue Oct 31 08:00:00 EST 2000",
							"finish": "Fri Nov 03 17:00:00 EST 2000",
							"duration": "4.0",
							"percentageComplete": "0.042375863281303716",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "89",
						"name": "Pour lightweight concrete roof fill",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.10490720671391929)),
							"priority": "500",
							"start": "Mon Nov 06 08:00:00 EST 2000",
							"finish": "Tue Nov 07 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.10490720671391929",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "90",
						"name": "Install seamless roofing material",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7009525929772015)),
							"priority": "500",
							"start": "Wed Nov 15 08:00:00 EST 2000",
							"finish": "Tue Nov 21 17:00:00 EST 2000",
							"duration": "5.0",
							"percentageComplete": "0.7009525929772015",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "91",
						"name": "Spread stone ballast on seamless roof",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5634828371960668)),
							"priority": "500",
							"start": "Wed Nov 22 08:00:00 EST 2000",
							"finish": "Tue Nov 28 17:00:00 EST 2000",
							"duration": "5.0",
							"percentageComplete": "0.5634828371960668",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "92",
						"name": "Set rooftop equipment",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.07063426001951167)),
							"priority": "500",
							"start": "Wed Nov 29 08:00:00 EST 2000",
							"finish": "Tue Dec 12 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.07063426001951167",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "93",
					"name": "Window wall and store front closures",
					"data": 
					{
						"$area": 60.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.46865576946419196)),
						"priority": "500",
						"start": "Tue Oct 31 08:00:00 EST 2000",
						"finish": "Mon Jan 22 17:00:00 EST 2001",
						"duration": "60.0",
						"percentageComplete": "0.46865576946419196",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "94",
						"name": "Install window wall aluminum and glass",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.33738075433103953)),
							"priority": "500",
							"start": "Tue Oct 31 08:00:00 EST 2000",
							"finish": "Mon Dec 04 17:00:00 EST 2000",
							"duration": "5.0",
							"percentageComplete": "0.33738075433103953",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "95",
						"name": "Install interior stud walls and drywall",
						"data": 
						{
							"$area": 5.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.07710607412081827)),
							"priority": "500",
							"start": "Tue Dec 05 08:00:00 EST 2000",
							"finish": "Mon Jan 08 17:00:00 EST 2001",
							"duration": "5.0",
							"percentageComplete": "0.07710607412081827",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "96",
						"name": "Install interior doors and hardware",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9168443115156383)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2001",
							"finish": "Mon Jan 22 17:00:00 EST 2001",
							"duration": "2.0",
							"percentageComplete": "0.9168443115156383",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "97",
						"name": "Install store front doors and hardware",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.359913321367362)),
							"priority": "500",
							"start": "Tue Oct 31 08:00:00 EST 2000",
							"finish": "Mon Nov 20 17:00:00 EST 2000",
							"duration": "3.0",
							"percentageComplete": "0.359913321367362",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "98",
					"name": "Building Finishes",
					"data": 
					{
						"$area": 80.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.1911216495762459)),
						"priority": "500",
						"start": "Tue Dec 05 08:00:00 EST 2000",
						"finish": "Mon Mar 26 17:00:00 EST 2001",
						"duration": "80.0",
						"percentageComplete": "0.1911216495762459",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "99",
						"name": "Install millwork and wood trim",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.25886068933705186)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2001",
							"finish": "Mon Jan 29 17:00:00 EST 2001",
							"duration": "3.0",
							"percentageComplete": "0.25886068933705186",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "100",
						"name": "Paint walls and woodwork",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9988702910512053)),
							"priority": "500",
							"start": "Tue Jan 30 08:00:00 EST 2001",
							"finish": "Mon Feb 26 17:00:00 EST 2001",
							"duration": "4.0",
							"percentageComplete": "0.9988702910512053",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "101",
						"name": "Install conduit at ceiling plenum space",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.32005697378534836)),
							"priority": "500",
							"start": "Tue Dec 05 08:00:00 EST 2000",
							"finish": "Mon Dec 25 17:00:00 EST 2000",
							"duration": "3.0",
							"percentageComplete": "0.32005697378534836",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "102",
						"name": "Install duct in ceiling plenum space",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.1596486446353349)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2001",
							"finish": "Mon Jan 29 17:00:00 EST 2001",
							"duration": "3.0",
							"percentageComplete": "0.1596486446353349",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "103",
						"name": "Install ceiling grid",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.29118056516722524)),
							"priority": "500",
							"start": "Tue Jan 30 08:00:00 EST 2001",
							"finish": "Mon Feb 12 17:00:00 EST 2001",
							"duration": "2.0",
							"percentageComplete": "0.29118056516722524",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "104",
						"name": "Install ceiling tile",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4080165186064917)),
							"priority": "500",
							"start": "Tue Feb 13 08:00:00 EST 2001",
							"finish": "Mon Feb 26 17:00:00 EST 2001",
							"duration": "2.0",
							"percentageComplete": "0.4080165186064917",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "105",
						"name": "Hang wallpaper",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.16428966773280151)),
							"priority": "500",
							"start": "Tue Feb 13 08:00:00 EST 2001",
							"finish": "Mon Feb 26 17:00:00 EST 2001",
							"duration": "2.0",
							"percentageComplete": "0.16428966773280151",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "106",
						"name": "Install building carpet",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.03679522931529322)),
							"priority": "500",
							"start": "Tue Feb 27 08:00:00 EST 2001",
							"finish": "Mon Mar 26 17:00:00 EST 2001",
							"duration": "4.0",
							"percentageComplete": "0.03679522931529322",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "107",
						"name": "Install hardware and accessories",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5368391358076812)),
							"priority": "500",
							"start": "Tue Feb 27 08:00:00 EST 2001",
							"finish": "Mon Mar 19 17:00:00 EST 2001",
							"duration": "3.0",
							"percentageComplete": "0.5368391358076812",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "108",
						"name": "Complete interior and exterior sod and plantings",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.6798039360201831)),
							"priority": "500",
							"start": "Tue Feb 27 08:00:00 EST 2001",
							"finish": "Mon Mar 12 17:00:00 EST 2001",
							"duration": "2.0",
							"percentageComplete": "0.6798039360201831",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "109",
						"name": "Pave, curb, and stripe parking lot",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.441940633148331)),
							"priority": "500",
							"start": "Tue Mar 13 08:00:00 EST 2001",
							"finish": "Mon Mar 26 17:00:00 EST 2001",
							"duration": "2.0",
							"percentageComplete": "0.441940633148331",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "110",
					"name": "Elevators",
					"data": 
					{
						"$area": 40.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.2726335949051152)),
						"priority": "500",
						"start": "Tue Jul 04 08:00:00 EDT 2000",
						"finish": "Mon Aug 28 17:00:00 EDT 2000",
						"duration": "40.0",
						"percentageComplete": "0.2726335949051152",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "111",
						"name": "Set elevator equipment in shafts",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.6777555593440772)),
							"priority": "500",
							"start": "Tue Jul 04 08:00:00 EDT 2000",
							"finish": "Mon Jul 31 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.6777555593440772",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "112",
						"name": "Set equipment in mechanical room",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.285408866002988)),
							"priority": "500",
							"start": "Tue Aug 01 08:00:00 EDT 2000",
							"finish": "Mon Aug 14 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.285408866002988",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "113",
						"name": "Test and align doors and equipment",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7594088151006954)),
							"priority": "500",
							"start": "Tue Aug 15 08:00:00 EDT 2000",
							"finish": "Mon Aug 28 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.7594088151006954",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "114",
					"name": "Plumbing",
					"data": 
					{
						"$area": 90.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.33933770466257696)),
						"priority": "500",
						"start": "Tue Nov 07 08:00:00 EST 2000",
						"finish": "Mon Mar 12 17:00:00 EST 2001",
						"duration": "90.0",
						"percentageComplete": "0.33933770466257696",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "115",
						"name": "Rough-in plumbing in drywall walls",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9110199592783802)),
							"priority": "500",
							"start": "Tue Dec 05 08:00:00 EST 2000",
							"finish": "Mon Jan 01 17:00:00 EST 2001",
							"duration": "4.0",
							"percentageComplete": "0.9110199592783802",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "116",
						"name": "Tie-in fire line riser and set valves",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.3880187741997597)),
							"priority": "500",
							"start": "Tue Nov 07 08:00:00 EST 2000",
							"finish": "Mon Nov 20 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.3880187741997597",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "117",
						"name": "Set plumbing fixtures and trim",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7266002848311159)),
							"priority": "500",
							"start": "Tue Jan 02 08:00:00 EST 2001",
							"finish": "Mon Jan 22 17:00:00 EST 2001",
							"duration": "3.0",
							"percentageComplete": "0.7266002848311159",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "118",
						"name": "Flush, test, and clean piping and fixtures",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4953037031048555)),
							"priority": "500",
							"start": "Tue Feb 27 08:00:00 EST 2001",
							"finish": "Mon Mar 12 17:00:00 EST 2001",
							"duration": "2.0",
							"percentageComplete": "0.4953037031048555",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "119",
					"name": "Electrical",
					"data": 
					{
						"$area": 139.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.10460559336461106)),
						"priority": "500",
						"start": "Wed Aug 16 08:00:00 EDT 2000",
						"finish": "Mon Feb 26 17:00:00 EST 2001",
						"duration": "139.0",
						"percentageComplete": "0.10460559336461106",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "120",
						"name": "Rough-in electrical in masonry walls",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9411123810754894)),
							"priority": "500",
							"start": "Wed Aug 16 08:00:00 EDT 2000",
							"finish": "Tue Sep 12 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.9411123810754894",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "121",
						"name": "Rough-in electrical in drywall walls",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.17511921743183856)),
							"priority": "500",
							"start": "Tue Dec 05 08:00:00 EST 2000",
							"finish": "Mon Jan 01 17:00:00 EST 2001",
							"duration": "4.0",
							"percentageComplete": "0.17511921743183856",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "122",
						"name": "Pull wire in conduit and set area transformers",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7716004193636742)),
							"priority": "500",
							"start": "Tue Dec 26 08:00:00 EST 2000",
							"finish": "Mon Jan 15 17:00:00 EST 2001",
							"duration": "3.0",
							"percentageComplete": "0.7716004193636742",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "123",
						"name": "Install and terminate electrical devices",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5209083835941216)),
							"priority": "500",
							"start": "Tue Jan 16 08:00:00 EST 2001",
							"finish": "Mon Feb 05 17:00:00 EST 2001",
							"duration": "3.0",
							"percentageComplete": "0.5209083835941216",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "124",
						"name": "Make electrical terminations for HVAC equipment",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.027205773102915942)),
							"priority": "500",
							"start": "Tue Jan 16 08:00:00 EST 2001",
							"finish": "Wed Jan 17 17:00:00 EST 2001",
							"duration": "2.0",
							"percentageComplete": "0.027205773102915942",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "125",
						"name": "Install light fixtures - test and clean",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.39889592437413735)),
							"priority": "500",
							"start": "Tue Feb 13 08:00:00 EST 2001",
							"finish": "Mon Feb 26 17:00:00 EST 2001",
							"duration": "2.0",
							"percentageComplete": "0.39889592437413735",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "126",
					"name": "Heating and Ventilating - AC",
					"data": 
					{
						"$area": 180.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.24832591974756424)),
						"priority": "500",
						"start": "Tue Jul 04 08:00:00 EDT 2000",
						"finish": "Mon Mar 12 17:00:00 EST 2001",
						"duration": "180.0",
						"percentageComplete": "0.24832591974756424",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "127",
						"name": "Set equipment in mechanical room",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.34909194561385803)),
							"priority": "500",
							"start": "Tue Jul 04 08:00:00 EDT 2000",
							"finish": "Mon Jul 17 17:00:00 EDT 2000",
							"duration": "2.0",
							"percentageComplete": "0.34909194561385803",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "128",
						"name": "Rough-in mechanical in masonry walls",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5372805425567213)),
							"priority": "500",
							"start": "Wed Aug 16 08:00:00 EDT 2000",
							"finish": "Tue Sep 12 17:00:00 EDT 2000",
							"duration": "4.0",
							"percentageComplete": "0.5372805425567213",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "129",
						"name": "Rough-in mechanical in drywall walls",
						"data": 
						{
							"$area": 2.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5059614668859207)),
							"priority": "500",
							"start": "Tue Dec 05 08:00:00 EST 2000",
							"finish": "Mon Dec 18 17:00:00 EST 2000",
							"duration": "2.0",
							"percentageComplete": "0.5059614668859207",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "130",
						"name": "Install duct in building chase",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.14496271096176894)),
							"priority": "500",
							"start": "Tue Dec 05 08:00:00 EST 2000",
							"finish": "Mon Dec 25 17:00:00 EST 2000",
							"duration": "3.0",
							"percentageComplete": "0.14496271096176894",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "131",
						"name": "Set HVAC trim and test and balance system",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.3575764263781136)),
							"priority": "500",
							"start": "Tue Feb 13 08:00:00 EST 2001",
							"finish": "Mon Mar 12 17:00:00 EST 2001",
							"duration": "4.0",
							"percentageComplete": "0.3575764263781136",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "132",
					"name": "Final Clean-up and Occupancy",
					"data": 
					{
						"$area": 60.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7734342989295832)),
						"priority": "500",
						"start": "Tue Jan 09 08:00:00 EST 2001",
						"finish": "Mon Apr 02 17:00:00 EDT 2001",
						"duration": "60.0",
						"percentageComplete": "0.7734342989295832",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "133",
						"name": "Install hard tile flooring in common areas",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.1500360201250488)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2001",
							"finish": "Mon Jan 15 17:00:00 EST 2001",
							"duration": "1.0",
							"percentageComplete": "0.1500360201250488",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "134",
						"name": "Clean hard tile floors",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9994926093901003)),
							"priority": "500",
							"start": "Tue Jan 16 08:00:00 EST 2001",
							"finish": "Fri Jan 19 17:00:00 EST 2001",
							"duration": "4.0",
							"percentageComplete": "0.9994926093901003",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "135",
						"name": "Remove debris from building and do final clean-up",
						"data": 
						{
							"$area": 4.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.1671409460672446)),
							"priority": "500",
							"start": "Tue Mar 27 08:00:00 EST 2001",
							"finish": "Fri Mar 30 17:00:00 EST 2001",
							"duration": "4.0",
							"percentageComplete": "0.1671409460672446",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "136",
						"name": "Substantial completion date",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.14461377401106001)),
							"priority": "500",
							"start": "Mon Apr 02 08:00:00 EDT 2001",
							"finish": "Mon Apr 02 17:00:00 EDT 2001",
							"duration": "1.0",
							"percentageComplete": "0.14461377401106001",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "137",
					"name": "Complete Final Inspections",
					"data": 
					{
						"$area": 6.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.37820328763557065)),
						"priority": "500",
						"start": "Mon Apr 02 08:00:00 EDT 2001",
						"finish": "Mon Apr 09 17:00:00 EDT 2001",
						"duration": "6.0",
						"percentageComplete": "0.37820328763557065",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "138",
						"name": "Complete elevator inspection and certification",
						"data": 
						{
							"$area": 3.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.16550209869649612)),
							"priority": "500",
							"start": "Mon Apr 02 08:00:00 EDT 2001",
							"finish": "Wed Apr 04 17:00:00 EDT 2001",
							"duration": "3.0",
							"percentageComplete": "0.16550209869649612",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "139",
						"name": "Perform architect's inspection",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.48024667557671663)),
							"priority": "500",
							"start": "Thu Apr 05 08:00:00 EDT 2001",
							"finish": "Thu Apr 05 17:00:00 EDT 2001",
							"duration": "1.0",
							"percentageComplete": "0.48024667557671663",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "140",
						"name": "Perform local building agency inspection",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.002511724467154308)),
							"priority": "500",
							"start": "Fri Apr 06 08:00:00 EDT 2001",
							"finish": "Fri Apr 06 17:00:00 EDT 2001",
							"duration": "1.0",
							"percentageComplete": "0.002511724467154308",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "141",
						"name": "Perform Fire Marshal's inspection",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8303789361332411)),
							"priority": "500",
							"start": "Mon Apr 09 08:00:00 EDT 2001",
							"finish": "Mon Apr 09 17:00:00 EDT 2001",
							"duration": "1.0",
							"percentageComplete": "0.8303789361332411",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "142",
					"name": "Complete punch list items from all inspections",
					"data": 
					{
						"$area": 2.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8968333846061605)),
						"priority": "500",
						"start": "Tue Apr 10 08:00:00 EDT 2001",
						"finish": "Mon Apr 23 17:00:00 EDT 2001",
						"duration": "2.0",
						"percentageComplete": "0.8968333846061605",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					]
				},
				{
					"id": "143",
					"name": "Obtain certificate of occupancy",
					"data": 
					{
						"$area": 2.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9307376026795925)),
						"priority": "500",
						"start": "Tue Apr 24 08:00:00 EDT 2001",
						"finish": "Wed Apr 25 17:00:00 EDT 2001",
						"duration": "2.0",
						"percentageComplete": "0.9307376026795925",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					]
				},
				{
					"id": "144",
					"name": "Issue final completion documents including warranties",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5729984928834596)),
						"priority": "500",
						"start": "Tue Apr 24 08:00:00 EDT 2001",
						"finish": "Tue Apr 24 17:00:00 EDT 2001",
						"duration": "1.0",
						"percentageComplete": "0.5729984928834596",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					]
				},
				{
					"id": "145",
					"name": "Issue final request for payment",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7387923741121833)),
						"priority": "500",
						"start": "Thu Apr 26 08:00:00 EDT 2001",
						"finish": "Thu Apr 26 17:00:00 EDT 2001",
						"duration": "1.0",
						"percentageComplete": "0.7387923741121833",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					]
				}
				]
			}
		]
	};
	treemap = new $jit.TM.Squarified(
	{
		injectInto: 'infovis',
		titleHeight: 15,
		levelsToShow: 4,
		animate: animate,
		offset: 0.2,
		Events:
		{
			enable: true,
			onClick: function(node)
			{
				if(node) treemap.enter(node);
			},
			onRightClick: function()
			{
				treemap.out();
			}
		},
		duration: 1000,
		Tips:
		{
			enable: true,
			offsetX: 20,
			offsetY: 20,
			onShow: function(tip, node, isLeaf, domElement)
			{
				var html = "<div class=\"tip-title\">" + node.name + "</div><div class=\"tip-text\">";
				var data = node.data;
				if(data.priority && priorityAttribute)
				{
					html += "<p></p>";
					html += "priority: " + data.priority;
				}
				if(data.start && startAttribute)
				{
					html += "<p></p>";
					html += "start: " + data.start;
				}
				if(data.finish && finishAttribute)
				{
					html += "<p></p>";
					html += "finish: " + data.finish;
				}
				if(data.duration && durationAttribute)
				{
					html += "<p></p>";
					html += "duration: " + data.duration;
				}
				if(data.percentageComplete && completeAttribute)
				{
					html += "<p></p>";
					html += "percent complete: " + Math.round(100*data.percentageComplete) + "%";
				}
				if(data.milestone && (data.milestone == "true"))
				{
					html += "<p></p>";
					html += "milestone: " + data.milestone;
				}
				if(data.notes)
				{
					html += "<p></p>";
					html += "notes: " + data.notes;
				}
				tip.innerHTML =  html;
			}
		},
		onBeforePlotNode: function(node)
		{
			if(node._depth > 0)
			{
				node.data.$color = ColorToHex(ColorBlend(colorCold, colorWarm, node.data.percentageComplete));
			}
		},
		onCreateLabel: function(domElement, node)
		{
			domElement.innerHTML = node.name;
			var style = domElement.style;
			style.display = '';
			style.border = '4px solid transparent';
			style.margin = '0px 0px 0px 0px';
			domElement.onmouseover = function()
			{
				style.border = '4px solid #FF0000';
				style.margin = '-4px 0px 0px -4px';
			};
			domElement.onmouseout = function()
			{
				style.border = '4px solid transparent';
				style.margin = '0px 0px 0px 0px';
			};
		},
		request: function(nodeId, level, onComplete)
		{
			onComplete.onComplete(nodeId, level);
		}
	});
	treemap.loadJSON(json);
	treemap.refresh();
	var util = $jit.util;
	var back = $jit.id('back');
	$jit.util.addEvent(back, 'click', function()
	{
		treemap.out();
	});
}