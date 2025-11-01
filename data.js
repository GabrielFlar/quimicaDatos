const medicamentos = [
  {
    nombre: 'Pomada Magistral',
    grupo: 'Magistrales',
    via: 'Tópica',
    descripcion: 'Preparación tópica magistral que combina lidocaína y corticosteroide.',
    link: 'MAGISTRAL.html'
  },
  {
    nombre: 'Paracetamol 500 mg tableta',
    grupo: 'Analgésico y antipirético',
    via: 'Oral',
    descripcion: 'Analgesico y antipirético de uso común.',
    link: 'libre-receta.html'
  },
  {
    nombre: 'Paracetamol suspensión',
    grupo: 'Analgésico y antipirético',
    via: 'Oral',
    descripcion: 'Presentación en suspensión para pediatría.',
    link: 'especialidades.html'
  },
  {
    nombre: 'Eritromicina 250 mg',
    grupo: 'Antibiótico macrólido',
    via: 'Oral',
    descripcion: 'Antibiótico para infecciones sensibles.',
    link: 'oficinal.html'
  },
  {
    nombre: 'Fentanilo 50 mcg/ml',
    grupo: 'Opioide analgésico',
    via: 'IV/IM',
    descripcion: 'Analgésico opioide sintético de alta potencia.',
    link: 'receta-ss.html'
  },
  {
    nombre: 'Amoxicilina 500 mg',
    grupo: 'Antibiótico',
    via: 'Oral',
    descripcion: 'Antibiótico betalactámico de amplio uso.',
    link: 'antibioticos.html'
  },
  {
    nombre: 'Nivolumab',
    grupo: 'Inmunoterapia oncológica',
    via: 'IV',
    descripcion: 'Anticuerpo monoclonal inhibidor de PD-1.',
    link: 'demas.html'
  },
  {
    nombre: 'Metformina 850 mg',
    grupo: 'Antidiabético / Endocrinología',
    via: 'Oral',
    descripcion: 'Biguanida para diabetes tipo 2.',
    link: 'receta.html'
  },
  {
    nombre: 'Ácido Acetilsalicílico 100 mg',
    grupo: 'Analgésico / Antiagregante',
    via: 'Oral',
    descripcion: 'Aspirina, analgésico y antiagregante.',
    link: 'medicamentos/cido-acetilsalic-lico-100-mg.html'
  },
  {
    nombre: 'Lidocaína 2%',
    grupo: 'Anestésico local',
    via: 'Inyectable / Tópica',
    descripcion: 'Anestésico local tipo amida.',
    link: 'medicamentos/lidoca-na-2.html'
  },
  {
    nombre: 'Propofol',
    grupo: 'Anestesia',
    via: 'IV',
    descripcion: 'Anestésico general de acción rápida.',
    link: 'medicamentos/propofol.html'
  },
  {
    nombre: 'Metoprolol',
    grupo: 'Cardiología',
    via: 'Oral',
    descripcion: 'Betabloqueador cardioselectivo.',
    link: 'medicamentos/metoprolol.html'
  },
  {
    nombre: 'Alteplasa',
    grupo: 'Trombolítico',
    via: 'IV',
    descripcion: 'Activador tisular del plasminógeno.',
    link: 'medicamentos/alteplasa.html'
  },
  {
    nombre: 'Peróxido de Benzoilo 5%',
    grupo: 'Dermatología',
    via: 'Cutánea',
    descripcion: 'Agente antiacné bactericida y queratolítico.',
    link: 'medicamentos/per-xido-de-benzoilo-5.html'
  },
  {
    nombre: 'Fluorouracilo 5%',
    grupo: 'Dermatología / Antineoplásico',
    via: 'Cutánea',
    descripcion: 'Antimetabolito tópico (5-FU).',
    link: 'medicamentos/fluorouracilo-5.html'
  },
  {
    nombre: 'Prednisona',
    grupo: 'Corticoide',
    via: 'Oral',
    descripcion: 'Glucocorticoide de acción intermedia.',
    link: 'medicamentos/prednisona.html'
  },
  {
    nombre: 'Clindamicina',
    grupo: 'Antibiótico',
    via: 'Oral / Tópica',
    descripcion: 'Antibiótico para anaerobios y gram +.',
    link: 'medicamentos/clindamicina.html'
  },
  {
    nombre: 'Amikacina',
    grupo: 'Antibiótico',
    via: 'IM/IV',
    descripcion: 'Aminoglucósido para gram - resistentes.',
    link: 'medicamentos/amikacina.html'
  },
  {
    nombre: 'Hidrocortisona',
    grupo: 'Corticoide',
    via: 'IV/IM',
    descripcion: 'Corticoide para insuficiencia suprarrenal y choque.',
    link: 'medicamentos/hidrocortisona.html'
  },
  {
    nombre: 'Loratadina',
    grupo: 'Antihistamínico',
    via: 'Oral',
    descripcion: 'Antihistamínico H1 de segunda generación.',
    link: 'medicamentos/loratadina.html'
  },
  {
    nombre: 'Omeprazol',
    grupo: 'Gastroenterología',
    via: 'Oral / IV',
    descripcion: 'Inhibidor de bomba de protones.',
    link: 'medicamentos/omeprazol.html'
  },
  {
    nombre: 'Sucralfato',
    grupo: 'Gastroprotector',
    via: 'Oral',
    descripcion: 'Protectivo gástrico.',
    link: 'medicamentos/sucralfato.html'
  },
  {
    nombre: 'Estradiol-drospirenona',
    grupo: 'Ginecología',
    via: 'Oral',
    descripcion: 'Terapia de reemplazo hormonal combinada.',
    link: 'medicamentos/estradiol-drospirenona.html'
  },
  {
    nombre: 'Misoprostol',
    grupo: 'Ginecología',
    via: 'Oral / Vaginal',
    descripcion: 'Análogo prostaglandina E1, usado para inducción.',
    link: 'medicamentos/misoprostol.html'
  },
  {
    nombre: 'Sulfato ferroso',
    grupo: 'Hematología',
    via: 'Oral',
    descripcion: 'Suplemento de hierro para anemia ferropénica.',
    link: 'medicamentos/sulfato-ferroso.html'
  },
  {
    nombre: 'Turoctocog alfa (Factor VIII)',
    grupo: 'Hemoderivados',
    via: 'IV',
    descripcion: 'Factor VIII recombinante para hemofilia A.',
    link: 'medicamentos/turoctocog-alfa-factor-viii.html'
  },
  {
    nombre: 'Carbón activado',
    grupo: 'Antídoto',
    via: 'Oral',
    descripcion: 'Adsorbente para intoxicaciones.',
    link: 'medicamentos/carb-n-activado.html'
  },
  {
    nombre: 'Atropina',
    grupo: 'Antídoto / Anticolinérgico',
    via: 'IM/IV',
    descripcion: 'Antagonista muscarínico para intoxicaciones.',
    link: 'medicamentos/atropina.html'
  },
  {
    nombre: 'Furosemida',
    grupo: 'Diurético',
    via: 'IV/Oral',
    descripcion: 'Diurético de asa potente.',
    link: 'medicamentos/furosemida.html'
  },
  {
    nombre: 'Salbutamol (albuterol)',
    grupo: 'Broncodilatador',
    via: 'Inhalatoria',
    descripcion: 'Broncodilatador β2 agonista de corta duración.',
    link: 'medicamentos/salbutamol-albuterol.html'
  },
  {
    nombre: 'Nicotina (parche)',
    grupo: 'Cesación tabáquica',
    via: 'Cutánea',
    descripcion: 'Parche de reemplazo de nicotina.',
    link: 'medicamentos/nicotina-parche.html'
  },
  {
    nombre: 'Fenobarbital',
    grupo: 'Anticonvulsivante',
    via: 'Oral',
    descripcion: 'Barbitúrico anticonvulsivante.',
    link: 'medicamentos/fenobarbital.html'
  },
  {
    nombre: 'Oxcarbazepina',
    grupo: 'Anticonvulsivante',
    via: 'Oral',
    descripcion: 'Antiepiléptico para crisis parciales.',
    link: 'medicamentos/oxcarbazepina.html'
  },
  {
    nombre: 'Vitamina E',
    grupo: 'Suplemento',
    via: 'Oral',
    descripcion: 'Antioxidante (Vitamina E).',
    link: 'medicamentos/vitamina-e.html'
  },
  {
    nombre: 'Ácido Ascórbico (Vit C)',
    grupo: 'Nutrición',
    via: 'IV / Oral',
    descripcion: 'Vitamina C inyectable y oral.',
    link: 'medicamentos/cido-asc-rbico-vit-c.html'
  },
  {
    nombre: 'Sulfacetamida (oftálmica)',
    grupo: 'Oftalmología',
    via: 'Oftálmica',
    descripcion: 'Antibiótico oftálmico para conjuntivitis.',
    link: 'medicamentos/sulfacetamida-oft-lmica.html'
  },
  {
    nombre: 'Fenilefrina (oftálmica)',
    grupo: 'Oftalmología',
    via: 'Oftálmica',
    descripcion: 'Midriático para examen de fondo de ojo.',
    link: 'medicamentos/fenilefrina-oft-lmica.html'
  },
];
