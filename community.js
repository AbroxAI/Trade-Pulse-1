(function() {
  // ========== 150 PERSONAS FROM THE AI ENGINE ==========
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

  // Build persona list with VIP levels and avatar info
  const personaNames = personaData.map((p, i) => {
    // Assign VIP levels: 0 (60%), 1 (25%), 2 (10%), 3 (5%)
    let vip = 0;
    const rand = Math.random();
    if (rand < 0.6) vip = 0;
    else if (rand < 0.85) vip = 1;
    else if (rand < 0.95) vip = 2;
    else vip = 3;

    // Make some personas admins (just one for now)
    const admin = (p.name === "Ngozi Wealth") ? true : false; // we don't have that, so none for now

    // Generate safe filename for avatar
    const safeName = p.name
      .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') // remove emojis
      .replace(/[^\w\s]/g, '') // remove punctuation
      .trim()
      .replace(/\s+/g, '_')
      .toLowerCase();

    const avatarPath = p.isFallback
      ? `https://ui-avatars.com/api/?name=${p.name.split(' ')[0][0]}+${p.name.split(' ').pop()[0]}&background=2f5b9c&color=fff&size=200&bold=true`
      : `assets/avatars/${safeName}.jpg`;

    return {
      name: p.name,
      vip,
      admin,
      avatar: avatarPath,
      isFallback: p.isFallback,
      initials: p.name.split(' ').map(n => n[0]).join('').toUpperCase()
    };
  });

  const chatColumn = document.getElementById('communityChatColumn');
  if (!chatColumn) return;

  function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function getRandomPersona() { return personaNames[randomInt(0, personaNames.length - 1)]; }

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

  function createChatCard(persona, message, isProof = false, proofAmount = 0, timestamp) {
    const initials = persona.initials;
    const badgeHtml = persona.admin
      ? '<span class="chat-msg-badge badge-admin">Admin</span>'
      : (persona.vip > 0 ? `<span class="chat-msg-badge badge-vip">VIP ${persona.vip}</span>` : '');

    let proofHtml = '';
    if (isProof && proofAmount > 0) {
      const bank = ['GTBank', 'Access Bank', 'First Bank', 'UBA', 'Zenith Bank'][randomInt(0, 4)];
      proofHtml = `<div class="chat-proof-card">
        <div class="chat-proof-top">
          <div class="chat-proof-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m5 13 4 4L19 7"/></svg></div>
          <div class="chat-proof-title">Withdrawal Successful</div>
        </div>
        <div class="chat-proof-amount">₦ ${proofAmount.toLocaleString()}.00</div>
        <div class="chat-proof-sub">To ${bank} • ${new Date().toLocaleDateString()}</div>
      </div>`;
    }

    // Avatar: try image, fallback to initials
    const avatarHtml = persona.isFallback
      ? `<div class="chat-msg-avatar" style="background:${persona.admin ? 'rgba(245,158,11,.22)' : 'rgba(168,85,247,.22)'}">${initials}</div>`
      : `<img class="chat-msg-avatar-img" src="${persona.avatar}" alt="${persona.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" style="width:36px;height:36px;border-radius:50%;object-fit:cover;">
         <div class="chat-msg-avatar" style="display:none;background:${persona.admin ? 'rgba(245,158,11,.22)' : 'rgba(168,85,247,.22)'}">${initials}</div>`;

    const timeAgo = Math.floor((Date.now() - timestamp) / 60000); // minutes ago
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
        <div class="chat-reaction">👍 ${randomInt(5, 99)}</div>
        <div class="chat-reaction">❤️ ${randomInt(2, 50)}</div>
        ${randomInt(0, 1) ? '<div class="chat-reaction">🔥 ' + randomInt(1, 30) + '</div>' : ''}
        ${randomInt(0, 1) ? '<div class="chat-reaction">🚀 ' + randomInt(1, 20) + '</div>' : ''}
      </div>
      <div class="chat-msg-time">${formatTime(new Date(timestamp))}</div>
    </div>`;
  }

  const messageTemplates = [
    (p) => `Just received another payout! This platform never disappoints. Keep investing and stay consistent! 🚀`,
    (p) => `I started with ₦5,000 and now look at my balance growing daily. Consistency is key!`,
    (p) => `Wow! Just got my withdrawal in minutes. This is the best investment platform ever! 💯`,
    (p) => `For new members: start with the Beginner Plan, reinvest profits, and scale up gradually.`,
    (p) => `Anyone else feeling bullish today? The market is looking great! 📈`,
    (p) => `Just upgraded to ${p.vip >= 2 ? 'VIP ' + p.vip : 'Standard Plan'} and the profits are amazing!`,
    (p) => `Happy Friday everyone! Keep pushing, keep earning. 💪`,
    (p) => `Thanks to the admin for the quick support. You guys rock! 🎉`,
    (p) => `Another day, another profit. Who else is cashing out today? 💸`,
    (p) => `I referred my cousin and got my bonus instantly. This referral program is lit! 🔥`,
    (p) => `Just hit ₦500,000 in total profits! Hard work and patience pays off. 🙏`,
    (p) => `Can't believe how fast the withdrawals are. Just received in under 5 minutes.`,
    (p) => `Best decision I made this year was joining this community. 💰`,
    (p) => `Good morning fam! May today bring us massive profits. 🌅`,
    (p) => `If you're still doubting, just take the first step. You won't regret it.`,
    (p) => `Who's ready for the weekend? Let's finish strong! 🚀`,
    (p) => `I see a lot of new members. Welcome aboard! Let's grow together.`,
    (p) => `Just reinvested ₦100,000. Watch me hit ₦1M soon! 😎`,
    (p) => `Consistency is the secret. Don't give up!`,
    (p) => `Can we get some fire emojis for the team? 🔥🔥🔥`,
    (p) => `My account just got upgraded automatically. VIP perks are awesome!`,
    (p) => `Friday payouts are the best! Who else got paid today?`,
    (p) => `Shoutout to the admin team. You guys are the real MVPs.`,
    (p) => `Never seen a platform this transparent. Every penny accounted for.`,
    (p) => `Just hit my first ₦50,000 profit. Feeling grateful! 🥳`,
    (p) => `To the newbies: stay consistent and you'll see results. Trust the process.`
  ];

  function getRandomMessage(persona) {
    return messageTemplates[randomInt(0, messageTemplates.length - 1)](persona);
  }

  // Staggered messages: create fake timestamps in the past
  function addRandomChatMessage() {
    const persona = getRandomPersona();
    const isProof = Math.random() < 0.3 && persona.vip >= 1;
    const proofAmount = isProof ? randomInt(10000, 500000) : 0;
    // Create a random timestamp within the last 10 minutes
    const delay = randomInt(0, 600) * 1000; // 0 to 10 minutes ago in milliseconds
    const timestamp = Date.now() - delay;
    const cardHtml = createChatCard(persona, getRandomMessage(persona), isProof, proofAmount, timestamp);
    chatColumn.insertAdjacentHTML('afterbegin', cardHtml);
    while (chatColumn.children.length > 50) {
      chatColumn.removeChild(chatColumn.lastChild);
    }
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
        <div class="sidebar-member-avatar" style="background:${p.admin ? 'rgba(245,158,11,.18)' : 'rgba(168,85,247,.18)'}">${p.initials}</div>
        <span class="sidebar-member-name">${p.name} ${badgeHtml}</span>
      </div>`;
    }).join('');
  }

  function updateLiveWithdrawals() {
    const withdrawals = [];
    for (let i = 0; i < 3; i++) {
      const persona = getRandomPersona();
      const amount = randomInt(5000, 200000);
      const method = ['Bank Transfer', 'USDT (TRC20)', 'Opay', 'E-Wallet'][randomInt(0, 3)];
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
    // Populate with initial staggered messages
    for (let i = 0; i < 5; i++) {
      addRandomChatMessage();
    }
    updateOnlineMembers();
    updateLiveWithdrawals();

    setInterval(() => {
      if (!document.getElementById('communityView')?.classList.contains('active')) return;
      addRandomChatMessage();
      if (Math.random() < 0.3) {
        updateOnlineMembers();
        updateLiveWithdrawals();
      }
    }, 8000);

    setInterval(() => {
      if (!document.getElementById('communityView')?.classList.contains('active')) return;
      updateOnlineMembers();
      updateLiveWithdrawals();
    }, 45000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startCommunitySimulation);
  } else {
    startCommunitySimulation();
  }
})();
