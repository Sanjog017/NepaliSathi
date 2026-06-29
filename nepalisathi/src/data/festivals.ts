export interface Festival {
  id: string;
  name: string;
  alternateName: string;
  description: string;
  shortDescription: string;
  significance: string;
  date: string;
  duration: string;
  image: string;
  traditions: string[];
  locations: string[];
  color: string;
}

export const festivals: Festival[] = [
  {
    id: 'dashain',
    name: 'Dashain',
    alternateName: 'दशैं',
    description:
      'Dashain is the longest and most important festival in Nepal, celebrated by Hindus across the country. It commemorates the victory of the goddess Durga over the demon Mahishasura, symbolizing the triumph of good over evil. Families gather from across the globe, homes are cleaned and decorated, and the atmosphere is filled with joy and devotion. The festival spans fifteen days, with the most important days being Ghatasthapana, Maha Ashtami, Maha Navami, and Vijaya Dashami.',
    shortDescription:
      'The longest and most auspicious festival celebrating the victory of good over evil.',
    significance:
      'Dashain represents the victory of divine power over demonic forces. It is a time for family reunions, receiving blessings from elders, and celebrating prosperity.',
    date: 'September–October (Ashwin)',
    duration: '15 days',
    image: 'https://images.unsplash.com/photo-1629049489078-b6cac0d5d8c6?w=800&q=80',
    traditions: [
      'Flying kites from rooftops',
      'Building bamboo swings (ping)',
      'Receiving tika and jamara from elders on the tenth day',
      'Worshiping the goddess Durga at home and in temples',
      'Feasting on goat meat and special delicacies',
      'Playing cards and socializing with family',
      'Shopping for new clothes',
    ],
    locations: ['Nationwide', 'Kathmandu Valley', 'Bhaktapur', 'Patan'],
    color: 'bg-red-50 border-red-200 text-red-700',
  },
  {
    id: 'tihar',
    name: 'Tihar',
    alternateName: 'तिहार',
    description:
      'Tihar, also known as the festival of lights, is a five-day Hindu festival celebrated with great enthusiasm across Nepal. Each day is dedicated to honoring different animals and relationships — crows, dogs, cows, and brothers. Homes are illuminated with oil lamps and colorful lights, and intricate rangoli patterns adorn doorsteps. The festival highlights the deep bond between humans and nature.',
    shortDescription:
      'The festival of lights celebrating the bond between humans, animals, and nature.',
    significance:
      'Tihar honors Yamaraj, the god of death, and celebrates the special relationship between siblings. It also acknowledges the role of animals in human life.',
    date: 'October–November (Kartik)',
    duration: '5 days',
    image: 'https://images.unsplash.com/photo-1637168312579-cf3082117709?w=800&q=80',
    traditions: [
      'Offering food to crows (Kaag Tihar)',
      'Worshiping dogs (Kukur Tihar)',
      'Decorating cows and offering garlands (Gai Tihar)',
      'Lighting oil lamps and candles around the house',
      'Creating rangoli at doorways',
      'Sisters praying for brothers\' long life (Bhai Tika)',
      'Fireworks and cultural performances',
    ],
    locations: ['Nationwide', 'Kathmandu Valley', 'Pokhara'],
    color: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    id: 'holi',
    name: 'Holi',
    alternateName: 'होली',
    description:
      'Holi, the festival of colors, marks the arrival of spring and the victory of good over evil. Celebrants throw colored powder and water at each other, dance to festive music, and share sweets. The festival is rooted in the legend of Prahlad and Holika, symbolizing the triumph of devotion over arrogance. In Nepal, the celebration spans two days — one in the hills and one in the Terai region.',
    shortDescription:
      'A joyous celebration of spring with colors, music, and community bonding.',
    significance:
      'Holi commemorates the burning of Holika and the protection of Prahlad, symbolizing faith\'s triumph over evil. It also welcomes the spring season.',
    date: 'March (Falgun)',
    duration: '2 days',
    image: 'https://images.unsplash.com/photo-1615432238356-19c11e396a54?w=800&q=80',
    traditions: [
      'Playing with colored powders and water',
      'Singing and dancing to traditional Holi songs',
      'Visiting friends and family',
      'Sharing sweets like gujiya and malpua',
      'Bonfires on the eve of Holi (Holika Dahan)',
      'Water balloon fights',
    ],
    locations: ['Nationwide', 'Kathmandu', 'Pokhara', 'Bharatpur'],
    color: 'bg-pink-50 border-pink-200 text-pink-700',
  },
  {
    id: 'indra-jatra',
    name: 'Indra Jatra',
    alternateName: 'इन्द्रजात्रा',
    description:
      'Indra Jatra is an eight-day festival celebrated in Kathmandu, dedicated to Indra, the god of rain and king of heaven. The festival features the towering chariot procession of Kumari (the living goddess), masked dances, and the raising of the lingo (ceremonial pole). It marks the end of the monsoon season and is one of the most important cultural events in the Kathmandu Valley.',
    shortDescription:
      'Kathmandu\'s grandest street festival featuring the living goddess Kumari.',
    significance:
      'The festival honors Indra for the autumn harvest and celebrates the living goddess Kumari, a unique tradition of the Newar community.',
    date: 'August–September (Bhadra)',
    duration: '8 days',
    image: 'https://images.unsplash.com/photo-1615432238356-19c11e396a54?w=800&q=80',
    traditions: [
      'Pulling the chariot of Kumari through the streets',
      'Performances of masked dances (Lakhe dance)',
      'Erection of the lingo (ceremonial pole)',
      'Display of the living goddess Kumari',
      'Offerings at Hanuman Dhoka Palace',
    ],
    locations: ['Kathmandu Durbar Square', 'Patan', 'Bhaktapur'],
    color: 'bg-purple-50 border-purple-200 text-purple-700',
  },
  {
    id: 'buddha-jayanti',
    name: 'Buddha Jayanti',
    alternateName: 'बुद्ध जयन्ती',
    description:
      'Buddha Jayanti commemorates the birth, enlightenment, and death of Siddhartha Gautam Buddha. It is one of the most sacred days for Buddhists worldwide, and in Nepal — the birthplace of Buddha — the celebration is especially profound. Pilgrims gather at Lumbini, Swayambhunath, and Boudhanath stupas to offer prayers, light butter lamps, and participate in meditation sessions.',
    shortDescription:
      'Celebrating the life and teachings of Lord Buddha, born in Lumbini, Nepal.',
    significance:
      'Buddha Jayanti marks three key events in Buddha\'s life: his birth in Lumbini, enlightenment in Bodhgaya, and mahaparinirvana in Kushinagar.',
    date: 'April–May (Baisakh)',
    duration: '1 day',
    image: 'https://images.unsplash.com/photo-1586374579358-17d3912ee5fa?w=800&q=80',
    traditions: [
      'Lighting butter lamps at stupas and monasteries',
      'Offering prayers and incense at Buddhist shrines',
      'Meditation and discourse sessions',
      'Donating food and essentials to monks',
      'Visiting Swayambhunath and Boudhanath',
      'Processions carrying Buddha\'s relics',
    ],
    locations: ['Lumbini', 'Swayambhunath', 'Boudhanath', 'Kathmandu'],
    color: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  },
  {
    id: 'tiji',
    name: 'Tiji Festival',
    alternateName: 'तिजी',
    description:
      'Tiji is a three-day religious festival celebrated in the Mustang region of Nepal. It tells the story of the Buddha\'s battle against the demon Lord of Drought to save the kingdom of Mustang from destruction. The festival features mesmerizing masked dances performed by monks in elaborate costumes, accompanied by traditional Tibetan music and chanting.',
    shortDescription:
      'A vibrant three-day festival in Mustang featuring ancient Tibetan masked dances.',
    significance:
      'Tiji reenacts the legend of Buddha\'s victory over the demon Marme, symbolizing the triumph of compassion and wisdom over negativity.',
    date: 'May (Jestha)',
    duration: '3 days',
    image: 'https://images.unsplash.com/photo-1629049489078-b6cac0d5d8c6?w=800&q=80',
    traditions: [
      'Masked dances by Buddhist monks (Cham dance)',
      'Elaborate traditional costumes and ornaments',
      'Ritual chanting and prayers',
      'Street processions in Lo Manthang',
      'Community feasts and gatherings',
    ],
    locations: ['Lo Manthang', 'Mustang', 'Upper Mustang'],
    color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
  },
  {
    id: 'maha-shivaratri',
    name: 'Maha Shivaratri',
    alternateName: 'महाशिवरात्रि',
    description:
      'Maha Shivaratri, the great night of Lord Shiva, is one of the most significant Hindu festivals in Nepal. Thousands of devotees and sadhus from across India and Nepal gather at the Pashupatinath Temple in Kathmandu to offer prayers, meditate, and perform rituals throughout the night. The atmosphere is charged with devotion, with chanting, bhajans, and the burning of sacred fires.',
    shortDescription:
      'The great night of Lord Shiva celebrated with all-night vigils at Pashupatinath.',
    significance:
      'Shivaratri honors Lord Shiva, the destroyer and transformer in the Hindu trinity. It is believed that observing the festival with devotion washes away sins.',
    date: 'February–March (Falgun)',
    duration: '1 day',
    image: 'https://images.unsplash.com/photo-1597152068980-de3bdd0cdb10?w=800&q=80',
    traditions: [
      'All-night vigils and meditation at Shiva temples',
      'Offering water, milk, and bel leaves to the Shiva linga',
      'Fasting by devotees',
      'Processions of holy men (sadhus)',
      'Chanting of Om Namah Shivaya',
      'Visiting Pashupatinath Temple',
    ],
    locations: ['Pashupatinath Temple', 'Kathmandu', 'Nationwide'],
    color: 'bg-blue-50 border-blue-200 text-blue-700',
  },
  {
    id: 'gaijatra',
    name: 'Gai Jatra',
    alternateName: 'गाईजात्रा',
    description:
      'Gai Jatra, or the festival of cows, is a unique celebration observed primarily in the Kathmandu Valley. Families who have lost a loved one during the year participate in a procession leading a decorated cow — or a child dressed as a cow — through the streets. The festival blends grief with humor, featuring satirical performances, comedy sketches, and street theater that help communities cope with loss.',
    shortDescription:
      'A festival that honors the deceased with processions, humor, and satire.',
    significance:
      'Gai Jatra helps families mourning a death by creating a space to express grief through celebration. It also satirizes social and political issues.',
    date: 'August–September (Bhadra)',
    duration: '7 days',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    traditions: [
      'Processions with decorated cows or children dressed as cows',
      'Comedy and satire performances on social issues',
      'Street plays and musical performances',
      'Offering food to the bereaved families',
      'Colorful costumes and face painting',
    ],
    locations: ['Kathmandu Valley', 'Bhaktapur', 'Patan', 'Kirtipur'],
    color: 'bg-green-50 border-green-200 text-green-700',
  },
  {
    id: 'teej',
    name: 'Teej',
    alternateName: 'तीज',
    description:
      'Teej is one of the most important festivals for Hindu women in Nepal, celebrated with fasting, dancing, and prayers for marital bliss. Women dress in red saris and gold jewelry, gather at temples — especially Pashupatinath — and perform traditional dances. The festival culminates in a strict fast observed by married women for the long life of their husbands, while unmarried women pray for a good husband.',
    shortDescription:
      'A women\'s festival of fasting, dancing, and prayers for marital happiness.',
    significance:
      'Teej honors the union of Parvati and Shiva. Women observe a rigorous fast and pray for their husbands\' health and longevity.',
    date: 'August–September (Bhadra)',
    duration: '3 days',
    image: 'https://images.unsplash.com/photo-1597152068980-de3bdd0cdb10?w=800&q=80',
    traditions: [
      'Women dressing in red saris with gold ornaments',
      'Group dancing and singing devotional songs',
      'Visiting Pashupatinath Temple',
      'Observing a strict waterless fast (nirjala)',
      'Applying henna on hands',
      'Swinging on decorated swings',
      'Feasts on the eve of the fast (Dar Khane Din)',
    ],
    locations: ['Nationwide', 'Kathmandu', 'Pashupatinath', 'Pokhara'],
    color: 'bg-red-50 border-red-200 text-red-700',
  },
  {
    id: 'chhath',
    name: 'Chhath',
    alternateName: 'छठ',
    description:
      'Chhath is an ancient Hindu festival dedicated to the Sun God (Surya) and his consort Usha, celebrated mainly in the Terai region of Nepal. For four days, devotees observe strict rituals including fasting, standing in water for hours, and offering arghya (prayers) to the setting and rising sun. It is one of the most environmentally conscious festivals, with offerings made from natural materials.',
    shortDescription:
      'A four-day festival dedicated to the Sun God, celebrated with river-side rituals.',
    significance:
      'Chhath expresses gratitude to the Sun God for sustaining life on Earth and prays for prosperity, health, and well-being of family.',
    date: 'October–November (Kartik)',
    duration: '4 days',
    image: 'https://images.unsplash.com/photo-1629049489078-b6cac0d5d8c6?w=800&q=80',
    traditions: [
      'Standing in water offering prayers to the setting and rising sun',
      'Fasting without water for 36 hours',
      'Preparing traditional offerings in bamboo baskets',
      'Wading into rivers and ponds at sunrise and sunset',
      'Singing folk Chhath songs',
      'Breaking the fast with ginger and molasses',
    ],
    locations: ['Janakpur', 'Terai Region', 'Biratnagar', 'Nepalgunj'],
    color: 'bg-orange-50 border-orange-200 text-orange-700',
  },
  {
    id: 'maghe-sankranti',
    name: 'Maghe Sankranti',
    alternateName: 'माघे संक्रान्ति',
    description:
      'Maghe Sankranti marks the beginning of the month of Magh and the winter solstice, when the sun moves northward. It is celebrated across Nepal with feasts of special foods believed to keep the body warm during winter. The festival is particularly significant for the Tharu and Magar communities in the Terai and mid-hills, who observe it as their new year with cultural programs and communal feasts.',
    shortDescription:
      'A harvest festival celebrating the winter solstice with traditional foods.',
    significance:
      'Maghe Sankranti marks the sun\'s northward journey, symbolizing the end of winter and the start of longer, warmer days.',
    date: 'January (Poush–Magh)',
    duration: '1 day',
    image: 'https://images.unsplash.com/photo-1536964545522-1589e5e3b647?w=800&q=80',
    traditions: [
      'Eating laddus made of sesame seeds and molasses (til ko laddu)',
      'Feasting on yams, sweet potatoes, and ghee',
      'Bathing in holy rivers and confluences',
      'Flying kites from rooftops',
      'Bonfires to keep warm',
      'Communal feasts in Tharu communities',
    ],
    locations: ['Nationwide', 'Janakpur', 'Terai Region', 'Kathmandu'],
    color: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    id: 'lhosar',
    name: 'Lhosar',
    alternateName: 'ल्होसार',
    description:
      'Lhosar is the Tibetan New Year celebrated by the Sherpa, Tamang, Yolmo, and other Himalayan communities in Nepal. Each community celebrates slightly differently — Sonam Lhosar for the Tamang, Gyalpo Lhosar for the Sherpa, and Tamu Lhosar for the Gurung. The festival features colorful masked dances, feasts of traditional foods, family gatherings, and prayers at monasteries for peace and prosperity in the new year.',
    shortDescription:
      'The Tibetan and Himalayan New Year celebrated with dances and family feasts.',
    significance:
      'Lhosar marks the beginning of a new year on the Tibetan lunar calendar and is a time for purification, renewal, and community bonding.',
    date: 'January–February (Magh)',
    duration: '3–5 days',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    traditions: [
      'Masked Cham dances at monasteries',
      'Family reunions and feasts',
      'Wearing traditional attire',
      'Offering prayers and butter lamps at gumbas',
      'Exchanging khata (ceremonial scarves)',
      'Traditional archery competitions',
      'Preparing special dishes like khapse (fried dough)',
    ],
    locations: ['Kathmandu', 'Pokhara', 'Solukhumbu', 'Mustang', 'Helambu'],
    color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
  },
  {
    id: 'bisket-jatra',
    name: 'Bisket Jatra',
    alternateName: 'बिस्केट जात्रा',
    description:
      'Bisket Jatra is a week-long chariot festival celebrated in Bhaktapur to mark the Nepali New Year. The centerpiece is the towering chariot of Lord Bhairav, pulled through narrow streets by hundreds of devotees in a dramatic tug-of-war. The festival also features the erection of a massive lingo (ceremonial pole), traditional music, and the reenactment of ancient legends.',
    shortDescription:
      'Bhaktapur\'s dramatic New Year festival featuring a towering chariot procession.',
    significance:
      'Bisket Jatra celebrates the Nepali New Year and commemorates the victory of good over evil through the legend of Bhairav and the serpent.',
    date: 'April (Chaitra–Baisakh)',
    duration: '7–9 days',
    image: 'https://images.unsplash.com/photo-1545151937-1de76c1a1c4f?w=800&q=80',
    traditions: [
      'Pulling the massive chariot of Lord Bhairav through the streets',
      'Tug-of-war between eastern and western Bhaktapur',
      'Erection of the lingo (ceremonial pole)',
      'Traditional music and masked dances',
      'Reenactment of the serpent legend',
      'Feasting and community gatherings',
    ],
    locations: ['Bhaktapur', 'Kathmandu Valley'],
    color: 'bg-blue-50 border-blue-200 text-blue-700',
  },
  {
    id: 'janai-purnima',
    name: 'Janai Purnima',
    alternateName: 'जनै पूर्णिमा',
    description:
      'Janai Purnima is a sacred thread festival celebrated by Hindus in Nepal. On this full moon day, Hindu men, particularly Brahmins and Kshatriyas, change their sacred thread (janai) after bathing and performing rituals. Many people also tie a sacred thread (rakhi) around their wrists, symbolizing protection. The festival is also Raksha Bandhan, when sisters tie a protective thread on their brothers\' wrists.',
    shortDescription:
      'A sacred thread festival celebrated on the full moon with rituals and protection charms.',
    significance:
      'Janai Purnima signifies purification and renewal. The sacred thread is believed to protect the wearer from evil and misfortune.',
    date: 'August (Shrawan–Bhadra)',
    duration: '1 day',
    image: 'https://images.unsplash.com/photo-1629049489078-b6cac0d5d8c6?w=800&q=80',
    traditions: [
      'Changing the sacred thread (janai) for Hindu men',
      'Tying rakhi (protective thread) on brothers\' wrists',
      'Bathing at holy rivers and ponds',
      'Visiting Shiva temples for prayers',
      'Feasting on kwati (mixed bean soup)',
      'Holding special ceremonies at Gosaikunda Lake',
    ],
    locations: ['Nationwide', 'Kathmandu', 'Gosaikunda', 'Patan'],
    color: 'bg-sky-50 border-sky-200 text-sky-700',
  },
  {
    id: 'yomari-punhi',
    name: 'Yomari Punhi',
    alternateName: 'योमरी पुन्हि',
    description:
      'Yomari Punhi is a Newar festival celebrated on the full moon of December, dedicated to the harvest and the rice god. The highlight is the preparation and sharing of yomari — a steamed dumpling made of rice flour dough filled with chaku (molasses) and sesame seeds, shaped like a fish. Families gather to make yomari together, and offerings are made to the gods for a bountiful harvest.',
    shortDescription:
      'A Newar harvest festival featuring steamed rice-flour dumplings filled with molasses.',
    significance:
      'Yomari Punhi celebrates the conclusion of the rice harvest and honors Annapurna, the goddess of food, for abundance and prosperity.',
    date: 'December (Mangsir–Poush)',
    duration: '1 day',
    image: 'https://images.unsplash.com/photo-1536964545522-1589e5e3b647?w=800&q=80',
    traditions: [
      'Making and eating yomari (steamed rice dumplings)',
      'Family gatherings for dumpling-making',
      'Offering yomari to the gods and ancestors',
      'Visiting friends and neighbors to share yomari',
      'Street performances and cultural programs',
      'Worshiping the rice goddess Annapurna',
    ],
    locations: ['Kathmandu Valley', 'Patan', 'Bhaktapur', 'Kirtipur'],
    color: 'bg-stone-50 border-stone-200 text-stone-700',
  },
  {
    id: 'krishna-janmasthami',
    name: 'Krishna Janmasthami',
    alternateName: 'कृष्ण जन्माष्टमी',
    description:
      'Krishna Janmasthami marks the birth of Lord Krishna, the eighth avatar of Vishnu. The festival is celebrated with great devotion at the Krishna Mandir in Patan Durbar Square, as well as in temples across Nepal. Devotees fast, sing devotional songs, and perform dances reenacting scenes from Krishna\'s childhood. The temples are decorated with lights and flowers, and the atmosphere is filled with bhajans and celebrations.',
    shortDescription:
      'Celebrating the birth of Lord Krishna with devotional songs and temple festivities.',
    significance:
      'Janmasthami celebrates the descent of Lord Krishna, who is revered as a divine teacher, protector, and the embodiment of love and wisdom.',
    date: 'August–September (Bhadra)',
    duration: '1 day',
    image: 'https://images.unsplash.com/photo-1597152068980-de3bdd0cdb10?w=800&q=80',
    traditions: [
      'All-night vigil with singing of bhajans',
      'Fasting until midnight (the hour of Krishna\'s birth)',
      'Decorating Krishna temples with lights and flowers',
      'Dramatization of Krishna\'s childhood stories',
      'Breaking the fast with prasad at midnight',
      'Visiting Patan Krishna Mandir',
    ],
    locations: ['Patan', 'Kathmandu', 'Bhaktapur', 'Nationwide'],
    color: 'bg-cyan-50 border-cyan-200 text-cyan-700',
  },
];
