import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Lang = 'tr' | 'en' | 'es' | 'zh';

type Dict = Record<string, string>;

const tr: Dict = {
  // Nav
  'nav.kurumsal': 'Hakkımızda',
  'nav.faaliyetler': 'Faaliyet Alanlarımız',
  'nav.muhendislik': 'Mühendislik ve Taahhüt',
  'nav.projeler': 'Projeler ve Referanslar',
  'nav.isbirligi': 'Uluslararası İş Birlikleri',
  'nav.iletisim': 'İletişim',
  'nav.cta': 'İletişime Geç',

  // Hero
  'hero.eyebrow': 'BOMERGRUP · 1996\'dan beri',
  'hero.title1': 'Mühendislikte derinlik ve',
  'hero.title2': 'uluslararası tecrübe',
  'hero.desc': 'Ulaştırma sistemleri, raylı teknolojiler, hava trafik sistemleri, çevre teknolojileri ve akıllı şehir altyapılarında proje deneyimi. Türkiye\'nin önde gelen kurumlarına ve uluslararası ortaklara mühendislik ve sistem entegrasyonu çözümleri.',
  'hero.cta1': 'Faaliyet Alanları',
  'hero.cta2': 'Çözümleri Gör',
  'hero.scroll': 'Kaydır',

  // Stats
  'stats.yil': 'Yıllık Tecrübe',
  'stats.disiplin': 'Disiplin',
  'stats.referans': 'Kurumsal Referans',
  'stats.ulke': 'Ülke İş Birliği',

  // About
  'about.eyebrow': 'Hakkımızda',
  'about.title1': '1996\'dan bu yana',
  'about.title2': 'güvenle inşa ediyoruz',
  'about.p1': 'BOMERGRUP, 1996 yılında kurulmuş olup mühendislik, proje geliştirme, uluslararası ticaret, temsilcilik, teknik danışmanlık ve yatırım geliştirme alanlarında faaliyet göstermektedir. Şirketimiz geçmiş dönemlerde özellikle ulaştırma sistemleri, demiryolu teknolojileri, havaalanı ve hava trafik sistemleri, elektromekanik altyapılar, arazi geliştirme ve ölçekli yatırım projelerinde hizmetlerde bulunmuştur.',
  'about.p2': 'Şirket ortağımız, geçmiş yıllarda proje grupları bünyesinde ortak ve yönetici olarak Türkiye\'nin önemli ulaştırma, raylı sistem, radar modernizasyonu, konut, ticari yapı ve sağlık yatırımlarında görev almıştır. Ayrıca Fransa, İspanya, Japonya ve Çin merkezli uluslararası teknoloji ve mühendislik firmalarıyla çeşitli proje, temsilcilik ve iş geliştirme faaliyetleri yürütmüştür.',
  'about.p3': 'Bu deneyim, BOMER\'in teknik yeterliliğinin, proje yönetim kabiliyetinin ve kurumsal tecrübesinin temelini oluşturmaktadır. Bugün, yapay zekâ, havacılık ve hava kontrol sistemleri, raylı ulaşım, su ve sağlık teknolojileri, akıllı şehir sistemleri ve çevre teknolojileri olmak üzere altı ana faaliyet alanında çözümler geliştiriyoruz.',

  // Vision & Mission
  'vm.eyebrow': 'Vizyon & Misyon',
  'vm.vision_title': 'Vizyonumuz',
  'vm.vision_desc': 'Türkiye\'nin kritik altyapı ve teknoloji ihtiyaçlarında, uluslararası standartlarda mühendislik çözümleri sunan, güvenilir ve yenilikçi bir mühendislik markası olmak. Raylı sistemlerden akıllı şehirlere, havacılıktan çevre teknolojilerine kadar her alanda yerli ve ulusal çözümler üretmek.',
  'vm.mission_title': 'Misyonumuz',
  'vm.mission_desc': 'Kurumsal tecrübemizi ve uluslararası iş ortaklıklarımızı kullanarak, müşterilerimize uçtan uca mühendislik, proje yönetimi ve teknik danışmanlık hizmetleri sunmak. Her projede veri odaklı yaklaşım, güvenli sistem tasarımı ve sürdürülebilir sonuçlar garantisi.',

  // Principles
  'principle.1.title': 'Veri Odaklı Mühendislik',
  'principle.1.desc': 'Her karar, simülasyon ve algoritmayla desteklenir. Mühendislik tahmin değil, kanıttır.',
  'principle.2.title': 'Güvenli & Kritik Sistemler',
  'principle.2.desc': 'Havacılık ve raylı sistem standartlarında güvenli haberleşme ve gerçek zamanlı kontrol.',
  'principle.3.title': 'Sürdürülebilirlik',
  'principle.3.desc': 'Enerji verimliliği, su tasarrufu ve karbon azaltım odaklı çözümler her projenin temel kriterlerindendir.',

  // Timeline
  'timeline.eyebrow': 'Zaman Çizelgesi',
  'timeline.title1': 'Yılların',
  'timeline.title2': 'yolculuğu',
  'timeline.1996': 'BOMERGRUP kuruldu. Ulaştırma, demiryolu ve elektromekanik projelere odaklandı.',
  'timeline.2002': 'Proje grupları ile ortaklık. YHT sinyalizasyon ve radar modernizasyon projelerinde aktif rol.',
  'timeline.2008': 'Fransa, İspanya, Japonya merkezli uluslararası teknoloji firmalarıyla iş ortaklıkları. Temsilcilik ve iş geliştirme faaliyetleri başladı.',
  'timeline.2014': 'Ankara Metrosu ve Çin merkezli lokomotif üreticisi ile dizel ve elektrikli lokomotif ile hızlı tren çalışmalarında proje ve referans deneyimi.',
  'timeline.2020': 'Yapay zekâ, çevre teknolojileri ve su teknolojileri disiplinlerinde genişleme. Akıllı şehir sistemleri Ar-Ge başladı.',

  // Certifications
  'cert.eyebrow': 'Kalite ve Sertifikalar',
  'cert.iso9001': 'Kalite Yönetim Sistemi',
  'cert.iso27001': 'Bilgi Güvenliği Yönetimi',

  // Services detail (5 disciplines)
  'srv.eyebrow': 'Faaliyet Alanlarımız',
  'srv.title1': 'Beş disiplinde',
  'srv.title2': 'ileri teknoloji mühendisliği',

  'srv.01.title': 'Yapay Zekâ ve Otonom Sistemler',
  'srv.01.desc': 'Büyük veri analitiği, tahmine dayalı bakım algoritmaları ve akıllı karar destek sistemleri. Görüntü işleme destekli akıllı kamera sistemleri ve nesne tanıma. Otonom kara araçları ve sürücüsüz raylı sistem yazılımları.',
  'srv.01.tags': 'Makine Öğrenmesi|Görüntü İşleme|Otonom Sistemler|Karar Destek',

  'srv.02.title': 'Havacılık ve Hava Kontrol Sistemleri',
  'srv.02.desc': 'Sivil havacılık standartlarına uygun hava trafik ve radar sistemlerinin tasarımı, entegrasyonu ve modernizasyonu. Hava sahası izleme sistemleri, gerçek zamanlı işletim sistemleri ve güvenli haberleşme protokolleri.',
  'srv.02.tags': 'Hava Trafik|Radar|Hava Sahası|Sistem Entegrasyonu',

  'srv.03.title': 'Raylı Sistemler ve Ulaşım Teknolojileri',
  'srv.03.desc': 'Demiryolu hatları, elektrikli lokomotif ve hızlı tren projelerinde mühendislik, taahhüt ve sistem entegrasyonu. Hat altyapısı, sinyalizasyon, modernizasyon ve ulaşım ağ optimizasyonu yetkinlikleri.',
  'srv.03.tags': 'Demiryolu|Lokomotif|Hızlı Tren|Modernizasyon',

  'srv.04.title': 'Su ve Sağlık Teknolojileri',
  'srv.04.desc': 'Su teknolojileri alanında Güney Koreli firmalarla iş birlikleri yapmak suretiyle ürün ve sistem geliştirilmesi. Isıtma, iklimlendirme, su yönetimi ve ilişkili sistemlerin geliştirilerek pazara sunulması. Sağlık teknolojileri alanında mühendislik çözümleri.',
  'srv.04.tags': 'Su Teknolojileri|Isıtma|İklimlendirme|Su Yönetimi',

  'srv.05.title': 'Akıllı Şehir Sistemleri',
  'srv.05.desc': 'Akıllı şehir uygulamaları kapsamında teknoloji, mühendislik ve sistem entegrasyonu çözümleri. Teknolojik gelişmeleri rol aldığı projelerde uygulama. Akıllı şehir altyapılarında sistem ve ürün geliştirme.',
  'srv.05.tags': 'Sistem Entegrasyonu|Ürün Geliştirme|IoT|Akıllı Altyapı',

  // Engineering & Contracting section
  'eng.eyebrow': 'Mühendislik ve Taahhüt',
  'eng.title1': 'Kritik altyapıda',
  'eng.title2': 'mühendislik ve sistem entegrasyonu',
  'eng.desc': 'Demiryolu teknolojileri, hava sahası modernizasyonu ve ulaşım altyapısında mühendislik, taahhüt ve sistem entegrasyonu yetkinliklerimiz.',
  'eng.rail.title': 'Raylı Sistemler ve Ulaşım',
  'eng.rail.desc': 'Demiryolu teknolojileri, elektrikli lokomotif ve hızlı tren projelerinde mühendislik ve taahhüt tecrübesi. Hat altyapısı, sinyalizasyon, modernizasyon ve sistem entegrasyonu yetkinlikleri.',
  'eng.aviation.title': 'Havacılık ve Radar Sistemleri',
  'eng.aviation.desc': 'Hava sahası modernizasyon projelerinde mühendislik ve taahhüt tecrübesi. Radar sistemlerinin tasarımı, entegrasyonu ve modernizasyonu.',
  'eng.dhmi.title': 'Hava Sahası Modernizasyon Projesi',
  'eng.dhmi.desc': 'Türkiye Hava Sahasının Modernizasyon Projesi kapsamında 23 adet radar sisteminin entegrasyonu: 18 adet SSR (İkincil Gözetleme Radarı) ve 5 adet PSR (Birincil Gözetleme Radarı).',
  'eng.capabilities.title': 'Yetkinliklerimiz',
  'eng.feat.1': 'Mühendislik ve taahhüt tecrübesi',
  'eng.feat.2': 'Kamu ve özel sektör projelerinde kazanılan deneyim',
  'eng.feat.3': 'Uluslararası teknoloji firmalarıyla iş birliği',
  'eng.feat.4': 'Yenilikçi çözümler geliştirme',
  'eng.feat.5': 'Entegre sistem ve proje yönetimi',
  'eng.feat.6': 'Teknik destek ve hizmet sürekliliği',

  // Smart City (simplified)
  'sc.eyebrow': 'Akıllı Şehir Sistemleri',
  'sc.title1': 'Akıllı şehirlerde',
  'sc.title2': 'sistem ve ürün geliştirme',
  'sc.desc': 'BOMER Mühendislik, akıllı şehir uygulamaları kapsamında teknoloji, mühendislik ve sistem entegrasyonu çözümleri geliştirmekte ve teknolojik gelişmeleri rol aldığı projelerde uygulamayı hedeflemektedir. Akıllı şehir altyapılarında sistem ve ürün geliştirme faaliyetleri yürütmektedir.',
  'sc.water_title': 'Su Teknolojileri',
  'sc.water_desc': 'Su teknolojileri alanında Güney Koreli firmalarla iş birlikleri yapmak suretiyle ürün ve sistem geliştirilmesi; ısıtma, iklimlendirme, su yönetimi ve ilişkili sistemlerin geliştirilerek pazara sunulması hedeflenmektedir.',
  'sc.cta_title': 'Kentiniz için akıllı şehir çözümü',
  'sc.cta_desc': 'Mevcut altyapınızı analiz ederek, kentinize özel aşamalı bir akıllı şehir yol haritası hazırlıyoruz. Pilot uygulamadan tam entegrasyona.',
  'sc.cta_btn': 'Detaylı Bilgi',

  // Environment Technologies section
  'env.eyebrow': 'Çevre Teknolojileri ve Sürdürülebilirlik',
  'env.title1': 'Sürdürülebilirlik',
  'env.title2': 've çevre teknolojileri',
  'env.desc': 'Sürdürülebilirlik kavramını yalnızca çevre ile sınırlandırmadan, daha geniş bir perspektifle ele alıyoruz. Çevre teknolojileri ve sürdürülebilir altyapı çözümleri ile gelecek nesiller için değer yaratıyoruz.',
  'env.item.1.title': 'Sürdürülebilirlik ve Çevresel Teknolojiler',
  'env.item.1.desc': 'Çevre dostu teknolojiler ve sürdürülebilirlik ilkeleri doğrultusunda çözümler geliştirme. Karbon ayak izi azaltımı ve yeşil altyapı uygulamaları.',
  'env.item.2.title': 'Akıllı Atık Yönetimi',
  'env.item.2.desc': 'Doluluk sensörleri ve IoT tabanlı sistemlerle atık toplama rotalarının dinamik optimizasyonu. Gereksiz seferleri önleme ve yakıt tasarrufu sağlama.',
  'env.item.3.title': 'Su ve Enerji Verimliliği',
  'env.item.3.desc': 'Su şebekelerinde basınç, debi ve sızıntı izleme. Enerji dağıtım optimizasyonu ve verimlilik modellemesi ile kaynak tasarrufu.',
  'env.item.4.title': 'Çevresel İzleme Sistemleri',
  'env.item.4.desc': 'Hava kalitesi, gürültü kirliliği ve sıcaklık sensörleri ile kent geneline yayılmış gerçek zamanlı çevre haritası. Halk sağlığı için erken uyarı sistemi.',
  'env.item.5.title': 'Yenilikçi ve Sürdürülebilir Altyapı Çözümleri',
  'env.item.5.desc': 'Gelecek nesillerin ihtiyaçlarını karşılayan, çevre uyumlu ve sürdürülebilir altyapı sistemlerinin tasarımı ve geliştirilmesi.',

  // Projects section
  'proj.eyebrow': 'Projeler ve Referanslar',
  'proj.title': 'Seçili çalışmalar',
  'proj.all': 'Tüm Çözümler',

  'proj.01.name': 'Tahmine Dayalı Bakım Platformu',
  'proj.01.type': 'AI · Makine Öğrenmesi',
  'proj.01.desc': 'Endüstriyel ekipmanlarda sensör verisi ile arıza öncesi tahminleme yapan yapay zekâ tabanlı karar destek sistemi.',
  'proj.01.tag': 'AI & Otonom',

  'proj.02.name': 'Akıllı Sürveyans Sistemi',
  'proj.02.type': 'Görüntü İşleme · İzleme',
  'proj.02.desc': 'Nesne tanıma ve çevre izleme için yapay zekâ destekli kamera sistemleri. Gerçek zamanlı durum tespiti.',
  'proj.02.tag': 'Görüntü İşleme',

  'proj.03.name': 'Su Yönetimi ve Arıtma Sistemi',
  'proj.03.type': 'Su Teknolojileri · IoT',
  'proj.03.desc': 'Güney Koreli firmalarla iş birliği ile geliştirilen su yönetimi, ısıtma ve iklimlendirme sistemleri. Su şebekesi izleme ve optimizasyon.',
  'proj.03.tag': 'Su Teknolojileri',

  'proj.04.name': 'Raylı Sistem Varlık Yönetimi',
  'proj.04.type': 'Raylı · Sinyalizasyon',
  'proj.04.desc': 'Demiryolu hatlarında yapay zekâ ile aşınma ve arıza risklerini önceden tespit eden kontrol ve izleme sistemi.',
  'proj.04.tag': 'Raylı Sistemler',

  'proj.05.name': 'Hava Sahası Modernizasyon Projesi',
  'proj.05.type': 'Havacılık · Radar',
  'proj.05.desc': 'Türkiye Hava Sahasının Modernizasyon Projesi kapsamında 23 adet radar (18 SSR + 5 PSR) sisteminin entegrasyonu.',
  'proj.05.tag': 'Havacılık',

  'proj.06.name': 'Akıllı Atık Yönetimi',
  'proj.06.type': 'Çevre · IoT',
  'proj.06.desc': 'Akıllı çöp konteynerleri ve doluluk sensörleri ile atık toplama rotalarının dinamik optimizasyonu.',
  'proj.06.tag': 'Çevre Teknolojileri',

  'proj.07.name': 'Akıllı Şehir Veri Platformu',
  'proj.07.type': 'IoT · Kent Yönetimi',
  'proj.07.desc': 'Trafik, atık, enerji ve çevre verilerini tek panelden toplayan merkezi kent veri platformu.',
  'proj.07.tag': 'Akıllı Şehir',

  'proj.08.name': 'Çevresel İzleme Platformu',
  'proj.08.type': 'Çevre · Sensör Ağı',
  'proj.08.desc': 'Hava kalitesi, gürültü ve sıcaklık sensörleri ile kent geneline yayılmış gerçek zamanlı çevre izleme sistemi.',
  'proj.08.tag': 'Çevre Teknolojileri',

  'proj.detail': 'Detay',

  // References — rail projects and partner descriptions
  'ref.eyebrow': 'Projeler ve Referanslar',
  'ref.title1': 'Güven veren',
  'ref.title2': 'projeler ve referanslar',
  'ref.desc': '1996\'dan bu yana Türkiye\'nin önde gelen ulaştırma, hava sahası ve altyapı projelerinde görev aldık. Uluslararası teknoloji firmalarıyla iş ortaklıkları ve temsilcilik faaliyetleri yürüttük.',
  'ref.rail_title': 'Demiryolu & Ulaşım Projeleri',
  'ref.rail.1': 'Ankara–İstanbul Yüksek Hızlı Tren Sinyalizasyon Projesi',
  'ref.rail.2': 'Ankara–Konya YHT Altyapı Projesi — Hat işleri, Balast & Subbalast üretimi',
  'ref.rail.3': 'Ankara Metrosu — Dizel ve elektrikli lokomotif ile hızlı tren çalışmaları',
  'ref.rail.4': 'Bursa Hafif Raylı Sistem 2. Etap — Elektromekanik İşler',
  'ref.rail.5': 'Kayseray Kayseri Hafif Raylı Sistem — Mekanik İşler',
  'ref.rail.6': 'Estram Eskişehir Hafif Raylı Sistem — Ray ve ekipman tedariği, elektromekanik',

  'ref.aviation_title': 'Havacılık & Radar Projeleri',
  'ref.aviation.1': 'Hava Sahası Modernizasyon Projesi — 23 adet radar entegrasyonu (18 SSR + 5 PSR)',
  'ref.aviation.2': 'Hava trafik kontrol sistemleri — Mühendislik ve taahhüt',
  'ref.aviation.3': 'Radar modernizasyonu — Sistem entegrasyonu ve teknik destek',

  'ref.intl_title': 'Uluslararası İş Ortaklıkları',
  'ref.intl.1': 'Fransa merkezli teknoloji firması — Demiryolu sinyalizasyon projeleri, Türkiye temsilcilik',
  'ref.intl.2': 'İspanya merkezli hava trafik firması — DHMI projesi IT alanında tüm yerel işler ve Türkiye temsilcilik',
  'ref.intl.3': 'İspanya merkezli elektromekanik firması — İstanbul tünelleri elektromekanik projeleri, JV hazırlama',
  'ref.intl.4': 'Japonya merkezli ticaret ve teknoloji firması — Elektrikli lokomotif temini, yerel ve teknik müşavirlik',
  'ref.intl.5': 'Çin merkezli lokomotif üreticisi — Hızlı tren seti alım ihalesi, yerel işler ve iş ortaklığı',
  'ref.note': 'Yukarıda belirtilen projeler, şirket ortağımızın ve yöneticilerimizin geçmişte ortak veya yönetici olarak görev aldığı şirketler bünyesinde başarıyla tamamlanmış çalışmaları ifade etmektedir.',

  // Partnerships section
  'part.eyebrow': 'Uluslararası İş Birlikleri',
  'part.title1': 'Teknoloji ortaklıkları',
  'part.title2': 've iş birlikleri',
  'part.desc': 'BOMER Mühendislik, uluslararası teknoloji ve mühendislik firmalarıyla iş birlikleri geliştirerek Türkiye\'de yenilikçi çözümler sunmayı amaçlamaktadır.',
  'part.companies': 'İş Birliği Yapılan Firmalar',
  'part.item.1.title': 'Uluslararası Teknoloji Ortaklıkları',
  'part.item.1.desc': 'Sektöründe öncü uluslararası firmalarla teknoloji ortaklıkları geliştirme ve stratejik iş birlikleri kurma.',
  'part.item.2.title': 'Teknoloji Transferi ve Mühendislik İş Birlikleri',
  'part.item.2.desc': 'Uluslararası teknoloji transferi ve mühendislik iş birlikleri yoluyla Türkiye\'ye yenilikçi çözümler kazandırma.',
  'part.item.3.title': 'Öncü Firmalarla Ortak Projeler',
  'part.item.3.desc': 'Sektöründe öncü firmalarla ortak projeler geliştirilmesi ve uluslararası standartlarda çözümler sunma.',
  'part.item.4.title': 'Yerel Mühendislik ve Sistem Entegrasyonu',
  'part.item.4.desc': 'Yerel mühendislik, uygulama ve sistem entegrasyonu kabiliyetleri ile uluslararası teknolojilerin Türkiye\'ye uyarlanması.',
  'part.item.5.title': 'Türkiye Pazarına Yönelik Ürün Geliştirme',
  'part.item.5.desc': 'Türkiye pazarına yönelik teknoloji ve ürün geliştirme. Yerli ve ulusal çözümler üretme.',

  // Contact
  'contact.eyebrow': 'İletişim',
  'contact.title1': 'Projenizi',
  'contact.title2': 'birlikte tasarlayalım',
  'contact.desc': 'Yeni bir proje görüşmek, teknik danışmanlık almak veya iş birliği fırsatlarını değerlendirmek için bizimle iletişime geçin.',
  'contact.name': 'Ad Soyad',
  'contact.email': 'E-posta',
  'contact.company': 'Firma (opsiyonel)',
  'contact.message': 'Mesajınız',
  'contact.placeholder': 'Projeniz hakkında kısaca bilgi verin...',
  'contact.send': 'Gönder',
  'contact.sending': 'Gönderiliyor...',
  'contact.error': 'Mesajınız gönderilemedi. Lütfen tekrar deneyin.',
  'contact.sent_title': 'Mesajınız alındı',
  'contact.sent_desc': 'En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.',
  'contact.email_label': 'E-posta',
  'contact.phone_label': 'Telefon',
  'contact.office_label': 'Ofis',

  // Footer
  'footer.sitemap': 'Site Haritası',
  'footer.contact': 'İletişim',
  'footer.rights': 'Tüm hakları saklıdır.',
  'footer.top': 'Yukarı Çık',
  'footer.brand_desc': 'Raylı sistemler, havacılık, su teknolojileri, çevre ve akıllı şehir altyapılarında mühendislik, taahhüt ve sistem entegrasyonu çözümleri.',
  'footer.engineering': 'Mühendislik',

  // Legal
  'legal.privacy': 'Gizlilik Politikası',
  'legal.terms': 'Kullanım Şartları',
  'legal.cookies': 'Çerez Politikası',
  'legal.close': 'Kapat',

  // Cookie banner
  'cookie.banner_label': 'Çerez onay bildirimi',
  'cookie.text': 'Sitemizi iyileştirmek için çerezler kullanıyoruz. Zorunlu çerezler her zaman aktiftir; analitik çerezler için onayınıza ihtiyacımız var.',
  'cookie.link': 'Çerez Politikası',
  'cookie.accept': 'Kabul Et',
  'cookie.decline': 'Reddet',
};

const en: Dict = {
  'nav.kurumsal': 'About Us',
  'nav.faaliyetler': 'Activity Areas',
  'nav.muhendislik': 'Engineering & Contracting',
  'nav.projeler': 'Projects & References',
  'nav.isbirligi': 'International Partnerships',
  'nav.iletisim': 'Contact',
  'nav.cta': 'Get in Touch',

  'hero.eyebrow': 'BOMERGRUP · Since 1996',
  'hero.title1': 'Depth and international',
  'hero.title2': 'experience in engineering',
  'hero.desc': 'Project experience in transportation systems, rail technologies, air traffic systems, environmental technologies, and smart city infrastructure. Engineering and system integration solutions for Turkey\'s leading institutions and international partners.',
  'hero.cta1': 'Activity Areas',
  'hero.cta2': 'View Solutions',
  'hero.scroll': 'Scroll',

  'stats.yil': 'Years of Experience',
  'stats.disiplin': 'Disciplines',
  'stats.referans': 'Corporate References',
  'stats.ulke': 'Country Partnerships',

  'about.eyebrow': 'About Us',
  'about.title1': 'Building with trust',
  'about.title2': 'since 1996',
  'about.p1': 'BOMERGRUP has been operating since 1996 in the fields of engineering, project development, international trade, representation, technical consulting, and investment development. The company has particularly served in transportation systems, railway technologies, airport and air traffic systems, electromechanical infrastructure, land development, and large-scale investment projects.',
  'about.p2': 'Our partner previously served as partner and manager within project groups, participating in Turkey\'s major transportation, rail system, radar modernization, residential, commercial, and healthcare investments. Additionally, the company has conducted project, representation, and business development activities with France, Spain, Japan, and China-based international technology and engineering firms.',
  'about.p3': 'This experience forms the foundation of BOMER\'s technical capability, project management proficiency, and corporate expertise. Today, we develop solutions across six main activity areas: artificial intelligence, aviation and air control systems, rail transportation, water and health technologies, smart city systems, and environmental technologies.',

  'vm.eyebrow': 'Vision & Mission',
  'vm.vision_title': 'Our Vision',
  'vm.vision_desc': 'To be a trusted and innovative engineering brand that delivers international-standard engineering solutions for Turkey\'s critical infrastructure and technology needs. Producing local and national solutions from rail systems to smart cities, from aviation to environmental technologies.',
  'vm.mission_title': 'Our Mission',
  'vm.mission_desc': 'Leveraging our corporate experience and international partnerships to provide end-to-end engineering, project management, and technical consulting services to our clients. Data-driven approach, secure system design, and sustainable results in every project.',

  'principle.1.title': 'Data-Driven Engineering',
  'principle.1.desc': 'Every decision is backed by simulation and algorithms. Engineering is not estimation — it is evidence.',
  'principle.2.title': 'Secure & Critical Systems',
  'principle.2.desc': 'Secure communication and real-time control meeting aviation and rail system standards.',
  'principle.3.title': 'Sustainability',
  'principle.3.desc': 'Energy efficiency, water conservation, and carbon reduction solutions are core criteria in every project.',

  'timeline.eyebrow': 'Timeline',
  'timeline.title1': 'A journey',
  'timeline.title2': 'of years',
  'timeline.1996': 'BOMERGRUP founded. Focused on transportation, railway, and electromechanical projects.',
  'timeline.2002': 'Partnership with project groups. Active role in HSR signaling and radar modernization projects.',
  'timeline.2008': 'International partnerships with France, Spain, and Japan-based technology firms. Representation and business development began.',
  'timeline.2014': 'Ankara Metro and China-based locomotive manufacturer — diesel and electric locomotive and high-speed train project experience.',
  'timeline.2020': 'Expansion into AI, environmental technologies, and water technology disciplines. Smart city systems R&D initiated.',

  'cert.eyebrow': 'Quality & Certifications',
  'cert.iso9001': 'Quality Management System',
  'cert.iso27001': 'Information Security Management',

  'srv.eyebrow': 'Activity Areas',
  'srv.title1': 'Advanced technology',
  'srv.title2': 'engineering across five disciplines',

  'srv.01.title': 'Artificial Intelligence & Autonomous Systems',
  'srv.01.desc': 'Big data analytics, predictive maintenance algorithms, and intelligent decision support systems. Image processing-powered smart cameras and object recognition. Autonomous ground vehicles and driverless rail system software.',
  'srv.01.tags': 'Machine Learning|Image Processing|Autonomous Systems|Decision Support',

  'srv.02.title': 'Aviation & Air Control Systems',
  'srv.02.desc': 'Design, integration, and modernization of air traffic and radar systems compliant with civil aviation standards. Airspace monitoring systems, real-time operating systems, and secure communication protocols.',
  'srv.02.tags': 'Air Traffic|Radar|Airspace|System Integration',

  'srv.03.title': 'Rail Systems & Transportation Technologies',
  'srv.03.desc': 'Engineering, contracting, and system integration in railway lines, electric locomotive, and high-speed train projects. Track infrastructure, signaling, modernization, and transportation network optimization capabilities.',
  'srv.03.tags': 'Railway|Locomotive|High-Speed Train|Modernization',

  'srv.04.title': 'Water & Health Technologies',
  'srv.04.desc': 'Product and system development in water technologies through partnerships with South Korean firms. Development and market delivery of heating, HVAC, water management, and related systems. Engineering solutions in health technologies.',
  'srv.04.tags': 'Water Technologies|Heating|HVAC|Water Management',

  'srv.05.title': 'Smart City Systems',
  'srv.05.desc': 'Technology, engineering, and system integration solutions within smart city applications. Applying technological advancements in projects. System and product development in smart city infrastructure.',
  'srv.05.tags': 'System Integration|Product Development|IoT|Smart Infrastructure',

  'eng.eyebrow': 'Engineering & Contracting',
  'eng.title1': 'Critical infrastructure',
  'eng.title2': 'engineering and system integration',
  'eng.desc': 'Our engineering, contracting, and system integration capabilities in rail technologies, airspace modernization, and transportation infrastructure.',
  'eng.rail.title': 'Rail Systems & Transportation',
  'eng.rail.desc': 'Engineering and contracting experience in railway technologies, electric locomotive, and high-speed train projects. Track infrastructure, signaling, modernization, and system integration capabilities.',
  'eng.aviation.title': 'Aviation & Radar Systems',
  'eng.aviation.desc': 'Engineering and contracting experience in airspace modernization projects. Design, integration, and modernization of radar systems.',
  'eng.dhmi.title': 'Airspace Modernization Project',
  'eng.dhmi.desc': 'Integration of 23 radar systems within the Turkey Airspace Modernization Project: 18 SSR (Secondary Surveillance Radar) and 5 PSR (Primary Surveillance Radar).',
  'eng.capabilities.title': 'Our Capabilities',
  'eng.feat.1': 'Engineering and contracting experience',
  'eng.feat.2': 'Experience in public and private sector projects',
  'eng.feat.3': 'Partnerships with international technology firms',
  'eng.feat.4': 'Developing innovative solutions',
  'eng.feat.5': 'Integrated systems and project management',
  'eng.feat.6': 'Technical support and service continuity',

  'sc.eyebrow': 'Smart City Systems',
  'sc.title1': 'System and product development',
  'sc.title2': 'for smart cities',
  'sc.desc': 'BOMER Engineering develops technology, engineering, and system integration solutions within smart city applications, aiming to apply technological advancements in its projects. The company conducts system and product development activities in smart city infrastructure.',
  'sc.water_title': 'Water Technologies',
  'sc.water_desc': 'Product and system development in water technologies through partnerships with South Korean firms; development and market delivery of heating, HVAC, water management, and related systems.',
  'sc.cta_title': 'A smart city solution for your city',
  'sc.cta_desc': 'We analyze your existing infrastructure and prepare a phased smart city roadmap tailored to your city. From pilot deployment to full integration.',
  'sc.cta_btn': 'Learn More',

  'env.eyebrow': 'Environmental Technologies & Sustainability',
  'env.title1': 'Sustainability',
  'env.title2': 'and environmental technologies',
  'env.desc': 'We approach sustainability not only within the scope of the environment, but from a broader perspective. We create value for future generations through environmental technologies and sustainable infrastructure solutions.',
  'env.item.1.title': 'Sustainability & Environmental Technologies',
  'env.item.1.desc': 'Developing solutions in line with eco-friendly technologies and sustainability principles. Carbon footprint reduction and green infrastructure applications.',
  'env.item.2.title': 'Smart Waste Management',
  'env.item.2.desc': 'Dynamic optimization of waste collection routes using fill-level sensors and IoT-based systems. Preventing unnecessary trips and saving fuel.',
  'env.item.3.title': 'Water & Energy Efficiency',
  'env.item.3.desc': 'Monitoring pressure, flow, and leakage in water networks. Energy distribution optimization and efficiency modeling for resource conservation.',
  'env.item.4.title': 'Environmental Monitoring Systems',
  'env.item.4.desc': 'Real-time citywide environmental map with air quality, noise pollution, and temperature sensors. Early warning system for public health.',
  'env.item.5.title': 'Innovative & Sustainable Infrastructure Solutions',
  'env.item.5.desc': 'Design and development of environmentally compatible and sustainable infrastructure systems that meet the needs of future generations.',

  'proj.eyebrow': 'Projects & References',
  'proj.title': 'Selected work',
  'proj.all': 'All Solutions',

  'proj.01.name': 'Predictive Maintenance Platform',
  'proj.01.type': 'AI · Machine Learning',
  'proj.01.desc': 'AI-based decision support system that predicts equipment failures using sensor data.',
  'proj.01.tag': 'AI & Autonomous',

  'proj.02.name': 'Smart Surveillance System',
  'proj.02.type': 'Image Processing · Monitoring',
  'proj.02.desc': 'AI-powered camera systems for object recognition and environmental monitoring. Real-time situation detection.',
  'proj.02.tag': 'Image Processing',

  'proj.03.name': 'Water Management & Treatment System',
  'proj.03.type': 'Water Technologies · IoT',
  'proj.03.desc': 'Water management, heating, and HVAC systems developed through partnerships with South Korean firms. Water network monitoring and optimization.',
  'proj.03.tag': 'Water Technologies',

  'proj.04.name': 'Rail Asset Management',
  'proj.04.type': 'Rail · Signaling',
  'proj.04.desc': 'Control and monitoring system that detects wear and failure risks on railway lines in advance using AI.',
  'proj.04.tag': 'Rail Systems',

  'proj.05.name': 'Airspace Modernization Project',
  'proj.05.type': 'Aviation · Radar',
  'proj.05.desc': 'Integration of 23 radar systems (18 SSR + 5 PSR) within the Turkey Airspace Modernization Project.',
  'proj.05.tag': 'Aviation',

  'proj.06.name': 'Smart Waste Management',
  'proj.06.type': 'Environment · IoT',
  'proj.06.desc': 'Dynamic optimization of waste collection routes using smart bins and fill-level sensors.',
  'proj.06.tag': 'Environmental Tech',

  'proj.07.name': 'Smart City Data Platform',
  'proj.07.type': 'IoT · City Management',
  'proj.07.desc': 'Central city data platform collecting traffic, waste, energy, and environmental data in a single dashboard.',
  'proj.07.tag': 'Smart City',

  'proj.08.name': 'Environmental Monitoring Platform',
  'proj.08.type': 'Environment · Sensor Network',
  'proj.08.desc': 'Real-time environmental monitoring system with air quality, noise, and temperature sensors across the city.',
  'proj.08.tag': 'Environmental Tech',

  'proj.detail': 'Detail',

  'ref.eyebrow': 'Projects & References',
  'ref.title1': 'Trusted projects',
  'ref.title2': 'and references',
  'ref.desc': 'Since 1996, we have participated in Turkey\'s leading transportation, airspace, and infrastructure projects. We have conducted partnerships and representation activities with international technology firms.',
  'ref.rail_title': 'Railway & Transportation Projects',
  'ref.rail.1': 'Ankara–Istanbul High-Speed Train Signaling Project',
  'ref.rail.2': 'Ankara–Konya HST Infrastructure Project — Track works, Ballast & Sub-ballast production',
  'ref.rail.3': 'Ankara Metro — Diesel and electric locomotive and high-speed train works',
  'ref.rail.4': 'Bursa Light Rail System Phase 2 — Electromechanical Works',
  'ref.rail.5': 'Kayseray Kayseri Light Rail System — Mechanical Works',
  'ref.rail.6': 'Estram Eskisehir Light Rail System — Rail and equipment supply, electromechanical',

  'ref.aviation_title': 'Aviation & Radar Projects',
  'ref.aviation.1': 'Airspace Modernization Project — 23 radar integration (18 SSR + 5 PSR)',
  'ref.aviation.2': 'Air traffic control systems — Engineering and contracting',
  'ref.aviation.3': 'Radar modernization — System integration and technical support',

  'ref.intl_title': 'International Partnerships',
  'ref.intl.1': 'France-based technology firm — Railway signaling projects, Turkey representation',
  'ref.intl.2': 'Spain-based air traffic firm — DHMI project IT, all local works and Turkey representation',
  'ref.intl.3': 'Spain-based electromechanical firm — Istanbul tunnels electromechanical projects, JV preparation',
  'ref.intl.4': 'Japan-based trading and technology firm — Electric locomotive supply, local and technical advisory',
  'ref.intl.5': 'China-based locomotive manufacturer — High-speed train set procurement, local works and partnership',
  'ref.note': 'The projects listed above represent work successfully completed by our partner and managers within companies where they previously served as partners or managers, demonstrating BOMER\'s technical and managerial experience.',

  'part.eyebrow': 'International Partnerships',
  'part.title1': 'Technology partnerships',
  'part.title2': 'and collaborations',
  'part.desc': 'BOMER Engineering aims to deliver innovative solutions in Turkey by developing partnerships with international technology and engineering firms.',
  'part.companies': 'Our Partner Companies',
  'part.item.1.title': 'International Technology Partnerships',
  'part.item.1.desc': 'Developing technology partnerships and strategic collaborations with leading international firms in their sectors.',
  'part.item.2.title': 'Technology Transfer & Engineering Collaborations',
  'part.item.2.desc': 'Bringing innovative solutions to Turkey through international technology transfer and engineering collaborations.',
  'part.item.3.title': 'Joint Projects with Leading Firms',
  'part.item.3.desc': 'Developing joint projects with industry-leading firms and delivering solutions at international standards.',
  'part.item.4.title': 'Local Engineering & System Integration',
  'part.item.4.desc': 'Adapting international technologies to Turkey through local engineering, implementation, and system integration capabilities.',
  'part.item.5.title': 'Product Development for Turkey Market',
  'part.item.5.desc': 'Technology and product development for the Turkey market. Producing local and national solutions.',

  'contact.eyebrow': 'Contact',
  'contact.title1': 'Let\'s design your',
  'contact.title2': 'project together',
  'contact.desc': 'Get in touch to discuss a new project, receive technical consulting, or explore partnership opportunities.',
  'contact.name': 'Full Name',
  'contact.email': 'Email',
  'contact.company': 'Company (optional)',
  'contact.message': 'Your Message',
  'contact.placeholder': 'Briefly describe your project...',
  'contact.send': 'Send',
  'contact.sending': 'Sending...',
  'contact.error': 'Your message could not be sent. Please try again.',
  'contact.sent_title': 'Message received',
  'contact.sent_desc': 'We will contact you as soon as possible. Thank you.',
  'contact.email_label': 'Email',
  'contact.phone_label': 'Phone',
  'contact.office_label': 'Office',

  'footer.sitemap': 'Sitemap',
  'footer.contact': 'Contact',
  'footer.rights': 'All rights reserved.',
  'footer.top': 'Back to Top',
  'footer.brand_desc': 'Engineering, contracting, and system integration solutions in rail systems, aviation, water technologies, environment, and smart city infrastructure.',
  'footer.engineering': 'Engineering',

  // Legal
  'legal.privacy': 'Privacy Policy',
  'legal.terms': 'Terms of Use',
  'legal.cookies': 'Cookie Policy',
  'legal.close': 'Close',

  // Cookie banner
  'cookie.banner_label': 'Cookie consent notice',
  'cookie.text': 'We use cookies to improve our site. Necessary cookies are always active; we need your consent for analytics cookies.',
  'cookie.link': 'Cookie Policy',
  'cookie.accept': 'Accept',
  'cookie.decline': 'Decline',
};

const es: Dict = {
  'nav.kurumsal': 'Nosotros',
  'nav.faaliyetler': 'Áreas de Actividad',
  'nav.muhendislik': 'Ingeniería y Contratación',
  'nav.projeler': 'Proyectos y Referencias',
  'nav.isbirligi': 'Alianzas Internacionales',
  'nav.iletisim': 'Contacto',
  'nav.cta': 'Contáctenos',

  'hero.eyebrow': 'BOMERGRUP · Desde 1996',
  'hero.title1': 'Profundidad y experiencia',
  'hero.title2': 'internacional en ingeniería',
  'hero.desc': 'Experiencia en proyectos de sistemas de transporte, tecnologías ferroviarias, sistemas de tráfico aéreo, tecnologías ambientales e infraestructura de ciudades inteligentes. Soluciones de ingeniería e integración de sistemas para las principales instituciones de Turquía y socios internacionales.',
  'hero.cta1': 'Áreas de Actividad',
  'hero.cta2': 'Ver Soluciones',
  'hero.scroll': 'Desplazar',

  'stats.yil': 'Años de Experiencia',
  'stats.disiplin': 'Disciplinas',
  'stats.referans': 'Referencias Corporativas',
  'stats.ulke': 'Alianzas por País',

  'about.eyebrow': 'Sobre Nosotros',
  'about.title1': 'Construyendo con confianza',
  'about.title2': 'desde 1996',
  'about.p1': 'BOMERGRUP opera desde 1996 en los campos de ingeniería, desarrollo de proyectos, comercio internacional, representación, consultoría técnica y desarrollo de inversiones. La empresa ha participado especialmente en sistemas de transporte, tecnologías ferroviarias, sistemas de aeropuertos y tráfico aéreo, infraestructura electromecánica, desarrollo de terrenos y proyectos de inversión a gran escala.',
  'about.p2': 'Nuestro socio anteriormente se desempeñó como socio y gerente dentro de grupos de proyectos, participando en importantes inversiones de transporte, sistemas ferroviarios, modernización de radares, viviendas, estructuras comerciales y salud de Turquía. Además, ha realizado actividades con firmas internacionales de tecnología e ingeniería con sede en Francia, España, Japón y China.',
  'about.p3': 'Esta experiencia forma la base de la capacidad técnica, competencia en gestión de proyectos y experiencia corporativa de BOMER. Hoy, desarrollamos soluciones en seis áreas principales: inteligencia artificial, aviación y control aéreo, transporte ferroviario, tecnologías de agua y salud, sistemas de ciudades inteligentes y tecnologías ambientales.',

  'vm.eyebrow': 'Visión & Misión',
  'vm.vision_title': 'Nuestra Visión',
  'vm.vision_desc': 'Ser una marca de ingeniería confiable e innovadora que ofrece soluciones de ingeniería de estándares internacionales para las necesidades críticas de infraestructura y tecnología de Turquía. Produciendo soluciones locales y nacionales desde sistemas ferroviarios hasta ciudades inteligentes, de aviación a tecnologías ambientales.',
  'vm.mission_title': 'Nuestra Misión',
  'vm.mission_desc': 'Aprovechando nuestra experiencia corporativa y alianzas internacionales para proporcionar servicios integrales de ingeniería, gestión de proyectos y consultoría técnica. Enfoque basado en datos, diseño seguro de sistemas y resultados sostenibles en cada proyecto.',

  'principle.1.title': 'Ingeniería Basada en Datos',
  'principle.1.desc': 'Cada decisión está respaldada por simulación y algoritmos. La ingeniería no es estimación — es evidencia.',
  'principle.2.title': 'Sistemas Seguros y Críticos',
  'principle.2.desc': 'Comunicación segura y control en tiempo real cumpliendo estándares de aviación y sistemas ferroviarios.',
  'principle.3.title': 'Sostenibilidad',
  'principle.3.desc': 'La eficiencia energética, conservación del agua y reducción de carbono son criterios fundamentales en cada proyecto.',

  'timeline.eyebrow': 'Cronología',
  'timeline.title1': 'Un trayecto',
  'timeline.title2': 'de años',
  'timeline.1996': 'BOMERGRUP fundada. Enfoque en proyectos de transporte, ferrocarril y electromecánicos.',
  'timeline.2002': 'Asociación con grupos de proyectos. Rol activo en proyectos de señalización de trenes de alta velocidad y modernización de radares.',
  'timeline.2008': 'Alianzas internacionales con firmas tecnológicas con sede en Francia, España y Japón. Comenzó representación y desarrollo de negocios.',
  'timeline.2014': 'Metro de Ankara y fabricante de locomotoras con sede en China — experiencia en locomotoras diésel y eléctricas y trenes de alta velocidad.',
  'timeline.2020': 'Expansión a disciplinas de IA, tecnologías ambientales y tecnologías del agua. Inició I+D en sistemas de ciudades inteligentes.',

  'cert.eyebrow': 'Calidad y Certificaciones',
  'cert.iso9001': 'Sistema de Gestión de Calidad',
  'cert.iso27001': 'Gestión de Seguridad de Información',

  'srv.eyebrow': 'Áreas de Actividad',
  'srv.title1': 'Ingeniería de tecnología avanzada',
  'srv.title2': 'en cinco disciplinas',

  'srv.01.title': 'Inteligencia Artificial y Sistemas Autónomos',
  'srv.01.desc': 'Análisis de big data, algoritmos de mantenimiento predictivo y sistemas inteligentes de soporte de decisiones. Cámaras inteligentes con procesamiento de imágenes y reconocimiento de objetos. Vehículos terrestres autónomos y software de sistemas ferroviarios sin conductor.',
  'srv.01.tags': 'Aprendizaje Automático|Procesamiento de Imágenes|Sistemas Autónomos|Soporte de Decisiones',

  'srv.02.title': 'Aviación y Sistemas de Control Aéreo',
  'srv.02.desc': 'Diseño, integración y modernización de sistemas de tráfico aéreo y radar conforme a estándares de aviación civil. Sistemas de monitoreo de espacio aéreo, sistemas operativos en tiempo real y protocolos de comunicación segura.',
  'srv.02.tags': 'Tráfico Aéreo|Radar|Espacio Aéreo|Integración de Sistemas',

  'srv.03.title': 'Sistemas Ferroviarios y Tecnologías de Transporte',
  'srv.03.desc': 'Ingeniería, contratación e integración de sistemas en proyectos de líneas ferroviarias, locomotoras eléctricas y trenes de alta velocidad. Infraestructura de vía, señalización, modernización y optimización de redes de transporte.',
  'srv.03.tags': 'Ferrocarril|Locomotora|Tren de Alta Velocidad|Modernización',

  'srv.04.title': 'Tecnologías de Agua y Salud',
  'srv.04.desc': 'Desarrollo de productos y sistemas en tecnologías del agua mediante alianzas con firmas surcoreanas. Desarrollo y entrega al mercado de sistemas de calefacción, climatización, gestión del agua y relacionados. Soluciones de ingeniería en tecnologías de la salud.',
  'srv.04.tags': 'Tecnologías del Agua|Calefacción|Climatización|Gestión del Agua',

  'srv.05.title': 'Sistemas de Ciudad Inteligente',
  'srv.05.desc': 'Soluciones de tecnología, ingeniería e integración de sistemas en aplicaciones de ciudades inteligentes. Aplicación de avances tecnológicos en proyectos. Desarrollo de sistemas y productos en infraestructura de ciudades inteligentes.',
  'srv.05.tags': 'Integración de Sistemas|Desarrollo de Productos|IoT|Infraestructura Inteligente',

  'eng.eyebrow': 'Ingeniería y Contratación',
  'eng.title1': 'Infraestructura crítica',
  'eng.title2': 'ingeniería e integración de sistemas',
  'eng.desc': 'Nuestras capacidades de ingeniería, contratación e integración de sistemas en tecnologías ferroviarias, modernización de espacio aéreo e infraestructura de transporte.',
  'eng.rail.title': 'Sistemas Ferroviarios y Transporte',
  'eng.rail.desc': 'Experiencia en ingeniería y contratación en tecnologías ferroviarias, locomotoras eléctricas y trenes de alta velocidad. Infraestructura de vía, señalización, modernización e integración de sistemas.',
  'eng.aviation.title': 'Aviación y Sistemas de Radar',
  'eng.aviation.desc': 'Experiencia en ingeniería y contratación en proyectos de modernización de espacio aéreo. Diseño, integración y modernización de sistemas de radar.',
  'eng.dhmi.title': 'Proyecto de Modernización del Espacio Aéreo',
  'eng.dhmi.desc': 'Integración de 23 sistemas de radar dentro del Proyecto de Modernización del Espacio Aéreo de Turquía: 18 SSR (Radar Secundario de Vigilancia) y 5 PSR (Radar Primario de Vigilancia).',
  'eng.capabilities.title': 'Nuestras Capacidades',
  'eng.feat.1': 'Experiencia en ingeniería y contratación',
  'eng.feat.2': 'Experiencia en proyectos públicos y privados',
  'eng.feat.3': 'Alianzas con firmas tecnológicas internacionales',
  'eng.feat.4': 'Desarrollo de soluciones innovadoras',
  'eng.feat.5': 'Sistemas integrados y gestión de proyectos',
  'eng.feat.6': 'Soporte técnico y continuidad de servicio',

  'sc.eyebrow': 'Sistemas de Ciudad Inteligente',
  'sc.title1': 'Desarrollo de sistemas y productos',
  'sc.title2': 'para ciudades inteligentes',
  'sc.desc': 'BOMER Ingeniería desarrolla soluciones de tecnología, ingeniería e integración de sistemas en aplicaciones de ciudades inteligentes, con el objetivo de aplicar avances tecnológicos en sus proyectos. Realiza actividades de desarrollo de sistemas y productos en infraestructura de ciudades inteligentes.',
  'sc.water_title': 'Tecnologías del Agua',
  'sc.water_desc': 'Desarrollo de productos y sistemas en tecnologías del agua mediante alianzas con firmas surcoreanas; desarrollo y entrega al mercado de sistemas de calefacción, climatización, gestión del agua y relacionados.',
  'sc.cta_title': 'Una solución de ciudad inteligente para su ciudad',
  'sc.cta_desc': 'Analizamos su infraestructura existente y preparamos una hoja de ruta de ciudad inteligente por fases adaptada a su ciudad. Desde implementación piloto hasta integración completa.',
  'sc.cta_btn': 'Más información',

  'env.eyebrow': 'Tecnologías Ambientales y Sostenibilidad',
  'env.title1': 'Sostenibilidad',
  'env.title2': 'y tecnologías ambientales',
  'env.desc': 'Abordamos la sostenibilidad no solo desde el ámbito ambiental, sino desde una perspectiva más amplia. Creamos valor para las generaciones futuras mediante tecnologías ambientales y soluciones de infraestructura sostenible.',
  'env.item.1.title': 'Sostenibilidad y Tecnologías Ambientales',
  'env.item.1.desc': 'Desarrollo de soluciones en línea con tecnologías ecológicas y principios de sostenibilidad. Reducción de huella de carbono y aplicaciones de infraestructura verde.',
  'env.item.2.title': 'Gestión Inteligente de Residuos',
  'env.item.2.desc': 'Optimización dinámica de rutas de recogida usando sensores de nivel de llenado y sistemas IoT. Evita viajes innecesarios y ahorra combustible.',
  'env.item.3.title': 'Eficiencia de Agua y Energía',
  'env.item.3.desc': 'Monitoreo de presión, flujo y fugas en redes de agua. Optimización de distribución de energía y modelado de eficiencia para conservación de recursos.',
  'env.item.4.title': 'Sistemas de Monitoreo Ambiental',
  'env.item.4.desc': 'Mapa ambiental en tiempo real con sensores de calidad del aire, contaminación acústica y temperatura. Sistema de alerta temprana para salud pública.',
  'env.item.5.title': 'Soluciones de Infraestructura Innovadora y Sostenible',
  'env.item.5.desc': 'Diseño y desarrollo de sistemas de infraestructura compatibles con el medio ambiente y sostenibles que satisfagan las necesidades de las generaciones futuras.',

  'proj.eyebrow': 'Proyectos y Referencias',
  'proj.title': 'Trabajos seleccionados',
  'proj.all': 'Todas las Soluciones',

  'proj.01.name': 'Plataforma de Mantenimiento Predictivo',
  'proj.01.type': 'IA · Aprendizaje Automático',
  'proj.01.desc': 'Sistema de soporte de decisiones basado en IA que predice fallos de equipos usando datos de sensores.',
  'proj.01.tag': 'IA y Autónomos',

  'proj.02.name': 'Sistema de Vigilancia Inteligente',
  'proj.02.type': 'Procesamiento de Imágenes · Monitoreo',
  'proj.02.desc': 'Sistemas de cámaras con IA para reconocimiento de objetos y monitoreo ambiental. Detección de situaciones en tiempo real.',
  'proj.02.tag': 'Procesamiento de Imágenes',

  'proj.03.name': 'Sistema de Gestión y Tratamiento de Agua',
  'proj.03.type': 'Tecnologías del Agua · IoT',
  'proj.03.desc': 'Sistemas de gestión de agua, calefacción y climatización desarrollados mediante alianzas con firmas surcoreanas. Monitoreo y optimización de red de agua.',
  'proj.03.tag': 'Tecnologías del Agua',

  'proj.04.name': 'Gestión de Activos Ferroviarios',
  'proj.04.type': 'Ferrocarril · Señalización',
  'proj.04.desc': 'Sistema de control y monitoreo que detecta desgaste y riesgos de fallo en líneas ferroviarias con anticipación usando IA.',
  'proj.04.tag': 'Sistemas Ferroviarios',

  'proj.05.name': 'Proyecto de Modernización del Espacio Aéreo',
  'proj.05.type': 'Aviación · Radar',
  'proj.05.desc': 'Integración de 23 sistemas de radar (18 SSR + 5 PSR) dentro del Proyecto de Modernización del Espacio Aéreo de Turquía.',
  'proj.05.tag': 'Aviación',

  'proj.06.name': 'Gestión Inteligente de Residuos',
  'proj.06.type': 'Medio Ambiente · IoT',
  'proj.06.desc': 'Optimización dinámica de rutas de recogida usando contenedores inteligentes y sensores de nivel de llenado.',
  'proj.06.tag': 'Tecnologías Ambientales',

  'proj.07.name': 'Plataforma de Datos de Ciudad Inteligente',
  'proj.07.type': 'IoT · Gestión Urbana',
  'proj.07.desc': 'Plataforma central de datos urbanos que recopila datos de tráfico, residuos, energía y medio ambiente en un solo panel.',
  'proj.07.tag': 'Ciudad Inteligente',

  'proj.08.name': 'Plataforma de Monitoreo Ambiental',
  'proj.08.type': 'Medio Ambiente · Red de Sensores',
  'proj.08.desc': 'Sistema de monitoreo ambiental en tiempo real con sensores de calidad del aire, ruido y temperatura en toda la ciudad.',
  'proj.08.tag': 'Tecnologías Ambientales',

  'proj.detail': 'Detalle',

  'ref.eyebrow': 'Proyectos y Referencias',
  'ref.title1': 'Proyectos confiables',
  'ref.title2': 'y referencias',
  'ref.desc': 'Desde 1996, hemos participado en los principales proyectos de transporte, espacio aéreo e infraestructura de Turquía. Hemos realizado alianzas y actividades de representación con firmas tecnológicas internacionales.',
  'ref.rail_title': 'Proyectos Ferroviarios y de Transporte',
  'ref.rail.1': 'Proyecto de Señalización del Tren de Alta Velocidad Ankara–Estambul',
  'ref.rail.2': 'Proyecto de Infraestructura TAV Ankara–Konya — Obras de vía, producción de balasto y sub-balasto',
  'ref.rail.3': 'Metro de Ankara — Trabajos de locomotoras diésel y eléctricas y trenes de alta velocidad',
  'ref.rail.4': 'Sistema Ligero sobre Rieles de Bursa Fase 2 — Obras Electromecánicas',
  'ref.rail.5': 'Kayseray Sistema Ligero sobre Rieles de Kayseri — Obras Mecánicas',
  'ref.rail.6': 'Estram Sistema Ligero sobre Rieles de Eskişehir — Suministro de rieles y equipos, electromecánico',

  'ref.aviation_title': 'Proyectos de Aviación y Radar',
  'ref.aviation.1': 'Proyecto de Modernización del Espacio Aéreo — Integración de 23 radares (18 SSR + 5 PSR)',
  'ref.aviation.2': 'Sistemas de control de tráfico aéreo — Ingeniería y contratación',
  'ref.aviation.3': 'Modernización de radar — Integración de sistemas y soporte técnico',

  'ref.intl_title': 'Alianzas Internacionales',
  'ref.intl.1': 'Firma tecnológica con sede en Francia — Proyectos de señalización ferroviaria, representación en Turquía',
  'ref.intl.2': 'Firma de tráfico aéreo con sede en España — Proyecto DHMI TI, todos los trabajos locales y representación en Turquía',
  'ref.intl.3': 'Firma electromecánica con sede en España — Proyectos electromecánicos de túneles de Estambul, preparación de JV',
  'ref.intl.4': 'Firma comercial y tecnológica con sede en Japón — Suministro de locomotoras eléctricas, asesoría local y técnica',
  'ref.intl.5': 'Fabricante de locomotoras con sede en China — Adquisición de trenes de alta velocidad, trabajos locales y alianza',
  'ref.note': 'Los proyectos mencionados representan trabajos completados exitosamente por nuestro socio y gerentes dentro de empresas donde anteriormente se desempeñaron como socios o gerentes, demostrando la experiencia técnica y gerencial de BOMER.',

  'part.eyebrow': 'Alianzas Internacionales',
  'part.title1': 'Alianzas tecnológicas',
  'part.title2': 'y colaboraciones',
  'part.desc': 'BOMER Ingeniería tiene como objetivo ofrecer soluciones innovadoras en Turquía desarrollando alianzas con firmas internacionales de tecnología e ingeniería.',
  'part.companies': 'Firmas Colaboradoras',
  'part.item.1.title': 'Alianzas Tecnológicas Internacionales',
  'part.item.1.desc': 'Desarrollo de alianzas tecnológicas y colaboraciones estratégicas con firmas internacionales líderes en sus sectores.',
  'part.item.2.title': 'Transferencia de Tecnología y Colaboraciones de Ingeniería',
  'part.item.2.desc': 'Aportar soluciones innovadoras a Turquía mediante transferencia de tecnología internacional y colaboraciones de ingeniería.',
  'part.item.3.title': 'Proyectos Conjuntos con Firmas Líderes',
  'part.item.3.desc': 'Desarrollo de proyectos conjuntos con firmas líderes en la industria y entrega de soluciones con estándares internacionales.',
  'part.item.4.title': 'Ingeniería Local e Integración de Sistemas',
  'part.item.4.desc': 'Adaptación de tecnologías internacionales a Turquía mediante capacidades locales de ingeniería, implementación e integración de sistemas.',
  'part.item.5.title': 'Desarrollo de Productos para el Mercado de Turquía',
  'part.item.5.desc': 'Desarrollo de tecnología y productos para el mercado de Turquía. Producción de soluciones locales y nacionales.',

  'contact.eyebrow': 'Contacto',
  'contact.title1': 'Diseñemos su',
  'contact.title2': 'proyecto juntos',
  'contact.desc': 'Póngase en contacto para discutir un nuevo proyecto, recibir consultoría técnica o explorar oportunidades de colaboración.',
  'contact.name': 'Nombre Completo',
  'contact.email': 'Correo Electrónico',
  'contact.company': 'Empresa (opcional)',
  'contact.message': 'Su Mensaje',
  'contact.placeholder': 'Describa brevemente su proyecto...',
  'contact.send': 'Enviar',
  'contact.sending': 'Enviando...',
  'contact.error': 'No se pudo enviar tu mensaje. Por favor, inténtalo de nuevo.',
  'contact.sent_title': 'Mensaje recibido',
  'contact.sent_desc': 'Le contactaremos lo antes posible. Gracias.',
  'contact.email_label': 'Correo',
  'contact.phone_label': 'Teléfono',
  'contact.office_label': 'Oficina',

  'footer.sitemap': 'Mapa del Sitio',
  'footer.contact': 'Contacto',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.top': 'Volver Arriba',
  'footer.brand_desc': 'Soluciones de ingeniería, contratación e integración de sistemas en sistemas ferroviarios, aviación, tecnologías del agua, medio ambiente e infraestructura de ciudades inteligentes.',
  'footer.engineering': 'Ingeniería',

  // Legal
  'legal.privacy': 'Política de Privacidad',
  'legal.terms': 'Términos de Uso',
  'legal.cookies': 'Política de Cookies',
  'legal.close': 'Cerrar',

  // Cookie banner
  'cookie.banner_label': 'Aviso de consentimiento de cookies',
  'cookie.text': 'Usamos cookies para mejorar nuestro sitio. Las cookies necesarias siempre están activas; necesitamos su consentimiento para cookies analíticas.',
  'cookie.link': 'Política de Cookies',
  'cookie.accept': 'Aceptar',
  'cookie.decline': 'Rechazar',
};

const zh: Dict = {
  'nav.kurumsal': '关于我们',
  'nav.faaliyetler': '业务领域',
  'nav.muhendislik': '工程与承包',
  'nav.projeler': '项目与参考',
  'nav.isbirligi': '国际合作',
  'nav.iletisim': '联系我们',
  'nav.cta': '联系我们',

  'hero.eyebrow': 'BOMERGRUP · 自1996年起',
  'hero.title1': '工程领域的深度与',
  'hero.title2': '国际化经验',
  'hero.desc': '在交通系统、轨道技术、空中交通系统、环境技术和智慧城市基础设施领域的项目经验。为土耳其领先机构和国际合作伙伴提供工程和系统集成解决方案。',
  'hero.cta1': '业务领域',
  'hero.cta2': '查看解决方案',
  'hero.scroll': '向下滚动',

  'stats.yil': '年经验',
  'stats.disiplin': '学科领域',
  'stats.referans': '企业参考',
  'stats.ulke': '国家合作',

  'about.eyebrow': '关于我们',
  'about.title1': '自1996年起',
  'about.title2': '以信任铸就品质',
  'about.p1': 'BOMERGRUP成立于1996年，在工程、项目开发、国际贸易、代理、技术咨询和投资开发等领域开展业务。公司曾参与交通系统、铁路技术、机场和空中交通系统、机电基础设施、土地开发和大型投资项目。',
  'about.p2': '我们的合伙人此前在项目集团内担任合伙人和管理者，参与了土耳其重要的交通、轨道系统、雷达现代化、住宅、商业和医疗投资项目。此外，还与法国、西班牙、日本和中国的大型国际技术和工程公司开展了项目、代理和业务开发活动。',
  'about.p3': '这些经验构成了BOMER技术能力、项目管理能力和企业经验的基础。如今，我们在六大业务领域开发解决方案：人工智能、航空与空中管制系统、轨道交通、水与健康技术、智慧城市系统和环境技术。',

  'vm.eyebrow': '愿景与使命',
  'vm.vision_title': '我们的愿景',
  'vm.vision_desc': '成为一家值得信赖的创新型工程品牌，为土耳其的关键基础设施和技术需求提供国际标准的工程解决方案。从轨道系统到智慧城市，从航空到环境技术，提供本土化解决方案。',
  'vm.mission_title': '我们的使命',
  'vm.mission_desc': '利用我们的企业经验和国际合作，为客户提供端到端的工程、项目管理和技术咨询服务。在每个项目中坚持数据驱动方法、安全系统设计和可持续成果。',

  'principle.1.title': '数据驱动工程',
  'principle.1.desc': '每个决策都由仿真和算法支持。工程不是估算——而是证据。',
  'principle.2.title': '安全与关键系统',
  'principle.2.desc': '符合航空和轨道系统标准的安全通信和实时控制。',
  'principle.3.title': '可持续发展',
  'principle.3.desc': '能源效率、节水减排是每个项目的核心准则。',

  'timeline.eyebrow': '时间线',
  'timeline.title1': '岁月的',
  'timeline.title2': '历程',
  'timeline.1996': 'BOMERGRUP成立。专注于交通、铁路和机电项目。',
  'timeline.2002': '与项目集团合作。积极参与高铁信号和雷达现代化项目。',
  'timeline.2008': '与法国、西班牙和日本的技术公司建立国际合作。代理和业务开发活动启动。',
  'timeline.2014': '安卡拉地铁和中国机车制造商——柴油和电力机车及高铁项目经验。',
  'timeline.2020': '扩展至人工智能、环境技术和水技术领域。智慧城市系统研发启动。',

  'cert.eyebrow': '质量与认证',
  'cert.iso9001': '质量管理体系',
  'cert.iso27001': '信息安全管理',

  'srv.eyebrow': '业务领域',
  'srv.title1': '五大领域的',
  'srv.title2': '先进技术工程',

  'srv.01.title': '人工智能与自主系统',
  'srv.01.desc': '大数据分析、预测性维护算法和智能决策支持系统。图像处理支持的智能摄像头和目标识别。自主地面车辆和无人驾驶轨道系统软件。',
  'srv.01.tags': '机器学习|图像处理|自主系统|决策支持',

  'srv.02.title': '航空与空中管制系统',
  'srv.02.desc': '符合民航标准的空中交通和雷达系统的设计、集成和现代化。空域监控系统、实时操作系统和安全通信协议。',
  'srv.02.tags': '空中交通|雷达|空域|系统集成',

  'srv.03.title': '轨道系统与交通技术',
  'srv.03.desc': '在铁路线路、电力机车和高铁项目中的工程、承包和系统集成。轨道基础设施、信号、现代化和交通网络优化能力。',
  'srv.03.tags': '铁路|机车|高铁|现代化',

  'srv.04.title': '水与健康技术',
  'srv.04.desc': '通过与韩国公司合作开发水技术产品和系统。开发并向市场提供供暖、暖通空调、水管理及相关系统。健康技术领域的工程解决方案。',
  'srv.04.tags': '水技术|供暖|暖通空调|水管理',

  'srv.05.title': '智慧城市系统',
  'srv.05.desc': '在智慧城市应用范畴内提供技术、工程和系统集成解决方案。在项目中应用技术进步。在智慧城市基础设施中进行系统和产品开发。',
  'srv.05.tags': '系统集成|产品开发|物联网|智能基础设施',

  'eng.eyebrow': '工程与承包',
  'eng.title1': '关键基础设施',
  'eng.title2': '工程与系统集成',
  'eng.desc': '我们在轨道技术、空域现代化和交通基础设施方面的工程、承包和系统集成能力。',
  'eng.rail.title': '轨道系统与交通',
  'eng.rail.desc': '在轨道技术、电力机车和高铁项目中的工程和承包经验。轨道基础设施、信号、现代化和系统集成能力。',
  'eng.aviation.title': '航空与雷达系统',
  'eng.aviation.desc': '在空域现代化项目中的工程和承包经验。雷达系统的设计、集成和现代化。',
  'eng.dhmi.title': '空域现代化项目',
  'eng.dhmi.desc': '在土耳其空域现代化项目范围内集成23套雷达系统：18套SSR（二次监视雷达）和5套PSR（一次监视雷达）。',
  'eng.capabilities.title': '我们的能力',
  'eng.feat.1': '工程和承包经验',
  'eng.feat.2': '在公私部门项目中的经验',
  'eng.feat.3': '与国际技术公司合作',
  'eng.feat.4': '开发创新解决方案',
  'eng.feat.5': '综合系统和项目管理',
  'eng.feat.6': '技术支持和服务连续性',

  'sc.eyebrow': '智慧城市系统',
  'sc.title1': '智慧城市的',
  'sc.title2': '系统和产品开发',
  'sc.desc': 'BOMER工程在智慧城市应用范畴内开发技术、工程和系统集成解决方案，目标是在其项目中应用技术进步。在智慧城市基础设施中开展系统和产品开发活动。',
  'sc.water_title': '水技术',
  'sc.water_desc': '通过与韩国公司合作开发水技术产品和系统；开发并向市场提供供暖、暖通空调、水管理及相关系统。',
  'sc.cta_title': '为您的城市量身定制智慧城市方案',
  'sc.cta_desc': '我们分析您现有基础设施，为您制定分阶段智慧城市路线图。从试点部署到全面集成。',
  'sc.cta_btn': '了解更多',

  'env.eyebrow': '环境技术与可持续发展',
  'env.title1': '可持续发展',
  'env.title2': '与环境技术',
  'env.desc': '我们不仅从环境角度，而且从更广阔的视角来看待可持续发展。通过环境技术和可持续基础设施解决方案，为后代创造价值。',
  'env.item.1.title': '可持续发展与环境技术',
  'env.item.1.desc': '根据环保技术和可持续发展原则开发解决方案。碳足迹减少和绿色基础设施应用。',
  'env.item.2.title': '智能废物管理',
  'env.item.2.desc': '使用填充传感器和物联网系统动态优化垃圾收运路线。避免不必要的行程，节省燃料。',
  'env.item.3.title': '水与能源效率',
  'env.item.3.desc': '监测供水网络中的压力、流量和泄漏。能源分配优化和效率建模以节约资源。',
  'env.item.4.title': '环境监测系统',
  'env.item.4.desc': '通过空气质量、噪音污染和温度传感器构建全城实时环境地图。公共卫生预警系统。',
  'env.item.5.title': '创新和可持续基础设施解决方案',
  'env.item.5.desc': '设计和开发满足后代需求的环保和可持续基础设施系统。',

  'proj.eyebrow': '项目与参考',
  'proj.title': '精选案例',
  'proj.all': '全部解决方案',

  'proj.01.name': '预测性维护平台',
  'proj.01.type': '人工智能 · 机器学习',
  'proj.01.desc': '基于人工智能的决策支持系统，利用传感器数据预测设备故障。',
  'proj.01.tag': 'AI与自主',

  'proj.02.name': '智能监控系统',
  'proj.02.type': '图像处理 · 监测',
  'proj.02.desc': '基于人工智能的摄像头系统，用于目标识别和环境监测。实时状况检测。',
  'proj.02.tag': '图像处理',

  'proj.03.name': '水管理与处理系统',
  'proj.03.type': '水技术 · 物联网',
  'proj.03.desc': '通过与韩国公司合作开发的水管理、供暖和暖通空调系统。水网络监测和优化。',
  'proj.03.tag': '水技术',

  'proj.04.name': '轨道资产管理',
  'proj.04.type': '轨道 · 信号',
  'proj.04.desc': '利用人工智能提前检测铁路线路磨损和故障风险的监控和控制系统。',
  'proj.04.tag': '轨道系统',

  'proj.05.name': '空域现代化项目',
  'proj.05.type': '航空 · 雷达',
  'proj.05.desc': '在土耳其空域现代化项目范围内集成23套雷达系统（18套SSR + 5套PSR）。',
  'proj.05.tag': '航空',

  'proj.06.name': '智能废物管理',
  'proj.06.type': '环境 · 物联网',
  'proj.06.desc': '使用智能垃圾箱和填充传感器动态优化垃圾收运路线。',
  'proj.06.tag': '环境技术',

  'proj.07.name': '智慧城市数据平台',
  'proj.07.type': '物联网 · 城市管理',
  'proj.07.desc': '将交通、废物、能源和环境数据汇总到单一面板的集中城市数据平台。',
  'proj.07.tag': '智慧城市',

  'proj.08.name': '环境监测平台',
  'proj.08.type': '环境 · 传感器网络',
  'proj.08.desc': '通过空气质量、噪音和温度传感器实现全城实时环境监测系统。',
  'proj.08.tag': '环境技术',

  'proj.detail': '详情',

  'ref.eyebrow': '项目与参考',
  'ref.title1': '值得信赖的',
  'ref.title2': '项目与参考',
  'ref.desc': '自1996年以来，我们参与了土耳其重要的交通、空域和基础设施项目。与国际技术公司开展了合作和代理活动。',
  'ref.rail_title': '铁路与交通项目',
  'ref.rail.1': '安卡拉—伊斯坦布尔高铁信号项目',
  'ref.rail.2': '安卡拉—科尼亚高铁基础设施项目 — 轨道工程、道砟与底砟生产',
  'ref.rail.3': '安卡拉地铁——柴油和电力机车及高铁工作',
  'ref.rail.4': '布尔萨轻轨系统二期 — 机电工程',
  'ref.rail.5': 'Kayseray开塞利轻轨系统 — 机械工程',
  'ref.rail.6': 'Estram埃斯基谢希尔轻轨系统 — 钢轨及设备供应、机电',

  'ref.aviation_title': '航空与雷达项目',
  'ref.aviation.1': '空域现代化项目 — 23套雷达集成（18套SSR + 5套PSR）',
  'ref.aviation.2': '空中交通管制系统 — 工程与承包',
  'ref.aviation.3': '雷达现代化 — 系统集成和技术支持',

  'ref.intl_title': '国际合作',
  'ref.intl.1': '法国技术公司 — 铁路信号项目，土耳其代理',
  'ref.intl.2': '西班牙空中交通公司 — DHMI项目IT，所有本地工作和土耳其代理',
  'ref.intl.3': '西班牙机电公司 — 伊斯坦布尔隧道机电项目，合资准备',
  'ref.intl.4': '日本贸易技术公司 — 电力机车供应，本地和技术咨询',
  'ref.intl.5': '中国机车制造商 — 高铁列车采购，本地工作和合作',
  'ref.note': '上述项目代表我们的合伙人和管理者此前在相关公司担任合伙人或管理者期间成功完成的工作，体现了BOMER的技术和管理经验。',

  'part.eyebrow': '国际合作',
  'part.title1': '技术合作',
  'part.title2': '与伙伴关系',
  'part.desc': 'BOMER工程旨在通过与国际技术和工程公司建立合作关系，在土耳其提供创新解决方案。',
  'part.companies': '合作公司',
  'part.item.1.title': '国际技术合作',
  'part.item.1.desc': '与各行业领先的国际公司发展技术合作和战略伙伴关系。',
  'part.item.2.title': '技术转移与工程合作',
  'part.item.2.desc': '通过国际技术转移和工程合作，为土耳其带来创新解决方案。',
  'part.item.3.title': '与领先公司的联合项目',
  'part.item.3.desc': '与行业领先公司开发联合项目，提供国际标准的解决方案。',
  'part.item.4.title': '本地工程与系统集成',
  'part.item.4.desc': '通过本地工程、实施和系统集成能力，将国际技术适应土耳其市场。',
  'part.item.5.title': '面向土耳其市场的产品开发',
  'part.item.5.desc': '为土耳其市场开发技术和产品。提供本土化解决方案。',

  'contact.eyebrow': '联系我们',
  'contact.title1': '让我们一起',
  'contact.title2': '设计您的项目',
  'contact.desc': '欢迎与我们讨论新项目、获取技术咨询或探索合作机会。',
  'contact.name': '姓名',
  'contact.email': '电子邮箱',
  'contact.company': '公司（可选）',
  'contact.message': '您的留言',
  'contact.placeholder': '简要描述您的项目...',
  'contact.send': '发送',
  'contact.sending': '发送中...',
  'contact.error': '您的消息无法发送。请重试。',
  'contact.sent_title': '已收到您的留言',
  'contact.sent_desc': '我们将尽快与您联系。谢谢。',
  'contact.email_label': '邮箱',
  'contact.phone_label': '电话',
  'contact.office_label': '办公地址',

  'footer.sitemap': '网站地图',
  'footer.contact': '联系方式',
  'footer.rights': '版权所有。',
  'footer.top': '返回顶部',
  'footer.brand_desc': '在轨道系统、航空、水技术、环境和智慧城市基础设施领域提供工程、承包和系统集成解决方案。',
  'footer.engineering': '工程',

  // Legal
  'legal.privacy': '隐私政策',
  'legal.terms': '使用条款',
  'legal.cookies': 'Cookie政策',
  'legal.close': '关闭',

  // Cookie banner
  'cookie.banner_label': 'Cookie同意通知',
  'cookie.text': '我们使用Cookie来改进网站。必要Cookie始终启用;分析Cookie需要您的同意。',
  'cookie.link': 'Cookie政策',
  'cookie.accept': '接受',
  'cookie.decline': '拒绝',
};

const dicts: Record<Lang, Dict> = { tr, en, es, zh };

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType>({
  lang: 'tr',
  setLang: () => {},
  t: (k: string) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('tr');

  useEffect(() => {
    const saved = localStorage.getItem('bomer-lang') as Lang | null;
    if (saved && ['tr', 'en', 'es', 'zh'].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('bomer-lang', l);
  };

  const t = (key: string): string => {
    return dicts[lang][key] ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
