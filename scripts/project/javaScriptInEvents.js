

const scriptsInEvents = {

	async Titleandgameoverandhelpevents_Event1_Act11(runtime, localVars)
	{
		//var SpellGrowthLimits = runtime.objects.SpellGrowthLimits;
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell0GrowthLimit, 0);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell1GrowthLimit, 1);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell2GrowthLimit, 2);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell3GrowthLimit, 3);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell4GrowthLimit, 4);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell5GrowthLimit, 5);
	},

	async Titleandgameoverandhelpevents_Event2_Act11(runtime, localVars)
	{
		//var SpellGrowthLimits = runtime.objects.SpellGrowthLimits;
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell0GrowthLimit, 0);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell1GrowthLimit, 1);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell2GrowthLimit, 2);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell3GrowthLimit, 3);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell4GrowthLimit, 4);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell5GrowthLimit, 5);
	},

	async Inventoryevents_Event2_Act1(runtime, localVars)
	{
		//var SpellGrowthLimits = runtime.objects.SpellGrowthLimits;
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell0GrowthLimit, 0);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell1GrowthLimit, 1);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell2GrowthLimit, 2);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell3GrowthLimit, 3);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell4GrowthLimit, 4);
		runtime.objects.SpellGrowthLimits.getFirstInstance().setAt(runtime.globalVars.Spell5GrowthLimit, 5);
	},

	async Inventoryevents_Event4_Act1(runtime, localVars)
	{
		console.log("current X value: " + runtime.objects.TimesSpellsUsed.getFirstInstance().getAt(0) + "\n");
		console.log("current X value: " + runtime.objects.TimesSpellsUsed.getFirstInstance().getAt(1) + "\n");
		console.log("current X value: " + runtime.objects.TimesSpellsUsed.getFirstInstance().getAt(2) + "\n");
		console.log("current X value: " + runtime.objects.TimesSpellsUsed.getFirstInstance().getAt(3) + "\n");
		console.log("current X value: " + runtime.objects.TimesSpellsUsed.getFirstInstance().getAt(4) + "\n");
	},

	async Inventoryevents_Event7_Act3(runtime, localVars)
	{
		console.log("test\n")
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
