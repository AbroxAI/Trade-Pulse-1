(function() {
  // ========== 150 PERSONAS FROM THE AI ENGINE + ADMIN ==========
  const personaData = [
    { name: "oladapo ogunsakin", gender: "men", country: "Nigeria", isFallback: false },
    { name: "narciso panganiban", gender: "men", country: "Mexico", isFallback: false },
    { name: "Elmer nunez 📉", gender: "men", country: "Mexico", isFallback: false },
    { name: "Penwell leslie", gender: "men", country: "SouthAfrica", isFallback: false },
    { name: "G.a. Scott", gender: "men", country: "US", isFallback: false },
    { name: "Cherry Reichhart", gender: "women", country: "Germany", isFallback: false },
    { name: "Flash BE", gender: "men", country: "United Kingdom", isFallback: false },
    { name: "scott jung", gender: "men", country: "US", isFallback: false },
    { name: "Dottie Ragland", gender: "women", country: "US", isFallback: false },
    { name: "Andrew Funk", gender: "men", country: "US", isFallback: false },
    { name: "Amy Jasmine", gender: "women", country: "US", isFallback: false },
    { name: "Brian Kahle", gender: "men", country: "US", isFallback: false },
    { name: "Maureen joan jefferys", gender: "women", country: "United Kingdom", isFallback: false },
    { name: "Stanley willingham jr", gender: "men", country: "US", isFallback: false },
    { name: "Frank Lowry", gender: "men", country: "US", isFallback: false },
    { name: "Micheal Shaw", gender: "men", country: "US", isFallback: false },
    { name: "Arlene paz rodriguez", gender: "women", country: "Mexico", isFallback: false },
    { name: "louis wayne", gender: "men", country: "US", isFallback: false },
    { name: "Jennifer West", gender: "women", country: "US", isFallback: false },
    { name: "Connie H. Price", gender: "women", country: "US", isFallback: false },
    { name: "ashley muse", gender: "women", country: "US", isFallback: false },
    { name: "Trovis banks 🏦💰", gender: "men", country: "US", isFallback: false },
    { name: "Carmeal Smith", gender: "men", country: "US", isFallback: false },
    { name: "Jamie Terrell", gender: "men", country: "US", isFallback: false },
    { name: "Trovao Duchness 🦊", gender: "men", country: "Brazil", isFallback: false },
    { name: "Lessie Willhite", gender: "women", country: "US", isFallback: false },
    { name: "Chiquita Tate", gender: "women", country: "US", isFallback: false },
    { name: "Eric Harris", gender: "men", country: "US", isFallback: false },
    { name: "Mona Dent", gender: "women", country: "US", isFallback: false },
    { name: "Salman Rasheed", gender: "men", country: "UAE", isFallback: false },
    { name: "Syed Ali Zohaib", gender: "men", country: "India", isFallback: false },
    { name: "Moshin Ansari", gender: "men", country: "India", isFallback: false },
    { name: "Saqib Naveed", gender: "men", country: "India", isFallback: false },
    { name: "Sergio Vega munoz 🔥", gender: "men", country: "Mexico", isFallback: false },
    { name: "frankie elric", gender: "men", country: "US", isFallback: false },
    { name: "Chris Alexander", gender: "men", country: "US", isFallback: false },
    { name: "Angel Lopez", gender: "men", country: "Mexico", isFallback: false },
    { name: "Anthony Onyinkwa", gender: "men", country: "Nigeria", isFallback: false },
    { name: "victor e keyz 🎹🎺📉", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Dereje haile", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Sym Ple", gender: "men", country: "US", isFallback: false },
    { name: "Das Haruna Fearless", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Tomas Yende", gender: "men", country: "SouthAfrica", isFallback: false },
    { name: "Stanley Ezeorjika 💰", gender: "men", country: "Nigeria", isFallback: false },
    { name: "jen lee", gender: "women", country: "US", isFallback: false },
    { name: "Nieves yazita 🌹❣️", gender: "women", country: "Mexico", isFallback: false },
    { name: "Dominic Harley", gender: "men", country: "United Kingdom", isFallback: false },
    { name: "Abita Fong", gender: "women", country: "Indonesia", isFallback: false },
    { name: "Oskar Lopez", gender: "men", country: "Mexico", isFallback: false },
    { name: "Ricardo Antonio mex", gender: "men", country: "Mexico", isFallback: false },
    { name: "Sarahi Reynaga", gender: "women", country: "Mexico", isFallback: false },
    { name: "Ana Montes", gender: "women", country: "Mexico", isFallback: false },
    { name: "jacqueline alvarado", gender: "women", country: "Mexico", isFallback: false },
    { name: "Yadira Torres Rivera", gender: "women", country: "Mexico", isFallback: false },
    { name: "Valentina Orozco 😎", gender: "women", country: "Mexico", isFallback: false },
    { name: "Manuel ascota", gender: "men", country: "Mexico", isFallback: false },
    { name: "David Magana 💹📉", gender: "men", country: "Mexico", isFallback: false },
    { name: "Besty Claudio Lopez", gender: "women", country: "Mexico", isFallback: false },
    { name: "Yadira rodriguez", gender: "women", country: "Mexico", isFallback: false },
    { name: "Juan torres nunez", gender: "men", country: "Mexico", isFallback: false },
    { name: "Valerina Pedraza", gender: "women", country: "Mexico", isFallback: false },
    { name: "eric ortiz", gender: "men", country: "Mexico", isFallback: false },
    { name: "Edd Trulli", gender: "men", country: "US", isFallback: false },
    { name: "marcy saenz", gender: "women", country: "Mexico", isFallback: false },
    { name: "Andy Zensation 📊", gender: "men", country: "US", isFallback: false },
    { name: "Latex mt tozer", gender: "men", country: "US", isFallback: false },
    { name: "Kluta wangempella ll", gender: "men", country: "SouthAfrica", isFallback: false },
    { name: "Boaster Friday", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Philp Otive", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Akiiga Fabian", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Kelly TV", gender: "women", country: "US", isFallback: false },
    { name: "Esther Fidelis", gender: "women", country: "Nigeria", isFallback: false },
    { name: "Mates nsikak", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Friday Kelly", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Edeh Favour", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Lazy Dark 🌑💰💲", gender: "men", country: "US", isFallback: false },
    { name: "Kullest Kidd 🪐", gender: "men", country: "US", isFallback: false },
    { name: "Paul jande", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Bwalya Coxy", gender: "men", country: "SouthAfrica", isFallback: false },
    { name: "Boss  Mega ⚡⚡⚡", gender: "men", country: "Nigeria", isFallback: false },
    { name: "Regard Nyakane", gender: "men", country: "SouthAfrica", isFallback: false },
    { name: "Tdk Mj", gender: "men", country: "US", isFallback: false },
    { name: "Mbg Mook 🍒", gender: "men", country: "US", isFallback: false },
    { name: "Larry Verb Washington", gender: "men", country: "US", isFallback: false },
    { name: "Md aldarondo", gender: "men", country: "Mexico", isFallback: false },
    { name: "jens kleinschmidt", gender: "men", country: "Germany", isFallback: false },
    { name: "Buchi Joseph", gender: "men", country: "Nigeria", isFallback: false },
    { name: "mitchell dufort", gender: "men", country: "US", isFallback: false },
    { name: "marvel Da' sauce", gender: "men", country: "US", isFallback: false },
    { name: "Red Barron", gender: "men", country: "US", isFallback: false },
    { name: "Oliver Meszaros", gender: "men", country: "Germany", isFallback: false },
    { name: "Ben Leary", gender: "men", country: "United Kingdom", isFallback: false },
    { name: "Ron  Thomson 🏍️", gender: "men", country: "US", isFallback: false },
    { name: "Nicholas Marchese", gender: "men", country: "US", isFallback: false },
    { name: "Joe Cottrell", gender: "men", country: "US", isFallback: false },
    { name: "Jovan Mircetic", gender: "men", country: "US", isFallback: false },
    { name: "Jordan A Ashcer", gender: "men", country: "US", isFallback: false },
    { name: "matt donald", gender: "men", country: "US", isFallback: false },
    { name: "Chris harney", gender: "men", country: "US", isFallback: false },
    { name: "Dvedat Demirci", gender: "men", country: "Germany", isFallback: false },
    { name: "Serhat Nuri Kaya", gender: "men", country: "Germany", isFallback: false },
    { name: "Julibel Golilao", gender: "women", country: "Indonesia", isFallback: false },
    { name: "Maria Gonzalez", gender: "women", country: "Mexico", isFallback: true },
    { name: "Carlos Mendez", gender: "men", country: "Mexico", isFallback: true },
    { name: "Linda Schmidt", gender: "women", country: "Germany", isFallback: true },
    { name: "Hans Becker", gender: "men", country: "Germany", isFallback: true },
    { name: "Priya Sharma", gender: "women", country: "India", isFallback: true },
    { name: "Raj Patel", gender: "men", country: "India", isFallback: true },
    { name: "Aisha Al-Farsi", gender: "women", country: "UAE", isFallback: true },
    { name: "Omar Hassan", gender: "men", country: "UAE", isFallback: true },
    { name: "Sofia Rossi", gender: "women", country: "Brazil", isFallback: true },
    { name: "Lucas Silva", gender: "men", country: "Brazil", isFallback: true },
    { name: "Chloe Martin", gender: "women", country: "United Kingdom", isFallback: true },
    { name: "James Taylor", gender: "men", country: "United Kingdom", isFallback: true },
    { name: "Emily Johnson", gender: "women", country: "US", isFallback: true },
    { name: "Michael Brown", gender: "men", country: "US", isFallback: true },
    { name: "Siti Nurhaliza", gender: "women", country: "Indonesia", isFallback: true },
    { name: "Budi Santoso", gender: "men", country: "Indonesia", isFallback: true },
    { name: "Zinhle Dlamini", gender: "women", country: "SouthAfrica", isFallback: true },
    { name: "Thabo Nkosi", gender: "men", country: "SouthAfrica", isFallback: true },
    { name: "Amara Okonkwo", gender: "women", country: "Nigeria", isFallback: true },
    { name: "Chidi Eze", gender: "men", country: "Nigeria", isFallback: true },
    { name: "Isabella Costa", gender: "women", country: "Brazil", isFallback: true },
    { name: "Mateo Fernandez", gender: "men", country: "Mexico", isFallback: true },
    { name: "Emma Wilson", gender: "women", country: "United Kingdom", isFallback: true },
    { name: "David Kim", gender: "men", country: "US", isFallback: true },
    { name: "Yuki Tanaka", gender: "women", country: "Indonesia", isFallback: true },
    { name: "Ahmed Al-Mansouri", gender: "men", country: "UAE", isFallback: true },
    { name: "Neha Gupta", gender: "women", country: "India", isFallback: true },
    { name: "Vikram Singh", gender: "men", country: "India", isFallback: true },
    { name: "Laura Fischer", gender: "women", country: "Germany", isFallback: true },
    { name: "Stefan Weber", gender: "men", country: "Germany", isFallback: true },
    { name: "Nia Siregar", gender: "women", country: "Indonesia", isFallback: true },
    { name: "Andi Wijaya", gender: "men", country: "Indonesia", isFallback: true },
    { name: "Lerato Mokoena", gender: "women", country: "SouthAfrica", isFallback: true },
    { name: "Sipho Khumalo", gender: "men", country: "SouthAfrica", isFallback: true },
    { name: "Folake Adeyemi", gender: "women", country: "Nigeria", isFallback: true },
    { name: "Tunde Balogun", gender: "men", country: "Nigeria", isFallback: true },
    { name: "Jessica Miller", gender: "women", country: "US", isFallback: true },
    { name: "Christopher Davis", gender: "men", country: "US", isFallback: true },
    { name: "Sophie Evans", gender: "women", country: "United Kingdom", isFallback: true },
    { name: "William Jones", gender: "men", country: "United Kingdom", isFallback: true },
    { name: "Camila Rocha", gender: "women", country: "Brazil", isFallback: true },
    { name: "Gustavo Lima", gender: "men", country: "Brazil", isFallback: true },
    { name: "Fatima Al-Zaabi", gender: "women", country: "UAE", isFallback: true },
    { name: "Rashid Al-Kaabi", gender: "men", country: "UAE", isFallback: true },
    { name: "Anjali Reddy", gender: "women", country: "India", isFallback: true },
    { name: "Arjun Mehta", gender: "men", country: "India", isFallback: true },
    { name: "Valeria Hernandez", gender: "women", country: "Mexico", isFallback: true },
    { name: "Alejandro Ruiz", gender: "men", country: "Mexico", isFallback: true },
    { name: "Anna Wagner", gender: "women", country: "Germany", isFallback: true },
    { name: "Thomas Schulz", gender: "men", country: "Germany", isFallback: true }
  ];

  // Admin persona (separate, not in main list to keep count exact)
  const adminPersona = {
    name: "Aditya Renash",
    gender: "men",
    country: "India",
    isFallback: false,
    vip: 0,
    admin: true,
    initials: "AR",
    avatar: "assets/avatars/aditya_renash.jpg",
    traits: { archetype: "boss", grammar: "clean", slang: 0.15, typoRate: 0.02 }
  };

  // Archetype traits from the AI engine (simplified mapping)
  const archetypeTraits = {
    boss:       { archetype: "boss", grammar: "clean", slang: 0.2, typoRate: 0.05 },
    analyst:    { archetype: "analyst", grammar: "clean", slang: 0.1, typoRate: 0.03 },
    joker:      { archetype: "joker", grammar: "informal", slang: 0.8, typoRate: 0.15 },
    wit:        { archetype: "sarcastic", grammar: "mixed", slang: 0.7, typoRate: 0.1 },
    newbie:     { archetype: "newbie", grammar: "informal", slang: 0.6, typoRate: 0.2 },
    lurker:     { archetype: "lurker", grammar: "mixed", slang: 0.3, typoRate: 0.05 },
    expert:     { archetype: "expert", grammar: "clean", slang: 0.25, typoRate: 0.04 },
    thoughtful: { archetype: "thoughtful", grammar: "clean", slang: 0.15, typoRate: 0.03 }
  };

  // Deterministic VIP assignment based on name hash
  function getVipFromName(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = ((hash << 5) - hash) + name.charCodeAt(i);
    const rand = Math.abs(hash % 100) / 100;
    if (rand < 0.6) return 0;
    if (rand < 0.85) return 1;
    if (rand < 0.95) return 2;
    return 3;
  }

  // Assign personality traits based on name (using AI engine's nameToPersonality mapping for consistency)
  const nameToArchetype = {
    "oladapo ogunsakin": 'boss', "Anthony Onyinkwa": 'expert', "victor e keyz 🎹🎺📉": 'analyst',
    "Stanley Ezeorjika 💰": 'boss', "Das Haruna Fearless": 'expert', "Boaster Friday": 'joker',
    "Boss  Mega ⚡⚡⚡": 'boss', "Lazy Dark 🌑💰💲": 'wit', "Elmer nunez 📉": 'analyst',
    "Sergio Vega munoz 🔥": 'boss', "David Magana 💹📉": 'analyst', "Andy Zensation 📊": 'analyst',
    "Valentina Orozco 😎": 'joker', "Trovis banks 🏦💰": 'boss', "Flash BE": 'expert',
    "Red Barron": 'wit', "Kullest Kidd 🪐": 'joker', "marvel Da' sauce": 'joker',
    "Ron  Thomson 🏍️": 'expert', "Jamie Terrell": 'newbie', "ashley muse": 'newbie',
    "jen lee": 'newbie', "Mona Dent": 'lurker', "Sym Ple": 'lurker', "Cherry Reichhart": 'thoughtful',
    "Trovao Duchness 🦊": 'joker', "Salman Rasheed": 'analyst', "Syed Ali Zohaib": 'expert',
    "Nieves yazita 🌹❣️": 'thoughtful', "Dominic Harley": 'wit', "Latex mt tozer": 'lurker',
    "Kluta wangempella ll": 'lurker', "Paul jande": 'newbie', "Bwalya Coxy": 'expert',
    "Regard Nyakane": 'analyst', "Tdk Mj": 'newbie', "Mbg Mook 🍒": 'joker',
    "Larry Verb Washington": 'expert', "jens kleinschmidt": 'analyst', "Oliver Meszaros": 'thoughtful',
    "Ben Leary": 'wit', "Nicholas Marchese": 'newbie', "Joe Cottrell": 'expert',
    "Jovan Mircetic": 'analyst', "Dvedat Demirci": 'boss', "Serhat Nuri Kaya": 'thoughtful',
    "Julibel Golilao": 'newbie', "Chidi Eze": 'newbie', "Carlos Mendez": 'expert'
  };

  function getTraitsForPersona(name) {
    const archetypeKey = nameToArchetype[name] || 'active'; // fallback to active (normal)
    if (archetypeKey === 'active') return { archetype: "active", grammar: "mixed", slang: 0.4, typoRate: 0.08 };
    return archetypeTraits[archetypeKey] || archetypeTraits['active'];
  }

  // Build final persona list
  const personaNames = personaData.map(p => {
    const vip = getVipFromName(p.name);
    const admin = false; // no admin in main list
    const safeName = p.name
      .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
      .replace(/[^\w\s]/g, '')
      .trim()
      .replace(/\s+/g, '_')
      .toLowerCase();

    const avatarPath = p.isFallback
      ? `https://ui-avatars.com/api/?name=${p.name.split(' ')[0][0]}+${p.name.split(' ').pop()[0]}&background=2f5b9c&color=fff&size=200&bold=true`
      : `assets/avatars/${safeName}.jpg`;

    const traits = getTraitsForPersona(p.name);

    return {
      name: p.name,
      vip,
      admin,
      avatar: avatarPath,
      isFallback: p.isFallback,
      initials: p.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      traits
    };
  });

  // Insert admin at the beginning of the list (so he appears often)
  personaNames.unshift({
    name: adminPersona.name,
    vip: adminPersona.vip,
    admin: true,
    avatar: adminPersona.avatar,
    isFallback: false,
    initials: adminPersona.initials,
    traits: adminPersona.traits
  });

  // ========== HUGE MESSAGE POOL (no repeats, multiple categories) ==========
  const messageCategories = {
    general: [
      "Market looks promising today!", "Keeping an eye on EUR/USD", "Anyone else feeling bullish?",
      "I love the vibe in here", "Trading is life", "Green pips only!", "Stay focused, stay profitable",
      "Another day, another opportunity", "Let's make this a winning week", "Consistency is key",
      "Patience pays off in trading", "Don't chase, wait for the setup", "Risk management > everything",
      "This community is growing fast", "Happy to be part of this", "Learning every day",
      "I'm still a newbie but loving it", "Who's trading the London session?", "NY open in 30 mins, get ready",
      "Asian session was quiet", "I prefer trading majors", "Anybody scalp the 1min chart?",
      "Just finished my morning analysis", "I'm trying out a new strategy", "Backtesting results were solid",
      "Forward testing now, fingers crossed", "Compounding is the secret sauce", "Don't gamble, trade with a plan",
      "I'm reading 'Trading in the Zone'", "Psychology is 80% of trading", "Keep a journal, it helps",
      "Review your trades every weekend", "Small wins add up", "I'm up 3% this month", "Steady growth > get rich quick",
      "Who's holding any positions overnight?", "I closed everything before the news",
      "NFP week, be careful", "CPI data tomorrow, volatility incoming", "I only trade technicals, news is noise",
      "Support and resistance is all you need", "Price action never lies", "I'm a trend follower",
      "I trade reversals, high risk high reward", "This week has been amazing", "Markets are unpredictable",
      "I'm taking a break, overtraded", "Mental health is important", "Family first, trading second",
      "I'm grateful for this platform", "Best investment community ever", "Shoutout to the team",
      "The signals are on fire", "Just upgraded my plan", "VIP perks are worth it",
      "Let's gooo! 🚀", "💰💰💰"
    ],
    question: [
      "What's the best pair to trade right now?", "Any signals today?", "How long does withdrawal take?",
      "Can someone explain leverage?", "Is there a mobile app?", "Minimum deposit for beginners?",
      "Does this platform support USDT?", "Which broker do you recommend?", "How do I set stop loss?",
      "What's the difference between OTC and real market?", "Do you offer copy trading?", "Can I use a demo first?",
      "How often are signals sent?", "Is this AI-generated signals?", "How do I verify my account?",
      "What's the success rate?", "I'm new, any tips?", "Which session gives the best moves?",
      "Do you trade news events?", "What's your risk per trade?", "How many pips do you target?",
      "Is there a Telegram group?", "How fast is customer support?", "Can I start with $50?",
      "Any free signals?", "What's the expected monthly return?", "Is this legit?",
      "How do I withdraw profits?", "What payment methods are accepted?", "Can I use a credit card?",
      "Is there a referral bonus?", "How do I become VIP?", "Do I need KYC?",
      "What time are signals posted?", "Is there a trading room?", "Can I see past performance?",
      "How accurate are the signals?", "What if I miss a signal?", "Can I trade on weekends?",
      "Do you have educational resources?", "How do I read your signals?", "What's the maximum drawdown?",
      "Do you use hedging?", "Is this suitable for scalping?", "What's your favorite indicator?",
      "Can I trade gold?", "How do I manage emotions while trading?", "Is there a loss recovery plan?",
      "What's the win rate this month?"
    ],
    result: [
      "just closed EUR/USD +92% 🎯", "GBP/USD hit TP +88%", "quick scalp on US30 +74%",
      "finally a green day", "lost a trade but still up overall", "this signal is gold",
      "three wins in a row!", "caught the reversal perfectly", "tight stop saved me today",
      "should have let it run, but profit is profit", "biggest win this week", "recovered from yesterday's loss",
      "small loss, sticking to plan", "EUR/JPY gave a nice 80%", "hit my daily target and quit",
      "no trades today, discipline pays", "missed the entry, but it's okay", "overtraded and regretted",
      "stayed patient and got rewarded", "that setup was textbook", "my analysis was spot on",
      "feeling confident after backtesting", "trailing stop caught the spike", "just took partial profits",
      "let it run and hit full TP", "market respected my levels", "I love it when a plan comes together",
      "closed early but still green", "avoided FOMO, saved capital", "I'm done for the day, +5% account",
      "risked 1%, made 3%", "perfect entry, no drawdown", "this is why I trade", "trust the process",
      "compounding is working", "EUR/USD +81%", "GBP/JPY +78%", "AUD/USD +69%",
      "USD/CHF +83%", "NZD/USD +76%", "XAU/USD +91%", "US30 +95%", "GER40 +87%",
      "BTC/USD +84%", "ETH/USD +79%"
    ],
    hype: [
      "we eating good today", "pips for days", "market is giving", "no losses today",
      "this thing too sweet 🔥", "account growing daily", "compounding baby!",
      "making the market my ATM", "don't sleep on these signals", "I'm telling you, this works",
      "easy money", "let's get this bread", "who else caught that move?",
      "I called it yesterday", "wait till you see my next trade", "the haters will be quiet",
      "I'm up 40% this month", "my wife even believes now", "this is life-changing",
      "I love this community", "we're all gonna make it", "just doubled my account",
      "insane accuracy", "the algorithm is unstoppable", "I'm never going back to 9-5",
      "financial freedom loading", "my broker is probably mad", "keep up the good work everyone",
      "I'm telling my friends", "best decision I ever made", "this is the real deal",
      "proud of everyone in here", "let's keep winning together"
    ],
    testimonial: [
      "I was skeptical at first, but now I'm a believer. Hit +89% on EUR/USD!",
      "Finally a group that delivers real results. Withdrew my first profit today!",
      "Been following for 2 weeks, accuracy is insane.", "Best signal community I've joined.",
      "If you're new, trust the process. Up 3 days straight.", "Not a bot, real person. This works.",
      "Took me a while, but now I'm consistent. Thanks team.", "I started with $100, now $450 in two weeks.",
      "Support team is super helpful.", "I love the positive energy here.", "I was about to quit trading until I found this.",
      "Combined with my own analysis, deadly.", "I'm not a pro, but I'm making profits.", 
      "Accuracy is way higher than any free signal.", "10 wins in a row! Insane.", "Recommending to all my friends.",
      "Finally a service that doesn't disappear.", "Transparency is refreshing.", "Learned so much just watching the chat.",
      "Changed my perspective on trading.", "Full-time trader now thanks to the skills I learned here.",
      "Withdrew $500 yesterday!", "Signal hit TP in 2 minutes.", "Best $50 I ever spent.",
      "Account grew 200% in one month.", "I'm finally profitable after years.", 
      "This gave me the confidence to trade live.", "No more gambling, real edge.", 
      "I was about to quit, you guys saved me.", "New update made signals even faster.",
      "Verification was quick, funds safe.", "VIP room totally worth it.",
      "Referral bonus covered my subscription.", "Psychology lessons helped more than signals.",
      "I can show consistent profits to my wife!", "Passed my challenge account with these signals.",
      "Even my broker noticed improvement.", "This is the real deal, don't miss out."
    ],
    advice: [
      "wait for confirmation before entry", "never risk more than 2%", "always use stop loss",
      "don't revenge trade", "stick to the plan", "patience is key", "trade with the trend",
      "avoid news spikes if you're new", "use proper lot size", "keep a trading journal",
      "review your losses", "don't overtrade", "take breaks", "emotions are the enemy",
      "trust the process", "learn from mistakes", "consistency over home runs",
      "protect your capital", "cut losses quickly", "let winners run", "don't chase the market",
      "wait for your setup", "quality over quantity", "know when to sit out", "don't trade tired",
      "have a routine", "backtest before going live", "forward test on demo", "master one pair first",
      "keep it simple", "overtrading is the enemy", "focus on process, not profit",
      "risk only what you can afford to lose", "never trade under pressure", "set daily loss limit",
      "take profits regularly", "don't be greedy", "the market will always be there",
      "there's always another trade", "don't marry a position", "be flexible",
      "adapt to market conditions", "session matters", "liquidity is key", "avoid exotic pairs",
      "major pairs are more predictable", "check higher timeframe trend", "don't trade during rollover",
      "use a demo first", "paper trade until consistent", "start small, scale up",
      "if in doubt, stay out", "the best traders are bored"
    ]
  };

  // Typos / slang for informal personas
  function applyTypos(text, persona) {
    if (persona.traits.typoRate < Math.random()) return text;
    // simple typo: swap two adjacent letters in a random word
    const words = text.split(' ');
    if (words.length < 3) return text;
    const idx = Math.floor(Math.random() * words.length);
    const word = words[idx];
    if (word.length < 4) return text;
    const pos = Math.floor(Math.random() * (word.length - 1));
    const chars = word.split('');
    [chars[pos], chars[pos + 1]] = [chars[pos + 1], chars[pos]];
    words[idx] = chars.join('');
    return words.join(' ');
  }

  function applySlang(text, persona) {
    if (persona.traits.slang < Math.random()) return text;
    // simple slang replacements
    const slangMap = {
      "going to": "gonna", "want to": "wanna", "you all": "y'all", "I am": "I'm",
      "you are": "you're", "cannot": "can't", "do not": "don't", "does not": "doesn't"
    };
    for (const [key, val] of Object.entries(slangMap)) {
      if (Math.random() < 0.5 && text.includes(key)) {
        text = text.replace(new RegExp(key, 'g'), val);
      }
    }
    return text;
  }

  // ========== ROTATING WITHDRAWAL PROOF IMAGES (20) ==========
  const proofImages = Array.from({ length: 20 }, (_, i) => `assets/withdrawals/proof_${i + 1}.jpg`);
  let proofQueue = [...proofImages].sort(() => Math.random() - 0.5);
  const recentlyUsedProofs = new Map(); // url -> timestamp
  const PROOF_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes

  function getNextProofImage() {
    const now = Date.now();
    // clean expired cooldowns
    for (const [url, ts] of recentlyUsedProofs.entries()) {
      if (now - ts > PROOF_COOLDOWN_MS) recentlyUsedProofs.delete(url);
    }
    // find first image not on cooldown
    let image = null;
    for (let i = 0; i < proofQueue.length; i++) {
      const url = proofQueue[i];
      if (!recentlyUsedProofs.has(url)) {
        image = url;
        proofQueue.splice(i, 1);
        break;
      }
    }
    if (!image) {
      // all images are on cooldown, pick the oldest used
      image = proofQueue.shift();
      recentlyUsedProofs.delete(image);
    }
    proofQueue.push(image);
    recentlyUsedProofs.set(image, now);
    return image;
  }

  // ========== CHAT SIMULATION ==========
  const chatColumn = document.getElementById('communityChatColumn');
  if (!chatColumn) return;

  function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function getRandomPersona() { return personaNames[randomInt(0, personaNames.length - 1)]; }

  // Track recently used messages to prevent repeats
  const recentMessagesText = new Set();
  const MAX_RECENT_MSGS = 100;

  function getRandomMessage(persona) {
    // pick a category based on persona traits (some types more likely)
    const categories = Object.keys(messageCategories);
    // admins tend to give advice, leaders hype, newbies ask questions, etc.
    let preferred = ['general'];
    if (persona.admin) preferred = ['advice', 'hype', 'general'];
    else if (persona.traits.archetype === 'boss') preferred = ['hype', 'flex', 'advice'];
    else if (persona.traits.archetype === 'analyst') preferred = ['question', 'advice', 'general'];
    else if (persona.traits.archetype === 'joker') preferred = ['general', 'hype'];
    else if (persona.traits.archetype === 'newbie') preferred = ['question', 'general'];
    else if (persona.traits.archetype === 'lurker') preferred = ['general'];
    else preferred = ['general', 'result', 'hype'];

    // pick category
    const cat = preferred[Math.floor(Math.random() * preferred.length)] || 'general';
    const bank = messageCategories[cat] || messageCategories.general;

    // find a message not recently used
    let msg = null;
    for (let i = 0; i < 20; i++) {
      const candidate = bank[Math.floor(Math.random() * bank.length)];
      if (!recentMessagesText.has(candidate)) {
        msg = candidate;
        break;
      }
    }
    if (!msg) msg = bank[Math.floor(Math.random() * bank.length)]; // fallback

    // add to recent set, limit size
    recentMessagesText.add(msg);
    if (recentMessagesText.size > MAX_RECENT_MSGS) {
      const iter = recentMessagesText.values();
      recentMessagesText.delete(iter.next().value);
    }

    // apply persona's style
    msg = applySlang(msg, persona);
    msg = applyTypos(msg, persona);

    // add emojis based on slang level
    if (persona.traits.slang > 0.6 && Math.random() > 0.4) {
      const emojis = ['😂', '🔥', '🚀', '😎', '🤣', '👍', '💰'];
      msg += ' ' + emojis[Math.floor(Math.random() * emojis.length)];
    }

    return msg;
  }

  function formatRelativeTime(minutesAgo) {
    if (minutesAgo < 1) return 'Just now';
    if (minutesAgo < 60) return `${minutesAgo} min${minutesAgo > 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutesAgo / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours % 12 || 12}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
  }

  function createChatCard(persona, message, isProof, proofAmount, timestamp) {
    const badgeHtml = persona.admin
      ? '<span class="chat-msg-badge badge-admin">Admin</span>'
      : (persona.vip > 0 ? `<span class="chat-msg-badge badge-vip">VIP ${persona.vip}</span>` : '');

    let proofHtml = '';
    if (isProof && proofAmount > 0) {
      const proofImageUrl = getNextProofImage();
      proofHtml = `<div class="chat-proof-card">
        <div class="chat-proof-top">
          <div class="chat-proof-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m5 13 4 4L19 7"/></svg></div>
          <div class="chat-proof-title">Withdrawal Successful</div>
        </div>
        <img src="${proofImageUrl}" alt="Withdrawal Proof" style="width:100%; border-radius:12px; margin-top:8px; display:block;" onerror="this.style.display='none'">
        <div style="margin-top:6px; font-size:13px; font-weight:600; color:#e5e7eb;">Amount: ₦${proofAmount.toLocaleString()}.00</div>
      </div>`;
    }

    // Avatar handling
    let avatarHtml;
    if (persona.isFallback) {
      avatarHtml = `<div class="chat-msg-avatar" style="background:${persona.admin?'rgba(245,158,11,.22)':'rgba(168,85,247,.22)'}">${persona.initials}</div>`;
    } else {
      avatarHtml = `<img class="chat-msg-avatar-img" src="${persona.avatar}" alt="${persona.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" style="width:36px;height:36px;border-radius:50%;object-fit:cover;">
                    <div class="chat-msg-avatar" style="display:none;background:${persona.admin?'rgba(245,158,11,.22)':'rgba(168,85,247,.22)'}">${persona.initials}</div>`;
    }

    const timeAgo = Math.floor((Date.now() - timestamp) / 60000);
    const relativeTime = formatRelativeTime(timeAgo);

    return `<div class="community-chat-card">
      <div class="chat-msg-top">
        ${avatarHtml}
        <div>
          <div class="chat-msg-name">${persona.name} ${badgeHtml}</div>
          <div style="font-size:11px;color:#6b7280;">${relativeTime}</div>
        </div>
      </div>
      <div class="chat-msg-body">${message}</div>
      ${proofHtml}
      <div class="chat-reactions">
        <div class="chat-reaction">👍 ${randomInt(5,99)}</div>
        <div class="chat-reaction">❤️ ${randomInt(2,50)}</div>
        ${randomInt(0,1)?'<div class="chat-reaction">🔥 '+randomInt(1,30)+'</div>':''}
        ${randomInt(0,1)?'<div class="chat-reaction">🚀 '+randomInt(1,20)+'</div>':''}
      </div>
      <div class="chat-msg-time">${formatTime(new Date(timestamp))}</div>
    </div>`;
  }

  function addRandomChatMessage() {
    const persona = getRandomPersona();
    const isProof = Math.random() < 0.25 && (persona.vip >= 1 || persona.admin);
    const proofAmount = isProof ? randomInt(10000, 500000) : 0;
    const delay = randomInt(0, 900) * 1000; // up to 15 min
    const timestamp = Date.now() - delay;
    const cardHtml = createChatCard(persona, getRandomMessage(persona), isProof, proofAmount, timestamp);
    chatColumn.insertAdjacentHTML('afterbegin', cardHtml);
    while (chatColumn.children.length > 80) chatColumn.removeChild(chatColumn.lastChild);
  }

  function updateOnlineMembers() {
    const onlineCount = randomInt(800, 1800);
    document.getElementById('onlineCount').textContent = `${onlineCount.toLocaleString()} Online`;
    document.getElementById('sidebarOnlineCount').textContent = onlineCount.toLocaleString();
    document.getElementById('onlineStatCount').textContent = onlineCount.toLocaleString();

    const numVisible = randomInt(4, 8);
    const shuffled = [...personaNames].sort(() => 0.5 - Math.random());
    const onlinePersonas = shuffled.slice(0, numVisible);
    document.getElementById('sidebarOnlineMembers').innerHTML = onlinePersonas.map(p => {
      const badgeHtml = p.admin
        ? '<span class="chat-msg-badge badge-admin">Admin</span>'
        : (p.vip > 0 ? `<span class="chat-msg-badge badge-vip">VIP ${p.vip}</span>` : '');
      return `<div class="sidebar-member-row">
        <div class="sidebar-member-avatar" style="background:${p.admin?'rgba(245,158,11,.18)':'rgba(168,85,247,.18)'}">${p.initials}</div>
        <span class="sidebar-member-name">${p.name} ${badgeHtml}</span>
      </div>`;
    }).join('');
  }

  function updateLiveWithdrawals() {
    const withdrawals = [];
    for (let i = 0; i < 3; i++) {
      const persona = getRandomPersona();
      const amount = randomInt(5000, 200000);
      const method = ['Bank Transfer','USDT (TRC20)','Opay','E-Wallet'][randomInt(0,3)];
      const timeAgo = randomInt(1, 59);
      withdrawals.push({ persona, amount, method, timeAgo });
    }
    document.getElementById('liveWithdrawalsFeed').innerHTML = withdrawals.map(w => `
      <div class="live-withdrawal-row">
        <div class="live-wd-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m5 13 4 4L19 7"/></svg></div>
        <div class="live-wd-info">
          <div class="live-wd-name">${w.persona.name}</div>
          <div class="live-wd-loc">${w.method}</div>
        </div>
        <div>
          <div class="live-wd-amount">₦${w.amount.toLocaleString()}</div>
          <div class="live-wd-time">${w.timeAgo} mins ago</div>
        </div>
      </div>`).join('');
  }

  function startCommunitySimulation() {
    for (let i = 0; i < 8; i++) addRandomChatMessage();
    updateOnlineMembers();
    updateLiveWithdrawals();

    setInterval(() => {
      if (!document.getElementById('communityView')?.classList.contains('active')) return;
      addRandomChatMessage();
      if (Math.random() < 0.3) { updateOnlineMembers(); updateLiveWithdrawals(); }
    }, 8000);

    setInterval(() => {
      if (!document.getElementById('communityView')?.classList.contains('active')) return;
      updateOnlineMembers();
      updateLiveWithdrawals();
    }, 45000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startCommunitySimulation);
  else startCommunitySimulation();
})();
