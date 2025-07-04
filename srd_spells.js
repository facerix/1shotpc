export const SPELLS_BY_CLASS = {
  Barbarian: null,
  Bard: {
    fixed: {
      cantrips: ["Dancing Lights", "Vicious Mockery"],
      lvl1: [
        "Charm Person",
        "Color Spray",
        "Dissonant Whispers",
        "Healing Word"
      ],
    },
    all: {
      cantrips: [
        "Dancing Lights",
        "Light",
        "Mage Hand",
        "Mending",
        "Message",
        "Minor Illusion",
        "Prestidigitation",
        "Starry Wisp",
        "True Strike",
        "Vicious Mockery",      
      ],
      lvl1: [
        "Animal Friendship",
        "Bane",
        "Charm Person",
        "Color Spray",
        "Command",
        "Comprehend Languages",
        "Cure Wounds",
        "Detect Magic",
        "Disguise Self",
        "Dissonant Whispers",
        "Faerie Fire",
        "Feather Fall",
        "Healing Word",
        "Heroism",
        "Hideous Laughter",
        "Identify",
        "Illusory Script",
        "Longstrider",
        "Silent Image",
        "Sleep",
        "Speak with Animals",
        "Thunderwave",
        "Unseen Servant",
      ],
    },
  },
  Cleric: {
    fixed: {
      cantrips: [
        "Guidance",
        "Light",
        "Sacred Flame",
        "Thaumaturgy",
      ],
      lvl1: [
        "Bless",
        "Cure Wounds",
        "Guiding Bolt",
        "Shield of Faith",
      ],
    },
    all: {
      cantrips: [
        "Guidance",
        "Light",
        "Mending",
        "Resistance",
        "Sacred Flame",
        "Spare the Dying",
        "Thaumaturgy",      
      ],
      lvl1: [
        "Bane",
        "Bless",
        "Command",
        "Create or Destroy Water",
        "Cure Wounds",
        "Detect Evil and Good",
        "Detect Magic",
        "Detect Poison and Disease",
        "Guiding Bolt",
        "Healing Word",
        "Inflict Wounds",
        "Protection from Evil and Good",
        "Purify Food and Drink",
        "Sanctuary",
        "Shield of Faith",
      ],
    },
  },
  Druid: {
    fixed: {
      cantrips: [
        "Druidcraft",
        "Produce Flame",
      ],
      lvl1: [
        "Animal Friendship",
        "Cure Wounds",
        "Faerie Fire",
        "Speak with Animals",
        "Thunderwave",
      ],
    },
    all: {
      cantrips: [
        "Druidcraft",
        "Elementalism",
        "Guidance",
        "Mending",
        "Message",
        "Poison Spray",
        "Produce Flame",
        "Resistance",
        "Shillelagh",
        "Spare the Dying",
        "Starry Wisp",
      ],
      lvl1: [
        "Animal Friendship",
        "Charm Person",
        "Create or Destroy Water",
        "Cure Wounds",
        "Detect Magic",
        "Detect Poison and Disease",
        "Entangle",
        "Faerie Fire",
        "Fog Cloud",
        "Goodberry",
        "Healing Word",
        "Ice Knife",
        "Jump",
        "Longstrider",
        "Protection from Evil and Good",
        "Purify Food and Drink",
        "Speak with Animals",
        "Thunderwave"
      ]
    }
  },
  Fighter: null,
  Monk: null,
  Paladin: {
    fixed: {
      cantrips: [],
      lvl1: [
        "Heroism",
        "Divine Smite"  
      ],
    },
    all: {
      // Paladins don't have cantrips
      cantrips: [],
      lvl1: [
        "Bless",
        "Command",
        "Cure Wounds",
        "Detect Evil and Good",
        "Detect Magic",
        "Detect Poison and Disease",
        "Divine Favor",
        "Divine Smite",
        "Heroism",
        "Protection from Evil and Good",
        "Purify Food and Drink",
        "Searing Smite",
        "Shield of Faith",
      ],
    },
  },
  Ranger: {
    fixed: {
      cantrips: [],
      lvl1: [
        "Cure Wounds",
        "Ensnaring Strike",
        "Hunter’s Mark (2 / day)",  // this is a class feature, technically, not a spell per se
      ],
    },
    all: {
      // Rangers don't have cantrips
      cantrips: [],
      lvl1: [
        "Alarm",
        "Animal Friendship",
        "Cure Wounds",
        "Detect Magic",
        "Detect Poison and Disease",
        "Ensnaring Strike",
        "Entangle",
        "Fog Cloud",
        "Goodberry",
        // "Hunter’s Mark", // don't include this here since it's an innate class feature
        "Jump",
        "Longstrider",
        "Speak with Animals",
      ],
    },
  },
  Rogue: null,
  Sorcerer: {
    fixed: {
      cantrips: [
        "Light",
        "Prestidigitation",
        "Shocking Grasp",
        "Sorcerous Burst",
      ],
      lvl1: [
        "Burning Hands",
        "Feather Fall",
      ],
    },
    all: {
      cantrips: [
        "Acid Splash",
        "Chill Touch",
        "Dancing Lights",
        "Elementalism",
        "Fire Bolt",
        "Light",
        "Mage Hand",
        "Mending",
        "Message",
        "Minor Illusion",
        "Poison Spray",
        "Prestidigitation",
        "Ray of Frost",
        "Shocking Grasp",
        "Sorcerous Burst",
        "True Strike"
      ],
      lvl1: [
        "Burning Hands",
        "Charm Person",
        "Chromatic Orb",
        "Color Spray",
        "Comprehend Languages",
        "Detect Magic",
        "Disguise Self",
        "Expeditious Retreat",
        "False Life",
        "Feather Fall",
        "Fog Cloud",
        "Grease",
        "Ice Knife",
        "Jump",
        "Mage Armor",
        "Magic Missile",
        "Ray of Sickness",
        "Shield",
        "Silent Image",
        "Sleep",
        "Thunderwave",
      ],
    },
  },
  Warlock: {
    fixed: {
      cantrips: [
        "Eldritch Blast",
        "Prestidigitation",
      ],
      lvl1: [
        "Hex",
        "Hideous Laughter",
      ],
    },
    all: {
      cantrips: [
        "Chill Touch",
        "Eldritch Blast",
        "Mage Hand",
        "Minor Illusion",
        "Poison Spray",
        "Prestidigitation",
        "True Strike",
      ],
      lvl1: [
        "Bane",
        "Charm Person",
        "Comprehend Languages",
        "Detect Magic",
        "Expeditious Retreat",
        "Hellish Rebuke",
        "Hex",
        "Hideous Laughter",
        "Illusory Script",
        "Protection from Evil and Good",
        "Speak with Animals",
        "Unseen Servant",
      ],
    },
  },
  Wizard: {
    fixed: {
      cantrips: [
        "Light",
        "Mage Hand",
        "Ray of Frost",
      ],
      lvl1: [
        "Detect Magic",
        "Feather Fall",
        "Mage Armor",
        "Magic Missile",
        "Sleep",
        "Thunderwave",
      ],
    },
    all: {
      cantrips: [
        "Acid Splash",
        "Chill Touch",
        "Dancing Lights",
        "Elementalism",
        "Fire Bolt",
        "Light",
        "Mage Hand",
        "Mending",
        "Message",
        "Minor Illusion",
        "Poison Spray",
        "Prestidigitation",
        "Ray of Frost",
        "Shocking Grasp",
        "True Strike",
      ],
      lvl1: [
        "Alarm",
        "Burning Hands",
        "Charm Person",
        "Chromatic Orb",
        "Color Spray",
        "Comprehend Languages",
        "Detect Magic",
        "Disguise Self",
        "Expeditious Retreat",
        "False Life",
        "Feather Fall",
        "Find Familiar",
        "Floating Disk",
        "Fog Cloud",
        "Grease",
        "Hideous Laughter",
        "Ice Knife",
        "Identify",
        "Illusory Script",
        "Jump",
        "Longstrider",
        "Mage Armor",
        "Magic Missile",
        "Protection from Evil and Good",
        "Ray of Sickness",
        "Shield",
        "Silent Image",
        "Sleep",
        "Thunderwave",
        "Unseen Servant",
      ],
    },
  },
};

export const SPELL_TEXT_BY_NAME = {
  // cantrips:
  "Acid Splash": `You create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in that Sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage.`,
  "Chill Touch": `Channeling the chill of the grave, make a melee spell attack against a target within reach. On a hit, the target takes 1d10 Necrotic damage, and it can’t regain Hit Points until the end of your next turn.`,
  "Dancing Lights": `You create up to four torch-size lights within range, making them appear as torches, lanterns, or glow- ing orbs that hover for the duration. Alternatively, you combine the four lights into one glowing Me- dium form that is vaguely humanlike. Whichever form you choose, each light sheds Dim Light in a 10- foot radius. object. Covering that object with something opaque, such as a bowl or helm, blocks the sunlight.<br><br>
    As a Bonus Action, you can move the lights up to 60 feet to a space within range. A light must be within 20 feet of another light created by this spell, and a light vanishes if it exceeds the spell’s range.`,
  "Divination": `This spell puts you in contact with a god or a god’s servants. You ask one question about a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply, which might be a short phrase or cryptic rhyme. The spell doesn’t account for circumstances that might change the answer, such as the casting of other spells.<br><br>
    If you cast the spell more than once before finishing a Long Rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer.`,
  "Druidcraft": `Whispering to the spirits of nature, you create one of the following effects within range.<br><br>
    <b>Weather Sensor</b>. You create a Tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.<br><br>
    <b>Bloom</b>. You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.<br><br>
    <b>Sensory Effect</b>. You create a harmless sensory effect, such as falling leaves, spectral dancing fairies, a gentle breeze, the sound of an animal, or the faint odor of skunk. The effect must fit in a 5-foot Cube.<br><br>
    <b>Fire Play</b>. You light or snuff out a candle, a torch, or a campfire.`,
  "Eldritch Blast": "You hurl a beam of crackling energy. Make a ranged spell attack against one creature or object in range. On a hit, the target takes 1d10 Force damage.",
  "Elementalism": `You exert control over the elements, creating one of the following effects within range.<br><br>
    <b>Beckon Air</b>. You create a breeze strong enough to ripple cloth, stir dust, rustle leaves, and close open doors and shutters, all in a 5-foot Cube. Doors and shutters being held open by someone or something aren’t affected.<br><br>
    <b>Beckon Earth</b>. You create a thin shroud of dust or sand that covers surfaces in a 5-foot-square area, or you cause a single word to appear in your handwriting in a patch of dirt or sand.<br><br>
    <b>Beckon Fire</b>. You create a thin cloud of harmless embers and colored, scented smoke in a 5-foot Cube. You choose the color and scent, and the embers can light candles, torches, or lamps in that area. The smoke’s scent lingers for 1 minute.<br><br>
    <b>Beckon Water</b>. You create a spray of cool mist that lightly dampens creatures and objects in a 5-foot Cube. Alternatively, you create 1 cup of clean water either in an open container or on a surface, and the water evaporates in 1 minute.<br><br>
    <b>Sculpt Element</b>. You cause dirt, sand, fire, smoke, mist, or water that can fit in a 1-foot Cube to assume a crude shape (such as that of a creature) for 1 hour.<br><br>`,
  "Fire Bolt": "You hurl a mote of fire at a creature or an object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell starts burning if it isn’t being worn or carried.",
  "Guidance": "You touch a willing creature and choose a skill. Until the spell ends, the creature adds 1d4 to any ability check using the chosen skill.",
  "Light": `You touch one Large or smaller object that isn’t being worn or carried by someone else. Until the spell ends, the object sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The light can be colored as you like.<br><br>
    Covering the object with something opaque blocks the light. The spell ends if you cast it again.`,
  "Mage Hand": `A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.<br><br>
    When you cast the spell, you can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.<br><br>
    As a Magic action on your later turns, you can control the hand thus again. As part of that action, you can move the hand up to 30 feet.<br><br>  
    The hand can’t attack, activate magic items, or carry more than 10 pounds.`,
  "Mending": `This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.<br><br>
    This spell can physically repair a magic item, but it can’t restore magic to such an object.`,
  "Message": `You point toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.<br><br>
    You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence; 1 foot of stone, metal, or wood; or a thin sheet of lead blocks the spell.`,
  "Minor Illusion": `You create a sound or an image of an object within range that lasts for the duration. See the descriptions below for the effects of each. The illusion ends if you cast this spell again.<br><br>
    If a creature takes a Study action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.<br><br>
    <b>Sound</b>. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.<br><br>
    <b>Image</b>. If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot Cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, since things can pass through it.`,
  "Poison Spray": "You spray toxic mist at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d12 Poison damage.",
  "Prestidigitation": `You create a magical effect within range. Choose the effect from the options below. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time.<br><br>
    <b>Sensory Effect</b>. You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.<br>
    <b>Fire Play</b>. You instantaneously light or snuff out a candle, a torch, or a small campfire.<br>
    <b>Clean or Soil</b>. You instantaneously clean or soil an object no larger than 1 cubic foot.<br>
    <b>Minor Sensation</b>. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.<br>
    <b>Magic Mark</b>. You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.<br>
    <b>Minor Creation</b>. You create a nonmagical trinket or an illusory image that can fit in your hand. It lasts until the end of your next turn. A trinket can deal no damage and has no monetary worth.`,
  "Produce Flame": `A flickering flame appears in your hand and remains there for the duration. While there, the flame emits no heat and ignites nothing, and it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The spell ends if you cast it again.<br><br>
    Until the spell ends, you can take a Magic action to hurl fire at a creature or an object within 60 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 Fire damage.`,
  "Ray of Frost": "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 Cold damage, and its Speed is reduced by 10 feet until the start of your next turn.",
  "Resistance": "You touch a willing creature and choose a damage type: Acid, Bludgeoning, Cold, Fire, Lightning, Necrotic, Piercing, Poison, Radiant, Slashing, or Thunder. When the creature takes damage of the chosen type before the spell ends, the creature reduces the total damage taken by 1d4. A creature can benefit from this spell only once per turn.",
  "Sacred Flame": "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 Radiant damage. The target gains no benefit from Half Cover or Three-Quarters Cover for this save.",
  "Shillelagh": `A Club or Quarterstaff you are holding is imbued with nature’s power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon’s damage die becomes a d8. If the attack deals damage, it can be Force damage or the weapon’s normal damage type (your choice).<br>
    The spell ends early if you cast it again or if you let go of the weapon.`,
  "Shocking Grasp": "Lightning springs from you to a creature that you try to touch. Make a melee spell attack against the target. On a hit, the target takes 1d8 Lightning damage, and it can’t make Opportunity Attacks until the start of its next turn.",
  "Sorcerous Burst": `You cast sorcerous energy at one creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 damage of a type you choose: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder.<br><br>
    If you roll an 8 on a d8 for this spell, you can roll another d8, and add it to the damage. When you cast this spell, the maximum number of these d8s you can add to the spell’s damage equals your spellcasting ability modifier.`,
  "Spare the Dying": `Choose a creature within range that has 0 Hit Points and isn’t dead. The creature becomes Stable.`,
  "Starry Wisp": `You launch a mote of light at one creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 Radiant damage, and until the end of your next turn, it emits Dim Light in a 10-foot radius and can’t benefit from the Invisible condition.`,
  "Thaumaturgy": `You manifest a minor wonder within range. You create one of the effects below within range. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time.<br><br>
    <b>Altered Eyes</b>. You alter the appearance of your eyes for 1 minute.<br><br>
    <b>Booming Voice</b>. Your voice booms up to three times as loud as normal for 1 minute. For the duration, you have Advantage on Charisma (Intimidation) checks.<br><br>
    <b>Fire Play</b>. You cause flames to flicker, brighten, dim, or change color for 1 minute.<br><br>
    <b>Invisible Hand</b>. You instantaneously cause an unlocked door or window to fly open or slam shut.<br><br>
    <b>Phantom Sound</b>. You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.<br><br>
    <b>Tremors</b>. You cause harmless tremors in the ground for 1 minute.`,
  "True Strike": `Guided by a flash of magical insight, you make one attack with the weapon used in the spell’s casting. The attack uses your spellcasting ability for the attack and damage rolls instead of using Strength or Dexterity. If the attack deals damage, it can be Radiant damage or the weapon’s normal damage type (your choice).`,
  "Vicious Mockery": `You unleash a string of insults laced with subtle enchantments at one creature you can see or hear within range. The target must succeed on a Wisdom saving throw or take 1d6 Psychic damage and have Disadvantage on the next attack roll it makes before the end of its next turn.`,

  // level 1:
  "Alarm": `You set an alarm against intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a creature touches or enters the warded area. When you cast the spell, you can designate creatures that won’t set off the alarm. You also choose whether the alarm is audible or mental:<br>
    <b>Audible Alarm</b>. The alarm produces the sound of a handbell for 10 seconds within 60 feet of the warded area.<br>
    <b>Mental Alarm</b>. You are alerted by a mental ping if you are within 1 mile of the warded area. This ping awakens you if you’re asleep.`,
  "Animal Friendship": "Target a Beast that you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. If you or one of your allies deals damage to the target, the spell ends.",
  "Bane": `Up to three creatures of your choice that you can see within range must each make a Charisma saving throw. Whenever a target that fails this save makes an attack roll or a saving throw before the spell ends (1 minute or when caster loses concentration), the target must subtract 1d4 from the attack roll or save.`,
  "Bless": "You bless up to three creatures within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target adds 1d4 to the attack roll or save.",
  "Burning Hands": `A thin sheet of flames shoots forth from you. Each creature in a 15-foot Cone makes a Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.<br><br>
    Flammable objects in the Cone that aren’t being worn or carried start burning.`,
  "Charm Person": `One Humanoid you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you.`,
  "Chromatic Orb": `You hurl an orb of energy at a target within range. Choose Acid, Cold, Fire, Lightning, Poison, or Thunder for the type of orb you create, and then make a ranged spell attack against the target. On a hit, the target takes 3d8 damage of the chosen type.`,
  "Color Spray": "You launch a dazzling array of flashing, colorful light. Each creature in a 15-foot Cone originating from you must succeed on a Constitution saving throw or have the Blinded condition until the end of your next turn.",
  "Command": `You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. Choose the command from these options:<br><br>
    <b>Approach</b>. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.<br>
    <b>Drop</b>. The target drops whatever it is holding and then ends its turn.<br>
    <b>Flee</b>. The target spends its turn moving away from you by the fastest available means.<br>
    <b>Grovel</b>. The target has the Prone condition and then ends its turn.<br>
    <b>Halt</b>. On its turn, the target doesn’t move and takes no action or Bonus Action.`,
  "Comprehend Languages": `For the duration, you understand the literal meaning of any language that you hear or see signed. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn’t decode symbols or secret messages.`,
  "Create or Destroy Water": `You do one of the following:<br><br>
    <b>Create Water</b>. You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot Cube within range, extinguishing exposed flames there.<br><br>
    <b>Destroy Water</b>. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot Cube within range.`,
  "Cure Wounds": "A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier.",
  "Detect Evil and Good": `For the duration, you sense the location of any Aberration, Celestial, Elemental, Fey, Fiend, or Undead within 30 feet of yourself. You also sense whether the Hallow spell is active there and, if so, where.<br>
    The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.`,
  "Detect Magic": `For the duration, you sense the presence of magical effects within 30 feet of yourself. If you sense such effects, you can take the Magic action to see a faint aura around any visible creature or object in the area that bears the magic, and if an effect was created by a spell, you learn the spell’s school of magic.<br>
    The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.`,
  "Detect Poison and Disease": `For the duration, you sense the location of poisons, poisonous or venomous creatures, and magical contagions within 30 feet of yourself. You sense the kind of poison, creature, or contagion in each case.<br>
    The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.`,
  "Disguise Self": `You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends. You can seem 1 foot shorter or taller and can appear heavier or lighter. You must adopt a form that has the same basic arrangement of limbs as you have. Otherwise, the extent of the illusion is up to you.<br>
    The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing.<br><br>
    To discern that you are disguised, a creature must take the Study action to inspect your appearance and succeed on an Intelligence (Investigation) check against your spell save DC.`,
  "Dissonant Whispers": "One creature of your choice that you can see within range hears a discordant melody in its mind. The target makes a Wisdom saving throw. On a failed save, it takes 3d6 Psychic damage and must immediately use its Reaction, if available, to move as far away from you as it can, using the safest route. On a successful save, the target takes half as much damage only.",
  "Divine Favor": `Until the spell ends, your attacks with weapons deal an extra 1d4 Radiant damage on a hit.`,
  "Divine Smite": "The target takes an extra 2d8 Radiant damage from the attack. The damage increases by 1d8 if the target is a Fiend or an Undead.",
  "Ensnaring Strike": `As you hit the target, grasping vines appear on it, and it makes a Strength saving throw. A Large or larger creature has Advantage on this save. On a failed save, the target has the Restrained condition until the spell ends. On a successful save, the vines shrivel away, and the spell ends.<br><br>
    While Restrained, the target takes 1d6 Piercing damage at the start of each of its turns. The target or a creature within reach of it can take an action to make a Strength (Athletics) check against your spell save DC. On a success, the spell ends.`,
  "Entangle": `Grasping plants sprout from the ground in a 20-foot square within range. For the duration, these plants turn the ground in the area into Difficult Terrain. They disappear when the spell ends.<br><br>
    Each creature (other than you) in the area when you cast the spell must succeed on a Strength saving throw or have the Restrained condition until the spell ends. A Restrained creature can take an action to make a Strength (Athletics) check against your spell save DC. On a success, it frees itself from the grasping plants and is no longer Restrained by them.`,
  "Expeditious Retreat": `You take the Dash action, and until the spell ends, you can take that action again as a Bonus Action.`,
  "Faerie Fire": `Objects in a 20-foot Cube within range are outlined in blue, green, or violet light (your choice). Each creature in the Cube is also outlined if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed Dim Light in a 10-foot radius and can’t benefit from the Invisible condition.<br><br>
    Attack rolls against an affected creature or object have Advantage if the attacker can see it.`,
  "False Life": `You gain 2d4 + 4 Temporary Hit Points.`,
  "Feather Fall": "Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If a creature lands before the spell ends, the creature takes no damage from the fall, and the spell ends for that creature.",
  "Find Familiar": `You gain the service of a familiar, a spirit that takes an animal form you choose: Bat, Cat, Frog, Hawk, Lizard, Octopus, Owl, Rat, Raven, Spider, Weasel, or another Beast that has a Challenge Rating of 0. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form (see appendix B), though it is a Celestial, Fey, or Fiend (your choice) instead of a Beast. Your familiar acts independently of you, but it obeys your commands.<br><br>
    <b>Telepathic Connection</b>. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as a Bonus Action, you can see through the familiar’s eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses it has.<br><br>
    Finally, when you cast a spell with a range of touch, your familiar can deliver the touch. Your familiar must be within 100 feet of you, and it must take a Reaction to deliver the touch when you cast the spell.<br><br>
    <b>Combat</b>. The familiar is an ally to you and your allies. It rolls its own Initiative and acts on its own turn. A familiar can’t attack, but it can take other actions as normal.<br><br>
    <b>Disappearance of the Familiar</b>. When the familiar drops to 0 Hit Points, it disappears. It reappears after you cast this spell again. As a Magic action, you can temporarily dismiss the familiar to a pocket dimension. Alternatively, you can dismiss it forever. As a Magic action while it is temporarily dismissed, you can cause it to reappear in an unoccupied space within 30 feet of you. Whenever the familiar drops to 0 Hit Points or disappears into the pocket dimension, it leaves behind in its space anything it was wearing or carrying.<br><br>
    <b>One Familiar Only</b>. You can’t have more than one familiar at a time. If you cast this spell while you have a familiar, you instead cause it to adopt a new eligible form.<br><br>`,
  "Floating Disk": `This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.<br>
    The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can’t cross an elevation change of 10 feet or more. For example, the disk can’t move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.<br>
    If you move more than 100 feet from the disk (typically because it can’t move around an obstacle to follow you), the spell ends.<br>`,
  "Fog Cloud": `You create a 20-foot-radius Sphere of fog centered on a point within range. The Sphere is Heavily Obscured. It lasts for the duration or until a strong wind (such as one created by Gust of Wind) disperses it.`,
  "Goodberry": `Ten berries appear in your hand and are infused with magic for the duration. A creature can take a Bonus Action to eat one berry. Eating a berry restores 1 Hit Point, and the berry provides enough nourishment to sustain a creature for one day.<br>
    Uneaten berries disappear when the spell ends.`,
  "Grease": `Nonflammable grease covers the ground in a 10-foot square centered on a point within range and turns it into Difficult Terrain for the duration.<br>
    When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or have the Prone condition. A creature that enters the area or ends its turn there must also succeed on that save or fall Prone.`,
  "Guiding Bolt": "You hurl a bolt of light toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 4d6 Radiant damage, and the next attack roll made against it before the end of your next turn has Advantage.",
  "Healing Word": "A creature of your choice that you can see within range regains Hit Points equal to 2d4 plus your spellcasting ability modifier.",
  "Hellish Rebuke": `(Reaction) The creature that damaged you is momentarily surrounded by green flames. It makes a Dexterity saving throw, taking 2d10 Fire damage on a failed save or half as much damage on a successful one.`,
  "Heroism": "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to the Frightened condition and gains Temporary Hit Points equal to your spellcasting ability modifier at the start of each of its turns.",
  "Hex": `You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 Necrotic damage to the target whenever you hit it with an attack roll. Also, choose one ability when you cast the spell. The target has Disadvantage on ability checks made with the chosen ability.`,
  "Hideous Laughter": `One creature of your choice that you can see within range makes a Wisdom saving throw. On a failed save, it has the Prone and Incapacitated conditions for the duration. During that time, it laughs uncontrollably if it’s capable of laughter, and it can’t end the Prone condition on itself.<br><br>
    At the end of each of its turns and each time it takes damage, it makes another Wisdom saving throw. The target has Advantage on the save if the save is triggered by damage. On a successful save, the spell ends.`,
  "Hunter’s Mark": "You magically mark one creature you can see within range as your quarry. Until the spell ends, you deal an extra 1d6 Force damage to the target whenever you hit it with an attack roll.",
  "Ice Knife": `You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 Cold damage.`,
  "Identify": `You touch an object throughout the spell’s casting. If the object is a magic item or some other magical object, you learn its properties and how to use them, whether it requires Attunement, and how many charges it has, if any. You learn whether any ongoing spells are affecting the item and what they are. If the item was created by a spell, you learn that spell’s name.<br>
    If you instead touch a creature throughout the casting, you learn which ongoing spells, if any, are currently affecting it.`,
  "Illusory Script": `You write on parchment, paper, or another suitable material and imbue it with an illusion that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, seems to be written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, the illusion can alter the meaning, handwriting, and language of the text, though the language must be one you know.<br>
    If the spell is dispelled, the original script and the illusion both disappear.<br>
    A creature that has Truesight can read the hidden message.`,
  "Inflict Wounds": `A creature you touch makes a Constitution saving throw, taking 2d10 Necrotic damage on a failed save or half as much damage on a successful one.`,
  "Jump": `You touch a willing creature. Once on each of its turns until the spell ends, that creature can jump up to 30 feet by spending 10 feet of movement.`,
  "Longstrider": "You touch a creature. The target’s Speed increases by 10 feet until the spell ends.",
  "Mage Armor": "You touch a willing creature who isn’t wearing armor. Until the spell ends, the target’s base AC becomes 13 plus its Dexterity modifier. The spell ends early if the target dons armor.",
  "Magic Missile": "You create three glowing darts of magical force. Each dart strikes a creature of your choice that you can see within range. A dart deals 1d4 + 1 Force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
  "Protection from Evil and Good": `Until the spell ends, one willing creature you touch is protected against creatures that are Aberrations, Celestials, Elementals, Fey, Fiends, or Undead. The protection grants several benefits. Creatures of those types have Disadvantage on attack rolls against the target. The target also can’t be possessed by or gain the Charmed or Frightened conditions from them. If the target is already possessed, Charmed, or Frightened by such a creature, the target has Advantage on any new saving throw against the relevant effect.`,
  "Purify Food and Drink": `You remove poison and rot from nonmagical food and drink in a 5-foot-radius Sphere centered on a point within range.`,
  "Ray of Sickness": `You shoot a greenish ray at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 Poison damage and has the Poisoned condition until the end of your next turn.`,
  "Sanctuary": `You ward a creature within range. Until the spell ends, any creature who targets the warded creature with an attack roll or a damaging spell must succeed on a Wisdom saving throw or either choose a new target or lose the attack or spell. This spell doesn’t protect the warded creature from areas of effect.<br>
    The spell ends if the warded creature makes an attack roll, casts a spell, or deals damage.`,
  "Searing Smite": `(Bonus action, after hitting a target with a melee attack) As you hit the target, it takes an extra 1d6 Fire damage from the attack. At the start of each of its turns until the spell ends, the target takes 1d6 Fire damage and then makes a Constitution saving throw. On a failed save, the spell continues. On a successful save, the spell ends.`,
  "Shield of Faith": "A shimmering field surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
  "Shield": `An imperceptible barrier of magical force protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile.`,
  "Silent Image": `You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot Cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn’t accompanied by sound, smell, or other sensory effects.<br>
    As a Magic action, you can cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.<br>
    Physical interaction with the image reveals it to be an illusion, since things can pass through it. A creature that takes a Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.`,
  "Sleep": `Each creature of your choice in a 5-foot-radius Sphere centered on a point within range must succeed on a Wisdom saving throw or have the Incapacitated condition until the end of its next turn, at which point it must repeat the save. If the target fails the second save, the target has the Unconscious condition for the duration. The spell ends on a target if it takes damage or someone within 5 feet of it takes an action to shake it out of the spell’s effect.<br><br>
    Creatures that don’t sleep, such as elves, or that have Immunity to the Exhaustion condition automatically succeed on saves against this spell.`,
  "Speak with Animals": `For the duration, you can comprehend and verbally communicate with Beasts, and you can use any of the Influence action’s skill options with them.<br><br>
    Most Beasts have little to say about topics that don’t pertain to survival or companionship, but at minimum, a Beast can give you information about nearby locations and monsters, including whatever it has perceived within the past day.`,
  "Thunderwave": `You unleash a wave of thunderous energy. Each creature in a 15-foot Cube originating from you makes a Constitution saving throw. On a failed save, a creature takes 2d8 Thunder damage and is pushed 10 feet away from you. On a successful save, a creature takes half as much damage only.<br><br>
    In addition, unsecured objects that are entirely within the Cube are pushed 10 feet away from you, and a thunderous boom is audible within 300 feet.`,
  "Unseen Servant": `This spell creates an Invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 Hit Point, and a Strength of 2, and it can’t attack. If it drops to 0 Hit Points, the spell ends.<br>
    Once on each of your turns as a Bonus Action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring drinks. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.<br>
    If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.`,
};
