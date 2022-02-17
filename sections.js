let sections = {
	"begin" : {
		"content" : "<p>Easter has come. The sky is bright and cheery. You are on the porch of the house you live in, facing the Easter Bunny. The Easter Bunny wiggles his little nose and tells you, &quot;<b>Happy Easter! I have hidden several Easter eggs all around the garden, outside of the house. Your mission is to find 30 eggs within 120 minutes. Good hunting!</b>&quot; With that, he hops away.</p><img /><p>You are now seated on the steps, and the hunt is under way.</p>",
		"flag" : false,
		"visitedChecks" : null,
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Begin the hunt!"}
		]
	},
	"timeout" : {
		"content" : "<p>Time ut!!1</p>",
		"flag" : false,
		"visitedChecks" : null,
		"messages" : [],
		"choices" : []
	},
	"victory" : {
		"content" : "<p>Victory!!1</p>",
		"flag" : false,
		"visitedChecks" : null,
		"messages" : [],
		"choices" : []
	},	
	"porch" : {
		"content" : "<p>From the porch, there are a few places you can go. There is your family's garden, and beyond that is the fence. In the middle of the yard, there is a large tree that provides shade on this sunny day.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "porch_kuching", "content" : null, "choices": null, "contentElse" : "<p>Your family cat, Kuching, lays on the porch basking in the sun.</p>", "choicesElse" : { "time" : -1, "eggs" : null, "section" : "porch_kuching", "text" : "Pick Kuching up"} },
			{ "section": "shed", "content" : "<p>The key to the shed is usually kept underneath the fern pot.</p>", "choices" : { "time" : -1, "eggs" : null, "section" : "porch_fernpot", "text" : "Look under the fern pot"}, "contentElse" : null, "choicesElse" : null }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "fence", "text" : "Explore the fence"},
			{ "time" : -1, "eggs" : null, "section" : "tree", "text" : "Explore the large tree"},
			{ "time" : -1, "eggs" : null, "section" : "garden", "text" : "Explore the garden"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"porch_kuching" : {
		"content" : "<p>Kuching snuggles in your arms like a placid, lazy, well, cat.</p><p>Where do you go next?</p>",
		"flag" : true,
		"visitedChecks" : null,
		"messages" : ["Cat added to inventory."],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "fence", "text" : "Explore the fence"},
			{ "time" : -1, "eggs" : null, "section" : "tree", "text" : "Explore the large tree"},
			{ "time" : -1, "eggs" : null, "section" : "garden", "text" : "Explore the garden"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"porch_fernpot" : {
		"content" : "<p>You lift the fern pot.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "porch_shedkey", "content" : "<p>You already have the shed key. Time's a-wasting!</p>", "choices": null, "contentElse" : "<p>As expected, there lies the key to the shed.</p>", "choicesElse" : { "time" : -1, "eggs" : null, "section" : "porch_shedkey", "text" : "Grab the keys"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "fence", "text" : "Explore the fence"},
			{ "time" : -1, "eggs" : null, "section" : "tree", "text" : "Explore the large tree"},
			{ "time" : -1, "eggs" : null, "section" : "garden", "text" : "Explore the garden"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"porch_shedkey" : {
		"content" : "<p>You retrieve the small key that opens the padlock on the door of the garden shed.</p>",
		"flag" : true,
		"visitedChecks" : null,
		"messages" : ["Shed key added to inventory."],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "fence", "text" : "Explore the fence"},
			{ "time" : -1, "eggs" : null, "section" : "tree", "text" : "Explore the large tree"},
			{ "time" : -1, "eggs" : null, "section" : "garden", "text" : "Explore the garden"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},	
	"test" : {
		"content" : "xxxxx",
		"flag" : true,
		"visitedChecks" : [
			{ "section": "test", "content" : "", "choices": { "time" : -1, "eggs" : null, "section" : "", "text" : "test true"}, "contentElse" : "", "choicesElse" : null }
		],
		"messages" : ["test message"],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "", "text" : "test1"},
			{ "time" : -1, "eggs" : null, "section" : "", "text" : "test2"},
		]
	},
	"garden" : {
		"content" : "<p>Your family garden is a small plot of land just off the footpath. Nearby, is a large tool shed. Beside it is a bed of bright blue orchids.</p>",
		"flag" : false,
		"visitedChecks" : null,
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "shed", "text" : "Explore the shed"},
			{ "time" : -1, "eggs" : null, "section" : "garden_flowerbed", "text" : "Explore the flowerbed"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"garden_flowerbed" : {
		"content" : "<p>The flowerbed is lovingly tended and watered daily by your parents.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "garden_eggs", "content" : "", "choices": null, "contentElse" : "Bingo! Nestled in the flowerbed amid the orchids are cunningly painted blue easter eggs! There are 5 in all.", "choicesElse" : { "time" : -3, "eggs" : 5, "section" : "garden_eggs", "text" : "Collect those eggs"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "shed", "text" : "Explore the shed"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"garden_eggs" : {
		"content" : "<p>It takes a couple minutes, but you manage to add these eggs to your collection.</p><p>The Easter Bunny hops up to you again. &quot;<b>Well done! If only the rest of your search would be this easy. Here's a little tip: How many days did Jesus take to rise from the dead? Check the floorboards of the shed!</b>&quot;</p>",
		"flag" : true,
		"visitedChecks" : null,
		"messages" : ["Eggs added to inventory."],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "shed", "text" : "Explore the shed"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"tree" : {
		"content" : "<p>There is a tall rain tree on the other side of the footpath. It provides plenty of shade from the sun.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "tree1", "content" : "", "choices": null, "contentElse" : "<p>You find three Easter eggs nestled at the roots of the tree.</p>", "choicesElse" : { "time" : -1, "eggs" : 3, "section" : "tree1", "text" : "Collect those eggs"} },
			{ "section": "tree_kuching", "content" : "", "choices": null, "contentElse" : "<p>From where you are, you spot a bit of color up in the branches. There are probably more eggs hidden up there.</p>", "choicesElse" : null },
			{ "section": "road3", "content" : "<p>You have a ladder, and climbing the tree won't be an issue.</p>", "choices": { "time" : -1, "eggs" : null, "section" : "tree_ladderup", "text" : "Use the ladder"}, "contentElse" : "", "choicesElse" : { "time" : -5, "eggs" : null, "section" : "tree_climbup", "text" : "Climb the tree"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"tree1" : {
		"content" : "<p>What a find!</p>",
		"flag" : true,
		"visitedChecks" : [
			{ "section": "tree_top_eggs", "content" : "", "choices": null, "contentElse" : "<p>From where you are, you spot a bit of color up in the branches. There are probably more eggs hidden up there.</p>", "choicesElse" : null },
			{ "section": "road3", "content" : "<p>You have a ladder, and climbing the tree won't be an issue.</p>", "choices": { "time" : -1, "eggs" : null, "section" : "tree_ladderup", "text" : "Use the ladder"}, "contentElse" : "", "choicesElse" : { "time" : -5, "eggs" : null, "section" : "tree_climbup", "text" : "Climb the tree"} }
		],
		"messages" : ["Eggs added to inventory."],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"tree_climbup" : {
		"content" : "<p>It takes a while to get up the tree. Fortunately, you have climbed this tree before and know all the footholds.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "tree_top_eggs", "content" : "<p>There is nothing of interest here.<p>", "choices": null, "contentElse" : "<p>There is a little nest full of Easter eggs! However, there is an angry blackbird circling. It's determined to defend its home.<p>", "choicesElse" : { "time" : -1, "eggs" : null, "section" : "tree_blackbird", "text" : "Take care of the blackbird"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -5, "eggs" : null, "section" : "tree_climbdown", "text" : "Climb back down"}
		]
	},
	"tree_ladderup" : {
		"content" : "<p>Using the ladder, you are up the tree in no time at all.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "tree_top_eggs", "content" : "<p>There is nothing of interest here.<p>", "choices": null, "contentElse" : "<p>There is a little nest full of Easter eggs! However, there is an angry blackbird circling. It's determined to defend its home.<p>", "choicesElse" : { "time" : -1, "eggs" : null, "section" : "tree_blackbird", "text" : "Take care of the blackbird"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "tree_ladderdown", "text" : "Climb back down using the ladder"}
		]
	},
	"tree_blackbird" : {
		"content" : "<p>You need to get rid of the blackbird before you can collect the eggs.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "porch_kuching", "content" : "<p>Kuching could help keep this bird at bay.</p>", "choices": { "time" : -1, "eggs" : null, "section" : "tree_kuching", "text" : "Sic Kuching on the blackbird"}, "contentElse" : null, "choicesElse" : null },
			{ "section": "shed_boltcutters", "content" : "<p>Maybe you could fend this bird off using bolt cutters.</p>", "choices": { "time" : -5, "eggs" : null, "section" : "tree_boltcutters", "text" : "Use the bolt cutters"}, "contentElse" : null, "choicesElse" : null },			
			{ "section": "road3", "content" : null, "choices": { "time" : -1, "eggs" : null, "section" : "tree_ladderdown", "text" : "Climb back down using the ladder"}, "contentElse" : "", "choicesElse" : { "time" : -5, "eggs" : null, "section" : "tree_climbdown", "text" : "Climb back down"} }
		],
		"messages" : [],
		"choices" : []
	},
	"tree_kuching" : {
		"content" : "<p>This proves to be a master-stroke. Kuching perches on a branch and hisses. The blackbird stays well away and the coast is clear.</p>",
		"flag" : false,
		"visitedChecks" : [
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : 8, "section" : "tree_top_eggs", "text" : "Collect eight eggs"}
		]
	},
	"tree_boltcutters" : {
		"content" : "<p>You brandish the bolt cutters in a threatening manner. The blackbird defiantly continus to flap around. It takes a while, but it finally flies away. In your efforts, two eggs tumble out of the nest and smash onto the ground below.</p>",
		"flag" : false,
		"visitedChecks" : [
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : 6, "section" : "tree_top_eggs", "text" : "Collect the remaining six eggs"}
		]
	},
	"tree_top_eggs" : {
		"content" : "<p>You collect the eggs.</p>",
		"flag" : false,
		"visitedChecks" : [		
			{ "section": "road3", "content" : null, "choices": { "time" : -1, "eggs" : null, "section" : "tree_ladderdown", "text" : "Climb back down using the ladder"}, "contentElse" : "", "choicesElse" : { "time" : -5, "eggs" : null, "section" : "tree_climbdown", "text" : "Climb back down"} }
		],
		"messages" : ["Eggs added to inventory."],
		"choices" : []
	},
	"tree_ladderdown" : {
		"content" : "<p>Using the ladder, you climb back down.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "tree1", "content" : "", "choices": null, "contentElse" : "<p>You find 3 Easter eggs nestled at the roots of the tree.</p>", "choicesElse" : { "time" : -1, "eggs" : 3, "section" : "tree1", "text" : "Collect those eggs"} },
			{ "section": "tree_kuching", "content" : "", "choices": null, "contentElse" : "<p>From where you are, you spot a bit of color up in the branches. There are probably more eggs hidden up there.</p>", "choicesElse" : null },
			{ "section": "road3", "content" : "<p>You have a ladder, and climbing the tree won't be an issue.</p>", "choices": { "time" : -1, "eggs" : null, "section" : "tree_ladderup", "text" : "Use the ladder"}, "contentElse" : "", "choicesElse" : { "time" : -5, "eggs" : null, "section" : "tree_climbup", "text" : "Climb the tree"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},	
	"tree_climbdown" : {
		"content" : "<p>You climb back down.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "tree1", "content" : "", "choices": null, "contentElse" : "<p>You find 3 Easter eggs nestled at the roots of the tree.</p>", "choicesElse" : { "time" : -1, "eggs" : 3, "section" : "tree1", "text" : "Collect those eggs"} },
			{ "section": "tree_kuching", "content" : "", "choices": null, "contentElse" : "<p>From where you are, you spot a bit of color up in the branches. There are probably more eggs hidden up there.</p>", "choicesElse" : null },
			{ "section": "road3", "content" : "<p>You have a ladder, and climbing the tree won't be an issue.</p>", "choices": { "time" : -1, "eggs" : null, "section" : "tree_ladderup", "text" : "Use the ladder"}, "contentElse" : "", "choicesElse" : { "time" : -5, "eggs" : null, "section" : "tree_climbup", "text" : "Climb the tree"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"fence" : {
		"content" : "<p>The fence is a nicely painted wooden structure built to keep out intruders.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "fence_eggs", "content" : "", "choices": null, "contentElse" : "<p>You find 10 Easter eggs nestled at one section of the fence.</p>", "choicesElse" : null },
			{ "section": "fence_boltcutters", "content" : "<p>There is a spot here barb wire has been cut.</p>", "choices": null, "contentElse" : "<p>Some nasty stray barb wire lies at one section of the fence.</p>", "choicesElse" : { "time" : -1, "eggs" : null, "section" : "fence_barbwire", "text" : "Take care of the barb wire"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"fence_barbwire" : {
		"content" : "<p>You could get hurt messing with barb wire with your bare hands.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "shed_boltcutters", "content" : "<p>Good thing you have a pair of bolt cutters!</p>", "choices": { "time" : -5, "eggs" : null, "section" : "fence_boltcutters", "text" : "Cut the barb wire"}, "contentElse" : null, "choicesElse" : null }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},	
	"fence_boltcutters" : {
		"content" : "<p>With great care, you use the bolt cutters to snip away at the barb wire.</p>",
		"flag" : true,
		"visitedChecks" : null,
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : 10, "section" : "fence_eggs", "text" : "Take the eggs"},
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"fence_eggs" : {
		"content" : "<p>You take the eggs.</p>",
		"flag" : true,
		"visitedChecks" : null,
		"messages" : ["Eggs added to inventory."],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "road", "text" : "Go down the footpath"}
		]
	},
	"shed" : {
		"content" : "<p>The shed is a single wooden hut by the flowerbed.</p>",
		"flag" : true,
		"visitedChecks" : [
			{ "section": "porch_shedkey", "content" : "<p>With the shed key, you enter easily.</p>", "choices": { "time" : -1, "eggs" : null, "section" : "shed_inside", "text" : "Go into the shed"}, "contentElse" : "<p>The door has been secured with a padlock. You remember that the key can be found back at the porch.</p>", "choicesElse" : null }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "garden", "text" : "Explore the garden"}
		]
	},	
	"shed_inside" : {
		"content" : "<p>Inside the shed, you see tools neatly arranged on one wall, and a stack of unused flower pots in a corner. A damaged wheelbarrow lies upside-down in another corner.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "garden_eggs", "content" : "<p>The Easter Bunny gave you a clue. The number of days Jesus took to return from the dead, was three. The third floorboard of the shed from the door looks loose to you.</p>", "choices": { "time" : -1, "eggs" : null, "section" : "shed_floorboard", "text" : "Pry open the foorboard"}, "contentElse" : null, "choicesElse" : null },
			{ "section": "shed_boltcutters", "content" : "<p>The bolt cutters are conspicuously missing from the tool rack.</p>", "choices": null, "contentElse" : "<p>The bolt cutters on the tool rack could be useful.</p>", "choicesElse" : { "time" : -1, "eggs" : null, "section" : "shed_boltcutters", "text" : "Grab the bolt cutters"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "garden", "text" : "Explore the garden"}
		]
	},
	"shed_boltcutters" : {
		"content" : "<p>You never know when some bolt cutters will come in handy!</p>",
		"flag" : true,
		"visitedChecks" : [
			{ "section": "garden_eggs", "content" : "<p>The Easter Bunny gave you a clue. The number of days Jesus took to return from the dead, was three. The third floorboard of the shed from the door looks loose to you.</p>", "choices": { "time" : -1, "eggs" : null, "section" : "shed_floorboard", "text" : "Pry open the foorboard"}, "contentElse" : null, "choicesElse" : null }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "garden", "text" : "Explore the garden"}
		]
	},
	"shed_floorboard" : {
		"content" : "<p>The floorboard is <i>really</i> loose. Looks like the Easter Bunny hid something here.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "shed_eggs", "content" : "<p>The area under the loose floorboard is bare of anything of note.</p>", "choices": null, "contentElse" : "<p>Wow! There are a cluster of 5 easter eggs lying on a bed of straw! However, there is a large rat scurrying next to it. It looks up and glares at you with beady eyes. No doubt it will try to bite you if you come too near.</p>", "choicesElse" : { "time" : -1, "eggs" : null, "section" : "shed_rat", "text" : "Solve this problem"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "garden", "text" : "Explore the garden"}
		]
	},	
	"shed_rat" : {
		"content" : "<p>You want the eggs, but the rat is in the way.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "porch_kuching", "content" : "<p>Kuching in your arms, tenses and hisses. Cats are made for this stuff.</p>", "choices": { "time" : -2, "eggs" : null, "section" : "shed_rat_kuching", "text" : "Sic Kuching on the rat"}, "contentElse" : null, "choicesElse" : null },
			{ "section": "shed_boltcutters", "content" : "<p>You could scare the rat away. You have a dangerous pair of bolt cutters in your hands!</p>", "choices": { "time" : -5, "eggs" : null, "section" : "shed_rat_boltcutters", "text" : "Use bolt cutters"}, "contentElse" : null, "choicesElse" : null }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "garden", "text" : "Explore the garden"}
		]
	},	
	"shed_rat_kuching" : {
		"content" : "<p>Kuching leaps from your arms and begins chasing the rat. The rat darts out of the space and runs off. In the fracras, however, two of the eggs are smashed to bits.</p>",
		"flag" : false,
		"visitedChecks" : [],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : 3, "section" : "shed_eggs", "text" : "Collect the eggs"},
		]
	},
	"shed_rat_boltcutters" : {
		"content" : "<p>A human with a pair of bolt cutters in hand is just too much of a threat. The rat darts here and there, but eventually scurries away.</p>",
		"flag" : false,
		"visitedChecks" : [],
		"messages" : [],
		"choices" : [
			{ "time" : -1, "eggs" : 5, "section" : "shed_eggs", "text" : "Collect the eggs"},
		]
	},	
	"shed_eggs" : {
		"content" : "<p>You collect the eggs.</p>",
		"flag" : true,
		"visitedChecks" : [],
		"messages" : ["Eggs added to inventory"],
		"choices" : [
			{ "time" : -1, "eggs" : null, "section" : "porch", "text" : "Back to the porch"},
			{ "time" : -1, "eggs" : null, "section" : "garden", "text" : "Explore the garden"}
		]
	},	
	"road" : {
		"content" : "<p>At the end of the footpath, you are at the gate to your family home. Across the road, you see your neighbour Mr Cheong's home.</p>",
		"flag" : false,
		"visitedChecks" : [
			{ "section": "neighbour_ladder", "content" : null, "choices": null, "contentElse" : "<p>You see a stepladder leaning against his fence. Mr Cheong probably won't mind if you borrow it for a few minutes.</p>", "choicesElse" : null },
			{ "section": "road_nicole", "content" : null, "choices": null, "contentElse" : "<p>You see the girl next door, Nicole. She looks like she is trying to hail a cab.</p>", "choicesElse" : { "time" : -1, "eggs" : null, "section" : "road_nicole", "text" : "Approach Nicole"} },
			{ "section": "road_mrlee", "content" : null, "choices": null, "contentElse" : "<p>An old man is trying to cross the road. That is Mr Lee, and he is a <i>very</i> slow walker.</p>", "choicesElse" : { "time" : -5, "eggs" : null, "section" : "road_mrlee", "text" : "Help Mr Lee cross"} }
		],
		"messages" : [],
		"choices" : [
			{ "time" : -5, "eggs" : -5, "section" : "road_dash", "text" : "Make a dash for it"},
			{ "time" : -2, "eggs" : null, "section" : "road_slow", "text" : "Look both ways, then cross"},
		]
	},
	"road_dash" : {
		"content" : "<p>You're in a hurry. No time for caution! This turns out to be a very bad idea as an oncoming motorbike swerves to avoid you. This causes you to drop some of your eggs, which smash on the road. You get a tongue-lashing from the irate motorist.</p>",
		"flag" : false,
		"visitedChecks" : null,
		"messages" : ["5 eggs removed from inventory."],
		"choices" : [
			{ "time" : 1, "eggs" : null, "section" : "neighbour", "text" : "Next"}
		]
	},	
	"road_slow" : {
		"content" : "<p>You were always taught to take care when crosing the road. It takes an extra minute, but you make it across.</p>",
		"flag" : false,
		"visitedChecks" : null,
		"messages" : [],
		"choices" : [
			{ "time" : 1, "eggs" : null, "section" : "neighbour", "text" : "Next"}
		]
	},	
	"road2" : {
		"content" : "xxxxx",
		"flag" : false,
		"visitedChecks" : null,
		"messages" : [],
		"choices" : [
			{ "time" : 1, "eggs" : null, "section" : "", "text" : "test1"},
			{ "time" : 1, "eggs" : null, "section" : "", "text" : "test2"},
		]
	},
	"road3" : {
		"content" : "xxxxx",
		"flag" : false,
		"visitedChecks" : null,
		"messages" : [],
		"choices" : [
			{ "time" : 1, "eggs" : null, "section" : "", "text" : "test1"},
			{ "time" : 1, "eggs" : null, "section" : "", "text" : "test2"},
		]
	},
	"road4" : {
		"content" : "xxxxx",
		"flag" : false,
		"visitedChecks" : null,
		"messages" : [],
		"choices" : [
			{ "time" : 1, "eggs" : null, "section" : "", "text" : "test1"},
			{ "time" : 1, "eggs" : null, "section" : "", "text" : "test2"},
		]
	},
}