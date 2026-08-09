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
    title: 'ROV Inspection & Survey Systems',
    titleAr: 'أنظمة ROV للمسح والتفتيش البحري',
    shortDesc: 'Observation and survey-class ROV spreads for pipeline inspection, structural survey, CP assessment, and subsea asset monitoring.',
    shortDescAr: 'مركبات ROV للمراقبة والمسح البحري لفحص الأنابيب، مسح الهياكل، تقييم الحماية الكاثودية، ومراقبة الأصول تحت الماء.',
    fullDesc: 'AMS Marine deploys Observation-Class and Survey-Class ROV spreads for offshore pipeline inspection, structural integrity monitoring, cathodic protection (CP) assessment, and subsea visual surveys. Our ROV teams provide high-definition visual documentation, acoustic positioning, and sonar profiling in support of IRM campaigns across the Arabian Gulf and Red Sea.',
    fullDescAr: 'تنشر AMS Marine مركبات ROV للمراقبة والمسح لفحص الأنابيب البحرية، ومراقبة سلامة الهياكل، وتقييم الحماية الكاثودية (CP)، والمسوحات البصرية تحت الماء. تقدم فرقنا توثيقاً بصرياً عالي الدقة، وتحديد مواقع صوتياً، ومسوحات سونار لدعم حملات IRM في الخليج العربي والبحر الأحمر.',
    iconName: 'Bot',
    maxDepth: 'Survey & Inspection Class',
    maxDepthAr: 'فئة المسح والتفتيش',
    deliveryMethods: ['Observation ROV', 'Survey ROV Skid', 'CP & NDT Assessment'],
    deliveryMethodsAr: ['مركبات ROV للمراقبة', 'زلاجات المسح السوناري', 'تقييم CP والفحص اللاهدمي'],
    keyCapabilities: [
      'Visual pipeline inspection and free-span survey',
      'Cathodic protection (CP) potential surveys and anode assessment',
      'High-definition subsea video documentation and reporting',
      'Acoustic positioning and USBL tracking during survey campaigns',
      'Multibeam sonar seabed profiling and 3D mapping',
      'Structural GVI/CVI inspection support for offshore jackets'
    ],
    keyCapabilitiesAr: [
      'الفحص البصري للأنابيب ومسح الأجزاء المعلقة',
      'مسوحات جهد الحماية الكاثودية وتقييم الأنودات',
      'التوثيق البصري بالفيديو عالي الدقة تحت الماء وإعداد التقارير',
      'تحديد المواقع الصوتي وتتبع USBL خلال حملات المسح',
      'التصوير السوناري متعدد الأشعة وتخطيط قاع البحر ثلاثي الأبعاد',
      'دعم الفحص البصري الهيكلي GVI/CVI للمنصات البحرية'
    ],
    equipmentList: [
      'Observation-Class & Survey-Class ROV Spreads',
      'High-Definition Multibeam Sonar & USBL Acoustic Positioning',
      'CP Voltmeter Probes & Subsea NDT Attachments',
      'Subsea Camera Systems & HD Video Recording Units'
    ],
    equipmentListAr: [
      'مركبات ROV للمراقبة والمسح',
      'سونار متعدد الأشعة ونظام التتبع الصوتي USBL',
      'مسابير قياس جهد الحماية الكاثودية وملحقات الفحص اللاهدمي',
      'أنظمة التصوير تحت الماء ووحدات التسجيل بالفيديو عالي الدقة'
    ],
    caseStudy: {
      title: 'Arabian Gulf Pipeline Free-Span & CP Survey Campaign',
      titleAr: 'حملة مسح الأجزاء المعلقة والحماية الكاثودية بالخليج العربي',
      description: 'Deployed observation ROV spread for comprehensive pipeline free-span and cathodic protection survey across 80km subsea network.',
      descriptionAr: 'نشر منظومة ROV للمراقبة لإجراء مسح شامل للأجزاء المعلقة والحماية الكاثودية لشبكة أنابيب بحرية بطول 80 كم.',
      impact: 'Identified 12 critical free-span anomalies and 6 anode replacement zones, enabling targeted maintenance planning.',
      impactAr: 'تحديد 12 شذوذاً حرجاً في الأجزاء المعلقة و6 مناطق تتطلب استبدال الأنودات، مما أتاح تخطيطاً دقيقاً للصيانة.'
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
      'RBI (Risk-Based Inspection) for Pipelines & Asset Integrity Management',
      'IO-Cofferdam deployment for dry subsea welding on active lines',
      'In-line smart pigging (MFL, UT, Geometry, EMAT, Combo)',
      'Diverless pipeline structural clamps (up to 42" OD)',
      '4D condition monitoring data management system',
      'Hyperbaric welding for high-pressure hydrocarbon steel and HDPE lines'
    ],
    keyCapabilitiesAr: [
      'استجابة سريعة للنوازل وإصلاح الأنابيب البحرية على مدار 24/7',
      'تقييم التفتيش القائم على المخاطر للأنابيب (RBI for Pipelines)',
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
  },
  {
    id: 'subsea-pipeline-engineering',
    title: 'Subsea and Pipeline Engineering',
    titleAr: 'هندسة خطوط الأنابيب والأنظمة البحرية',
    shortDesc: 'Front-end subsea engineering, structural analysis, pipeline routing, hydrodynamic modeling, and Risk-Based Inspection (RBI).',
    shortDescAr: 'الهندسة البحرية الأساسية، التحليل الهيكلي، مسارات الأنابيب، النمذجة الهيدروديناميكية، والتفتيش القائم على المخاطر (RBI).',
    fullDesc: 'AMS Marine delivers end-to-end Subsea and Pipeline Engineering solutions for offshore oil & gas developments. Our engineering teams perform stress analysis, free-span fatigue evaluation, pipeline route optimization, and Risk-Based Inspection (RBI) programs to ensure long-term structural integrity and flow assurance.',
    fullDescAr: 'تقدم AMS Marine حلولاً هندسية متكاملة للأنظمة والبحرية وخطوط الأنابيب لمشاريع النفط والغاز البحرية. ينفذ مهندسونا تحليل الإجهادات، تقييم الإجهاد للأجزاء المعلقة من الأنابيب، تحسين مسارات الخطوط، وبرامج التفتيش القائم على المخاطر (RBI) لضمان السلامة الهيكلية وتدفق الإنتاج.',
    iconName: 'Wrench',
    maxDepth: 'Full Field Engineering Range',
    maxDepthAr: 'تغطية هندسية كاملة للحقول البحرية',
    deliveryMethods: ['Front-End Engineering Design (FEED)', 'RBI Modeling', 'FEA & Dynamic Analysis'],
    deliveryMethodsAr: ['التصميم الهندسي الأولي FEED', 'نمذجة RBI', 'التحليل الديناميكي والعناصر المحدودة'],
    keyCapabilities: [
      'Subsea pipeline route optimization and seabed bathymetry analysis',
      'Risk-Based Inspection (RBI) for subsea pipelines & hydrocarbon risers',
      'Pipeline stress, buckling, and free-span fatigue assessment',
      'Subsea tie-in spool & riser mechanical design calculations',
      'Cathodic Protection (CP) system design and life extension modeling',
      'Subsea integrity management system (SIMS) database setup'
    ],
    keyCapabilitiesAr: [
      'تحسين مسارات الأنابيب البحرية وتحليل تضاريس القاع',
      'برامج التفتيش القائم على المخاطر (RBI for Pipelines) لصواعد الهيدروكربون',
      'تحليل إجهادات الأنابيب والانبعاج والإجهاد التراكمي للأجزاء المعلقة',
      'الحسابات الميكانيكية لروابط الأنابيب (Spools) والصواعد',
      'تصميم أنظمة الحماية الكاثودية (CP) وتمديد عمر الحقول',
      'تأسيس قواعد بيانات إدارة سلامة الأصول البحرية (SIMS)'
    ],
    equipmentList: [
      'AutoPIPE & OFFPIPE Subsea Pipeline Analysis Packages',
      'DNV-RP-F105 & DNV-RP-F110 Free-Span Evaluation Tooling',
      'Subsea 3D CAD & Finite Element Analysis (FEA) Software'
    ],
    equipmentListAr: [
      'برامج تحليل الأنابيب البحرية AutoPIPE & OFFPIPE',
      'معدات وأدوات تقييم الأجزاء المعلقة وفق DNV-RP-F105',
      'برمجيات التصميم ثلاثي الأبعاد والتحليل بالعناصر المحدودة (FEA)'
    ],
    caseStudy: {
      title: 'Arabian Gulf Offshore Pipeline Integrity & RBI Assessment',
      titleAr: 'تقييم سلامة خطوط الأنابيب والتفتيش القائم على المخاطر بالخليج',
      description: 'Executed comprehensive RBI audit and free-span fatigue re-assessment for 140km offshore trunkline network.',
      descriptionAr: 'تنفيذ تدقيق شامل للتفتيش القائم على المخاطر (RBI) وتقييم الأجزاء المعلقة لشبكة أنابيب بطول 140 كم.',
      impact: 'Optimized inspection intervals, saving operator 30% in operational maintenance expenditure.',
      impactAr: 'تحسين الفترات الزمنية للفحص وتوفير 30٪ من مصاريف الصيانة التشغيلية.'
    },
    datasheetUrl: '#'
  },
  {
    id: 'salvage-emergency-response',
    title: 'Salvage and Emergency Response across the ME and Africa',
    titleAr: 'الإنقاذ والاستجابة للطوارئ في الشرق الأوسط وأفريقيا',
    shortDesc: '24/7 wreck removal, emergency towing, subsea hull patching, pollution containment, and rapid incident dispatch across the ME & Africa.',
    shortDescAr: 'استجابة طوارئ 24/7 لإزالة الحطام، القطر الطارئ، سد الهياكل تحت الماء، احتواء التلوث، والتدخل السريع في الشرق الأوسط وأفريقيا.',
    fullDesc: 'Operating emergency response spreads across the Middle East and Africa, AMS Marine provides immediate mobilization for vessel salvage, stranded offshore asset recovery, subsea hydrocarbon leak containment, and emergency wreck removal in full alignment with international maritime salvage conventions.',
    fullDescAr: 'من خلال تشغيل فرق طوارئ متخصصة في الشرق الأوسط وأفريقيا، توفر AMS Marine استجابة فورية لإنقاذ السفن، استعادة الأصول البحرية العالقة، احتواء تسربات الهيدروكربون تحت الماء، وإزالة الحطام الطارئة وفقاً للاتفاقيات الدولية لإنقاذ السفن.',
    iconName: 'LifeBuoy',
    maxDepth: '24/7 Rapid Regional Dispatch',
    maxDepthAr: 'استجابة وإرسال إقليمي سريع 24/7',
    deliveryMethods: ['Emergency Salvage Diving', 'Pumping & Lightering', 'Heavy Lift Rescue', 'Wreck Demolition'],
    deliveryMethodsAr: ['غوص الإنقاذ الطارئ', 'تفريغ وحقن السوائل', 'الرفع الثقيل للإنقاذ', 'تفكيك وإزالة الحطام'],
    keyCapabilities: [
      '24/7 emergency incident dispatch across Middle East & Africa ports/offshore blocks',
      'Marine vessel salvage, re-floating, and emergency towing support',
      'Subsea hull patching, cofferdam sealing, and underwater damage assessment',
      'Emergency oil spill lightering, pumping, and environmental containment',
      'Heavy subsea wreck cutting, wire saw demolition, and debris clearance',
      'Lloyd’s Open Form (LOF) and commercial salvage contract execution'
    ],
    keyCapabilitiesAr: [
      'إرسال طوارئ 24/7 عبر موانئ وحقول الشرق الأوسط وأفريقيا',
      'إنقاذ السفن البحرية، إعادة التعويم، ودعم القطر الطارئ',
      'سد ثقوب الهياكل تحت الماء، سدود الكوفركس، وتقييم الأضرار',
      'تفريغ النفط في حالات الطوارئ، الضخ، والحماية البيئية',
      'قطع حطام السفن بالمنشار الألماسي وإزالة الأنقاض البحرية',
      'تنفيذ عقود الإنقاذ البحرية المعتمدة (LOF) والعقود التجارية'
    ],
    equipmentList: [
      'High-Capacity Subsea Salvage Pumping & De-watering Spreads',
      'Subsea Diamond Wire Cutting Saws & Hydraulic Shear Tooling',
      'Heavy Duty Inflatable Lift Bags (up to 50-Ton Modules)',
      'Oil Spill Containment Booms & Skimmers'
    ],
    equipmentListAr: [
      'معدات ضخ وتفريغ المياه عالية الطاقة لإنقاذ السفن',
      'منشار السلك الألماسي وأدوات القص الهيدروليكية للحطام',
      'وسائد الرفع العائمة الثقيلة (وحدات حتى 50 طناً)',
      'حواجز ومكاشط احتواء التلوث النفطي'
    ],
    caseStudy: {
      title: 'Emergency Red Sea Vessel Salvage & Fuel Lightering',
      titleAr: 'إنقاذ سفينة طارئ بالبحر الأحمر وتفريغ الوقود',
      description: 'Successfully refloated 12,000 DWT grounded cargo vessel and safely lightered 400 tons of heavy fuel oil within 48 hours.',
      descriptionAr: 'إعادة تعويم سفينة شحن حمولة 12000 طن وتفريغ 400 طن من الوقود بنجاح خلال 48 ساعة دون تسرب بيئي.',
      impact: 'Zero environmental contamination and saved vessel from structural breakup.',
      impactAr: 'حماية البيئة بنسبة 100٪ وإنقاذ السفنة من التفكك الهيكلي.'
    },
    datasheetUrl: '#'
  },
  {
    id: 'hyperbaric-welding-dry-space',
    title: 'Hyperbaric Welding and Dry Space Engineering and installations',
    titleAr: 'اللحام الجاف تحت الضغط وهندسة وتركيبات المساحات المغلقة',
    shortDesc: 'Class-certified hyperbaric welding habitats, dry space engineering, IO-Cofferdam deployments, and structural repairs on active lines.',
    shortDescAr: 'مغلفات اللحام الجاف المعتمدة، هندسة المساحات الجافة، سدود الكوفركس، والإصلاحات الهيكلية للخطوط النشطة.',
    fullDesc: 'AMS Marine provides specialized Hyperbaric Welding and Dry Space Engineering solutions for high-pressure subsea pipelines and offshore structures. By deploying custom-engineered hyperbaric habitats and IO-Cofferdams, our certified welding technicians execute structural dry welds underwater without shutting down critical hydrocarbon production.',
    fullDescAr: 'تقدم AMS Marine حلولاً متخصصة في اللحام الجاف تحت الضغط وهندسة المساحات المغلقة للأنابيب والهياكل البحرية مرتفعة الضغط. من خلال نشر بيئات اللحام المعزولة وسدود IO-Cofferdams، ينفذ فنيو اللحام المعتمدون لدينا لحامات جافة عالية الدقة تحت الماء دون الحاجة لإيقاف إنتاج الهيدروكربون.',
    iconName: 'Flame',
    maxDepth: '300m Sat / Near-shore Cofferdams',
    maxDepthAr: 'غوص تشبعي 300م / سدود جافة ساحلية',
    deliveryMethods: ['Hyperbaric Habitat Welding', 'IO-Cofferdam Deployment', 'Dry Space Structural Engineering'],
    deliveryMethodsAr: ['اللحام داخل المغلفات الجافة', 'نشر سدود IO-Cofferdam', 'هندسة المساحات الجافة الهيكلية'],
    keyCapabilities: [
      'Class-certified hyperbaric dry welding habitat setup and environmental control',
      'Near-shore and platform riser repair using custom IO-Cofferdam systems',
      'Structural dry welding on live hydrocarbon lines and offshore jackets',
      'Pre-heating, post-weld heat treatment (PWHT), and subsea NDT inspection',
      'Dry space engineering & habitat life-support atmospheric monitoring',
      'AWS D3.6 Class A subsea dry weld procedure qualification'
    ],
    keyCapabilitiesAr: [
      'تثبيت بيئات اللحام الجاف تحت الضغط والتحكم بالبيئة الداخلية',
      'إصلاح صواعد المنصات والأنابيب القريبة من الشاطئ باستخدام سدود IO-Cofferdam',
      'اللحام الجاف الهيكلي على خطوط الهيدروكربون النشطة وقواعد المنصات',
      'التسخين المسبق والمعالجة الحرارية بعد اللحام (PWHT) والفحص اللاهدمي NDT',
      'هندسة المساحات الجافة ومراقبة أجهزة دعم الحياة داخل غرف اللحام',
      'تأهيل إجراءات اللحام الجاف المعتمدة وفق معيار AWS D3.6 Class A'
    ],
    equipmentList: [
      'Modular Subsea Hyperbaric Welding Habitat & Gas Control Van',
      'IO-Cofferdams for Riser & HDPE/Steel Pipeline Repair',
      'Subsea Pre-Heating & Post-Weld Heat Treatment (PWHT) Units',
      'Radiographic & Ultrasonic Weld Inspection Equipment'
    ],
    equipmentListAr: [
      'غرف وغطاء اللحام الجاف الحاوية مع كابينة التحكم بالغازات',
      'سدود IO-Cofferdam لإصلاح الصواعد والأنابيب الفولاذية و HDPE',
      'وحدات التسخين المسبق والمعالجة الحرارية بعد اللحام تحت الماء',
      'معدات الفحص الشعاعي والموجات فوق الصوتية للحامات'
    ],
    caseStudy: {
      title: 'Offshore Riser Hyperbaric Dry Weld Repair & Tie-In',
      titleAr: 'إصلاح وربط صاعد بحري باللحام الجاف تحت الضغط',
      description: 'Deployed IO-Cofferdam habitat to perform Class A dry welding repair on a 20" gas riser without disrupting oilfield throughput.',
      descriptionAr: 'نشر بيئة IO-Cofferdam لتنفيذ إصلاح باللحام الجاف درجة A على صاعد غاز قطر 20 بوصة دون إيقاف الإنتاج.',
      impact: '100% NDT weld pass rate and avoided $4M in field shutdown losses.',
      impactAr: 'نجاح فحص اللحام بنسبة 100٪ وتجنب خسائر توقف الحقل البالغة 4 ملايين دولار.'
    },
    datasheetUrl: '#'
  },
  {
    id: 'ili-external-inspections',
    title: 'In line Inspections (ILI) and External Pipeline inspections using Intelligent Pigging together with Pipecare',
    titleAr: 'الفحص المباشر (ILI) والفحص الخارجي للأنابيب بالكشط الذكي بالتعاون مع Pipecare',
    shortDesc: 'Comprehensive ILI intelligent pigging (MFL, UT, EMAT, Geometry) and external pipeline flaw detection delivered with PIPECARE.',
    shortDescAr: 'الفحص المباشر الشامل (ILI) بالكشط الذكي (MFL, UT, EMAT) واكتشاف عيوب الأنابيب الخارجية بالشراكة مع PIPECARE.',
    fullDesc: 'AMS Marine, together with technology partner PIPECARE, provides industry-leading In-Line Inspection (ILI) and external subsea pipeline inspection services. Utilizing state-of-the-art intelligent pigging tools (MFL, Ultrasonic Thickness, EMAT, Geo-pigs), we deliver high-resolution metal loss mapping, crack detection, geometry profiling, and external NDT evaluations.',
    fullDescAr: 'تقدم AMS Marine بالتكامل مع شريك التكنولوجيا PIPECARE خدمات الفحص المباشر (ILI) والفحص الخارجي للأنابيب البحرية المعتمدة عالمياً. باستخدام أحدث مكاشط الفحص الذكية (MFL, UT, EMAT, مكاشط الهندسة)، نوفر خريطة دقيقة لفقدان المعدن، اكتشاف التشققات، قياس الأبعاد، والتقييمات اللاهدمية الخارجية.',
    iconName: 'Search',
    maxDepth: 'Full Offshore Pipeline Network',
    maxDepthAr: 'تغطية شبكات الأنابيب البحرية بالكامل',
    deliveryMethods: ['Intelligent Pigging (MFL/UT/EMAT)', 'External Subsea NDT', '4D Integrity Profiling'],
    deliveryMethodsAr: ['الكشط الذكي MFL/UT/EMAT', 'الفحص اللاهدمي الخارجي تحت الماء', 'نمذجة السلامة رباعية الأبعاد'],
    keyCapabilities: [
      'In-Line Inspection (ILI) using PIPECARE MFL (Magnetic Flux Leakage) smart pigs',
      'Ultrasonic Thickness (UT) & EMAT intelligent pigging for internal/external corrosion mapping',
      'Caliper & Geometry pigging for dent, ovality, and deformation detection',
      'Subsea external pipeline NDT inspection (laser profiling, ultrasonic wall measurement)',
      'Subsea pipeline free-span and external coating defect identification',
      'Comprehensive Fitness-For-Service (FFS) & pipeline remaining life reporting'
    ],
    keyCapabilitiesAr: [
      'الفحص المباشر (ILI) باستخدام مكاشط PIPECARE الذكية المجهزة بتقنية MFL',
      'الفحص بالموجات فوق الصوتية (UT) و EMAT لتحديد التآكل الداخلي والخارجي',
      'مكاشط قياس الأبعاد والقُطر لاكتشاف الانبعاجات والتشوهات',
      'الفحص اللاهدمي الخارجي للأنابيب (التجميع الليزري وسمك الجدران)',
      'تحديد عيوب الطلاء الخارجي والأجزاء المعلقة من الأنابيب البحرية',
      'تقارير الصلاحية للخدمة (FFS) وتحديد العمر المتبقي للأنابيب'
    ],
    equipmentList: [
      'PIPECARE High-Resolution MFL & Combo Smart Inspection Pigs',
      'Ultrasonic Thickness (UT) & EMAT Crack Detection Pigs',
      'Subsea Hydro-Acoustic Pig Tracking & Locating Equipment',
      'External Subsea Laser Corrosion Profilers & UT Thickness Probes'
    ],
    equipmentListAr: [
      'مكاشط PIPECARE الذكية المدمجة عالية الدقة MFL',
      'مكاشط الموجات فوق الصوتية (UT) و EMAT لاكتشاف التشققات',
      'أجهزة التتبع الصوتي والتحديد لمكاشط الأنابيب تحت الماء',
      'أجهزة مسح التآكل بالموجات فوق الصوتية والليزر الخارجي'
    ],
    caseStudy: {
      title: '110km Offshore Gas Trunkline ILI Inspection Campaign',
      titleAr: 'حملة الفحص المباشر ILI لخط أنابيب غاز بحري بطول 110 كم',
      description: 'Completed seamless ILI smart pigging campaign identifying internal corrosion anomalies and wall thinning across 110km subsea gas line.',
      descriptionAr: 'إكمال حملة فحص مباشر ILI بالكشط الذكي واكتشاف شذوذ التآكل الداخلي وترقق الجدران لخط غاز بحري.',
      impact: 'Provided high-precision corrosion map enabling targeted clamp repair without production interruption.',
      impactAr: 'توفير خريطة تآكل عالية الدقة أتاحت تثبيت المشابك المستهدفة دون إيقاف الإنتاج.'
    },
    datasheetUrl: '#'
  }
];
