import { AccreditationItem } from '@/types';

export const accreditationsData: AccreditationItem[] = [
  {
    id: 'aramco_vendor',
    title: 'Saudi Aramco Approved Vendor',
    titleAr: 'مورّد معتمد لدى أرامكو السعودية',
    category: 'Aramco Approval',
    issuer: 'Saudi Aramco — Supplier Registration',
    issuerAr: 'أرامكو السعودية — تسجيل الموردين',
    imageSrc: '/assets/clients/aramco_logo.png',
    vendorId: '10121703',
    referenceNo: 'SAP Vendor No. 10121703',
    scope: 'Arabian Marine Services AMS Company is an officially registered and approved vendor with Saudi Aramco under Supplier Registration Number 10121703. Qualified and approved for offshore energy operations, subsea engineering, commercial diving, and marine services across Saudi Aramco facilities and offshore assets.',
    scopeAr: 'شركة أربيان مارين سيرفيسز إيه.إم.إس مورّد مسجّل ومعتمد رسمياً لدى أرامكو السعودية برقم تسجيل المورّد 10121703. معتمدة لتقديم خدمات الطاقة البحرية، الهندسة تحت الماء، الغوص التجاري، والخدمات البحرية في مرافق وأصول أرامكو السعودية البحرية.'
  },
  {
    id: 'imca',
    title: 'IMCA Contractor Member',
    titleAr: 'عضوية المقاولين في منظمة IMCA الدولية',
    category: 'IMCA',
    issuer: 'International Marine Contractors Association',
    issuerAr: 'الجمعية الدولية للمقاولين البحريين (IMCA)',
    imageSrc: null,
    scope: 'Full Contractor Member for Saturation Diving, Surface Supplied Air Diving, Nitrox Diving, TUP Diving, and ROV Operations.',
    scopeAr: 'عضو مقاول كامل لعمليات الغوص التشبعي، غوص الهواء من السطح، غوص النيتروكس، غوص TUP، ومركبات التفتيش ROV.'
  },
  {
    id: 'irata',
    title: 'IRATA Full Member (Reg: 7020/OT)',
    titleAr: 'عضوية IRATA للوصول بالحبال (رقم 7020/OT)',
    category: 'IRATA',
    issuer: 'Industrial Rope Access Trade Association',
    issuerAr: 'الجمعية الدولية للوصول بالحبال الصناعية (IRATA)',
    imageSrc: null,
    scope: 'Operator, Trainer & Equipment Supplier. CAT III & CAT IV Structure Inspections, Confined Space Rescue & DROPS Surveys.',
    scopeAr: 'مشغل ومدرب ومزود معدات معتمد. معاينات الهياكل CAT III & IV، الإنقاذ من الأماكن المحصورة، ومسوحات الأجسام المتساقطة.'
  },
  {
    id: 'iso9001',
    title: 'ISO 9001:2015 Certification',
    titleAr: 'شهادة إدارة الجودة ISO 9001:2015',
    category: 'ISO',
    issuer: "ISO / Lloyd's Register Quality Assurance",
    issuerAr: 'منظمة ISO / هيئة لويدز رجيستر للجودة',
    imageSrc: '/assets/accreditation/iso_badge.png',
    scope: 'Quality Management Systems for Subsea Engineering, Commercial Diving, Offshore Construction & Marine Support.',
    scopeAr: 'نظام إدارة الجودة للهندسة البحرية، الغوص التجاري، الإنشاءات البحرية، والدعم اللوجستي للعمليات تحت الماء.'
  },
  {
    id: 'iso14001',
    title: 'ISO 14001:2015 Environmental Management',
    titleAr: 'شهادة الإدارة البيئية ISO 14001:2015',
    category: 'ISO',
    issuer: 'ISO Certification Body',
    issuerAr: 'هيئة إعتماد شهادات ISO العالمية',
    imageSrc: '/assets/accreditation/iso_badge.png',
    scope: 'Environmental Protection Protocols for Marine Operations, Subsea Leak Prevention & Zero-Emission Hull Cleaning.',
    scopeAr: 'بروتوكولات الحماية البيئية للعمليات البحرية، منع تسربات الأنابيب تحت الماء، وتنظيف هياكل السفن بدون انبعاثات.'
  },
  {
    id: 'iso45001',
    title: 'ISO 45001:2018 Occupational Health & Safety',
    titleAr: 'شهادة السلامة والصحة المهنية ISO 45001:2018',
    category: 'ISO',
    issuer: 'ISO Certification Body',
    issuerAr: 'هيئة إعتماد شهادات ISO العالمية',
    imageSrc: '/assets/accreditation/iso_badge.png',
    scope: 'Comprehensive Safety Management across Saturation Diving, ROV Operations & Subsea Construction.',
    scopeAr: 'إدارة السلامة المتكاملة عبر عمليات الغوص التشبعي، تشغيل مركبات ROV، والإنشاءات البحرية.'
  },
  {
    id: 'dnv_class',
    title: 'DNV Marine Class Approval',
    titleAr: 'اعتماد هيئة DNV الدولية للتصنيف البحري',
    category: 'Class Approval',
    issuer: 'DNV (Det Norske Veritas)',
    issuerAr: 'هيئة DNV العالمية للتصنيف البحري',
    imageSrc: '/assets/accreditation/dnv_logo.webp',
    scope: 'Class Certified for In-Water Surveys (UWILD), Subsea Hull NDT Inspections, Morgrip Pipeline Connectors & Cofferdam Welding.',
    scopeAr: 'معتمدة لمعاينات السفن تحت الماء بدلاً من الأحواض الجافة (UWILD)، الفحص اللاهدمي، وتوصيلات الأنابيب واللحام الجاف.'
  },
  {
    id: 'abs_class',
    title: 'ABS Marine Class Approval',
    titleAr: 'اعتماد هيئة ABS الأمريكية للتصنيف البحري',
    category: 'Class Approval',
    issuer: 'American Bureau of Shipping (ABS)',
    issuerAr: 'المكتب الأمريكي للشحن والتصنيف البحري (ABS)',
    imageSrc: '/assets/accreditation/abs_logo.png',
    scope: 'Recognized External Specialist for In-Water Hull Surveys (UWILD), Subsea Hull Flaw Detection & Asset Integrity Inspections.',
    scopeAr: 'مزود خدمات معتمد لمعاينات السفن تحت الماء بدلاً من الأحواض الجافة (UWILD)، واكتشاف فجوات الهياكل وسلامة الأصول البحرية.'
  },
  {
    id: 'bv_class',
    title: 'Bureau Veritas (BV) Class Approval',
    titleAr: 'اعتماد هيئة Bureau Veritas للتصنيف البحري',
    category: 'Class Approval',
    issuer: 'Bureau Veritas (BV)',
    issuerAr: 'Bureau Veritas (BV) — هيئة التصنيف البحري الدولية',
    imageSrc: '/assets/accreditation/bv_logo.png',
    scope: 'OSC Group BV Class Certification for UWILD in-water surveys, thruster recoveries, subsea cofferdam repairs & structural NDT.',
    scopeAr: 'اعتماد BV لمجموعة OSC لمعاينات UWILD، استبدال المحركات، إصلاحات سدود الكوفركس، والفحص اللاهدمي الهيكلي.'
  },
  {
    id: 'lr_class',
    title: "Lloyd's Register (LR) Class Approval",
    titleAr: "اعتماد هيئة Lloyd's Register للتصنيف البحري",
    category: 'Class Approval',
    issuer: "Lloyd's Register (LR)",
    issuerAr: "Lloyd's Register (LR) — هيئة التصنيف البحرية",
    imageSrc: '/assets/accreditation/lr_logo.png',
    scope: 'OSC Group LR Class Certification for underwater hull inspections (UWILD), offshore structural NDT & subsea cofferdam welding.',
    scopeAr: 'اعتماد LR لمجموعة OSC لمعاينات هياكل السفن تحت الماء (UWILD)، الفحص اللاهدمي البحري، ولحام سدود الكوفركس.'
  },
  {
    id: 'rina_class',
    title: 'RINA Class Approval',
    titleAr: 'اعتماد هيئة RINA للتصنيف البحري',
    category: 'Class Approval',
    issuer: 'RINA (Registro Italiano Navale)',
    issuerAr: 'RINA — هيئة التصنيف البحري الإيطالية',
    imageSrc: '/assets/accreditation/rina_logo.png',
    scope: 'OSC Group RINA Class Certification for in-water hull surveys (UWILD), subsea NDT inspections & marine asset integrity.',
    scopeAr: 'اعتماد RINA لمجموعة OSC لمعاينات السفن تحت الماء (UWILD)، الفحص اللاهدمي البحري، وسلامة الأصول البحرية.'
  },
  {
    id: 'classnk_class',
    title: 'ClassNK Class Approval',
    titleAr: 'اعتماد هيئة ClassNK اليابانية للتصنيف البحري',
    category: 'Class Approval',
    issuer: 'ClassNK (Nippon Kaiji Kyokai)',
    issuerAr: 'ClassNK — هيئة التصنيف البحري اليابانية',
    imageSrc: null,
    scope: 'OSC Group ClassNK Certification for in-water surveys, thruster recoveries, subsea structural inspections & cofferdam repairs.',
    scopeAr: 'اعتماد ClassNK لمجموعة OSC لمعاينات هياكل السفن تحت الماء، استبدال المحركات، والفحص الهيكلي البحري.'
  },
  {
    id: 'ccs_class',
    title: 'CCS Class Approval',
    titleAr: 'اعتماد هيئة CCS الصينية للتصنيف البحري',
    category: 'Class Approval',
    issuer: 'China Classification Society (CCS)',
    issuerAr: 'هيئة التصنيف البحري الصينية (CCS)',
    imageSrc: '/assets/accreditation/ccs_logo.png',
    scope: 'OSC Group CCS Class Certification for underwater hull inspections (UWILD), offshore NDT & subsea asset integrity services.',
    scopeAr: 'اعتماد CCS لمجموعة OSC لمعاينات السفن تحت الماء (UWILD)، الفحص اللاهدمي البحري، وخدمات سلامة الأصول.'
  }
];
