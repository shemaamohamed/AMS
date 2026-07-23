import { ServiceCategory } from '@/types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'irm',
    title: 'Inspection, Repair & Maintenance (IRM)',
    titleAr: 'الفحص والتصليح والصيانة البحرية (IRM)',
    shortDesc: 'Comprehensive subsea asset integrity, structural non-destructive testing (NDT), CALM buoy maintenance, and platform retrofit solutions.',
    shortDescAr: 'إدارة سلامة الأصول البحرية المتكاملة، الفحص اللاهدمي للهياكل (NDT)، صيانة عوامات CALM، وحلول تطوير المنصات البحرية.',
    fullDesc: 'AMS Marine provides integrated Subsea IRM services across offshore oil & gas platforms, FPSO vessels, CALM buoys, subsea pipelines, and marine terminals. Our multi-disciplined diving and ROV teams deliver advanced visual inspection (GVI/CVI), cathodic protection (CP) surveys, wall thickness measurements, and underwater wet welding in strict compliance with IMCA and Marine Class regulations.',
    fullDescAr: 'تقدم شركة AMS Marine خدمات الفحص والتصليح والصيانة البحرية (IRM) المتكاملة عبر منصات النفط والغاز، سفن الإنتاج العائمة FPSO، عوامات التحميل CALM، الأنابيب البحرية، والموانئ. توفر فرق الغوص ومركبات الأعماق ROV لدينا الفحص البصري المتقدم، مسوحات الحماية الكاثودية (CP)، قياسات سمك الجدار، واللحام الرطب تحت الماء وفقاً لمعايير IMCA وهياكل التصنيف البحرية.',
    iconName: 'ShieldCheck',
    maxDepth: '300m Sat / 3,000m ROV',
    maxDepthAr: 'غوص تشبعي 300م / مركبات ROV 3000م',
    deliveryMethods: ['Saturation Diving', 'Air & Nitrox Diving', 'ROV Intervention', 'Rope Access'],
    deliveryMethodsAr: ['الغوص التشبعي', 'الغوص بالهواء والنيتروكس', 'تدخل مركبات ROV', 'الوصول بالحبال'],
    keyCapabilities: [
      'Subsea structure, jacket, and platform integrity IRM',
      'CALM Buoy and CBM maintenance (Air and Saturation range)',
      'Class UWILD and UWILD-certified vessel hull inspections',
      'Wet welding repairs in air diving depth range',
      'Cathodic Protection (CP) retrofit & life-of-field extension',
      'Free-span pipeline survey and rock-dump / grout-bag rectification'
    ],
    keyCapabilitiesAr: [
      'سلامة الهياكل البحرية والمنصات والقواعد المعدنية IRM',
      'صيانة عوامات التحميل CALM و CBM في نطاق غوص الهواء والتشبع',
      'معاينات UWILD المعتمدة لهياكل السفن والحفارات تحت الماء',
      'إصلاحات اللحام الرطب تحت الماء ضمن نطاق غوص السطح',
      'تعديل نظام الحماية الكاثودية (CP) وتمديد عمر الحقول',
      'مسح الأنابيب المعلقة وتثبيتها بأكياس الأسمنت والردم'
    ],
    equipmentList: [
      'Air & Nitrox Surface-Supplied Diving Spread',
      '12-Man Hyperbaric Saturation System (300m rated)',
      'Cygnus Underwater Ultrasonic Thickness Gauges',
      'Subsea Hydro-blasting & E300 Cleaning Tooling',
      'CP Voltmeter & Eddy Current Flaw Detectors'
    ],
    equipmentListAr: [
      'منظومات الغوص بالهواء والنيتروكس المزودة من السطح',
      'نظام غوص تشبعي ممرفغ لـ 12 غواصاً (حتى عمق 300م)',
      'أجهزة سايغنس لقياس سمك جدار الأنابيب بالموجات فوق الصوتية',
      'معدات الضخ المائي والتنظيف E300 تحت الماء',
      'أجهزة قياس جهد الحماية الكاثودية واكتشاف التشققات'
    ],
    caseStudy: {
      title: 'Arabian Gulf Platform Jacket IRM & Anode Retrofit',
      titleAr: 'صيانة قاعدة منصة بحرية وتعديل الأنودات بالخليج العربي',
      description: 'Executed 45-day subsea inspection and cathodic protection retrofit for a major offshore operator in 85m water depth.',
      descriptionAr: 'تنفيذ حملة فحص بحري وتعديل الحماية الكاثودية لمدة 45 يوماً لمشغل رئيسي على عمق 85 متراً.',
      impact: 'Extended jacket operating lifespan by 15 years with zero Lost Time Injuries (LTI).',
      impactAr: 'تمديد العمر التشغيلي للمنصة بـ 15 عاماً دون تسجيل أي حوادث خاسرة للوقت (LTI).'
    },
    datasheetUrl: '#'
  },
  {
    id: 'construction',
    title: 'Offshore Construction & Subsea Tie-Ins',
    titleAr: 'الإنشاءات البحرية والربط تحت سطح البحر',
    shortDesc: 'EPIC subsea installation support, pipeline tie-ins, spool piece connections, CALM buoy commissioning, and subsea completion hook-ups.',
    shortDescAr: 'دعم التركيبات البحرية EPIC، ربط الأنابيب، توصيل الروابط المعدنية، تشغيل عوامات CALM، وربط رؤوس الآبار البحرية.',
    fullDesc: 'From subsea manifold placement to complex pipeline spool tie-ins, AMS Marine combines engineering precision with heavy subsea installation spreads. Operating specialized diving vessels and diverless tooling frames, we handle flexible riser hook-ups, subsea wellhead completions, and structural grouting in challenging marine environments.',
    fullDescAr: 'من وضع المجمع البحري تحت الماء إلى ربط الأنابيب والمعقدات، تجمع AMS Marine بين الدقة الهندسية ومعدات التركيب البحرية الثقيلة. من خلال تشغيل سفن غوص متخصصة وإطارات بدون غواصين، ننفذ توصيل الصواعد المرنة، إكمال رؤوس الآبار، والأسمنت الهيكلي في البيئات البحرية الصعبة.',
    iconName: 'Building2',
    maxDepth: '300m Saturation / 1,300m Diverless',
    maxDepthAr: 'غوص تشبعي 300م / بدون غواصين 1300م',
    deliveryMethods: ['Diverless Intervention', 'Saturation Diving', 'ROV Heavy Tooling', 'Hyperbaric Welding'],
    deliveryMethodsAr: ['التدخل بدون غواصين', 'الغوص التشبعي', 'معدات ROV الثقيلة', 'اللحام تحت الضغط'],
    keyCapabilities: [
      'Subsea manifold, PLET, and SLET structure installation',
      'Inter-field pipeline tie-ins & spool piece metrology',
      'CALM Buoy & CBM turret connector installation and commissioning',
      'FPSO subsea riser hook-up & mooring line attachment',
      'Certified subsea hyperbaric welding & flange bolt-tensioning',
      'Free span rectification and grout bag installation'
    ],
    keyCapabilitiesAr: [
      'تركيب المجمعات البحرية وهياكل PLET و SLET تحت الماء',
      'ربط الأنابيب بين الحقول وقياس الروابط المعدنية',
      'تركيب وتشغيل توصيلات عوامات CALM و CBM',
      'ربط صواعد سفن FPSO وتثبيت سلاسل الإرساء',
      'اللحام الجاف تحت الضغط وشد البرازي الهيدروليكية',
      'معالجة الأنابيب المعلقة وتثبيتها بأكياس الأسمنت'
    ],
    equipmentList: [
      'ROV-operated "H" Frames and Pipe Handling Tooling',
      'Hydraulic Bolt Tensioners & Flange Alignment Clamps',
      'Subsea Metrology Acoustic Positioning Spreads',
      'Diver-operated Subsea Grouting Pumps & Mixers'
    ],
    equipmentListAr: [
      'إطارات H ومعدات التعامل مع الأنابيب المشغلة بمركبات ROV',
      'أجهزة شد البراغي الهيدروليكية ومشابك محاذاة الشفاه',
      'أنظمة تحديد المواقع الصوتية لقياسات الأعماق',
      'مضخات وخلاطات الحقن الأسمنتي تحت الماء'
    ],
    caseStudy: {
      title: 'Deepwater Spool Tie-In & FPSO Riser Connection',
      titleAr: 'ربط الأنابيب في الأعماق وتوصيل صواعد سفينة FPSO',
      description: 'Completed complex 24" subsea pipeline spool connection and hydrostatic pressure testing for offshore brownfield expansion.',
      descriptionAr: 'إكمال توصيل أنابيب بحرية قطر 24 بوصة والاختبار الهيدروستاتيكي لتوسعة حقل بحري قائم.',
      impact: 'Delivered project 4 days ahead of schedule with 100% joint integrity pass rate.',
      impactAr: 'تسليم المشروع قبل الجدول الزمني بـ 4 أيام بنسبة نجاح 100٪ في فحص الوصلات.'
    },
    datasheetUrl: '#'
  },
  {
    id: 'rov',
    title: 'Deepwater ROV Systems & Remote Systems',
    titleAr: 'أنظمة ROV والتحكم عن بعد في المياه العميقة',
    shortDesc: 'Work-class and inspection ROV spreads capable of intervention, survey, umbilical installation, and P&A up to 3,000m depth.',
    shortDescAr: 'مركبات الأعماق ROV الفائقة ومسح الأعماق، قادرة على التدخل، المسح، تركيب السلاسل، وإغلاق الآبار حتى عمق 3000م.',
    fullDesc: 'AMS Marine operates a modern fleet of Work-Class ROVs (WCROV) and Observation-Class ROVs tailored for deepwater subsea intervention. Backed by in-house engineering and project management, our ROV spreads perform high-definition multibeam surveys, valve override activation, subsea cutting, well plug & abandonment (P&A), and diverless pipeline clamp placement.',
    fullDescAr: 'تدير AMS Marine أسطولاً حديثاً من مركبات الأعماق الفائقة (Work-Class ROV) ومركبات المراقبة المصممة للتدخل في المياه العميقة. مدعومة بفرق هندسية وإدارة مشاريع، تنفذ مركباتنا المسوحات الصوتية، تشغيل الصمامات، القطع تحت الماء، إغلاق وهجر الآبار (P&A)، وتركيب المشابك بدون غواصين.',
    iconName: 'Bot',
    maxDepth: '3,000m Operational Depth',
    maxDepthAr: 'عمق التشغيل 3000 متر',
    deliveryMethods: ['Work-Class ROV', 'Survey ROV Skid', 'Diverless Remote Tooling'],
    deliveryMethodsAr: ['مركبات ROV الفائقة', 'زلاجات المسح السوناري', 'أدوات التحكم عن بعد بدون غواصين'],
    keyCapabilities: [
      'Deepwater subsea intervention and manipulator operations up to 3,000m',
      'Full suite of remote cutting, grinding, and coating removal skids',
      'Flexible flowline, cable, and umbilical lay monitoring',
      'Decommissioning support & Well Plug & Abandonment (P&A)',
      'Subsea 3D photogrammetry and HD sonar profiling',
      'Subsea tree and manifold valve actuation'
    ],
    keyCapabilitiesAr: [
      'التدخل البحري وتشغيل المقابض الهيدروليكية حتى عمق 3000م',
      'مجموعة كاملة من زلاجات القطع والجلخ وإزالة الطلاء عن بعد',
      'مراقبة تمديد الخطوط المرنة والكابلات والسلاسل البحرية',
      'دعم تفكيك المنصات وإغلاق وهجر الآبار البحرية (P&A)',
      'التصوير ثلاثي الأبعاد ومسوحات السونار عالية الدقة',
      'تشغيل وتنشيط صمامات رؤوس الآبار والمجمعات البحرية'
    ],
    equipmentList: [
      '150HP Heavy Duty Work-Class ROV Systems',
      'High-Definition Multibeam Sonar & Acoustic Tracking (USBL)',
      'Hydraulic Cutters, Grinders & Torque Tools (Class 1-4)',
      'Subsea Sampling Skids & CP Probes'
    ],
    equipmentListAr: [
      'أنظمة ROV الفائقة بقدرة 150 حصان للأعمال الثقيلة',
      'سونار متعدد الأشعة ونظام التتبع الصوت السطحي (USBL)',
      'قواطع هيدروليكية ومجالخ وأدوات عزم الدوران (Class 1-4)',
      'زلاجات أخذ العينات وقوابس الحماية الكاثودية'
    ],
    caseStudy: {
      title: '3,000m Deepwater Subsea Inspection & Valve Actuation',
      titleAr: 'فحص وتشغيل صمامات على عمق 3000 متر في المياه العميقة',
      description: 'Deployed Work-Class ROV system for deepwater asset health audit and emergency isolation valve actuation in remote Gulf block.',
      descriptionAr: 'نشر نظام ROV فائق لفحص أصول الأعماق وتشغيل صمام العزل الطارئ في حقل بحري نائي.',
      impact: 'Restored subsea flow assurance without requiring costly vessel intervention.',
      impactAr: 'استعادة تدفق النفط تحت الماء دون الحاجة لسفن تفتيش مكلفة.'
    },
    datasheetUrl: '#'
  },
  {
    id: 'diving',
    title: 'Saturation & Commercial Diving Operations',
    titleAr: 'عمليات الغوص التشبعي والتجاري',
    shortDesc: 'IMCA-compliant Saturation, Air, Nitrox, and TUP diving operations up to 300m water depth with hyperbaric safety protocols.',
    shortDescAr: 'عمليات الغوص التشبعي والهواء والنيتروكس المعتمدة من IMCA حتى عمق 300م مع بروتوكولات السلامة تحت الضغط.',
    fullDesc: 'As a full IMCA Contractor Member (Saturation, Air, Nitrox, TUP), AMS Marine upholds the highest safety standards in commercial diving. Operating 12-man hyperbaric saturation spreads and mobile surface-supplied diving systems, our certified diver technicians execute heavy underwater construction, valve replacement, structural repair, and NDT inspections.',
    fullDescAr: 'بصفتها عضواً كاملاً في منظمة IMCA (الغوص التشبعي، الهواء، النيتروكس، TUP)، تلتزم AMS Marine بأعلى معايير السلامة في الغوص التجاري. من خلال تشغيل غرف الغوص التشبعي لـ 12 غواصاً وأنظمة الغوص السطحية، ينفذ غواصونا المعتمدون التركيبات البحرية الثقيلة، استبدال الصمامات، وإصلاح الهياكل.',
    iconName: 'Anchor',
    maxDepth: '300m Saturation / 50m Air',
    maxDepthAr: 'غوص تشبعي 300م / غوص هواء 50م',
    deliveryMethods: ['12-Man Saturation Spread', 'Surface Supplied Air', 'Nitrox Diving', 'TUP System'],
    deliveryMethodsAr: ['منظومة تشبعية لـ 12 غواصاً', 'الغوص بالهواء من السطح', 'الغوص بالنيتروكس', 'نظام نقل الضغط TUP'],
    keyCapabilities: [
      'Deepwater saturation diving operations down to 300m',
      'Surface-supplied air and Nitrox diving spreads down to 50m',
      'TUP (Transfer Under Pressure) chamber operations',
      'Underwater heavy rigging, valve replacements, and spool tie-ins',
      'Subsea concrete/grout restoration and structural repairs',
      'IMCA D014 & D024 compliant dive control and hyperbaric rescue'
    ],
    keyCapabilitiesAr: [
      'عمليات الغوص التشبعي في المياه العميقة حتى عمق 300 متر',
      'منظومات الغوص بالهواء والنيتروكس من السطح حتى عمق 50 متراً',
      'عمليات نقل الغواصين تحت الضغط (نظام TUP)',
      'الرفع الثقيل تحت الماء، استبدال الصمامات، وربط الأنابيب',
      'ترميم الخرسانة والحقن الأسمنتي والإصلاحات الهيكلية',
      'إدارة الغوص والإنقاذ تحت الضغط المتوافقة مع IMCA D014 & D024'
    ],
    equipmentList: [
      'Containerized 12-Man Saturation Diving Spread with SPHL',
      'IMCA Air Diving Decompression Control Van',
      'Diver Gas Reclaim Systems & Hot Water Units',
      'Hyperbaric Welding Habitat spreads'
    ],
    equipmentListAr: [
      'منظومة غوص تشبعي حاوية لـ 12 غواصاً مع قارب إنقاذ محمول',
      'شاحنة تحكم وإلغاء ضغط لغوص الهواء المعتمدة من IMCA',
      'أنظمة إستعادة غاز الغوص ووحدات المياه الساخنة',
      'غرف وغطاء اللحام الجاف تحت الماء'
    ],
    caseStudy: {
      title: '200m Deep Saturation Dive Intervention Campaign',
      titleAr: 'حملة تدخل بالغوص التشبعي على عمق 200 متر',
      description: '60-day continuous saturation dive campaign replacing subsea manifold valves and risers in offshore field.',
      descriptionAr: 'حملة غوص تشبعي مستمرة لمدة 60 يوماً لاستبدال صمامات المجمع البحري والصواعد.',
      impact: '100% safety record with zero hyperbaric incidents over 1,400 dive bottom-hours.',
      impactAr: 'سجل سلامة بنسبة 100٪ دون أي حوادث ضغط عبر أكثر من 1400 ساعة غوص قاع.'
    },
    datasheetUrl: '#'
  },
  {
    id: 'pipeline',
    title: 'Pipeline Integrity & EPRS Emergency Repair',
    titleAr: 'سلامة الأنابيب وإصلاح الطوارئ 24/7 (EPRS)',
    shortDesc: '24/7 emergency call-out, near-shore IO-Cofferdams, smart pigging (PIPECARE), and diverless Morgrip repair clamps (CSS).',
    shortDescAr: 'استجابة طوارئ 24/7، سدود الكوفركس الجافة، الكشط الذكي (PIPECARE)، ومشابك Morgrip بدون غواصين (CSS).',
    fullDesc: 'AMS Marine offers complete 4D pipeline integrity monitoring and emergency response solutions. Through strategic partnerships with PIPECARE (Inline Inspection pigs: MFL, UT, EMAT, Geometry) and Connector Subsea Solutions (diverless clamps & Morgrip connectors), we provide rapid 24/7 call-out support to contain subsea leaks, install structural repair clamps, and execute hyperbaric welding.',
    fullDescAr: 'تقدم AMS Marine حلولاً متكاملة لمراقبة سلامة الأنابيب رباعية الأبعاد والاستجابة للطوارئ. عبر شراكات استراتيجية مع PIPECARE (مكاشط الفحص المباشر MFL, UT, EMAT) و Connector Subsea Solutions (مشابك Morgrip بدون غواصين)، نوفر دعماً طارئاً على مدار الساعة لاحتواء التسربات وتركيب المشابك واللحام تحت الضغط.',
    iconName: 'Activity',
    maxDepth: '1,300m Diverless / Near-shore Cofferdams',
    maxDepthAr: 'بدون غواصين 1300م / سدود الكوفركس الجافة',
    deliveryMethods: ['IO-Cofferdam', 'Hyperbaric Welding', 'Smart Pigging', 'Morgrip Clamps'],
    deliveryMethodsAr: ['سدود الكوفركس IO', 'اللحام تحت الضغط', 'الكشط الذكي', 'مشابك Morgrip'],
    keyCapabilities: [
      '24/7 Rapid Incident Callout & Pipeline Repair Response',
      'IO-Cofferdam deployment for dry subsea welding on active lines',
      'In-line smart pigging (MFL, UT, Geometry, EMAT, Combo)',
      'Diverless pipeline structural clamps (up to 42" OD)',
      '4D condition monitoring data management system',
      'Hyperbaric welding for high-pressure hydrocarbon steel and HDPE lines'
    ],
    keyCapabilitiesAr: [
      'استجابة سريعة للنوازل وإصلاح الأنابيب البحرية على مدار 24/7',
      'نشر سدود IO-Cofferdam للحام الجاف على الخطوط النشطة',
      'الفحص الذكي المباشر بالكشط (MFL, UT, Geometry, EMAT)',
      'مشابك الأنابيب الهيكلية بدون غواصين (حتى قطر 42 بوصة)',
      'نظام إدارة بيانات مراقبة الأنابيب 4D',
      'اللحام تحت الضغط لأنابيب الهيدروكربون الفولاذية و HDPE'
    ],
    equipmentList: [
      'IO-Cofferdams for near-shore and platform riser repairs',
      'Morgrip DNV-approved Subsea Pipeline Connectors',
      'High-Pressure Structural Leak Sealing Repair Clamps',
      'PIPECARE Magnetic Flux Leakage & UT Smart Pigs'
    ],
    equipmentListAr: [
      'سدود IO-Cofferdam لإصلاح الصواعد قرب الشاطئ والمنصات',
      'توصيلات أنابيب Morgrip البحرية المعتمدة من DNV',
      'مشابك منع وتسريب الضغط العالي الهيكلية',
      'مكاشط PIPECARE الذكية المجهزة بتكنولوجيا MFL و UT'
    ],
    caseStudy: {
      title: 'Emergency 24/7 Pipeline Leak Isolation & Clamp Installation',
      titleAr: 'عزل تسرب طارئ وتثبيت مشبك لأنابيب الغاز 24/7',
      description: 'Dispatched emergency incident response team within 6 hours to isolate high-pressure gas line pinhole leak using Morgrip structural clamp.',
      descriptionAr: 'إرسال فريق استجابة الطوارئ خلال 6 ساعات لعزل تسرب غاز مرتفع الضغط باستخدام مشبك Morgrip الهيكلي.',
      impact: 'Prevented environmental discharge and averted pipeline shutdown costing millions.',
      impactAr: 'منع التسرب البيئي وتجنب إغلاق خط الأنابيب بتكلفة ملايين الدولارات.'
    },
    datasheetUrl: '#'
  },
  {
    id: 'civils',
    title: 'Marine Civils, Dredging & Pollution Control',
    titleAr: 'الهندسة المدنية البحرية والشفط والتحكم بالتلوث',
    shortDesc: 'Port construction, specialized dredging, Croc-Dock plastic recovery, Disruptor-Net waste containment, and salvage.',
    shortDescAr: 'إنشاء الموانئ، الشفط المتخصص، استعادة البلاستيك بنظام Croc-Dock، احتواء النفايات بنظام Disruptor-Net، والإنقاذ.',
    fullDesc: 'AMS Marine provides specialized marine civil engineering, port maintenance, subsea demolition, and ecological pollution control technologies. Our patented Croc-Dock harbour plastic recovery unit and Disruptor-Net river waste containment systems actively protect maritime ecosystems while our marine civil crews handle quay wall repairs and specialized dredging.',
    fullDescAr: 'تقدم AMS Marine خدمات الهندسة المدنية البحرية المتخصصة، صيانة الموانئ، الهدم تحت الماء، وتكنولوجيا التحكم بالتلوث البيئي. تحمي وحدات Croc-Dock لاستعادة البلاستيك وشباك Disruptor-Net لاحتواء النفايات الأنظمة البيئية البحرية بينما تنفذ فرقنا صيانة أرصفة الموانئ والشفط المتخصص.',
    iconName: 'Waves',
    maxDepth: 'Near-shore & Harbour Waters',
    maxDepthAr: 'المياه الساحلية وأحواض الموانئ',
    deliveryMethods: ['Croc-Dock Recovery', 'Disruptor-Net Systems', 'Specialized Dredging', 'Marine Civils'],
    deliveryMethodsAr: ['نظام Croc-Dock', 'شباك Disruptor-Net', 'الشفط والتعميق المتخصص', 'الأعمال المدنية البحرية'],
    keyCapabilities: [
      'Port and quay wall underwater construction, repair, and piling',
      'Specialized harbour and trench dredging & intake clearing',
      'Croc-Dock 24/7 harbour plastic & waste recovery',
      'Disruptor-Net river outfall plastic containment',
      'River-Isolator stream plastic interceptor systems',
      'Subsea concrete cutting, demolition, and vessel salvage'
    ],
    keyCapabilitiesAr: [
      'إنشاء وإصلاح أرصفة الموانئ والروافد المعدنية تحت الماء',
      'شفط وتعميق حفر أحواض الموانئ وتنظيف مآخذ المياه',
      'استعادة النفايات والبلاستيك من أحواض الموانئ بنظام Croc-Dock',
      'احتواء نفايات المصبات والمصارف بشباك Disruptor-Net',
      'أنظمة اعتراض النفايات والبلاستيك في المجاري المائية',
      'قطع الخرسانات والهدم تحت الماء وإنقاذ السفن الغارقة'
    ],
    equipmentList: [
      'Croc-Dock Floating Waste Collector Vessels',
      'Disruptor-Net Heavy Outfall Mesh Catchers',
      'Subsea Diamond Wire Saws & Hydraulic Demolition Tooling',
      'Dredging Suction Pumps & Air Lifts'
    ],
    equipmentListAr: [
      'سفن وقوارب جمع النفايات العائمة Croc-Dock',
      'مصائد الشباك الثقيلة للمصبات Disruptor-Net',
      'منشار السلك الألماسي وأدوات الهدم الهيدروليكية تحت الماء',
      'مضخات الشفط الهيدروليكي ورافعات الهواء'
    ],
    caseStudy: {
      title: 'Port Basin Dredging & Croc-Dock Ecological Deployment',
      titleAr: 'شفط حوض الميناء ونشر وحدات Croc-Dock البيئية',
      description: 'Executed maintenance dredging for major Gulf maritime terminal while installing 3 Croc-Dock units to remove floating marine plastics.',
      descriptionAr: 'تنفيذ عمليات الشفط والصيانة لميناء بحري رئيسي بالخليج وتثبيت 3 وحدات Croc-Dock لإزالة البلاستيك العائم.',
      impact: 'Removed 14 tons of harbour plastic waste annually while restoring port navigation depth.',
      impactAr: 'إزالة 14 طناً من نفايات البلاستيك سنوياً مع استعادة عمق الملاحة بالميناء.'
    },
    datasheetUrl: '#'
  }
];
