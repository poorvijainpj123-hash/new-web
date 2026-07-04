/* भारत Cultural Atlas — Content Data */

const ATLAS_DATA = {
  regions: [
    {
      id: 'north',
      name: 'North India',
      hindi: 'उत्तर भारत',
      color: '#A9A9A9', 
      descriptor: 'Peaks, Plains & Prayers',
      overview: 'Crowned by the Himalayas, North India is the cradle of ancient civilizations and spiritual awakening.',
      tabs: {
        geography: 'The northern regions are dominated by the Himalayan mountain range, the fertile Indo-Gangetic plains, and the great Thar Desert. Rivers like the Ganges and Yamuna carve through this landscape, shaping both geography and culture.',
        climate: 'North India experiences four distinct seasons with cold winters and hot, dry summers. Monsoons bring relief from June to September, transforming parched lands into verdant fields.',
        culture: 'North India is the heartland of Sanskrit, Mughal architecture, and classical Indian traditions. The region blends Hindu, Islamic, and Buddhist influences, creating a rich tapestry of art, philosophy, and spirituality.',
        languages: 'Hindi is the dominant language, spoken alongside Punjabi, Urdu, and Sanskrit. Devanagari script is used for most local languages.',
        traditions: 'Yoga, meditation, pilgrimage, and classical music flourish here. The region celebrates Holi, Diwali, and Durga Puja with great fervor.',
        lifestyle: 'From bustling Delhi to spiritual Varanasi, North India balances modernity with ancient traditions. Agriculture remains central, though cities are rapidly urbanizing.'
      },
      states: [
        {
          id: 'rajasthan',
          name: 'Rajasthan',
          hindi: 'राजस्थान',
          capital: 'Jaipur',
          language: 'Rajasthani, Hindi',
          founded: '1950',
          area: '342,239 km²',
          animal: '🐁 Indian Camel',
          flower: '🌸 Rohida',
          hook: 'Land of Kings, Deserts & Eternal Ramparts',
          gradient: 'linear-gradient(135deg, #8B4A9E 0%, #A0645B 50%, #C9A84C 100%)',
          content: {
            geography: 'Rajasthan, the "Land of Kings," covers much of the Thar Desert with vibrant colors, golden sand dunes, and majestic forts. The Aravalli Mountains run through its eastern border, providing dramatic landscapes.',
            history: 'Home to the Rajput kingdoms for centuries. Maharajas ruled from magnificent palaces in Jaipur, Udaipur, and Jodhpur. The pink city of Jaipur was founded in 1727 by Maharaja Sawai Jai Singh II and remains the crown jewel of the state.',
            culture: 'Rajasthani culture is defined by valor, artistry, and a deep connection to the desert. Music, dance, and folk arts thrive in every village. The state is known for its colorful traditions and warm hospitality.',
            traditions: 'Ghoomar dance, Puppet theatre, Holi celebrations with Holika Dahan, and colorful turbans reflect the vibrant spirit of the people. Every festival is celebrated with elaborate rituals and communal joy.',
            artForms: 'Miniature paintings, block printing, tie-and-dye textiles (Bandhani), traditional dance forms like Ghoomar and Kathak, puppet theatre, and ceramic work showcase the artistic heritage.',
            food: 'Dal bati churma, Gatte ki subzi, Ker sangri, Bajra roti, Papad, and Ras malai showcase the rich culinary heritage adapted to desert living and monsoon availability.',
            festivals: 'Teej (July/August) — Monsoon celebration | Diwali — Festival of Lights | Holi — Colors and joy | Pushkar Camel Fair',
            clothing: 'Colorful ghagra cholis (skirts), bandhej sarees, and impressive turbans for men. Women wear dupattas and vibrant odhnis with traditional motifs.',
            famousPlaces: [
              { name: 'Hawa Mahal, Jaipur', type: 'Palace' },
              { name: 'City Palace, Jaipur', type: 'Historical Complex' },
              { name: 'Jodhpur Fort', type: 'Medieval Fort' },
              { name: 'Lake Palace, Udaipur', type: 'Palace' },
              { name: 'Meherangarh Fort', type: 'Fortress' },
              { name: 'Jaisamand Lake', type: 'Water Body' }
            ],
            modernLife: 'Jaipur thrives as a major business hub and tourist destination. Tourism, textiles, gemstone cutting, and handicrafts are significant industries. The Pink City attracts millions of visitors from around the world annually.'
          }
        },
        {
          id: 'punjab',
          name: 'Punjab',
          hindi: 'पंजाब',
          capital: 'Chandigarh',
          language: 'Punjabi, Hindi',
          founded: '1950',
          area: '50,362 km²',
          animal: '🦁 Lion',
          flower: '🌸 Gladiolus',
          hook: 'Granary of India, Land of Five Rivers',
          gradient: 'linear-gradient(135deg, #2A8B7A 0%, #E8871A 50%, #C9A84C 100%)',
          content: {
            geography: 'Punjab stretches across the fertile plains of the Indus and its tributaries. The five rivers—Sutlej, Beas, Ravi, Chenab, and Jhelum—give the region its name and life.',
            history: 'Home to the Sikh faith founded by Guru Nanak Dev Ji in the late 15th century. Amritsar is the spiritual center. Punjab has been a meeting point of empires and cultures throughout history.',
            culture: 'Punjabi culture is known for warmth, vigor, and celebration. Sikhism profoundly shapes the social ethos with its ideals of equality, service, and community.',
            traditions: 'Bhangra dance, Kirtan music, Langar (communal meal), and Gurdwaras (temples) are central to life. The community celebrates with great enthusiasm and participatory spirit.',
            artForms: 'Bhangra and Giddha dances, Punjabi folk music, truck art, phulkari embroidery, pottery, and classical music thrive in the region.',
            food: 'Makki roti with sarson saag, Punjabi chole bhature, Rajma, Paneer tikka, Amritsari kulcha, and sweet lassi are beloved comfort foods.',
            festivals: 'Baisakhi (April) — Harvest | Lohri (January) — Winter | Diwali — Lights and joy | Guru Nanak Jayanti',
            clothing: 'Salwar kameez, chunnis for women, colorful turbans for men. Traditional phulkari embroidery adorns many garments with vibrant patterns.',
            famousPlaces: [
              { name: 'Golden Temple, Amritsar', type: 'Gurdwara' },
              { name: 'Wagah Border', type: 'Border Ceremony' },
              { name: 'Jallianwala Bagh', type: 'Historical Site' },
              { name: 'Harike Wetland', type: 'Nature Reserve' },
              { name: 'Ranthambore Fort', type: 'Historic Fort' },
              { name: 'Nankana Sahib', type: 'Pilgrimage Site' }
            ],
            modernLife: 'Punjab is the granary of India, contributing significantly to food security. Chandigarh is a planned city model. Education and manufacturing sectors are strong. The state is also a major hub for IT and agri-business.'
          }
        }
      ]
    },
    {
      id: 'south',
      name: 'South India',
      hindi: 'दक्षिण भारत',
      color: '#1E90FF',
      descriptor: 'Temples, Spices & Serenity',
      overview: 'South India is a realm of ancient temples, classical arts, and thriving traditions where spirituality and creativity flourish.',
      tabs: {
        geography: 'The Deccan Plateau dominates with the Western and Eastern Ghats framing the coasts. The Arabian Sea, Indian Ocean, and Bay of Bengal bathe the region in tropical warmth.',
        climate: 'South India enjoys a tropical climate with monsoons bringing abundant rain. Coastal areas have year-round warmth and humidity perfect for spice cultivation.',
        culture: 'Known as the heartland of Dravidian civilization, South India preserves Vedic traditions in temples, classical arts like Bharatanatyam, and ancient languages like Tamil and Telugu.',
        languages: 'Tamil, Telugu, Kannada, and Malayalam are major languages, each with distinct scripts and rich literary traditions dating back millennia.',
        traditions: 'Temple festivals, classical dance and music, meditation, and pilgrimage are deeply woven into daily life. Music and arts are revered.',
        lifestyle: 'South India balances ancient wisdom with modern innovation. IT hubs like Bangalore thrive alongside ancient pilgrimage centers and spice markets.'
      },
      states: []
    },
    {
      id: 'east',
      name: 'East India',
      hindi: 'पूर्वी भारत',
      color: '#4CAF50',
      descriptor: 'Rivers, Revolutions & Resilience',
      overview: 'East India, cradled by the Ganges and enriched by the Sundarbans, is a land of historical significance and cultural depth.',
      tabs: {
        geography: 'Dominated by the Ganges river system and the Sundarbans (world\'s largest mangrove forest), East India features plains, deltas, and unique ecosystems.',
        climate: 'Humid subtropical with monsoons, making it lush and green. Hot summers and mild winters characterize the weather.',
        culture: 'Bengalese culture is renowned for literature, arts, and intellectual traditions. Calcutta was a center of Indian Renaissance in the 18th-19th centuries.',
        languages: 'Bengali is the primary language with rich literary traditions. Assamese, Oriya, and others are also spoken across the region.',
        traditions: 'Durga Puja is the grandest festival. Kali worship, classical music, theatre, and literature are central to cultural life.',
        lifestyle: 'From the Himalayan foothills to the mangrove forests, East India is diverse. Urban centers like Kolkata blend history with modernity.'
      },
      states: []
    },
    {
      id: 'west',
      name: 'West India',
      hindi: 'पश्चिम भारत',
      color: '#D4A574',
      descriptor: 'Commerce, Coasts & Colors',
      overview: 'West India, where the Arabian Sea meets the land, is a vibrant blend of trade, tourism, and traditional arts.',
      tabs: {
        geography: 'Includes the Deccan Plateau, Western Ghats, and extensive Arabian Sea coastline. Gujarat and Maharashtra dominate the region with diverse topography.',
        climate: 'Tropical on coasts, semi-arid inland. Monsoon season is critical for agriculture and water resources throughout the region.',
        culture: 'Western India is known for entrepreneurial spirit, film industry, and diverse traditions blending Hindu, Islamic, and Jain influences.',
        languages: 'Gujarati, Marathi, Konkani, and Hindi are widely spoken. Strong literary and musical traditions exist in each language.',
        traditions: 'Navaratri, Diwali, and Holi are celebrated with grandeur. Garba and Dandiya dances are iconic to the region.',
        lifestyle: 'Mumbai is India\'s financial capital. Gujarat thrives in textiles and commerce. Tourism flourishes in Goa and coastal areas with beaches and backwaters.'
      },
      states: []
    },
    {
      id: 'central',
      name: 'Central India',
      hindi: 'मध्य भारत',
      color: '#B8860B',
      descriptor: 'Forests, Fortresses & Folk Wisdom',
      overview: 'Central India is the green heartland, rich with forests, tribal traditions, and historical monuments.',
      tabs: {
        geography: 'Covered with dense forests, the Vindhya and Satpura mountain ranges, and river systems like the Narmada flowing through.',
        climate: 'Tropical to subtropical with significant monsoon influence. Forests create a humid microclimate sustaining biodiversity.',
        culture: 'Tribal communities preserve ancient traditions. Buddhist and Hindu heritage sites dot the landscape with spiritual significance.',
        languages: 'Hindi and local tribal languages predominate. Marathi in parts. Rich oral traditions passed through generations.',
        traditions: 'Tribal festivals, forest festivals, and Hindu pilgrimage sites are important. Community life and collective rituals are strong.',
        lifestyle: 'Mining and forestry are traditional livelihoods. Tourism is growing, especially around heritage sites like Khajuraho and Sanchi.'
      },
      states: []
    },
    {
      id: 'northeast',
      name: 'North-East India',
      hindi: 'उत्तर-पूर्व भारत',
      color: '#2D7D4D',
      descriptor: 'Mountains, Migrations & Mysteries',
      overview: 'North-East India, with its misty mountains and diverse cultures, is a frontier of unique traditions and natural beauty.',
      tabs: {
        geography: 'The Himalayan foothills, the Brahmaputra valley, and the Shillong plateau dominate. Lush forests and hill stations characterize the region.',
        climate: 'High rainfall, cool temperatures in highlands. Forests thrive year-round. Diverse microclimates across the region support varied ecosystems.',
        culture: 'Highly diverse with multiple ethnic groups. Buddhism, Christianity, and indigenous beliefs coexist peacefully in a pluralistic society.',
        languages: 'Assamese, Manipuri, Naga languages, and others. Each group has distinct linguistic identity and rich oral traditions.',
        traditions: 'Unique festivals like Bihu, Hornbill Festival, and traditional dances reflect cultural diversity and regional pride.',
        lifestyle: 'Tea gardens, agriculture, handicrafts, and tourism form the economic base. Strong community bonds and unique social structures prevail.'
      },
      states: []
    }
  ],

  quotes: [
    { text: "India is the cradle of the human race, the birthplace of human speech, the mother of history, the grandmother of legend, and the great grandmother of tradition.", author: 'Mark Twain' },
    { text: "In a day, when you don't come across any problems - you can be sure that you are not trying to live - you are just existing.", author: 'Swami Vivekananda' },
    { text: "Where can we go to find God if we cannot see Him in our own hearts and in every living being.", author: 'Swami Vivekananda' },
    { text: "Unity in diversity is India's eternal mantra.", author: 'Jawaharlal Nehru' },
    { text: "एकता में अनेकता - Unity in Diversity", author: 'Indian Philosophy' }
  ]
};
