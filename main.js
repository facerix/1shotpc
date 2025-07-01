import { jsx } from "./src/domUtils.js";

const RE_SPELL_LEVEL = /.* \(lvl (\d+)\)/;

const oneOf = (array) => {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx] ?? "";
};

const pickNMore = (array, n, existingSet) => {
  let idx = 0;
  const targetSize = existingSet.size + n;
  if (array.length < n) {
    throw new Error("Not enough options in the target list");
  }

  do {
    idx = Math.floor(Math.random() * array.length);
    existingSet.add(array[idx]);
  } while (existingSet.size < targetSize);
  return existingSet;
};

const BASE_CLASSES = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard"
];

const ATTRS = [
  "STR",
  "DEX",
  "CON",
  "INT",
  "WIS",
  "CHA",
];

const STAT_ARRAY_BY_CLASS = {
  "Barbarian": [15, 13, 14, 10, 12, 8],
  "Bard": [8, 14, 12, 13, 10, 15],
  "Cleric": [14, 8, 13, 10, 15, 12],
  "Druid": [10, 12, 14, 13, 15, 8], // switched dump stat from STR to CHA so attacks are not so awful
  "Fighter": [15, 14, 13, 8, 10, 12],
  "Monk": [12, 15, 13, 10, 14, 8],
  "Paladin": [15, 10, 13, 8, 12, 14],
  "Ranger": [12, 15, 13, 8, 14, 10],
  "Rogue": [12, 15, 13, 14, 10, 8],
  "Sorcerer": [10, 13, 14, 8, 12, 15],
  "Warlock": [8, 14, 13, 12, 10, 15],
  "Wizard": [8, 12, 13, 15, 14, 10],
};

const BASE_SPECIES = [
  "Aasimar",
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Goliath",
  "Halfling",
  "Human",
  "Orc",
  "Tiefling",
];

const SMALL_SPECIES = ["Gnome", "Halfling"];

const ORIGIN_FEATS = {
  "Alert": "Add your Proficiency Bonus (+2) when you roll Initiative. Can also swap your Initiative with a willing ally in the same combat.",
  "Crafter": "Gain proficiency with three different sets of Artisan’s Tools. Gain a 20 percent discount on nonmagical items. Can craft an item from a Fast Crafting table, which lasts until you finish another Long Rest.",
  "Healer": "When you Utilize a Healer’s Kit as an action, a creature can expend one of its Hit Point Dice to heal, adding your Proficiency Bonus (+2) to the roll. When you roll to determine Hit Points when healing with this feature or a spell, you can reroll the dice if it rolls a 1. You must use the new roll.",
  "Lucky": "You have 2 Luck Points per day. You can expend one when you make a D20 Test to give yourself Advantage. You can also expend one to impose Disadvantage when a creature rolls a d20 to make an attack roll against you.",
  "Magic Initiate (Cleric)": "You gain two cantrips and one level 1 spell from the Cleric spell list. You can cast these spells once per Long Rest without expending a spell slot, and can cast them again using spell slots. Wisdom is your spellcasting ability for your Cleric spells.",
  "Magic Initiate (Druid)": "You gain two cantrips and one level 1 spell from the Druid spell list. You can cast these spells once per Long Rest without expending a spell slot, and can cast them again using spell slots. Wisdom is your spellcasting ability for your Druid spells.",
  "Magic Initiate (Wizard)": "You gain two cantrips and one level 1 spell from the Wizard spell list. You can cast these spells once per Long Rest without expending a spell slot, and can cast them again using spell slots. Intelligence is your spellcasting ability for your Wizard spells.",
  "Musician": "You gain proficiency with three musical instruments of your choice. At the end of a Short or Long Rest, you may play the instrument and grant Heroic Inspiration to 2 allies.",
  "Savage Attacker": "Once per turn, when you hit a target with a weapon attack, you can roll the weapon damage dice twice and use either roll against the target.",
  "Skilled": "You gain proficiency in any combination of three additional skills or tools.",
  "Tavern Brawler": "When you hit with an Unarmed Strike and deal damage, you can deal 1d4 + your Strength modifier. If the damage dice for your Unarmed Strikes roll is a 1, you can reroll it and must use the new roll. You have proficiency with improvised weapons. Once per turn, when you hit a creature with an Unarmed Strike as part of the Attack action, in addition to dealing damage, you can push the target 5 feet away from you.",
  "Tough": "Your Hit Point maximum increases by 2.",
};

const ARTISANS_TOOLS = [
  "Alchemist's Supplies",
  "Brewer's Supplies",
  "Calligrapher's Supplies",
  "Carpenter's Tools",
  "Cartographer's Tools",
  "Cobbler's Tools",
  "Cook's Utensils",
  'Disguise Kit',
  'Forgery Kit',
  "Glassblower's Tools",
  'Herbalism Kit',
  "Jeweler's Tools",
  "Leatherworker's Tools",
  "Mason's Tools",
  "Navigator's Tools",
  "Painter's Supplies",
  "Potter's Tools",
  "Smith's Tools",
  "Tinker's Tools",
  "Thieves' Tools",
  "Weaver's Tools",
  "Woodcarver's Tools",
];

const LIGHT_ARMOR = {
  "Padded Armor": 11,
  "Leather Armor": 11,
  "Studded Leather Armor": 12,
};

const MEDIUM_ARMOR = {
  "Hide Armor": 12,
  "Chain Shirt": 13,
  "Scale Mail": 14,
  "Breastplate": 14,
  "Half Plate Armor": 15,
};

const HEAVY_ARMOR = {
  "Ring Mail": 14,
  "Chain Mail": 16,
  "Splint Armor": 17,
  "Plate Armor": 18,
};

const GAMING_SETS = ["Dice", "Dragonchess", "Playing cards", "Three-dragon ante"];

const MUSICAL_INSTRUMENTS = ["Bagpipes", "Drum", "Dulcimer", "Flute", "Horn", "Lute", "Lyre", "Pan Flute", "Shawm", "Viol"];

const FIRST_NAMES_BY_SPECIES = {
  Aasimar: ['Arveene', 'Diero', 'Galladia', 'Evendur', 'Jhessail', 'Hunin', 'Myllandra', 'Kyor', 'Nephis', 'Madislak', 'Reani', 'Mykiel', 'Selise', 'Tadriel', 'Seraphina', 'Taman', 'Yasha', 'Valandras', 'Zora', 'Zasheir'],
  Dragonborn: [
    "Andujar", "Armagan", "Armek", "Arzan", "Axaran", "Belaxarim", "Brevarr", "Djemidor", "Draxan", "Fayal", "Grax", "Iojad", "Inzul", "Khiraj", "Kreytzen", "Lejek",
    "Mar", "Nazir", "Nedam", "Nevek", "Ravaran", "Razaan", "Sarax", "Sarram", "Savaxis", "Siangar", "Sirizan", "Sunan", "Szuran", "Tajan", "Tamajon", "Tenahn", "Toxal", "Tzegyr", "Vantajar", "Vharkus", "Xafiq", "Zarkhil",
    "Artana", "Kalas", "Khagra", "Leytra", "Myrka", "Naya", "Sarcha", "Shirren", "Sirivistra", "Sufana", "Tamara", "Vrumadi", "Zovra"
  ],
  Dwarf: [
    "Agaro", "Arnan", "Auxlan", "Avamir", "Baelnar", "Balfam", "Bariken", "Borkûl", "Darkûl", "Dolmen", "Dyrnar", "Erag", "Ezegan", "Ferrek", "Garmûl", "Glint", "Ghorvas", "Grimmalk",
    "Haeltar", "Halagmar", "Halzar", "Hlant", "Korlag", "Krag", "Krim", "Kurman", "Lurtrum", "Malagar", "Mardam", "Maulnar", "Melgar", "Morak", "Orobok", "Rogath", "Roken", "Rozag", "Sabakzar", "Sharak", "Smethykk", "Swargar", "Thorbalt", "Thorin", "Tredigar", "Vabûl", "Vistrum", "Wolvar",
    "Beyla", "Fenryl", "Grenenzel", "Krystolari", "Lokara", "Lurka", "Marnia", "Praxana", "Rokel", "Roksana", "Thurlfara", "Vauldra", "Veklani", "Vronwe", "Zebel"
  ],
  Elf: [
    "Alarcion", "Alathar", "Ariandar", "Arromar", "Borel", "Bvachan", "Carydion", "Elgoth", "Farlien", "Ferel", "Gaerlan", "Iafalior", "Kaelthorn", "Laethan", "Leliar", "Leodor", "Lorak", "Lorifir", "Morian", "Oleran", "Rylef", "Savian", "Seylas", "Tevior", "Veyas",
    "Aryllan", "Atalya", "Ayrthwil", "Irva", "Lyfalia", "Ronefel", "Thirya", "Velene", "Venefiq", "Zereni"
  ],
  Gnome: [
    "Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook",
    "Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna",
  ],
  Goliath: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Keothi", "Kuori", "Lo-Kag", "Manneo", "Maveith", "Nalla", "Orilo", "Paavu", "Pethani", "Thalai", "Thotham", "Uthal", "Vaunea", "Vimak"],
  Halfling: [
    "Arthan", "Carvin", "Corby", "Cullen", "Egen", "Ernest", "Gedi", "Heron", "Jeryl", "Keffen", "Kylem", "Kynt", "Leskyn", "Neff", "Orne", "Quarrel", "Rabbit", "Rilkin", "Snakebait", "Tarfen", "Titch", "Tuck", "Whim",
    "Caliope", "Emily", "Piper", "Rixi", "Sabretha", "Teg", "Tilly", "Toira", "Vexia", "Vil", "Vzani", "Zanthe", "Ziza"
  ],
  Human: [
    "Anlow", "Arando", "Bram", "Cale", "Dalkon", "Daylen", "Dodd", "Dungarth", "Dyrk", "Eandro", "Falken", "Feck", "Fenton", "Gryphero", "Hagar", "Jeras", "Krynt", "Lavant", "Leyten",
    "Madian", "Malfier", "Markus", "Meklan", "Namen", "Navaren", "Nerle", "Nilus", "Ningyan", "Norris", "Quentin", "Semil", "Sevenson", "Steveren", "Talfen", "Tamond", "Taran", "Tavon", "Tegan", "Vanan", "Vincent",
    "Azura", "Brey", "Hallan", "Kasaki", "Lorelei", "Mirabel", "Pharana", "Remora", "Rosalyn", "Sachil", "Saidi", "Tanika", "Tura", "Tylsa", "Vencia", "Xandrilla"
  ],
  Orc: [
    "Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thokk",
    "Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda"
  ],
  Tiefling: [
    "Ankhus", "Arkadi", "Armarius", "Armillius", "Archidius", "Balmoloch", "Calderax", "Cavian", "Cenereth", "Chorum", "Corynax", "Dacian", "Daelius", "Damaceus", "Decimeth", "Demedor", "Demerian", "Dynachus", "Grassus",
    "Halius", "Heleph", "Incirion", "Kalaradian", "Kamien", "Kazimir", "Kzandro", "Machem", "Maetheus", "Malfias", "Marchion", "Menerus", "Namazeus", "Nensis", "Prismeus", "Pyranikus", "Razortail", "Sejanus", "Severian",
    "Suffer", "Syken", "Tarkus", "Vaius", "Xerek", "Zeth", "Zevon",
    "Affyria", "Cataclysmia", "Domitia", "Dorethau", "Excellence", "Hacari", "Iritra", "Lachira", "Levatra", "Mecretia", "Milvia", "Nericia", "Precious", "Rain", "Samantia", "Sunshine", "Tenerife", "Traya", "Velavia", "Zaidi", "Zethaya"
  ],
};

const LAST_NAMES_BY_SPECIES = {
  Aasimar: [],
  Dragonborn: ["Clethtinthiallor", "Daardendrian", "Delmirev", "Drachedandion", "Fenkenkabradon", "Kepeshkmolik", "Kerrhylon", "Kimbatuul", "Linxakasendalor", "Myastan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Prexijandilin", "Shestendeliath", "Turnuroth", "Verthisathurgiesh", "Yarjerit"],
  Dwarf: ["Ambershard", "Barrelhelm", "Copperhearth", "Deepmiddens", "Drakantal", "Evermead", "Garkalan", "Grimtor", "Hackshield", "Irongull", "Markolak", "Ramcrown", "Rockharvest", "Silvertarn", "Skandalor", "Zarkanan"],
  Elf: ["Autumnloft", "Balefrost", "Briarfell", "Evenwind", "Graytrails", "Mooncairn", "Riverwall", "Stormwolf", "Summergale", "Sunshadow", "Woodenhawk"],
  Gnome: ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Timbers", "Turen"],
  Goliath: [
    "Bearkiller", "Dawncaller", "Fearless", "Flintfinder", "Horncarver", "Keeneye", "Lonehunter", "Longleaper", "Rootsmasher", "Skywatcher", "Steadyhand", "Threadtwister", "Twice-Orphaned", "Twistedlimb", "Wordpainter",
    "Anakalathai", "Elanithino", "Gathakanathi", "Kalagiano", "Katho-Olavi", "Kolae-Gileana", "Ogolakanu", "Thuliaga", "Thunukalathi", "Vaimei-Laga",
  ],
  Halfling: ["Angler", "Battlestone", "Blackwater", "Daggersharp", "Deepstrider", "Hollowpot", "Puddle", "Raftmite", "Skiprock", "Silverfin", "Tanglestrand", "Tricker", "Willowrush", "Yellowcrane"],
  Human: [
    "Arkalis", "Armanci", "Bilger", "Blackstrand", "Brightwater", "Carnavon", "Caskajaro", "Coldshore", "Coyle", "Cresthill", "Cuttlescar", "Daargen", "Dalicarlia", "Danamark", "Donoghan", "Drumwind",
    "Dunhall", "Ereghast", "Falck", "Fallenbridge", "Faringray", "Fletcher", "Fryft", "Goldrudder", "Grantham", "Graylock", "Gullscream", "Hindergrass", "Iscalon", "Kreel", "Kroft", "Lamoth", "Leerstrom",
    "Lynchfield", "Moonridge", "Netheridge", "Oakenheart", "Pyncion", "Ratley", "Redraven", "Revenmar", "Roxley", "Sell", "Seratolva", "Shanks", "Shattermast", "Shaulfer", "Silvergraft", "Stavenger",
    "Stormchapel", "Strong", "Swiller", "Talandro", "Targana", "Towerfall", "Umbermoor", "Van Devries", "Van Gandt", "Van Hyden", "Varcona", "Varzand", "Voortham", "Vrye", "Webb", "Welfer", "Wilxes", "Wintermere", "Wygarthe", "Zatchet", "Zethergyll"
  ],
  Orc: [],
  Tiefling: ["Amarzian", "Carnago", "Domarien", "Iscitan", "Meluzan", "Menetrian", "Paradas", "Romazi", "Sarzan", "Serechor", "Shadowhorn", "Szereban", "Torzalan", "Trelenus", "Trevethor", "Tryphon", "Vadu", "Vrago"]
};

const BACKGROUNDS_BY_ATTR = {
  "Strength": [
    "Artisan",
    "Entertainer",
    "Farmer",
    "Guard",
    "Noble",
    "Sailor",
    "Soldier",
  ],
  "Dexterity": [
    "Artisan",
    "Charlatan",
    "Criminal",
    "Entertainer",
    "Guide",
    "Sailor",
    "Scribe",
    "Soldier",
    "Wayfarer",
  ],
  "Constitution": [
    "Charlatan",
    "Criminal",
    "Farmer",
    "Guide",
    "Hermit",
    "Merchant",
    "Sage",
    "Soldier",
  ],
  "Intelligence": [
    "Acolyte",
    "Artisan",
    "Criminal",
    "Guard",
    "Merchant",
    "Noble",
    "Sage",
    "Scribe",
  ],
  "Wisdom": [
    "Acolyte",
    "Farmer",
    "Guard",
    "Guide",
    "Hermit",
    "Sage",
    "Sailor",
    "Scribe",
    "Wayfarer",
  ],
  "Charisma": [
    "Acolyte",
    "Charlatan",
    "Entertainer",
    "Hermit",
    "Merchant",
    "Noble",
    "Wayfarer",
  ],
};

const CLASSES_BY_BEST_ATTR = {
  STR: ["Barbarian", "Fighter", "Paladin"],
  DEX: ["Fighter", "Monk", "Ranger", "Rogue"],
  CON: ["Barbarian"],
  INT: ["Wizard"],
  WIS: ["Cleric", "Druid", "Monk", "Ranger"],
  CHA: ["Bard", "Paladin", "Sorcerer", "Warlock"],
};

const BACKGROUNDS_BY_CLASS = {
  "Barbarian": [
    ...BACKGROUNDS_BY_ATTR.Strength,
  ],
  "Bard": [
    ...BACKGROUNDS_BY_ATTR.Charisma,
  ],
  "Cleric": [
    ...BACKGROUNDS_BY_ATTR.Wisdom,
  ],
  "Druid": [
    ...BACKGROUNDS_BY_ATTR.Wisdom,
  ],
  "Fighter": [
    ...BACKGROUNDS_BY_ATTR.Strength,
    ...BACKGROUNDS_BY_ATTR.Dexterity,
  ],
  "Monk": [
    ...BACKGROUNDS_BY_ATTR.Dexterity,
    ...BACKGROUNDS_BY_ATTR.Wisdom,
  ],
  "Paladin": [
    ...BACKGROUNDS_BY_ATTR.Strength,
    ...BACKGROUNDS_BY_ATTR.Charisma,
  ],
  "Ranger": [
    ...BACKGROUNDS_BY_ATTR.Dexterity,
    ...BACKGROUNDS_BY_ATTR.Wisdom,
  ],
  "Rogue": [
    ...BACKGROUNDS_BY_ATTR.Dexterity,
  ],
  "Sorcerer": [
    ...BACKGROUNDS_BY_ATTR.Charisma,
  ],
  "Warlock": [
    ...BACKGROUNDS_BY_ATTR.Charisma,
  ],
  "Wizard": [
    ...BACKGROUNDS_BY_ATTR.Intelligence,
  ]
};

const MONK_TOOL_OR_INSTRUMENT = oneOf([...ARTISANS_TOOLS, ...MUSICAL_INSTRUMENTS]);
const MODS_BY_CLASS = {
  Barbarian: {
    skills: ["Athletics", "Intimidation"],
    saves: ["STR", "CON"],
    equipment: [
      "Greataxe", "Handaxe (4)", "Explorer's Pack"
    ],
    gold: 15,
    features: [
      {
        name: "Rage",
        desc: `<p>Two times per day, as a bonus action, you can imbue yourself with a primal power called Rage, a force that grants you extraordinary might and resilience.</p>
        <p>You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.</p>
        <ul>While raging, you have:
          <li>Damage Resistance. You have Resistance to Bludgeoning, Piercing, and Slashing damage.</li>
          <li>Rage Damage. When you make an attack using Strength—with either a weapon or an Unarmed Strike—and deal damage to the target, you gain a bonus +2 to the damage.</li>        
          <li>Strength Advantage. You have Advantage on Strength checks and Strength saving throws.</li>
        </ul>

        <ul>Your Rage lasts until the end of your next turn, but you can keep it going by:
          <li>Making an attack roll against an enemy.</li>
          <li>Forcing an enemy to make a saving throw.</li>
          <li>Taking a Bonus Action to extend your Rage.</li>
        </ul>
        <p>You can maintain a Rage for up to 10 minutes.</p>`
      },
      `Cleave: If you hit a creature with your Greataxe, you can make a melee attack roll with the weapon against a second creature within
        5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon’s damage, but don’t add your ability modifier to that damage unless
        that modifier is negative. You can make this extra attack only once per turn.`,
      `Vex: If you hit a creature with a Handaxe and deal damage, you have Advantage on your next attack roll against that creature before the end of your next turn.`
    ]
  },
  Bard: {
    skills: ["Performance", "Persuasion", "Insight"],
    saves: ["DEX", "CHA"],
    equipment: [
      "Leather Armor", "2 Daggers", oneOf(MUSICAL_INSTRUMENTS), "Entertainer’s Pack"
    ],
    gold: 19,
    features: [
      `<strong>Bardic Inspiration</strong>: You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic Inspiration die, which is a d6.
        
        <p>As a Bonus Action, you can inspire another creature within 60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can have only one Bardic Inspiration die at a time.</p>
        
        <p>Once within the next hour when the creature fails a D20 Test, the creature can roll the Bardic Inspiration die and add the number rolled to the d20, potentially turning the failure into a success. A Bardic Inspiration die is expended when it’s rolled.</p>
        
        <p>You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.</p>`,
      `Spellcasting: You have 2 level-1 spell slots that recharge on a long rest. You can cast your cantrips (level 0 spells) as often as you want. Charisma is your spellcasting ability for your Bard spells.`
    ],
    spells: [
      "Dancing Lights (lvl 0)",
      "Vicious Mockery (lvl 0)",
      "Charm Person (lvl 1)",
      "Color Spray (lvl 1)",
      "Dissonant Whispers (lvl 1)",
      "Healing Word (lvl 1)"
    ]
  },
  Cleric: {
    skills: ["Medicine", "Religion", "Arcana"],
    saves: ["WIS", "CHA"],
    equipment: [
      "Chain Shirt", "Shield", "Mace", "Holy Symbol", "Priest’s Pack"
    ],
    gold: 7,
    features: [
      "Spellcasting: You have 2 level-1 spell slots that recharge on a long rest. You can cast your cantrips (level 0 spells) as often as you want. Wisdom is your spellcasting ability for your Cleric spells.",
    ],
    spells: [
      "Guidance (lvl 0)",
      "Light (lvl 0)",
      "Sacred Flame (lvl 0)",
      "Thaumaturgy (lvl 0)",
      "Bless (lvl 1)",
      "Cure Wounds (lvl 1)",
      "Guiding Bolt (lvl 1)",
      "Shield of Faith (lvl 1)",
    ]
  },
  Druid: {
    skills: ["Survival", "Nature", "Arcana"],
    saves: ["INT", "WIS"],
    equipment: [
      "Leather Armor", "Shield", "Sickle", "Druidic Focus (Quarterstaff)", "Explorer’s Pack", "Herbalism Kit"
    ],
    gold: 9,
    features: [
      "Spellcasting: You have 2 level-1 spell slots that recharge on a long rest. You can cast your cantrips (level 0 spells) as often as you want. Wisdom is your spellcasting ability for your Druid spells.",
      "Druidic: You know Druidic, the secret language of Druids. You can use Druidic to leave hidden messages. You and others who know Druidic automatically spot such a message.",
    ],
    spells: [
      "Druidcraft (lvl 0)",
      "Produce Flame (lvl 0)",
      "Animal Friendship (lvl 1)",
      "Speak with Animals (lvl 1)",
      "Cure Wounds (lvl 1)",
      "Faerie Fire (lvl 1)",
      "Thunderwave (lvl 1)",
    ]
  },
  Fighter: {
    skills: ["Athletics", "Perception"],
    saves: ["STR", "CON"],
    equipment: [
      "Chain Mail", "Greatsword", "Flail", "8 Javelins", "Dungeoneer’s Pack"
    ],
    gold: 4,
    features: [
      `Second Wind: You have a limited well of physical and mental stamina that you can draw on. As a Bonus Action, you can use it to regain Hit Points equal to 1d10+1.
      You can use this feature twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.`,
      `Defense fighting style: While you’re wearing Light, Medium, or Heavy armor, you gain a +1 bonus to Armor Class`,
      `Graze: If your Greatsword attack roll misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.`,
      `Sap: If you hit a creature with your Flail, that creature has Disadvantage on its next attack roll before the start of your next turn.`,
      `Slow: If you hit a creature with your Javelin and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn’t exceed 10 feet.`,
    ],
  },
  Monk: {
    skills: ["Acrobatics", "History", MONK_TOOL_OR_INSTRUMENT],
    saves: ["STR", "DEX"],
    equipment: [
      "Spear", "5 Daggers", MONK_TOOL_OR_INSTRUMENT, "Explorer’s Pack"
    ],
    gold: 11,
    features: [
      `Martial Arts: Your practice of martial arts gives you mastery of combat styles that use your Unarmed Strike and Monk weapons, as follows:
        <p>Bonus Unarmed Strike. You can make an Unarmed Strike as a Bonus Action.</p>
        <p>Martial Arts Die. You can roll 1d6 in place of the normal damage of your Unarmed Strike or Monk weapons. This die changes as you gain Monk levels, as shown in the Martial Arts column of the Monk Features table.</p>
        <p>Dexterous Attacks. You can use your Dexterity modifier instead of your Strength modifier for the attack and damage rolls of your Unarmed Strikes and Monk weapons. In addition, when you use the Grapple or Shove option of your Unarmed Strike, you can use your Dexterity modifier instead of your Strength modifier to determine the save DC.</p>`
    ],
  },
  Paladin: {
    skills: ["Insight", "Religion"],
    saves: ["WIS", "CHA"],
    equipment: [
      "Chain Mail", "Shield", "Longsword", "6 Javelins", "Holy Symbol", "Priest’s Pack"
    ],
    gold: 9,
    features: [
      `Lay On Hands: Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you finish a Long Rest. With that pool, you can restore a total of 5 Hit Points.
        <p>As a Bonus Action, you can touch a creature (which could be yourself) and draw power from the pool of healing to restore a number of Hit Points to that creature, up to the maximum amount remaining in the pool.</p>
        <p>You can also expend 5 Hit Points from the pool of healing power to remove the Poisoned condition from the creature; those points don’t also restore Hit Points to the creature.</p>`,
      "Spellcasting: You have 2 level-1 spell slots that recharge on a long rest. You can cast any cantrips (level 0 spells) as often as you want. Charisma is your spellcasting ability for your Paladin spells.",
      `Sap: If you hit a creature with your Longsword, that creature has Disadvantage on its next attack roll before the start of your next turn.`,
      `Slow: If you hit a creature with your Javelin and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn’t exceed 10 feet.`,
    ],
    spells: [
      "Heroism (lvl 1)",
      "Divine Smite (lvl 1)"
    ]
  },
  Ranger: {
    skills: ["Animal Handling", "Nature", "Survival"],
    saves: ["STR", "DEX"],
    equipment: [
      "Studded Leather Armor", "Scimitar", "Shortsword", "Longbow", "20 Arrows", "Quiver", "Druidic Focus (sprig of mistletoe)", "Explorer’s Pack"
    ],
    gold: 7,
    features: [
      "Spellcasting: You have 2 level-1 spell slots that recharge on a long rest. Wisdom is your spellcasting ability for your Ranger spells.",
      "Favored Enemy: You always have the Hunter’s Mark spell prepared. You can cast it twice without expending a spell slot, and you regain all expended uses of this ability when you finish a Long Rest.",
      `Nick: You can make a bonus attack with your Scimitar as part of the same Attack action as your Shortsword.`,
      `Slow: If you hit a creature with your Longbow and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn.`
    ],
    spells: [
      "Cure Wounds (lvl 1)",
      "Ensnaring Strike (lvl 1)",
      "Hunter’s Mark (2 / day)",
    ],
  },
  Rogue: {
    skills: ["Deception", "Investigation", "Sleight of Hand", "Stealth", "Thieves' Tools"],
    saves: ["DEX", "INT"],
    equipment: [
      "Leather Armor", "2 Daggers", "Shortsword", "Shortbow", "20 Arrows", "Quiver", "Thieves’ Tools", "Burglar’s Pack"
    ],
    gold: 8,
    features: [
      `Expertise: Your proficiency bonus is doubled for Sleight of Hand and Stealth.`,
      `Thieves’ Cant: You picked up various languages in the communities where you plied your roguish talents. You know Thieves’ Cant and one other language of your choice`,
      `Nick: You can make a bonus attack with your Dagger as part of the same Attack action as your Shortsword.`,
      `Vex: If you hit a creature with a Shortbow and deal damage, you have Advantage on your next attack roll against that creature before the end of your next turn.`
    ],
  },
  Sorcerer: {
    skills: ["Persuasion", "Intimidation"],
    saves: ["CON", "CHA"],
    equipment: [
      "Spear", "2 Daggers", "Arcane Focus (crystal)", "Dungeoneer’s Pack",
    ],
    gold: 28,
    features: [
      "Spellcasting: You have 2 level-1 spell slots that recharge on a long rest. You can cast your cantrips (level 0 spells) as often as you want. Charisma is your spellcasting ability for your Sorcerer spells.",
      `Innate Sorcery: You are infused with simmering magic. As a Bonus Action, you can unleash it for 1 minute, during which you gain the following benefits:
        <p>The spell save DC of your Sorcerer spells increases by 1.</p>
        <p>You have Advantage on the attack rolls of Sorcerer spells you cast.</p>
        <p>You can use this feature twice, and you regain all expended uses of it when you finish a Long Rest.</p>`
    ],
    spells: [
      "Light (lvl 0)",
      "Prestidigitation (lvl 0)",
      "Shocking Grasp (lvl 0)",
      "Sorcerous Burst (lvl 0)",
      "Burning Hands (lvl 1)",
      "Feather Fall (lvl 1)",
    ]
  },
  Warlock: {
    skills: ["Arcana", "Deception"],
    saves: ["WIS", "CHA"],
    equipment: [
      "Leather Armor", "Sickle", "2 Daggers", "Arcane Focus (orb)", "Book (occult lore)", "Scholar’s Pack",
    ],
    gold: 15,
    features: [
      "Pact Magic: You have 1 level-1 spell slot that recharges on a short rest. You can cast your cantrips (level 0 spells) as often as you want. Charisma is your spellcasting ability for your Warlock spells.",
    ],
    spells: [
      "Eldritch Blast (lvl 0)",
      "Prestidigitation (lvl 0)",
      "Hex (lvl 1)",
      "Hideous Laughter (lvl 1)",
    ]
  },
  Wizard: {
    skills: ["Arcana", "History"],
    saves: ["INT", "WIS"],
    equipment: [
      "2 Daggers", "Arcane Focus (Quarterstaff)", "Robe", "Spellbook", "Scholar’s Pack"
    ],
    gold: 5,
    features: [
      "Spellcasting: You have 2 level-1 spell slots that recharge on a long rest. You can cast your cantrips (level 0 spells) as often as you want. Intelligence is your spellcasting ability for your Wizard spells.",
      `Arcane Recovery: You can regain some of your magical energy by studying your spellbook. When you finish a Short Rest, you can choose to recover one 1st-level spell slot.      
        <p>Once you use this feature, you can’t do so again until you finish a Long Rest.</p>`
    ],
    spells: [
      "Light (lvl 0)",
      "Mage Hand (lvl 0)",
      "Ray of Frost (lvl 0)",
      "Detect Magic (lvl 1)",
      "Feather Fall (lvl 1)",
      "Mage Armor (lvl 1)",
      "Magic Missile (lvl 1)",
      "Sleep (lvl 1)",
      "Thunderwave (lvl 1)",
    ]
  },
};

const SPELL_TEXT_BY_NAME = {
  "Animal Friendship (lvl 1)": "Target a Beast that you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. If you or one of your allies deals damage to the target, the spell ends.",
  "Bless (lvl 1)": "You bless up to three creatures within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target adds 1d4 to the attack roll or save.",
  "Burning Hands (lvl 1)": `A thin sheet of flames shoots forth from you. Each creature in a 15-foot Cone makes a Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.<br><br>
    Flammable objects in the Cone that aren’t being worn or carried start burning.`,
  "Charm Person (lvl 1)": `One Humanoid you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you.`,
  "Chill Touch (lvl 0)": `Channeling the chill of the grave, make a melee spell attack against a target within reach. On a hit, the target takes 1d10 Necrotic damage, and it can’t regain Hit Points until the end of your next turn.`,
  "Color Spray (lvl 1)": "You launch a dazzling array of flashing, colorful light. Each creature in a 15-foot Cone originating from you must succeed on a Constitution saving throw or have the Blinded condition until the end of your next turn.",
  "Cure Wounds (lvl 1)": "A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier.",
  "Dancing Lights (lvl 0)": `You create up to four torch-size lights within range, making them appear as torches, lanterns, or glow- ing orbs that hover for the duration. Alternatively, you combine the four lights into one glowing Me- dium form that is vaguely humanlike. Whichever form you choose, each light sheds Dim Light in a 10- foot radius. object. Covering that object with something opaque, such as a bowl or helm, blocks the sunlight.<br><br>
    As a Bonus Action, you can move the lights up to 60 feet to a space within range. A light must be within 20 feet of another light created by this spell, and a light vanishes if it exceeds the spell’s range.`,
  "Detect Magic (lvl 1)": `For the duration, you sense the presence of magical effects within 30 feet of yourself. If you sense such effects, you can take the Magic action to see a faint aura around any visible creature or object in the area that bears the magic, and if an effect was created by a spell, you learn the spell’s school of magic.<br><br>
    The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.`,
  "Disguise Self (lvl 1)": `You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends. You can seem 1 foot shorter or taller and can appear heavier or lighter. You must adopt a form that has the same basic arrangement of limbs as you have. Otherwise, the extent of the illusion is up to you.<br><br>
    The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing.<br><br>
    To discern that you are disguised, a creature must take the Study action to inspect your appearance and succeed on an Intelligence (Investigation) check against your spell save DC.`,
  "Dissonant Whispers (lvl 1)": "One creature of your choice that you can see within range hears a discordant melody in its mind. The target makes a Wisdom saving throw. On a failed save, it takes 3d6 Psychic damage and must immediately use its Reaction, if available, to move as far away from you as it can, using the safest route. On a successful save, the target takes half as much damage only.",
  "Divine Smite (lvl 1)": "The target takes an extra 2d8 Radiant damage from the attack. The damage increases by 1d8 if the target is a Fiend or an Undead.",
  "Druidcraft (lvl 0)": `Whispering to the spirits of nature, you create one of the following effects within range.<br><br>
    <b>Weather Sensor</b>. You create a Tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.<br><br>
    <b>Bloom</b>. You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.<br><br>
    <b>Sensory Effect</b>. You create a harmless sensory effect, such as falling leaves, spectral dancing fairies, a gentle breeze, the sound of an animal, or the faint odor of skunk. The effect must fit in a 5-foot Cube.<br><br>
    <b>Fire Play</b>. You light or snuff out a candle, a torch, or a campfire.`,
  "Eldritch Blast (lvl 0)": "You hurl a beam of crackling energy. Make a ranged spell attack against one creature or object in range. On a hit, the target takes 1d10 Force damage.",
  "Ensnaring Strike (lvl 1)": `As you hit the target, grasping vines appear on it, and it makes a Strength saving throw. A Large or larger creature has Advantage on this save. On a failed save, the target has the Restrained condition until the spell ends. On a successful save, the vines shrivel away, and the spell ends.<br><br>
    While Restrained, the target takes 1d6 Piercing damage at the start of each of its turns. The target or a creature within reach of it can take an action to make a Strength (Athletics) check against your spell save DC. On a success, the spell ends.`,
  "Faerie Fire (lvl 1)": `Objects in a 20-foot Cube within range are outlined in blue, green, or violet light (your choice). Each creature in the Cube is also outlined if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed Dim Light in a 10-foot radius and can’t benefit from the Invisible condition.<br><br>
    Attack rolls against an affected creature or object have Advantage if the attacker can see it.`,
  "Feather Fall (lvl 1)": "Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If a creature lands before the spell ends, the creature takes no damage from the fall, and the spell ends for that creature.",
  "Fire Bolt (lvl 0)": "You hurl a mote of fire at a creature or an object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell starts burning if it isn’t being worn or carried.",
  "Friends (lvl 0)": `You magically emanate a sense of friendship toward one creature you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target succeeds automatically if it isn’t a Humanoid, if you’re fighting it, or if you have cast this spell on it within the past 24 hours.<br><br>
    The spell ends early if the target takes damage or if you make an attack roll, deal damage, or force anyone to make a saving throw. When the spell ends, the target knows it was Charmed by you.`,
  "Guidance (lvl 0)": "You touch a willing creature and choose a skill. Until the spell ends, the creature adds 1d4 to any ability check using the chosen skill.",
  "Guiding Bolt (lvl 1)": "You hurl a bolt of light toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 4d6 Radiant damage, and the next attack roll made against it before the end of your next turn has Advantage.",
  "Healing Word (lvl 1)": "A creature of your choice that you can see within range regains Hit Points equal to 2d4 plus your spellcasting ability modifier.",
  "Heroism (lvl 1)": "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to the Frightened condition and gains Temporary Hit Points equal to your spellcasting ability modifier at the start of each of its turns.",
  "Hex (lvl 1)": `You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 Necrotic damage to the target whenever you hit it with an attack roll. Also, choose one ability when you cast the spell. The target has Disadvantage on ability checks made with the chosen ability.`,
  "Hideous Laughter (lvl 1)": `One creature of your choice that you can see within range makes a Wisdom saving throw. On a failed save, it has the Prone and Incapacitated conditions for the duration. During that time, it laughs uncontrollably if it’s capable of laughter, and it can’t end the Prone condition on itself.<br><br>
    At the end of each of its turns and each time it takes damage, it makes another Wisdom saving throw. The target has Advantage on the save if the save is triggered by damage. On a successful save, the spell ends.`,
  "Hunter’s Mark (2 / day)": "You magically mark one creature you can see within range as your quarry. Until the spell ends, you deal an extra 1d6 Force damage to the target whenever you hit it with an attack roll.",
  "Light (lvl 0)": `You touch one Large or smaller object that isn’t being worn or carried by someone else. Until the spell ends, the object sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The light can be colored as you like.<br><br>
    Covering the object with something opaque blocks the light. The spell ends if you cast it again.`,
  "Longstrider (lvl 1)": "You touch a creature. The target’s Speed increases by 10 feet until the spell ends.",
  "Mage Armor (lvl 1)": "You touch a willing creature who isn’t wearing armor. Until the spell ends, the target’s base AC becomes 13 plus its Dexterity modifier. The spell ends early if the target dons armor.",
  "Mage Hand (lvl 0)": `A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.<br><br>
    When you cast the spell, you can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.<br><br>
    As a Magic action on your later turns, you can control the hand thus again. As part of that action, you can move the hand up to 30 feet.<br><br>  
    The hand can’t attack, activate magic items, or carry more than 10 pounds.`,
  "Magic Missile (lvl 1)": "ou create three glowing darts of magical force. Each dart strikes a creature of your choice that you can see within range. A dart deals 1d4 + 1 Force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
  "Mending (lvl 0)": `This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.<br><br>
    This spell can physically repair a magic item, but it can’t restore magic to such an object.`,
  "Message (lvl 0)": `You point toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.<br><br>
    You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence; 1 foot of stone, metal, or wood; or a thin sheet of lead blocks the spell.`,
  "Minor Illusion (lvl 0)": `You create a sound or an image of an object within range that lasts for the duration. See the descriptions below for the effects of each. The illusion ends if you cast this spell again.<br><br>
    If a creature takes a Study action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.<br><br>
    <b>Sound</b>. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.<br><br>
    <b>Image</b>. If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot Cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, since things can pass through it.`,
  "Poison Spray (lvl 0)": "You spray toxic mist at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d12 Poison damage.",
  "Prestidigitation (lvl 0)": `You create a magical effect within range. Choose the effect from the options below. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time.<br><br>
    <b>Sensory Effect</b>. You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.<br>
    <b>Fire Play</b>. You instantaneously light or snuff out a candle, a torch, or a small campfire.<br>
    <b>Clean or Soil</b>. You instantaneously clean or soil an object no larger than 1 cubic foot.<br>
    <b>Minor Sensation</b>. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.<br>
    <b>Magic Mark</b>. You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.<br>
    <b>Minor Creation</b>. You create a nonmagical trinket or an illusory image that can fit in your hand. It lasts until the end of your next turn. A trinket can deal no damage and has no monetary worth.`,
  "Produce Flame (lvl 0)": `A flickering flame appears in your hand and remains there for the duration. While there, the flame emits no heat and ignites nothing, and it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The spell ends if you cast it again.<br><br>
    Until the spell ends, you can take a Magic action to hurl fire at a creature or an object within 60 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 Fire damage.`,
  "Ray of Frost (lvl 0)": "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 Cold damage, and its Speed is reduced by 10 feet until the start of your next turn.",
  "Resistance (lvl 0)": "You touch a willing creature and choose a damage type: Acid, Bludgeoning, Cold, Fire, Lightning, Necrotic, Piercing, Poison, Radiant, Slashing, or Thunder. When the creature takes damage of the chosen type before the spell ends, the creature reduces the total damage taken by 1d4. A creature can benefit from this spell only once per turn.",
  "Sacred Flame (lvl 0)": "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 Radiant damage. The target gains no benefit from Half Cover or Three-Quarters Cover for this save.",
  "Shield of Faith (lvl 1)": "A shimmering field surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
  "Shocking Grasp (lvl 0)": "Lightning springs from you to a creature that you try to touch. Make a melee spell attack against the target. On a hit, the target takes 1d8 Lightning damage, and it can’t make Opportunity Attacks until the start of its next turn.",
  "Sleep (lvl 1)": `Each creature of your choice in a 5-foot-radius Sphere centered on a point within range must succeed on a Wisdom saving throw or have the Incapacitated condition until the end of its next turn, at which point it must repeat the save. If the target fails the second save, the target has the Unconscious condition for the duration. The spell ends on a target if it takes damage or someone within 5 feet of it takes an action to shake it out of the spell’s effect.<br><br>
    Creatures that don’t sleep, such as elves, or that have Immunity to the Exhaustion condition automatically succeed on saves against this spell.`,
  "Sorcerous Burst (lvl 0)": `You cast sorcerous energy at one creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 damage of a type you choose: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder.<br><br>
    If you roll an 8 on a d8 for this spell, you can roll another d8, and add it to the damage. When you cast this spell, the maximum number of these d8s you can add to the spell’s damage equals your spellcasting ability modifier.`,
  "Speak with Animals (lvl 1)": `For the duration, you can comprehend and verbally communicate with Beasts, and you can use any of the Influence action’s skill options with them.<br><br>
    Most Beasts have little to say about topics that don’t pertain to survival or companionship, but at minimum, a Beast can give you information about nearby locations and monsters, including whatever it has perceived within the past day.`,
  "Thaumaturgy (lvl 0)": `You manifest a minor wonder within range. You create one of the effects below within range. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time.<br><br>
    <b>Altered Eyes</b>. You alter the appearance of your eyes for 1 minute.<br><br>
    <b>Booming Voice</b>. Your voice booms up to three times as loud as normal for 1 minute. For the duration, you have Advantage on Charisma (Intimidation) checks.<br><br>
    <b>Fire Play</b>. You cause flames to flicker, brighten, dim, or change color for 1 minute.<br><br>
    <b>Invisible Hand</b>. You instantaneously cause an unlocked door or window to fly open or slam shut.<br><br>
    <b>Phantom Sound</b>. You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.<br><br>
    <b>Tremors</b>. You cause harmless tremors in the ground for 1 minute.`,
  "Thunderwave (lvl 1)": `You unleash a wave of thunderous energy. Each creature in a 15-foot Cube originating from you makes a Constitution saving throw. On a failed save, a creature takes 2d8 Thunder damage and is pushed 10 feet away from you. On a successful save, a creature takes half as much damage only.<br><br>
    In addition, unsecured objects that are entirely within the Cube are pushed 10 feet away from you, and a thunderous boom is audible within 300 feet.`,
  "Vicious Mockery (lvl 0)": `You unleash a string of insults laced with subtle enchantments at one creature you can see or hear within range. The target must succeed on a Wisdom saving throw or take 1d6 Psychic damage and have Disadvantage on the next attack roll it makes before the end of its next turn.`,
};

const ATTACKS_BY_CLASS = {
  Barbarian: ["Greataxe", "Handaxe", "Rage"],
  Bard: ["Dagger", "Vicious Mockery", "Color Spray", "Dissonant Whispers"],
  Cleric: ["Mace", "Sacred Flame", "Guiding Bolt"],
  Druid: ["Sickle", "Quarterstaff", "Thunderwave"],
  Fighter: ["Greatsword", "Flail", "Javelin"],
  Monk: ["Spear", "Dagger", "Unarmed Strike"],
  Paladin: ["Longsword", "Javelin", "Divine Smite"],
  Ranger: ["Scimitar", "Shortsword", "Longbow", "Ensnaring Strike", "Hunter’s Mark"],
  Rogue: ["Dagger", "Shortsword", "Shortbow", "Sneak Attack"],
  Sorcerer: ["Spear", "Dagger", "Shocking Grasp", "Sorcerous Burst", "Burning Hands"],
  Warlock: ["Sickle", "Dagger", "Eldritch Blast", "Hex", "Hideous Laughter"],
  Wizard: ["Dagger", "Ray of Frost", "Magic Missile", "Sleep"],
};

const ATTACKS = {
  "Dagger": {
    attr: "DEX",
    damage: "1d4",
    damageType: "Piercing",
  },
  "Flail": {
    attr: "STR",
    damage: "1d8",
    damageType: "Bludgeoning",
  },
  "Greataxe": {
    attr: "STR",
    damage: "1d12",
    damageType: "Slashing",
  },
  "Greatsword": {
    attr: "STR",
    damage: "2d6",
    damageType: "Slashing",
  },
  "Handaxe": {
    attr: "STR",
    damage: "1d6",
    damageType: "Slashing",
  },
  "Javelin": {
    attr: "STR",
    damage: "1d6",
    damageType: "Piercing",
  },
  "Longbow": {
    attr: "DEX",
    damage: "1d8",
    damageType: "Piercing",
  },
  "Longsword": {
    attr: "STR",
    damage: "1d8",
    damageType: "Slashing",
  },
  "Mace": {
    attr: "STR",
    damage: "1d6",
    damageType: "Bludgeoning",
  },
  "Quarterstaff": {
    attr: "STR",
    damage: "1d6",
    damageType: "Bludgeoning",
  },
  "Scimitar": {
    attr: "DEX",
    damage: "1d6",
    damageType: "Slashing",
  },
  "Shortbow": {
    attr: "DEX",
    damage: "1d6",
    damageType: "Piercing",
  },
  "Shortsword": {
    attr: "DEX",
    damage: "1d6",
    damageType: "Piercing",
  },
  "Sickle": {
    attr: "STR",
    damage: "1d4",
    damageType: "Slashing",
  },
  "Spear": {
    attr: "STR",
    damage: "1d6",
    damageType: "Piercing",
  },
  "Unarmed Strike": {
    attr: "DEX",
    damage: "1d6",
    damageType: "Bludgeoning",
  },
  "Rage": {
    desc: "While raging, your attacks deal an extra +2 damage to their target."
  },
  "Sneak Attack": {
    desc: "1d6 to first attack roll of the round that has advantage and hits."
  },

  // Bard spell attacks
  "Vicious Mockery": {
    save: "WIS",
    damage: "1d6",
    damageType: "Psychic"
  },
  "Color Spray": {
    save: "CON",
    damage: "Blinded",
    damageType: "until the end of your next turn"
  },
  "Dissonant Whispers": {
    save: "WIS",
    damage: "3d6",
    damageType: "Psychic",
    notes: `Target must immediately use its Reaction, if available, to move as far away from you as it can, using the safest route.`
  },

  // Cleric spell attacks
  "Sacred Flame": {
    save: "DEX",
    damage: "1d8",
    damageType: "Radiant"
  },
  "Guiding Bolt": {
    attr: "WIS",
    damage: "4d6",
    damageType: "Radiant"
  },

  // Druid spell attacks
  "Thunderwave": {
    save: "CON",
    damage: "2d8",
    damageType: "Thunder"
  },

  // Paladin spell attacks
  "Divine Smite": {
    desc: `As a bonus action, you can spend a spell slot to add 2d8 Radiant damage to a successful weapon attack.<br>The damage increases by 1d8 if the target is a Fiend or an Undead.`,
  },

  // Ranger spell attacks
  "Ensnaring Strike": {
    save: "STR",
    damage: "1d6",
    damageType: "Piercing",
    notes: "Cast this spell as a bonus action after hitting a target with your Longbow, to attempt to restrain it."
  },
  "Hunter’s Mark": {
    desc: `You magically mark one creature you can see within range as your quarry. Until the spell ends, you deal an extra 1d6 Force damage to the target whenever you hit it with an attack roll.`
  },

  // Sorcerer spell attacks
  "Shocking Grasp": {
    attr: "CHA",
    damage: "1d8",
    damageType: "Lightning, target can't make opportunity attacks until its next turn",
  },
  "Sorcerous Burst": {
    attr: "CHA",
    damage: "1d8",
    damageType: "[Choose: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder]",
  },
  "Burning Hands": {
    save: "DEX",
    damage: "3d6",
    damageType: "Fire"
  },

  // Warlock spell attacks
  "Eldritch Blast": {
    attr: "CHA",
    damage: "1d10",
    damageType: "Force"
  },
  "Hex": {
    desc: `You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 Necrotic damage to the target whenever you hit it with an attack roll. Also, choose one ability when you cast the spell. The target has Disadvantage on ability checks made with the chosen ability.`
  },
  "Hideous Laughter": {
    save: "WIS",
    damage: "Failing target is Prone and Incapacitated, laughing uncontrollably",
    damageType: "",
    notes: `At the end of each of its turns and each time it takes damage, it makes another Wisdom saving throw. The target has Advantage on the save if the save is triggered by damage. On a successful save, the spell ends.`
  },

  // Wizard spell attacks
  "Ray of Frost": {
    attr: "INT",
    damage: "1d8",
    damageType: "Cold <br/>(Target's Speed is reduced by 10 feet until your next turn)",
  },
  "Magic Missile": {
    save: "None",
    damage: "3x 1d4+1",
    damageType: "Force"
  },
  "Sleep": {
    save: "WIS",
    damage: "Incapacitated until the end of its next turn, at which point it must repeat the save.",
    damageType: ""
  },
};

const SPELLSAVE_BY_CLASS = {
  "Bard": "CHA",
  "Cleric": "WIS",
  "Druid": "WIS",
  "Paladin": "CHA",
  "Ranger": "WIS",
  "Sorcerer": "CHA",
  "Warlock": "CHA",
  "Wizard": "INT",
};

const CORE_SKILLS = [
  "Athletics",
  "Acrobatics",
  "Sleight of Hand",
  "Stealth",
  "Arcana",
  "History",
  "Investigation",
  "Nature",
  "Religion",
  "Animal Handling",
  "Insight",
  "Medicine",
  "Perception",
  "Survival",
  "Deception",
  "Intimidation",
  "Performance",
  "Persuasion",
];

const MODS_BY_BACKGROUND = {
  "Acolyte": {
    feat: "Magic Initiate (Cleric)",
    attrs: ["INT", "WIS", "CHA"],
    skills: ["Insight", "Religion"],
    tool: "Calligrapher's Supplies",
    equipment: [
      "Calligrapher's Supplies",
      "Prayer Book",
      "Holy Symbol",
      "Parchment (10 sheets)",
      "Robe"
    ],
    gold: 8
  },
  "Artisan": {
    feat: "Crafter",
    attrs: ["STR", "DEX", "INT"],
    skills: ["Investigation", "Persuasion"],
    tool: [1, ARTISANS_TOOLS],
    equipment: [
      "[tool]",
      "2 Pouches",
      "Traveler's Clothes",
    ],
    gold: 32
  },
  "Charlatan": {
    feat: "Skilled",
    attrs: ["DEX", "CON", "CHA"],
    skills: ["Deception", "Sleight of Hand"],
    tool: "Forgery Kit",
    equipment: [
      "Forgery Kit",
      "Costume",
      "Fine Clothes",
    ],
    gold: 15
  },
  "Criminal": {
    feat: "Alert",
    attrs: ["DEX", "CON", "INT"],
    skills: ["Stealth", "Sleight of Hand"],
    tool: "Thieves' Tools",
    equipment: [
      "2 Daggers",
      "Thieves' Tools",
      "Crowbar",
      "2 Pouches",
      "Traveler's Clothes",
    ],
    gold: 16
  },
  "Entertainer": {
    feat: "Musician",
    attrs: ["STR", "DEX", "CHA"],
    skills: ["Acrobatics", "Performance"],
    tool: [1, MUSICAL_INSTRUMENTS],
    equipment: [
      "[tool]",
      "2 Costumes",
      "Mirror",
      "Perfume",
      "Traveler's Clothes",
    ],
    gold: 11
  },
  "Farmer": {
    feat: "Tough",
    attrs: ["STR", "CON", "WIS"],
    skills: ["Animal Handling", "Nature"],
    tool: "Carpenter's Tools",
    equipment: [
      "Sickle",
      "Carpenter's Tools",
      "Healer's Kit",
      "Iron Pot",
      "Shovel",
      "Traveler's Clothes",
    ],
    gold: 30
  },
  "Guard": {
    feat: "Alert",
    attrs: ["STR", "INT", "WIS"],
    skills: ["Athletics", "Perception"],
    tool: [1, GAMING_SETS],
    equipment: [
      "Spear",
      "Light Crossbow (20 Bolts)",
      "[tool]",
      "Hooded Lantern",
      "Manacles",
      "Quiver",
      "Traveler's Clothes",
    ],
    gold: 12
  },
  "Guide": {
    feat: "Magic Initiate (Druid)",
    attrs: ["DEX", "CON", "WIS"],
    skills: ["Stealth", "Survival"],
    tool: "Cartographer's Tools",
    equipment: [
      "Shortbow (20 Arrows)",
      "Cartographer's Tools",
      "Bedroll",
      "Quiver",
      "Tent",
      "Traveler's Clothes",
    ],
    gold: 3
  },
  "Hermit": {
    feat: "Healer",
    attrs: ["CON", "WIS", "CHA"],
    skills: ["Medicine", "Religion"],
    tool: "Herbalism Kit",
    equipment: [
      "Quarterstaff", "Herbalism Kit", "Bedroll", "Book (philosophy)", "Lamp", "Oil (3 flasks)", "Traveler's Clothes"
    ],
    gold: 16
  },
  "Merchant": {
    feat: "Lucky",
    attrs: ["CON", "INT", "CHA"],
    skills: ["Animal Handling", "Persuasion"],
    tool: "Navigator's Tools",
    equipment: [
      "Navigator's Tools", "2 Pouches", "Traveler's Clothes"
    ],
    gold: 22
  },
  "Noble": {
    feat: "Skilled",
    attrs: ["STR", "INT", "CHA"],
    skills: ["History", "Persuasion"],
    tool: [1, GAMING_SETS],
    equipment: [
      "[tool]", "Fine Clothes", "Perfume"
    ],
    gold: 29
  },
  "Sage": {
    feat: "Magic Initiate (Wizard)",
    attrs: ["CON", "INT", "WIS"],
    skills: ["Arcana", "History"],
    tool: "Calligrapher's Supplies",
    equipment: [
      "Quarterstaff", "Calligrapher's Supplies", "Book (history)", "Parchment (8 sheets)", "Robe"
    ],
    gold: 8
  },
  "Sailor": {
    feat: "Tavern Brawler",
    attrs: ["STR", "DEX", "WIS"],
    skills: ["Acrobatics", "Perception"],
    tool: "Navigator's Tools",
    equipment: [
      "Dagger", "Navigator's Tools", "Rope", "Traveler's Clothes"
    ],
    gold: 20
  },
  "Scribe": {
    feat: "Skilled",
    attrs: ["DEX", "INT", "WIS"],
    skills: ["Investigation", "Perception"],
    tool: "Calligrapher's Supplies",
    equipment: [
      "Calligrapher's Supplies", "Fine Clothes", "Lamp", "Oil (3 flasks)", "Parchment (12 sheets)"
    ],
    gold: 23
  },
  "Soldier": {
    feat: "Savage Attacker",
    attrs: ["STR", "DEX", "CON"],
    skills: ["Athletics", "Intimidation"],
    tool: [1, GAMING_SETS],
    equipment: [
      "Spear", "Shortbow (20 Arrows)", "[tool]", "Healer's Kit", "Quiver", "Traveler's Clothes"
    ],
    gold: 14
  },
  "Wayfarer": {
    feat: "Lucky",
    attrs: ["DEX", "WIS", "CHA"],
    skills: ["Insight", "Stealth"],
    tool: "Thieves' Tools",
    equipment: [
      "2 Daggers", "Thieves' Tools", oneOf(GAMING_SETS), "Bedroll", "2 Pouches", "Traveler's Clothes"
    ],
    gold: 16
  },
};

const generateOriginFeat = (featName) => {
  return `${featName}: ${ORIGIN_FEATS[featName]}`;
}

const getModsForBackground = (backgroundName) => {
  const mods = {
    ...MODS_BY_BACKGROUND[backgroundName]
  };
  if (Array.isArray(mods.tool)) {
    mods.tool = oneOf(mods.tool[1]);
    const toolIdx = mods.equipment.indexOf("[tool]");
    if (toolIdx > -1) {
      mods.equipment[toolIdx] = mods.tool;
    }
  }
  return mods;
};

const DRAGON_TYPES = [
  "Black",
  "Blue",
  "Brass",
  "Bronze",
  "Copper",
  "Gold",
  "Green",
  "Red",
  "Silver",
  "White"
];

const DRAGON_BREATH_BY_TYPE = {
  "Black": "Acid",
  "Blue": "Lightning",
  "Brass": "Fire",
  "Bronze": "Lightning",
  "Copper": "Acid",
  "Gold": "Fire",
  "Green": "Poison",
  "Red": "Fire",
  "Silver": "Cold",
  "White": "Cold"
};

const GIANT_LINEAGES = ["Cloud", "Fire", "Frost", "Hill", "Stone", "Storm"];
const GIANT_BOON_BY_LINEAGE = {
  "Cloud": `Cloud’s Jaunt. As a Bonus Action, you magically teleport up to 30 feet to an unoccupied space you can see.`,
  "Fire": `Fire’s Burn. When you hit a target with an attack roll and deal damage to it, you can also deal 1d10 Fire damage to that target.`,
  "Frost": `Frost’s Chill. When you hit a target with an attack roll and deal damage to it, you can also deal 1d6 Cold damage to that target and reduce its Speed by 10 feet until the start of your next turn.`,
  "Hill": `Hill’s Tumble. When you hit a Large or smaller creature with an attack roll and deal damage to it, you can give that target the Prone condition.`,
  "Stone": `Stone’s Endurance. When you take damage, you can take a Reaction to roll 1d12. Add your Constitution modifier to the number rolled and reduce the damage by that total.`,
  "Storm": `Storm’s Thunder. When you take damage from a creature within 60 feet of you, you can take a Reaction to deal 1d8 Thunder damage to that creature.`
};

const getSpeciesMods = (species, bonuses) => {
  let speed = 30;
  let size = "Medium";
  const spells = [];
  const features = [];
  const attacks = [];
  const skills = [];
  let feat = null;

  switch (species) {
    case "Aasimar":
      // size: "Medium"
      // speed: 30
      features.push(...[
        "Celestial Resistance. You have Resistance to Necrotic damage and Radiant damage.",
        "Darkvision. You have Darkvision with a range of 60 feet.",
        "Healing Hands. As a Magic action, you touch a creature and roll 2d4. The creature regains a number of Hit Points equal to the total rolled. Once you use this trait, you can’t use it again until you finish a Long Rest.",
        "Light Bearer. You know the Light cantrip. Charisma is your spellcasting ability for it.",
      ]);
      spells.push("Light (lvl 0)");
      break;

    case "Dragonborn":
      // size: "Medium"
      // speed: 30
      const dragonType = oneOf(DRAGON_TYPES);
      const damageType = DRAGON_BREATH_BY_TYPE[dragonType];
      features.push(...[
        `Draconic Ancestry. Your lineage stems from a ${dragonType} dragon progenitor.`,
        `Breath Weapon. When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in either a 15-foot Cone or a 30-foot Line that is 5 feet wide (choose the shape each time). Each creature in that area must make a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). On a failed save, a creature takes 1d10 damage of the type determined by your Draconic Ancestry trait. On a successful save, a creature takes half as much damage. You can use this Breath Weapon 2 times per day.`,
        `Damage Resistance. You have Resistance to ${damageType} damage.`,
        `Darkvision. You have Darkvision with a range of 60 feet.`
      ]);
      attacks.push({
        name: "Breath Weapon",
        save: "CON",
        saveDC: 10 + bonuses.CON,
        damage: "1d10",
        damageType: "Thunder"    
      })
      break;

    case "Dwarf":
      features.push(...[
        "Darkvision. You have Darkvision with a range of 120 feet.",
        "Dwarven Resilience. You have Resistance to Poison damage. You also have Advantage on saving throws you make to avoid or end the Poisoned condition.",
        "Dwarven Toughness. Your Hit Point maximum increases by 1",
        `Stonecunning. As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked. You can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.`
      ]);
      break;

    case "Elf":
      const ancestry = oneOf(["Drow", "High Elf", "Wood Elf"]);
      let ancestryAbilities = "";
      let darkvisionRange = 60;
      if (ancestry === "Drow") {
        ancestryAbilities = "The range of your Darkvision increases to 120 feet. You also know the Dancing Lights cantrip.";
        darkvisionRange = 120;
        spells.push("Dancing Lights (lvl 0)");

      } else if (ancestry === "High Elf") {
        ancestryAbilities = "You know the Prestidigitation cantrip.";
        spells.push("Prestidigitation (lvl 0)");

      } else {
        // Wood Elf
        ancestryAbilities = "Your Speed increases to 35 feet. You also know the Druidcraft cantrip.";
        speed = 35;
        spells.push("Druidcraft (lvl 0)");
      }
      const keenSense = oneOf(["Insight", "Perception", "Survival"]);
      skills.push(keenSense);
      features.push(...[
        `Darkvision. You have Darkvision with a range of ${darkvisionRange} feet.`,
        `Elven Lineage. You are part of a ${ancestry} lineage that grants you supernatural abilities. ${ancestryAbilities}`,
        "Fey Ancestry. You have Advantage on saving throws you make to avoid or end the Charmed condition.",
        `Keen Senses. You have proficiency in the ${keenSense} skill.`,
        `Trance. You don’t need to sleep, and magic can’t put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.`
      ]);
      break;

    case "Gnome":
      const gnomishLineage = oneOf(["Forest Gnome", "Rock Gnome"]);
      size = "Small";
      features.push(...[
        "Darkvision. You have Darkvision with a range of 60 feet.",
        "Gnomish Cunning. You have Advantage on Intelligence, Wisdom, and Charisma saving throws."
      ]);
      if (gnomishLineage === "Forest Gnome") {
        features.push(`Gnomish Lineage: Forest Gnome. You know the Minor Illusion cantrip. You also always have the Speak with Animals spell prepared. You can cast it without a spell slot 2 times per day.`);
        spells.push(...[
          "Minor Illusion (lvl 0)",
          "Speak with Animals (lvl 1)"
        ]);
      } else {
        spells.push(...[
          "Mending (lvl 0)",
          "Prestidigitation (lvl 0)"
        ]);
        features.push(`Gnomish Lineage: Rock Gnome. You know the Mending and Prestidigitation cantrips. In addition, you can spend 10 minutes casting Prestidigitation to create a Tiny clockwork device (AC 5, 1 HP), such as a toy, fire starter, or music box. When you create the device, you determine its function by choosing one effect from Prestidigitation; the device produces that effect whenever you or another creature takes a Bonus Action to activate it with a touch. If the chosen effect has options within it, you choose one of those options for the device when you create it. For example, if you choose the spell’s ignite-extinguish effect, you determine whether the device ignites or extinguishes fire; the device doesn’t do both. You can have three such devices in existence at a time, and each falls apart 8 hours after its creation or when you dismantle it with a touch as a Utilize action.`);
      }
      break;

    case "Goliath":
      speed = 35;
      const giantAncestry = oneOf(GIANT_LINEAGES);
      features.push(...[
        `Giant Ancestry. You are descended from ${giantAncestry} Giants. You have a supernatural boon from your ancestry, as follows; you can use it 2 times per day:
      <p>${GIANT_BOON_BY_LINEAGE[giantAncestry]}</p>`,
        "Powerful Build. You have Advantage on any ability check you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity."
      ])
      break;

    case "Halfling":
      size = "Small";
      features.push(...[
        "Brave. You have Advantage on saving throws you make to avoid or end the Frightened condition.",
        "Halfling Nimbleness. You can move through the space of any creature that is a size larger than you, but you can’t stop in the same space.",        
        "Luck. When you roll a 1 on the d20 of a D20 Test, you can reroll the die, and you must use the new roll.",        
        "Naturally Stealthy. You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you."
      ]);
      break;

    case "Human":
      const talent = oneOf(CORE_SKILLS);
      skills.push(talent);
      feat = oneOf(Object.keys(ORIGIN_FEATS));
      features.push(...[
        "Resourceful. You gain Heroic Inspiration whenever you finish a Long Rest.",
        `Skillful. You have proficiency in ${talent}.`,
        `Versatile. You have the ${feat} Origin feat.
        <p>${ORIGIN_FEATS[feat]}</p>`,
      ]);
      break;

    case "Orc":
      features.push(...[
        "Adrenaline Rush. You can take the Dash action as a Bonus Action. When you do so, you gain 2 Temporary Hit Points. You can use this trait 2 times per day.",
        "Darkvision. You have Darkvision with a range of 120 feet.",        
        `Relentless Endurance. When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once you use this trait, you can’t do so again until you finish a Long Rest.`
      ]);
      break;

    case "Tiefling":
      const legacy = oneOf(["Abyssal", "Chthonic", "Infernal"]);
      const spellAttr = oneOf(["INT", "WIS", "CHA"]);
      features.push("Darkvision. You have Darkvision with a range of 60 feet.");
      if (legacy === "Abyssal") {
        features.push(`Fiendish Legacy. You are the recipient of an Abyssal legacy that grants you supernatural abilities.
          <p>You have Resistance to Poison damage. You also know the Poison Spray cantrip.</p>`);
        spells.push("Poison Spray (lvl 0)");
        attacks.push({
          name: "Poison Spray",
          attr: spellAttr,
          damage: "1d12",
          damageType: "Poison"
        });

      } else if (legacy === "Chthonic") {
        features.push(`Fiendish Legacy. You are the recipient of a Chthonic legacy that grants you supernatural abilities.
          <p>You have Resistance to Necrotic damage. You also know the Chill Touch cantrip.</p>`);
        spells.push("Chill Touch (lvl 0)");
        attacks.push({
          name: "Chill Touch",
          attr: spellAttr,
          damage: "1d10",
          damageType: "Necrotic"
        });

      } else {
        // Infernal
        features.push(`Fiendish Legacy. You are the recipient of an Infernal legacy that grants you supernatural abilities.
          <p>You have Resistance to Fire damage. You also know the Fire Bolt cantrip.</p>`);
        spells.push("Fire Bolt (lvl 0)");
        attacks.push({
          name: "Fire Bolt",
          attr: spellAttr,
          damage: "1d10",
          damageType: "Fire"
        });
      }
      features.push("Otherworldly Presence. You know the Thaumaturgy cantrip.");
      break;
  }

  return {
    speed,
    size,
    features,
    spells,
    attacks,
    skills,
    feat,
  };
};

const roll = (dieMax, modifier = 0) => {
  return Math.floor(Math.random() * dieMax) + 1 + modifier
};

const sum = (numberArray) => {
  return (numberArray ?? []).reduce((acc, val) => acc + val, 0);
};

const rollStat = () => {
  const rolls = [
    roll(6),
    roll(6),
    roll(6),
    roll(6),
  ];
  return sum(rolls.toSorted().slice(1));
};

const getHP = (className, conBonus) => {
  if (className === "Barbarian") {
    return 12 + conBonus
  } else if (["Fighter", "Paladin", "Ranger"].includes(className)) {
    return 10 + conBonus;
  } else if (["Sorcerer", "Wizard"].includes(className)) {
    return 6 + conBonus;
  } else {
    return 8 + conBonus;
  }
};

const abilityModifier = (value) => {
  switch (value) {
    case 1:
      return -5;
    case 2:
    case 3:
      return -4;
    case 4:
    case 5:
      return -3;
    case 6:
    case 7:
      return -2;
    case 8:
    case 9:
      return -1;
    case 10:
    case 11:
      return 0;
    case 12:
    case 13:
      return 1;
    case 14:
    case 15:
      return 2;
    case 16:
    case 17:
      return 3;
    case 18:
    case 19:
      return 4;
    case 20:
    case 21:
      return 5;
    default:
      // in theory a level 1 PC is never going to have an attr any higher than 20
      return 0;
  }
};

const statModStr = (bonus) => {
  return `${bonus >= 0 ? '+' : ''}${bonus}`;
};

const ABILITY_MOD_FOR_SKILL = {
  // core skills
  "Athletics": "STR",
  "Acrobatics": "DEX",
  "Sleight of Hand": "DEX",
  "Stealth": "DEX",
  "Arcana": "INT",
  "History": "INT",
  "Investigation": "INT",
  "Nature": "INT",
  "Religion": "INT",
  "Animal Handling": "WIS",
  "Insight": "WIS",
  "Medicine": "WIS",
  "Perception": "WIS",
  "Survival": "WIS",
  "Deception": "CHA",
  "Intimidation": "CHA",
  "Performance": "CHA",
  "Persuasion": "CHA",

  // tools
  "Alchemist's Supplies": "INT",
  "Brewer's Supplies": "INT",
  "Calligrapher's Supplies": "DEX",
  "Carpenter's Tools": "STR",
  "Cartographer's Tools": "WIS",
  "Cobbler's Tools": "DEX",
  "Cook's Utensils": "WIS",
  'Disguise Kit': "CHA",
  'Forgery Kit': "DEX",
  "Glassblower's Tools": "INT",
  'Herbalism Kit': "INT",
  "Jeweler's Tools": "INT",
  "Leatherworker's Tools": "DEX",
  "Mason's Tools": "STR",
  "Navigator's Tools": "WIS",
  "Painter's Supplies": "WIS",
  "Poisoner's Kit": "INT",
  "Potter's Tools": "INT",
  "Smith's Tools": "STR",
  "Tinker's Tools": "DEX",
  "Thieves' Tools": "DEX",
  "Weaver's Tools": "DEX",
  "Woodcarver's Tools": "DEX",

  // gaming sets
  "Dice": "WIS",
  "Dragonchess": "WIS",
  "Playing cards": "WIS",
  "Three-dragon ante": "WIS",

  // musical instruments
  "Bagpipes": "CHA",
  "Drum": "CHA",
  "Dulcimer": "CHA",
  "Flute": "CHA",
  "Horn": "CHA",
  "Lute": "CHA",
  "Lyre": "CHA",
  "Pan Flute": "CHA",
  "Shawm": "CHA",
  "Viol": "CHA",
};

const getSkillBonus = (skillName, bonuses, proficiencies, hasExpertise = false) => {
  const attr = ABILITY_MOD_FOR_SKILL[skillName];
  const bonus = hasExpertise ? 4 : proficiencies.includes(skillName) ? 2 : 0;
  if (attr) {
    return bonuses[attr] + bonus;
  }
  return 0;
};

const AttrGrid = (PC) => {
  const { attrs, bonuses, skills: rawSkills, className, proficiencies } = PC;
  const saves = {
    ...bonuses
  };
  MODS_BY_CLASS[className].saves.forEach(attr => {
    saves[attr] += 2;
  });
  const skills = {
    ...rawSkills
  };

  return jsx`<div class="stats">
    <div class="stat">
      <strong>STR</strong>
      <span>${attrs.STR} (${statModStr(bonuses.STR)})</span>
      <hr>
      <span>${statModStr(saves.STR)} save</span>
      <hr>
      <span class="ability">${statModStr(getSkillBonus("Athletics", bonuses, proficiencies))} Athletics</span>
    </div>
    <div class="stat">
      <strong>DEX</strong>
      <span>${attrs.DEX} (${statModStr(bonuses.DEX)})</span>
      <hr>
      <span>${statModStr(saves.DEX)} save</span>
      <hr>
      <span class="ability">${statModStr(getSkillBonus("Acrobatics", bonuses, proficiencies))} Acrobatics</span>
      <span class="ability">${statModStr(getSkillBonus("Sleight of Hand", bonuses, proficiencies, className === "Rogue"))} Sleight of Hand</span>
      <span class="ability">${statModStr(getSkillBonus("Stealth", bonuses, proficiencies, className === "Rogue"))} Stealth</span>
    </div>
    <div class="stat">
      <strong>CON</strong>
      <span>${attrs.CON} (${statModStr(bonuses.CON)})</span>
      <hr>
      <span>${statModStr(saves.CON)} save</span>
    </div>
    <div class="stat">
      <strong>INT</strong>
      <span>${attrs.INT} (${statModStr(bonuses.INT)})</span>
      <hr>
      <span>${statModStr(saves.INT)} save</span>
      <hr>
      <span class="ability">${statModStr(getSkillBonus("Arcana", bonuses, proficiencies))} Arcana</span>
      <span class="ability">${statModStr(getSkillBonus("History", bonuses, proficiencies))} History</span>
      <span class="ability">${statModStr(getSkillBonus("Investigation", bonuses, proficiencies))} Investigation</span>
      <span class="ability">${statModStr(getSkillBonus("Nature", bonuses, proficiencies))} Nature</span>
      <span class="ability">${statModStr(getSkillBonus("Religion", bonuses, proficiencies))} Religion</span>
    </div>
    <div class="stat">
      <strong>WIS</strong>
      <span>${attrs.WIS} (${statModStr(bonuses.WIS)})</span>
      <hr>
      <span>${statModStr(saves.WIS)} save</span>
      <hr>
      <span class="ability">${statModStr(getSkillBonus("Animal Handling", bonuses, proficiencies))} Animal Handling</span>
      <span class="ability">${statModStr(getSkillBonus("Insight", bonuses, proficiencies))} Insight</span>
      <span class="ability">${statModStr(getSkillBonus("Medicine", bonuses, proficiencies))} Medicine</span>
      <span class="ability">${statModStr(getSkillBonus("Perception", bonuses, proficiencies))} Perception</span>
      <span class="ability">${statModStr(getSkillBonus("Survival", bonuses, proficiencies))} Survival</span>
    </div>
    <div class="stat">
      <strong>CHA</strong>
      <span>${attrs.CHA} (${statModStr(bonuses.CHA)})</span>
      <hr>
      <span>${statModStr(saves.CHA)} save</span>
      <hr>
      <span class="ability">${statModStr(getSkillBonus("Deception", bonuses, proficiencies))} Deception</span>
      <span class="ability">${statModStr(getSkillBonus("Intimidation", bonuses, proficiencies))} Intimidation</span>
      <span class="ability">${statModStr(getSkillBonus("Performance", bonuses, proficiencies))} Performance</span>
      <span class="ability">${statModStr(getSkillBonus("Persuasion", bonuses, proficiencies))} Persuasion</span>
    </div>
  </div>`;
};

const AttackEntry = (atk, bonuses) => {
  let entry = "";
  if (atk.desc) {
    entry = jsx`<tr><td colspan="3">${atk.name}: ${atk.desc}</td></tr>`;
  } else if (atk.save) {
    let DC = atk.saveDC ?? bonuses.spellSave;
    let save = atk.save === "None" ? "None" : `${atk.save} save (DC ${DC})`;
    entry = jsx`<tr>
      <td>${atk.name}</td>
      <td>${save}</td>
      <td>${atk.damage} ${atk.damageType}</td>
    </tr>`;
  } else {
    const bonus = (atk.damageBonus === false) ? null : bonuses[atk.attr];
    const dmg = `${atk.damage}${bonus ? statModStr(bonus): ""}`;
    entry = jsx`<tr>
      <td>${atk.name}</td>
      <td>${statModStr(bonus+2)}</td>
      <td>${dmg} ${atk.damageType}</td>
    </tr>`;
  }
  if (atk.notes) {
    entry += `<tr><td colspan="3">(${atk.notes})</td></tr>`;
  }
  return entry;
}

const SpellEntry = (spellName) => {
  const description = SPELL_TEXT_BY_NAME[spellName] ?? "";
  return description ? `<details><summary>${spellName}</summary><div>${description}</div></details>` : jsx`<li>${spellName}</li>`;
}

const CharacterSheet = (PC) => {
  const specialSkills = [];
  for (let skillName of PC.proficiencies) {
    if (!CORE_SKILLS.includes(skillName)) {
      specialSkills.push(skillName);
    }
  }
  return jsx`
  <header class="identity">
    <div>
      <h3>${PC.name}, ${PC.species} ${PC.className}</h3>
      <h4>Background: ${PC.origin}</h4>
    </div>

    <table border="1">
      <thead>
        <tr>
          <th>AC</th>
          <th>HP</th>
          <th>Initiative</th>
          <th>Speed</th>
          <th>Size</th>
          <th>Passive Perception</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${PC.AC}</td>
          <td>${PC.HP}</td>
          <td>${statModStr(PC.initiative)}</td>
          <td>${PC.speed}</td>
          <td>${PC.size}</td>
          <td>${abilityModifier(PC.attrs.WIS) + 10}</td>
        </tr>
      </tbody>
    </table>
  </header>

  ${AttrGrid(PC)}

  <div class="attacks">
    <h4>Attacks</h4>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Atk Bonus / DC</th>
          <th>Damage / Effect</th>
        </tr>
      </thead>
      <tbody>
        ${PC.attacks.map(atk => AttackEntry(atk, PC.bonuses))}
      </tbody>
    </table>
  </div>
  <div class="flex" id="features-and-spells">
    <div class="features">
      <h4>Special abilities &amp; class features</h4>
      <ul>
        ${specialSkills.map(skill => `<li>${skill} (${ABILITY_MOD_FOR_SKILL[skill]}, ${statModStr(getSkillBonus(skill, PC.bonuses, PC.proficiencies))} total)</li>`)}
        ${PC.features.map(feature => {
          if (feature.desc) {
            return `<details><summary>${feature.name}:</summary><div>${feature.desc}</div></details>`;
          } 
          return `<li>${feature}</li>`;
        })}
      </ul>
    </div>
    ${PC.spells?.length > 0 && jsx`
      <div class="spells">
        <h4>Spells</h4>
        <ul>
          ${PC.spells.map(SpellEntry)}
        </ul>
      </div>
    `}
  </div>
  <div class="equipment">
    <h4>Equipment</h4>
    <ul>
      ${PC.equipment.map(eq => `<li>${eq}</li>`)}
    </ul>
  </div>`;
};

const PC_by_4d6 = () => {
  const attrs = {
    STR: rollStat(),
    DEX: rollStat(),
    CON: rollStat(),
    INT: rollStat(),
    WIS: rollStat(),
    CHA: rollStat(),
  };
  const sortedAttrs = Object.entries(attrs).toSorted((a, b) => b[1] - a[1]);
  const bestAttr = sortedAttrs[0][0];
  const className = oneOf(CLASSES_BY_BEST_ATTR[bestAttr]);
  return {
    attrs,
    className
  };
};

const PC_by_StatArray = (classOverride) => {
  const className = classOverride || oneOf(BASE_CLASSES);
  const statArray = STAT_ARRAY_BY_CLASS[className];
  const attrs = Object.fromEntries(ATTRS.map((attr, idx) => {
    return [attr, statArray[idx]]
  }));
  
  return {
    attrs,
    className
  };
};

const newPC = ({ classOverride = "", speciesOverride="", randomStats = false }) => {
  const species = speciesOverride || oneOf(BASE_SPECIES);
  const name = `${oneOf(FIRST_NAMES_BY_SPECIES[species])} ${oneOf(LAST_NAMES_BY_SPECIES[species])}`.trim();

  const core = randomStats ? PC_by_4d6() : PC_by_StatArray(classOverride);
  const className = classOverride || core.className;
  const attrs = core.attrs;

  const origin = oneOf(BACKGROUNDS_BY_CLASS[className]);
  const originMods = getModsForBackground(origin);
  for (let attr of originMods.attrs) {
    attrs[attr] += 1;
  }
  const bonuses = {
    STR: abilityModifier(attrs.STR),
    DEX: abilityModifier(attrs.DEX),
    CON: abilityModifier(attrs.CON),
    INT: abilityModifier(attrs.INT),
    WIS: abilityModifier(attrs.WIS),
    CHA: abilityModifier(attrs.CHA),
  };
  if (SPELLSAVE_BY_CLASS[className]) {
    bonuses.spellSave = 10 + bonuses[SPELLSAVE_BY_CLASS[className]];
  }

  const speciesMods = getSpeciesMods(species, bonuses); // spells / features / attacks / skills
  const classMods = MODS_BY_CLASS[className];


  const skills = {
    "Athletics": bonuses.STR,
    "Acrobatics": bonuses.DEX,
    "Sleight of Hand": bonuses.DEX,
    "Stealth": bonuses.DEX,
    "Arcana": bonuses.INT,
    "History": bonuses.INT,
    "Investigation": bonuses.INT,
    "Nature": bonuses.INT,
    "Religion": bonuses.INT,
    "AnimalHandling": bonuses.WIS,
    "Insight": bonuses.WIS,
    "Medicine": bonuses.WIS,
    "Perception": bonuses.WIS,
    "Survival": bonuses.WIS,
    "Deception": bonuses.CHA,
    "Intimidation": bonuses.CHA,
    "Performance": bonuses.CHA,
    "Persuasion": bonuses.CHA,
  };

  let HP = getHP(className, bonuses.CON);
  let initiative = bonuses.DEX;
  const speed = speciesMods.speed;
  const size = SMALL_SPECIES.includes(species) ? "Small" : "Medium";
  const attacks = ATTACKS_BY_CLASS[className].map(name => {
    return {
      name,
      ...ATTACKS[name]
    };
  });

  attacks.push(...speciesMods.attacks);

  let proficiencies = new Set([
    ...speciesMods.skills,
    ...classMods.skills,
    ...originMods.skills,
    originMods.tool,
  ]);
  const spells = classMods.spells ? [...classMods.spells] : [];
  spells.push(...speciesMods.spells);

  // apply any modifications from the origin feat(s)
  [originMods.feat, speciesMods.feat].forEach(feat => {
    switch (feat) {
      case "Alert":
        // "Add your Proficiency Bonus when you roll Initiative.
        initiative += 2;
        break;
      case "Crafter":
        // "Gain proficiency with three different sets of Artisan’s Tools.
        pickNMore(ARTISANS_TOOLS, 3, proficiencies);
        break;
      case "Magic Initiate (Cleric)":
        // "You gain two cantrips and one level 1 spell from the Cleric spell list.",
        bonuses.spellSave = 10 + bonuses.WIS;
        spells.unshift(...[
          "Mending (lvl 0)",
          "Resistance (lvl 0)",
        ]);
        spells.push("Detect Magic (lvl 1)");
        break;
      case "Magic Initiate (Druid)":
        // "You gain two cantrips and one level 1 spell from the Druid spell list.",
        bonuses.spellSave = 10 + bonuses.WIS;
        spells.unshift(...[
          "Mending (lvl 0)",
          "Message (lvl 0)",
        ])
        spells.push("Longstrider (lvl 1)");
        break;
      case "Magic Initiate (Wizard)":
        // "You gain two cantrips and one level 1 spell from the Wizard spell list.",
        bonuses.spellSave = 10 + bonuses.INT;
        spells.unshift(...[
          "Friends (lvl 0)",
          "Fire Bolt (lvl 0)",
        ])
        spells.push("Disguise Self (lvl 1)");
        attacks.push({
          name: "Fire Bolt",
          attr: "INT",
          damage: "1d10",
          damageType: "Fire"
        });
        break;
      case "Musician":
        // "You gain proficiency with three musical instruments of your choice."
        pickNMore(MUSICAL_INSTRUMENTS, 3, proficiencies);
        break;
      case "Skilled":
        // "You gain proficiency in any combination of three skills or tools of your choice.",
        pickNMore([...CORE_SKILLS, ...ARTISANS_TOOLS], 3, proficiencies);
        break;
      case "Tavern Brawler":
        // (only apply if class is not Monk, since Monk's unarmed strike is better)
        if (className !== "Monk") {
          attacks.push({
            name: "Unarmed Strike",
            attr: "STR",
            damage: "1d4",
            damageType: "Bludgeoning"
          });
        }
        break;
      case "Tough":
        // "When you first gain this Origin feat, your Hit Point maximum increases by twice your character level."
        HP += 2;
        break;
    }
  });

  // Species mods
  if (species === "Dwarf") {
    // Dwarven Toughness
    HP += 1;
  }

  // Rogue expertise
  if (className === "Rogue") {
    // double-proficiency with Sleight of Hand and Stealth 
    skills["Sleight of Hand"] += 2;
    skills["Stealth"] += 2;
  }

  const equipment = [
    ...classMods.equipment,
    ...originMods.equipment,
    `${classMods.gold+originMods.gold} GP`
  ];

  // Armor class
  let AC = 10 + bonuses.DEX;
  if (className === "Monk") {
    AC += bonuses.WIS;
  } else if (className === "Barbarian") {
    AC += bonuses.CON;
  }

  // add any armor to AC
  equipment.forEach(eq => {
    if (LIGHT_ARMOR[eq]) {
      AC = LIGHT_ARMOR[eq] + bonuses.DEX;
    }
    if (MEDIUM_ARMOR[eq]) {
      AC = MEDIUM_ARMOR[eq] + (bonuses.DEX > 2 ? 2 : bonuses.DEX);
    }
    if (HEAVY_ARMOR[eq]) {
      AC = HEAVY_ARMOR[eq];
    }
    if (eq === "Shield") {
      AC += 2;
    }
  });

  // apply any post-armor AC adjustments
  if (className === "Fighter") {
    // Defense fighting sytle
    AC += 1;
  }

  const features = [
    ...speciesMods.features,
    ...classMods.features,
    generateOriginFeat(originMods.feat),
  ];

  // sort spells by name, then by level
  spells.sort().sort((a, b) => {
    return a.replace(RE_SPELL_LEVEL, "$1") - b.replace(RE_SPELL_LEVEL, "$1");
  });

  const pcData = {
    name,
    species,
    className,
    origin,
    HP,
    AC,
    initiative,
    speed,
    size,
    attrs,
    bonuses,
    skills,
    proficiencies: Array.from(proficiencies),
    attacks,
    features,
    spells,
    equipment,
  };
  localStorage.setItem("savedPC", JSON.stringify(pcData));
  return pcData;
};

document.addEventListener("DOMContentLoaded", () => {
  const btnAnother = document.querySelector("button#btnGenerate");
  const chkShowAdvanced = document.querySelector("input#showAdvanced");
  const advancedHeader = document.querySelector("header.advanced");
  const speciesSelector = document.querySelector("select#species");
  const classSelector = document.querySelector("select#class");
  const main = document.querySelector("main");
  let speciesOverride = "";
  let classOverride = "";
  let randomStats = false;  // stat array vs 4d6-dl

  const saved = localStorage.getItem("savedPC");
  let pcData = saved ? JSON.parse(saved) : newPC({ classOverride });

  const regen = () => {
    pcData = newPC({ classOverride, speciesOverride, randomStats });
    main.innerHTML = CharacterSheet(pcData);
  }

  chkShowAdvanced.addEventListener("change", evt => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });    
    advancedHeader.classList[evt.target.checked ? "add" : "remove"]("visible");
  });

  btnAnother.addEventListener("click", () => {
    regen();
  });

  speciesSelector.addEventListener("change", evt => {
    speciesOverride = evt.target.value;
    regen();
  })

  classSelector.addEventListener("change", evt => {
    classOverride = evt.target.value;
    regen();
  })

  document.querySelector("div.statSrc").addEventListener("change", evt => {
    randomStats = (evt.target.value === "random");
    regen();
  })

  main.innerHTML = CharacterSheet(pcData);
});