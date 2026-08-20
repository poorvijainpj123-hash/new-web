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
        geography: `North India is mostly located on the main landmass of India, north of the peninsular part. To the north, the Himalayas form a natural boundary between the Indian subcontinent and the Tibetan plateau. To the west, you will find the Thar desert, which is shared with Pakistan. Beyond the Aravalli Range to the west is the state of Gujarat. Some people consider the Vindhya mountains as the southern edge of North India.

        The main geographical features of North India are

        The Indo-Gangetic Plain, a large flat area covering states like Punjab, Haryana, Uttar Pradesh, and parts of Bihar and West Bengal.
        The Himalayas, towering mountains found in Uttarakhand, Himachal Pradesh, and Jammu and Kashmir.
        The Thar Desert, a large desert mainly in Rajasthan.
        States like Madhya Pradesh, Himachal Pradesh, Uttarakhand, and Chhattisgarh also have large areas covered by forests.`,
        climate: `North India is mostly in the northern temperate zone of the Earth. This means it generally has cool or cold winters, hot summers, and moderate monsoon rains. However, North India has a very diverse climate.

During summer, temperatures often go above 35 °C (95 °F) across the Indo-Gangetic plain. In the Thar desert and Rajasthan, it can reach as high as 50 °C (122 °F). Delhi can also get up to 49 °C (120 °F). In winter, temperatures on the plains can drop below 5 °C (41 °F), and even below freezing in some states. Himachal Pradesh, Jammu and Kashmir, and Uttarakhand get heavy snowfall. Many parts of North India are known for thick fog during winters.

Some places have seen extreme temperatures. Dras in Jammu and Kashmir recorded -45 °C (-49 °F). It is one of the coldest inhabited places on Earth. Alwar, Rajasthan, recorded a high of 50.6 °C (123 °F).`,
        culture: `North Indian culture has been shaped by influences from Central Asia and Afghanistan. This includes changes in language and traditions. Even before the arrival of Islam, groups like the Kushan Empire from Bactria (modern-day Afghanistan) had a big impact. They even had twin capitals, one in Mathura (India) and one in Peshawar (Pakistan).`,
        languages: `The Northern Indo-Aryan languages, also known as Pahāṛi languages, are a group of Indo-Aryan languages. People speak these languages in the lower parts of the Himalayas. This region stretches from Nepal in the east to parts of India. These Indian states include Jammu and Kashmir, Uttarakhand, Himachal Pradesh, and Punjab.

The word 'Pahar' means 'mountain' in many local languages. This includes Nepali and Hindi. Because these languages are spoken in the Himalayan region, they are also called Himalayan languages. Like other languages in this area, Pahari languages belong to the Indo-European family. More specifically, they are part of the Indo-Iranian branch. The name "Pahari languages" was first used by a scholar named G. A. Grierson.`,
        traditions: `In North Indian traditions, there are six distinct seasons:

Summer (grishma or garmi): May–June
Rainy (varsha): July–August
Cool (sharad): September–October (early autumn)
Autumn (hemant or patjhar): November–December (leaf-fall)
Winter (shishir or sardi): January–February
Spring (vasant): March–April
These seasons are often mentioned in the region's literature, poetry, and folklore. In mountainous areas, winter is sometimes divided into "big winter" and "little winter."

People and Religions of North India
Most people in North India belong to the Indo-Aryan language group. This includes various ethnic groups like Brahmins, Rajputs, Banias, Jats, and Dalits. There are also smaller groups who speak Dravidian, Tibeto-Burman, and Austroasiatic languages.

Religions Practiced
Hinduism is the main religion in North India. Many other religions are also practiced by different communities:

Islam
Sikhism
Jainism
Zoroastrianism
Judaism
Bahá'í
Christianity
Buddhism
States like Uttarakhand, Rajasthan, Haryana, Madhya Pradesh, Gujarat, and Himachal Pradesh are mostly Hindu. Uttar Pradesh, Bihar, and West Bengal have Hindu majorities, but also a large number of Muslims. Jammu and Kashmir is a Muslim-majority state. Punjab has a Sikh-majority population.`,
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
        geography: `South India is mostly a peninsula. This means it is surrounded by water on three sides. The Arabian Sea is to the west, the Bay of Bengal is to the east, and the Indian Ocean is to the south. The Western Ghats and Eastern Ghats are two mountain ranges that run along the coasts. The highest point in South India is Anamudi peak in Kerala. It stands at 2,695 meters (8,842 feet) tall.`,
        climate: `The climate in South India is mostly tropical. This means it is warm all year round. The region gets a lot of rain, especially during the monsoon season. This helps the land stay green and fertile.`,
        culture: 'Known as the heartland of Dravidian civilization, South India preserves Vedic traditions in temples, classical arts like Bharatanatyam, and ancient languages like Tamil and Telugu.',
        languages: `The people of South India are diverse. They speak several different languages. The main languages are Tamil, Telugu, Kannada, and Malayalam. These languages belong to the Dravidian language family. English and Urdu are also spoken in some areas.`,
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
