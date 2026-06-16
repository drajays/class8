// ============================================================
// SNOWY PET SYSTEM 🐾
// Aaradhya's companion — earns tokens by solving questions,
// spends them caring for Snowy the white puppy.
// ============================================================

(function () {
  'use strict';

  // ── CATALOG ──────────────────────────────────────────────
  const CATALOG = {
    food: [
      { id: 'kibble',       name: 'Premium Kibble',    emoji: '🥣', cost: 10,  desc: 'Nutritious daily meal' },
      { id: 'salmon_treat', name: 'Salmon Treat',      emoji: '🐟', cost: 20,  desc: "Snowy's favourite!" },
      { id: 'milk_bone',    name: 'Milk Bone',         emoji: '🦴', cost: 15,  desc: 'Classic crunchy bone' },
      { id: 'cupcake',      name: 'Puppy Cupcake',     emoji: '🧁', cost: 35,  desc: 'A very special treat' },
      { id: 'royal_canin',  name: 'Royal Canin',       emoji: '👑', cost: 40,  desc: 'Premium breed food' },
      { id: 'apple_slice',  name: 'Apple Slices',      emoji: '🍎', cost: 12,  desc: 'Healthy fruity snack' },
      { id: 'cheese_bit',   name: 'Cheese Bits',       emoji: '🧀', cost: 18,  desc: 'Soft and yummy chunks' },
      { id: 'carrot',       name: 'Baby Carrots',      emoji: '🥕', cost: 8,   desc: 'Good for her teeth!' },
    ],
    clothing: [
      { id: 'pink_bow',     name: 'Pink Bow',          emoji: '🎀', cost: 25,  desc: 'A cute pink hairbow' },
      { id: 'raincoat',     name: 'Yellow Raincoat',   emoji: '🧥', cost: 45,  desc: 'Stay dry in style' },
      { id: 'sweater',      name: 'Cozy Sweater',      emoji: '🧶', cost: 40,  desc: 'Warm winter knit' },
      { id: 'sunglasses',   name: 'Cool Sunglasses',   emoji: '🕶️', cost: 30,  desc: 'Look fabulous!' },
      { id: 'birthday_hat', name: 'Birthday Hat',      emoji: '🎂', cost: 20,  desc: 'Party time!' },
      { id: 'bandana',      name: 'Flower Bandana',    emoji: '🌸', cost: 22,  desc: 'Boho chic vibes' },
      { id: 'tiara',        name: 'Sparkle Tiara',     emoji: '👸', cost: 55,  desc: 'For a princess pup' },
      { id: 'boots',        name: 'Mini Boots',        emoji: '👢', cost: 38,  desc: 'Paw protection!' },
    ],
    luxury: [
      { id: 'diamond_collar', name: 'Diamond Collar',  emoji: '💎', cost: 120, desc: 'Ultimate luxury collar' },
      { id: 'spa_day',       name: 'Spa Day',          emoji: '🛁', cost: 80,  desc: 'Full grooming session' },
      { id: 'velvet_bed',    name: 'Velvet Dog Bed',   emoji: '🛏️', cost: 100, desc: 'Cloud-soft sleeping' },
      { id: 'toy_castle',    name: 'Toy Castle',       emoji: '🏰', cost: 150, desc: "Snowy's dream palace" },
      { id: 'gold_bowl',     name: 'Gold Food Bowl',   emoji: '🏆', cost: 90,  desc: 'Eat like royalty' },
      { id: 'perfume',       name: 'Doggy Perfume',    emoji: '🌹', cost: 75,  desc: 'Smell divine always' },
      { id: 'pool',          name: 'Splash Pool',      emoji: '🏊', cost: 110, desc: 'Summer fun outdoors' },
      { id: 'limo_ride',     name: 'Limo Ride',        emoji: '🚗', cost: 130, desc: 'Ride in style, queen' },
    ],
  };

  // Flat lookup map
  const ITEM_MAP = {};
  Object.values(CATALOG).forEach(cat => cat.forEach(i => { ITEM_MAP[i.id] = i; }));

  // ── CONSTANTS ─────────────────────────────────────────────
  const LS_KEY         = 'studyhub_snowy';
  // Question earning (per correct answer)
  const TOKEN_FIRST    = 2;   // correct on first try
  const TOKEN_RETRY    = 1;   // correct after a wrong attempt
  const TOKEN_STREAK   = 2;   // bonus added every 3 in-a-row
  const TOKEN_HARD     = 3;   // numerical / diagram MCQ (replaces FIRST)
  const TOKEN_QUIZ_ACE = 5;   // perfect quiz bonus (≥3 Qs)

  // Consistency streak rewards (consecutive calendar days)
  const STREAK_REWARDS = [
    { days: 2,  tokens: 5,  label: '2-Day Streak!'   },
    { days: 3,  tokens: 8,  label: '3-Day Streak! 🔥' },
    { days: 5,  tokens: 12, label: '5-Day Streak! 🔥🔥' },
    { days: 7,  tokens: 20, label: '1-Week Streak! 🌟' },
    { days: 14, tokens: 35, label: '2-Week Legend! 🏆' },
    { days: 30, tokens: 75, label: '1-Month Champion! 👑' },
  ];

  const MOOD_STATES = [
    { key: 'sad',      label: '😢 Sad',      emoji: '😢', min: 0  },
    { key: 'meh',      label: '😐 Meh',      emoji: '😐', min: 25 },
    { key: 'content',  label: '🙂 Content',  emoji: '🙂', min: 50 },
    { key: 'happy',    label: '😊 Happy',    emoji: '😊', min: 70 },
    { key: 'overjoyed',label: '🥰 Overjoyed',emoji: '🥰', min: 90 },
  ];

  const DEMAND_MESSAGES = [
    "I'm hungry, Aaradhya!",
    "Can I have this please? 🥺",
    "Pretty please? With kibble on top?",
    "I've been such a good girl!",
    "This would make me SO happy!",
    "Woof! I really want this today!",
  ];

  // ── STATE ─────────────────────────────────────────────────
  let state = loadState();
  let shopTab = 'food';

  function defaultState() {
    return {
      tokens:       5,          // start with just enough for one cheap treat
      inventory:    [],
      demand:       null,       // { itemId, expiresAt, met }
      happiness:    50,
      lastFedAt:    null,
      totalEarned:  0,
      totalSpent:   0,
      // Question streak (within a session)
      qStreak:      0,
      lastSolvedAt: null,
      // Login / consistency streak
      loginStreak:  0,
      lastLoginDate: null,      // 'YYYY-MM-DD'
      loginStreakRewarded: [],  // streak day counts already rewarded
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) {}
    return defaultState();
  }

  function saveState() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }

  // ── HAPPINESS ENGINE ──────────────────────────────────────
  function calcHappiness() {
    let h = 40; // base

    // Demand met today?
    if (state.demand && state.demand.met) h += 45;
    else if (!state.demand) h += 10; // no pending demand

    // Fed recently?
    if (state.lastFedAt) {
      const msAgo = Date.now() - new Date(state.lastFedAt).getTime();
      const hoursAgo = msAgo / 3600000;
      if (hoursAgo < 6)  h += 15;
      else if (hoursAgo < 24) h += 8;
    }

    // Owned luxury items boost baseline
    const luxuryOwned = (state.inventory || []).filter(id => CATALOG.luxury.find(i => i.id === id)).length;
    h += Math.min(luxuryOwned * 5, 15);

    return Math.max(0, Math.min(100, h));
  }

  function getMood(h) {
    let mood = MOOD_STATES[0];
    MOOD_STATES.forEach(m => { if (h >= m.min) mood = m; });
    return mood;
  }

  function happinessBarClass(h) {
    if (h < 25) return 'h-low';
    if (h < 50) return 'h-meh';
    if (h < 70) return 'h-good';
    if (h < 90) return 'h-great';
    return 'h-max';
  }

  // ── DAILY DEMAND ENGINE ───────────────────────────────────
  function todayKey() {
    return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  }

  function refreshDemand() {
    const today = todayKey();
    // Demand already set and valid for today
    if (state.demand && state.demand.expiresAt === today) return;

    // Only items costing ≤ 35 tokens can be demanded
    // (ensures 20 min study is enough to fulfil a demand)
    const MAX_DEMAND_COST = 35;
    const allItems = [
      ...CATALOG.food,
      ...CATALOG.food,      // food weighted 2×
      ...CATALOG.clothing,
    ].filter(i => i.cost <= MAX_DEMAND_COST);

    const pick = allItems[Math.floor(Math.random() * allItems.length)];
    state.demand = {
      itemId:    pick.id,
      expiresAt: today,
      met:       false,
      message:   DEMAND_MESSAGES[Math.floor(Math.random() * DEMAND_MESSAGES.length)],
    };
    saveState();
  }

  // ── TOKEN ENGINE ──────────────────────────────────────────
  /**
   * Called from app.js recordAttempt hook.
   * meta: { wasWrongBefore, questionType }
   */
  function earnTokens(qId, isCorrect, meta) {
    if (isCorrect !== true) return;
    meta = meta || {};

    let earned = 0;
    const isFirstTry = !meta.wasWrongBefore;
    const isHard = meta.questionType === 'numerical' || meta.questionType === 'diagram_mcq';

    if (isHard) {
      earned = TOKEN_HARD;
    } else if (isFirstTry) {
      earned = TOKEN_FIRST;
    } else {
      earned = TOKEN_RETRY;
    }

    // In-session question streak (resets if >10 min gap between answers)
    const now = Date.now();
    const lastMs = state.lastSolvedAt ? new Date(state.lastSolvedAt).getTime() : 0;
    state.qStreak = (lastMs && (now - lastMs) < 600000)
      ? (state.qStreak || 0) + 1
      : 1;
    state.lastSolvedAt = new Date().toISOString();

    if (state.qStreak > 0 && state.qStreak % 3 === 0) {
      earned += TOKEN_STREAK;
      // Show streak milestone toast
      showToastMsg('🔥 ' + state.qStreak + '-answer streak! +' + TOKEN_STREAK + ' bonus 🪙');
    }

    if (earned > 0) {
      state.tokens = (state.tokens || 0) + earned;
      state.totalEarned = (state.totalEarned || 0) + earned;
      saveState();
      showFloatingTokens(earned);
      updateHUD();
    }
  }

  /** Called from quiz score rendering when all answers correct */
  function earnPerfectBonus(total) {
    if (total < 3) return; // minimum 3 questions to count
    state.tokens = (state.tokens || 0) + TOKEN_QUIZ_ACE;
    state.totalEarned = (state.totalEarned || 0) + TOKEN_QUIZ_ACE;
    saveState();
    showFloatingTokens(TOKEN_QUIZ_ACE, true);
    updateHUD();
  }

  // ── PURCHASE LOGIC ────────────────────────────────────────
  function buyItem(itemId) {
    const item = ITEM_MAP[itemId];
    if (!item) return;

    const owned = (state.inventory || []).includes(itemId);
    if (owned) {
      showToastMsg('You already own ' + item.name + '! 🐾');
      return;
    }

    if ((state.tokens || 0) < item.cost) {
      showToastMsg('Not enough tokens! Need ' + item.cost + ' 🪙 — keep solving questions!');
      return;
    }

    // Deduct & add to inventory
    state.tokens -= item.cost;
    state.totalSpent = (state.totalSpent || 0) + item.cost;
    state.inventory = [...(state.inventory || []), itemId];
    state.lastFedAt = new Date().toISOString();

    // Check if this fulfils today's demand
    let demandMet = false;
    if (state.demand && !state.demand.met && state.demand.itemId === itemId) {
      state.demand.met = true;
      demandMet = true;
    }

    state.happiness = calcHappiness();
    saveState();
    renderShopPanel();
    updateHUD();

    if (demandMet) {
      showCelebration(item);
    } else {
      showToastMsg(item.emoji + ' Bought ' + item.name + ' for Snowy!');
    }
  }

  // ── HUD ───────────────────────────────────────────────────
  function updateHUD() {
    state.happiness = calcHappiness();
    const h = state.happiness;
    const mood = getMood(h);

    const card = document.getElementById('snowy-hud-card');
    if (!card) return;

    // Avatar mood class
    const avatar = card.querySelector('.snowy-hud-avatar');
    if (avatar) {
      avatar.className = 'snowy-hud-avatar mood-' + mood.key;
    }

    // Token count
    const tokenEl = card.querySelector('.snowy-hud-token-val');
    if (tokenEl) tokenEl.textContent = state.tokens;

    // Mood chip
    const moodEl = card.querySelector('.snowy-mood-chip');
    if (moodEl) moodEl.textContent = mood.label;

    // Happiness bar
    const bar = card.querySelector('.snowy-happiness-bar');
    if (bar) {
      bar.style.width = h + '%';
      bar.className = 'snowy-happiness-bar ' + happinessBarClass(h);
    }

    // Demand badge
    const badge = document.getElementById('snowy-demand-badge');
    if (badge) {
      if (state.demand && !state.demand.met) {
        const demItem = ITEM_MAP[state.demand.itemId];
        badge.hidden = false;
        badge.innerHTML = demItem
          ? demItem.emoji + ' Snowy wants ' + demItem.name + '!'
          : '🐾 Snowy has a request!';
      } else {
        badge.hidden = true;
      }
    }
  }

  function renderHUD() {
    // Create the HUD container if it doesn't exist yet
    let root = document.getElementById('snowy-hud');
    if (!root) {
      root = document.createElement('div');
      root.id = 'snowy-hud';
      root.setAttribute('aria-label', 'Snowy pet widget');
      // Inline fallback styles guarantee visibility even if snowy.css fails to load
      root.style.cssText = 'position:fixed;bottom:24px;right:20px;z-index:9000;display:flex;flex-direction:column;align-items:flex-end;gap:8px;pointer-events:none;';
      document.body.appendChild(root);
    }

    state.happiness = calcHappiness();
    const h = state.happiness;
    const mood = getMood(h);

    root.innerHTML = `
      <div class="snowy-demand-badge" id="snowy-demand-badge" onclick="snowyOpenShop()" hidden>
      </div>
      <div class="snowy-hud-card" id="snowy-hud-card" onclick="snowyOpenShop()" title="Visit Snowy's Shop">
        <img class="snowy-hud-avatar mood-${mood.key}"
             src="images/snowy.jpg"
             alt="Snowy"
             onerror="this.style.fontSize='2rem';this.style.lineHeight='52px';this.style.textAlign='center';this.outerHTML='<div class=\\'snowy-hud-avatar mood-${mood.key}\\' style=\\'display:flex;align-items:center;justify-content:center;font-size:2rem;\\'>🐕</div>'">
        <div class="snowy-hud-info">
          <div class="snowy-hud-name">
            Snowy
            <span class="snowy-mood-chip">${mood.label}</span>
          </div>
          <div class="snowy-happiness-bar-wrap">
            <div class="snowy-happiness-bar ${happinessBarClass(h)}" style="width:${h}%"></div>
          </div>
          <div class="snowy-tokens-row">
            <span class="snowy-token-icon">🪙</span>
            <span class="snowy-hud-token-val">${state.tokens}</span>
            <span style="font-weight:400;color:var(--ink-3)">tokens</span>
          </div>
        </div>
      </div>`;

    updateHUD();
  }

  // ── SHOP MODAL ────────────────────────────────────────────
  function openShop() {
    if (document.getElementById('snowy-modal-overlay')) return;

    refreshDemand();
    state.happiness = calcHappiness();

    const overlay = document.createElement('div');
    overlay.className = 'snowy-modal-overlay';
    overlay.id = 'snowy-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', "Snowy's Shop");

    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeShop();
    });

    overlay.innerHTML = buildModalHTML();
    document.body.appendChild(overlay);

    // Keyboard close
    document._snowyEscHandler = e => { if (e.key === 'Escape') closeShop(); };
    document.addEventListener('keydown', document._snowyEscHandler);
  }

  function closeShop() {
    const overlay = document.getElementById('snowy-modal-overlay');
    if (overlay) overlay.remove();
    if (document._snowyEscHandler) {
      document.removeEventListener('keydown', document._snowyEscHandler);
      delete document._snowyEscHandler;
    }
  }

  function buildModalHTML() {
    const h = state.happiness;
    const mood = getMood(h);
    const demanded = state.demand && !state.demand.met ? ITEM_MAP[state.demand.itemId] : null;

    const demandBubble = state.demand && !state.demand.met && demanded
      ? `<div class="snowy-demand-bubble">
           <strong>${state.demand.message}</strong>
           <div class="snowy-demand-item-chip">${demanded.emoji} ${demanded.name} — ${demanded.cost} 🪙</div>
         </div>`
      : state.demand && state.demand.met
      ? `<div class="snowy-demand-met">✅ Thank you Aaradhya! I love you! 🥰</div>`
      : `<div class="snowy-demand-bubble"><strong>I'm happy today!</strong><br>No special request for now 🐾</div>`;

    const invItems = (state.inventory || []);
    const invHTML = invItems.length
      ? invItems.map(id => {
          const it = ITEM_MAP[id];
          return it ? `<span class="snowy-inv-chip">${it.emoji} ${it.name}</span>` : '';
        }).join('')
      : '<span class="snowy-inv-empty">Nothing yet — visit the shop!</span>';

    return `
      <div class="snowy-modal">
        <div class="snowy-modal-header">
          <div class="snowy-modal-title">🛍️ Snowy's World</div>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="snowy-modal-tokens">🪙 <span id="snowy-modal-token-count">${state.tokens}</span> tokens</div>
            <button class="snowy-modal-close" onclick="snowyCloseShop()" aria-label="Close">✕</button>
          </div>
        </div>
        <div class="snowy-modal-body">

          <!-- LEFT: Snowy's room -->
          <div class="snowy-pet-panel">
            <div class="snowy-photo-wrap mood-${mood.key}" id="snowy-photo-wrap">
              <img src="images/snowy.jpg" alt="Snowy"
                   onerror="this.parentElement.innerHTML='<div style=\\'font-size:6rem;line-height:200px;text-align:center;\\'>🐕</div>'">
              <div class="snowy-mood-overlay">${mood.emoji}</div>
            </div>

            <div class="snowy-happiness-section">
              <div class="snowy-happiness-label">
                <span>Happiness</span>
                <span id="snowy-h-val">${h}%</span>
              </div>
              <div class="snowy-happiness-track">
                <div class="snowy-happiness-fill ${happinessBarClass(h)}"
                     id="snowy-h-fill"
                     style="width:${h}%"></div>
              </div>
            </div>

            ${demandBubble}

            <div class="snowy-inv-label">🎒 Aaradhya's Bag</div>
            <div class="snowy-inventory-chips" id="snowy-inv-chips">
              ${invHTML}
            </div>
          </div>

          <!-- RIGHT: Shop -->
          <div class="snowy-shop-panel">
            <div class="snowy-shop-header">
              <div class="snowy-shop-title">🏪 Snowy's Shopping Mall</div>
              <div class="snowy-tabs">
                <div class="snowy-tab ${shopTab==='food'?'active':''}" onclick="snowySetTab('food')">🍖 Food</div>
                <div class="snowy-tab ${shopTab==='clothing'?'active':''}" onclick="snowySetTab('clothing')">👗 Clothing</div>
                <div class="snowy-tab ${shopTab==='luxury'?'active':''}" onclick="snowySetTab('luxury')">👑 Luxury</div>
                <div class="snowy-tab ${shopTab==='rules'?'active':''}" onclick="snowySetTab('rules')">📋 How to Earn</div>
              </div>
            </div>
            <div class="snowy-shop-grid" id="snowy-shop-grid">
              ${shopTab === 'rules' ? buildRulesPanel() : buildItemCards(shopTab)}
            </div>
          </div>

        </div>
      </div>`;
  }

  function buildItemCards(tab) {
    const items = CATALOG[tab] || [];
    const demandId = state.demand && !state.demand.met ? state.demand.itemId : null;
    const owned = new Set(state.inventory || []);
    const tokens = state.tokens || 0;

    return items.map(item => {
      const isOwned    = owned.has(item.id);
      const isDemanded = item.id === demandId;
      const canAfford  = tokens >= item.cost;

      let cardClass = 'snowy-item-card';
      if (isOwned)    cardClass += ' owned';
      if (isDemanded) cardClass += ' demanded';
      if (!canAfford && !isOwned) cardClass += ' cant-afford';

      let tag = '';
      if (isDemanded) tag = '<span class="snowy-demanded-tag">⭐ Wanted</span>';
      if (isOwned)    tag = '<span class="snowy-owned-tag">✓ Owned</span>';

      let btnClass = 'snowy-buy-btn ';
      let btnText  = '';
      let btnAttr  = '';
      if (isOwned) {
        btnClass += 'already-owned';
        btnText   = '✓ Already owned';
        btnAttr   = 'disabled';
      } else if (!canAfford) {
        btnClass += 'cant-buy';
        btnText   = 'Need ' + item.cost + ' 🪙';
        btnAttr   = 'disabled';
      } else {
        btnClass += 'can-buy';
        btnText   = 'Buy for ' + item.cost + ' 🪙';
        btnAttr   = `onclick="snowyBuy('${item.id}')"`;
      }

      return `
        <div class="${cardClass}">
          ${tag}
          <div class="snowy-item-emoji">${item.emoji}</div>
          <div class="snowy-item-name">${item.name}</div>
          <div class="snowy-item-desc">${item.desc}</div>
          <div class="snowy-item-cost">🪙 ${item.cost}</div>
          <button class="${btnClass}" ${btnAttr}>${btnText}</button>
        </div>`;
    }).join('');
  }

  function buildRulesPanel() {
    const loginStreak = state.loginStreak || 0;
    const alreadyRewarded = state.loginStreakRewarded || [];

    const rules = [
      // Reading
      { icon:'📖', name:'Read a Note', desc:'Stay on a note for 45 seconds', tokens:'+1 🪙', cap:'Per note, once/day' },
      { icon:'➡️', name:'Read Notes in Order', desc:'Move forward through notes in sequence', tokens:'+1 bonus 🪙', cap:'Bundled with note read' },
      { icon:'🏅', name:'Finish All Notes', desc:'Read every note in a chapter today', tokens:'+6 🪙', cap:'Once per chapter/day' },
      // Revision tools
      { icon:'🧠', name:'Open Mind Map', desc:'Switch to the Mind Map tab', tokens:'+2 🪙', cap:'Once per chapter/day' },
      { icon:'⚡', name:'Study Cheat Sheet', desc:'Open the Cheat Sheet tab', tokens:'+2 🪙', cap:'Once per chapter/day' },
      { icon:'🖼️', name:'Practice Diagrams', desc:'Open the Diagrams tab', tokens:'+1 🪙', cap:'Once per chapter/day' },
      { icon:'🔤', name:'Flip Word Cards', desc:'Reveal a One-Word definition', tokens:'+1 🪙', cap:'Max 3 flips/day' },
      // Questions
      { icon:'✅', name:'Correct Answer (1st try)', desc:'Get it right on the first attempt', tokens:'+2 🪙', cap:'Per question' },
      { icon:'🔄', name:'Correct After Retry', desc:'Get it right after a wrong answer', tokens:'+1 🪙', cap:'Per question' },
      { icon:'🔥', name:'3-in-a-Row Streak', desc:'Answer 3 questions correctly in a row', tokens:'+2 bonus 🪙', cap:'Every 3 correct' },
      { icon:'🧮', name:'Numerical Question', desc:'Solve a calculation or numerical problem', tokens:'+3 🪙', cap:'Per question' },
      { icon:'🌟', name:'Perfect Quiz', desc:'All questions correct (min 3 Qs)', tokens:'+5 🪙', cap:'Per quiz session' },
      // Habits
      { icon:'🌅', name:'Daily App Visit', desc:'Open the app today', tokens:'+3 🪙', cap:'Once/day' },
      { icon:'🗺️', name:'Explore New Chapter', desc:'Open a chapter for the very first time', tokens:'+5 🪙', cap:'One-time per chapter' },
      { icon:'📌', name:'Bookmark a Question', desc:'Mark a question for revision', tokens:'+1 🪙', cap:'Max 2/day' },
      { icon:'🎯', name:'Daily MCQ Goal', desc:'Answer 15 MCQs in one day', tokens:'+8 🪙', cap:'Once/day' },
      // Milestones
      { icon:'⭐', name:'Chapter 50% Mastery', desc:'Reach 50% accuracy on a chapter\'s questions', tokens:'+10 🪙', cap:'Lifetime per chapter' },
      { icon:'🏆', name:'Chapter 100% Mastery', desc:'Master every question in a chapter', tokens:'+25 🪙', cap:'Lifetime per chapter' },
    ];

    const readingRules = rules.slice(0, 3);
    const revisionRules = rules.slice(3, 7);
    const questionRules = rules.slice(7, 12);
    const habitRules = rules.slice(12, 16);
    const milestoneRules = rules.slice(16);

    function ruleCard(r) {
      return `<div class="snowy-rule-row">
        <div class="snowy-rule-icon">${r.icon}</div>
        <div class="snowy-rule-body">
          <div class="snowy-rule-name">${r.name}</div>
          <div class="snowy-rule-desc">${r.desc}<br><em>${r.cap}</em></div>
        </div>
        <div class="snowy-rule-tokens">${r.tokens}</div>
      </div>`;
    }

    function section(title, items) {
      return `<div>
        <div class="snowy-rules-section-title">${title}</div>
        <div class="snowy-rules-grid">${items.map(ruleCard).join('')}</div>
      </div>`;
    }

    // Current streak display
    const streakHtml = loginStreak > 0
      ? `<div class="snowy-current-streak">
           <div class="snowy-current-streak-icon">🔥</div>
           <div>
             <div class="snowy-current-streak-days">${loginStreak} day${loginStreak > 1 ? 's' : ''}</div>
             <div class="snowy-current-streak-label">Current study streak — keep going!</div>
           </div>
         </div>`
      : `<div class="snowy-current-streak" style="background:linear-gradient(135deg,#5b54d6,#4a44bd)">
           <div class="snowy-current-streak-icon">🌱</div>
           <div>
             <div class="snowy-current-streak-days">Start Today!</div>
             <div class="snowy-current-streak-label">Open the app every day to build your streak</div>
           </div>
         </div>`;

    const ladderHtml = STREAK_REWARDS.map(r => {
      const achieved = loginStreak >= r.days;
      const isNext   = !achieved && STREAK_REWARDS.filter(x => !alreadyRewarded.includes(x.days) && loginStreak < x.days)[0]?.days === r.days;
      return `<div class="snowy-streak-rung ${achieved ? 'achieved' : ''} ${isNext ? 'next' : ''}">
        <div class="snowy-streak-days">📅 Day ${r.days}</div>
        <div class="snowy-streak-label">${r.label}</div>
        <div class="snowy-streak-reward">+${r.tokens} 🪙</div>
        ${achieved ? '<div class="snowy-streak-check">✅</div>' : ''}
        ${isNext ? '<div class="snowy-streak-reward" style="font-size:.7rem;color:var(--ink-3)">← Next!</div>' : ''}
      </div>`;
    }).join('');

    return `<div class="snowy-rules-panel">
      ${section('📖 Reading Notes', readingRules)}
      ${section('🔬 Revision Tools', revisionRules)}
      ${section('❓ Question Practice', questionRules)}
      ${section('📅 Daily Habits', habitRules)}
      ${section('🏆 Mastery Milestones', milestoneRules)}
      <div>
        <div class="snowy-rules-section-title">🔥 Consistency Streak Rewards</div>
        ${streakHtml}
        <div style="height:10px"></div>
        <div class="snowy-streak-ladder">${ladderHtml}</div>
      </div>
    </div>`;
  }

  function renderShopPanel() {
    const grid = document.getElementById('snowy-shop-grid');
    if (!grid) return;
    if (shopTab === 'rules') {
      grid.innerHTML = buildRulesPanel();
      grid.style.display = 'block';
      grid.style.padding = '0';
      grid.style.overflow = 'auto';
    } else {
      grid.innerHTML = buildItemCards(shopTab);
      grid.style.display = '';
      grid.style.padding = '';
      grid.style.overflow = '';
    }

    // Update token counter in modal
    const tc = document.getElementById('snowy-modal-token-count');
    if (tc) tc.textContent = state.tokens;

    // Update happiness
    const h = calcHappiness();
    state.happiness = h;
    const mood = getMood(h);
    const fill = document.getElementById('snowy-h-fill');
    const hval = document.getElementById('snowy-h-val');
    if (fill) { fill.style.width = h + '%'; fill.className = 'snowy-happiness-fill ' + happinessBarClass(h); }
    if (hval) hval.textContent = h + '%';

    const wrap = document.getElementById('snowy-photo-wrap');
    if (wrap) wrap.className = 'snowy-photo-wrap mood-' + mood.key;

    // Update inventory chips
    const chips = document.getElementById('snowy-inv-chips');
    if (chips) {
      const invItems = state.inventory || [];
      chips.innerHTML = invItems.length
        ? invItems.map(id => {
            const it = ITEM_MAP[id];
            return it ? `<span class="snowy-inv-chip">${it.emoji} ${it.name}</span>` : '';
          }).join('')
        : '<span class="snowy-inv-empty">Nothing yet — visit the shop!</span>';
    }
  }

  function setTab(tab) {
    shopTab = tab;
    // Update tab active states
    document.querySelectorAll('.snowy-tab').forEach(el => {
      const matches =
        (tab === 'food'     && el.textContent.includes('Food'))     ||
        (tab === 'clothing' && el.textContent.includes('Clothing'))  ||
        (tab === 'luxury'   && el.textContent.includes('Luxury'))    ||
        (tab === 'rules'    && el.textContent.includes('Earn'));
      el.classList.toggle('active', matches);
    });
    renderShopPanel();
  }

  // ── FLOATING TOKEN ANIMATION ──────────────────────────────
  function showFloatingTokens(amount, isPerfect) {
    // Find HUD card to animate towards
    const card = document.getElementById('snowy-hud-card');
    const rect = card ? card.getBoundingClientRect() : null;

    // Start position: near bottom of answer area or random
    const startX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const startY = window.innerHeight - 200;

    const el = document.createElement('div');
    el.className = 'snowy-token-float';
    el.textContent = (isPerfect ? '🌟 ' : '+') + amount + ' 🪙';
    el.style.left = startX + 'px';
    el.style.top  = startY + 'px';
    document.body.appendChild(el);

    setTimeout(() => el.remove(), 1500);
  }

  // ── CELEBRATION ───────────────────────────────────────────
  function showCelebration(item) {
    launchConfetti();

    const cel = document.createElement('div');
    cel.className = 'snowy-celebration';
    cel.innerHTML = `
      <div class="snowy-celebrate-card" onclick="this.parentElement.remove()">
        <span class="snowy-celebrate-emoji">${item.emoji}</span>
        <div class="snowy-celebrate-text">Snowy is overjoyed!</div>
        <div class="snowy-celebrate-sub">You gave her ${item.name} 🐾<br>She loves you, Aaradhya!</div>
      </div>`;
    document.body.appendChild(cel);
    setTimeout(() => cel.remove(), 3500);

    updateHUD();
  }

  function launchConfetti() {
    const colors = ['#f0a500','#ee5a24','#0e9f6e','#5b54d6','#d6336c','#ffd700','#3bb6c7'];
    for (let i = 0; i < 50; i++) {
      const dot = document.createElement('div');
      dot.className = 'snowy-confetti-dot';
      dot.style.left  = Math.random() * 100 + 'vw';
      dot.style.top   = '-20px';
      dot.style.background = colors[Math.floor(Math.random() * colors.length)];
      dot.style.setProperty('--dur',   (1.2 + Math.random() * 1.2) + 's');
      dot.style.setProperty('--delay', (Math.random() * .5) + 's');
      dot.style.borderRadius = Math.random() > .5 ? '50%' : '2px';
      dot.style.width  = (6 + Math.random() * 8) + 'px';
      dot.style.height = (6 + Math.random() * 8) + 'px';
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 3000);
    }
  }

  // ── SIMPLE TOAST (fallback if app's showToast not ready) ──
  function showToastMsg(msg) {
    if (typeof showToast === 'function') {
      showToast('success', msg);
      return;
    }
    const t = document.createElement('div');
    t.style.cssText = `position:fixed;bottom:100px;left:50%;transform:translateX(-50%);
      background:var(--surface);border:1px solid var(--line);border-radius:12px;
      padding:10px 18px;font-size:.85rem;font-family:var(--font-ui);color:var(--ink);
      box-shadow:var(--shadow);z-index:9999;pointer-events:none;animation:snowy-token-rise 2.5s forwards`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2500);
  }

  // ══════════════════════════════════════════════════════════
  // ACTIVITY EARNING ENGINE
  // Every learning action in the app earns Aaradhya tokens.
  // An earn-log (per calendar day + lifetime milestones) prevents
  // farming the same action repeatedly.
  // ══════════════════════════════════════════════════════════

  const LS_LOG_KEY = 'studyhub_snowy_log';

  // ── Earn amounts (calibrated for ~20 min study = ~30 tokens) ──
  // Note timer is 45 seconds — must actually read, not just click.
  // Daily demands cap at 35 tokens — achievable in one focused session.
  const NOTE_READ_TIMER_MS = 45000; // 45 seconds on a note to earn

  const ACT = {
    daily_login:       3,   // per day
    topic_first_visit: 5,   // one-time per chapter
    note_read:         1,   // per note, ≥45 seconds (once per note per day)
    note_progress:     1,   // bonus when moving forward through notes sequentially
    chapter_all_notes: 6,   // all notes in a chapter read today
    tab_mindmap:       2,   // once per chapter per day
    tab_cheatsheet:    2,   // once per chapter per day
    tab_diagrams:      1,   // once per chapter per day
    tab_oneword:       1,   // once per chapter per day
    wordcard_flip:     1,   // max 3 flips per day
    bookmark_add:      1,   // max 2 per day
    mcq_daily_goal:    8,   // hits 15 MCQs today
    mastery_50:        10,  // chapter reaches 50% accuracy — lifetime
    mastery_100:       25,  // chapter 100% accuracy — lifetime
  };

  // Toast messages
  const ACT_TOAST = {
    daily_login:       '🌅 +3 🪙 Daily bonus! Keep the streak alive!',
    topic_first_visit: '🗺️ +5 🪙 New chapter! Snowy is excited for you!',
    note_read:         '📖 +2 🪙 Note read!',
    note_progress:     null,
    chapter_all_notes: '🏅 +6 🪙 All notes read! Amazing focus!',
    tab_mindmap:       '🧠 +2 🪙 Mind Map explored!',
    tab_cheatsheet:    '⚡ +2 🪙 Cheat Sheet studied!',
    tab_diagrams:      '🖼️ +1 🪙 Diagrams practised!',
    tab_oneword:       '🔤 +1 🪙 One-Word cards opened!',
    wordcard_flip:     null,
    bookmark_add:      '📌 +1 🪙 Marked for revision!',
    mcq_daily_goal:    '🎯 +8 🪙 Daily goal reached! Snowy did a happy dance! 🐾',
    mastery_50:        '⭐ +10 🪙 Chapter 50% mastered! Great work, Aaradhya!',
    mastery_100:       '🏆 +25 🪙 CHAPTER MASTERED! Snowy is overjoyed! 🥰',
  };

  // ── Earn log helpers ──────────────────────────────────────
  function loadEarnLog() {
    try { return JSON.parse(localStorage.getItem(LS_LOG_KEY) || '{}'); } catch (e) { return {}; }
  }
  function saveEarnLog(log) {
    try { localStorage.setItem(LS_LOG_KEY, JSON.stringify(log)); } catch (e) {}
  }
  function todayLogKey() { return new Date().toISOString().slice(0, 10); }

  /**
   * Core gating + earning function.
   * type  — activity key from ACT (e.g. 'note_read')
   * id    — optional context ID (note id, topic id…)
   * opts  — { silent, force, milestone (uses lifetime log instead of daily) }
   */
  function earnActivity(type, id, opts) {
    opts = opts || {};
    const amount = ACT[type];
    if (!amount) return false;

    const log   = loadEarnLog();
    const today = todayLogKey();
    const logKey = id ? (type + ':' + id) : type;

    if (opts.milestone) {
      // Lifetime milestone — stored under 'milestones' not date
      if (!log.milestones) log.milestones = {};
      if (log.milestones[logKey]) return false; // already earned forever
      log.milestones[logKey] = true;
    } else {
      // Daily dedup
      if (!log[today]) log[today] = {};
      const dayLog = log[today];

      // Per-day cap checks
      if (type === 'bookmark_add') {
        dayLog._bookmark_count = (dayLog._bookmark_count || 0);
        if (dayLog._bookmark_count >= 3) return false;
        dayLog._bookmark_count += 1;
      } else if (type === 'wordcard_flip') {
        dayLog._wordcard_count = (dayLog._wordcard_count || 0);
        if (dayLog._wordcard_count >= 5) return false;
        dayLog._wordcard_count += 1;
      } else {
        if (dayLog[logKey]) return false; // already earned today
        dayLog[logKey] = true;
      }
    }

    saveEarnLog(log);

    // Credit tokens
    state.tokens = (state.tokens || 0) + amount;
    state.totalEarned = (state.totalEarned || 0) + amount;
    saveState();

    if (!opts.silent) {
      const msg = ACT_TOAST[type];
      if (msg) showToastMsg(msg);
      showFloatingTokens(amount, type === 'mastery_100');
    }
    updateHUD();
    return true;
  }

  // ── Note-reading timer ────────────────────────────────────
  let _noteTimerId    = null;
  let _noteTimerNoteId = null;
  let _noteTimerTopicId = null;
  let _noteShownAt    = 0;
  let _noteDirection  = 0; // +1 = forward, -1 = backward

  /** Call when a note card becomes visible (from renderNotes). */
  function onNoteShown(noteId, topicId) {
    clearTimeout(_noteTimerId);
    _noteTimerNoteId  = noteId;
    _noteTimerTopicId = topicId;
    _noteShownAt      = Date.now();
    // Auto-award after 45 seconds of staying on this note
    _noteTimerId = setTimeout(() => {
      _awardNoteRead(noteId, topicId, false);
    }, NOTE_READ_TIMER_MS);
  }

  /** Call just BEFORE navigating away from a note. */
  function onNoteLeave(direction) {
    clearTimeout(_noteTimerId);
    if (!_noteTimerNoteId) return;
    const elapsed = Date.now() - _noteShownAt;
    const wasForward = direction === 1;
    if (elapsed >= NOTE_READ_TIMER_MS) {
      _awardNoteRead(_noteTimerNoteId, _noteTimerTopicId, wasForward);
    }
    _noteTimerNoteId = null;
  }

  function _awardNoteRead(noteId, topicId, wasForward) {
    const earned = earnActivity('note_read', noteId);
    if (earned && wasForward) {
      // Silent +1 for sequential progress (bundle into the same float)
      state.tokens += ACT.note_progress;
      state.totalEarned += ACT.note_progress;
      saveState();
      showFloatingTokens(ACT.note_read + ACT.note_progress);
      updateHUD();
    }

    // Check if all notes in chapter have been read today
    if (topicId && typeof sortedTopicNotes === 'function') {
      try {
        const log   = loadEarnLog();
        const today = todayLogKey();
        const all   = sortedTopicNotes(topicId);
        const allRead = all.length > 0 && all.every(n => {
          const k = 'note_read:' + n.id;
          return log[today] && log[today][k];
        });
        if (allRead) earnActivity('chapter_all_notes', topicId);
      } catch (e) {}
    }
  }

  // ── Public activity hooks (called from app.js) ────────────

  /** Called at app boot — daily login bonus + streak tracking. */
  function checkDailyLogin() {
    const today = todayLogKey();
    if (state.lastLoginDate === today) return; // already handled today

    // Calculate streak
    const yesterday = (() => {
      const d = new Date(); d.setDate(d.getDate() - 1);
      return d.toISOString().slice(0, 10);
    })();

    if (state.lastLoginDate === yesterday) {
      state.loginStreak = (state.loginStreak || 0) + 1;
    } else if (state.lastLoginDate && state.lastLoginDate < yesterday) {
      // Streak broken
      state.loginStreak = 1;
    } else {
      state.loginStreak = 1; // first ever login
    }
    state.lastLoginDate = today;
    saveState();

    // Base daily login token
    earnActivity('daily_login', null, { silent: false });

    // Consistency streak reward
    const already = state.loginStreakRewarded || [];
    STREAK_REWARDS.forEach(r => {
      if (state.loginStreak >= r.days && !already.includes(r.days)) {
        // One-time reward per streak milestone (resets if streak breaks)
        state.loginStreakRewarded = [...already, r.days];
        state.tokens = (state.tokens || 0) + r.tokens;
        state.totalEarned = (state.totalEarned || 0) + r.tokens;
        saveState();
        showFloatingTokens(r.tokens, true);
        setTimeout(() => {
          showToastMsg('🔥 ' + r.label + ' +' + r.tokens + ' 🪙 Snowy is SO proud of you!');
        }, 1200);
        updateHUD();
      }
    });

    // If streak broke, clear rewarded milestones so they can be earned again
    if (state.loginStreak === 1 && (state.loginStreakRewarded || []).length > 0) {
      state.loginStreakRewarded = [];
      saveState();
    }
  }

  /** Called when a topic/chapter is opened. */
  function onTopicEnter(topicId) {
    if (!topicId) return;
    earnActivity('topic_first_visit', topicId, { milestone: true });
  }

  /** Called by renderNotes (pager mode) — registers the current note. */
  function onNoteRendered(noteId, topicId) {
    onNoteShown(noteId, topicId);
  }

  /** Called by nextNoteCard BEFORE incrementing index. */
  function onNextNote() {
    onNoteLeave(1);
  }

  /** Called by prevNoteCard BEFORE decrementing index. */
  function onPrevNote() {
    onNoteLeave(-1);
  }

  /** Called by switchContentTab. */
  function onTabSwitch(tab, topicId) {
    // Leaving notes tab — settle timer
    onNoteLeave(0);
    const tabMap = {
      mindmap:    'tab_mindmap',
      cheatsheet: 'tab_cheatsheet',
      diagrams:   'tab_diagrams',
      oneword:    'tab_oneword',
    };
    const actType = tabMap[tab];
    if (actType && topicId) earnActivity(actType, topicId);
  }

  /** Called by toggleBookmark when ADDING (not removing). */
  function onBookmarkAdded() {
    earnActivity('bookmark_add', null);
  }

  /** Called after every MCQ recorded — check daily goal. */
  function onMcqRecorded(dailyCount) {
    if (dailyCount === 15) earnActivity('mcq_daily_goal');
  }

  /** Called after a correct answer — check mastery milestones. */
  function onMasteryCheck(topicId) {
    if (!topicId || typeof chapterMastery !== 'function') return;
    try {
      const m = chapterMastery(topicId);
      if (m.accuracy >= 50  && m.attempted >= 5)
        earnActivity('mastery_50',  topicId, { milestone: true });
      if (m.accuracy >= 100 && m.attempted >= 5)
        earnActivity('mastery_100', topicId, { milestone: true });
    } catch (e) {}
  }

  /** Called by word-card flip. */
  function onWordCardFlipped() {
    earnActivity('wordcard_flip', null, { silent: true });
    // show a small quiet float
    state.tokens += 0; // already credited inside earnActivity
    showFloatingTokens(ACT.wordcard_flip);
    updateHUD();
  }

  // ── PUBLIC API (called by inline onclick + app.js) ────────
  window.snowyEarnTokens       = earnTokens;
  window.snowyEarnPerfectBonus = earnPerfectBonus;
  window.snowyOpenShop         = openShop;
  window.snowyCloseShop        = closeShop;
  window.snowyBuy              = buyItem;
  window.snowySetTab           = setTab;
  window.snowyGetState         = () => state;
  // Activity hooks
  window.snowyOnTopicEnter     = onTopicEnter;
  window.snowyOnNoteRendered   = onNoteRendered;
  window.snowyOnNextNote       = onNextNote;
  window.snowyOnPrevNote       = onPrevNote;
  window.snowyOnTabSwitch      = onTabSwitch;
  window.snowyOnBookmarkAdded  = onBookmarkAdded;
  window.snowyOnMcqRecorded    = onMcqRecorded;
  window.snowyOnMasteryCheck   = onMasteryCheck;
  window.snowyOnWordCardFlipped= onWordCardFlipped;

  // ── INIT ──────────────────────────────────────────────────
  function init() {
    refreshDemand();
    state.happiness = calcHappiness();
    saveState();
    renderHUD();
    updateHUD();
    // Daily login bonus (fires once per calendar day)
    checkDailyLogin();
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // If already loaded (script added late), run immediately
    init();
  }

})();
