/* ============================================================
   PRINCESS WORLD — Gamification Module
   5 Princess Dolls + Mega Shopping Mall for Aaradhya
   Vanilla JS IIFE — no framework required
   ============================================================ */
(function () {
  'use strict';

  /* ── Doll data ────────────────────────────────────────── */
  const DOLLS = [
    {
      id: 'aria', name: 'Princess Aria', emoji: '👸',
      grad: 'linear-gradient(135deg,#f9a8d4,#fb7185)',
      hairColor: '#f9a8d4', bodyColor: '#fb7185',
      loves: 'Loves Books & Stories',
      greeting: 'Hi Aaradhya! Ready to read some magical stories with me? 📚',
      crownEmoji: '👑',
    },
    {
      id: 'bella', name: 'Princess Bella', emoji: '🧚‍♀️',
      grad: 'linear-gradient(135deg,#d8b4fe,#e879f9)',
      hairColor: '#d8b4fe', bodyColor: '#c026d3',
      loves: 'Loves Music & Dance',
      greeting: "Hey Aaradhya! Let's dance to the rhythm of learning! 💃🎵",
      crownEmoji: '🎵',
    },
    {
      id: 'cherry', name: 'Princess Cherry', emoji: '💃',
      grad: 'linear-gradient(135deg,#fca5a5,#f43f5e)',
      hairColor: '#fca5a5', bodyColor: '#e11d48',
      loves: 'Loves Art & Colors',
      greeting: 'Hiii! Today we will paint our dreams bright! 🎨✨',
      crownEmoji: '🌹',
    },
    {
      id: 'daisy', name: 'Princess Daisy', emoji: '🧜‍♀️',
      grad: 'linear-gradient(135deg,#fde68a,#fbbf24)',
      hairColor: '#fde68a', bodyColor: '#f59e0b',
      loves: 'Loves Nature & Flowers',
      greeting: 'Hello sunshine! Let\'s grow our knowledge like flowers! 🌻',
      crownEmoji: '🌼',
    },
    {
      id: 'elsa', name: 'Princess Elsa', emoji: '❄️',
      grad: 'linear-gradient(135deg,#7dd3fc,#60a5fa)',
      hairColor: '#7dd3fc', bodyColor: '#2563eb',
      loves: 'Loves Stars & Science',
      greeting: 'Hi Aaradhya! The stars are calling us to learn something cool! ⭐🔬',
      crownEmoji: '💎',
    },
  ];

  /* ── Category list ────────────────────────────────────── */
  const CATEGORIES = [
    { id: 'all',         name: 'All Items',           emoji: '🛍️' },
    { id: 'hair',        name: 'Hair Accessories',    emoji: '💇‍♀️' },
    { id: 'beauty',      name: 'Beauty',              emoji: '👁️' },
    { id: 'dresses',     name: 'Cute Dresses',        emoji: '👗' },
    { id: 'nailsandals', name: 'Nails & Sandals',     emoji: '💅' },
    { id: 'glasses',     name: 'Cool Glasses',        emoji: '👓' },
    { id: 'watches',     name: 'Pretty Watches',      emoji: '⌚' },
    { id: 'ornaments',   name: 'Ornaments',           emoji: '💍' },
    { id: 'mobiles',     name: 'Mobile Accessories',  emoji: '📱' },
    { id: 'rings',       name: 'Sparkly Rings',       emoji: '💎' },
    { id: 'earrings',    name: 'Earrings',            emoji: '✨' },
    { id: 'necklaces',   name: 'Necklaces',           emoji: '📿' },
    { id: 'gowns',       name: 'Princess Gowns',      emoji: '👸' },
    { id: 'bags',        name: 'Cute Bags',           emoji: '👜' },
    { id: 'toys',        name: 'Soft Toys',           emoji: '🧸' },
    { id: 'stationery',  name: 'School Stuff',        emoji: '✏️' },
  ];

  /* ── Full item catalog ────────────────────────────────── */
  const CATALOG = [
    // Hair
    { id:'h1',  name:'Pink Bow Clip',        emoji:'🎀',  price:10,  cat:'hair',        desc:'Super cute pink bow!' },
    { id:'h2',  name:'Rainbow Scrunchie',    emoji:'🌈',  price:15,  cat:'hair',        desc:'All colors in one!' },
    { id:'h3',  name:'Sparkle Hairband',     emoji:'✨',  price:20,  cat:'hair',        desc:'Glittery and magical' },
    { id:'h4',  name:'Butterfly Clips Set',  emoji:'🦋',  price:25,  cat:'hair',        desc:'6 cute butterflies' },
    { id:'h5',  name:'Flower Crown',         emoji:'🌸',  price:35,  cat:'hair',        desc:'Princess vibes!' },
    { id:'h6',  name:'Unicorn Headband',     emoji:'🦄',  price:40,  cat:'hair',        desc:'Magical unicorn horn' },
    { id:'h7',  name:'Star Hair Clips',      emoji:'⭐',  price:18,  cat:'hair',        desc:'Shiny star set' },
    { id:'h8',  name:'Pearl Hair Pins',      emoji:'🫧',  price:30,  cat:'hair',        desc:'Elegant pearls' },
    { id:'h9',  name:'Candy Comb',           emoji:'🍭',  price:12,  cat:'hair',        desc:'Sweet and colorful' },
    { id:'h10', name:'Braid Ribbons',        emoji:'🎗️', price:22,  cat:'hair',        desc:'Mix color ribbons' },
    // Beauty
    { id:'b1',  name:'Glitter Eyelashes',    emoji:'👁️‍🗨️',price:15, cat:'beauty',      desc:'Sparkly & fun!' },
    { id:'b2',  name:'Pink Lip Gloss',       emoji:'💋',  price:20,  cat:'beauty',      desc:'Sweet strawberry flavor' },
    { id:'b3',  name:'Rainbow Nail Polish',  emoji:'💅',  price:18,  cat:'beauty',      desc:'6 fun colors' },
    { id:'b4',  name:'Face Glitter Stickers',emoji:'✨',  price:12,  cat:'beauty',      desc:'Stars & hearts' },
    { id:'b5',  name:'Rose Lip Balm',        emoji:'🌹',  price:10,  cat:'beauty',      desc:'Soft rose scent' },
    { id:'b6',  name:'Cute Blush Brush',     emoji:'🖌️', price:25,  cat:'beauty',      desc:'Pink fluffy brush' },
    { id:'b7',  name:'Perfume Bottle',       emoji:'🧴',  price:35,  cat:'beauty',      desc:'Flower fragrance' },
    { id:'b8',  name:'Makeup Kit (Kid-safe)',emoji:'🎨',  price:45,  cat:'beauty',      desc:'Safe for teens' },
    // Dresses
    { id:'d1',  name:'Pink Frilly Dress',    emoji:'👗',  price:50,  cat:'dresses',     desc:'So twirly!' },
    { id:'d2',  name:'Blue Denim Dress',     emoji:'👚',  price:45,  cat:'dresses',     desc:'Cool & casual' },
    { id:'d3',  name:'Floral Summer Dress',  emoji:'🌻',  price:55,  cat:'dresses',     desc:'Sunny vibes' },
    { id:'d4',  name:'Polka Dot Dress',      emoji:'⚪',  price:40,  cat:'dresses',     desc:'Classic cutie' },
    { id:'d5',  name:'Unicorn Print Dress',  emoji:'🦄',  price:60,  cat:'dresses',     desc:'Magical unicorn' },
    { id:'d6',  name:'Rainbow Striped Dress',emoji:'🌈',  price:50,  cat:'dresses',     desc:'Color explosion!' },
    { id:'d7',  name:'Cherry Print Skirt',   emoji:'🍒',  price:35,  cat:'dresses',     desc:'Sweet & chic' },
    { id:'d8',  name:'Star Tulle Skirt',     emoji:'⭐',  price:55,  cat:'dresses',     desc:'Twirls like magic' },
    { id:'d9',  name:'Heart Pattern Top',    emoji:'💕',  price:30,  cat:'dresses',     desc:'Love & hearts' },
    { id:'d10', name:'Butterfly Tee',        emoji:'🦋',  price:25,  cat:'dresses',     desc:'Fluttery fun' },
    // Nails & Sandals
    { id:'ns1', name:'Pink Sandals',         emoji:'👡',  price:40,  cat:'nailsandals', desc:'Sparkly straps' },
    { id:'ns2', name:'Flower Sandals',       emoji:'🌸',  price:45,  cat:'nailsandals', desc:'With cute flowers' },
    { id:'ns3', name:'Rainbow Sneakers',     emoji:'👟',  price:60,  cat:'nailsandals', desc:'Colorful kicks' },
    { id:'ns4', name:'Glitter Nail Stickers',emoji:'✨',  price:15,  cat:'nailsandals', desc:'Easy peel-off' },
    { id:'ns5', name:'Heart Slippers',       emoji:'💖',  price:35,  cat:'nailsandals', desc:'Cozy & cute' },
    { id:'ns6', name:'Nail Art Pen Set',     emoji:'🖊️', price:25,  cat:'nailsandals', desc:'Design your own' },
    { id:'ns7', name:'Butterfly Flip Flops', emoji:'🦋',  price:30,  cat:'nailsandals', desc:'Summer ready' },
    { id:'ns8', name:'Bow Tie Shoes',        emoji:'👠',  price:50,  cat:'nailsandals', desc:'Fancy flats' },
    // Glasses
    { id:'gl1', name:'Pink Cat Glasses',     emoji:'🐱',  price:30,  cat:'glasses',     desc:'Cute cat shape' },
    { id:'gl2', name:'Heart Sunglasses',     emoji:'💗',  price:35,  cat:'glasses',     desc:'Heart lenses!' },
    { id:'gl3', name:'Star Frame Glasses',   emoji:'⭐',  price:40,  cat:'glasses',     desc:'Star shaped' },
    { id:'gl4', name:'Rainbow Sunglasses',   emoji:'🌈',  price:35,  cat:'glasses',     desc:'Color pop' },
    { id:'gl5', name:'Butterfly Glasses',    emoji:'🦋',  price:38,  cat:'glasses',     desc:'Wings style' },
    { id:'gl6', name:'Round Blue Glasses',   emoji:'🔵',  price:28,  cat:'glasses',     desc:'Study time chic' },
    // Watches
    { id:'wt1', name:'Pink Digital Watch',   emoji:'⌚',  price:50,  cat:'watches',     desc:'With alarm!' },
    { id:'wt2', name:'Unicorn Watch',        emoji:'🦄',  price:60,  cat:'watches',     desc:'Glows in dark' },
    { id:'wt3', name:'Heart Strap Watch',    emoji:'💕',  price:45,  cat:'watches',     desc:'Sweet heart design' },
    { id:'wt4', name:'Star Watch',           emoji:'⭐',  price:55,  cat:'watches',     desc:'Sparkle dial' },
    { id:'wt5', name:'Rainbow Watch',        emoji:'🌈',  price:50,  cat:'watches',     desc:'Color changing' },
    { id:'wt6', name:'Flower Watch',         emoji:'🌸',  price:48,  cat:'watches',     desc:'Floral strap' },
    // Ornaments
    { id:'or1', name:'Pearl Hair Comb',      emoji:'💎',  price:35,  cat:'ornaments',   desc:'Royal style' },
    { id:'or2', name:'Crown Tiara',          emoji:'👑',  price:80,  cat:'ornaments',   desc:'Princess crown!' },
    { id:'or3', name:'Crystal Anklet',       emoji:'✨',  price:40,  cat:'ornaments',   desc:'Jingly anklet' },
    { id:'or4', name:'Silver Bangle Set',    emoji:'⚪',  price:45,  cat:'ornaments',   desc:'Set of 4' },
    { id:'or5', name:'Charm Bracelet',       emoji:'🎀',  price:30,  cat:'ornaments',   desc:'Cute charms' },
    { id:'or6', name:'Butterfly Brooch',     emoji:'🦋',  price:25,  cat:'ornaments',   desc:'Shiny butterfly' },
    { id:'or7', name:'Star Brooch',          emoji:'⭐',  price:25,  cat:'ornaments',   desc:'Glittery star' },
    { id:'or8', name:'Flower Hair Pin',      emoji:'🌸',  price:20,  cat:'ornaments',   desc:'Set of 6' },
    // Mobile Accessories
    { id:'mb1', name:'Pink Phone Case',      emoji:'📱',  price:30,  cat:'mobiles',     desc:'Super cute' },
    { id:'mb2', name:'Unicorn Phone Cover',  emoji:'🦄',  price:35,  cat:'mobiles',     desc:'Magical design' },
    { id:'mb3', name:'Heart Phone Charm',    emoji:'💖',  price:15,  cat:'mobiles',     desc:'Dangling charm' },
    { id:'mb4', name:'Glitter Pop Socket',   emoji:'✨',  price:20,  cat:'mobiles',     desc:'Holds phone easy' },
    { id:'mb5', name:'Rainbow Earphones',    emoji:'🎧',  price:50,  cat:'mobiles',     desc:'Colorful sound' },
    { id:'mb6', name:'Kitty Phone Stand',    emoji:'🐱',  price:25,  cat:'mobiles',     desc:'Cute cat stand' },
    { id:'mb7', name:'Flower Ring Holder',   emoji:'🌸',  price:18,  cat:'mobiles',     desc:'Flower grip' },
    { id:'mb8', name:'Star Phone Stickers',  emoji:'⭐',  price:10,  cat:'mobiles',     desc:'Pack of 50' },
    // Rings
    { id:'ri1', name:'Heart Ring',           emoji:'💖',  price:20,  cat:'rings',       desc:'Sweet heart shape' },
    { id:'ri2', name:'Star Ring',            emoji:'⭐',  price:22,  cat:'rings',       desc:'Sparkle star' },
    { id:'ri3', name:'Butterfly Ring',       emoji:'🦋',  price:25,  cat:'rings',       desc:'Fluttery design' },
    { id:'ri4', name:'Flower Ring',          emoji:'🌸',  price:20,  cat:'rings',       desc:'Pretty flower' },
    { id:'ri5', name:'Crystal Ring',         emoji:'💎',  price:35,  cat:'rings',       desc:'Shiny crystal' },
    { id:'ri6', name:'Cat Ring',             emoji:'🐱',  price:22,  cat:'rings',       desc:'Meow cute' },
    { id:'ri7', name:'Rainbow Ring Set',     emoji:'🌈',  price:40,  cat:'rings',       desc:'Set of 5' },
    { id:'ri8', name:'Crown Ring',           emoji:'👑',  price:30,  cat:'rings',       desc:'Mini crown' },
    // Earrings
    { id:'ea1', name:'Pearl Studs',          emoji:'⚪',  price:25,  cat:'earrings',    desc:'Classic pearls' },
    { id:'ea2', name:'Heart Earrings',       emoji:'💗',  price:22,  cat:'earrings',    desc:'Sweet hearts' },
    { id:'ea3', name:'Star Hoops',           emoji:'⭐',  price:30,  cat:'earrings',    desc:'Sparkly hoops' },
    { id:'ea4', name:'Butterfly Drops',      emoji:'🦋',  price:28,  cat:'earrings',    desc:'Flutter design' },
    { id:'ea5', name:'Flower Studs',         emoji:'🌼',  price:20,  cat:'earrings',    desc:'Tiny flowers' },
    { id:'ea6', name:'Moon Earrings',        emoji:'🌙',  price:26,  cat:'earrings',    desc:'Dreamy moon' },
    { id:'ea7', name:'Crystal Drops',        emoji:'💎',  price:35,  cat:'earrings',    desc:'Sparkle drop' },
    { id:'ea8', name:'Cherry Earrings',      emoji:'🍒',  price:22,  cat:'earrings',    desc:'Fun cherry' },
    // Necklaces
    { id:'nl1', name:'Heart Pendant',        emoji:'💖',  price:40,  cat:'necklaces',   desc:'Love heart' },
    { id:'nl2', name:'Star Necklace',        emoji:'⭐',  price:45,  cat:'necklaces',   desc:'Shining star' },
    { id:'nl3', name:'Pearl Chain',          emoji:'🫧',  price:50,  cat:'necklaces',   desc:'Elegant pearls' },
    { id:'nl4', name:'Crystal Pendant',      emoji:'💎',  price:55,  cat:'necklaces',   desc:'Big crystal' },
    { id:'nl5', name:'Butterfly Necklace',   emoji:'🦋',  price:42,  cat:'necklaces',   desc:'Flutter charm' },
    { id:'nl6', name:'Moon Necklace',        emoji:'🌙',  price:40,  cat:'necklaces',   desc:'Crescent moon' },
    { id:'nl7', name:'Charm Necklace',       emoji:'✨',  price:48,  cat:'necklaces',   desc:'Multiple charms' },
    { id:'nl8', name:'Flower Necklace',      emoji:'🌸',  price:38,  cat:'necklaces',   desc:'Pretty flower' },
    // Gowns
    { id:'gw1', name:'Pink Princess Gown',   emoji:'👸',  price:100, cat:'gowns',       desc:'Royal pink' },
    { id:'gw2', name:'Blue Fairy Gown',      emoji:'🧚',  price:110, cat:'gowns',       desc:'Sky blue magic' },
    { id:'gw3', name:'Purple Ball Gown',     emoji:'💜',  price:120, cat:'gowns',       desc:'Sparkly purple' },
    { id:'gw4', name:'Gold Star Gown',       emoji:'⭐',  price:150, cat:'gowns',       desc:'Shining gold' },
    { id:'gw5', name:'Rainbow Gown',         emoji:'🌈',  price:130, cat:'gowns',       desc:'All colors!' },
    { id:'gw6', name:'Rose Red Gown',        emoji:'🌹',  price:115, cat:'gowns',       desc:'Elegant red' },
    { id:'gw7', name:'Mint Fairy Gown',      emoji:'🌿',  price:105, cat:'gowns',       desc:'Fresh mint' },
    { id:'gw8', name:'Snow White Gown',      emoji:'❄️',  price:140, cat:'gowns',       desc:'Winter dream' },
    // Bags
    { id:'ba1', name:'Pink Backpack',        emoji:'🎒',  price:55,  cat:'bags',        desc:'School chic' },
    { id:'ba2', name:'Heart Purse',          emoji:'👛',  price:40,  cat:'bags',        desc:'Sweet heart' },
    { id:'ba3', name:'Unicorn Tote',         emoji:'🦄',  price:50,  cat:'bags',        desc:'Magic tote' },
    { id:'ba4', name:'Star Clutch',          emoji:'⭐',  price:35,  cat:'bags',        desc:'Party ready' },
    { id:'ba5', name:'Bunny Sling Bag',      emoji:'🐰',  price:45,  cat:'bags',        desc:'Cute bunny' },
    { id:'ba6', name:'Rainbow Handbag',      emoji:'🌈',  price:50,  cat:'bags',        desc:'Colorful bag' },
    // Soft Toys
    { id:'ty1', name:'Teddy Bear',           emoji:'🧸',  price:45,  cat:'toys',        desc:'Super cuddly' },
    { id:'ty2', name:'Pink Bunny',           emoji:'🐰',  price:40,  cat:'toys',        desc:'Soft bunny' },
    { id:'ty3', name:'Unicorn Plush',        emoji:'🦄',  price:55,  cat:'toys',        desc:'Magical plush' },
    { id:'ty4', name:'Kitty Cat',            emoji:'🐱',  price:42,  cat:'toys',        desc:'Meow friend' },
    { id:'ty5', name:'Panda Plush',          emoji:'🐼',  price:50,  cat:'toys',        desc:'Bamboo cutie' },
    { id:'ty6', name:'Puppy Dog',            emoji:'🐶',  price:45,  cat:'toys',        desc:'Woof woof!' },
    // Stationery
    { id:'st1', name:'Pink Pencil Box',      emoji:'✏️',  price:25,  cat:'stationery',  desc:'Study in style' },
    { id:'st2', name:'Unicorn Notebook',     emoji:'📓',  price:20,  cat:'stationery',  desc:'Write dreams' },
    { id:'st3', name:'Glitter Pens Set',     emoji:'🖊️', price:22,  cat:'stationery',  desc:'12 colors' },
    { id:'st4', name:'Cute Eraser Set',      emoji:'🧽',  price:10,  cat:'stationery',  desc:'Fun shapes' },
    { id:'st5', name:'Sticker Book',         emoji:'🌟',  price:18,  cat:'stationery',  desc:'500 stickers' },
    { id:'st6', name:'Rainbow Ruler',        emoji:'📏',  price:12,  cat:'stationery',  desc:'Pretty ruler' },
  ];

  /* ── Dressing-room outfit slots (shared across all dolls) ─ */
  const OUTFIT_SLOTS = [
    { key:'hair',    label:'Hair',      emoji:'💇‍♀️', cats:['hair','ornaments'] },
    { key:'eyes',    label:'Eyes',      emoji:'👁️',   cats:['beauty','glasses'] },
    { key:'dress',   label:'Dress',     emoji:'👗',   cats:['dresses','gowns'] },
    { key:'shoes',   label:'Shoes',     emoji:'👟',   cats:['nailsandals'] },
    { key:'bag',     label:'Bag',       emoji:'👜',   cats:['bags'] },
    { key:'jewelry', label:'Jewellery', emoji:'💍',   cats:['rings','earrings','necklaces','watches'] },
    { key:'phone',   label:'Phone',     emoji:'📱',   cats:['mobiles'] },
    { key:'toy',     label:'Toy',       emoji:'🧸',   cats:['toys','stationery'] },
  ];

  /* ── Earn rates (princess coins) ─────────────────────── */
  const PC = {
    daily_login:       3,
    topic_first_visit: 5,
    note_read:         1,
    chapter_complete:  6,
    tab_mindmap:       2,
    tab_cheatsheet:    2,
    tab_diagrams:      1,
    tab_oneword:       1,
    wordcard_flip:     1,
    bookmark_add:      1,
    mcq_daily_goal:    8,
    mastery_50:        10,
    mastery_100:       25,
    correct_answer:    1,
  };

  /* ── State ────────────────────────────────────────────── */
  const STORE_KEY = 'studyhub_princess';

  function defaultState() {
    return {
      coins: 10,
      wardrobe: [],           // array of item IDs owned
      outfits: {},            // { dollId: { slotKey: itemId } }
      favDoll: 'aria',
      totalEarned: 0,
      totalSpent: 0,
      lastLoginDate: null,
      earnLog: {},            // { YYYY-MM-DD: { actKey: count } }
      masteryLog: [],         // topicIds where mastery was rewarded
      visitLog: [],           // topicIds where first-visit was rewarded
    };
  }

  let state = defaultState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) state = Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) { /* use default */ }
  }
  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ── Date helpers ─────────────────────────────────────── */
  function todayKey() { return new Date().toISOString().slice(0, 10); }

  function canEarnToday(actKey, limit) {
    const d = todayKey();
    const log = state.earnLog[d] || {};
    return (log[actKey] || 0) < (limit || 1);
  }
  function markEarnedToday(actKey) {
    const d = todayKey();
    if (!state.earnLog[d]) state.earnLog[d] = {};
    state.earnLog[d][actKey] = (state.earnLog[d][actKey] || 0) + 1;
    // Trim old days
    const days = Object.keys(state.earnLog).sort();
    while (days.length > 14) { delete state.earnLog[days.shift()]; }
  }

  /* ── Earn coins ───────────────────────────────────────── */
  function earnCoins(amount, label) {
    if (!amount || amount <= 0) return;
    state.coins = (state.coins || 0) + amount;
    state.totalEarned = (state.totalEarned || 0) + amount;
    saveState();
    showFloatingCoins(amount);
    updateHUDCoins();
    if (label) showToast('✨ +' + amount + ' 💰 ' + label);
  }

  /* ── Activity earn (with daily dedup) ───────────────────── */
  function earnAct(actKey, coins, label, limit) {
    if (!canEarnToday(actKey, limit || 1)) return;
    markEarnedToday(actKey);
    earnCoins(coins, label);
  }

  /* ── Public hooks (called from app.js) ──────────────────── */
  function onDailyLogin() {
    const today = todayKey();
    if (state.lastLoginDate === today) return;
    state.lastLoginDate = today;
    saveState();
    earnCoins(PC.daily_login, '💰 Daily Login Bonus!');
  }

  function onTopicEnter(topicId) {
    if (!topicId) return;
    if ((state.visitLog || []).includes(topicId)) return;
    state.visitLog = [...(state.visitLog || []), topicId];
    saveState();
    earnCoins(PC.topic_first_visit, '🗺️ First Visit Bonus!');
  }

  function onNoteRead() {
    earnAct('note_read', PC.note_read, '📖 Note Read', 20);
  }
  function onNextNote() { onNoteRead(); }
  function onPrevNote() { onNoteRead(); }

  function onChapterComplete() {
    earnAct('chapter_complete', PC.chapter_complete, '🎉 Chapter Complete!');
  }

  function onTabSwitch(tab) {
    const key = 'tab_' + tab;
    if (PC[key]) earnAct(key, PC[key], '👆 Tab Explored', 3);
  }

  function onWordCardFlipped() {
    earnAct('wordcard_flip', PC.wordcard_flip, '🃏 Word Card!', 10);
  }

  function onBookmarkAdded() {
    earnAct('bookmark_add', PC.bookmark_add, '🔖 Bookmarked!', 5);
  }

  function onMcqRecorded(count) {
    if (count && count >= 5) earnAct('mcq_daily_goal', PC.mcq_daily_goal, '🎯 MCQ Goal!');
  }

  function onMasteryCheck(topicId) {
    // Only milestone rewards — lifetime
    if (!topicId) return;
    const log = state.masteryLog || [];
    if (!log.includes(topicId + '_100')) {
      // would need access to mastery %; leave to future enhancement
      // App.js can call princssOnMasteryMilestone(topicId, pct)
    }
  }

  function onMasteryMilestone(topicId, pct) {
    const log = state.masteryLog || [];
    if (pct >= 100 && !log.includes(topicId + '_100')) {
      state.masteryLog = [...log, topicId + '_100'];
      saveState();
      earnCoins(PC.mastery_100, '🏆 Full Mastery!');
    } else if (pct >= 50 && !log.includes(topicId + '_50')) {
      state.masteryLog = [...log, topicId + '_50'];
      saveState();
      earnCoins(PC.mastery_50, '⭐ 50% Mastery!');
    }
  }

  function onCorrectAnswer(qId) {
    earnAct('correct_' + (qId || 'q'), PC.correct_answer, '✅ Correct!', 999);
  }

  /* ── Buy item ─────────────────────────────────────────── */
  function buyItem(itemId) {
    const item = CATALOG.find(i => i.id === itemId);
    if (!item) return;
    if ((state.wardrobe || []).includes(itemId)) {
      showToast('Already in wardrobe! ✨');
      return;
    }
    if (state.coins < item.price) {
      showToast('Need ' + item.price + ' 💰 coins! Keep studying! 📚');
      return;
    }
    state.coins -= item.price;
    state.totalSpent = (state.totalSpent || 0) + item.price;
    state.wardrobe = [...(state.wardrobe || []), itemId];
    saveState();
    showPurchaseCelebration(item);
    updateHUDCoins();
    renderCurrentScreen();
  }

  /* ── Equip item to doll slot ──────────────────────────── */
  function equipItem(dollId, slotKey, itemId) {
    if (!state.outfits) state.outfits = {};
    if (!state.outfits[dollId]) state.outfits[dollId] = {};
    state.outfits[dollId][slotKey] = itemId;
    saveState();
    renderCurrentScreen();
  }

  /* ── UI State ─────────────────────────────────────────── */
  let currentScreen = 'home'; // home | dolls | mall | wardrobe
  let currentCat = 'all';
  let currentDollId = 'aria';
  let mallSearch = '';
  let slotPickerState = null; // { dollId, slotKey } — for picking item from wardrobe

  /* ── Root elements ────────────────────────────────────── */
  let overlay = null;

  /* ── Init ─────────────────────────────────────────────── */
  function init() {
    loadState();
    injectLaunchButton();
    checkDailyLogin();
  }

  function checkDailyLogin() {
    const today = todayKey();
    if (state.lastLoginDate !== today) onDailyLogin();
  }

  /* ── Launch button ────────────────────────────────────── */
  function injectLaunchButton() {
    if (document.getElementById('princess-launch')) return;
    const btn = document.createElement('button');
    btn.id = 'princess-launch';
    btn.className = 'princess-launch-btn';
    btn.innerHTML = '👸 Princess World <span class="pc-badge" id="pw-hud-coins">💰 ' + (state.coins || 0) + '</span>';
    btn.onclick = openWorld;
    // Try to add to header — look for common header patterns
    const header = document.querySelector('header') ||
                   document.querySelector('.top-bar') ||
                   document.querySelector('.header') ||
                   document.querySelector('nav') ||
                   document.body;
    header.appendChild(btn);
  }

  function updateHUDCoins() {
    const el = document.getElementById('pw-hud-coins');
    if (el) el.textContent = '💰 ' + (state.coins || 0);
  }

  /* ── Open / Close ─────────────────────────────────────── */
  function openWorld() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.className = 'princess-overlay';
    overlay.id = 'princess-overlay';
    overlay.innerHTML = buildOverlayHTML();
    document.body.appendChild(overlay);
    wireOverlayEvents();
    renderCurrentScreen();
    document.body.style.overflow = 'hidden';
  }

  function closeWorld() {
    if (overlay) { overlay.remove(); overlay = null; }
    document.body.style.overflow = '';
    updateHUDCoins();
  }

  /* ── Overlay HTML structure ───────────────────────────── */
  function buildOverlayHTML() {
    return `
      <div class="pw-header">
        <div class="pw-header-top">
          <div class="pw-title">
            <span style="font-size:1.6rem">👸</span>
            <div>
              <div class="pw-title-text">Princess World</div>
              <div class="pw-title-sub">Aaradhya's Magical Kingdom</div>
            </div>
          </div>
          <div class="pw-coins">
            <div class="pw-coin-badge" id="pw-coins-display">💰 ${state.coins}</div>
            <button class="pw-close-btn" id="pw-close">✕</button>
          </div>
        </div>
        <div class="pw-nav">
          <button class="pw-nav-btn active" data-screen="home">🏠 Home</button>
          <button class="pw-nav-btn" data-screen="dolls">👸 Princesses</button>
          <button class="pw-nav-btn" data-screen="mall">🛍️ Mall</button>
          <button class="pw-nav-btn" data-screen="wardrobe">👜 Wardrobe</button>
        </div>
      </div>
      <div class="pw-body" id="pw-body">
        <div class="pw-screen" id="pw-screen"></div>
      </div>
    `;
  }

  function wireOverlayEvents() {
    document.getElementById('pw-close').onclick = closeWorld;
    overlay.querySelectorAll('.pw-nav-btn').forEach(btn => {
      btn.onclick = () => {
        overlay.querySelectorAll('.pw-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentScreen = btn.dataset.screen;
        renderCurrentScreen();
      };
    });
  }

  function renderCurrentScreen() {
    const el = document.getElementById('pw-screen');
    if (!el) return;
    if      (currentScreen === 'home')     el.innerHTML = buildHomeScreen();
    else if (currentScreen === 'dolls')    el.innerHTML = buildDollsScreen();
    else if (currentScreen === 'mall')     el.innerHTML = buildMallScreen();
    else if (currentScreen === 'wardrobe') el.innerHTML = buildWardrobeScreen();
    wireScreenEvents();
    // Refresh coins display
    const coinsEl = document.getElementById('pw-coins-display');
    if (coinsEl) coinsEl.textContent = '💰 ' + state.coins;
  }

  /* ── HOME SCREEN ──────────────────────────────────────── */
  function buildHomeScreen() {
    const fav = DOLLS.find(d => d.id === (state.favDoll || 'aria')) || DOLLS[0];
    const wardrobeCount = (state.wardrobe || []).length;
    const dollsWithOutfit = DOLLS.filter(d => Object.keys((state.outfits || {})[d.id] || {}).length > 0).length;
    return `
      <div class="pw-welcome-banner" style="background:${fav.grad}">
        <div style="font-size:.85rem;opacity:.9;font-family:var(--font-ui);margin-bottom:4px">${fav.name} says:</div>
        <div style="font-size:1rem;font-weight:600;font-family:var(--font-ui);line-height:1.4">${fav.greeting}</div>
      </div>

      <div class="pw-stats-grid">
        <div class="pw-stat-card" style="background:linear-gradient(135deg,#ec4899,#db2777)">
          <div class="pw-stat-icon">💰</div>
          <div class="pw-stat-val">${state.coins}</div>
          <div class="pw-stat-label">Coins</div>
        </div>
        <div class="pw-stat-card" style="background:linear-gradient(135deg,#a855f7,#7c3aed)">
          <div class="pw-stat-icon">👜</div>
          <div class="pw-stat-val">${wardrobeCount}</div>
          <div class="pw-stat-label">Items Owned</div>
        </div>
        <div class="pw-stat-card" style="background:linear-gradient(135deg,#f59e0b,#d97706)">
          <div class="pw-stat-icon">👸</div>
          <div class="pw-stat-val">${dollsWithOutfit}</div>
          <div class="pw-stat-label">Dolls Dressed</div>
        </div>
        <div class="pw-stat-card" style="background:linear-gradient(135deg,#10b981,#059669)">
          <div class="pw-stat-icon">✨</div>
          <div class="pw-stat-val">${state.totalEarned || 0}</div>
          <div class="pw-stat-label">Total Earned</div>
        </div>
      </div>

      <div class="pw-quick-grid">
        <button class="pw-quick-btn" data-go="dolls" style="background:linear-gradient(135deg,#f472b6,#ec4899)">
          <span class="pw-quick-btn-icon">👸</span> Meet Princesses
        </button>
        <button class="pw-quick-btn" data-go="mall" style="background:linear-gradient(135deg,#a78bfa,#8b5cf6)">
          <span class="pw-quick-btn-icon">🛍️</span> Go Shopping
        </button>
        <button class="pw-quick-btn" data-go="wardrobe" style="background:linear-gradient(135deg,#fbbf24,#f59e0b)">
          <span class="pw-quick-btn-icon">👜</span> My Wardrobe
        </button>
        <button class="pw-quick-btn" data-go="dolls" style="background:linear-gradient(135deg,#34d399,#10b981)">
          <span class="pw-quick-btn-icon">💃</span> Dress Up!
        </button>
      </div>

      <div style="background:linear-gradient(135deg,rgba(253,242,248,.9),rgba(250,245,255,.9));border:1.5px solid #fbcfe8;border-radius:20px;padding:16px">
        <div class="pw-section-title" style="margin-bottom:10px">💰 How to Earn Princess Coins</div>
        ${buildEarnRules()}
      </div>
    `;
  }

  function buildEarnRules() {
    const rules = [
      { act:'📖 Read a Note (45s)',       coins:'+1',  limit:'up to 20/day' },
      { act:'✅ Answer Correctly',         coins:'+1',  limit:'unlimited' },
      { act:'🗺️ First Topic Visit',       coins:'+5',  limit:'per topic' },
      { act:'🎉 Complete Chapter',         coins:'+6',  limit:'once/day' },
      { act:'🧠 Open Mindmap',            coins:'+2',  limit:'3×/day' },
      { act:'📋 Open Cheatsheet',         coins:'+2',  limit:'3×/day' },
      { act:'🃏 Flip Word Card',          coins:'+1',  limit:'10/day' },
      { act:'🔖 Bookmark a Question',     coins:'+1',  limit:'5/day' },
      { act:'🎯 Complete 5 MCQs',         coins:'+8',  limit:'once/day' },
      { act:'⭐ 50% Mastery',             coins:'+10', limit:'per topic' },
      { act:'🏆 100% Mastery',            coins:'+25', limit:'per topic' },
      { act:'🌅 Daily Login',             coins:'+3',  limit:'once/day' },
    ];
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">` +
      rules.map(r => `
        <div style="display:flex;align-items:center;gap:8px;background:#fff;border-radius:12px;padding:8px 10px;border:1px solid #fce7f3">
          <div style="font-size:.78rem;flex:1;color:#374151;font-family:var(--font-ui)">${r.act}</div>
          <div style="font-weight:800;color:#ec4899;font-size:.85rem;white-space:nowrap;font-family:var(--font-ui)">${r.coins}</div>
        </div>
      `).join('') + `</div>`;
  }

  /* ── DOLLS SCREEN ─────────────────────────────────────── */
  function buildDollsScreen() {
    const doll = DOLLS.find(d => d.id === currentDollId) || DOLLS[0];
    const outfit = (state.outfits || {})[doll.id] || {};
    const isFav = state.favDoll === doll.id;

    const dollThumbsHTML = DOLLS.map(d => `
      <div class="pw-doll-thumb ${d.id === currentDollId ? 'selected' : ''}" data-doll="${d.id}"
           style="background:${d.grad}">
        <div class="pw-doll-thumb-emoji">${d.emoji}</div>
        <div class="pw-doll-thumb-name">${d.name.replace('Princess ','')}</div>
        <div class="pw-doll-thumb-fav">${state.favDoll === d.id ? '❤️' : '🤍'}</div>
      </div>
    `).join('');

    const equippedItems = Object.values(outfit)
      .map(id => CATALOG.find(i => i.id === id))
      .filter(Boolean);

    const dollFigureHTML = buildDollFigure(doll, equippedItems);

    const slotsHTML = OUTFIT_SLOTS.map(slot => {
      const equippedId = outfit[slot.key];
      const equippedItem = equippedId ? CATALOG.find(i => i.id === equippedId) : null;
      return `
        <div class="pw-outfit-slot ${equippedItem ? 'filled' : ''}" data-slot="${slot.key}" title="${slot.label}">
          <div class="pw-outfit-slot-icon">${equippedItem ? equippedItem.emoji : slot.emoji}</div>
          <div class="pw-outfit-slot-label">${slot.label}</div>
          ${equippedItem ? `<div class="pw-outfit-slot-name">${equippedItem.name}</div>` : ''}
        </div>
      `;
    }).join('');

    return `
      <div class="pw-doll-grid">${dollThumbsHTML}</div>

      <div class="pw-doll-stage" style="background:${doll.grad}">
        ${dollFigureHTML}
        <div class="pw-doll-info">
          <h3>${doll.name}</h3>
          <div class="pw-doll-loves">${doll.loves}</div>
          <div class="pw-doll-speech">"${doll.greeting}"</div>
          <div class="pw-doll-action-row">
            <button class="pw-doll-fav-btn" id="pw-fav-btn" data-doll="${doll.id}">
              ${isFav ? '❤️ Favourite!' : '🤍 Set as Fav'}
            </button>
            <button class="pw-dress-btn" id="pw-open-mall">🛍️ Shop for Her</button>
          </div>
        </div>
      </div>

      <div class="pw-dressing-room">
        <div class="pw-section-title">🪄 ${doll.name}'s Outfit</div>
        <div class="pw-outfit-slots">${slotsHTML}</div>
        ${Object.keys(outfit).length === 0 ? '<div style="text-align:center;color:#ec4899;font-size:.8rem;margin-top:8px;font-family:var(--font-ui)">Buy items from the Mall and tap a slot to equip! 💕</div>' : ''}
      </div>
    `;
  }

  function buildDollFigure(doll, equippedItems) {
    const equippedEmojis = equippedItems.slice(0, 4).map(i => i.emoji).join(' ');
    return `
      <div class="pw-doll-figure">
        <div class="pw-doll-hair" style="background:${doll.hairColor}"></div>
        <div class="pw-doll-crown">${doll.crownEmoji}</div>
        <div class="pw-doll-face">
          <div class="pw-doll-eye left"><div class="pw-doll-eye-shine"></div></div>
          <div class="pw-doll-eye right"><div class="pw-doll-eye-shine"></div></div>
          <div class="pw-doll-blush left"></div>
          <div class="pw-doll-blush right"></div>
          <div class="pw-doll-smile"></div>
        </div>
        <div class="pw-doll-body" style="background:${doll.bodyColor}">
          <div class="pw-doll-arm"></div>
          ${equippedEmojis ? `<div class="pw-doll-equipped-items">${equippedEmojis}</div>` : ''}
        </div>
      </div>
    `;
  }

  /* ── MALL SCREEN ──────────────────────────────────────── */
  function buildMallScreen() {
    let items = CATALOG;
    if (currentCat !== 'all') items = items.filter(i => i.cat === currentCat);
    if (mallSearch.trim()) {
      const q = mallSearch.toLowerCase();
      items = items.filter(i => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q));
    }

    const catChips = CATEGORIES.map(c => `
      <button class="pw-cat-chip ${c.id === currentCat ? 'active' : ''}" data-cat="${c.id}">
        ${c.emoji} ${c.name}
      </button>
    `).join('');

    const itemCards = items.map(item => {
      const owned = (state.wardrobe || []).includes(item.id);
      const canAfford = state.coins >= item.price;
      return `
        <div class="pw-item-card ${owned ? 'owned' : canAfford ? '' : 'cant-afford'}">
          <div class="pw-item-icon">${item.emoji}</div>
          <div class="pw-item-name">${item.name}</div>
          <div class="pw-item-desc">${item.desc}</div>
          <div class="pw-item-price">💰 ${item.price}</div>
          ${owned
            ? `<button class="pw-buy-btn owned-btn">✅ Owned</button>`
            : canAfford
              ? `<button class="pw-buy-btn can" data-buy="${item.id}">Buy Now 💕</button>`
              : `<button class="pw-buy-btn cant" disabled>Need 💰${item.price}</button>`
          }
        </div>
      `;
    }).join('');

    return `
      <div class="pw-mall-banner">
        <div style="font-size:1.2rem;font-weight:800;font-family:var(--font-display)">🛍️ Princess Mall</div>
        <div style="font-size:.82rem;opacity:.9;font-family:var(--font-ui);margin-top:2px">
          ${CATALOG.length}+ amazing items • You have 💰${state.coins} coins
        </div>
      </div>

      <input class="pw-mall-search" id="pw-mall-search" type="text"
             placeholder="🔍 Search items... (dresses, pink, unicorn...)"
             value="${mallSearch}">

      <div class="pw-cat-row">${catChips}</div>

      ${items.length === 0
        ? `<div style="text-align:center;padding:40px;color:#be185d;font-family:var(--font-ui)">
             <div style="font-size:3rem">🔍</div>
             <div style="font-weight:700;margin-top:8px">No items found!</div>
             <div style="font-size:.82rem;opacity:.75;margin-top:4px">Try a different search or category</div>
           </div>`
        : `<div class="pw-items-grid">${itemCards}</div>`
      }
    `;
  }

  /* ── WARDROBE SCREEN ──────────────────────────────────── */
  function buildWardrobeScreen() {
    const owned = (state.wardrobe || []).map(id => CATALOG.find(i => i.id === id)).filter(Boolean);

    if (owned.length === 0) {
      return `
        <div class="pw-wardrobe-banner">
          <div style="font-size:1.1rem;font-weight:800;font-family:var(--font-display)">👜 My Wardrobe</div>
          <div style="font-size:.82rem;opacity:.9;font-family:var(--font-ui)">Your princess collection</div>
        </div>
        <div class="pw-empty-wardrobe">
          <div class="pw-empty-wardrobe-icon">🛍️</div>
          <div class="pw-empty-wardrobe-title">Your wardrobe is empty!</div>
          <div class="pw-empty-wardrobe-sub">Study hard, earn coins, and go shopping in the Mall 💕</div>
          <button style="margin-top:16px;background:linear-gradient(135deg,#ec4899,#a855f7);color:#fff;border:none;border-radius:16px;padding:10px 24px;font-weight:700;font-family:var(--font-ui);cursor:pointer;font-size:.88rem" data-go="mall">
            🛍️ Go Shopping!
          </button>
        </div>
      `;
    }

    // Group by category
    const groups = {};
    owned.forEach(item => {
      if (!groups[item.cat]) groups[item.cat] = [];
      groups[item.cat].push(item);
    });

    const groupsHTML = Object.entries(groups).map(([catId, items]) => {
      const catInfo = CATEGORIES.find(c => c.id === catId) || { emoji: '✨', name: catId };
      const itemsHTML = items.map(item => `
        <div class="pw-wardrobe-item">
          <div class="pw-wardrobe-item-icon">${item.emoji}</div>
          <div class="pw-wardrobe-item-name">${item.name}</div>
        </div>
      `).join('');
      return `
        <div class="pw-wardrobe-cat">
          <div class="pw-wardrobe-cat-title">${catInfo.emoji} ${catInfo.name} (${items.length})</div>
          <div class="pw-wardrobe-items">${itemsHTML}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="pw-wardrobe-banner">
        <div style="font-size:1.1rem;font-weight:800;font-family:var(--font-display)">👜 My Wardrobe</div>
        <div style="font-size:.82rem;opacity:.9;font-family:var(--font-ui)">${owned.length} items collected 💕</div>
      </div>
      ${groupsHTML}
    `;
  }

  /* ── Wire events in rendered screens ────────────────────── */
  function wireScreenEvents() {
    if (!overlay) return;
    const body = document.getElementById('pw-body');
    if (!body) return;

    // Doll thumbnails
    body.querySelectorAll('[data-doll]').forEach(el => {
      el.onclick = () => { currentDollId = el.dataset.doll; renderCurrentScreen(); };
    });

    // Fav button
    const favBtn = document.getElementById('pw-fav-btn');
    if (favBtn) {
      favBtn.onclick = () => {
        state.favDoll = favBtn.dataset.doll;
        saveState();
        renderCurrentScreen();
      };
    }

    // Shop for her button
    const mallBtn = document.getElementById('pw-open-mall');
    if (mallBtn) {
      mallBtn.onclick = () => {
        currentScreen = 'mall';
        overlay.querySelectorAll('.pw-nav-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.screen === 'mall');
        });
        renderCurrentScreen();
      };
    }

    // Outfit slots (pick from wardrobe for that slot)
    body.querySelectorAll('[data-slot]').forEach(el => {
      el.onclick = () => {
        const slotKey = el.dataset.slot;
        const slot = OUTFIT_SLOTS.find(s => s.key === slotKey);
        if (!slot) return;
        openSlotPicker(slot);
      };
    });

    // Category chips
    body.querySelectorAll('[data-cat]').forEach(el => {
      el.onclick = () => { currentCat = el.dataset.cat; renderCurrentScreen(); };
    });

    // Buy buttons
    body.querySelectorAll('[data-buy]').forEach(el => {
      el.onclick = () => buyItem(el.dataset.buy);
    });

    // Search
    const search = document.getElementById('pw-mall-search');
    if (search) {
      search.oninput = (e) => { mallSearch = e.target.value; renderCurrentScreen(); };
    }

    // Quick nav buttons
    body.querySelectorAll('[data-go]').forEach(el => {
      el.onclick = () => {
        currentScreen = el.dataset.go;
        overlay.querySelectorAll('.pw-nav-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.screen === currentScreen);
        });
        renderCurrentScreen();
      };
    });
  }

  /* ── Slot picker ──────────────────────────────────────── */
  function openSlotPicker(slot) {
    const doll = DOLLS.find(d => d.id === currentDollId) || DOLLS[0];
    // Filter wardrobe items valid for this slot
    const ownedIds = state.wardrobe || [];
    const validItems = CATALOG.filter(i =>
      ownedIds.includes(i.id) && slot.cats.includes(i.cat)
    );

    const existing = document.getElementById('pw-slot-picker-modal');
    if (existing) existing.remove();

    if (validItems.length === 0) {
      showToast('No items for ' + slot.label + ' yet! Shop in the Mall 🛍️');
      return;
    }

    const modal = document.createElement('div');
    modal.id = 'pw-slot-picker-modal';
    modal.style.cssText = 'position:fixed;inset:0;z-index:2000;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:20px';
    modal.innerHTML = `
      <div style="background:#fff;border-radius:24px;padding:20px;max-width:380px;width:100%;max-height:70vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.25)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <div style="font-weight:800;color:#be185d;font-size:1rem;font-family:var(--font-ui)">
            Choose ${slot.emoji} ${slot.label} for ${doll.name}
          </div>
          <button id="pw-picker-close" style="background:#fce7f3;border:none;border-radius:8px;width:28px;height:28px;cursor:pointer;color:#be185d;font-size:.85rem">✕</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
          ${validItems.map(item => `
            <div class="pw-wardrobe-item" data-equip="${item.id}" style="cursor:pointer;border:2px solid #fbcfe8;border-radius:14px;padding:10px;text-align:center;transition:border-color .2s">
              <div style="font-size:2rem">${item.emoji}</div>
              <div style="font-size:.65rem;font-weight:600;color:#7c3aed;margin-top:4px;font-family:var(--font-ui);line-height:1.2">${item.name}</div>
            </div>
          `).join('')}
        </div>
        <button id="pw-picker-remove" style="margin-top:14px;width:100%;padding:8px;border:1.5px solid #fbcfe8;background:#fdf2f8;border-radius:12px;color:#be185d;font-weight:600;font-size:.82rem;cursor:pointer;font-family:var(--font-ui)">
          🗑️ Remove from slot
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('pw-picker-close').onclick = () => modal.remove();
    document.getElementById('pw-picker-remove').onclick = () => {
      const outfit = state.outfits || {};
      if (outfit[currentDollId]) delete outfit[currentDollId][slot.key];
      state.outfits = outfit;
      saveState();
      modal.remove();
      renderCurrentScreen();
    };
    modal.querySelectorAll('[data-equip]').forEach(el => {
      el.onclick = () => {
        equipItem(currentDollId, slot.key, el.dataset.equip);
        modal.remove();
        showToast('✨ Outfit updated for ' + doll.name + '!');
      };
    });
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  }

  /* ── Floating coins animation ────────────────────────── */
  function showFloatingCoins(amount) {
    const el = document.createElement('div');
    el.className = 'pw-coin-float';
    el.textContent = '+' + amount + ' 💰';
    const x = Math.random() * (window.innerWidth - 120) + 60;
    const y = window.innerHeight * 0.5;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }

  /* ── Purchase celebration ────────────────────────────── */
  function showPurchaseCelebration(item) {
    const el = document.createElement('div');
    el.className = 'pw-celebrate';
    el.innerHTML = `
      <div class="pw-celebrate-card">
        <span class="pw-celebrate-emoji">${item.emoji}</span>
        <div class="pw-celebrate-title">Yay! New Item! 💕</div>
        <div class="pw-celebrate-sub">${item.name} added to your wardrobe!</div>
        <button id="pw-cel-close" style="margin-top:14px;background:linear-gradient(135deg,#ec4899,#a855f7);color:#fff;border:none;border-radius:14px;padding:8px 24px;font-weight:700;font-family:var(--font-ui);cursor:pointer">
          💕 Yayyy!
        </button>
      </div>
    `;
    // Confetti dots
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement('div');
      dot.style.cssText = `position:fixed;width:8px;height:8px;border-radius:50%;
        background:${['#ec4899','#a855f7','#fbbf24','#34d399','#60a5fa'][i%5]};
        left:${Math.random()*100}%;top:${Math.random()*100}%;
        pointer-events:none;z-index:2001;
        animation:pw-coin-rise ${0.8+Math.random()*0.8}s ease-out forwards;
        animation-delay:${Math.random()*0.4}s`;
      el.appendChild(dot);
    }
    document.body.appendChild(el);
    document.getElementById('pw-cel-close').onclick = () => el.remove();
    setTimeout(() => el.remove(), 4000);
  }

  /* ── Toast ────────────────────────────────────────────── */
  let toastTimer;
  function showToast(msg) {
    let t = document.getElementById('pw-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'pw-toast';
      t.style.cssText = `position:fixed;bottom:90px;left:50%;transform:translateX(-50%);
        background:linear-gradient(135deg,#be185d,#7c3aed);color:#fff;
        border-radius:20px;padding:10px 20px;font-size:.85rem;font-weight:700;
        font-family:var(--font-ui);z-index:3000;pointer-events:none;
        box-shadow:0 4px 20px rgba(190,24,93,.3);max-width:90vw;text-align:center;
        white-space:nowrap;opacity:0;transition:opacity .3s`;
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.style.opacity = '0'; }, 2500);
  }

  /* ── Public API ───────────────────────────────────────── */
  window.princessOpen            = openWorld;
  window.princessClose           = closeWorld;
  window.princessEarnCoins       = earnCoins;
  window.princessOnDailyLogin    = onDailyLogin;
  window.princessOnTopicEnter    = onTopicEnter;
  window.princessOnNoteRead      = onNoteRead;
  window.princessOnNextNote      = onNextNote;
  window.princessOnPrevNote      = onPrevNote;
  window.princessOnTabSwitch     = onTabSwitch;
  window.princessOnWordCardFlipped = onWordCardFlipped;
  window.princessOnBookmarkAdded = onBookmarkAdded;
  window.princessOnMcqRecorded   = onMcqRecorded;
  window.princessOnMasteryMilestone = onMasteryMilestone;
  window.princessOnCorrectAnswer = onCorrectAnswer;
  window.princessGetState        = () => state;

  /* ── Boot ─────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
