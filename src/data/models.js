// Researched content per model, keyed by page slug. Every value here was read
// from the source it cites on 12 November 2026. Nothing is from memory.
// A model with no entry here shows an empty spec table.
//
// row(variant, chassis, years, engine, displacement, induction, PS, torque Nm,
//     drivetrain, gearbox, kerb weight kg, source id)
// `null` means the source does not state the value.

const row = (variant, chassis, years, engine, displacement, induction, ps, torque, drivetrain, gearbox, weight, source) => ({
  variant, chassis, years, engine, displacement, induction, ps, torque, drivetrain, gearbox, weight, source,
});
const src = (id, label, url) => ({ id, label, url });
const ref = (label, url) => ({ label, url });
const NA = 'Naturally aspirated';
const NISSAN = 'https://www.nissan-global.com/EN/HERITAGE/';
const WIKI = 'https://en.wikipedia.org/wiki/';
const DRIFTED = 'https://www.drifted.com/';
const TFW = 'https://www.tf-works.com/';
const DSPORT = 'https://dsportmag.com/the-cars/';
const CT = 'https://www.carthrottle.com/';

const NOTE_DASH = 'A dash means the source does not state that value.';
const NOTE_YEARS = 'Years show the model year of the car each source documents, not the length of the production run.';
const NOTE_HP = 'Power in hp is converted from the PS figure the source gives.';
const NOTE_WIKI = 'Rows citing Wikipedia are from a secondary source, and Wikipedia gives no citation of its own for most of those figures.';

export const RESEARCH = {
  'nissan-silvia': {
    sources: [
      src(1, "Nissan Heritage Collection, No.115: Nissan Silvia Q's (1988: S13)", NISSAN + 'silvia_qs.html'),
      src(2, "Nissan Heritage Collection, No.275: Nissan Silvia K's (1989: S13)", NISSAN + 'silvia_ks.html'),
      src(3, 'Nissan Heritage Collection, No.323: Nissan 180SX TYPE II (1990: RS13)', NISSAN + 'nissan_180SX_TYPE_II.html'),
      src(4, "Nissan Heritage Collection, No.198: Silvia K's Type S (1994: S14)", NISSAN + 'silvia_ks_s14.html'),
      src(5, 'Nissan press release, "Nissan Releases All-New Silvia", 19 January 1999', 'https://global.nissannews.com/en/releases/19990119-e_presskit'),
      src(6, 'Wikipedia, "Nissan Silvia" (secondary source)', WIKI + 'Nissan_Silvia'),
      src(7, 'Wikipedia, "Nissan 240SX" (secondary source)', WIKI + 'Nissan_240SX'),
    ],
    historySources: [
      ref('Nissan Heritage Collection, No.041: Silvia (1966: CSP311)', NISSAN + 'silvia_041.html'),
      ref("Nissan Heritage Collection, No.275: Nissan Silvia K's (1989: S13)", NISSAN + 'silvia_ks.html'),
      ref("Nissan Heritage Collection, No.198: Silvia K's Type S (1994: S14)", NISSAN + 'silvia_ks_s14.html'),
      ref('Nissan Heritage Collection, No.323: Nissan 180SX TYPE II (1990: RS13)', NISSAN + 'nissan_180SX_TYPE_II.html'),
      ref('Nissan press release, "Nissan Releases All-New Silvia", 19 January 1999', 'https://global.nissannews.com/en/releases/19990119-e_presskit'),
      ref('Wikipedia, "Nissan Silvia" (secondary source: end of production, S15 markets)', WIKI + 'Nissan_Silvia'),
      ref('Wikipedia, "Nissan 240SX" (secondary source: 240SX engine)', WIKI + 'Nissan_240SX'),
    ],
    specs: [
      row("Q's", 'S13', '1988', 'CA18DE', '1,809 cc', NA, 135, '159', 'FR', null, '1,110', 1),
      row("K's", 'S13', '1989', 'CA18DET', '1,809 cc', 'Turbo', 175, '226', 'FR', null, '1,120', 2),
      row("Q's (SR20)", 'PS13', '1991', 'SR20DE', null, NA, 140, '178', null, null, null, 6),
      row("K's (SR20)", 'PS13', '1991', 'SR20DET', null, 'Turbo', 205, '274', null, null, null, 6),
      row('180SX TYPE II', 'RS13', '1990', 'CA18DET', '1,809 cc', 'Turbo', 175, '225', null, null, '1,170', 3),
      row("K's Type S", 'S14', '1994', 'SR20DET', null, 'Turbo', 220, '274', null, null, '1,220', 4),
      row('spec-R', null, '1999', 'SR20DET', '1,998 cc', 'Turbo', 250, '275', null, '6-speed manual', '1,240', 5),
      row('spec-S', null, '1999', 'SR20DE', null, NA, 165, null, null, null, null, 6),
      row('200SX (Europe)', 'RS13U', '1989–1994', 'CA18DET', null, 'Turbo', 169, null, null, null, null, 6),
      row('240SX (North America)', null, null, 'KA24DE', '2.4 L', NA, 157, null, null, null, null, 7),
    ],
    notes: [
      'The 1999 release gives torque as 28.0 kg-m; 275 Nm is a conversion. Nissan’s S14 page gives the same 28.0 kgf·m as 274 Nm.',
      'Nissan’s pages give the same 175 PS engine as 129 kW on the K’s page and 123 kW on the 180SX page. The PS figure is used here.',
    ],
    builds: [
      {
        chassis: 'S15',
        name: 'Scott’s spec-R',
        text: 'A pearl white spec-R used as a daily driver in the UK, on gold Work Meister wheels, with the factory rear spoiler removed and the tailgate smoothed.',
        credit: 'Drifted, “Just A Clean Nissan S15…”, 31 March 2014',
        url: DRIFTED + 'feature-just-a-clean-nissan-s15/',
      },
      {
        chassis: 'S15',
        name: 'The Kazama S15',
        text: 'Built by Kazama in Japan and later imported to Ireland. The article gives 450 bhp from a GReddy T67 turbo, with Kazama Auto aero, a SARD rear wing, Volk GTV 18-inch wheels and 2005 D1 graphics.',
        credit: 'Drifted, “Kazama Silvia S15”, by Damien O’ Conner, 25 July 2023',
        url: DRIFTED + 'feature-kazama-s15/',
      },
      {
        chassis: 'S13',
        name: 'Mishimoto’s SEMA S13',
        text: 'Built by Mike Sullivan of Mishimoto for the 2008 SEMA Show and then prepared for drift and time attack. The SR20DET is stroked to 2,164 cc with a Turbonetics GT-K 650 turbo; the article gives 558 horsepower on a Mustang dynamometer. Origin Lab bumpers and +40 mm and +50 mm fenders.',
        credit: 'DSPORT, “Mishimoto’s 558 Horsepower Super Silvia S13”, by Richard Fong, 28 February 2017',
        url: DSPORT + 'features/mishimotos-558-horsepower-super-silvia-s13/',
      },
    ],
    unique: [
      {
        chassis: 'S15',
        name: 'Christy Carpenter’s 1JZ S15',
        text: 'An Irish competition drift car built in 2011 around a Toyota 1JZ-GTE in place of the SR20. The article lists 620.8 hp from a Garrett GT35R turbo, a Supra Getrag six-speed gearbox and a BN Sports blister kit.',
        credit: 'Drifted, “Christy Carpenter’s Yokohama Sponsored Nissan Silvia S15 With 1JZ-GTE”, by Joe Terrell, 29 May 2024',
        url: DRIFTED + 'feature-christy-carpenters-yokohama-1jz-nissan-s15/',
      },
    ],
    kits: [
      {
        maker: 'Vertex',
        name: 'body kit',
        fits: 'S15',
        includes: 'Front bumper, side skirts and rear bumper in FRP. Listed by the retailer TF-Works.',
        url: TFW + 'vertex-body-kit-for-1999-2002-nissan-s15-silvia',
      },
      {
        maker: 'Vertex',
        name: 'EDGE wide body kit',
        fits: 'S15',
        includes: 'Front bumper, side skirts, rear bumper and front and rear aero fenders. Listed by the retailer TORQEN.',
        url: 'https://www.torqen.uk/nissan/silvia-s13-s15/body-styling/body-kits/62285-nissan-silvia-240sx-s15-99-02-vertex-edge-wide-body-kit.html',
      },
      {
        maker: 'ORIGIN Labo.',
        name: 'DRIFT LINE',
        fits: 'S15',
        includes: 'Front bumper, side steps and rear bumper in FRP, sold as a three-piece set.',
        url: 'https://origin-labo.jp/aerokit/drift-line-nissan-silvia-s15/',
      },
      {
        maker: 'ORIGIN Labo.',
        name: 'DRIFT LINE',
        fits: 'S14 (early)',
        includes: 'Front bumper, side steps and rear bumper in FRP, sold as a three-piece set.',
        url: 'https://origin-labo.jp/aerokit/drift-line-nissan-silvia-s14-%e5%89%8d%e6%9c%9f/',
      },
      {
        maker: 'ORIGIN Labo.',
        name: 'DRIFT LINE',
        fits: '180SX',
        includes: 'Front bumper, side steps and rear bumper in FRP, sold as a three-piece set.',
        url: 'https://origin-labo.jp/aerokit/drift-line-180sx/',
      },
    ],
  },

  'nissan-skyline-gt-r': {
    sources: [
      src(1, 'Nissan Heritage Collection, No.052: Skyline 2000GT-R (1969: PGC10)', NISSAN + 'skyline_2000gt_r.html'),
      src(2, 'Nissan Heritage Collection, No.401: Skyline Hardtop 2000GT-R (1972: KPGC10)', NISSAN + 'skyline_hardtop_2000gt-r.html'),
      src(3, 'Nissan Heritage Collection, No.068: Skyline 2000GT-R (1973: KPGC110)', NISSAN + '068_skyline_2000gtr.html'),
      src(4, 'Nissan Heritage Collection, No.210: Nissan Skyline GT-R (1989: BNR32)', NISSAN + 'skyline_gt-r_1989.html'),
      src(5, 'Nissan Heritage Collection, No.280: Skyline GT-R V-spec II (2000: BNR34)', NISSAN + '280_skyline_gt-r_v-spec_ii.html'),
      src(6, 'Nissan Heritage Collection, No.306: Skyline GT-R M-spec Nür (BNR34)', NISSAN + '306_skyline_gt-r_m-spec_nur.html'),
    ],
    historySources: [
      ref('Nissan Heritage Collection, No.052: Skyline 2000GT-R (1969: PGC10)', NISSAN + 'skyline_2000gt_r.html'),
      ref('Nissan Heritage Collection, No.068: Skyline 2000GT-R (1973: KPGC110)', NISSAN + '068_skyline_2000gtr.html'),
      ref('Nissan Heritage Collection, No.210: Nissan Skyline GT-R (1989: BNR32)', NISSAN + 'skyline_gt-r_1989.html'),
      ref('Nissan Heritage Collection, No.157: Skyline GT-R (1993: BCNR33)', NISSAN + 'skyline_gt-r_bcnr33.html'),
      ref('Nissan Heritage Collection, No.306: Skyline GT-R M-spec Nür (BNR34)', NISSAN + '306_skyline_gt-r_m-spec_nur.html'),
      ref('Wikipedia, "Nissan Skyline GT-R" (secondary source: the Godzilla name, end of production, the R35)', WIKI + 'Nissan_Skyline_GT-R'),
    ],
    specs: [
      row('2000GT-R', 'PGC10', '1969', 'S20', '1,989 cc', NA, 160, '177', null, null, '1,120', 1),
      row('Hardtop 2000GT-R', 'KPGC10', '1972', 'S20', '1,989 cc', NA, 160, '176', null, null, '1,100', 2),
      row('2000GT-R', 'KPGC110', '1973', 'S20', '1,989 cc', NA, 160, '177', null, null, '1,145', 3),
      row('GT-R', 'BNR32', '1989', 'RB26DETT', '2,568 cc', 'Turbo', 280, '353', '4WD', '5-speed manual', '1,430', 4),
      row('GT-R V-spec II', 'BNR34', '2000', 'RB26DETT', '2,568 cc', 'Turbo', 280, '392', null, null, '1,560', 5),
      row('GT-R M-spec Nür', 'BNR34', '2002', 'RB26DETT', '2,568 cc', 'Turbo', 280, '392', null, null, '1,580', 6),
    ],
    notes: [
      'No road-going R33 is in the table: Nissan’s page for the 1997 V-spec could not be read, and its other R33 pages document a concept car and a race car.',
      'Nissan’s page for the M-spec Nür is headed 2000 but says the car was manufactured in 2002. The later year is used here.',
    ],
    builds: [
      {
        chassis: 'R34',
        name: 'The Omori Factory CRS R34',
        text: 'An R34 rebuilt by NISMO’s Omori Factory for the importer Top Rank, with about 900 parts replaced, a 2.8-litre “R4” development of the RB26DETT, Z-tune carbon aero and LMGT4 wheels. The article reports it sold for $750,000.',
        credit: 'Drifted, “This Skyline R34 GT-R Sold For $750,000 – Are JDM Prices Out Of Control?”, by Bill Jefferies, 14 November 2025',
        url: DRIFTED + 'this-skyline-r34-gt-r-sold-for-750000-are-jdm-prices-out-of-control/',
      },
    ],
    unique: [
      {
        chassis: 'R32',
        name: 'Team Nichiei’s GT Zero',
        text: 'A run of ten rebuilt R32s. Each RB26 is taken out to 2.8 litres with a single Trust turbo for a quoted 600 hp, and paired with the six-speed gearbox from the R34 GT-R. Pandem body kit, and seats from a Porsche 911 GT3.',
        credit: 'Car Throttle, “Re-Imagining a Legend: Team Nichiei’s Nissan Skyline GT-R (R32) ‘GT Zero’”, by Gurminder Bains, 19 July 2017',
        url: CT + 'post/2zd85jj',
      },
    ],
    kits: [
      {
        maker: 'Pandem',
        name: 'body kit',
        fits: 'R32',
        includes: 'As fitted to Team Nichiei’s GT Zero cars. The article does not itemise the parts.',
        url: CT + 'post/2zd85jj',
      },
    ],
  },

  'mazda-rx-7': {
    sources: [src(1, 'Wikipedia, "Mazda RX-7" (secondary source)', WIKI + 'Mazda_RX-7')],
    historySources: [
      ref('Wikipedia, "Mazda RX-7" (secondary source)', WIKI + 'Mazda_RX-7'),
      ref('Wikipedia, "Mazda 787B" (secondary source: Le Mans 1991)', WIKI + 'Mazda_787B'),
    ],
    specs: [
      row('Savanna RX-7', 'SA22C', '1978', '12A', '1,146 cc', NA, 130, null, null, null, null, 1),
      row('Savanna RX-7 Turbo', 'SA22C', '1983', '12A', '1,146 cc', 'Turbo', 165, null, null, null, null, 1),
      row('RX-7 Turbo', 'FC3S', '1985', '13B-T', '1,308 cc', 'Turbo', 185, null, null, null, null, 1),
      row('RX-7 Turbo (facelift)', 'FC3S', '1989', '13B-T', '1,308 cc', 'Turbo', 205, null, null, null, null, 1),
      row('RX-7 (Series 6)', 'FD3S', '1992–1995', '13B-REW', null, 'Sequential twin turbo', 255, null, null, null, null, 1),
      row('RX-7 Type RB (Series 8)', 'FD3S', '1998–2002', '13B-REW', null, 'Sequential twin turbo', 265, null, null, null, null, 1),
      row('RX-7 Type R, RS, RZ (Series 8)', 'FD3S', '1998–2002', '13B-REW', null, 'Sequential twin turbo', 280, null, null, null, null, 1),
    ],
    notes: [
      'No Mazda page with RX-7 specifications could be found, so every row rests on Wikipedia, which itself flags its RX-7 article as needing more citations.',
      'Wikipedia gives kerb weight only as a range per generation (FD: 1,218 to 1,340 kg), so no weight is shown per variant.',
    ],
    builds: [],
    unique: [
      {
        chassis: 'FD3S',
        name: 'Han’s Veilside Fortune RX-7',
        text: 'One of the two surviving Veilside Fortune wide-body cars from the film Tokyo Drift, owned in the UK since 2008. The kit adds more than 200 mm of width; the 13B-REW is close to standard at around 280 bhp, and the article stresses it is a show car, not a drift car.',
        credit: 'Drifted, “Han’s Legendary Tokyo Drift RX-7 Is Up For Sale – But All Is Not What It Seems”, by Bill Jefferies, 11 July 2025',
        url: DRIFTED + 'hans-legendary-tokyo-drift-rx-7-is-up-for-sale-but-all-is-not-what-it-seems/',
      },
    ],
    kits: [
      {
        maker: 'Vertex',
        name: 'Ridge wide body kit',
        fits: 'FD3S',
        includes: 'Front bumper spoiler, side steps, rear bumper spoiler, 35 mm front and rear aero fenders and canards, sold as a six-piece set. Listed by the retailer TF-Works.',
        url: TFW + 'ridge-widebody-kit-for-1993-1995-mazda-fd3s-rx-7/',
      },
      {
        maker: 'Vertex',
        name: 'body kit',
        fits: 'FD3S',
        includes: 'Listed by the retailer TF-Works for 1993 to 1995 cars. The listing does not itemise the parts.',
        url: TFW + 'vertex-body-kit-for-1993-1995-mazda-fd3s-rx-7/',
      },
      {
        maker: 'ORIGIN Labo.',
        name: 'Stylish full kit',
        fits: 'FD3S',
        includes: 'Hand-laid fibreglass. Listed by the retailer TF-Works; the listing does not itemise the parts.',
        url: TFW + 'origin-labo-stylish-full-kit-rx7-fd/',
      },
    ],
  },

  'honda-nsx': {
    sources: [src(1, 'Wikipedia, "Honda NSX (first generation)" (secondary source)', WIKI + 'Honda_NSX_(first_generation)')],
    historySources: [ref('Wikipedia, "Honda NSX (first generation)" (secondary source)', WIKI + 'Honda_NSX_(first_generation)')],
    specs: [
      row('NSX (manual)', 'NA1', '1990', 'C30A', '2,977 cc', NA, 274, '285', 'Mid-engine, rear-wheel drive', '5-speed manual', '1,365', 1),
      row('NSX (automatic)', 'NA1', '1990', 'C30A', '2,977 cc', NA, 255, '285', 'Mid-engine, rear-wheel drive', '4-speed automatic', null, 1),
      row('NSX-R', 'NA1', '1992', 'C30A', '2,977 cc', NA, null, null, 'Mid-engine, rear-wheel drive', null, '1,230', 1),
      row('NSX (manual)', 'NA2', '1997', 'C32B', '3,179 cc', NA, 294, '305', 'Mid-engine, rear-wheel drive', '6-speed manual', '1,435', 1),
      row('NSX-R', 'NA2', '2002', 'C32B', '3,179 cc', NA, 294, null, 'Mid-engine, rear-wheel drive', null, '1,270', 1),
    ],
    notes: [
      'Honda’s own news archive refused access, so every row rests on Wikipedia.',
      'Wikipedia gives the 3.2-litre engine’s torque as 305 Nm in its text and 304 Nm in its summary box. The text figure is used here.',
    ],
    builds: [
      {
        chassis: 'NA1',
        name: 'Susumu Shimbori’s ADVANCE NSX',
        text: 'A 1990 car built by the owner of ADVANCE Co. in Yokohama without forced induction: a C30A taken to 3,110 cc with C32B heads and individual throttle bodies, for 343 whp. The article reports its Fuji Speedway lap falling from 2:20 as standard to 1:56.',
        credit: 'DSPORT, “343 WHP Honda NSX”, by Richard Fong, 23 February 2021',
        url: DSPORT + 'features/343-whp-honda-nsx/',
      },
      {
        chassis: 'NA1',
        name: 'Mr. J’s street and circuit NSX',
        text: 'A 1994 car from Kanagawa developed over 17 years and driven on the street in its track setup. The C30A is overbored to 3,111 cc with TODA internals for 345 whp, under a modified Marga Hills wide-body kit. The article lists a 1:55.322 lap at Fuji.',
        credit: 'DSPORT, “This Street NSX is Always Ready for the Circuit”, by Richard Fong, 11 February 2016',
        url: DSPORT + 'this-street-nsx-is-always-ready-for-the-circuit-bred-to-race/',
      },
    ],
    unique: [],
    kits: [
      {
        maker: 'Marga Hills',
        name: 'wide-body aero kit',
        fits: 'NA1',
        includes: 'As fitted, in modified form, to Mr. J’s NSX. The article does not itemise the parts.',
        url: DSPORT + 'this-street-nsx-is-always-ready-for-the-circuit-bred-to-race/',
      },
      {
        maker: 'ADVANCE Co.',
        name: 'FLAT OUT aerodynamics',
        fits: 'NA1',
        includes: 'Bonnet, rear wing and side mirrors, as fitted to Susumu Shimbori’s NSX.',
        url: DSPORT + 'features/343-whp-honda-nsx/',
      },
    ],
  },

  'honda-integra': {
    sources: [src(1, 'Wikipedia, "Honda Integra" (secondary source)', WIKI + 'Honda_Integra')],
    historySources: [ref('Wikipedia, "Honda Integra" (secondary source)', WIKI + 'Honda_Integra')],
    specs: [
      row('Integra Type R', 'DC2', '1995', 'B18C', null, NA, 200, null, null, '5-speed manual', null, 1),
      row('Integra Type R', 'DC5', '2001', 'K20A', '2.0 L', NA, 220, null, null, '6-speed manual', null, 1),
    ],
    notes: [
      'Honda’s own news archive refused access, so both rows rest on Wikipedia.',
      'Wikipedia does not give a power figure for the B16A of 1989, or a weight for either Type R, so those are not shown.',
    ],
    builds: [],
    unique: [],
    kits: [],
  },

  'toyota-mr2': {
    sources: [src(1, 'Wikipedia, "Toyota MR2" (secondary source)', WIKI + 'Toyota_MR2')],
    historySources: [ref('Wikipedia, "Toyota MR2" (secondary source)', WIKI + 'Toyota_MR2')],
    specs: [
      row('MR2', 'AW11', '1984', '4A-GE', '1,587 cc', NA, 130, null, null, null, null, 1),
      row('MR2 Supercharger', 'AW11', '1986', '4A-GZE', null, 'Supercharged', 147, '186', null, null, null, 1),
      row('MR2 (Revision 3, turbo)', 'SW20', '1993', '3S-GTE', null, 'Turbo', 245, null, null, null, null, 1),
      row('MR2 (Revision 5)', 'SW20', '1997', '3S-GE', null, NA, 200, null, null, null, null, 1),
      row('MR-S', 'ZZW30', '1999', '1ZZ-FE', null, NA, 140, null, null, null, '996', 1),
    ],
    notes: [
      'Toyota’s own vehicle history site could not be read, so every row rests on Wikipedia.',
      'The MR-S weight is the figure Wikipedia gives for manual cars.',
    ],
    builds: [
      {
        chassis: 'MR2',
        name: 'Owen’s K20 turbo MR2',
        text: 'A Honda K20 swap with a Precision 6466 turbo, quoted at 650 hp and revving to 9,200 rpm, in a car that looks mostly standard and keeps its factory brakes with no ABS, traction control or power steering. The article does not say which generation it is.',
        credit: 'autoevolution, “This 650-HP Toyota MR2 K20 Swap Revs to 9,200 RPM, Is Every 90s Kid’s Dream”, by Vlad Mitrache, 12 April 2021',
        url: 'https://www.autoevolution.com/news/this-650-hp-toyota-mr2-k20-swap-revs-to-9200-rpm-is-every-90s-kid-s-dream-159153.html',
      },
      {
        chassis: 'AW11',
        name: 'Loz Selly’s K20 AW11',
        text: 'Rescued from a barn where it had been used for airsoft target practice, then rebuilt over about three years in Shropshire around a K20A2 from a Civic Type R, with blended fibreglass arch extensions and 3SDM 0.05 wheels. The article gives no power figure.',
        credit: 'Car Throttle, “How This AW11 Toyota MR2 Went From Wreck To K20-Swapped Riches”, by Matt Robinson',
        url: CT + 'post/how-this-aw11-toyota-mr2-went-from-wreck-to-k20-swapped-riches/',
      },
    ],
    unique: [
      {
        chassis: 'SW20',
        name: 'Marty Sweatt’s Typhoon',
        text: 'An SW20 with its wheelbase stretched by 260 mm to take a supercharged 4.2-litre Audi V8 mounted lengthways, driving through a three-speed automatic from an Audi 5000. Around 400 bhp, four years in the making.',
        credit: 'Car Throttle, “This Stretched Toyota MR2 Is Powered By A Supercharged Audi V8”, by Matt Robinson',
        url: CT + 'news/stretched-toyota-mr2-powered-supercharged-audi-v8',
      },
    ],
    kits: [],
  },

  'toyota-supra': {
    sources: [src(1, 'Wikipedia, "Toyota Supra" (secondary source)', WIKI + 'Toyota_Supra')],
    historySources: [ref('Wikipedia, "Toyota Supra" (secondary source)', WIKI + 'Toyota_Supra')],
    specs: [
      row('Celica XX 2000', 'MA45', '1978', 'M-EU', '1,988 cc', NA, 125, null, null, null, null, 1),
      row('Celica XX 2600', 'MA46', '1978', '4M-E', '2,563 cc', NA, 140, null, null, null, null, 1),
      row('Supra 2.5 Twin Turbo', 'JZA70', '1990', '1JZ-GTE', '2.5 L', 'Twin turbo', 280, null, null, null, null, 1),
      row('Supra RZ', 'JZA80', '1993', '2JZ-GTE', null, 'Sequential twin turbo', 280, '431', null, '6-speed manual', null, 1),
      row('Supra Turbo (export)', 'JZA80', '1993', '2JZ-GTE', null, 'Sequential twin turbo', 325, '427', null, '6-speed manual', null, 1),
    ],
    notes: [
      'Toyota’s own vehicle history site could not be read, so every row rests on Wikipedia.',
      'The non-turbo A80 is left out because Wikipedia gives two different power figures for it.',
    ],
    builds: [
      {
        chassis: 'JZA80',
        name: 'Brian Okawa’s single-turbo Supra',
        text: 'Bought in Hawaii as a part-finished drag build and reworked for street response. The 2JZ-GTE is stroked to 3,353 cc with a PTE6768 turbo on E85; the article gives 905.7 hp at 31 psi on a Dynojet.',
        credit: 'DSPORT, “Widebody Single-Turbo Toyota Supra JZA80”, by Richard Fong, 6 March 2014',
        url: DSPORT + 'features/widebody-single-turbo-toyota-supra-jza80/',
      },
      {
        chassis: 'JZA80',
        name: 'The Garage Revolver and Varis Supra',
        text: 'A 1995 car built in Tokyo as a show collaboration and first shown at Tokyo Auto Salon 2018. A Do-Luck 3.1-litre 2JZ with a single GReddy T88H-38GK turbo is quoted at 800 hp, under a Varis wide body on 19-inch Volk Racing TE37 Ultra wheels.',
        credit: 'DSPORT, “800HP Varis Widebody Toyota Supra”, by Bassem Girgis, 30 April 2018',
        url: DSPORT + 'features/800hp-varis-widebody-toyota-supra/',
      },
    ],
    unique: [],
    kits: [
      {
        maker: 'Varis',
        name: 'wide body',
        fits: 'JZA80',
        includes: 'Front fenders, side skirts, rear fenders and doors, with a Varis boot spoiler and air dam, as fitted to the Garage Revolver car.',
        url: DSPORT + 'features/800hp-varis-widebody-toyota-supra/',
      },
    ],
  },

  'mitsubishi-3000gt': {
    sources: [
      src(1, 'Mitsubishi Motors, "Car History": GTO, launched October 1990', 'https://www.mitsubishi-motors.com/en/company/history/car/'),
      src(2, 'Wikipedia, "Mitsubishi 3000GT" (secondary source)', WIKI + 'Mitsubishi_GTO'),
    ],
    historySources: [
      ref('Mitsubishi Motors, "Car History": GTO, launched October 1990', 'https://www.mitsubishi-motors.com/en/company/history/car/'),
      ref('Wikipedia, "Mitsubishi 3000GT" (secondary source: export names, Dodge Stealth, Spyder, end of production)', WIKI + 'Mitsubishi_GTO'),
    ],
    specs: [
      row('GTO Twin Turbo', null, '1990', '3.0 L V6', '3,000 cc', 'Twin turbo', 280, null, 'Full-time 4WD', '5-speed manual', null, 1),
      row('GTO Twin Turbo', 'Z16A', '1990', '6G72', null, 'Twin turbo', 280, '417', null, null, null, 2),
      row('GTO SR', null, '1994', '6G72', null, NA, 228, null, null, null, null, 2),
      row('3000GT (Europe)', null, '1992', '6G72', null, 'Twin turbo', 286, null, null, null, null, 2),
      row('3000GT VR-4 (North America)', null, '1991', '6G72', null, 'Twin turbo', 304, '417', null, '5-speed manual', '1,695', 2),
      row('3000GT VR-4 (North America)', null, '1994', '6G72', null, 'Twin turbo', 324, null, null, '6-speed manual', null, 2),
    ],
    notes: [
      'Mitsubishi’s page gives the twin-turbo car’s power, gearbox and drivetrain but not its torque or weight, so the same car appears twice, once per source.',
    ],
    builds: [
      {
        chassis: 'Z16A',
        name: 'Jared Holt’s 1999 VR4',
        text: 'Bought standard in 2012 and kept looking that way. On the original block, with a pair of upgraded Kinugawa turbos and E85, the article gives 575 whp and 500 lb-ft at 24 psi on a Dynojet.',
        credit: 'DSPORT, “575 WHP Mitsubishi 3000GT VR4”, by Bassem Girgis, 8 June 2021',
        url: DSPORT + 'features/575-whp-mitsubishi-3000gt-vr4/',
      },
    ],
    unique: [],
    kits: [],
  },
};

const hp = (ps) => Math.round(ps * 0.98632);
const dash = (v) => v ?? '—';

export function researchFor(slug) {
  const r = RESEARCH[slug];
  if (!r) return null;
  const usesWiki = r.specs.some((s) => r.sources.find((x) => x.id === s.source).label.startsWith('Wikipedia'));
  return {
    ...r,
    notes: [NOTE_DASH, NOTE_YEARS, NOTE_HP, ...(usesWiki ? [NOTE_WIKI] : []), ...r.notes],
    rows: r.specs.map((s) => ({
      source: s.source,
      cells: [
        s.variant,
        dash(s.chassis),
        dash(s.years),
        s.engine,
        dash(s.displacement),
        s.induction,
        s.ps ? `${s.ps} / ${hp(s.ps)}` : '—',
        dash(s.torque),
        dash(s.drivetrain),
        dash(s.gearbox),
        dash(s.weight),
      ],
    })),
  };
}
