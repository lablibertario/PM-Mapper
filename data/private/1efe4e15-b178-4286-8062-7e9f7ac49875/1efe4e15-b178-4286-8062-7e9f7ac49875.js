function init()
{
	var json =
	{
		"name": "TS010090269.mpp",
		"data":
		{
			"$color": "#606060"
		},
		"children":
		[
			{
				"id": "3",
				"name": "Read the note for an explanation of the purpose of this template",
				"data": 
				{
					"$area": 0.0,
					"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.1055083200715059)),
					"priority": "500",
					"start": "Mon Jan 01 08:00:00 EST 2007",
					"finish": "Mon Jan 01 08:00:00 EST 2007",
					"duration": "0.0",
					"percentageComplete": "0.1055083200715059",
					"milestone": "true",
					"notes": "This template provides an approach for identifying, planning, and rolling out infrastructure improvements.  The general subject chosen is \"Security Infrastructure\" because security involves a balance between the need for security and maintaining the ability to do business.  However, this approach can be used to on many infrastructure initiatives.\n\nA note on the resourcing of this plan:  We have intentionally left the resources out of this plan, as depending on the infrastructure initiative, it is used in conjunction with the resource types will change as well.  We felt it would not be helpful to place \"IT Staff\" on every activity."
				},
				"children": 
				[
				]
			},
			{
				"id": "4",
				"name": "Identify needs assessment team",
				"data": 
				{
					"$area": 1.0,
					"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9589891335650934)),
					"priority": "500",
					"start": "Mon Jan 01 08:00:00 EST 2007",
					"finish": "Mon Jan 01 17:00:00 EST 2007",
					"duration": "1.0",
					"percentageComplete": "0.9589891335650934",
					"milestone": "false",
					"notes": ""
				},
				"children": 
				[
				]
			},
			{
				"id": "5",
				"name": "Perform Needs Assessment",
				"data": 
				{
					"$area": 3.0,
					"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.11335108141383599)),
					"priority": "500",
					"start": "Tue Jan 02 08:00:00 EST 2007",
					"finish": "Thu Jan 04 17:00:00 EST 2007",
					"duration": "3.0",
					"percentageComplete": "0.11335108141383599",
					"milestone": "false",
					"notes": "Needs Assessment is done from the point of view of: \n   1) Raw security needs\n   2) Business impact\n\nBoth of these must be kept in mind at all times. It makes no sense to spend a large amount of money implementing rigid security that severely hinders your people's abilities to get things done (and produce revenue). A balance must be achieved, depending on your joint requirements\n"
				},
				"children": 
				[
				{
					"id": "6",
					"name": "Perform IT-centric need assessment",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.28197571042389014)),
						"priority": "500",
						"start": "Tue Jan 02 08:00:00 EST 2007",
						"finish": "Tue Jan 02 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.28197571042389014",
						"milestone": "false",
						"notes": "This is a raw security requirements collection effort\n          Answer questions such as:\n\u00B7\t\u00B7               What security levels do my clients require of me?\n\u00B7\t               What information sets do I have?  How sensitive to the company are they?\n\u00B7\t               Who are the users of the information?  How complex is the security model I must implement given                   user access requirements and information sensitivity levels.\n\nSecurity considerations are (at a high level): authentication, encryption, access, integrity, and privacy.\n\nThese break down further into a core set of issues and actions that must be considered: disabling resources, managing content, isolating data, resources or access, software updating and security, staff roles, change and configuration management, intrusion detection and vulnerability analysis.\n"
					},
					"children": 
					[
					]
				},
				{
					"id": "16",
					"name": "Perform business need assessment",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.022726206561884732)),
						"priority": "500",
						"start": "Tue Jan 02 08:00:00 EST 2007",
						"finish": "Tue Jan 02 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.022726206561884732",
						"milestone": "false",
						"notes": "Here we identify the business needs driving the security requirements.\nHowever, we also identify performance, usage, and deployment timeframe requirements.\nThese will all be reconciled in the next activity."
					},
					"children": 
					[
					]
				},
				{
					"id": "43",
					"name": "Reconcile IT-centric need with business requirements",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.18863341158118985)),
						"priority": "500",
						"start": "Wed Jan 03 08:00:00 EST 2007",
						"finish": "Wed Jan 03 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.18863341158118985",
						"milestone": "false",
						"notes": "Here we reconcile the security needs with the business survival requirements.  We could implement a huge amount of security but if the business fails because the security implemented cannot be used effectively then the security effort was useless."
					},
					"children": 
					[
					]
				},
				{
					"id": "44",
					"name": "Document reconciled requirements and time frame",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.15414735411082603)),
						"priority": "500",
						"start": "Thu Jan 04 08:00:00 EST 2007",
						"finish": "Thu Jan 04 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.15414735411082603",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					]
				},
				{
					"id": "45",
					"name": "Needs Assessment COMPLETE",
					"data": 
					{
						"$area": 0.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8700209572587604)),
						"priority": "500",
						"start": "Thu Jan 04 17:00:00 EST 2007",
						"finish": "Thu Jan 04 17:00:00 EST 2007",
						"duration": "0.0",
						"percentageComplete": "0.8700209572587604",
						"milestone": "true",
						"notes": ""
					},
					"children": 
					[
					]
				}
				]
			},
			{
				"id": "15",
				"name": "Perform Solution Domain Assessment",
				"data": 
				{
					"$area": 4.0,
					"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.2604629253406534)),
					"priority": "500",
					"start": "Fri Jan 05 08:00:00 EST 2007",
					"finish": "Wed Jan 10 17:00:00 EST 2007",
					"duration": "4.0",
					"percentageComplete": "0.2604629253406534",
					"milestone": "false",
					"notes": ""
				},
				"children": 
				[
				{
					"id": "8",
					"name": "Assess currently available technologies",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.6616096960628964)),
						"priority": "500",
						"start": "Fri Jan 05 08:00:00 EST 2007",
						"finish": "Fri Jan 05 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.6616096960628964",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					]
				},
				{
					"id": "20",
					"name": "For each technology identified\u2026",
					"data": 
					{
						"$area": 2.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4927638346993991)),
						"priority": "500",
						"start": "Fri Jan 05 08:00:00 EST 2007",
						"finish": "Mon Jan 08 17:00:00 EST 2007",
						"duration": "2.0",
						"percentageComplete": "0.4927638346993991",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					{
						"id": "17",
						"name": "Assess how well technology integrates with current infrastructure",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8594756452683356)),
							"priority": "500",
							"start": "Fri Jan 05 08:00:00 EST 2007",
							"finish": "Fri Jan 05 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.8594756452683356",
							"milestone": "false",
							"notes": "For example: Is this technology an easy upgrade to existing systems, or does it require a wholesale replacement of large portions of infrastructure?"
						},
						"children": 
						[
						]
					},
					{
						"id": "18",
						"name": "Assess how well technology fits with current corporate strategies",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.17311173874296448)),
							"priority": "500",
							"start": "Mon Jan 08 08:00:00 EST 2007",
							"finish": "Mon Jan 08 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.17311173874296448",
							"milestone": "false",
							"notes": "Corporate strategy can influence many things, for example:\n\u00B7\t\u00B7If corporate strategy is to de-centralize data centers or aggregate into data centers will this technology support that?\n\u00B7\tIf corporate strategy is to outsource the maintenance of this technology, then we need to ensure that there are sufficient metrics provided by the technology/components to allow us to define rigorous Service Level Agreements (SLAs) and provide for easy identification of when performance is becoming an issue so SLAs, including performance cannot be disputed because of questionable root cause."
						},
						"children": 
						[
						]
					},
					{
						"id": "19",
						"name": "Assess technology maintenance complexity",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.014261623283278735)),
							"priority": "500",
							"start": "Mon Jan 08 08:00:00 EST 2007",
							"finish": "Mon Jan 08 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.014261623283278735",
							"milestone": "false",
							"notes": "\u00B7\t\u00B7Does this technology require mothering, or is it stable and reliable?\n\u00B7\tIs this technology repaired at component, card, or unit level? \n\u00B7\tWhat are the sparing needs considering criticality and Mean Time Between Failure?\n\u00B7\tDoes the technology or component provide for proactive monitoring and early indications of stress?\n\u00B7\tCan the technology or component be easily tied into system monitoring tools?"
						},
						"children": 
						[
						]
					},
					{
						"id": "21",
						"name": "Assess technology flexibility",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.12111772861968395)),
							"priority": "500",
							"start": "Mon Jan 08 08:00:00 EST 2007",
							"finish": "Mon Jan 08 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.12111772861968395",
							"milestone": "false",
							"notes": "How well will this technology support changing requirements and direction, etc.?"
						},
						"children": 
						[
						]
					},
					{
						"id": "22",
						"name": "Assess risks associated with this technology",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.333621941020227)),
							"priority": "500",
							"start": "Mon Jan 08 08:00:00 EST 2007",
							"finish": "Mon Jan 08 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.333621941020227",
							"milestone": "false",
							"notes": "Identify risks associated with this specific technology (or technology component), for example:\n\u00B7\t\u00B7  Is it well-understood or is it bleeding edge?\n\u00B7\t  Is it based on a \"not-yet\" standard, a recent standard that is not widely adopted or a proven standard?\n\u00B7\t  Is this technology provided by multiple companies? If not, how stable is the provider?\n\u00B7\t  If this is a new technology, how quickly are issues (once found) dealt with?"
						},
						"children": 
						[
						]
					},
					{
						"id": "23",
						"name": "Assess skill-set required for this technology",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8011737939009821)),
							"priority": "500",
							"start": "Mon Jan 08 08:00:00 EST 2007",
							"finish": "Mon Jan 08 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.8011737939009821",
							"milestone": "false",
							"notes": "Do we have this skill in-house?  How easy is it to find?  How easy is it to develop?  How expensive is it to find or develop?"
						},
						"children": 
						[
						]
					},
					{
						"id": "24",
						"name": "Assess the price-points or value provided by this technology",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8377508977183046)),
							"priority": "500",
							"start": "Mon Jan 08 08:00:00 EST 2007",
							"finish": "Mon Jan 08 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.8377508977183046",
							"milestone": "false",
							"notes": "For example:  If we are comparing long term storage technologies, what is the cost per gigabyte of storage? How frequently must the storage be 'refreshed' or 'rewritten' if the storage material decays over time? "
						},
						"children": 
						[
						]
					},
					{
						"id": "25",
						"name": "Assess the time required to implement this technology into a solution",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7412840870185105)),
							"priority": "500",
							"start": "Mon Jan 08 08:00:00 EST 2007",
							"finish": "Mon Jan 08 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.7412840870185105",
							"milestone": "false",
							"notes": "Some technologies can be implemented rapidly and are more suitable for short term crisis management.\n"
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "41",
					"name": "Time Bound \"Technology\" Research",
					"data": 
					{
						"$area": 0.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.44461951372909336)),
						"priority": "500",
						"start": "Mon Jan 08 17:00:00 EST 2007",
						"finish": "Mon Jan 08 17:00:00 EST 2007",
						"duration": "0.0",
						"percentageComplete": "0.44461951372909336",
						"milestone": "true",
						"notes": "It is very important to limit the amount of time spent analyzing technology. Technology is changing so fast that this activity could be never-ending, so you should set a reasonable limit for technology investigation. This limit is usually set by corporate need.  If the corporation is heading toward a major performance crisis (in a year) because of the current infrastructure, technology and solution research must end early enough for solution development, testing, and deployment to be complete before the crisis point is reached.\n\nThe intent of this milestone is to provide the endpoint of this section of research. Set it appropriately.\n"
					},
					"children": 
					[
					]
				},
				{
					"id": "26",
					"name": "Solution possibilities (combinations of technologies)",
					"data": 
					{
						"$area": 3.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9509406134919088)),
						"priority": "500",
						"start": "Mon Jan 08 08:00:00 EST 2007",
						"finish": "Wed Jan 10 17:00:00 EST 2007",
						"duration": "3.0",
						"percentageComplete": "0.9509406134919088",
						"milestone": "false",
						"notes": "Although the different technologies are being researched and better understood, we will begin to build full solution possibilities out of multiple technologies. These solution possibilities can be considered as deployed in technology stages. While the solution is being defined, the usefulness of staging and the sequence of staging will be an added consideration in terms of comparing \"solutions.\"\n\nNote: Developing solutions begins as soon as you begin looking at technologies. Solutions are not fully formed for some time, but architects immediately begin thinking in terms of solutions."
					},
					"children": 
					[
					{
						"id": "28",
						"name": "Assess how well solutions integrate with current infrastructure",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.2736985895033469)),
							"priority": "500",
							"start": "Mon Jan 08 08:00:00 EST 2007",
							"finish": "Mon Jan 08 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.2736985895033469",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "29",
						"name": "Assess how well solutions fit with current corporate strategies",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7882628444441447)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2007",
							"finish": "Tue Jan 09 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.7882628444441447",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "30",
						"name": "Assess solution maintenance complexity",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4239590553347362)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2007",
							"finish": "Tue Jan 09 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.4239590553347362",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "31",
						"name": "Assess solution flexibility",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.056512194904809854)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2007",
							"finish": "Tue Jan 09 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.056512194904809854",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "32",
						"name": "Assess risks associated with solutions",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.9774152729527235)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2007",
							"finish": "Tue Jan 09 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.9774152729527235",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "33",
						"name": "Assess skill-set required for each solution",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.342370107924617)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2007",
							"finish": "Tue Jan 09 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.342370107924617",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "34",
						"name": "Assess the price-points or value provided each solution",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.43932390093440277)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2007",
							"finish": "Tue Jan 09 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.43932390093440277",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "35",
						"name": "Assess the time required to implement each solution",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.010167940991006152)),
							"priority": "500",
							"start": "Tue Jan 09 08:00:00 EST 2007",
							"finish": "Tue Jan 09 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.010167940991006152",
							"milestone": "false",
							"notes": ""
						},
						"children": 
						[
						]
					},
					{
						"id": "27",
						"name": "Assess solution staging and technology deployment roadmaps",
						"data": 
						{
							"$area": 1.0,
							"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.6461640628123838)),
							"priority": "500",
							"start": "Wed Jan 10 08:00:00 EST 2007",
							"finish": "Wed Jan 10 17:00:00 EST 2007",
							"duration": "1.0",
							"percentageComplete": "0.6461640628123838",
							"milestone": "false",
							"notes": "See notes on \"solution possibilities.\"\n"
						},
						"children": 
						[
						]
					}
					]
				},
				{
					"id": "36",
					"name": "Time Bound \"Solution Development\"",
					"data": 
					{
						"$area": 0.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.644278819596221)),
						"priority": "500",
						"start": "Wed Jan 10 17:00:00 EST 2007",
						"finish": "Wed Jan 10 17:00:00 EST 2007",
						"duration": "0.0",
						"percentageComplete": "0.644278819596221",
						"milestone": "true",
						"notes": "It is very important to limit the amount of time spent architecting solutions. Technology is changing so fast that this activity could be never-ending, so you should set a reasonable limit for solution development.  This limit is usually set by corporate need.  If the corporation is heading toward a major performance crisis (in a year) because of the current infrastructure, technology and solution research must end early enough for solution development, testing, and deployment to be complete before the crisis point is reached.\n\nThe intent of this milestone is to provide the endpoint of this section of research. Set it appropriately."
					},
					"children": 
					[
					]
				}
				]
			},
			{
				"id": "42",
				"name": "Perform Solution Selection",
				"data": 
				{
					"$area": 1.0,
					"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.10308914044515094)),
					"priority": "500",
					"start": "Thu Jan 11 08:00:00 EST 2007",
					"finish": "Thu Jan 11 17:00:00 EST 2007",
					"duration": "1.0",
					"percentageComplete": "0.10308914044515094",
					"milestone": "false",
					"notes": ""
				},
				"children": 
				[
				{
					"id": "37",
					"name": "Solution comparison and selection",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.15463617371190763)),
						"priority": "500",
						"start": "Thu Jan 11 08:00:00 EST 2007",
						"finish": "Thu Jan 11 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.15463617371190763",
						"milestone": "false",
						"notes": "This stage is typically fast because all of the effort prior has acquainted the company well with the pros and cons of each solution.\n\nThe use of \"time-bound\" milestones can turn out to not be necessary, because a specific solution stands out early on and can become the obvious de facto winner.\n"
					},
					"children": 
					[
					]
				},
				{
					"id": "38",
					"name": "Solution Selection Complete",
					"data": 
					{
						"$area": 0.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.7940221457238554)),
						"priority": "500",
						"start": "Thu Jan 11 17:00:00 EST 2007",
						"finish": "Thu Jan 11 17:00:00 EST 2007",
						"duration": "0.0",
						"percentageComplete": "0.7940221457238554",
						"milestone": "true",
						"notes": ""
					},
					"children": 
					[
					]
				}
				]
			},
			{
				"id": "39",
				"name": "Planning the Solution",
				"data": 
				{
					"$area": 2.0,
					"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.4852155972061454)),
					"priority": "500",
					"start": "Fri Jan 12 08:00:00 EST 2007",
					"finish": "Mon Jan 15 17:00:00 EST 2007",
					"duration": "2.0",
					"percentageComplete": "0.4852155972061454",
					"milestone": "false",
					"notes": ""
				},
				"children": 
				[
				{
					"id": "40",
					"name": "Prepare the solution development and deployment schedule",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.20251064292716592)),
						"priority": "500",
						"start": "Fri Jan 12 08:00:00 EST 2007",
						"finish": "Fri Jan 12 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.20251064292716592",
						"milestone": "false",
						"notes": "This can include internally handling or outsourcing of any or all of many areas: architecture, prototyping, scalability testing, maintenance planning and sparing, help desk, etc.\n\n"
					},
					"children": 
					[
					]
				},
				{
					"id": "46",
					"name": "Prepare the solution training, support, and maintenance plans",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8076481755008411)),
						"priority": "500",
						"start": "Mon Jan 15 08:00:00 EST 2007",
						"finish": "Mon Jan 15 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.8076481755008411",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					]
				},
				{
					"id": "50",
					"name": "Prepare solution deployment/migration plan",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.15019444065853937)),
						"priority": "500",
						"start": "Mon Jan 15 08:00:00 EST 2007",
						"finish": "Mon Jan 15 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.15019444065853937",
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
				"name": "Execute Implementation of the Solution",
				"data": 
				{
					"$area": 3.0,
					"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5944400215046073)),
					"priority": "500",
					"start": "Mon Jan 15 08:00:00 EST 2007",
					"finish": "Wed Jan 17 17:00:00 EST 2007",
					"duration": "3.0",
					"percentageComplete": "0.5944400215046073",
					"milestone": "false",
					"notes": ""
				},
				"children": 
				[
				{
					"id": "9",
					"name": "Solution implementation",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.38667908234884096)),
						"priority": "500",
						"start": "Mon Jan 15 08:00:00 EST 2007",
						"finish": "Mon Jan 15 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.38667908234884096",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					]
				},
				{
					"id": "10",
					"name": "Solution testing",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.15025185836831068)),
						"priority": "500",
						"start": "Tue Jan 16 08:00:00 EST 2007",
						"finish": "Tue Jan 16 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.15025185836831068",
						"milestone": "false",
						"notes": ""
					},
					"children": 
					[
					]
				},
				{
					"id": "51",
					"name": "Solution production migration approval",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.6240069468914283)),
						"priority": "500",
						"start": "Wed Jan 17 08:00:00 EST 2007",
						"finish": "Wed Jan 17 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.6240069468914283",
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
				"id": "48",
				"name": "Solution Deployment",
				"data": 
				{
					"$area": 2.0,
					"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8489345602026823)),
					"priority": "500",
					"start": "Thu Jan 18 08:00:00 EST 2007",
					"finish": "Fri Jan 19 17:00:00 EST 2007",
					"duration": "2.0",
					"percentageComplete": "0.8489345602026823",
					"milestone": "false",
					"notes": ""
				},
				"children": 
				[
				{
					"id": "49",
					"name": "Migration to solution",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.20608875240564006)),
						"priority": "500",
						"start": "Thu Jan 18 08:00:00 EST 2007",
						"finish": "Thu Jan 18 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.20608875240564006",
						"milestone": "false",
						"notes": "The way production migrates to the deployed solution can happen in many different ways.\nGenerally, either a staged approach type or a cutover type is planned. Testing and validation can change, depending on which method is chosen.\n"
					},
					"children": 
					[
					]
				},
				{
					"id": "11",
					"name": "Solution acceptance",
					"data": 
					{
						"$area": 1.0,
						"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.5020688837835623)),
						"priority": "500",
						"start": "Fri Jan 19 08:00:00 EST 2007",
						"finish": "Fri Jan 19 17:00:00 EST 2007",
						"duration": "1.0",
						"percentageComplete": "0.5020688837835623",
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
				"id": "12",
				"name": "Solution is Deployed and Accepted",
				"data": 
				{
					"$area": 0.0,
					"$color": ColorToHex(ColorBlend(colorCold, colorWarm, 0.8350296278761686)),
					"priority": "500",
					"start": "Fri Jan 19 17:00:00 EST 2007",
					"finish": "Fri Jan 19 17:00:00 EST 2007",
					"duration": "0.0",
					"percentageComplete": "0.8350296278761686",
					"milestone": "true",
					"notes": ""
				},
				"children": 
				[
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