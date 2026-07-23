import { TechPartner } from '@/types';

export const partnersData: TechPartner[] = [
  {
    name: 'PIPECARE (formerly LINSCAN)',
    nameAr: 'PIPECARE (formerly LINSCAN)',
    tagline: 'Global Leader in In-Line Inspection (ILI) & Smart Pigging',
    taglineAr: 'الرائد العالمي في الفحص المباشر للأنابيب (ILI) والكشط الذكي',
    description: 'PIPECARE brings decades of intelligent pipeline diagnostic expertise, supplying state-of-the-art MFL, Ultrasonic, Geometry, and EMAT smart pigs to inspect and protect critical hydrocarbon transmission pipelines across the Middle East and worldwide.',
    descriptionAr: 'توفر شركة PIPECARE عقوداً من الخبرة التشخيصية الذكية للأنابيب، حيث تزود مكاشط MFL والموجات فوق الصوتية و EMAT الذكية لفحص وحماية خطوط نقل الهيدروكربونات البحرية في الشرق الأوسط والعالم.',
    technologies: [
      'Magnetic Flux Leakage (MFL & MFL-TFI)',
      'Ultrasonic Wall Thickness & Crack Detection (UTWM & UTCD)',
      'Electromagnetic Acoustic Transducer (EMAT)',
      'High-Resolution Geometry / Caliper Pigs',
      '4D Pipeline Data Management System & 3D Topography Mapping'
    ],
    technologiesAr: [
      'تسرب التدفق المغناطيسي (MFL & MFL-TFI)',
      'قياس سمك الجدار بالموجات الصوتية واكتشاف التشققات (UTWM & UTCD)',
      'محولات الإشارات الكهرومغناطيسية الصوتية (EMAT)',
      'مكاشط قياس الهندسة والأبعاد عالية الدقة (Caliper)',
      'نظام إدارة بيانات الأنابيب 4D والخرائط ثلاثية الأبعاد'
    ],
    keySolutions: [
      {
        name: 'Smart Caliper / Geometry Pigging',
        specs: 'High-precision internal radius logging with integrated GIS geolocation for exact deformation identification.'
      },
      {
        name: 'MFL & UT Metal Loss Inspection',
        specs: 'Dual-head magnetic flux leakage and ultrasonic sensors detecting micro-pitting, internal corrosion, and wall loss.'
      },
      {
        name: '4D Condition Monitoring Database',
        specs: 'Synchronized multi-campaign inspection database overlaying pH, soil resistivity, CP readings, and wall thickness.'
      }
    ]
  },
  {
    name: 'Connector Subsea Solutions (CSS)',
    nameAr: 'Connector Subsea Solutions (CSS)',
    tagline: 'Norway Deepwater Repair & Diverless Subsea Tooling Pioneer',
    taglineAr: 'الرائد النرويجي في حلول إصلاح الأعماق والأدوات بدون غواصين',
    description: 'Headquartered in Norway with global operational hubs, Connector Subsea Solutions supplies high-specification diverless clamps, Morgrip permanent connectors, pipe handling frames, and subsea installation tooling engineered for extreme deepwater environments up to 1,300m MWD.',
    descriptionAr: 'تزود شركة Connector Subsea Solutions (CSS) مشابك الأنابيب بدون غواصين، وتوصيلات Morgrip الدائمة، وإطارات رفع الأنابيب، وأدوات التركيبات البحرية المصممة للعمل في البيئات القاسية حتى عمق 1300م.',
    technologies: [
      'Morgrip DNV-GL Approved Pipeline Connectors (up to 42" OD)',
      'ROV-Operated "H" Frames & Handling Systems',
      'Diverless Coating Removal & Pipe Cutting Skids',
      'High-Pressure Structural Repair Clamps & Morsmart Collet Connectors',
      'Morgrip EPRS (Emergency Pipeline Repair System) Club Access'
    ],
    technologiesAr: [
      'توصيلات Morgrip البحرية المعتمدة من DNV-GL (حتى 42 بوصة)',
      'إطارات "H" وأنظمة التعامل مع الأنابيب المشغلة بمركبات ROV',
      'زلاجات إزالة الطلاء وقطع الأنابيب بدون غواصين',
      'مشابك الإصلاح الهيكلي للضغط العالي وتوصيلات Morsmart',
      'برنامج الاستجابة الطارئة لإصلاح الأنابيب (EPRS Club)'
    ],
    keySolutions: [
      {
        name: 'Morgrip Structural Pipeline Connectors',
        specs: 'Permanent, hotwork-free subsea and topside hydrocarbon line repair connectors certified by DNV-GL.'
      },
      {
        name: 'Diverless Subsea Tooling & H-Frames',
        specs: 'ROV-deployable pipe lifting frames, coating removal tools, and precision pipe saws rated to 1,300m MWD.'
      },
      {
        name: 'Morsmart Collet Grip Spool Replacement',
        specs: 'Cost-effective, rapid spool replacement clamps enabling diver-assist and diverless spool repairs.'
      }
    ]
  }
];
