const LANGUAGES = {
  en: { name: "English", flag: "🇬🇧" },
  es: { name: "Español", flag: "🇪🇸" },
  fr: { name: "Français", flag: "🇫🇷" },
  de: { name: "Deutsch", flag: "🇩🇪" },
  it: { name: "Italiano", flag: "🇮🇹" },
  pt: { name: "Português", flag: "🇧🇷" },
  tr: { name: "Türkçe", flag: "🇹🇷" },
  ru: { name: "Русский", flag: "🇷🇺" },
  pl: { name: "Polski", flag: "🇵🇱" },
  nl: { name: "Nederlands", flag: "🇳🇱" },
  sv: { name: "Svenska", flag: "🇸🇪" },
  da: { name: "Dansk", flag: "🇩🇰" },
  no: { name: "Norsk", flag: "🇳🇴" },
  fi: { name: "Suomi", flag: "🇫🇮" },
  cs: { name: "Čeština", flag: "🇨🇿" },
  ro: { name: "Română", flag: "🇷🇴" },
  hu: { name: "Magyar", flag: "🇭🇺" },
  el: { name: "Ελληνικά", flag: "🇬🇷" },
  zh: { name: "中文", flag: "🇨🇳" },
  ja: { name: "日本語", flag: "🇯🇵" },
  ko: { name: "한국어", flag: "🇰🇷" },
  ar: { name: "العربية", flag: "🇸🇦" },
  hi: { name: "हिन्दी", flag: "🇮🇳" },
  th: { name: "ไทย", flag: "🇹🇭" },
  vi: { name: "Tiếng Việt", flag: "🇻🇳" },
  id: { name: "Bahasa Indonesia", flag: "🇮🇩" },
  uk: { name: "Українська", flag: "🇺🇦" }
};

const T = {
  en: {
    nav_about: "About",
    nav_token: "Token",
    nav_family: "Family",
    nav_roadmap: "Roadmap",
    nav_risk: "Risk",
    nav_links: "Links",
    nav_cta: "Token Info",
    eyebrow: "KRON Family · Warp-Speed Meme · Base Network",
    hero_subtitle: "The high-velocity meme of routing, acceleration, cross-system movement, and warp-speed crypto culture.",
    hero_lead: "warpKRON is the speed and routing themed KRON Family memecoin. It is inspired by rapid movement across chains, AI-driven routing, future payment rails, validator pathways, cross-system acceleration, and the idea of entering the KRON universe at warp speed.",
    hero_warning: "Important: warpKRON is a high-risk experimental memecoin. It is not a payment guarantee, not bridge ownership, not protocol equity, not a security, not an investment product, and not financial advice. It has no guaranteed price, liquidity, listing, utility, routing revenue, dividends, or profit expectation.",
    btn_token: "View Token Information →",
    btn_risk: "Read Risk Disclosure",
    btn_links: "Official Links",
    chip1: "Warp-Speed Meme",
    chip2: "Routing Narrative",
    chip3: "Base Network",
    status_title: "warpKRON / Velocity x Routing Meme Asset",
    status_desc: "Speed, routing, cross-system movement, AI rails, and warp-drive crypto culture inside the KRON Family.",
    about_h3_1: "warpKRON is a separate KRON Family meme asset.",
    about_p_1: "warpKRON is an experimental memecoin inspired by speed, routing, cross-chain movement, and future infrastructure narratives. It does not represent ownership in EnteleLINK, EnteleKron, SOVRA, TVK Labs, or any routing protocol.",
    about_h3_2: "Speed, routes, rails, and warp culture",
    about_p_2: "warpKRON is designed as a playful cultural token around fast movement, AI routing, ecosystem pathways, payment rails, validator roads, and cross-system acceleration.",
    token_kicker: "Token Information",
    token_h2: "Transparent basic token facts.",
    token_text: "The following information is descriptive and may change as deployment, verification, liquidity, listings, audits, or legal documentation evolve.",
    token_name: "Name",
    token_symbol: "Symbol",
    token_network: "Network",
    token_supply: "Total Supply",
    token_contract: "Contract",
    token_inspiration: "Inspiration",
    token_type: "Token Type",
    token_site: "Official Site",
    token_exchange: "Exchange Status",
    token_name_v: "warpKRON",
    token_symbol_v: "WKRON / WARP",
    token_network_v: "Base (EVM)",
    token_supply_v: "10,000,000,000 (10B)",
    token_contract_v: "To be published only after official verification",
    token_inspiration_v: "Warp speed · AI routing · Cross-system acceleration",
    token_type_v: "Experimental memecoin",
    token_site_v: "warpkron.com",
    token_exchange_v: "Not guaranteed / verify official sources",
    family_kicker: "KRON Family",
    family_h2: "One meme family, separate independent tokens.",
    family_text: "The KRON Family tokens share a brand universe and cultural origin, but each token should be treated as an independent experimental memecoin with its own risk profile.",
    family_ekron: "Primary KRON Family memecoin and main community gateway.",
    family_minekron: "Energy, mining, machines, heating, hashing, and mining-culture meme token.",
    family_sovikron: "SOVRA, sovereign AI, intelligence mythology, and chaos-culture meme token.",
    family_alvikron: "ALVINA-inspired AI girl meme token of the KRON Family.",
    family_warpkron: "Speed, routing, acceleration, cross-system movement, and warp-culture meme token.",
    principles_kicker: "Principles",
    principles_h2: "Warp-speed meme culture with public clarity.",
    principles_text: "warpKRON is intended to be transparent about its experimental status and risk profile from the beginning.",
    p1_h: "No Routing Revenue",
    p1_p: "warpKRON does not promise bridge revenue, routing income, transaction fees, payment income, dividends, or passive income.",
    p2_h: "Community First",
    p2_p: "The value of a memecoin is strongly dependent on community, attention, culture, liquidity, and market conditions.",
    p3_h: "High-Risk Asset",
    p3_p: "Memecoins can lose most or all of their value, become illiquid, or fail to develop any meaningful market.",
    p4_h: "Official Contract Only",
    p4_p: "Always verify the official contract and beware of fake warpKRON tokens, fake airdrops, malicious links, and impersonators.",
    p5_h: "No Custody",
    p5_p: "Users are responsible for their own wallets, private keys, approvals, transactions, security, and tax obligations.",
    p6_h: "DYOR",
    p6_p: "Always do your own research and never spend money you cannot afford to lose.",
    roadmap_kicker: "Roadmap",
    roadmap_h2: "A cautious, high-velocity community rollout.",
    roadmap_text: "Roadmap items are goals, not guarantees. Timelines and deliverables may change due to market, technical, legal, or operational reasons.",
    r1_h: "Website & Identity",
    r1_p: "Launch official warpkron.com, public disclosures, official channels, and high-velocity visual identity.",
    r2_h: "Contract Verification",
    r2_p: "Publish official verified contract information only through official domains and public communications.",
    r3_h: "Warp Culture",
    r3_p: "Build speed memes, routing visuals, warp-drive campaigns, educational posts, and brand assets.",
    r4_h: "Infrastructure Narrative",
    r4_p: "Connect the story to routing, AI agents, EnteleLINK-style pathways, cross-system movement, and future payment rails.",
    r5_h: "KRON Family Coordination",
    r5_p: "Coordinate warpKRON with eKRON, mineKRON, soviKRON, and alviKRON as distinct experimental community tokens.",
    r6_h: "Future Ecosystem Concepts",
    r6_p: "Research long-term conceptual utility, integrations, or future EnteleKron paths, without guarantee.",
    risk_kicker: "Risk Disclosure",
    risk_h2: "Read this before interacting with warpKRON.",
    risk_text: "warpKRON is an experimental memecoin. It is speculative, volatile, and risky. It may have no utility, no market, no liquidity, no exchange listing, no secondary demand, no development continuation, and no recoverable value.",
    rk1_h: "No Financial Advice",
    rk1_p: "This website is for general informational purposes only. It does not provide financial, investment, trading, legal, tax, or accounting advice.",
    rk2_h: "No Guarantee of Value",
    rk2_p: "There is no guarantee that warpKRON will have value, retain value, increase in price, or be tradable at any future time.",
    rk3_h: "No Protocol Revenue",
    rk3_p: "Holding warpKRON does not entitle users to bridge income, routing fees, protocol ownership, payment revenue, rewards, dividends, or revenue share.",
    rk4_h: "No Guaranteed Liquidity",
    rk4_p: "Liquidity may be limited, temporary, removed, insufficient, or unavailable. Users may be unable to sell their tokens.",
    rk5_h: "Smart Contract Risk",
    rk5_p: "Smart contracts may contain bugs, vulnerabilities, misconfigurations, or irreversible risks. Independent review is essential.",
    rk6_h: "Wallet & Phishing Risk",
    rk6_p: "Users may lose funds through phishing, malicious links, fake contracts, compromised wallets, seed phrase exposure, or mistaken transactions.",
    rk7_h: "Regulatory Risk",
    rk7_p: "Crypto rules may change by jurisdiction. Users are responsible for understanding local restrictions, tax duties, and legal obligations.",
    rk8_h: "Independent Responsibility",
    rk8_p: "By interacting with warpKRON, users accept full responsibility for their own research, wallet security, transactions, and risk decisions.",
    links_kicker: "Official Links",
    links_h2: "Use official sources only.",
    links_text: "Always verify domain names carefully. Beware of fake contracts, cloned websites, fake airdrops, fake support accounts, and direct-message scams.",
    footer_copy: "© 2026 warpKRON · Velocity & Routing KRON Family Memecoin.",
    footer_1: "Experimental",
    footer_2: "No financial advice",
    footer_3: "No routing revenue promise",
    footer_4: "DYOR"
  },
  tr: {
    nav_about: "Hakkında", nav_token: "Token", nav_family: "Aile", nav_roadmap: "Yol Haritası", nav_risk: "Risk", nav_links: "Bağlantılar", nav_cta: "Token Bilgisi",
    eyebrow: "KRON Ailesi · Warp Hızı Meme · Base Ağı",
    hero_subtitle: "Yönlendirme, hızlanma, sistemler arası hareket ve warp hızında kripto kültürünün yüksek hızlı meme'i.",
    hero_lead: "warpKRON, KRON Ailesi'nin hız ve yönlendirme temalı meme coin'idir. Zincirler arası hızlı hareket, yapay zeka destekli yönlendirme, gelecek ödeme rayları, doğrulayıcı yolları, sistemler arası hızlanma ve KRON evrenine warp hızıyla giriş fikrinden esinlenmiştir.",
    hero_warning: "Önemli: warpKRON yüksek riskli deneysel bir meme coin'dir. Ödeme garantisi, köprü sahipliği, protokol hissesi, menkul kıymet, yatırım ürünü veya finansal tavsiye değildir. Garantili fiyatı, likiditesi, listelenmesi, faydası, yönlendirme geliri, temettüsü veya kar beklentisi yoktur.",
    btn_token: "Token Bilgilerini Görüntüle →", btn_risk: "Risk Açıklamasını Oku", btn_links: "Resmi Bağlantılar",
    chip1: "Warp Hızı Meme", chip2: "Yönlendirme Anlatısı", chip3: "Base Ağı",
    status_title: "warpKRON / Hız x Yönlendirme Meme Varlığı", status_desc: "KRON Ailesi içinde hız, yönlendirme, sistemler arası hareket, AI rayları ve warp-drive kripto kültürü.",
    about_h3_1: "warpKRON, KRON Ailesi'nin ayrı bir meme varlığıdır.", about_p_1: "warpKRON, hız, yönlendirme, zincirler arası hareket ve gelecek altyapı anlatılarından ilham alan deneysel bir meme coin'dir. EnteleLINK, EnteleKron, SOVRA, TVK Labs veya herhangi bir yönlendirme protokolünde sahipliği temsil etmez.",
    about_h3_2: "Hız, rotalar, raylar ve warp kültürü", about_p_2: "warpKRON, hızlı hareket, AI yönlendirme, ekosistem yolları, ödeme rayları, doğrulayıcı yolları ve sistemler arası hızlanma etrafında eğlenceli bir kültürel token olarak tasarlanmıştır.",
    token_kicker: "Token Bilgileri", token_h2: "Şeffaf temel token gerçekleri.", token_text: "Aşağıdaki bilgiler açıklayıcıdır ve dağıtım, doğrulama, likidite, listeleme, denetim veya yasal belgeler geliştikçe değişebilir.",
    token_name: "Ad", token_symbol: "Sembol", token_network: "Ağ", token_supply: "Toplam Arz", token_contract: "Sözleşme", token_inspiration: "İlham", token_type: "Token Türü", token_site: "Resmi Site", token_exchange: "Borsa Durumu",
    token_name_v: "warpKRON", token_symbol_v: "WKRON / WARP", token_network_v: "Base (EVM)", token_supply_v: "10.000.000.000 (10B)", token_contract_v: "Yalnızca resmi doğrulamadan sonra yayınlanacak", token_inspiration_v: "Warp hızı · AI yönlendirme · Sistemler arası hızlanma", token_type_v: "Deneysel meme coin", token_site_v: "warpkron.com", token_exchange_v: "Garanti edilmez / resmi kaynakları doğrulayın",
    family_kicker: "KRON Ailesi", family_h2: "Bir meme ailesi, ayrı bağımsız tokenlar.", family_text: "KRON Ailesi tokenları bir marka evreni ve kültürel köken paylaşır, ancak her token kendi risk profiliyle bağımsız bir deneysel meme coin olarak değerlendirilmelidir.",
    family_ekron: "Birincil KRON Ailesi meme coin'i ve ana topluluk kapısı.", family_minekron: "Enerji, madencilik, makineler, ısıtma, hashing ve madencilik kültürü meme token'ı.", family_sovikron: "SOVRA, egemen AI, zeka mitolojisi ve kaos kültürü meme token'ı.", family_alvikron: "KRON Ailesi'nin ALVINA'dan ilham alan AI kızı meme token'ı.", family_warpkron: "Hız, yönlendirme, hızlanma, sistemler arası hareket ve warp kültürü meme token'ı.",
    principles_kicker: "İlkeler", principles_h2: "Kamusal netlikle warp hızında meme kültürü.", principles_text: "warpKRON, deneysel durumu ve risk profili hakkında en başından şeffaf olmayı amaçlar.",
    p1_h: "Yönlendirme Geliri Yok", p1_p: "warpKRON köprü geliri, yönlendirme geliri, işlem ücretleri, ödeme geliri, temettü veya pasif gelir vaat etmez.",
    p2_h: "Topluluk Önce", p2_p: "Bir meme coin'in değeri büyük ölçüde topluluğa, ilgiye, kültüre, likiditeye ve piyasa koşullarına bağlıdır.",
    p3_h: "Yüksek Riskli Varlık", p3_p: "Meme coin'ler değerlerinin çoğunu veya tamamını kaybedebilir, likidite dışı kalabilir veya anlamlı bir pazar geliştiremeyebilir.",
    p4_h: "Yalnızca Resmi Sözleşme", p4_p: "Her zaman resmi sözleşmeyi doğrulayın ve sahte warpKRON tokenlarına, sahte airdrop'lara, kötü amaçlı bağlantılara ve taklitçilere dikkat edin.",
    p5_h: "Saklama Yok", p5_p: "Kullanıcılar kendi cüzdanlarından, özel anahtarlarından, onaylarından, işlemlerinden, güvenliklerinden ve vergi yükümlülüklerinden sorumludur.",
    p6_h: "DYOR", p6_p: "Her zaman kendi araştırmanızı yapın ve kaybetmeyi göze alamayacağınız parayı asla harcamayın.",
    roadmap_kicker: "Yol Haritası", roadmap_h2: "Temkinli, yüksek hızlı topluluk lansmanı.", roadmap_text: "Yol haritası kalemleri hedeflerdir, garanti değildir. Zaman çizelgeleri ve çıktılar piyasa, teknik, yasal veya operasyonel nedenlerle değişebilir.",
    r1_h: "Web Sitesi ve Kimlik", r1_p: "Resmi warpkron.com, kamuya açıklamalar, resmi kanallar ve yüksek hızlı görsel kimlik lansmanı.",
    r2_h: "Sözleşme Doğrulama", r2_p: "Yalnızca resmi alan adları ve kamusal iletişimler aracılığıyla resmi doğrulanmış sözleşme bilgilerini yayınlayın.",
    r3_h: "Warp Kültürü", r3_p: "Hız memeleri, yönlendirme görselleri, warp-drive kampanyaları, eğitici paylaşımlar ve marka varlıkları oluşturun.",
    r4_h: "Altyapı Anlatısı", r4_p: "Hikayeyi yönlendirme, AI ajanları, EnteleLINK tarzı yollar, sistemler arası hareket ve gelecek ödeme raylarına bağlayın.",
    r5_h: "KRON Ailesi Koordinasyonu", r5_p: "warpKRON'u eKRON, mineKRON, soviKRON ve alviKRON ile farklı deneysel topluluk tokenları olarak koordine edin.",
    r6_h: "Gelecek Ekosistem Kavramları", r6_p: "Uzun vadeli kavramsal fayda, entegrasyonlar veya gelecek EnteleKron yollarını garanti olmadan araştırın.",
    risk_kicker: "Risk Açıklaması", risk_h2: "warpKRON ile etkileşime geçmeden önce bunu okuyun.", risk_text: "warpKRON deneysel bir meme coin'dir. Spekülatif, volatil ve risklidir. Faydası, pazarı, likiditesi, borsa listesi, ikincil talebi, geliştirme devamı ve geri kazanılabilir değeri olmayabilir.",
    rk1_h: "Finansal Tavsiye Yok", rk1_p: "Bu web sitesi yalnızca genel bilgilendirme amaçlıdır. Finansal, yatırım, ticaret, yasal, vergi veya muhasebe tavsiyesi sağlamaz.",
    rk2_h: "Değer Garantisi Yok", rk2_p: "warpKRON'un değer taşıyacağı, değerini koruyacağı, fiyatının artacağı veya gelecekte herhangi bir zamanda alınıp satılabileceği garanti edilmez.",
    rk3_h: "Protokol Geliri Yok", rk3_p: "warpKRON tutmak, kullanıcılara köprü geliri, yönlendirme ücretleri, protokol sahipliği, ödeme geliri, ödüller, temettüler veya gelir paylaşımı hakkı vermez.",
    rk4_h: "Garantili Likidite Yok", rk4_p: "Likidite sınırlı, geçici, kaldırılmış, yetersiz veya kullanılamaz olabilir. Kullanıcılar tokenlarını satamayabilir.",
    rk5_h: "Akıllı Sözleşme Riski", rk5_p: "Akıllı sözleşmeler hatalar, güvenlik açıkları, yanlış yapılandırmalar veya geri dönüşü olmayan riskler içerebilir. Bağımsız inceleme esastır.",
    rk6_h: "Cüzdan ve Oltalama Riski", rk6_p: "Kullanıcılar oltalama, kötü amaçlı bağlantılar, sahte sözleşmeler, ele geçirilmiş cüzdanlar, tohum ifadesi ifşası veya hatalı işlemler yoluyla fon kaybedebilir.",
    rk7_h: "Düzenleyici Risk", rk7_p: "Kripto kuralları yargı yetkisine göre değişebilir. Kullanıcılar yerel kısıtlamaları, vergi görevlerini ve yasal yükümlülükleri anlamaktan sorumludur.",
    rk8_h: "Bağımsız Sorumluluk", rk8_p: "warpKRON ile etkileşime girerek, kullanıcılar kendi araştırmaları, cüzdan güvenlikleri, işlemleri ve risk kararları için tam sorumluluk kabul ederler.",
    links_kicker: "Resmi Bağlantılar", links_h2: "Yalnızca resmi kaynakları kullanın.", links_text: "Alan adlarını her zaman dikkatlice doğrulayın. Sahte sözleşmelere, klonlanmış web sitelerine, sahte airdrop'lara, sahte destek hesaplarına ve doğrudan mesaj dolandırıcılıklarına dikkat edin.",
    footer_copy: "© 2026 warpKRON · KRON Ailesi Hız ve Yönlendirme Meme Coin.", footer_1: "Deneysel", footer_2: "Finansal tavsiye yok", footer_3: "Yönlendirme geliri vaadi yok", footer_4: "DYOR"
  },
  es: {
    nav_about: "Acerca", nav_token: "Token", nav_family: "Familia", nav_roadmap: "Hoja de Ruta", nav_risk: "Riesgo", nav_links: "Enlaces", nav_cta: "Info Token",
    eyebrow: "Familia KRON · Meme Velocidad Warp · Red Base",
    hero_subtitle: "El meme de alta velocidad de enrutamiento, aceleración, movimiento entre sistemas y cultura cripto a velocidad warp.",
    hero_lead: "warpKRON es la memecoin de velocidad y enrutamiento de la Familia KRON. Está inspirada en el movimiento rápido entre cadenas, enrutamiento impulsado por IA, rieles de pago futuros, caminos de validadores, aceleración entre sistemas y la idea de entrar al universo KRON a velocidad warp.",
    hero_warning: "Importante: warpKRON es una memecoin experimental de alto riesgo. No es garantía de pago, propiedad de puente, capital de protocolo, valor, producto de inversión ni asesoramiento financiero.",
    btn_token: "Ver Información del Token →", btn_risk: "Leer Divulgación de Riesgo", btn_links: "Enlaces Oficiales",
    chip1: "Meme Velocidad Warp", chip2: "Narrativa de Enrutamiento", chip3: "Red Base",
    status_title: "warpKRON / Activo Meme Velocidad x Enrutamiento", status_desc: "Velocidad, enrutamiento, movimiento entre sistemas, rieles IA y cultura warp dentro de la Familia KRON.",
    about_h3_1: "warpKRON es un activo meme separado de la Familia KRON.", about_p_1: "warpKRON es una memecoin experimental inspirada en velocidad, enrutamiento, movimiento entre cadenas y narrativas de infraestructura futura.", about_h3_2: "Velocidad, rutas, rieles y cultura warp", about_p_2: "warpKRON está diseñado como un token cultural lúdico centrado en el movimiento rápido y la aceleración entre sistemas.",
    token_kicker: "Información del Token", token_h2: "Datos básicos transparentes del token.", token_text: "La información puede cambiar según evolucionen el despliegue, verificación y documentación legal.",
    token_name: "Nombre", token_symbol: "Símbolo", token_network: "Red", token_supply: "Suministro Total", token_contract: "Contrato", token_inspiration: "Inspiración", token_type: "Tipo de Token", token_site: "Sitio Oficial", token_exchange: "Estado en Exchanges",
    token_name_v: "warpKRON", token_symbol_v: "WKRON / WARP", token_network_v: "Base (EVM)", token_supply_v: "10.000.000.000 (10B)", token_contract_v: "Se publicará solo después de verificación oficial", token_inspiration_v: "Velocidad warp · Enrutamiento IA · Aceleración entre sistemas", token_type_v: "Memecoin experimental", token_site_v: "warpkron.com", token_exchange_v: "No garantizado / verificar fuentes oficiales",
    family_kicker: "Familia KRON", family_h2: "Una familia meme, tokens independientes.", family_text: "Los tokens comparten un universo de marca pero cada uno debe tratarse como una memecoin experimental independiente.",
    family_ekron: "Memecoin principal de la Familia KRON.", family_minekron: "Token meme de energía, minería y cultura minera.", family_sovikron: "Token meme de SOVRA, IA soberana y cultura del caos.", family_alvikron: "Token meme de chica IA inspirado en ALVINA.", family_warpkron: "Token meme de velocidad, enrutamiento y cultura warp.",
    principles_kicker: "Principios", principles_h2: "Cultura meme a velocidad warp con claridad pública.", principles_text: "warpKRON pretende ser transparente sobre su estado experimental desde el principio.",
    p1_h: "Sin Ingresos por Enrutamiento", p1_p: "warpKRON no promete ingresos por puentes, enrutamiento, comisiones ni dividendos.", p2_h: "Comunidad Primero", p2_p: "El valor depende de la comunidad, atención, cultura y condiciones del mercado.", p3_h: "Activo de Alto Riesgo", p3_p: "Las memecoins pueden perder todo su valor o volverse ilíquidas.", p4_h: "Solo Contrato Oficial", p4_p: "Verifica siempre el contrato oficial y ten cuidado con falsificaciones.", p5_h: "Sin Custodia", p5_p: "Los usuarios son responsables de sus billeteras y obligaciones fiscales.", p6_h: "DYOR", p6_p: "Haz tu propia investigación y no gastes lo que no puedes perder.",
    roadmap_kicker: "Hoja de Ruta", roadmap_h2: "Lanzamiento comunitario cauteloso y de alta velocidad.", roadmap_text: "Los elementos son objetivos, no garantías.",
    r1_h: "Sitio Web e Identidad", r1_p: "Lanzar warpkron.com oficial con identidad visual.", r2_h: "Verificación de Contrato", r2_p: "Publicar contrato verificado solo por canales oficiales.", r3_h: "Cultura Warp", r3_p: "Construir memes de velocidad y activos de marca.", r4_h: "Narrativa de Infraestructura", r4_p: "Conectar la historia con enrutamiento y rieles de pago.", r5_h: "Coordinación Familia KRON", r5_p: "Coordinar con eKRON, mineKRON, soviKRON y alviKRON.", r6_h: "Conceptos Futuros", r6_p: "Investigar utilidad a largo plazo sin garantía.",
    risk_kicker: "Divulgación de Riesgo", risk_h2: "Lee esto antes de interactuar con warpKRON.", risk_text: "warpKRON es especulativa, volátil y arriesgada.",
    rk1_h: "Sin Asesoramiento Financiero", rk1_p: "Este sitio es solo informativo.", rk2_h: "Sin Garantía de Valor", rk2_p: "No hay garantía de valor futuro.", rk3_h: "Sin Ingresos de Protocolo", rk3_p: "Poseer warpKRON no da derecho a ingresos.", rk4_h: "Sin Liquidez Garantizada", rk4_p: "La liquidez puede ser limitada o no disponible.", rk5_h: "Riesgo de Contrato Inteligente", rk5_p: "Los contratos pueden contener errores.", rk6_h: "Riesgo de Phishing", rk6_p: "Los usuarios pueden perder fondos por estafas.", rk7_h: "Riesgo Regulatorio", rk7_p: "Las reglas cripto pueden cambiar por jurisdicción.", rk8_h: "Responsabilidad Independiente", rk8_p: "Los usuarios aceptan plena responsabilidad.",
    links_kicker: "Enlaces Oficiales", links_h2: "Usa solo fuentes oficiales.", links_text: "Verifica los dominios cuidadosamente.",
    footer_copy: "© 2026 warpKRON · Memecoin de Velocidad de la Familia KRON.", footer_1: "Experimental", footer_2: "Sin asesoramiento financiero", footer_3: "Sin promesa de ingresos", footer_4: "DYOR"
  },
  fr: { nav_about: "À propos", nav_token: "Token", nav_family: "Famille", nav_roadmap: "Feuille de Route", nav_risk: "Risque", nav_links: "Liens", nav_cta: "Info Token", eyebrow: "Famille KRON · Meme Vitesse Warp · Réseau Base", hero_subtitle: "Le meme haute vélocité du routage, de l'accélération et de la culture crypto à vitesse warp.", hero_lead: "warpKRON est la memecoin de vitesse et routage de la Famille KRON, inspirée par le mouvement rapide entre chaînes et le routage IA.", hero_warning: "Important : warpKRON est une memecoin expérimentale à haut risque. Ce n'est pas un conseil financier.", btn_token: "Voir les Infos Token →", btn_risk: "Lire les Risques", btn_links: "Liens Officiels", chip1: "Meme Vitesse Warp", chip2: "Narratif Routage", chip3: "Réseau Base", status_title: "warpKRON / Actif Meme Vélocité x Routage", status_desc: "Vitesse, routage et culture warp au sein de la Famille KRON.", about_h3_1: "warpKRON est un actif distinct de la Famille KRON.", about_p_1: "Memecoin expérimentale inspirée par la vitesse et le routage.", about_h3_2: "Vitesse, routes et culture warp", about_p_2: "Token culturel ludique autour du mouvement rapide et du routage IA.", token_kicker: "Informations Token", token_h2: "Données transparentes du token.", token_text: "Les informations peuvent changer.", token_name: "Nom", token_symbol: "Symbole", token_network: "Réseau", token_supply: "Offre Totale", token_contract: "Contrat", token_inspiration: "Inspiration", token_type: "Type", token_site: "Site Officiel", token_exchange: "Statut Exchange", token_name_v: "warpKRON", token_symbol_v: "WKRON / WARP", token_network_v: "Base (EVM)", token_supply_v: "10 000 000 000 (10B)", token_contract_v: "Après vérification officielle", token_inspiration_v: "Vitesse warp · Routage IA · Accélération", token_type_v: "Memecoin expérimentale", token_site_v: "warpkron.com", token_exchange_v: "Non garanti", family_kicker: "Famille KRON", family_h2: "Une famille meme, des tokens indépendants.", family_text: "Chaque token a son propre profil de risque.", family_ekron: "Memecoin principale de la Famille KRON.", family_minekron: "Token meme énergie et minage.", family_sovikron: "Token meme SOVRA et IA souveraine.", family_alvikron: "Token meme fille IA ALVINA.", family_warpkron: "Token meme vitesse et routage.", principles_kicker: "Principes", principles_h2: "Culture meme avec clarté publique.", principles_text: "Transparent sur son statut expérimental.", p1_h: "Pas de Revenus Routage", p1_p: "Aucun revenu promis.", p2_h: "Communauté d'Abord", p2_p: "La valeur dépend de la communauté.", p3_h: "Actif Haut Risque", p3_p: "Peut perdre toute valeur.", p4_h: "Contrat Officiel Uniquement", p4_p: "Vérifiez toujours le contrat officiel.", p5_h: "Pas de Garde", p5_p: "Responsabilité individuelle.", p6_h: "DYOR", p6_p: "Faites vos propres recherches.", roadmap_kicker: "Feuille de Route", roadmap_h2: "Déploiement prudent et rapide.", roadmap_text: "Objectifs, pas garanties.", r1_h: "Site et Identité", r1_p: "Lancer le site officiel.", r2_h: "Vérification Contrat", r2_p: "Publication officielle uniquement.", r3_h: "Culture Warp", r3_p: "Memes et visuels de vitesse.", r4_h: "Narratif Infrastructure", r4_p: "Connexion au routage et rails de paiement.", r5_h: "Coordination Famille", r5_p: "Coordination avec les autres tokens.", r6_h: "Concepts Futurs", r6_p: "Recherche sans garantie.", risk_kicker: "Risques", risk_h2: "Lisez avant d'interagir.", risk_text: "Spéculative, volatile et risquée.", rk1_h: "Pas de Conseil Financier", rk1_p: "Information uniquement.", rk2_h: "Pas de Garantie de Valeur", rk2_p: "Aucune garantie de valeur.", rk3_h: "Pas de Revenus Protocole", rk3_p: "Aucun droit aux revenus.", rk4_h: "Pas de Liquidité Garantie", rk4_p: "Liquidité non garantie.", rk5_h: "Risque Contrat Intelligent", rk5_p: "Bugs possibles.", rk6_h: "Risque Phishing", rk6_p: "Perte de fonds possible.", rk7_h: "Risque Réglementaire", rk7_p: "Règles variables.", rk8_h: "Responsabilité Individuelle", rk8_p: "Responsabilité totale acceptée.", links_kicker: "Liens Officiels", links_h2: "Sources officielles uniquement.", links_text: "Vérifiez les domaines.", footer_copy: "© 2026 warpKRON · Famille KRON.", footer_1: "Expérimental", footer_2: "Pas de conseil financier", footer_3: "Pas de revenus promis", footer_4: "DYOR" },
  de: { nav_about: "Über", nav_token: "Token", nav_family: "Familie", nav_roadmap: "Roadmap", nav_risk: "Risiko", nav_links: "Links", nav_cta: "Token Info", eyebrow: "KRON Familie · Warp-Speed Meme · Base Netzwerk", hero_subtitle: "Das Hochgeschwindigkeits-Meme für Routing, Beschleunigung und Warp-Speed Krypto-Kultur.", hero_lead: "warpKRON ist der geschwindigkeits- und routing-thematische KRON Family Memecoin, inspiriert von schneller Bewegung über Ketten hinweg.", hero_warning: "Wichtig: warpKRON ist ein hochriskanter experimenteller Memecoin. Keine Finanzberatung.", btn_token: "Token-Info anzeigen →", btn_risk: "Risikohinweis lesen", btn_links: "Offizielle Links", chip1: "Warp-Speed Meme", chip2: "Routing-Narrativ", chip3: "Base Netzwerk", status_title: "warpKRON / Geschwindigkeit x Routing Meme", status_desc: "Geschwindigkeit, Routing und Warp-Kultur in der KRON Familie.", about_h3_1: "warpKRON ist ein separates KRON Familie Meme-Asset.", about_p_1: "Experimenteller Memecoin inspiriert von Geschwindigkeit und Routing.", about_h3_2: "Geschwindigkeit, Routen und Warp-Kultur", about_p_2: "Spielerischer kultureller Token rund um schnelle Bewegung.", token_kicker: "Token-Informationen", token_h2: "Transparente Token-Fakten.", token_text: "Informationen können sich ändern.", token_name: "Name", token_symbol: "Symbol", token_network: "Netzwerk", token_supply: "Gesamtangebot", token_contract: "Vertrag", token_inspiration: "Inspiration", token_type: "Token-Typ", token_site: "Offizielle Seite", token_exchange: "Börsenstatus", token_name_v: "warpKRON", token_symbol_v: "WKRON / WARP", token_network_v: "Base (EVM)", token_supply_v: "10.000.000.000 (10B)", token_contract_v: "Nach offizieller Verifizierung", token_inspiration_v: "Warp-Speed · AI-Routing · Beschleunigung", token_type_v: "Experimenteller Memecoin", token_site_v: "warpkron.com", token_exchange_v: "Nicht garantiert", family_kicker: "KRON Familie", family_h2: "Eine Meme-Familie, unabhängige Token.", family_text: "Jeder Token hat sein eigenes Risikoprofil.", family_ekron: "Primärer KRON Familie Memecoin.", family_minekron: "Energie- und Mining-Kultur Token.", family_sovikron: "SOVRA und souveräne KI Token.", family_alvikron: "ALVINA AI-Mädchen Token.", family_warpkron: "Geschwindigkeit und Routing Token.", principles_kicker: "Prinzipien", principles_h2: "Meme-Kultur mit öffentlicher Klarheit.", principles_text: "Von Anfang an transparent.", p1_h: "Keine Routing-Einnahmen", p1_p: "Keine Einnahmen versprochen.", p2_h: "Community First", p2_p: "Wert hängt von der Community ab.", p3_h: "Hochrisiko-Asset", p3_p: "Kann gesamten Wert verlieren.", p4_h: "Nur offizieller Vertrag", p4_p: "Immer verifizieren.", p5_h: "Keine Verwahrung", p5_p: "Eigenverantwortung.", p6_h: "DYOR", p6_p: "Eigene Recherche durchführen.", roadmap_kicker: "Roadmap", roadmap_h2: "Vorsichtiger Hochgeschwindigkeits-Rollout.", roadmap_text: "Ziele, keine Garantien.", r1_h: "Website & Identität", r1_p: "Offizielle Seite launchen.", r2_h: "Vertragsverifizierung", r2_p: "Nur offizielle Veröffentlichung.", r3_h: "Warp-Kultur", r3_p: "Speed-Memes erstellen.", r4_h: "Infrastruktur-Narrativ", r4_p: "Geschichte mit Routing verbinden.", r5_h: "KRON Familie Koordination", r5_p: "Token koordinieren.", r6_h: "Zukunftskonzepte", r6_p: "Langfristige Forschung.", risk_kicker: "Risikohinweis", risk_h2: "Vor Interaktion lesen.", risk_text: "Spekulativ, volatil und riskant.", rk1_h: "Keine Finanzberatung", rk1_p: "Nur Information.", rk2_h: "Keine Wertgarantie", rk2_p: "Kein garantierter Wert.", rk3_h: "Keine Protokoll-Einnahmen", rk3_p: "Kein Anspruch auf Einnahmen.", rk4_h: "Keine garantierte Liquidität", rk4_p: "Liquidität nicht garantiert.", rk5_h: "Smart-Contract-Risiko", rk5_p: "Fehler möglich.", rk6_h: "Wallet- & Phishing-Risiko", rk6_p: "Fondsverlust möglich.", rk7_h: "Regulatorisches Risiko", rk7_p: "Regeln ändern sich.", rk8_h: "Eigenverantwortung", rk8_p: "Volle Verantwortung akzeptiert.", links_kicker: "Offizielle Links", links_h2: "Nur offizielle Quellen.", links_text: "Domains prüfen.", footer_copy: "© 2026 warpKRON · KRON Familie Memecoin.", footer_1: "Experimentell", footer_2: "Keine Finanzberatung", footer_3: "Keine Einnahmen versprochen", footer_4: "DYOR" },
  zh: { nav_about: "关于", nav_token: "代币", nav_family: "家族", nav_roadmap: "路线图", nav_risk: "风险", nav_links: "链接", nav_cta: "代币信息", eyebrow: "KRON家族 · 曲速模因 · Base网络", hero_subtitle: "路由、加速、跨系统运动和曲速加密文化的高速模因。", hero_lead: "warpKRON是KRON家族的速度与路由主题模因币，灵感来源于跨链快速运动、AI驱动路由和跨系统加速。", hero_warning: "重要：warpKRON是高风险实验性模因币。非财务建议。", btn_token: "查看代币信息 →", btn_risk: "阅读风险披露", btn_links: "官方链接", chip1: "曲速模因", chip2: "路由叙事", chip3: "Base网络", status_title: "warpKRON / 速度 x 路由模因资产", status_desc: "速度、路由和KRON家族中的曲速文化。", about_h3_1: "warpKRON是KRON家族的独立模因资产。", about_p_1: "实验性模因币，灵感来源于速度和路由。", about_h3_2: "速度、路由和曲速文化", about_p_2: "围绕快速运动和AI路由的文化代币。", token_kicker: "代币信息", token_h2: "透明的基本代币事实。", token_text: "信息可能随部署演变而变化。", token_name: "名称", token_symbol: "符号", token_network: "网络", token_supply: "总供应量", token_contract: "合约", token_inspiration: "灵感", token_type: "代币类型", token_site: "官方网站", token_exchange: "交易所状态", token_name_v: "warpKRON", token_symbol_v: "WKRON / WARP", token_network_v: "Base (EVM)", token_supply_v: "100亿", token_contract_v: "官方验证后公布", token_inspiration_v: "曲速 · AI路由 · 跨系统加速", token_type_v: "实验性模因币", token_site_v: "warpkron.com", token_exchange_v: "无保证", family_kicker: "KRON家族", family_h2: "一个模因家族，独立代币。", family_text: "每个代币都有独立的风险特征。", family_ekron: "KRON家族主要模因币。", family_minekron: "能源和挖矿模因代币。", family_sovikron: "SOVRA和主权AI模因代币。", family_alvikron: "ALVINA AI女孩模因代币。", family_warpkron: "速度和路由模因代币。", principles_kicker: "原则", principles_h2: "公开透明的曲速文化。", principles_text: "从一开始就保持透明。", p1_h: "无路由收入", p1_p: "不承诺任何收入。", p2_h: "社区优先", p2_p: "价值取决于社区。", p3_h: "高风险资产", p3_p: "可能失去全部价值。", p4_h: "仅限官方合约", p4_p: "始终验证官方合约。", p5_h: "无托管", p5_p: "用户自行负责。", p6_h: "DYOR", p6_p: "自行研究，不要超额投入。", roadmap_kicker: "路线图", roadmap_h2: "谨慎的高速社区推出。", roadmap_text: "目标，非保证。", r1_h: "网站与身份", r1_p: "启动官方网站。", r2_h: "合约验证", r2_p: "仅通过官方渠道发布。", r3_h: "曲速文化", r3_p: "建设速度模因。", r4_h: "基础设施叙事", r4_p: "连接到路由和支付轨道。", r5_h: "KRON家族协调", r5_p: "与其他代币协调。", r6_h: "未来概念", r6_p: "长期研究无保证。", risk_kicker: "风险披露", risk_h2: "互动前请阅读。", risk_text: "投机性、波动性和风险性。", rk1_h: "非财务建议", rk1_p: "仅供信息参考。", rk2_h: "无价值保证", rk2_p: "不保证价值。", rk3_h: "无协议收入", rk3_p: "不赋予收入权利。", rk4_h: "无保证流动性", rk4_p: "流动性可能受限。", rk5_h: "智能合约风险", rk5_p: "可能存在漏洞。", rk6_h: "钓鱼风险", rk6_p: "可能损失资金。", rk7_h: "监管风险", rk7_p: "规则可能变化。", rk8_h: "独立责任", rk8_p: "用户承担全部责任。", links_kicker: "官方链接", links_h2: "仅使用官方来源。", links_text: "验证域名。", footer_copy: "© 2026 warpKRON · KRON家族模因币。", footer_1: "实验性", footer_2: "非财务建议", footer_3: "无收入承诺", footer_4: "DYOR" },
  ja: { nav_about: "概要", nav_token: "トークン", nav_family: "ファミリー", nav_roadmap: "ロードマップ", nav_risk: "リスク", nav_links: "リンク", nav_cta: "トークン情報", eyebrow: "KRONファミリー · ワープスピードミーム · Baseネットワーク", hero_subtitle: "ルーティング、アクセラレーション、ワープスピード暗号文化の高速ミーム。", hero_lead: "warpKRONはKRONファミリーのスピードとルーティングテーマのミームコインです。", hero_warning: "重要：warpKRONは高リスクの実験的ミームコインです。金融アドバイスではありません。", btn_token: "トークン情報を見る →", btn_risk: "リスク開示を読む", btn_links: "公式リンク", chip1: "ワープスピードミーム", chip2: "ルーティングナラティブ", chip3: "Baseネットワーク", status_title: "warpKRON / 速度 x ルーティング ミームアセット", status_desc: "KRONファミリー内のスピードとワープ文化。", about_h3_1: "warpKRONはKRONファミリーの独立したミームアセットです。", about_p_1: "スピードとルーティングにインスパイアされた実験的ミームコイン。", about_h3_2: "スピード、ルート、ワープカルチャー", about_p_2: "高速移動とAIルーティングを中心とした文化トークン。", token_kicker: "トークン情報", token_h2: "透明な基本トークンファクト。", token_text: "情報は変更される可能性があります。", token_name: "名前", token_symbol: "シンボル", token_network: "ネットワーク", token_supply: "総供給量", token_contract: "コントラクト", token_inspiration: "インスピレーション", token_type: "トークンタイプ", token_site: "公式サイト", token_exchange: "取引所ステータス", token_name_v: "warpKRON", token_symbol_v: "WKRON / WARP", token_network_v: "Base (EVM)", token_supply_v: "100億", token_contract_v: "公式検証後に公開", token_inspiration_v: "ワープスピード · AIルーティング · 加速", token_type_v: "実験的ミームコイン", token_site_v: "warpkron.com", token_exchange_v: "保証なし", family_kicker: "KRONファミリー", family_h2: "一つのファミリー、独立したトークン。", family_text: "各トークンは独自のリスクプロファイルを持ちます。", family_ekron: "KRONファミリーの主要ミームコイン。", family_minekron: "エネルギーとマイニングのミームトークン。", family_sovikron: "SOVRAとソブリンAIのミームトークン。", family_alvikron: "ALVINA AIガールミームトークン。", family_warpkron: "スピードとルーティングのミームトークン。", principles_kicker: "原則", principles_h2: "公開透明なワープスピード文化。", principles_text: "最初から透明性を重視。", p1_h: "ルーティング収益なし", p1_p: "収益を約束しません。", p2_h: "コミュニティファースト", p2_p: "価値はコミュニティに依存。", p3_h: "高リスクアセット", p3_p: "全価値を失う可能性。", p4_h: "公式コントラクトのみ", p4_p: "常に公式を確認。", p5_h: "カストディなし", p5_p: "自己責任。", p6_h: "DYOR", p6_p: "自分で調査してください。", roadmap_kicker: "ロードマップ", roadmap_h2: "慎重で高速なロールアウト。", roadmap_text: "目標であり保証ではありません。", r1_h: "ウェブサイトとアイデンティティ", r1_p: "公式サイト立ち上げ。", r2_h: "コントラクト検証", r2_p: "公式チャネルのみで公開。", r3_h: "ワープカルチャー", r3_p: "スピードミームの構築。", r4_h: "インフラナラティブ", r4_p: "ルーティングとの接続。", r5_h: "ファミリー連携", r5_p: "他のトークンとの連携。", r6_h: "将来のコンセプト", r6_p: "保証なしの長期研究。", risk_kicker: "リスク開示", risk_h2: "対話前にお読みください。", risk_text: "投機的で不安定でリスクがあります。", rk1_h: "金融アドバイスなし", rk1_p: "情報提供のみ。", rk2_h: "価値保証なし", rk2_p: "価値は保証されません。", rk3_h: "プロトコル収益なし", rk3_p: "収益権なし。", rk4_h: "流動性保証なし", rk4_p: "流動性は限定的。", rk5_h: "スマートコントラクトリスク", rk5_p: "バグの可能性。", rk6_h: "フィッシングリスク", rk6_p: "資金損失の可能性。", rk7_h: "規制リスク", rk7_p: "ルールは変更される可能性。", rk8_h: "独立した責任", rk8_p: "全責任を受け入れます。", links_kicker: "公式リンク", links_h2: "公式ソースのみ使用。", links_text: "ドメインを確認。", footer_copy: "© 2026 warpKRON · KRONファミリーミームコイン。", footer_1: "実験的", footer_2: "金融アドバイスなし", footer_3: "収益約束なし", footer_4: "DYOR" },
  ko: { nav_about: "소개", nav_token: "토큰", nav_family: "패밀리", nav_roadmap: "로드맵", nav_risk: "위험", nav_links: "링크", nav_cta: "토큰 정보", eyebrow: "KRON 패밀리 · 워프스피드 밈 · Base 네트워크", hero_subtitle: "라우팅, 가속, 크로스시스템 이동 및 워프스피드 크립토 문화의 고속 밈.", hero_lead: "warpKRON은 KRON 패밀리의 속도와 라우팅 테마 밈코인입니다.", hero_warning: "중요: warpKRON은 고위험 실험적 밈코인입니다. 금융 조언이 아닙니다.", btn_token: "토큰 정보 보기 →", btn_risk: "위험 공시 읽기", btn_links: "공식 링크", chip1: "워프스피드 밈", chip2: "라우팅 내러티브", chip3: "Base 네트워크", status_title: "warpKRON / 속도 x 라우팅 밈 자산", status_desc: "KRON 패밀리 내 속도와 워프 문화.", about_h3_1: "warpKRON은 KRON 패밀리의 독립 밈 자산입니다.", about_p_1: "속도와 라우팅에서 영감을 받은 실험적 밈코인.", about_h3_2: "속도, 루트, 워프 문화", about_p_2: "빠른 이동과 AI 라우팅 중심의 문화 토큰.", token_kicker: "토큰 정보", token_h2: "투명한 기본 토큰 사실.", token_text: "정보는 변경될 수 있습니다.", token_name: "이름", token_symbol: "심볼", token_network: "네트워크", token_supply: "총 공급량", token_contract: "컨트랙트", token_inspiration: "영감", token_type: "토큰 유형", token_site: "공식 사이트", token_exchange: "거래소 상태", token_name_v: "warpKRON", token_symbol_v: "WKRON / WARP", token_network_v: "Base (EVM)", token_supply_v: "100억", token_contract_v: "공식 검증 후 공개", token_inspiration_v: "워프스피드 · AI 라우팅 · 가속", token_type_v: "실험적 밈코인", token_site_v: "warpkron.com", token_exchange_v: "보장 없음", family_kicker: "KRON 패밀리", family_h2: "하나의 밈 패밀리, 독립 토큰.", family_text: "각 토큰은 독자적 위험 프로필을 가집니다.", family_ekron: "KRON 패밀리 메인 밈코인.", family_minekron: "에너지와 마이닝 밈 토큰.", family_sovikron: "SOVRA와 주권 AI 밈 토큰.", family_alvikron: "ALVINA AI 걸 밈 토큰.", family_warpkron: "속도와 라우팅 밈 토큰.", principles_kicker: "원칙", principles_h2: "공개 투명한 워프스피드 문화.", principles_text: "처음부터 투명성 지향.", p1_h: "라우팅 수익 없음", p1_p: "수익을 약속하지 않습니다.", p2_h: "커뮤니티 우선", p2_p: "가치는 커뮤니티에 의존.", p3_h: "고위험 자산", p3_p: "전체 가치 손실 가능.", p4_h: "공식 컨트랙트만", p4_p: "항상 공식 확인.", p5_h: "커스터디 없음", p5_p: "자기 책임.", p6_h: "DYOR", p6_p: "직접 조사하세요.", roadmap_kicker: "로드맵", roadmap_h2: "신중한 고속 커뮤니티 출시.", roadmap_text: "목표이며 보장이 아닙니다.", r1_h: "웹사이트 및 정체성", r1_p: "공식 사이트 출시.", r2_h: "컨트랙트 검증", r2_p: "공식 채널로만 공개.", r3_h: "워프 문화", r3_p: "스피드 밈 구축.", r4_h: "인프라 내러티브", r4_p: "라우팅과 연결.", r5_h: "패밀리 조정", r5_p: "다른 토큰과 조정.", r6_h: "미래 컨셉", r6_p: "보장 없는 장기 연구.", risk_kicker: "위험 공시", risk_h2: "상호작용 전 읽으세요.", risk_text: "투기적이고 변동성이 크며 위험합니다.", rk1_h: "금융 조언 아님", rk1_p: "정보 제공만.", rk2_h: "가치 보장 없음", rk2_p: "가치 미보장.", rk3_h: "프로토콜 수익 없음", rk3_p: "수익 권리 없음.", rk4_h: "유동성 보장 없음", rk4_p: "유동성 제한 가능.", rk5_h: "스마트 컨트랙트 위험", rk5_p: "버그 가능성.", rk6_h: "피싱 위험", rk6_p: "자금 손실 가능.", rk7_h: "규제 위험", rk7_p: "규칙 변경 가능.", rk8_h: "독립적 책임", rk8_p: "전적인 책임 수용.", links_kicker: "공식 링크", links_h2: "공식 소스만 사용.", links_text: "도메인 확인.", footer_copy: "© 2026 warpKRON · KRON 패밀리 밈코인.", footer_1: "실험적", footer_2: "금융 조언 아님", footer_3: "수익 약속 없음", footer_4: "DYOR" }
};

// For languages not fully translated, fall back to English
Object.keys(LANGUAGES).forEach(lang => {
  if (!T[lang]) T[lang] = T.en;
});

function getLang() {
  const hash = window.location.hash.match(/^#lang=(\w+)/);
  if (hash && LANGUAGES[hash[1]]) return hash[1];
  const stored = localStorage.getItem('warpkron_lang');
  if (stored && LANGUAGES[stored]) return stored;
  const nav = (navigator.language || '').split('-')[0];
  if (LANGUAGES[nav]) return nav;
  return 'en';
}

function setLang(lang) {
  localStorage.setItem('warpkron_lang', lang);
  window.location.hash = 'lang=' + lang;
  applyLang(lang);
}

function applyLang(lang) {
  const t = T[lang] || T.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
    else if (T.en[key]) el.textContent = T.en[key];
  });
  const btn = document.getElementById('lang-btn');
  if (btn) {
    const info = LANGUAGES[lang];
    btn.innerHTML = info.flag + ' ' + info.name + ' <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  }
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
  if (lang === 'ar') document.body.setAttribute('dir', 'rtl');
  else document.body.removeAttribute('dir');
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());
});
