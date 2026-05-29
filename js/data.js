/* भारत Cultural Atlas — Content Data */

function makeStateStub({
  id,
  regionId,
  nameEn,
  nameHi,
  hook,
  capital,
  language,
  founded,
  area,
  animal,
  flower,
  gradient,
  places = [],
  blurb = '',
}) {
  const intro = blurb || `${nameEn} holds a distinct place in India’s cultural map—heritage, landscape, and living traditions woven into everyday life.`;
  const defaultPlaces =
    places.length > 0
      ? places
      : [
          { name: capital, type: 'Capital' },
          { name: `${nameEn} Heritage Circuit`, type: 'Culture' },
          { name: 'Regional Museum', type: 'Museum' },
        ];

  return {
    id,
    regionId,
    nameEn,
    nameHi,
    hook,
    capital,
    language,
    founded,
    area,
    animal,
    flower,
    gradient:
      gradient ||
      'linear-gradient(160deg, #0D0905 0%, #1C1108 50%, #3d2a1a 100%)',
    sections: {
      geography: { title: 'Geography', icon: '🗺', content: `${intro} Terrain ranges from river plains to highlands, shaping settlement, agriculture, and seasonal rhythms across the state.` },
      history: { title: 'History', icon: '📜', content: `Layers of dynasties, colonial administration, and the freedom movement left forts, monuments, and archives. ${nameEn} took its present shape through 20th-century state reorganization and continues to honor local heroes and national milestones.` },
      culture: { title: 'Culture', icon: '🎭', content: `Folk performance, temple and community life, and regional literature define identity. Markets, fairs, and family rituals pass music, craft, and values from one generation to the next.` },
      traditions: { title: 'Traditions', icon: '🪘', content: `Harvest thanksgiving, life-cycle ceremonies, and faith observances mark the calendar. Hospitality—feeding guests and honoring elders—remains central to social life.` },
      art: { title: 'Art Forms', icon: '🎨', content: `Handloom textiles, wood and metal craft, and classical or folk dance traditions thrive alongside contemporary film, design, and digital arts rooted in local stories.` },
      food: { title: 'Food', icon: '🍛', content: `Staple grains, seasonal vegetables, and distinctive spice blends shape the cuisine. Street snacks, festival sweets, and home-cooked thalis reflect both agrarian bounty and urban fusion.` },
      festivals: { title: 'Festivals', icon: '🎉', content: `Diwali, Holi, Eid, Christmas, and regional harvest festivals bring streets alive with light, music, and shared meals. Local melas and temple utsavs draw pilgrims and tourists alike.` },
      clothing: { title: 'Clothing', icon: '👘', content: `Traditional dress varies by community—draped garments, embroidered shawls, and tailored suits appear at weddings and festivals, often paired with modern everyday wear in cities.` },
      languages: { title: 'Languages', icon: '🗣', content: `Primary languages include ${language}. Hindi and English serve administration and education; older dialects and tribal tongues enrich villages and border districts.` },
      places: { title: 'Famous Places', icon: '🏛', places: defaultPlaces },
      modern: { title: 'Modern Life', icon: '🌆', content: `${capital} anchors governance, education, and services. Agriculture, industry, tourism, and a growing startup culture shape opportunities for youth while villages retain strong community ties.` },
    },
  };
}

const REGIONS = {
  north: {
    id: 'north',
    nameEn: 'North India',
    nameHi: 'उत्तर भारत',
    descriptor: 'Peaks, Plains & Prayers',
    gradient: 'linear-gradient(135deg, #1a1520 0%, #2d1f3d 40%, #4a2040 100%)',
    accent: '#8B4A9E',
    pattern: 'himalaya',
    overview:
      'From the snow-crowned Himalayas to the golden Thar, North India weaves empires, pilgrimages, and poetry into one vast tapestry. Here Sanskrit echoes meet Sufi qawwali, and every horizon tells a story of conquest, devotion, and reinvention.',
    tabs: {
      geography: {
        title: 'Geography',
        icon: 'mountain',
        content:
          'North India spans the Himalayan arc, the Indo-Gangetic plains, the Thar Desert, and the Shivalik foothills. Major rivers—the Ganges, Yamuna, Sutlej, and Beas—nourish ancient civilizations. The region borders Pakistan, China, Nepal, and Bhutan, creating a crossroads of climates and cultures.',
      },
      climate: {
        title: 'Climate',
        icon: 'sun',
        content:
          'Continental extremes define the north: freezing winters in Kashmir and Himachal, scorching summers across the plains, and a monsoon that transforms Rajasthan’s aridity into brief, miraculous green. Alpine zones contrast sharply with semi-arid deserts.',
      },
      culture: {
        title: 'Culture',
        icon: 'lotus',
        content:
          'A mosaic of Rajput valor, Mughal refinement, Sikh egalitarianism, and Kashmiri artistry. Classical Hindustani music, miniature painting, and epic poetry flourish alongside Bollywood’s modern myth-making. Hospitality is ritual—guest is god.',
      },
      languages: {
        title: 'Languages',
        icon: 'script',
        content:
          'Hindi and Punjabi dominate the plains; Kashmiri, Dogri, and Rajasthani enrich the margins. Urdu carries Persianate elegance; English bridges administration and youth culture. Devanagari, Gurmukhi, and Perso-Arabic scripts coexist.',
      },
      traditions: {
        title: 'Traditions',
        icon: 'lamp',
        content:
          'Pilgrimage circuits link Varanasi, Amritsar, and Vaishno Devi. Weddings span days of song and ritual. Folk traditions—Bhangra, Ghoomar, Rouf—mark harvests and seasons. Guru Purnima, Diwali, and Eid share streets in plural harmony.',
      },
      lifestyle: {
        title: 'Lifestyle',
        icon: 'home',
        content:
          'Village life centers on wells, temples, and fields; cities pulse with IT hubs, universities, and bazaars. Chai stalls are parliament; cricket unites. Joint families persist even as metros embrace global careers and cuisine.',
      },
    },
    states: [
      'punjab',
      'haryana',
      'himachal',
      'uttarakhand',
      'uttar-pradesh',
      'rajasthan',
      'delhi',
      'jammu-kashmir',
      'ladakh',
      'chandigarh',
    ],
  },
  central: {
    id: 'central',
    nameEn: 'Central India',
    nameHi: 'मध्य भारत',
    descriptor: 'Forests, Forts & Faith',
    gradient: 'linear-gradient(135deg, #1C1108 0%, #2A2010 60%, #5C4A1A 100%)',
    accent: '#C9A84C',
    pattern: 'fort',
    overview:
      'The heartland holds Khajuraho’s stone poetry, Madhya Pradesh’s tiger reserves, and Chhattisgarh’s tribal metalwork—where Narmada and Betwa whisper through timeless rock.',
    tabs: {
      geography: { title: 'Geography', icon: 'mountain', content: 'Malwa plateau, Vindhya and Satpura ranges, and dense sal forests. Ancient trade routes crossed here.' },
      climate: { title: 'Climate', icon: 'sun', content: 'Subtropical with hot summers and moderate winters. Monsoon sustains agriculture and wildlife.' },
      culture: { title: 'Culture', icon: 'lotus', content: 'Bundelkhandi folk, Gond art, and classical dance traditions. Tribal fairs celebrate earth and ancestor.' },
      languages: { title: 'Languages', icon: 'script', content: 'Hindi, Bundeli, Chhattisgarhi, and tribal Gondi dialects.' },
      traditions: { title: 'Traditions', icon: 'lamp', content: 'Tribal Dussehra in Bastar. Shivratri on the Narmada. Harvest festivals bind village to soil.' },
      lifestyle: { title: 'Lifestyle', icon: 'home', content: 'Agrarian rhythms with growing urban centers in Bhopal, Indore, and Raipur.' },
    },
    states: ['madhya-pradesh', 'chhattisgarh'],
  },
  west: {
    id: 'west',
    nameEn: 'West India',
    nameHi: 'पश्चिम भारत',
    descriptor: 'Ghats, Garba & Gateway',
    gradient: 'linear-gradient(135deg, #0D0905 0%, #3D2810 50%, #E8871A 100%)',
    accent: '#E8871A',
    pattern: 'coast',
    overview:
      'Arabian Sea breezes carry traders’ tales through Gujarat’s stepwells, Maharashtra’s forts, and Goa’s saffron-laced shores. Enterprise and festival share equal billing.',
    tabs: {
      geography: { title: 'Geography', icon: 'mountain', content: 'Western Ghats, Konkan coast, Kutch desert, and Deccan traps. Mumbai’s harbor made history.' },
      climate: { title: 'Climate', icon: 'sun', content: 'Tropical along coast; semi-arid inland. Monsoon arrives June–September, vital for agriculture.' },
      culture: { title: 'Culture', icon: 'lotus', content: 'Lavani, Garba, Konkani song, and Parsi heritage. Bollywood and diamond trade radiate from Mumbai.' },
      languages: { title: 'Languages', icon: 'script', content: 'Marathi, Gujarati, Konkani, and Hindi. English is the language of business.' },
      traditions: { title: 'Traditions', icon: 'lamp', content: 'Navratri nights blaze with Garba. Ganesh Chaturthi fills streets with devotion. Diwali lights every threshold.' },
      lifestyle: { title: 'Lifestyle', icon: 'home', content: 'Vada pav to dhokla; local trains to startups. A region that never sleeps.' },
    },
    states: ['maharashtra', 'gujarat', 'goa', 'dadra-nagar-haveli-daman-diu'],
  },
  south: {
    id: 'south',
    nameEn: 'South India',
    nameHi: 'दक्षिण भारत',
    descriptor: 'Temples, Spice & Seas',
    gradient: 'linear-gradient(135deg, #0D0905 0%, #1A3D35 50%, #1A6B5E 100%)',
    accent: '#1A6B5E',
    pattern: 'temple',
    overview:
      'Dravidian grandeur rises in gopuram silhouettes against monsoon skies. Ancient Tamil, Telugu, Kannada, and Malayalam literatures anchor a civilization older than memory—where filter coffee, Bharatanatyam, and backwaters define the rhythm of life.',
    tabs: {
      geography: { title: 'Geography', icon: 'mountain', content: 'The Deccan Plateau, Western and Eastern Ghats, and coastal plains frame peninsular India. The Nilgiris and Cardamom Hills offer cool respite; the Coromandel and Malabar coasts cradle historic ports.' },
      climate: { title: 'Climate', icon: 'sun', content: 'Tropical wet and dry climates dominate. Two monsoons bless Kerala and the west; interior Deccan stays drier. Year-round warmth supports rice, coconut, and spice cultivation.' },
      culture: { title: 'Culture', icon: 'lotus', content: 'Classical Carnatic music, temple architecture, and bronze sculpture embody sacred aesthetics. Cinema industries in Chennai, Hyderabad, and Bengaluru rival Bollywood in devotion and scale.' },
      languages: { title: 'Languages', icon: 'script', content: 'Tamil, Telugu, Kannada, and Malayalam form the Dravidian core. Tulu, Konkani, and Kodava add texture. English fluency is among India’s highest.' },
      traditions: { title: 'Traditions', icon: 'lamp', content: 'Pongal, Onam, Ugadi, and Vishu celebrate harvests. Temple festivals feature towering chariots and kolam art. Ayurveda and yoga draw seekers worldwide.' },
      lifestyle: { title: 'Lifestyle', icon: 'home', content: 'IT corridors blend with agrarian roots. Idli-dosa breakfasts, silk saris, and cricket on beaches. Strong literacy and social reform movements shape civic life.' },
    },
    states: [
      'tamil-nadu',
      'kerala',
      'karnataka',
      'andhra-pradesh',
      'telangana',
      'puducherry',
      'lakshadweep',
    ],
  },
  east: {
    id: 'east',
    nameEn: 'East India',
    nameHi: 'पूर्व भारत',
    descriptor: 'Rivers, Rhythms & Raga',
    gradient: 'linear-gradient(135deg, #1C1108 0%, #2A1A0A 50%, #8B1A1A 100%)',
    accent: '#8B1A1A',
    pattern: 'river',
    overview:
      'The Ganga and its tributaries cradle Bengal’s literary soul, Odisha’s temple art, and Bihar’s ancient universities—while Chota Nagpur’s forests guard tribal heritage and mineral wealth.',
    tabs: {
      geography: { title: 'Geography', icon: 'mountain', content: 'Fertile deltas, Chota Nagpur plateau, and the Eastern Ghats define the landscape. The Sundarbans mangrove forest guards the Bengal coast.' },
      climate: { title: 'Climate', icon: 'sun', content: 'Humid subtropical with heavy monsoon rainfall. Summers are hot; winters mild in the plains, cool in hill stations like Darjeeling.' },
      culture: { title: 'Culture', icon: 'lotus', content: 'Rabindranath Tagore’s legacy, Odissi dance, Pattachitra painting, and Baul mysticism. Fish curry and mishti define culinary poetry.' },
      languages: { title: 'Languages', icon: 'script', content: 'Bengali, Odia, Maithili, Santali, and Hindi-Urdu in Bihar and Jharkhand.' },
      traditions: { title: 'Traditions', icon: 'lamp', content: 'Durga Puja transforms Kolkata into art. Chhath Puja honors the sun. Tribal Sohrai and Karma dances mark harvests.' },
      lifestyle: { title: 'Lifestyle', icon: 'home', content: 'Adda (conversation) culture, book fairs, and football fever. Tea gardens, coal, and steel shape rural and industrial economies.' },
    },
    states: ['bihar', 'jharkhand', 'odisha', 'west-bengal'],
  },
  northeast: {
    id: 'northeast',
    nameEn: 'North-East India',
    nameHi: 'पूर्वोत्तर भारत',
    descriptor: 'Clouds, Bamboo & Brotherhood',
    gradient: 'linear-gradient(135deg, #0a1520 0%, #1A4A3D 50%, #2A6B5E 100%)',
    accent: '#2A8B7A',
    pattern: 'bamboo',
    overview:
      'Eight states of misty hills, living root bridges, hornbill festivals, and tea gardens—where India meets Southeast Asia in weave, rhythm, and rainforest biodiversity.',
    tabs: {
      geography: { title: 'Geography', icon: 'mountain', content: 'Patkai and Purvanchal ranges, Brahmaputra valley, and lush hills. One of the world’s biodiversity hotspots.' },
      climate: { title: 'Climate', icon: 'sun', content: 'Heavy rainfall; mild summers. Alpine pockets in Arunachal and Sikkim contrast tropical Assam.' },
      culture: { title: 'Culture', icon: 'lotus', content: 'Over 200 tribes; each with distinct weave, dance, and cuisine. Christianity, Buddhism, and indigenous faiths intertwine.' },
      languages: { title: 'Languages', icon: 'script', content: 'Assamese, Bengali, Nagamese, and dozens of Tibeto-Burman and Austroasiatic languages.' },
      traditions: { title: 'Traditions', icon: 'lamp', content: 'Hornbill Festival, Bihu, and tribal harvest rites. Weaving is identity made visible.' },
      lifestyle: { title: 'Lifestyle', icon: 'home', content: 'Community-centric villages; growing connectivity through music, football, and eco-tourism.' },
    },
    states: [
      'assam',
      'arunachal-pradesh',
      'manipur',
      'meghalaya',
      'mizoram',
      'nagaland',
      'tripura',
      'sikkim',
    ],
  },
};

const STATE_CONFIGS = [
  /* North India */
  { id: 'punjab', regionId: 'north', nameEn: 'Punjab', nameHi: 'पंजाब', hook: 'Breadbasket, Bhangra & Sacred Waters', capital: 'Chandigarh', language: 'Punjabi (Gurmukhi)', founded: '1966', area: '50,362 km²', animal: '🐃', flower: 'Gladiolus', gradient: 'linear-gradient(160deg, #0D1520 0%, #1A3A5C 50%, #E8871A 100%)' },
  { id: 'haryana', regionId: 'north', nameEn: 'Haryana', nameHi: 'हरियाणा', hook: 'Land of Roti, Wrestling & Heritage', capital: 'Chandigarh', language: 'Hindi, Haryanvi', founded: '1966', area: '44,212 km²', animal: '🐃', flower: 'Lotus', gradient: 'linear-gradient(160deg, #1a1a0a 0%, #4a4a20 100%)', places: [{ name: 'Kurukshetra', type: 'Sacred Site' }, { name: 'Sultanpur Bird Sanctuary', type: 'Wildlife' }, { name: 'Surajkund', type: 'Crafts Fair' }] },
  { id: 'himachal', regionId: 'north', nameEn: 'Himachal Pradesh', nameHi: 'हिमाचल प्रदेश', hook: 'Dev Bhoomi of Pines & Peaks', capital: 'Shimla', language: 'Hindi, Pahari', founded: '1971', area: '55,673 km²', animal: '🐆', flower: 'Pink Rhododendron', gradient: 'linear-gradient(160deg, #0a1520 0%, #2a4a5c 60%, #6a9aaa 100%)', places: [{ name: 'Shimla Ridge', type: 'Hill Station' }, { name: 'Dharamshala', type: 'Tibetan Hub' }, { name: 'Spiti Valley', type: 'High Desert' }] },
  { id: 'uttarakhand', regionId: 'north', nameEn: 'Uttarakhand', nameHi: 'उत्तराखंड', hook: 'Abode of Gods & Himalayan Silence', capital: 'Dehradun', language: 'Hindi, Garhwali, Kumaoni', founded: '2000', area: '53,483 km²', animal: '🦌', flower: 'Brahma Kamal', gradient: 'linear-gradient(160deg, #0d1a10 0%, #1a4a30 70%, #3a7a5a 100%)', places: [{ name: 'Kedarnath', type: 'Temple' }, { name: 'Valley of Flowers', type: 'National Park' }, { name: 'Rishikesh', type: 'Yoga Hub' }] },
  { id: 'uttar-pradesh', regionId: 'north', nameEn: 'Uttar Pradesh', nameHi: 'उत्तर प्रदेश', hook: 'Heart of the Hindi Belt & Holy Rivers', capital: 'Lucknow', language: 'Hindi, Urdu', founded: '1950', area: '240,928 km²', animal: '🦚', flower: 'Palash', gradient: 'linear-gradient(160deg, #1a1008 0%, #5a3010 100%)', places: [{ name: 'Taj Mahal', type: 'Monument' }, { name: 'Varanasi Ghats', type: 'Sacred City' }, { name: 'Ayodhya', type: 'Temple Town' }, { name: 'Sarnath', type: 'Buddhist Site' }] },
  { id: 'rajasthan', regionId: 'north', nameEn: 'Rajasthan', nameHi: 'राजस्थान', hook: 'Land of Kings, Desert & Color', capital: 'Jaipur', language: 'Hindi, Rajasthani', founded: '1949', area: '342,239 km²', animal: '🦚', flower: 'Rohida', gradient: 'linear-gradient(160deg, #1a0f08 0%, #4a2010 40%, #E8871A 90%)' },
  { id: 'delhi', regionId: 'north', nameEn: 'Delhi', nameHi: 'दिल्ली', hook: 'Capital of Empires & Modern India', capital: 'New Delhi', language: 'Hindi, Punjabi, Urdu', founded: 'NCT 1956', area: '1,484 km²', animal: '🐅', flower: 'Alfalfa', gradient: 'linear-gradient(160deg, #0d0d12 0%, #3a1a2a 100%)', places: [{ name: 'Red Fort', type: 'Monument' }, { name: 'Qutub Minar', type: 'Heritage' }, { name: 'India Gate', type: 'Memorial' }, { name: 'Humayun\'s Tomb', type: 'Mughal Garden Tomb' }] },
  { id: 'jammu-kashmir', regionId: 'north', nameEn: 'Jammu and Kashmir', nameHi: 'जम्मू और कश्मीर', hook: 'Paradise of Valleys & Sufi Shrines', capital: 'Srinagar (Summer), Jammu (Winter)', language: 'Kashmiri, Urdu, Dogri', founded: '2019 (UT)', area: '42,241 km²', animal: '🦌', flower: 'Lotus', gradient: 'linear-gradient(160deg, #0a1525 0%, #2a4a6a 100%)', places: [{ name: 'Dal Lake', type: 'Lake' }, { name: 'Vaishno Devi', type: 'Pilgrimage' }, { name: 'Gulmarg', type: 'Hill Resort' }] },
  { id: 'ladakh', regionId: 'north', nameEn: 'Ladakh', nameHi: 'लद्दाख', hook: 'Roof of Monasteries & High Desert', capital: 'Leh', language: 'Ladakhi, Hindi', founded: '2019 (UT)', area: '59,146 km²', animal: '🐆', flower: 'Rhododendron', gradient: 'linear-gradient(160deg, #1a2030 0%, #4a6080 100%)', places: [{ name: 'Pangong Lake', type: 'Lake' }, { name: 'Hemis Monastery', type: 'Monastery' }, { name: 'Khardung La', type: 'High Pass' }] },
  { id: 'chandigarh', regionId: 'north', nameEn: 'Chandigarh', nameHi: 'चंडीगढ़', hook: 'Le Corbusier\'s Planned City of Gardens', capital: 'Chandigarh', language: 'Hindi, Punjabi, English', founded: '1966 (UT)', area: '114 km²', animal: '🦌', flower: 'Palash', gradient: 'linear-gradient(160deg, #0d1520 0%, #2a3a50 100%)', places: [{ name: 'Rock Garden', type: 'Sculpture Park' }, { name: 'Sukhna Lake', type: 'Lake' }, { name: 'Capitol Complex', type: 'Architecture' }] },
  /* Central India */
  { id: 'madhya-pradesh', regionId: 'central', nameEn: 'Madhya Pradesh', nameHi: 'मध्य प्रदेश', hook: 'Heart of India, Tigers & Temples', capital: 'Bhopal', language: 'Hindi', founded: '1956', area: '308,245 km²', animal: '🐅', flower: 'Palash', places: [{ name: 'Khajuraho', type: 'Temple Complex' }, { name: 'Kanha National Park', type: 'Wildlife' }, { name: 'Sanchi', type: 'Buddhist Stupa' }] },
  { id: 'chhattisgarh', regionId: 'central', nameEn: 'Chhattisgarh', nameHi: 'छत्तीसगढ़', hook: 'Rice Bowl & Tribal Metalcraft', capital: 'Raipur', language: 'Hindi, Chhattisgarhi', founded: '2000', area: '135,191 km²', animal: '🐃', flower: 'Ladyfinger', places: [{ name: 'Chitrakote Falls', type: 'Waterfall' }, { name: 'Bastar', type: 'Tribal Heartland' }, { name: 'Bhoramdeo Temple', type: 'Temple' }] },
  /* West India */
  { id: 'maharashtra', regionId: 'west', nameEn: 'Maharashtra', nameHi: 'महाराष्ट्र', hook: 'Gateway, Ghats & Ganesh', capital: 'Mumbai', language: 'Marathi', founded: '1960', area: '307,713 km²', animal: '🐅', flower: 'Jarul', places: [{ name: 'Gateway of India', type: 'Monument' }, { name: 'Ajanta-Ellora', type: 'Caves' }, { name: 'Shirdi', type: 'Pilgrimage' }] },
  { id: 'gujarat', regionId: 'west', nameEn: 'Gujarat', nameHi: 'गुजरात', hook: 'Garba, Commerce & Sacred Coast', capital: 'Gandhinagar', language: 'Gujarati', founded: '1960', area: '196,024 km²', animal: '🦁', flower: 'Marigold', places: [{ name: 'Rann of Kutch', type: 'Salt Desert' }, { name: 'Somnath', type: 'Temple' }, { name: 'Statue of Unity', type: 'Monument' }] },
  { id: 'goa', regionId: 'west', nameEn: 'Goa', nameHi: 'गोआ', hook: 'Sun, Spice & Portuguese Soul', capital: 'Panaji', language: 'Konkani', founded: '1987', area: '3,702 km²', animal: '🐃', flower: 'Plumeria', places: [{ name: 'Basilica of Bom Jesus', type: 'Church' }, { name: 'Calangute Beach', type: 'Beach' }, { name: 'Old Goa', type: 'Heritage' }] },
  { id: 'dadra-nagar-haveli-daman-diu', regionId: 'west', nameEn: 'Dadra and Nagar Haveli and Daman and Diu', nameHi: 'दादरा नगर हवेली और दमन दीव', hook: 'Portuguese Legacy on the Arabian Edge', capital: 'Daman', language: 'Gujarati, Hindi, Konkani', founded: '2020 (merged UT)', area: '603 km²', animal: '🦌', flower: 'Not specified', places: [{ name: 'Daman Fort', type: 'Fort' }, { name: 'Silvassa', type: 'Capital Town' }, { name: 'Diu Fort', type: 'Coastal Fort' }] },
  /* South India */
  { id: 'tamil-nadu', regionId: 'south', nameEn: 'Tamil Nadu', nameHi: 'तमिल नाडु', hook: 'Temple Towers & Classical Arts', capital: 'Chennai', language: 'Tamil', founded: '1956', area: '130,058 km²', animal: '🦌', flower: 'Glory Lily', places: [{ name: 'Meenakshi Temple', type: 'Temple' }, { name: 'Mahabalipuram', type: 'UNESCO Site' }, { name: 'Ooty', type: 'Hill Station' }] },
  { id: 'kerala', regionId: 'south', nameEn: 'Kerala', nameHi: 'केरल', hook: 'God\'s Own Backwaters & Spices', capital: 'Thiruvananthapuram', language: 'Malayalam', founded: '1956', area: '38,863 km²', animal: '🐘', flower: 'Golden Shower', places: [{ name: 'Alleppey Backwaters', type: 'Waterways' }, { name: 'Periyar', type: 'Wildlife' }, { name: 'Fort Kochi', type: 'Historic Port' }] },
  { id: 'karnataka', regionId: 'south', nameEn: 'Karnataka', nameHi: 'कर्नाटक', hook: 'Silicon Plateau & Hoysala Stone', capital: 'Bengaluru', language: 'Kannada', founded: '1956', area: '191,791 km²', animal: '🐘', flower: 'Lotus', places: [{ name: 'Hampi', type: 'Ruins' }, { name: 'Mysore Palace', type: 'Palace' }, { name: 'Coorg', type: 'Hills' }] },
  { id: 'andhra-pradesh', regionId: 'south', nameEn: 'Andhra Pradesh', nameHi: 'आंध्र प्रदेश', hook: 'Coastal Temples & Kuchipudi', capital: 'Amaravati', language: 'Telugu', founded: '2014 (reorganized)', area: '162,975 km²', animal: '🦌', flower: 'Water Lily', places: [{ name: 'Tirupati', type: 'Temple' }, { name: 'Araku Valley', type: 'Hills' }, { name: 'Lepakshi', type: 'Temple' }] },
  { id: 'telangana', regionId: 'south', nameEn: 'Telangana', nameHi: 'तेलंगाना', hook: 'Pearl City & Deccan Dynasties', capital: 'Hyderabad', language: 'Telugu, Urdu', founded: '2014', area: '112,077 km²', animal: '🦌', flower: 'Tangedu', places: [{ name: 'Charminar', type: 'Monument' }, { name: 'Golconda Fort', type: 'Fort' }, { name: 'Ramappa Temple', type: 'UNESCO Site' }] },
  { id: 'puducherry', regionId: 'south', nameEn: 'Puducherry', nameHi: 'पुडुचेरी', hook: 'French Quarters & Coastal Calm', capital: 'Puducherry', language: 'Tamil, French', founded: '1963 (UT)', area: '479 km²', animal: '🦌', flower: 'Cannonball', places: [{ name: 'Promenade Beach', type: 'Beach' }, { name: 'Auroville', type: 'Community' }, { name: 'French Quarter', type: 'Heritage' }] },
  { id: 'lakshadweep', regionId: 'south', nameEn: 'Lakshadweep', nameHi: 'लक्षद्वीप', hook: 'Coral Atolls & Arabian Blues', capital: 'Kavaratti', language: 'Malayalam, Jeseri', founded: '1956 (UT)', area: '32 km²', animal: '🦋', flower: 'Not specified', places: [{ name: 'Agatti Island', type: 'Island' }, { name: 'Bangaram', type: 'Beach' }, { name: 'Minicoy Lighthouse', type: 'Lighthouse' }] },
  /* East India */
  { id: 'bihar', regionId: 'east', nameEn: 'Bihar', nameHi: 'बिहार', hook: 'Cradle of Empires & Enlightenment', capital: 'Patna', language: 'Hindi, Maithili', founded: '1950', area: '94,163 km²', animal: '🐃', flower: 'Orchid Tree', places: [{ name: 'Bodh Gaya', type: 'Buddhist Site' }, { name: 'Nalanda', type: 'Ancient University' }, { name: 'Rajgir', type: 'Heritage' }] },
  { id: 'jharkhand', regionId: 'east', nameEn: 'Jharkhand', nameHi: 'झारखंड', hook: 'Land of Forests & Tribal Dance', capital: 'Ranchi', language: 'Hindi, Santali', founded: '2000', area: '79,714 km²', animal: '🐘', flower: 'Palash', places: [{ name: 'Betla National Park', type: 'Wildlife' }, { name: 'Hundru Falls', type: 'Waterfall' }, { name: 'Deoghar', type: 'Pilgrimage' }] },
  { id: 'odisha', regionId: 'east', nameEn: 'Odisha', nameHi: 'ओडिशा', hook: 'Jagannath, Pattachitra & Coast', capital: 'Bhubaneswar', language: 'Odia', founded: '1936', area: '155,707 km²', animal: '🐬', flower: 'Ashoka', places: [{ name: 'Konark Sun Temple', type: 'Temple' }, { name: 'Puri', type: 'Sacred City' }, { name: 'Chilika Lake', type: 'Lagoon' }] },
  { id: 'west-bengal', regionId: 'east', nameEn: 'West Bengal', nameHi: 'पश्चिम बंगाल', hook: 'Poetry, Durga Puja & Delta Life', capital: 'Kolkata', language: 'Bengali', founded: '1947', area: '88,752 km²', animal: '🐟', flower: 'Night-flowering Jasmine', places: [{ name: 'Victoria Memorial', type: 'Museum' }, { name: 'Darjeeling', type: 'Hill Station' }, { name: 'Sundarbans', type: 'Mangrove Forest' }] },
  /* North-East India */
  { id: 'assam', regionId: 'northeast', nameEn: 'Assam', nameHi: 'असम', hook: 'Tea Gardens & One-Horned Rhino', capital: 'Dispur', language: 'Assamese', founded: '1947', area: '78,438 km²', animal: '🦏', flower: 'Foxtail Orchid', places: [{ name: 'Kaziranga', type: 'National Park' }, { name: 'Kamakhya', type: 'Temple' }, { name: 'Majuli', type: 'River Island' }] },
  { id: 'arunachal-pradesh', regionId: 'northeast', nameEn: 'Arunachal Pradesh', nameHi: 'अरुणाचल प्रदेश', hook: 'Dawn-Lit Monasteries & Frontier Peaks', capital: 'Itanagar', language: 'English, Hindi, local tribes', founded: '1987', area: '83,743 km²', animal: '🐆', flower: 'Foxtail Orchid', places: [{ name: 'Tawang Monastery', type: 'Monastery' }, { name: 'Ziro Valley', type: 'Heritage Valley' }, { name: 'Sela Pass', type: 'High Pass' }] },
  { id: 'manipur', regionId: 'northeast', nameEn: 'Manipur', nameHi: 'मणिपुर', hook: 'Jewel of Polo, Dance & Loktak', capital: 'Imphal', language: 'Meiteilon (Manipuri)', founded: '1972', area: '22,327 km²', animal: '🦌', flower: 'Siroi Lily', places: [{ name: 'Loktak Lake', type: 'Floating Lake' }, { name: 'Kangla Fort', type: 'Fort' }, { name: 'Keibul Lamjao', type: 'National Park' }] },
  { id: 'meghalaya', regionId: 'northeast', nameEn: 'Meghalaya', nameHi: 'मेघालय', hook: 'Abode of Clouds & Living Bridges', capital: 'Shillong', language: 'Khasi, Garo, English', founded: '1972', area: '22,429 km²', animal: '🐘', flower: 'Lady\'s Slipper', places: [{ name: 'Cherrapunji', type: 'Rainfall Record' }, { name: 'Living Root Bridge', type: 'Bioengineering' }, { name: 'Mawlynnong', type: 'Village' }] },
  { id: 'mizoram', regionId: 'northeast', nameEn: 'Mizoram', nameHi: 'मिज़ोरम', hook: 'Bamboo Hills & Cheraw Dance', capital: 'Aizawl', language: 'Mizo, English', founded: '1987', area: '21,081 km²', animal: '🐅', flower: 'Red Vanda', places: [{ name: 'Phawngpui', type: 'Blue Mountain' }, { name: 'Reiek Heritage', type: 'Village' }, { name: 'Tam Dil', type: 'Lake' }] },
  { id: 'nagaland', regionId: 'northeast', nameEn: 'Nagaland', nameHi: 'नागालैंड', hook: 'Hornbill Hills & Warrior Traditions', capital: 'Kohima', language: 'English, Nagamese', founded: '1963', area: '16,579 km²', animal: '🦅', flower: 'Rhododendron', places: [{ name: 'Kohima War Cemetery', type: 'Memorial' }, { name: 'Hornbill Festival Site', type: 'Culture' }, { name: 'Dzükou Valley', type: 'Valley' }] },
  { id: 'tripura', regionId: 'northeast', nameEn: 'Tripura', nameHi: 'त्रिपुरा', hook: 'Palaces, Bamboo & Border Harmony', capital: 'Agartala', language: 'Bengali, Kokborok', founded: '1972', area: '10,486 km²', animal: '🐆', flower: 'Nag Kesar', places: [{ name: 'Ujjayanta Palace', type: 'Palace' }, { name: 'Neermahal', type: 'Water Palace' }, { name: 'Unakoti', type: 'Rock Carvings' }] },
  { id: 'sikkim', regionId: 'northeast', nameEn: 'Sikkim', nameHi: 'सिक्किम', hook: 'Himalayan Kingdom of Kanchenjunga', capital: 'Gangtok', language: 'Nepali, English', founded: '1975', area: '7,096 km²', animal: '🐆', flower: 'Noble Orchid', places: [{ name: 'Kanchenjunga View', type: 'Mountain' }, { name: 'Rumtek Monastery', type: 'Monastery' }, { name: 'Tsomgo Lake', type: 'Sacred Lake' }] },
];

/* Build stub states, then overlay full content for Rajasthan & Punjab */
const STATES = {};
STATE_CONFIGS.forEach((cfg) => {
  STATES[cfg.id] = makeStateStub(cfg);
});

/* Full detailed content — Rajasthan */
STATES.rajasthan = {
  id: 'rajasthan',
  regionId: 'north',
  nameEn: 'Rajasthan',
  nameHi: 'राजस्थान',
  hook: 'Land of Kings, Desert & Color',
  capital: 'Jaipur',
  language: 'Hindi, Rajasthani',
  founded: '1949 (state)',
  area: '342,239 km²',
  animal: '🦚',
  flower: 'Rohida',
  gradient: 'linear-gradient(160deg, #1a0f08 0%, #4a2010 40%, #E8871A 90%)',
  sections: {
    geography: {
      title: 'Geography',
      icon: '🗺',
      content:
        'Rajasthan is India’s largest state by area—a realm of shifting dunes, rugged Aravalli hills, and scattered oases. The Thar Desert dominates the west; the east holds more fertile tracts watered by the Chambal and Banas rivers. Bikaner, Jaisalmer, and Jodhpur rise like mirages from sand; Udaipur’s lakes reflect palaces in liquid gold.',
    },
    history: {
      title: 'History',
      icon: '📜',
      content:
        'Rajput clans built legendary fortresses from the 7th century onward. Mewar resisted Mughal dominance at Chittorgarh and Haldighati. Marwar, Amber, and Bikaner forged alliances and rivalries that echo in ballads. The British created Rajputana Agency; post-Independence, Rajasthan unified in 1949. Maharana Pratap, Rana Sanga, and Rao Jodha remain immortal in folk memory.',
    },
    culture: {
      title: 'Culture',
      icon: '🎭',
      content:
        'Valor, hospitality, and vivid color define Rajasthani identity. Folk heroes ride painted horses in Phad scrolls; women’s ghagra-choli blaze in mirror work. Music traditions include Maand, Panihari, and Dhamaal. The state’s aesthetic—ochre walls, indigo skies, silver jewelry—has become synonymous with “royal India” worldwide.',
    },
    traditions: {
      title: 'Traditions',
      icon: '🪘',
      content:
        'Teej and Gangaur honor Parvati and marital devotion. Pushkar Fair gathers camels, traders, and pilgrims. Marwari weddings span rituals of henna, toran, and vidaai sung in lament. Ancestor worship and clan honor (izzat) still guide rural life.',
    },
    art: {
      title: 'Art Forms',
      icon: '🎨',
      content:
        'Miniature schools of Mewar, Marwar, and Kishangarh refined Mughal techniques with local romance. Blue pottery of Jaipur, block-printed Bagru textiles, and Thewa gold-on-glass are living crafts. Kalbelia dance and puppetry (Kathputli) enchant audiences globally.',
    },
    food: {
      title: 'Food',
      icon: '🍛',
      content:
        'Dal Baati Churma—lentils, baked wheat balls, and sweet crumble—is the signature feast. Gatte ki sabzi, ker sangri (desert beans), and laal maas (fiery mutton) speak of arid ingenuity. Ghevar and mawa kachori crown festivals. Buttermilk (chaas) cools every meal.',
    },
    festivals: {
      title: 'Festivals',
      icon: '🎉',
      content:
        'Desert Festival (Jaisalmer, Jan–Feb): folk music, camel races, and turban-tying contests. Pushkar Camel Fair (Kartik Purnima). Gangaur (March–April). Jaipur Literature Festival (January) draws global writers. Diwali illuminates every haveli.',
    },
    clothing: {
      title: 'Clothing',
      icon: '👘',
      content:
        'Men wear angarkha, dhoti, and pagri (turban) in colors signaling region and occasion. Women drape odhni over ghagra-choli heavy with gota patti embroidery. Mojari leather footwear and silver anklets complete the ensemble. Bandhani tie-dye is a textile art form.',
    },
    languages: {
      title: 'Languages',
      icon: '🗣',
      content:
        'Rajasthani dialects—Marwari, Mewari, Dhundhari, Harauti—thrive in villages. Hindi is official and urban. Urdu enriches border towns. Devanagari script predominates; ancient inscriptions used Nagari and local variants.',
    },
    places: {
      title: 'Famous Places',
      icon: '🏛',
      places: [
        { name: 'Amber Fort', type: 'Fort & Palace' },
        { name: 'Hawa Mahal', type: 'Architecture' },
        { name: 'Jaisalmer Fort', type: 'Living Fort' },
        { name: 'Ranthambore', type: 'Wildlife Sanctuary' },
        { name: 'Pushkar Lake', type: 'Sacred Site' },
        { name: 'Chittorgarh Fort', type: 'Heritage Fort' },
      ],
    },
    modern: {
      title: 'Modern Life',
      icon: '🌆',
      content:
        'Tourism, handicrafts, and mining (marble, zinc) anchor the economy. Jaipur is a UNESCO Creative City for crafts; Jodhpur hosts defense and education hubs. Solar farms bloom in the desert. Young entrepreneurs revive heritage hospitality while Bollywood and fashion shoots rediscover royal aesthetics.',
    },
  },
};

/* Full detailed content — Punjab */
STATES.punjab = {
  id: 'punjab',
  regionId: 'north',
  nameEn: 'Punjab',
  nameHi: 'पंजाब',
  hook: 'Breadbasket, Bhangra & Sacred Waters',
  capital: 'Chandigarh',
  language: 'Punjabi (Gurmukhi)',
  founded: '1966 (reorganized)',
  area: '50,362 km²',
  animal: '🐃',
  flower: 'Gladiolus',
  gradient: 'linear-gradient(160deg, #0D1520 0%, #1A3A5C 50%, #E8871A 100%)',
  sections: {
    geography: {
      title: 'Geography',
      icon: '🗺',
      content:
        'Punjab means “land of five rivers”—Sutlej, Beas, Ravi, Chenab, and Jhelum (the latter two now largely in Pakistan). Alluvial plains yield wheat and rice in abundance. The Shivalik foothills fringe the northeast; the border with Pakistan runs through divided fields and shared memory.',
    },
    history: {
      title: 'History',
      icon: '📜',
      content:
        'Indus Valley sites like Harappa border the region. Sikhism arose in the 15th century under Guru Nanak; Amritsar’s Golden Temple became the faith’s heart. Ranjit Singh’s Sikh Empire unified Punjab before British annexation. Partition (1947) split the province; 1966 reorganization created modern Indian Punjab. The Green Revolution transformed it into India’s granary.',
    },
    culture: {
      title: 'Culture',
      icon: '🎭',
      content:
        'Sikh values—seva (service), equality, and courage—permeate public life. Bhangra and Giddha electrify harvest celebrations. Punjabi poetry from Bulleh Shah to Shiv Kumar Batalvi bridges mysticism and modern longing. Wrestling akharas and kabaddi fields testify to physical pride.',
    },
    traditions: {
      title: 'Traditions',
      icon: '🪘',
      content:
        'Gurdwara langar serves free meals to all regardless of caste or creed. Anand Karaj (Sikh wedding) centers on Guru Granth Sahib. Vaisakhi marks the Khalsa’s birth and harvest. Families gather for Lohri bonfires; elders bless youth with jaggery and popcorn.',
    },
    art: {
      title: 'Art Forms',
      icon: '🎨',
      content:
        'Phulkari embroidery blooms on shawls. Punjabi folk instruments—the dhol, tumbi, and algoza—drive Bhangra’s global popularity. Giddha is women’s call-and-response dance. Truck art and mural traditions color highways. Contemporary Punjabi music dominates Indian charts.',
    },
    food: {
      title: 'Food',
      icon: '🍛',
      content:
        'Butter chicken, dal makhani, and sarson da saag with makki di roti define comfort. Amritsari kulcha, chole bhature, and lassi are street legends. Agriculture means fresh dairy—paneer, ghee, and cream enrich every table. Pinni and gajak sweeten winters.',
    },
    festivals: {
      title: 'Festivals',
      icon: '🎉',
      content:
        'Vaisakhi (April 13–14): Khalsa foundation and harvest. Lohri (January): bonfires and song. Gurpurbs celebrate Sikh Gurus’ births. Diwali at Golden Temple is spectacular. Rural sports melas feature kabaddi and tractor races.',
    },
    clothing: {
      title: 'Clothing',
      icon: '👘',
      content:
        'Men wear kurta-pyjama with turban (pagri) or patka; Sikhs keep kesh (uncut hair) as faith. Women drape Punjabi suits with phulkari dupattas. Jutti footwear is crafted in Ludhiana and Patiala. Bright colors mirror the land’s optimism.',
    },
    languages: {
      title: 'Languages',
      icon: '🗣',
      content:
        'Punjabi in Gurmukhi script is official. Hindi and English are widely used. Malwai, Doabi, and Majhi dialects color speech. Urdu persists in literary and border traditions. Punjabi diaspora keeps the language vibrant worldwide.',
    },
    places: {
      title: 'Famous Places',
      icon: '🏛',
      places: [
        { name: 'Golden Temple', type: 'Sacred Gurdwara' },
        { name: 'Jallianwala Bagh', type: 'Memorial' },
        { name: 'Wagah Border', type: 'Ceremony Site' },
        { name: 'Rock Garden', type: 'Sculpture Park' },
        { name: 'Anandpur Sahib', type: 'Sikh Heritage' },
        { name: 'Harike Wetland', type: 'Bird Sanctuary' },
      ],
    },
    modern: {
      title: 'Modern Life',
      icon: '🌆',
      content:
        'Agriculture, manufacturing, and remittances from a vast diaspora fuel prosperity. Chandigarh’s modernist grid inspires urban planning. Ludhiana builds bicycles and textiles; Mohali hosts IT and cricket. Youth culture blends tractors, hip-hop, and startup ambition.',
    },
  },
};

const CULTURAL_QUOTES = [
  { text: 'Vasudhaiva Kutumbakam — the world is one family.', source: 'Maha Upanishad' },
  { text: 'Where the mind is without fear and the head is held high.', source: 'Rabindranath Tagore' },
  { text: 'In diversity there is beauty and strength.', source: 'Indian proverb' },
];

const SECTION_ORDER = [
  'geography',
  'history',
  'culture',
  'traditions',
  'art',
  'food',
  'festivals',
  'clothing',
  'languages',
  'places',
  'modern',
];
