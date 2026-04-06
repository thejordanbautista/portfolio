import { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import styles from './pokedexle.module.css';

// ── Pokémon data (Gen I–II, 251 total) ───────────────────────────────────
const POKEMON = [
  {n:1,name:"Bulbasaur",types:["Grass","Poison"],gen:1},
  {n:2,name:"Ivysaur",types:["Grass","Poison"],gen:1},
  {n:3,name:"Venusaur",types:["Grass","Poison"],gen:1},
  {n:4,name:"Charmander",types:["Fire"],gen:1},
  {n:5,name:"Charmeleon",types:["Fire"],gen:1},
  {n:6,name:"Charizard",types:["Fire","Flying"],gen:1},
  {n:7,name:"Squirtle",types:["Water"],gen:1},
  {n:8,name:"Wartortle",types:["Water"],gen:1},
  {n:9,name:"Blastoise",types:["Water"],gen:1},
  {n:10,name:"Caterpie",types:["Bug"],gen:1},
  {n:11,name:"Metapod",types:["Bug"],gen:1},
  {n:12,name:"Butterfree",types:["Bug","Flying"],gen:1},
  {n:13,name:"Weedle",types:["Bug","Poison"],gen:1},
  {n:14,name:"Kakuna",types:["Bug","Poison"],gen:1},
  {n:15,name:"Beedrill",types:["Bug","Poison"],gen:1},
  {n:16,name:"Pidgey",types:["Normal","Flying"],gen:1},
  {n:17,name:"Pidgeotto",types:["Normal","Flying"],gen:1},
  {n:18,name:"Pidgeot",types:["Normal","Flying"],gen:1},
  {n:19,name:"Rattata",types:["Normal"],gen:1},
  {n:20,name:"Raticate",types:["Normal"],gen:1},
  {n:21,name:"Spearow",types:["Normal","Flying"],gen:1},
  {n:22,name:"Fearow",types:["Normal","Flying"],gen:1},
  {n:23,name:"Ekans",types:["Poison"],gen:1},
  {n:24,name:"Arbok",types:["Poison"],gen:1},
  {n:25,name:"Pikachu",types:["Electric"],gen:1},
  {n:26,name:"Raichu",types:["Electric"],gen:1},
  {n:27,name:"Sandshrew",types:["Ground"],gen:1},
  {n:28,name:"Sandslash",types:["Ground"],gen:1},
  {n:29,name:"Nidoran F",types:["Poison"],gen:1},
  {n:30,name:"Nidorina",types:["Poison"],gen:1},
  {n:31,name:"Nidoqueen",types:["Poison","Ground"],gen:1},
  {n:32,name:"Nidoran M",types:["Poison"],gen:1},
  {n:33,name:"Nidorino",types:["Poison"],gen:1},
  {n:34,name:"Nidoking",types:["Poison","Ground"],gen:1},
  {n:35,name:"Clefairy",types:["Fairy"],gen:1},
  {n:36,name:"Clefable",types:["Fairy"],gen:1},
  {n:37,name:"Vulpix",types:["Fire"],gen:1},
  {n:38,name:"Ninetales",types:["Fire"],gen:1},
  {n:39,name:"Jigglypuff",types:["Normal","Fairy"],gen:1},
  {n:40,name:"Wigglytuff",types:["Normal","Fairy"],gen:1},
  {n:41,name:"Zubat",types:["Poison","Flying"],gen:1},
  {n:42,name:"Golbat",types:["Poison","Flying"],gen:1},
  {n:43,name:"Oddish",types:["Grass","Poison"],gen:1},
  {n:44,name:"Gloom",types:["Grass","Poison"],gen:1},
  {n:45,name:"Vileplume",types:["Grass","Poison"],gen:1},
  {n:46,name:"Paras",types:["Bug","Grass"],gen:1},
  {n:47,name:"Parasect",types:["Bug","Grass"],gen:1},
  {n:48,name:"Venonat",types:["Bug","Poison"],gen:1},
  {n:49,name:"Venomoth",types:["Bug","Poison"],gen:1},
  {n:50,name:"Diglett",types:["Ground"],gen:1},
  {n:51,name:"Dugtrio",types:["Ground"],gen:1},
  {n:52,name:"Meowth",types:["Normal"],gen:1},
  {n:53,name:"Persian",types:["Normal"],gen:1},
  {n:54,name:"Psyduck",types:["Water"],gen:1},
  {n:55,name:"Golduck",types:["Water"],gen:1},
  {n:56,name:"Mankey",types:["Fighting"],gen:1},
  {n:57,name:"Primeape",types:["Fighting"],gen:1},
  {n:58,name:"Growlithe",types:["Fire"],gen:1},
  {n:59,name:"Arcanine",types:["Fire"],gen:1},
  {n:60,name:"Poliwag",types:["Water"],gen:1},
  {n:61,name:"Poliwhirl",types:["Water"],gen:1},
  {n:62,name:"Poliwrath",types:["Water","Fighting"],gen:1},
  {n:63,name:"Abra",types:["Psychic"],gen:1},
  {n:64,name:"Kadabra",types:["Psychic"],gen:1},
  {n:65,name:"Alakazam",types:["Psychic"],gen:1},
  {n:66,name:"Machop",types:["Fighting"],gen:1},
  {n:67,name:"Machoke",types:["Fighting"],gen:1},
  {n:68,name:"Machamp",types:["Fighting"],gen:1},
  {n:69,name:"Bellsprout",types:["Grass","Poison"],gen:1},
  {n:70,name:"Weepinbell",types:["Grass","Poison"],gen:1},
  {n:71,name:"Victreebel",types:["Grass","Poison"],gen:1},
  {n:72,name:"Tentacool",types:["Water","Poison"],gen:1},
  {n:73,name:"Tentacruel",types:["Water","Poison"],gen:1},
  {n:74,name:"Geodude",types:["Rock","Ground"],gen:1},
  {n:75,name:"Graveler",types:["Rock","Ground"],gen:1},
  {n:76,name:"Golem",types:["Rock","Ground"],gen:1},
  {n:77,name:"Ponyta",types:["Fire"],gen:1},
  {n:78,name:"Rapidash",types:["Fire"],gen:1},
  {n:79,name:"Slowpoke",types:["Water","Psychic"],gen:1},
  {n:80,name:"Slowbro",types:["Water","Psychic"],gen:1},
  {n:81,name:"Magnemite",types:["Electric","Steel"],gen:1},
  {n:82,name:"Magneton",types:["Electric","Steel"],gen:1},
  {n:83,name:"Farfetchd",types:["Normal","Flying"],gen:1},
  {n:84,name:"Doduo",types:["Normal","Flying"],gen:1},
  {n:85,name:"Dodrio",types:["Normal","Flying"],gen:1},
  {n:86,name:"Seel",types:["Water"],gen:1},
  {n:87,name:"Dewgong",types:["Water","Ice"],gen:1},
  {n:88,name:"Grimer",types:["Poison"],gen:1},
  {n:89,name:"Muk",types:["Poison"],gen:1},
  {n:90,name:"Shellder",types:["Water"],gen:1},
  {n:91,name:"Cloyster",types:["Water","Ice"],gen:1},
  {n:92,name:"Gastly",types:["Ghost","Poison"],gen:1},
  {n:93,name:"Haunter",types:["Ghost","Poison"],gen:1},
  {n:94,name:"Gengar",types:["Ghost","Poison"],gen:1},
  {n:95,name:"Onix",types:["Rock","Ground"],gen:1},
  {n:96,name:"Drowzee",types:["Psychic"],gen:1},
  {n:97,name:"Hypno",types:["Psychic"],gen:1},
  {n:98,name:"Krabby",types:["Water"],gen:1},
  {n:99,name:"Kingler",types:["Water"],gen:1},
  {n:100,name:"Voltorb",types:["Electric"],gen:1},
  {n:101,name:"Electrode",types:["Electric"],gen:1},
  {n:102,name:"Exeggcute",types:["Grass","Psychic"],gen:1},
  {n:103,name:"Exeggutor",types:["Grass","Psychic"],gen:1},
  {n:104,name:"Cubone",types:["Ground"],gen:1},
  {n:105,name:"Marowak",types:["Ground"],gen:1},
  {n:106,name:"Hitmonlee",types:["Fighting"],gen:1},
  {n:107,name:"Hitmonchan",types:["Fighting"],gen:1},
  {n:108,name:"Lickitung",types:["Normal"],gen:1},
  {n:109,name:"Koffing",types:["Poison"],gen:1},
  {n:110,name:"Weezing",types:["Poison"],gen:1},
  {n:111,name:"Rhyhorn",types:["Ground","Rock"],gen:1},
  {n:112,name:"Rhydon",types:["Ground","Rock"],gen:1},
  {n:113,name:"Chansey",types:["Normal"],gen:1},
  {n:114,name:"Tangela",types:["Grass"],gen:1},
  {n:115,name:"Kangaskhan",types:["Normal"],gen:1},
  {n:116,name:"Horsea",types:["Water"],gen:1},
  {n:117,name:"Seadra",types:["Water"],gen:1},
  {n:118,name:"Goldeen",types:["Water"],gen:1},
  {n:119,name:"Seaking",types:["Water"],gen:1},
  {n:120,name:"Staryu",types:["Water"],gen:1},
  {n:121,name:"Starmie",types:["Water","Psychic"],gen:1},
  {n:122,name:"Mr. Mime",types:["Psychic","Fairy"],gen:1},
  {n:123,name:"Scyther",types:["Bug","Flying"],gen:1},
  {n:124,name:"Jynx",types:["Ice","Psychic"],gen:1},
  {n:125,name:"Electabuzz",types:["Electric"],gen:1},
  {n:126,name:"Magmar",types:["Fire"],gen:1},
  {n:127,name:"Pinsir",types:["Bug"],gen:1},
  {n:128,name:"Tauros",types:["Normal"],gen:1},
  {n:129,name:"Magikarp",types:["Water"],gen:1},
  {n:130,name:"Gyarados",types:["Water","Flying"],gen:1},
  {n:131,name:"Lapras",types:["Water","Ice"],gen:1},
  {n:132,name:"Ditto",types:["Normal"],gen:1},
  {n:133,name:"Eevee",types:["Normal"],gen:1},
  {n:134,name:"Vaporeon",types:["Water"],gen:1},
  {n:135,name:"Jolteon",types:["Electric"],gen:1},
  {n:136,name:"Flareon",types:["Fire"],gen:1},
  {n:137,name:"Porygon",types:["Normal"],gen:1},
  {n:138,name:"Omanyte",types:["Rock","Water"],gen:1},
  {n:139,name:"Omastar",types:["Rock","Water"],gen:1},
  {n:140,name:"Kabuto",types:["Rock","Water"],gen:1},
  {n:141,name:"Kabutops",types:["Rock","Water"],gen:1},
  {n:142,name:"Aerodactyl",types:["Rock","Flying"],gen:1},
  {n:143,name:"Snorlax",types:["Normal"],gen:1},
  {n:144,name:"Articuno",types:["Ice","Flying"],gen:1},
  {n:145,name:"Zapdos",types:["Electric","Flying"],gen:1},
  {n:146,name:"Moltres",types:["Fire","Flying"],gen:1},
  {n:147,name:"Dratini",types:["Dragon"],gen:1},
  {n:148,name:"Dragonair",types:["Dragon"],gen:1},
  {n:149,name:"Dragonite",types:["Dragon","Flying"],gen:1},
  {n:150,name:"Mewtwo",types:["Psychic"],gen:1},
  {n:151,name:"Mew",types:["Psychic"],gen:1},
  {n:152,name:"Chikorita",types:["Grass"],gen:2},
  {n:153,name:"Bayleef",types:["Grass"],gen:2},
  {n:154,name:"Meganium",types:["Grass"],gen:2},
  {n:155,name:"Cyndaquil",types:["Fire"],gen:2},
  {n:156,name:"Quilava",types:["Fire"],gen:2},
  {n:157,name:"Typhlosion",types:["Fire"],gen:2},
  {n:158,name:"Totodile",types:["Water"],gen:2},
  {n:159,name:"Croconaw",types:["Water"],gen:2},
  {n:160,name:"Feraligatr",types:["Water"],gen:2},
  {n:161,name:"Sentret",types:["Normal"],gen:2},
  {n:162,name:"Furret",types:["Normal"],gen:2},
  {n:163,name:"Hoothoot",types:["Normal","Flying"],gen:2},
  {n:164,name:"Noctowl",types:["Normal","Flying"],gen:2},
  {n:165,name:"Ledyba",types:["Bug","Flying"],gen:2},
  {n:166,name:"Ledian",types:["Bug","Flying"],gen:2},
  {n:167,name:"Spinarak",types:["Bug","Poison"],gen:2},
  {n:168,name:"Ariados",types:["Bug","Poison"],gen:2},
  {n:169,name:"Crobat",types:["Poison","Flying"],gen:2},
  {n:170,name:"Chinchou",types:["Water","Electric"],gen:2},
  {n:171,name:"Lanturn",types:["Water","Electric"],gen:2},
  {n:172,name:"Pichu",types:["Electric"],gen:2},
  {n:173,name:"Cleffa",types:["Normal","Fairy"],gen:2},
  {n:174,name:"Igglybuff",types:["Normal","Fairy"],gen:2},
  {n:175,name:"Togepi",types:["Fairy"],gen:2},
  {n:176,name:"Togetic",types:["Fairy","Flying"],gen:2},
  {n:177,name:"Natu",types:["Psychic","Flying"],gen:2},
  {n:178,name:"Xatu",types:["Psychic","Flying"],gen:2},
  {n:179,name:"Mareep",types:["Electric"],gen:2},
  {n:180,name:"Flaaffy",types:["Electric"],gen:2},
  {n:181,name:"Ampharos",types:["Electric"],gen:2},
  {n:182,name:"Bellossom",types:["Grass"],gen:2},
  {n:183,name:"Marill",types:["Water","Fairy"],gen:2},
  {n:184,name:"Azumarill",types:["Water","Fairy"],gen:2},
  {n:185,name:"Sudowoodo",types:["Rock"],gen:2},
  {n:186,name:"Politoed",types:["Water"],gen:2},
  {n:187,name:"Hoppip",types:["Grass","Flying"],gen:2},
  {n:188,name:"Skiploom",types:["Grass","Flying"],gen:2},
  {n:189,name:"Jumpluff",types:["Grass","Flying"],gen:2},
  {n:190,name:"Aipom",types:["Normal"],gen:2},
  {n:191,name:"Sunkern",types:["Grass"],gen:2},
  {n:192,name:"Sunflora",types:["Grass"],gen:2},
  {n:193,name:"Yanma",types:["Bug","Flying"],gen:2},
  {n:194,name:"Wooper",types:["Water","Ground"],gen:2},
  {n:195,name:"Quagsire",types:["Water","Ground"],gen:2},
  {n:196,name:"Espeon",types:["Psychic"],gen:2},
  {n:197,name:"Umbreon",types:["Dark"],gen:2},
  {n:198,name:"Murkrow",types:["Dark","Flying"],gen:2},
  {n:199,name:"Slowking",types:["Water","Psychic"],gen:2},
  {n:200,name:"Misdreavus",types:["Ghost"],gen:2},
  {n:201,name:"Unown",types:["Psychic"],gen:2},
  {n:202,name:"Wobbuffet",types:["Psychic"],gen:2},
  {n:203,name:"Girafarig",types:["Normal","Psychic"],gen:2},
  {n:204,name:"Pineco",types:["Bug"],gen:2},
  {n:205,name:"Forretress",types:["Bug","Steel"],gen:2},
  {n:206,name:"Dunsparce",types:["Normal"],gen:2},
  {n:207,name:"Gligar",types:["Ground","Flying"],gen:2},
  {n:208,name:"Steelix",types:["Steel","Ground"],gen:2},
  {n:209,name:"Snubbull",types:["Fairy"],gen:2},
  {n:210,name:"Granbull",types:["Fairy"],gen:2},
  {n:211,name:"Qwilfish",types:["Water","Poison"],gen:2},
  {n:212,name:"Scizor",types:["Bug","Steel"],gen:2},
  {n:213,name:"Shuckle",types:["Bug","Rock"],gen:2},
  {n:214,name:"Heracross",types:["Bug","Fighting"],gen:2},
  {n:215,name:"Sneasel",types:["Dark","Ice"],gen:2},
  {n:216,name:"Teddiursa",types:["Normal"],gen:2},
  {n:217,name:"Ursaring",types:["Normal"],gen:2},
  {n:218,name:"Slugma",types:["Fire"],gen:2},
  {n:219,name:"Magcargo",types:["Fire","Rock"],gen:2},
  {n:220,name:"Swinub",types:["Ice","Ground"],gen:2},
  {n:221,name:"Piloswine",types:["Ice","Ground"],gen:2},
  {n:222,name:"Corsola",types:["Water","Rock"],gen:2},
  {n:223,name:"Remoraid",types:["Water"],gen:2},
  {n:224,name:"Octillery",types:["Water"],gen:2},
  {n:225,name:"Delibird",types:["Ice","Flying"],gen:2},
  {n:226,name:"Mantine",types:["Water","Flying"],gen:2},
  {n:227,name:"Skarmory",types:["Steel","Flying"],gen:2},
  {n:228,name:"Houndour",types:["Dark","Fire"],gen:2},
  {n:229,name:"Houndoom",types:["Dark","Fire"],gen:2},
  {n:230,name:"Kingdra",types:["Water","Dragon"],gen:2},
  {n:231,name:"Phanpy",types:["Ground"],gen:2},
  {n:232,name:"Donphan",types:["Ground"],gen:2},
  {n:233,name:"Porygon2",types:["Normal"],gen:2},
  {n:234,name:"Stantler",types:["Normal"],gen:2},
  {n:235,name:"Smeargle",types:["Normal"],gen:2},
  {n:236,name:"Tyrogue",types:["Fighting"],gen:2},
  {n:237,name:"Hitmontop",types:["Fighting"],gen:2},
  {n:238,name:"Smoochum",types:["Ice","Psychic"],gen:2},
  {n:239,name:"Elekid",types:["Electric"],gen:2},
  {n:240,name:"Magby",types:["Fire"],gen:2},
  {n:241,name:"Miltank",types:["Normal"],gen:2},
  {n:242,name:"Blissey",types:["Normal"],gen:2},
  {n:243,name:"Raikou",types:["Electric"],gen:2},
  {n:244,name:"Entei",types:["Fire"],gen:2},
  {n:245,name:"Suicune",types:["Water"],gen:2},
  {n:246,name:"Larvitar",types:["Rock","Ground"],gen:2},
  {n:247,name:"Pupitar",types:["Rock","Ground"],gen:2},
  {n:248,name:"Tyranitar",types:["Rock","Dark"],gen:2},
  {n:249,name:"Lugia",types:["Psychic","Flying"],gen:2},
  {n:250,name:"Ho-Oh",types:["Fire","Flying"],gen:2},
  {n:251,name:"Celebi",types:["Psychic","Grass"],gen:2},
];

const MAX_GUESSES = 5;

function spriteUrl(num) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
}

function pad(n) { return String(n).padStart(3, '0'); }

function buildHints(guess, target) {
  const typesHints = guess.types.map(t => ({ type: t, match: target.types.includes(t) }));
  const genArrow = guess.gen === target.gen ? 'exact' : guess.gen < target.gen ? 'up' : 'down';
  const numArrow = guess.n === target.n ? 'exact' : guess.n < target.n ? 'up' : 'down';
  return { typesHints, genArrow, numArrow };
}

const ARROW = { up: '▲', down: '▼', exact: '✓' };

// ── Sub-components ────────────────────────────────────────────────────────

function TypeBadge({ type, match }) {
  return (
    <span className={`${styles.typeBadge} ${styles[`type${type}`]} ${match ? styles.typeMatch : styles.typeNoMatch}`}>
      {type}
    </span>
  );
}

function HintPill({ label, arrow, value }) {
  return (
    <span className={styles.hintPill}>
      <span className={styles.pillLabel}>{label}</span>
      <span className={`${styles.pillArrow} ${styles[`arrow${arrow.charAt(0).toUpperCase() + arrow.slice(1)}`]}`}>
        {ARROW[arrow]}
      </span>
      <span>{value}</span>
    </span>
  );
}

function GuessRow({ guess, target, index, isCorrect }) {
  if (!guess) {
    return (
      <div className={`${styles.guessRow} ${styles.guessEmpty}`}>
        <span className={styles.emptyLabel}>— {index + 1} —</span>
      </div>
    );
  }
  const hints = buildHints(guess, target);
  return (
    <div className={`${styles.guessRow} ${isCorrect ? styles.guessCorrect : styles.guessWrong}`}>
      <span className={styles.guessName}>{guess.name}</span>
      <div className={styles.guessHints}>
        {hints.typesHints.map(th => (
          <TypeBadge key={th.type} type={th.type} match={th.match} />
        ))}
        <HintPill
          label="Gen"
          arrow={hints.genArrow}
          value={hints.genArrow === 'exact' ? '✓' : `Gen ${guess.gen}`}
        />
        <HintPill
          label="#"
          arrow={hints.numArrow}
          value={`#${pad(guess.n)}`}
        />
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────

export default function Pokedexle() {
  const [target, setTarget] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [acItems, setAcItems] = useState([]);
  const [acIndex, setAcIndex] = useState(-1);
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const acRef = useRef(null);

  const guessedNums = new Set(guesses.map(g => g.n));

  const startGame = useCallback(() => {
    const newTarget = POKEMON[Math.floor(Math.random() * POKEMON.length)];
    setTarget(newTarget);
    setGuesses([]);
    setGameOver(false);
    setWon(false);
    setInputValue('');
    setAcItems([]);
    setAcIndex(-1);
    setMessage('');
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  useEffect(() => { startGame(); }, [startGame]);

  // close autocomplete on outside click
  useEffect(() => {
    function handleClick(e) {
      if (acRef.current && !acRef.current.contains(e.target) && e.target !== inputRef.current) {
        setAcItems([]);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function updateAutocomplete(val) {
    if (!val) { setAcItems([]); return; }
    const q = val.toLowerCase();
    const matches = POKEMON
      .filter(p => p.name.toLowerCase().startsWith(q) && !guessedNums.has(p.n))
      .slice(0, 8);
    setAcItems(matches);
    setAcIndex(-1);
  }

  function handleInputChange(e) {
    const val = e.target.value;
    setInputValue(val);
    updateAutocomplete(val);
  }

  function selectAcItem(pokemon) {
    setInputValue(pokemon.name);
    setAcItems([]);
    setAcIndex(-1);
    inputRef.current?.focus();
  }

  function handleKeyDown(e) {
    if (acItems.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = Math.min(acIndex + 1, acItems.length - 1);
        setAcIndex(next);
        setInputValue(acItems[next].name);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = Math.max(acIndex - 1, -1);
        setAcIndex(prev);
        if (prev >= 0) setInputValue(acItems[prev].name);
        return;
      }
      if (e.key === 'Escape') { setAcItems([]); return; }
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      submitGuess();
    }
  }

  function submitGuess() {
    if (gameOver || !target) return;
    const raw = inputValue.trim();
    if (!raw) return;

    const match = POKEMON.find(p => p.name.toLowerCase() === raw.toLowerCase());
    if (!match) { setMessage('⚠️ Pokémon not found — check spelling!'); return; }
    if (guessedNums.has(match.n)) { setMessage('⚠️ Already guessed that one!'); return; }

    setMessage('');
    const newGuesses = [...guesses, match];
    setGuesses(newGuesses);
    setInputValue('');
    setAcItems([]);

    const correct = match.n === target.n;
    if (correct) {
      setWon(true);
      setGameOver(true);
      setMessage(`🎉 You got it in ${newGuesses.length} guess${newGuesses.length > 1 ? 'es' : ''}!`);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true);
      setMessage(`😔 It was ${target.name}. Better luck next time!`);
    }
  }

  const revealed = gameOver;
  const rows = Array.from({ length: MAX_GUESSES }, (_, i) => guesses[i] || null);

  return (
    <div className={styles.page}>
      <Head>
        <title>Pokédexle — Who&apos;s That Pokémon?</title>
        <meta name="description" content="Guess the hidden Pokémon using type, generation, and number hints." />
      </Head>

      <div className={styles.topBar}>
        <a href="/dev" className={styles.backLink}>
          <img src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="" className={styles.backIcon} />
          Dev Projects
        </a>
        <span className={styles.pageTitle}>Pokédexle</span>
        <span className={styles.topBarSpacer} />
      </div>

      <main className={styles.main}>
        <div className={styles.pokedex}>

          {/* ── Lens dot ── */}
          <div className={styles.lens} />

          {/* ── Reveal bar ── */}
          <div className={`${styles.revealBar} ${revealed ? (won ? styles.revealWin : styles.revealLose) : ''}`}>
            <span className={styles.revealText}>
              {revealed && target ? target.name.toUpperCase() : '? ? ? ? ? ? ? ?'}
            </span>
          </div>

          {/* ── Split: silhouette | guesses ── */}
          <div className={styles.split}>

            {/* LEFT — silhouette */}
            <div className={styles.leftPanel}>
              <div className={styles.silhouetteWrap}>
                {target && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={spriteUrl(target.n)}
                    alt="Pokémon silhouette"
                    className={revealed ? styles.spriteVisible : styles.spriteHidden}
                  />
                )}
              </div>
              <div className={styles.dexNum}>
                {revealed && target ? `#${pad(target.n)}` : '#???'}
              </div>
            </div>

            {/* RIGHT — guess rows + input */}
            <div className={styles.rightPanel}>
              {rows.map((guess, i) => (
                <GuessRow
                  key={i}
                  index={i}
                  guess={guess}
                  target={target}
                  isCorrect={guess && target && guess.n === target.n}
                />
              ))}

              {/* Input area */}
              <div className={styles.inputArea}>
                {acItems.length > 0 && (
                  <div className={styles.acList} ref={acRef}>
                    {acItems.map((p, i) => (
                      <div
                        key={p.n}
                        className={`${styles.acItem} ${i === acIndex ? styles.acActive : ''}`}
                        onMouseDown={() => selectAcItem(p)}
                      >
                        <span className={styles.acNum}>#{pad(p.n)}</span>
                        <span>{p.name}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className={styles.inputRow}>
                  <input
                    ref={inputRef}
                    className={styles.input}
                    type="text"
                    placeholder="Enter a Pokémon name…"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    disabled={gameOver}
                    autoComplete="off"
                  />
                  <button
                    className={styles.guessBtn}
                    onClick={submitGuess}
                    disabled={gameOver}
                  >
                    Guess
                  </button>
                </div>
                {message && <div className={styles.message}>{message}</div>}
                {gameOver && (
                  <button className={styles.playAgainBtn} onClick={startGame}>
                    🔄 Play Again
                  </button>
                )}
              </div>
            </div>

          </div>

          <div className={styles.footer}>Gen I &amp; II · 251 Pokémon · 5 Guesses</div>
        </div>
      </main>
    </div>
  );
}
