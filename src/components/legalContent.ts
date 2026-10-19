import type { Lang } from '@/i18n';

type LegalContent = { title: string; updated: string; sections: { h: string; p: string }[] };

export function getPrivacy(lang: Lang): LegalContent {
  const dict: Record<Lang, LegalContent> = {
    tr: {
      title: 'Gizlilik Politikası',
      updated: 'Son güncelleme: Ekim 2026',
      sections: [
        { h: '1. Genel', p: 'BOMERGRUP ("Şirket"), gizliliğinize saygı duyar. Bu politika, web sitemiz üzerinden topladığımız kişisel verilerin nasıl işlendiğini açıklar. KVKK (6698 sayılı Kanun) ve ilgili ikincil mevzuata uyumlu şekilde hareket ederiz.' },
        { h: '2. Toplanan Veriler', p: 'İletişim formu aracılığıyla ad, soyad, e-posta, firma adı ve mesajınız verilerini işleriz. Tarayıcı dil tercihi için localStorage kullanılır. Analitik amaçlarla anonim ziyaret verileri toplanabilir.' },
        { h: '3. İşleme Amaçları', p: 'Verileriniz yalnızca sizinle iletişim kurmak, talebinizi yanıtlamak ve hizmet kalitesini iyileştirmek amacıyla işlenir. Pazarlama amaçlı üçüncü taraflarla paylaşılmaz.' },
        { h: '4. Saklama Süresi', p: 'Kişisel verileriniz, talebiniz doğrultusunda silinmesini isteyene kadar veya ilgili yasal süreler bitene kadar saklanır.' },
        { h: '5. Haklarınız', p: 'KVKK kapsamında verilerinize erişme, düzeltme, silme ve işlemeye itiraz etme haklarına sahipsiniz. Talepleriniz için info@bomergrup.com adresine yazabilirsiniz.' },
        { h: '6. İletişim', p: 'Bu politika ile ilgili sorularınız için info@bomergrup.com adresine e-posta gönderebilirsiniz.' },
      ],
    },
    en: {
      title: 'Privacy Policy',
      updated: 'Last updated: October 2026',
      sections: [
        { h: '1. General', p: 'BOMERGRUP ("Company") respects your privacy. This policy explains how we process personal data collected via our website. We comply with applicable data protection laws.' },
        { h: '2. Data Collected', p: 'Through the contact form we process your name, email, company name and message. Browser language preference is stored in localStorage. Anonymous analytics data may be collected.' },
        { h: '3. Purposes', p: 'Your data is processed solely to communicate with you, respond to your request, and improve service quality. It is not shared with third parties for marketing.' },
        { h: '4. Retention', p: 'Your personal data is retained until you request deletion or until legal retention periods expire.' },
        { h: '5. Your Rights', p: 'You have the right to access, correct, delete, and object to processing of your data. Contact info@bomergrup.com for requests.' },
        { h: '6. Contact', p: 'For questions about this policy, email info@bomergrup.com.' },
      ],
    },
    es: {
      title: 'Política de Privacidad',
      updated: 'Última actualización: Octubre 2026',
      sections: [
        { h: '1. General', p: 'BOMERGRUP ("Empresa") respeta su privacidad. Esta política explica cómo procesamos los datos personales recopilados a través de nuestro sitio web.' },
        { h: '2. Datos Recopilados', p: 'A través del formulario de contacto procesamos su nombre, correo electrónico, empresa y mensaje. La preferencia de idioma se almacena en localStorage. Pueden recopilarse datos analíticos anónimos.' },
        { h: '3. Propósitos', p: 'Sus datos se procesan únicamente para comunicarnos con usted, responder a su solicitud y mejorar la calidad del servicio. No se comparten con terceros para marketing.' },
        { h: '4. Conservación', p: 'Sus datos personales se conservan hasta que solicite su eliminación o hasta que expiren los plazos legales.' },
        { h: '5. Sus Derechos', p: 'Tiene derecho a acceder, corregir, eliminar y oponerse al procesamiento de sus datos. Contacte info@bomergrup.com.' },
        { h: '6. Contacto', p: 'Para preguntas sobre esta política, escriba a info@bomergrup.com.' },
      ],
    },
    zh: {
      title: '隐私政策',
      updated: '最后更新:2026年10月',
      sections: [
        { h: '1. 一般条款', p: 'BOMERGRUP("公司")尊重您的隐私。本政策说明我们如何处理通过本网站收集的个人信息。' },
        { h: '2. 收集的数据', p: '通过联系表单,我们处理您的姓名、电子邮箱、公司名称和留言。语言偏好存储在localStorage中。可能会收集匿名分析数据。' },
        { h: '3. 目的', p: '您的数据仅用于与您沟通、回应您的请求和改善服务质量。不会与第三方共享用于营销。' },
        { h: '4. 保留', p: '您的个人数据将保留至您要求删除或法定保留期限届满。' },
        { h: '5. 您的权利', p: '您有权访问、更正、删除和反对处理您的数据。请联系 info@bomergrup.com。' },
        { h: '6. 联系', p: '如有关于本政策的问题,请发送邮件至 info@bomergrup.com。' },
      ],
    },
  };
  return dict[lang];
}

export function getTerms(lang: Lang): LegalContent {
  const dict: Record<Lang, LegalContent> = {
    tr: {
      title: 'Kullanım Şartları',
      updated: 'Son güncelleme: Ekim 2026',
      sections: [
        { h: '1. Kabul', p: 'Bu web sitesine erişerek, burada belirtilen kullanım şartlarını kabul etmiş olursunuz. Şartları kabul etmiyorsanız siteyi kullanmayınız.' },
        { h: '2. İçerik', p: 'Site içeriği bilgilendirme amaçlıdır. BOMERGRUP, içeriğin güncelliği veya tamamlığı konusunda garanti vermez. Tüm marka ve logo hakları saklıdır.' },
        { h: '3. Kullanım', p: 'Siteyi yalnızca yasal amaçlarla kullanabilirsiniz. Siteyi kötüye kullanma, güvenliğini tehdit etme veya yetkisiz erişim girişiminde bulunma yasaktır.' },
        { h: '4. Üçüncü Taraf Bağlantıları', p: 'Sitede yer alan dış bağlantıların içeriklerinden BOMERGRUP sorumlu değildir.' },
        { h: '5. Değişiklikler', p: 'BOMERGRUP, bu şartları zaman zaman güncelleme hakkını saklı tutar. Güncel şartlar bu sayfada yayınlanır.' },
        { h: '6. İletişim', p: 'Sorularınız için info@bomergrup.com.' },
      ],
    },
    en: {
      title: 'Terms of Use',
      updated: 'Last updated: October 2026',
      sections: [
        { h: '1. Acceptance', p: 'By accessing this website you accept these terms of use. If you do not accept them, please do not use the site.' },
        { h: '2. Content', p: 'Site content is for informational purposes. BOMERGRUP does not guarantee accuracy or completeness. All brand and logo rights reserved.' },
        { h: '3. Use', p: 'You may use the site only for lawful purposes. Misuse, security threats, or unauthorized access attempts are prohibited.' },
        { h: '4. Third-Party Links', p: 'BOMERGRUP is not responsible for content of external links on the site.' },
        { h: '5. Changes', p: 'BOMERGRUP reserves the right to update these terms. Current terms are published on this page.' },
        { h: '6. Contact', p: 'Questions: info@bomergrup.com.' },
      ],
    },
    es: {
      title: 'Términos de Uso',
      updated: 'Última actualización: Octubre 2026',
      sections: [
        { h: '1. Aceptación', p: 'Al acceder a este sitio web acepta estos términos de uso. Si no los acepta, no use el sitio.' },
        { h: '2. Contenido', p: 'El contenido del sitio es informativo. BOMERGRUP no garantiza exactitud o integridad. Todos los derechos de marca y logo reservados.' },
        { h: '3. Uso', p: 'Puede usar el sitio solo con fines lícitos. Se prohíbe el mal uso, amenazas a la seguridad o intentos de acceso no autorizado.' },
        { h: '4. Enlaces Externos', p: 'BOMERGRUP no es responsable del contenido de enlaces externos.' },
        { h: '5. Cambios', p: 'BOMERGRUP se reserva el derecho de actualizar estos términos.' },
        { h: '6. Contacto', p: 'Preguntas: info@bomergrup.com.' },
      ],
    },
    zh: {
      title: '使用条款',
      updated: '最后更新:2026年10月',
      sections: [
        { h: '1. 接受', p: '访问本网站即表示您接受这些使用条款。如不接受,请勿使用本网站。' },
        { h: '2. 内容', p: '网站内容仅供参考。BOMERGRUP不保证准确性或完整性。所有商标和标识权均保留。' },
        { h: '3. 使用', p: '您只能将本网站用于合法目的。禁止滥用、安全威胁或未经授权的访问尝试。' },
        { h: '4. 第三方链接', p: 'BOMERGRUP不对网站外部链接的内容负责。' },
        { h: '5. 变更', p: 'BOMERGRUP保留更新这些条款的权利。' },
        { h: '6. 联系', p: '问题请联系 info@bomergrup.com。' },
      ],
    },
  };
  return dict[lang];
}

export function getCookies(lang: Lang): LegalContent {
  const dict: Record<Lang, LegalContent> = {
    tr: {
      title: 'Çerez Politikası',
      updated: 'Son güncelleme: Ekim 2026',
      sections: [
        { h: '1. Çerez Nedir?', p: 'Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Site deneyimini iyileştirmek için kullanılır.' },
        { h: '2. Kullandığımız Çerezler', p: 'Zorunlu çerezler: dil tercihi (localStorage). Analitik çerezler: anonim ziyaret istatistikleri (yalnızca onayınız ile aktif edilir).' },
        { h: '3. Onay', p: 'Analitik çerezler yalnızca siz onay verdikten sonra aktif edilir. İlk ziyarette karşınıza çıkan çerez bandından tercih yapabilirsiniz.' },
        { h: '4. Tercihlerinizi Yönetme', p: 'Çerez tercihlerinizi istediğiniz zaman tarayıcı ayarlarınızdan veya bu sayfadaki bağlantıdan değiştirebilirsiniz.' },
        { h: '5. İletişim', p: 'Sorularınız için info@bomergrup.com.' },
      ],
    },
    en: {
      title: 'Cookie Policy',
      updated: 'Last updated: October 2026',
      sections: [
        { h: '1. What Are Cookies?', p: 'Cookies are small text files placed on your browser when you visit our website. They improve site experience.' },
        { h: '2. Cookies We Use', p: 'Necessary: language preference (localStorage). Analytics: anonymous visit statistics (activated only with your consent).' },
        { h: '3. Consent', p: 'Analytics cookies activate only after your consent. You can choose via the cookie banner shown on first visit.' },
        { h: '4. Managing Preferences', p: 'You can change cookie preferences anytime via browser settings or the link on this page.' },
        { h: '5. Contact', p: 'Questions: info@bomergrup.com.' },
      ],
    },
    es: {
      title: 'Política de Cookies',
      updated: 'Última actualización: Octubre 2026',
      sections: [
        { h: '1. ¿Qué son las cookies?', p: 'Las cookies son pequeños archivos de texto colocados en su navegador al visitar nuestro sitio.' },
        { h: '2. Cookies que Usamos', p: 'Necesarias: preferencia de idioma (localStorage). Analíticas: estadísticas anónimas (solo con su consentimiento).' },
        { h: '3. Consentimiento', p: 'Las cookies analíticas se activan solo tras su consentimiento. Puede elegir en el banner mostrado en su primera visita.' },
        { h: '4. Gestionar Preferencias', p: 'Puede cambiar sus preferencias en cualquier momento desde la configuración del navegador.' },
        { h: '5. Contacto', p: 'Preguntas: info@bomergrup.com.' },
      ],
    },
    zh: {
      title: 'Cookie政策',
      updated: '最后更新:2026年10月',
      sections: [
        { h: '1. 什么是Cookie?', p: 'Cookie是您访问我们网站时放置在浏览器中的小文本文件。' },
        { h: '2. 我们使用的Cookie', p: '必要:语言偏好(localStorage)。分析:匿名访问统计(仅在您同意后激活)。' },
        { h: '3. 同意', p: '分析Cookie仅在您同意后激活。您可以在首次访问时显示的Cookie横幅中选择。' },
        { h: '4. 管理偏好', p: '您可以随时通过浏览器设置更改Cookie偏好。' },
        { h: '5. 联系', p: '问题请联系 info@bomergrup.com。' },
      ],
    },
  };
  return dict[lang];
}

export function getLegalContent(doc: LegalDoc, lang: Lang): LegalContent {
  if (doc === 'privacy') return getPrivacy(lang);
  if (doc === 'terms') return getTerms(lang);
  return getCookies(lang);
}
