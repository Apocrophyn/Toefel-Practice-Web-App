// TOEFL iBT 2026 Reading Questions Bank
// 100+ questions following official format (no difficulty levels)
// Task Types: Complete the Words, Read in Daily Life, Read an Academic Text

// ==================== TYPE DEFINITIONS ====================

export interface CompleteWordsQuestion {
  id: string;
  taskType: "complete_words";
  topic: string;
  passage: string;
  blanks: {
    position: number;
    partialWord: string;
    answer: string;
  }[];
}

export interface DailyLifeQuestion {
  id: string;
  taskType: "daily_life";
  category: string;
  passage: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface AcademicQuestion {
  id: string;
  taskType: "academic";
  topic: string;
  title: string;
  passage: string;
  wordCount: number;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export type ReadingQuestion = CompleteWordsQuestion | DailyLifeQuestion | AcademicQuestion;

// ==================== COMPLETE THE WORDS (50 passages) ====================

export const completeWordsQuestions: CompleteWordsQuestion[] = [
  {
    id: "CW_001",
    taskType: "complete_words",
    topic: "Campus Registration",
    passage: "All new st_dents must complete their course reg_stration before the semester begins. The registrar's off_ce is located in the main administration bu_lding. Please bring your student ID and a copy of your acc_ptance letter. Late registration will incur an addit_onal fee of fifty dollars. The deadl_ne for adding or dropping courses is September fift_enth. Aca_emic advisors are avail_ble to help you select appropriate courses for your major.",
    blanks: [
      { position: 0, partialWord: "st_dents", answer: "students" },
      { position: 1, partialWord: "reg_stration", answer: "registration" },
      { position: 2, partialWord: "off_ce", answer: "office" },
      { position: 3, partialWord: "bu_lding", answer: "building" },
      { position: 4, partialWord: "acc_ptance", answer: "acceptance" },
      { position: 5, partialWord: "addit_onal", answer: "additional" },
      { position: 6, partialWord: "deadl_ne", answer: "deadline" },
      { position: 7, partialWord: "fift_enth", answer: "fifteenth" },
      { position: 8, partialWord: "Aca_emic", answer: "Academic" },
      { position: 9, partialWord: "avail_ble", answer: "available" }
    ]
  },
  {
    id: "CW_002",
    taskType: "complete_words",
    topic: "Library Services",
    passage: "The univ_rsity library offers a variety of res_urces for students. Study rooms can be res_rved online up to one week in adv_nce. Food and bev_rages are only permitted in designated areas. The ref_rence desk is staffed by professional libr_rians who can assist with research. Inter_ibrary loans allow access to mat_rials from other institutions. Photo_opying services are available on the second floor.",
    blanks: [
      { position: 0, partialWord: "univ_rsity", answer: "university" },
      { position: 1, partialWord: "res_urces", answer: "resources" },
      { position: 2, partialWord: "res_rved", answer: "reserved" },
      { position: 3, partialWord: "adv_nce", answer: "advance" },
      { position: 4, partialWord: "bev_rages", answer: "beverages" },
      { position: 5, partialWord: "ref_rence", answer: "reference" },
      { position: 6, partialWord: "libr_rians", answer: "librarians" },
      { position: 7, partialWord: "Inter_ibrary", answer: "Interlibrary" },
      { position: 8, partialWord: "mat_rials", answer: "materials" },
      { position: 9, partialWord: "Photo_opying", answer: "Photocopying" }
    ]
  },
  {
    id: "CW_003",
    taskType: "complete_words",
    topic: "Dining Services",
    passage: "The campus caf_teria serves breakfast, lunch, and dinner during reg_lar hours. Students with dietary restr_ctions can request special meals. The meal plan offers unlim_ted access to the main dining hall. Veget_rian and vegan options are always avail_ble. Nutr_tional information is posted next to each dish. The food court feat_res several intern_tional cuisine options. Allergy inform_tion is clearly labeled on all items.",
    blanks: [
      { position: 0, partialWord: "caf_teria", answer: "cafeteria" },
      { position: 1, partialWord: "reg_lar", answer: "regular" },
      { position: 2, partialWord: "restr_ctions", answer: "restrictions" },
      { position: 3, partialWord: "unlim_ted", answer: "unlimited" },
      { position: 4, partialWord: "Veget_rian", answer: "Vegetarian" },
      { position: 5, partialWord: "avail_ble", answer: "available" },
      { position: 6, partialWord: "Nutr_tional", answer: "Nutritional" },
      { position: 7, partialWord: "feat_res", answer: "features" },
      { position: 8, partialWord: "intern_tional", answer: "international" },
      { position: 9, partialWord: "inform_tion", answer: "information" }
    ]
  },
  {
    id: "CW_004",
    taskType: "complete_words",
    topic: "Research Methods",
    passage: "Graduate students must complete a comp_ehensive literature review before beginning their diss_rtation research. The meth_dology section should clearly describe the exp_rimental procedures. All research involving human part_cipants requires ethical approval from the inst_tutional review board. Data coll_ction must follow estab_ished protocols. Stat_stical analysis should be cond_cted using appropriate software.",
    blanks: [
      { position: 0, partialWord: "comp_ehensive", answer: "comprehensive" },
      { position: 1, partialWord: "diss_rtation", answer: "dissertation" },
      { position: 2, partialWord: "meth_dology", answer: "methodology" },
      { position: 3, partialWord: "exp_rimental", answer: "experimental" },
      { position: 4, partialWord: "part_cipants", answer: "participants" },
      { position: 5, partialWord: "inst_tutional", answer: "institutional" },
      { position: 6, partialWord: "coll_ction", answer: "collection" },
      { position: 7, partialWord: "estab_ished", answer: "established" },
      { position: 8, partialWord: "Stat_stical", answer: "Statistical" },
      { position: 9, partialWord: "cond_cted", answer: "conducted" }
    ]
  },
  {
    id: "CW_005",
    taskType: "complete_words",
    topic: "Academic Integrity",
    passage: "The university takes plag_arism very seriously. All submitted work must be orig_nal and properly cited. Students found guilty of acad_mic dishonesty may face susp_nsion or exp_lsion from the institution. Prof_ssors use software to detect cop_ed content. Proper cit_tion formats include APA and MLA styles. Coll_boration is encouraged but individual work must be clearly ident_fied.",
    blanks: [
      { position: 0, partialWord: "plag_arism", answer: "plagiarism" },
      { position: 1, partialWord: "orig_nal", answer: "original" },
      { position: 2, partialWord: "acad_mic", answer: "academic" },
      { position: 3, partialWord: "susp_nsion", answer: "suspension" },
      { position: 4, partialWord: "exp_lsion", answer: "expulsion" },
      { position: 5, partialWord: "Prof_ssors", answer: "Professors" },
      { position: 6, partialWord: "cop_ed", answer: "copied" },
      { position: 7, partialWord: "cit_tion", answer: "citation" },
      { position: 8, partialWord: "Coll_boration", answer: "Collaboration" },
      { position: 9, partialWord: "ident_fied", answer: "identified" }
    ]
  },
  {
    id: "CW_006",
    taskType: "complete_words",
    topic: "Laboratory Safety",
    passage: "All lab_ratory personnel must wear protective equ_pment at all times. Haz_rdous materials should be stored in designated cab_nets. Emergency proc_dures are posted near each exit. Chemical sp_lls must be reported immed_ately to the safety officer. First aid k_ts are located throughout the facil_ty. Proper vent_lation is essential when working with volatile subst_nces.",
    blanks: [
      { position: 0, partialWord: "lab_ratory", answer: "laboratory" },
      { position: 1, partialWord: "equ_pment", answer: "equipment" },
      { position: 2, partialWord: "Haz_rdous", answer: "Hazardous" },
      { position: 3, partialWord: "cab_nets", answer: "cabinets" },
      { position: 4, partialWord: "proc_dures", answer: "procedures" },
      { position: 5, partialWord: "sp_lls", answer: "spills" },
      { position: 6, partialWord: "immed_ately", answer: "immediately" },
      { position: 7, partialWord: "k_ts", answer: "kits" },
      { position: 8, partialWord: "facil_ty", answer: "facility" },
      { position: 9, partialWord: "subst_nces", answer: "substances" }
    ]
  },
  {
    id: "CW_007",
    taskType: "complete_words",
    topic: "Financial Aid",
    passage: "Schol_rship applications must be submitted before the deadline. Students must dem_nstrate financial need through documentation. Ren_wal of funding depends on maintaining satisf_ctory academic progress. Fed_ral grants do not need to be rep_id. Work-study programs provide part-time empl_yment opportunities. The financial aid off_ce offers coun_eling sessions for budget plan_ing.",
    blanks: [
      { position: 0, partialWord: "Schol_rship", answer: "Scholarship" },
      { position: 1, partialWord: "dem_nstrate", answer: "demonstrate" },
      { position: 2, partialWord: "Ren_wal", answer: "Renewal" },
      { position: 3, partialWord: "satisf_ctory", answer: "satisfactory" },
      { position: 4, partialWord: "Fed_ral", answer: "Federal" },
      { position: 5, partialWord: "rep_id", answer: "repaid" },
      { position: 6, partialWord: "empl_yment", answer: "employment" },
      { position: 7, partialWord: "off_ce", answer: "office" },
      { position: 8, partialWord: "coun_eling", answer: "counseling" },
      { position: 9, partialWord: "plan_ing", answer: "planning" }
    ]
  },
  {
    id: "CW_008",
    taskType: "complete_words",
    topic: "Campus Health",
    passage: "The student health center is open Monday through Fr_day. Walk-in appoint_ents are available in the morning. For emerg_ncies, please call campus sec_rity immediately. Flu shots are available free of ch_rge during October. Mental health coun_eling services are confid_ntial. Prescr_ptions can be picked up at the pharm_cy next door. Insur_nce information must be provided at check-in.",
    blanks: [
      { position: 0, partialWord: "Fr_day", answer: "Friday" },
      { position: 1, partialWord: "appoint_ents", answer: "appointments" },
      { position: 2, partialWord: "emerg_ncies", answer: "emergencies" },
      { position: 3, partialWord: "sec_rity", answer: "security" },
      { position: 4, partialWord: "ch_rge", answer: "charge" },
      { position: 5, partialWord: "coun_eling", answer: "counseling" },
      { position: 6, partialWord: "confid_ntial", answer: "confidential" },
      { position: 7, partialWord: "Prescr_ptions", answer: "Prescriptions" },
      { position: 8, partialWord: "pharm_cy", answer: "pharmacy" },
      { position: 9, partialWord: "Insur_nce", answer: "Insurance" }
    ]
  },
  {
    id: "CW_009",
    taskType: "complete_words",
    topic: "Career Services",
    passage: "The career center offers res_me writing workshops. Mock interv_ews help students prepare for job applic_tions. Employers visit campus during the annual career f_ir. Intern_hip opportunities are posted on the job board. Alumni net_orking events connect students with profess_onals. Career coun_elors provide guid_nce on choosing a major. Salary negot_ation workshops are offered monthly.",
    blanks: [
      { position: 0, partialWord: "res_me", answer: "resume" },
      { position: 1, partialWord: "interv_ews", answer: "interviews" },
      { position: 2, partialWord: "applic_tions", answer: "applications" },
      { position: 3, partialWord: "f_ir", answer: "fair" },
      { position: 4, partialWord: "Intern_hip", answer: "Internship" },
      { position: 5, partialWord: "net_orking", answer: "networking" },
      { position: 6, partialWord: "profess_onals", answer: "professionals" },
      { position: 7, partialWord: "coun_elors", answer: "counselors" },
      { position: 8, partialWord: "guid_nce", answer: "guidance" },
      { position: 9, partialWord: "negot_ation", answer: "negotiation" }
    ]
  },
  {
    id: "CW_010",
    taskType: "complete_words",
    topic: "Transportation",
    passage: "The campus shuttle service oper_tes from six in the morning until midnight. Bus routes conn_ct the dormitories to acad_mic buildings. Bicycle park_ng is available near all major facilities. Park_ng permits are required for all veh_cles on campus. The transit app provides real-time arr_val information. Carpool_ng is encouraged to reduce traff_c congestion. Electric veh_cle charging stations are located in Lot B.",
    blanks: [
      { position: 0, partialWord: "oper_tes", answer: "operates" },
      { position: 1, partialWord: "conn_ct", answer: "connect" },
      { position: 2, partialWord: "acad_mic", answer: "academic" },
      { position: 3, partialWord: "park_ng", answer: "parking" },
      { position: 4, partialWord: "veh_cles", answer: "vehicles" },
      { position: 5, partialWord: "arr_val", answer: "arrival" },
      { position: 6, partialWord: "Carpool_ng", answer: "Carpooling" },
      { position: 7, partialWord: "traff_c", answer: "traffic" },
      { position: 8, partialWord: "veh_cle", answer: "vehicle" },
      { position: 9, partialWord: "charg_ng", answer: "charging" }
    ]
  },
  {
    id: "CW_011",
    taskType: "complete_words",
    topic: "Student Housing",
    passage: "Fresh_en are required to live on campus during their first year. Dorm_tory rooms include basic furn_ture and internet access. Resid_nt advisors are available to assist with any conc_rns. Quiet hours begin at ten o'clock on weekn_ghts. Main_enance requests can be submitted through the housing port_l. Laun_ry facilities are located in the base_ent of each building. Room_ate assignments are based on lifestyle preferenc_s.",
    blanks: [
      { position: 0, partialWord: "Fresh_en", answer: "Freshmen" },
      { position: 1, partialWord: "Dorm_tory", answer: "Dormitory" },
      { position: 2, partialWord: "furn_ture", answer: "furniture" },
      { position: 3, partialWord: "Resid_nt", answer: "Resident" },
      { position: 4, partialWord: "conc_rns", answer: "concerns" },
      { position: 5, partialWord: "weekn_ghts", answer: "weeknights" },
      { position: 6, partialWord: "Main_enance", answer: "Maintenance" },
      { position: 7, partialWord: "port_l", answer: "portal" },
      { position: 8, partialWord: "Laun_ry", answer: "Laundry" },
      { position: 9, partialWord: "preferenc_s", answer: "preferences" }
    ]
  },
  {
    id: "CW_012",
    taskType: "complete_words",
    topic: "Athletics",
    passage: "The recre_tion center is open to all students with a valid ID. Intram_ral sports leagues offer compet_tive opportunities for non-varsity athletes. The swim_ing pool maintains strict cap_city limits for safety. Person_l training sessions can be sch_duled at the front desk. Fit_ess classes include yoga, spin_ing, and aerobics. Lock_rs are available for rent on a semest_r basis.",
    blanks: [
      { position: 0, partialWord: "recre_tion", answer: "recreation" },
      { position: 1, partialWord: "Intram_ral", answer: "Intramural" },
      { position: 2, partialWord: "compet_tive", answer: "competitive" },
      { position: 3, partialWord: "swim_ing", answer: "swimming" },
      { position: 4, partialWord: "cap_city", answer: "capacity" },
      { position: 5, partialWord: "Person_l", answer: "Personal" },
      { position: 6, partialWord: "sch_duled", answer: "scheduled" },
      { position: 7, partialWord: "Fit_ess", answer: "Fitness" },
      { position: 8, partialWord: "spin_ing", answer: "spinning" },
      { position: 9, partialWord: "semest_r", answer: "semester" }
    ]
  },
  {
    id: "CW_013",
    taskType: "complete_words",
    topic: "Technology Services",
    passage: "The IT help desk provides tech_ical support for all university syst_ms. Wi-Fi is avail_ble throughout campus including outd_or areas. Softw_re downloads are free for enrolled stud_nts. Print_ng quotas are reset at the beginning of each sem_ster. Cyber_ecurity training is mand_tory for all employees. The learn_ng management system hosts course mat_rials online.",
    blanks: [
      { position: 0, partialWord: "tech_ical", answer: "technical" },
      { position: 1, partialWord: "syst_ms", answer: "systems" },
      { position: 2, partialWord: "avail_ble", answer: "available" },
      { position: 3, partialWord: "outd_or", answer: "outdoor" },
      { position: 4, partialWord: "Softw_re", answer: "Software" },
      { position: 5, partialWord: "stud_nts", answer: "students" },
      { position: 6, partialWord: "Print_ng", answer: "Printing" },
      { position: 7, partialWord: "sem_ster", answer: "semester" },
      { position: 8, partialWord: "Cyber_ecurity", answer: "Cybersecurity" },
      { position: 9, partialWord: "mat_rials", answer: "materials" }
    ]
  },
  {
    id: "CW_014",
    taskType: "complete_words",
    topic: "International Programs",
    passage: "Study abr_ad programs are available in over thirty countr_es. Schol_rships cover partial tuit_on for qualifying students. Cultur_l immersion experiences enrich acad_mic learning. Visas and pass_orts must be obtained well in adv_nce. Language profic_ency requirements vary by dest_nation. Credit trans_er agreements ensure courses count toward graduation.",
    blanks: [
      { position: 0, partialWord: "abr_ad", answer: "abroad" },
      { position: 1, partialWord: "countr_es", answer: "countries" },
      { position: 2, partialWord: "Schol_rships", answer: "Scholarships" },
      { position: 3, partialWord: "tuit_on", answer: "tuition" },
      { position: 4, partialWord: "Cultur_l", answer: "Cultural" },
      { position: 5, partialWord: "acad_mic", answer: "academic" },
      { position: 6, partialWord: "pass_orts", answer: "passports" },
      { position: 7, partialWord: "adv_nce", answer: "advance" },
      { position: 8, partialWord: "profic_ency", answer: "proficiency" },
      { position: 9, partialWord: "dest_nation", answer: "destination" }
    ]
  },
  {
    id: "CW_015",
    taskType: "complete_words",
    topic: "Environmental Studies",
    passage: "The univ_rsity is committed to sust_inability initiatives. Solar pan_ls provide twenty perc_nt of campus electricity. Recyc_ing bins are located through_ut all buildings. Water conser_ation efforts have reduced cons_mption by thirty percent. Compost_ng programs turn food waste into fert_lizer. Green build_ng certifications guide new constr_ction projects.",
    blanks: [
      { position: 0, partialWord: "univ_rsity", answer: "university" },
      { position: 1, partialWord: "sust_inability", answer: "sustainability" },
      { position: 2, partialWord: "pan_ls", answer: "panels" },
      { position: 3, partialWord: "perc_nt", answer: "percent" },
      { position: 4, partialWord: "Recyc_ing", answer: "Recycling" },
      { position: 5, partialWord: "through_ut", answer: "throughout" },
      { position: 6, partialWord: "conser_ation", answer: "conservation" },
      { position: 7, partialWord: "cons_mption", answer: "consumption" },
      { position: 8, partialWord: "Compost_ng", answer: "Composting" },
      { position: 9, partialWord: "constr_ction", answer: "construction" }
    ]
  },
  {
    id: "CW_016",
    taskType: "complete_words",
    topic: "Art History",
    passage: "The Renaiss_nce period marked a rebirth of class_cal learning in Europe. Artists like Mich_langelo and Leonardo da Vinci revol_tionized painting and sculpt_re. Perspect_ve techniques created the illusion of three-dimens_onal space. Patron_ge from wealthy families funded major artis_ic projects. The invent_on of oil paints allowed for greater color vib_ancy.",
    blanks: [
      { position: 0, partialWord: "Renaiss_nce", answer: "Renaissance" },
      { position: 1, partialWord: "class_cal", answer: "classical" },
      { position: 2, partialWord: "Mich_langelo", answer: "Michelangelo" },
      { position: 3, partialWord: "revol_tionized", answer: "revolutionized" },
      { position: 4, partialWord: "sculpt_re", answer: "sculpture" },
      { position: 5, partialWord: "Perspect_ve", answer: "Perspective" },
      { position: 6, partialWord: "three-dimens_onal", answer: "three-dimensional" },
      { position: 7, partialWord: "Patron_ge", answer: "Patronage" },
      { position: 8, partialWord: "artis_ic", answer: "artistic" },
      { position: 9, partialWord: "vib_ancy", answer: "vibrancy" }
    ]
  },
  {
    id: "CW_017",
    taskType: "complete_words",
    topic: "Astronomy",
    passage: "The tel_scope allows scientists to observe dist_nt galaxies. Plan_ts in our solar system orbit the Sun at vary_ng distances. Ast_roids occasionally pass close to Earth's orbit_l path. Black h_les possess gravity so strong that even l_ght cannot escape. The Milky Way gal_xy contains billions of st_rs. Space expl_ration continues to reveal new disco_eries.",
    blanks: [
      { position: 0, partialWord: "tel_scope", answer: "telescope" },
      { position: 1, partialWord: "dist_nt", answer: "distant" },
      { position: 2, partialWord: "Plan_ts", answer: "Planets" },
      { position: 3, partialWord: "vary_ng", answer: "varying" },
      { position: 4, partialWord: "Ast_roids", answer: "Asteroids" },
      { position: 5, partialWord: "orbit_l", answer: "orbital" },
      { position: 6, partialWord: "h_les", answer: "holes" },
      { position: 7, partialWord: "l_ght", answer: "light" },
      { position: 8, partialWord: "gal_xy", answer: "galaxy" },
      { position: 9, partialWord: "disco_eries", answer: "discoveries" }
    ]
  },
  {
    id: "CW_018",
    taskType: "complete_words",
    topic: "Chemistry",
    passage: "Mol_cules consist of atoms bonded tog_ther through chemical reactions. The peri_dic table organizes elem_nts by atomic number. Catal_sts speed up reactions without being cons_med. Acids and bas_s react to form water and s_lt. Organ_c chemistry focuses on carbon-cont_ining compounds. Labor_tory safety requires proper handling of all chem_cals.",
    blanks: [
      { position: 0, partialWord: "Mol_cules", answer: "Molecules" },
      { position: 1, partialWord: "tog_ther", answer: "together" },
      { position: 2, partialWord: "peri_dic", answer: "periodic" },
      { position: 3, partialWord: "elem_nts", answer: "elements" },
      { position: 4, partialWord: "Catal_sts", answer: "Catalysts" },
      { position: 5, partialWord: "cons_med", answer: "consumed" },
      { position: 6, partialWord: "bas_s", answer: "bases" },
      { position: 7, partialWord: "s_lt", answer: "salt" },
      { position: 8, partialWord: "Organ_c", answer: "Organic" },
      { position: 9, partialWord: "chem_cals", answer: "chemicals" }
    ]
  },
  {
    id: "CW_019",
    taskType: "complete_words",
    topic: "Economics",
    passage: "Supply and dem_nd determine market pr_ces in a competitive economy. Infl_tion reduces the purch_sing power of currency over time. Unempl_yment rates measure the percentage of workers seeking j_bs. Gross dom_stic product calculates the total val_e of goods produced. Cent_al banks regulate interest r_tes to control economic growth.",
    blanks: [
      { position: 0, partialWord: "dem_nd", answer: "demand" },
      { position: 1, partialWord: "pr_ces", answer: "prices" },
      { position: 2, partialWord: "Infl_tion", answer: "Inflation" },
      { position: 3, partialWord: "purch_sing", answer: "purchasing" },
      { position: 4, partialWord: "Unempl_yment", answer: "Unemployment" },
      { position: 5, partialWord: "j_bs", answer: "jobs" },
      { position: 6, partialWord: "dom_stic", answer: "domestic" },
      { position: 7, partialWord: "val_e", answer: "value" },
      { position: 8, partialWord: "Cent_al", answer: "Central" },
      { position: 9, partialWord: "r_tes", answer: "rates" }
    ]
  },
  {
    id: "CW_020",
    taskType: "complete_words",
    topic: "Geography",
    passage: "Mount_in ranges form when tect_nic plates collide and push upward. Riv_rs carry sedim_nt from highlands to coastal areas. Deserts rec_ive less than ten inches of precip_tation annually. Volcan_c eruptions create new landfo_ms over time. Glac_ers slowly carve valleys through erosion. Cont_nental drift explains how landm_sses have shifted over millions of years.",
    blanks: [
      { position: 0, partialWord: "Mount_in", answer: "Mountain" },
      { position: 1, partialWord: "tect_nic", answer: "tectonic" },
      { position: 2, partialWord: "Riv_rs", answer: "Rivers" },
      { position: 3, partialWord: "sedim_nt", answer: "sediment" },
      { position: 4, partialWord: "rec_ive", answer: "receive" },
      { position: 5, partialWord: "precip_tation", answer: "precipitation" },
      { position: 6, partialWord: "Volcan_c", answer: "Volcanic" },
      { position: 7, partialWord: "landfo_ms", answer: "landforms" },
      { position: 8, partialWord: "Glac_ers", answer: "Glaciers" },
      { position: 9, partialWord: "landm_sses", answer: "landmasses" }
    ]
  },
  {
    id: "CW_021",
    taskType: "complete_words",
    topic: "Biology",
    passage: "Photosyn_hesis converts sunlight into chem_cal energy for plants. Cell div_sion allows organisms to grow and rep_ir damaged tissues. DNA contains gen_tic information passed from par_nts to offspring. Ecosyst_ms depend on complex food w_bs for balance. Evolut_on occurs through natural sel_ction over generations.",
    blanks: [
      { position: 0, partialWord: "Photosyn_hesis", answer: "Photosynthesis" },
      { position: 1, partialWord: "chem_cal", answer: "chemical" },
      { position: 2, partialWord: "div_sion", answer: "division" },
      { position: 3, partialWord: "rep_ir", answer: "repair" },
      { position: 4, partialWord: "gen_tic", answer: "genetic" },
      { position: 5, partialWord: "par_nts", answer: "parents" },
      { position: 6, partialWord: "Ecosyst_ms", answer: "Ecosystems" },
      { position: 7, partialWord: "w_bs", answer: "webs" },
      { position: 8, partialWord: "Evolut_on", answer: "Evolution" },
      { position: 9, partialWord: "sel_ction", answer: "selection" }
    ]
  },
  {
    id: "CW_022",
    taskType: "complete_words",
    topic: "Psychology",
    passage: "Cogn_tive psychology studies mental proc_sses like memory and attention. Behav_oral therapy helps patients modify negat_ve patterns. Person_lity traits influence how individuals respond to sit_ations. Motiv_tion drives goal-directed beh_vior. Emot_onal intelligence affects interpers_nal relationships. Child devel_pment occurs in predictable st_ges.",
    blanks: [
      { position: 0, partialWord: "Cogn_tive", answer: "Cognitive" },
      { position: 1, partialWord: "proc_sses", answer: "processes" },
      { position: 2, partialWord: "Behav_oral", answer: "Behavioral" },
      { position: 3, partialWord: "negat_ve", answer: "negative" },
      { position: 4, partialWord: "Person_lity", answer: "Personality" },
      { position: 5, partialWord: "sit_ations", answer: "situations" },
      { position: 6, partialWord: "Motiv_tion", answer: "Motivation" },
      { position: 7, partialWord: "beh_vior", answer: "behavior" },
      { position: 8, partialWord: "Emot_onal", answer: "Emotional" },
      { position: 9, partialWord: "devel_pment", answer: "development" }
    ]
  },
  {
    id: "CW_023",
    taskType: "complete_words",
    topic: "Sociology",
    passage: "Social norms gov_rn acceptable behavior within commun_ties. Cultur_l values shape beliefs and pract_ces across generations. Instit_tions like family and education transm_t social knowledge. Inequal_ty affects access to resour_es and opportunities. Globaliz_tion connects societies through tr_de and technology. Social mov_ments advocate for systemic ch_nge.",
    blanks: [
      { position: 0, partialWord: "gov_rn", answer: "govern" },
      { position: 1, partialWord: "commun_ties", answer: "communities" },
      { position: 2, partialWord: "Cultur_l", answer: "Cultural" },
      { position: 3, partialWord: "pract_ces", answer: "practices" },
      { position: 4, partialWord: "Instit_tions", answer: "Institutions" },
      { position: 5, partialWord: "transm_t", answer: "transmit" },
      { position: 6, partialWord: "Inequal_ty", answer: "Inequality" },
      { position: 7, partialWord: "resour_es", answer: "resources" },
      { position: 8, partialWord: "Globaliz_tion", answer: "Globalization" },
      { position: 9, partialWord: "ch_nge", answer: "change" }
    ]
  },
  {
    id: "CW_024",
    taskType: "complete_words",
    topic: "Philosophy",
    passage: "Ethics exam_nes questions of right and wr_ng behavior. Metaph_sics explores the fundamental nat_re of reality. Epistem_logy investigates how knowl_dge is acquired and justif_ed. Logic provides fr_meworks for valid reason_ng. Political philos_phy analyzes concepts of just_ce and authority. Exist_ntialism emphasizes individual freed_m and choice.",
    blanks: [
      { position: 0, partialWord: "exam_nes", answer: "examines" },
      { position: 1, partialWord: "wr_ng", answer: "wrong" },
      { position: 2, partialWord: "Metaph_sics", answer: "Metaphysics" },
      { position: 3, partialWord: "nat_re", answer: "nature" },
      { position: 4, partialWord: "Epistem_logy", answer: "Epistemology" },
      { position: 5, partialWord: "knowl_dge", answer: "knowledge" },
      { position: 6, partialWord: "justif_ed", answer: "justified" },
      { position: 7, partialWord: "reason_ng", answer: "reasoning" },
      { position: 8, partialWord: "philos_phy", answer: "philosophy" },
      { position: 9, partialWord: "freed_m", answer: "freedom" }
    ]
  },
  {
    id: "CW_025",
    taskType: "complete_words",
    topic: "Music Theory",
    passage: "Mel_dy consists of a sequence of mus_cal notes. Harm_ny involves multiple notes played simul_aneously. Rhy_hm organizes sound into patt_rns of beats. The orch_stra combines different instrum_nt families. Compos_rs create original mus_cal works. Music nota_ion allows performers to read and interpr_t pieces.",
    blanks: [
      { position: 0, partialWord: "Mel_dy", answer: "Melody" },
      { position: 1, partialWord: "mus_cal", answer: "musical" },
      { position: 2, partialWord: "Harm_ny", answer: "Harmony" },
      { position: 3, partialWord: "simul_aneously", answer: "simultaneously" },
      { position: 4, partialWord: "Rhy_hm", answer: "Rhythm" },
      { position: 5, partialWord: "patt_rns", answer: "patterns" },
      { position: 6, partialWord: "orch_stra", answer: "orchestra" },
      { position: 7, partialWord: "instrum_nt", answer: "instrument" },
      { position: 8, partialWord: "Compos_rs", answer: "Composers" },
      { position: 9, partialWord: "interpr_t", answer: "interpret" }
    ]
  },
  {
    id: "CW_026",
    taskType: "complete_words",
    topic: "Literature",
    passage: "Nov_ls tell extended narratives through fict_onal characters. Poetry uses rhy_hm and imagery to evoke emot_ons. Drama presents stor_es through dialogue and perform_nce. Non-fict_on explores real events and subj_cts. Literary anal_sis examines themes, symb_ls, and techniques. Auth_rs craft their work to engage and chall_nge readers.",
    blanks: [
      { position: 0, partialWord: "Nov_ls", answer: "Novels" },
      { position: 1, partialWord: "fict_onal", answer: "fictional" },
      { position: 2, partialWord: "rhy_hm", answer: "rhythm" },
      { position: 3, partialWord: "emot_ons", answer: "emotions" },
      { position: 4, partialWord: "stor_es", answer: "stories" },
      { position: 5, partialWord: "perform_nce", answer: "performance" },
      { position: 6, partialWord: "Non-fict_on", answer: "Non-fiction" },
      { position: 7, partialWord: "subj_cts", answer: "subjects" },
      { position: 8, partialWord: "anal_sis", answer: "analysis" },
      { position: 9, partialWord: "chall_nge", answer: "challenge" }
    ]
  },
  {
    id: "CW_027",
    taskType: "complete_words",
    topic: "Engineering",
    passage: "Civil engin_ers design bridges, roads, and build_ngs. Mech_nical systems involve moving parts and energy transf_r. Electr_cal circuits control the flow of curr_nt. Softw_re engineering creates computer progr_ms and applications. Envir_nmental engineers address pollution and waste manag_ment. Biomed_cal devices improve healthcare outc_mes.",
    blanks: [
      { position: 0, partialWord: "engin_ers", answer: "engineers" },
      { position: 1, partialWord: "build_ngs", answer: "buildings" },
      { position: 2, partialWord: "Mech_nical", answer: "Mechanical" },
      { position: 3, partialWord: "transf_r", answer: "transfer" },
      { position: 4, partialWord: "Electr_cal", answer: "Electrical" },
      { position: 5, partialWord: "curr_nt", answer: "current" },
      { position: 6, partialWord: "Softw_re", answer: "Software" },
      { position: 7, partialWord: "progr_ms", answer: "programs" },
      { position: 8, partialWord: "Envir_nmental", answer: "Environmental" },
      { position: 9, partialWord: "outc_mes", answer: "outcomes" }
    ]
  },
  {
    id: "CW_028",
    taskType: "complete_words",
    topic: "Architecture",
    passage: "Modern archit_cture emphasizes function and minim_list design. Sust_inable buildings reduce energy cons_mption. Historic preserv_tion protects cultural herit_ge. Urban plan_ing shapes how cities devel_p. Inter_or design creates functional and aesth_tic spaces. Landscape archit_cts design outdoor envir_nments.",
    blanks: [
      { position: 0, partialWord: "archit_cture", answer: "architecture" },
      { position: 1, partialWord: "minim_list", answer: "minimalist" },
      { position: 2, partialWord: "Sust_inable", answer: "Sustainable" },
      { position: 3, partialWord: "cons_mption", answer: "consumption" },
      { position: 4, partialWord: "preserv_tion", answer: "preservation" },
      { position: 5, partialWord: "herit_ge", answer: "heritage" },
      { position: 6, partialWord: "plan_ing", answer: "planning" },
      { position: 7, partialWord: "devel_p", answer: "develop" },
      { position: 8, partialWord: "Inter_or", answer: "Interior" },
      { position: 9, partialWord: "envir_nments", answer: "environments" }
    ]
  },
  {
    id: "CW_029",
    taskType: "complete_words",
    topic: "Journalism",
    passage: "Report_rs gather information from mult_ple sources. Edit_rial pieces express opinions on curr_nt events. Investig_tive journalism uncovers hidden tr_ths. Media lit_racy helps audiences eval_ate news critically. Digit_l platforms have transform_d news distribution. Journalistic eth_cs require accuracy and fairn_ss.",
    blanks: [
      { position: 0, partialWord: "Report_rs", answer: "Reporters" },
      { position: 1, partialWord: "mult_ple", answer: "multiple" },
      { position: 2, partialWord: "Edit_rial", answer: "Editorial" },
      { position: 3, partialWord: "curr_nt", answer: "current" },
      { position: 4, partialWord: "Investig_tive", answer: "Investigative" },
      { position: 5, partialWord: "tr_ths", answer: "truths" },
      { position: 6, partialWord: "lit_racy", answer: "literacy" },
      { position: 7, partialWord: "eval_ate", answer: "evaluate" },
      { position: 8, partialWord: "Digit_l", answer: "Digital" },
      { position: 9, partialWord: "fairn_ss", answer: "fairness" }
    ]
  },
  {
    id: "CW_030",
    taskType: "complete_words",
    topic: "Political Science",
    passage: "Democr_cy allows citizens to particip_te in government. Constit_tions establish fundamental l_ws and rights. Elec_ions determine political leaders_ip. Legislat_res create and pass new l_ws. Diplom_cy manages relations between nat_ons. Public pol_cy addresses societal ch_llenges.",
    blanks: [
      { position: 0, partialWord: "Democr_cy", answer: "Democracy" },
      { position: 1, partialWord: "particip_te", answer: "participate" },
      { position: 2, partialWord: "Constit_tions", answer: "Constitutions" },
      { position: 3, partialWord: "l_ws", answer: "laws" },
      { position: 4, partialWord: "Elec_ions", answer: "Elections" },
      { position: 5, partialWord: "leaders_ip", answer: "leadership" },
      { position: 6, partialWord: "Legislat_res", answer: "Legislatures" },
      { position: 7, partialWord: "Diplom_cy", answer: "Diplomacy" },
      { position: 8, partialWord: "nat_ons", answer: "nations" },
      { position: 9, partialWord: "ch_llenges", answer: "challenges" }
    ]
  },
  {
    id: "CW_031",
    taskType: "complete_words",
    topic: "Anthropology",
    passage: "Archaeol_gists study ancient civil_zations through artifacts. Cultur_l anthropology examines human soci_ties and traditions. Linguis_ic research traces language evol_tion. Phys_cal anthropology explores human biol_gical development. Ethnogr_phy documents living cult_res through observation. Fossil rec_rds reveal human ancest_y.",
    blanks: [
      { position: 0, partialWord: "Archaeol_gists", answer: "Archaeologists" },
      { position: 1, partialWord: "civil_zations", answer: "civilizations" },
      { position: 2, partialWord: "Cultur_l", answer: "Cultural" },
      { position: 3, partialWord: "soci_ties", answer: "societies" },
      { position: 4, partialWord: "Linguis_ic", answer: "Linguistic" },
      { position: 5, partialWord: "evol_tion", answer: "evolution" },
      { position: 6, partialWord: "Phys_cal", answer: "Physical" },
      { position: 7, partialWord: "biol_gical", answer: "biological" },
      { position: 8, partialWord: "Ethnogr_phy", answer: "Ethnography" },
      { position: 9, partialWord: "ancest_y", answer: "ancestry" }
    ]
  },
  {
    id: "CW_032",
    taskType: "complete_words",
    topic: "Nutrition",
    passage: "Balanced d_ets include proteins, carbohydr_tes, and fats. Vit_mins support various bodily funct_ons. Min_rals like calcium strengthen b_nes. Fiber prom_tes digestive he_lth. Hydrat_on is essential for overall well-b_ing. Nutrit_onal labels help consumers make informed cho_ces.",
    blanks: [
      { position: 0, partialWord: "d_ets", answer: "diets" },
      { position: 1, partialWord: "carbohydr_tes", answer: "carbohydrates" },
      { position: 2, partialWord: "Vit_mins", answer: "Vitamins" },
      { position: 3, partialWord: "funct_ons", answer: "functions" },
      { position: 4, partialWord: "Min_rals", answer: "Minerals" },
      { position: 5, partialWord: "b_nes", answer: "bones" },
      { position: 6, partialWord: "prom_tes", answer: "promotes" },
      { position: 7, partialWord: "he_lth", answer: "health" },
      { position: 8, partialWord: "Hydrat_on", answer: "Hydration" },
      { position: 9, partialWord: "cho_ces", answer: "choices" }
    ]
  },
  {
    id: "CW_033",
    taskType: "complete_words",
    topic: "Medicine",
    passage: "Diagn_sis identifies the cause of sympt_ms. Treat_ent plans address specific cond_tions. Prevent_ve care reduces disease r_sk. Surg_cal procedures correct physical abnorm_lities. Pharmac_utical drugs target disease mech_nisms. Medical res_arch advances treatment opt_ons.",
    blanks: [
      { position: 0, partialWord: "Diagn_sis", answer: "Diagnosis" },
      { position: 1, partialWord: "sympt_ms", answer: "symptoms" },
      { position: 2, partialWord: "Treat_ent", answer: "Treatment" },
      { position: 3, partialWord: "cond_tions", answer: "conditions" },
      { position: 4, partialWord: "Prevent_ve", answer: "Preventive" },
      { position: 5, partialWord: "r_sk", answer: "risk" },
      { position: 6, partialWord: "Surg_cal", answer: "Surgical" },
      { position: 7, partialWord: "abnorm_lities", answer: "abnormalities" },
      { position: 8, partialWord: "Pharmac_utical", answer: "Pharmaceutical" },
      { position: 9, partialWord: "opt_ons", answer: "options" }
    ]
  },
  {
    id: "CW_034",
    taskType: "complete_words",
    topic: "Computer Science",
    passage: "Algor_thms provide step-by-step instruct_ons for solving problems. Datab_ses store and organize inform_tion efficiently. Netw_rks connect computers for communic_tion. Artific_al intelligence simulates human cogn_tion. Cyber_ecurity protects systems from unauth_rized access. Progr_mming languages enable software devel_pment.",
    blanks: [
      { position: 0, partialWord: "Algor_thms", answer: "Algorithms" },
      { position: 1, partialWord: "instruct_ons", answer: "instructions" },
      { position: 2, partialWord: "Datab_ses", answer: "Databases" },
      { position: 3, partialWord: "inform_tion", answer: "information" },
      { position: 4, partialWord: "Netw_rks", answer: "Networks" },
      { position: 5, partialWord: "communic_tion", answer: "communication" },
      { position: 6, partialWord: "Artific_al", answer: "Artificial" },
      { position: 7, partialWord: "cogn_tion", answer: "cognition" },
      { position: 8, partialWord: "Cyber_ecurity", answer: "Cybersecurity" },
      { position: 9, partialWord: "devel_pment", answer: "development" }
    ]
  },
  {
    id: "CW_035",
    taskType: "complete_words",
    topic: "Environmental Science",
    passage: "Climate ch_nge affects weather patt_rns globally. Deforest_tion destroys hab_tats for countless species. Poll_tion contaminates air, w_ter, and soil. Renew_ble energy sources reduce carbon emiss_ons. Conserv_tion efforts protect endang_red wildlife. Sustain_ble practices balance human needs with envir_nmental health.",
    blanks: [
      { position: 0, partialWord: "ch_nge", answer: "change" },
      { position: 1, partialWord: "patt_rns", answer: "patterns" },
      { position: 2, partialWord: "Deforest_tion", answer: "Deforestation" },
      { position: 3, partialWord: "hab_tats", answer: "habitats" },
      { position: 4, partialWord: "Poll_tion", answer: "Pollution" },
      { position: 5, partialWord: "w_ter", answer: "water" },
      { position: 6, partialWord: "Renew_ble", answer: "Renewable" },
      { position: 7, partialWord: "emiss_ons", answer: "emissions" },
      { position: 8, partialWord: "Conserv_tion", answer: "Conservation" },
      { position: 9, partialWord: "endang_red", answer: "endangered" }
    ]
  },
  {
    id: "CW_036",
    taskType: "complete_words",
    topic: "Business Management",
    passage: "Strateg_c planning sets long-term org_nizational goals. Market_ng promotes products to potent_al customers. Human res_urces manages employee rel_tions. Financ_al analysis guides investment decis_ons. Operat_ons management oversees daily activ_ties. Entrepren_urs identify opportunities and create new bus_nesses.",
    blanks: [
      { position: 0, partialWord: "Strateg_c", answer: "Strategic" },
      { position: 1, partialWord: "org_nizational", answer: "organizational" },
      { position: 2, partialWord: "Market_ng", answer: "Marketing" },
      { position: 3, partialWord: "potent_al", answer: "potential" },
      { position: 4, partialWord: "res_urces", answer: "resources" },
      { position: 5, partialWord: "rel_tions", answer: "relations" },
      { position: 6, partialWord: "Financ_al", answer: "Financial" },
      { position: 7, partialWord: "decis_ons", answer: "decisions" },
      { position: 8, partialWord: "Operat_ons", answer: "Operations" },
      { position: 9, partialWord: "bus_nesses", answer: "businesses" }
    ]
  },
  {
    id: "CW_037",
    taskType: "complete_words",
    topic: "Law",
    passage: "Crim_nal law addresses offenses against soc_ety. Civil l_w resolves disputes between individ_als. Contr_cts establish legally binding agreem_nts. Intellectu_l property protects creative w_rks. Envir_nmental regulations govern poll_tion standards. Constit_tional rights guarantee fundam_ntal freedoms.",
    blanks: [
      { position: 0, partialWord: "Crim_nal", answer: "Criminal" },
      { position: 1, partialWord: "soc_ety", answer: "society" },
      { position: 2, partialWord: "l_w", answer: "law" },
      { position: 3, partialWord: "individ_als", answer: "individuals" },
      { position: 4, partialWord: "Contr_cts", answer: "Contracts" },
      { position: 5, partialWord: "agreem_nts", answer: "agreements" },
      { position: 6, partialWord: "Intellectu_l", answer: "Intellectual" },
      { position: 7, partialWord: "w_rks", answer: "works" },
      { position: 8, partialWord: "Envir_nmental", answer: "Environmental" },
      { position: 9, partialWord: "fundam_ntal", answer: "fundamental" }
    ]
  },
  {
    id: "CW_038",
    taskType: "complete_words",
    topic: "Education",
    passage: "Curric_lum design shapes student learn_ng experiences. Assess_ent measures academic achi_vement. Peda_ogy refers to teaching meth_ds. Incl_sive education accommodates diverse lear_ers. Educ_tional technology enhances instru_tion. Lifelong learn_ng continues beyond formal school_ng.",
    blanks: [
      { position: 0, partialWord: "Curric_lum", answer: "Curriculum" },
      { position: 1, partialWord: "learn_ng", answer: "learning" },
      { position: 2, partialWord: "Assess_ent", answer: "Assessment" },
      { position: 3, partialWord: "achi_vement", answer: "achievement" },
      { position: 4, partialWord: "Peda_ogy", answer: "Pedagogy" },
      { position: 5, partialWord: "meth_ds", answer: "methods" },
      { position: 6, partialWord: "Incl_sive", answer: "Inclusive" },
      { position: 7, partialWord: "lear_ers", answer: "learners" },
      { position: 8, partialWord: "Educ_tional", answer: "Educational" },
      { position: 9, partialWord: "school_ng", answer: "schooling" }
    ]
  },
  {
    id: "CW_039",
    taskType: "complete_words",
    topic: "Film Studies",
    passage: "Cinemat_graphy captures visual imag_ry on screen. Direct_rs guide the creative vis_on of films. Scre_nplays provide the written foundat_on. Edit_ng shapes the final narrat_ve structure. Sound des_gn creates atmospheric aud_o elements. Spec_al effects enhance visual storytell_ng.",
    blanks: [
      { position: 0, partialWord: "Cinemat_graphy", answer: "Cinematography" },
      { position: 1, partialWord: "imag_ry", answer: "imagery" },
      { position: 2, partialWord: "Direct_rs", answer: "Directors" },
      { position: 3, partialWord: "vis_on", answer: "vision" },
      { position: 4, partialWord: "Scre_nplays", answer: "Screenplays" },
      { position: 5, partialWord: "foundat_on", answer: "foundation" },
      { position: 6, partialWord: "Edit_ng", answer: "Editing" },
      { position: 7, partialWord: "narrat_ve", answer: "narrative" },
      { position: 8, partialWord: "des_gn", answer: "design" },
      { position: 9, partialWord: "storytell_ng", answer: "storytelling" }
    ]
  },
  {
    id: "CW_040",
    taskType: "complete_words",
    topic: "Linguistics",
    passage: "Phon_tics studies speech sounds and their produ_tion. Synt_x examines sentence struct_re and grammar rules. Sem_ntics focuses on meaning in lang_age. Pragm_tics considers language use in cont_xt. Morphol_gy analyzes word form_tion. Socioling_istics explores how society affects lang_age.",
    blanks: [
      { position: 0, partialWord: "Phon_tics", answer: "Phonetics" },
      { position: 1, partialWord: "produ_tion", answer: "production" },
      { position: 2, partialWord: "Synt_x", answer: "Syntax" },
      { position: 3, partialWord: "struct_re", answer: "structure" },
      { position: 4, partialWord: "Sem_ntics", answer: "Semantics" },
      { position: 5, partialWord: "lang_age", answer: "language" },
      { position: 6, partialWord: "Pragm_tics", answer: "Pragmatics" },
      { position: 7, partialWord: "cont_xt", answer: "context" },
      { position: 8, partialWord: "Morphol_gy", answer: "Morphology" },
      { position: 9, partialWord: "form_tion", answer: "formation" }
    ]
  },
  {
    id: "CW_041",
    taskType: "complete_words",
    topic: "Theater",
    passage: "Act_rs bring characters to l_fe on stage. Rehe_rsals prepare performers for open_ng night. Cost_me design creates authentic vis_al appearances. Stage light_ng sets mood and atmos_here. Playwri_hts craft original dram_tic works. Audiences exper_ence live perform_nces directly.",
    blanks: [
      { position: 0, partialWord: "Act_rs", answer: "Actors" },
      { position: 1, partialWord: "l_fe", answer: "life" },
      { position: 2, partialWord: "Rehe_rsals", answer: "Rehearsals" },
      { position: 3, partialWord: "open_ng", answer: "opening" },
      { position: 4, partialWord: "Cost_me", answer: "Costume" },
      { position: 5, partialWord: "vis_al", answer: "visual" },
      { position: 6, partialWord: "light_ng", answer: "lighting" },
      { position: 7, partialWord: "atmos_here", answer: "atmosphere" },
      { position: 8, partialWord: "Playwri_hts", answer: "Playwrights" },
      { position: 9, partialWord: "perform_nces", answer: "performances" }
    ]
  },
  {
    id: "CW_042",
    taskType: "complete_words",
    topic: "Sports Science",
    passage: "Athl_tic performance depends on physical condit_oning. Train_ng programs develop strength and endur_nce. Nutr_tion fuels athletic achiev_ment. Injury prevent_on protects athletes' long-term he_lth. Sports psych_logy addresses mental prep_ration. Biom_chanics analyzes movement effic_ency.",
    blanks: [
      { position: 0, partialWord: "Athl_tic", answer: "Athletic" },
      { position: 1, partialWord: "condit_oning", answer: "conditioning" },
      { position: 2, partialWord: "Train_ng", answer: "Training" },
      { position: 3, partialWord: "endur_nce", answer: "endurance" },
      { position: 4, partialWord: "Nutr_tion", answer: "Nutrition" },
      { position: 5, partialWord: "achiev_ment", answer: "achievement" },
      { position: 6, partialWord: "prevent_on", answer: "prevention" },
      { position: 7, partialWord: "he_lth", answer: "health" },
      { position: 8, partialWord: "psych_logy", answer: "psychology" },
      { position: 9, partialWord: "effic_ency", answer: "efficiency" }
    ]
  },
  {
    id: "CW_043",
    taskType: "complete_words",
    topic: "Agriculture",
    passage: "Crop rot_tion maintains soil fert_lity. Irrig_tion provides water for plant gr_wth. Pest_cides control harmful ins_cts. Organ_c farming avoids synthetic chem_cals. Harv_sting collects mature cr_ps. Sustain_ble agriculture preserves resour_es for future generations.",
    blanks: [
      { position: 0, partialWord: "rot_tion", answer: "rotation" },
      { position: 1, partialWord: "fert_lity", answer: "fertility" },
      { position: 2, partialWord: "Irrig_tion", answer: "Irrigation" },
      { position: 3, partialWord: "gr_wth", answer: "growth" },
      { position: 4, partialWord: "Pest_cides", answer: "Pesticides" },
      { position: 5, partialWord: "ins_cts", answer: "insects" },
      { position: 6, partialWord: "Organ_c", answer: "Organic" },
      { position: 7, partialWord: "chem_cals", answer: "chemicals" },
      { position: 8, partialWord: "Harv_sting", answer: "Harvesting" },
      { position: 9, partialWord: "resour_es", answer: "resources" }
    ]
  },
  {
    id: "CW_044",
    taskType: "complete_words",
    topic: "Marine Biology",
    passage: "Coral r_efs support diverse marine ecosyst_ms. Migr_tory patterns guide ocean spec_es across vast distances. Poll_tion threatens aquat_c habitats worldwide. Marine mamm_ls include whales, dolph_ns, and seals. Fisher_es management ensures sustain_ble harvesting. Ocean acidific_tion affects shell form_tion.",
    blanks: [
      { position: 0, partialWord: "r_efs", answer: "reefs" },
      { position: 1, partialWord: "ecosyst_ms", answer: "ecosystems" },
      { position: 2, partialWord: "Migr_tory", answer: "Migratory" },
      { position: 3, partialWord: "spec_es", answer: "species" },
      { position: 4, partialWord: "Poll_tion", answer: "Pollution" },
      { position: 5, partialWord: "aquat_c", answer: "aquatic" },
      { position: 6, partialWord: "mamm_ls", answer: "mammals" },
      { position: 7, partialWord: "dolph_ns", answer: "dolphins" },
      { position: 8, partialWord: "Fisher_es", answer: "Fisheries" },
      { position: 9, partialWord: "form_tion", answer: "formation" }
    ]
  },
  {
    id: "CW_045",
    taskType: "complete_words",
    topic: "Photography",
    passage: "Expos_re controls how much l_ght reaches the sensor. Compos_tion arranges elements within the fr_me. Focus determ_nes which areas appear sh_rp. Edit_ng software enhances dig_tal images. Portrait photogr_phy captures human express_ons. Landscape shots showcase nat_ral scenery.",
    blanks: [
      { position: 0, partialWord: "Expos_re", answer: "Exposure" },
      { position: 1, partialWord: "l_ght", answer: "light" },
      { position: 2, partialWord: "Compos_tion", answer: "Composition" },
      { position: 3, partialWord: "fr_me", answer: "frame" },
      { position: 4, partialWord: "determ_nes", answer: "determines" },
      { position: 5, partialWord: "sh_rp", answer: "sharp" },
      { position: 6, partialWord: "Edit_ng", answer: "Editing" },
      { position: 7, partialWord: "dig_tal", answer: "digital" },
      { position: 8, partialWord: "photogr_phy", answer: "photography" },
      { position: 9, partialWord: "nat_ral", answer: "natural" }
    ]
  },
  {
    id: "CW_046",
    taskType: "complete_words",
    topic: "Fashion",
    passage: "Text_le selection affects garment qual_ty. Design_rs create seasonal collect_ons. Sustain_ble fashion reduces envir_nmental impact. Retail_rs display merchandise attract_vely. Fashion tr_nds change with cultural influ_nces. Manufact_ring processes transform fabrics into cloth_ng.",
    blanks: [
      { position: 0, partialWord: "Text_le", answer: "Textile" },
      { position: 1, partialWord: "qual_ty", answer: "quality" },
      { position: 2, partialWord: "Design_rs", answer: "Designers" },
      { position: 3, partialWord: "collect_ons", answer: "collections" },
      { position: 4, partialWord: "Sustain_ble", answer: "Sustainable" },
      { position: 5, partialWord: "envir_nmental", answer: "environmental" },
      { position: 6, partialWord: "Retail_rs", answer: "Retailers" },
      { position: 7, partialWord: "attract_vely", answer: "attractively" },
      { position: 8, partialWord: "tr_nds", answer: "trends" },
      { position: 9, partialWord: "cloth_ng", answer: "clothing" }
    ]
  },
  {
    id: "CW_047",
    taskType: "complete_words",
    topic: "Culinary Arts",
    passage: "Cul_nary techniques require precision and pract_ce. Ingred_ent quality affects dish flav_r. Recipe devel_pment combines creativ_ty with tradition. Kitchen san_tation ensures food saf_ty. Present_tion enhances dining exper_ence. Professional ch_fs train for years to master their cr_ft.",
    blanks: [
      { position: 0, partialWord: "Cul_nary", answer: "Culinary" },
      { position: 1, partialWord: "pract_ce", answer: "practice" },
      { position: 2, partialWord: "Ingred_ent", answer: "Ingredient" },
      { position: 3, partialWord: "flav_r", answer: "flavor" },
      { position: 4, partialWord: "devel_pment", answer: "development" },
      { position: 5, partialWord: "creativ_ty", answer: "creativity" },
      { position: 6, partialWord: "san_tation", answer: "sanitation" },
      { position: 7, partialWord: "saf_ty", answer: "safety" },
      { position: 8, partialWord: "Present_tion", answer: "Presentation" },
      { position: 9, partialWord: "cr_ft", answer: "craft" }
    ]
  },
  {
    id: "CW_048",
    taskType: "complete_words",
    topic: "Public Health",
    passage: "Epidem_ology tracks disease outbr_aks. Vacc_nation programs prevent infect_ous diseases. Health educ_tion promotes prevent_ve behaviors. Sanit_tion systems protect commun_ty health. Nutrit_onal programs address food insec_rity. Mental health serv_ces support psychol_gical wellbeing.",
    blanks: [
      { position: 0, partialWord: "Epidem_ology", answer: "Epidemiology" },
      { position: 1, partialWord: "outbr_aks", answer: "outbreaks" },
      { position: 2, partialWord: "Vacc_nation", answer: "Vaccination" },
      { position: 3, partialWord: "infect_ous", answer: "infectious" },
      { position: 4, partialWord: "educ_tion", answer: "education" },
      { position: 5, partialWord: "prevent_ve", answer: "preventive" },
      { position: 6, partialWord: "Sanit_tion", answer: "Sanitation" },
      { position: 7, partialWord: "commun_ty", answer: "community" },
      { position: 8, partialWord: "Nutrit_onal", answer: "Nutritional" },
      { position: 9, partialWord: "psychol_gical", answer: "psychological" }
    ]
  },
  {
    id: "CW_049",
    taskType: "complete_words",
    topic: "Urban Planning",
    passage: "Zon_ng regulations separate resid_ntial and commercial areas. Transp_rtation networks connect city neigh_orhoods. Green sp_ces provide recreat_on opportunities. Afford_ble housing addresses urban inequ_lity. Infras_ructure maintenance ensures city funct_onality. Commun_ty input shapes devel_pment decisions.",
    blanks: [
      { position: 0, partialWord: "Zon_ng", answer: "Zoning" },
      { position: 1, partialWord: "resid_ntial", answer: "residential" },
      { position: 2, partialWord: "Transp_rtation", answer: "Transportation" },
      { position: 3, partialWord: "neigh_orhoods", answer: "neighborhoods" },
      { position: 4, partialWord: "sp_ces", answer: "spaces" },
      { position: 5, partialWord: "recreat_on", answer: "recreation" },
      { position: 6, partialWord: "Afford_ble", answer: "Affordable" },
      { position: 7, partialWord: "inequ_lity", answer: "inequality" },
      { position: 8, partialWord: "Infras_ructure", answer: "Infrastructure" },
      { position: 9, partialWord: "devel_pment", answer: "development" }
    ]
  },
  {
    id: "CW_050",
    taskType: "complete_words",
    topic: "Veterinary Science",
    passage: "Anim_l health requires regular veterin_ry checkups. Vacc_nations protect pets from ser_ous diseases. Surg_cal procedures treat injuries and illn_sses. Nutrit_on affects animal growth and devel_pment. Behav_oral training improves pet compan_onship. Wildlife conserv_tion protects endang_red species.",
    blanks: [
      { position: 0, partialWord: "Anim_l", answer: "Animal" },
      { position: 1, partialWord: "veterin_ry", answer: "veterinary" },
      { position: 2, partialWord: "Vacc_nations", answer: "Vaccinations" },
      { position: 3, partialWord: "ser_ous", answer: "serious" },
      { position: 4, partialWord: "Surg_cal", answer: "Surgical" },
      { position: 5, partialWord: "illn_sses", answer: "illnesses" },
      { position: 6, partialWord: "Nutrit_on", answer: "Nutrition" },
      { position: 7, partialWord: "devel_pment", answer: "development" },
      { position: 8, partialWord: "Behav_oral", answer: "Behavioral" },
      { position: 9, partialWord: "endang_red", answer: "endangered" }
    ]
  }
];

// ==================== READ IN DAILY LIFE (30 passages) ====================

export const dailyLifeQuestions: DailyLifeQuestion[] = [
  {
    id: "DL_001",
    taskType: "daily_life",
    category: "Campus Email",
    passage: `From: housing@university.edu
To: All Residents
Subject: Maintenance Schedule

Dear Residents,

The facilities team will conduct routine maintenance in all dormitory buildings next week. Water will be shut off on Tuesday from 9 AM to 12 PM for pipe inspections. Please store water for drinking and other essential uses.

Additionally, fire alarm testing will occur on Thursday between 2 PM and 4 PM. You do not need to evacuate during these tests.

If you have any concerns, contact the housing office at extension 2500.

Best regards,
Housing Services`,
    questions: [
      {
        question: "When will the water be shut off?",
        options: ["Monday morning", "Tuesday morning", "Wednesday afternoon", "Thursday afternoon"],
        correctAnswer: "Tuesday morning",
        explanation: "The email states 'Water will be shut off on Tuesday from 9 AM to 12 PM.'"
      },
      {
        question: "What should residents do during the fire alarm testing?",
        options: ["Evacuate immediately", "Stay in their rooms", "Go to the housing office", "Call extension 2500"],
        correctAnswer: "Stay in their rooms",
        explanation: "The email says 'You do not need to evacuate during these tests.'"
      }
    ]
  },
  {
    id: "DL_002",
    taskType: "daily_life",
    category: "Campus Notice",
    passage: `STUDENT CENTER HOURS - SPRING SEMESTER

Monday - Thursday: 7 AM - 11 PM
Friday: 7 AM - 12 AM (Midnight)
Saturday: 9 AM - 12 AM (Midnight)
Sunday: 10 AM - 10 PM

SPECIAL CLOSURES:
- Spring Break (March 15-22): Limited hours 10 AM - 6 PM
- Finals Week (May 5-12): Extended hours until 2 AM daily

The food court closes one hour before building closure.
Study rooms can be reserved at the information desk.`,
    questions: [
      {
        question: "What time does the Student Center open on Sundays?",
        options: ["7 AM", "9 AM", "10 AM", "11 AM"],
        correctAnswer: "10 AM",
        explanation: "According to the schedule, Sunday hours are '10 AM - 10 PM.'"
      },
      {
        question: "When does the food court close on a regular Friday?",
        options: ["10 PM", "11 PM", "12 AM", "1 AM"],
        correctAnswer: "11 PM",
        explanation: "The building closes at midnight on Friday, and 'The food court closes one hour before building closure.'"
      },
      {
        question: "What are the hours during Finals Week?",
        options: ["7 AM - 11 PM", "7 AM - 2 AM", "10 AM - 6 PM", "24 hours"],
        correctAnswer: "7 AM - 2 AM",
        explanation: "Finals Week has 'Extended hours until 2 AM daily' with regular opening times."
      }
    ]
  },
  {
    id: "DL_003",
    taskType: "daily_life",
    category: "Shuttle Service",
    passage: `CAMPUS SHUTTLE SERVICE UPDATE

Starting January 15, the campus shuttle will operate on a new schedule.

ROUTES:
- Blue Line: Main Campus to Downtown Station (Every 15 minutes, 6 AM - 10 PM)
- Red Line: Dormitories to Science Complex (Every 20 minutes, 7 AM - 9 PM)
- Green Line: Weekend Shopping Shuttle (Saturdays only, 10 AM - 6 PM)

All shuttles are free with valid student ID. Real-time tracking is available through the Campus Transit app.

Note: Service may be delayed during severe weather.`,
    questions: [
      {
        question: "How often does the Blue Line run?",
        options: ["Every 10 minutes", "Every 15 minutes", "Every 20 minutes", "Every 30 minutes"],
        correctAnswer: "Every 15 minutes",
        explanation: "The Blue Line runs 'Every 15 minutes, 6 AM - 10 PM.'"
      },
      {
        question: "When does the Green Line operate?",
        options: ["Every day", "Weekdays only", "Saturdays only", "Weekends only"],
        correctAnswer: "Saturdays only",
        explanation: "The Green Line is described as 'Weekend Shopping Shuttle (Saturdays only).'"
      }
    ]
  },
  {
    id: "DL_004",
    taskType: "daily_life",
    category: "Academic Email",
    passage: `From: professor.chen@university.edu
To: BIO301-Fall2026@groups.university.edu
Subject: Midterm Exam Information

Dear Biology 301 Students,

The midterm examination is scheduled for October 15.

EXAM DETAILS:
- Time: 10:00 AM - 12:00 PM
- Location: Science Hall 201
- Format: 50 multiple choice (2 points each) + 2 short essays (25 points each)

TOPICS: Chapters 1-7, including cellular respiration, photosynthesis, and enzyme kinetics.

RESOURCES:
- Practice exams on the course portal
- Review sessions: October 12 (2 PM) and October 13 (4 PM) in Room 305

Please bring a #2 pencil and student ID. Calculators are NOT permitted.

Best,
Dr. Chen`,
    questions: [
      {
        question: "What is the total point value of the exam?",
        options: ["100 points", "125 points", "150 points", "175 points"],
        correctAnswer: "150 points",
        explanation: "50 multiple choice at 2 points = 100, plus 2 essays at 25 points = 50. Total = 150."
      },
      {
        question: "What items are NOT allowed during the exam?",
        options: ["Student ID", "#2 pencils", "Calculators", "Textbooks"],
        correctAnswer: "Calculators",
        explanation: "The email states 'Calculators are NOT permitted.'"
      },
      {
        question: "When is the first review session?",
        options: ["October 12 at 2 PM", "October 13 at 2 PM", "October 12 at 4 PM", "October 15 at 10 AM"],
        correctAnswer: "October 12 at 2 PM",
        explanation: "Review sessions are 'October 12 (2 PM) and October 13 (4 PM).'"
      }
    ]
  },
  {
    id: "DL_005",
    taskType: "daily_life",
    category: "Parking Notice",
    passage: `UPDATED PARKING REGULATIONS - EFFECTIVE FALL 2026

PERMIT PRICING:
- Faculty/Staff Annual: $450
- Student Annual: $300
- Motorcycle: $100
- Carpool permits (3+ people): 40% discount

RESTRICTIONS:
- Central campus lots (A, B, C) require Level 2 permits
- First-year students may only park in Lot K (remote)
- Free shuttle from Lot K runs every 10 minutes

ENFORCEMENT:
- First violation: Warning
- Second violation: $50 fine
- Third+ violations: $100 fine plus potential permit revocation

Questions? Visit parking.university.edu or call 555-PARK.`,
    questions: [
      {
        question: "How much is the carpool discount?",
        options: ["20%", "30%", "40%", "50%"],
        correctAnswer: "40%",
        explanation: "Carpool permits (3+ people) receive a '40% discount.'"
      },
      {
        question: "Where can first-year students park?",
        options: ["Lot A", "Lot B", "Lot C", "Lot K"],
        correctAnswer: "Lot K",
        explanation: "'First-year students may only park in Lot K (remote).'"
      }
    ]
  },
  {
    id: "DL_006",
    taskType: "daily_life",
    category: "Event Flyer",
    passage: `INTERNATIONAL FOOD FESTIVAL
Saturday, April 20 | 11 AM - 5 PM
University Quad

Join us for a celebration of global cuisines!

FEATURING:
- Food booths from 25+ countries
- Live cultural performances at 1 PM and 3 PM
- Cooking demonstrations throughout the day
- Kids' activities area

TICKETS:
- Students: FREE with ID
- Faculty/Staff: $5
- General Public: $10
- Children under 12: FREE

All proceeds benefit the International Student Scholarship Fund.

Rain location: Recreation Center Gymnasium`,
    questions: [
      {
        question: "How much do students pay for admission?",
        options: ["$5", "$10", "$15", "Free with ID"],
        correctAnswer: "Free with ID",
        explanation: "Students get in 'FREE with ID.'"
      },
      {
        question: "Where will the event be held if it rains?",
        options: ["University Quad", "Student Center", "Recreation Center Gymnasium", "Science Hall"],
        correctAnswer: "Recreation Center Gymnasium",
        explanation: "'Rain location: Recreation Center Gymnasium.'"
      },
      {
        question: "When are the live performances?",
        options: ["11 AM and 1 PM", "1 PM and 3 PM", "2 PM and 4 PM", "All day"],
        correctAnswer: "1 PM and 3 PM",
        explanation: "'Live cultural performances at 1 PM and 3 PM.'"
      }
    ]
  },
  {
    id: "DL_007",
    taskType: "daily_life",
    category: "Health Notice",
    passage: `FLU VACCINATION CLINIC
Free for all enrolled students!

CLINIC DATES AND LOCATIONS:
- October 1-5: Student Health Center (8 AM - 6 PM)
- October 8: Science Building Lobby (10 AM - 4 PM)
- October 9: Recreation Center (11 AM - 7 PM)

NO APPOINTMENT NECESSARY

IMPORTANT:
- Wear short sleeves for easy access to upper arm
- Students with egg allergies: egg-free vaccines available
- Minor side effects (sore arm, mild fever) are normal

The CDC recommends vaccination before end of October for best protection.

Questions? Call 555-HEALTH`,
    questions: [
      {
        question: "Where can students get vaccinated on October 9?",
        options: ["Student Health Center", "Science Building", "Recreation Center", "Library"],
        correctAnswer: "Recreation Center",
        explanation: "'October 9: Recreation Center (11 AM - 7 PM).'"
      },
      {
        question: "What option is available for students with egg allergies?",
        options: ["No vaccination available", "Egg-free vaccines", "Delayed vaccination", "Doctor's note required"],
        correctAnswer: "Egg-free vaccines",
        explanation: "'Students with egg allergies: egg-free vaccines available.'"
      }
    ]
  },
  {
    id: "DL_008",
    taskType: "daily_life",
    category: "Library Notice",
    passage: `LIBRARY EXTENDED HOURS - FINALS PERIOD

December 10-20, the library will extend operating hours:

MAIN LIBRARY:
- Monday-Thursday: 7 AM - 3 AM
- Friday: 7 AM - 12 AM
- Saturday: 9 AM - 12 AM
- Sunday: 9 AM - 3 AM

SERVICES DURING EXTENDED HOURS:
- Reference desk closes at 10 PM
- Computer lab open 24 hours (swipe access after midnight)
- Coffee cart available until 11 PM

QUIET STUDY ZONES:
- 3rd and 4th floors designated silent study
- Group study rooms available on 2nd floor

Please be respectful of other students during this stressful time.`,
    questions: [
      {
        question: "What time does the library close on Sunday during finals?",
        options: ["10 PM", "12 AM", "2 AM", "3 AM"],
        correctAnswer: "3 AM",
        explanation: "'Sunday: 9 AM - 3 AM' during finals period."
      },
      {
        question: "Which floors are designated for silent study?",
        options: ["1st and 2nd", "2nd and 3rd", "3rd and 4th", "4th and 5th"],
        correctAnswer: "3rd and 4th",
        explanation: "'3rd and 4th floors designated silent study.'"
      },
      {
        question: "Until what time is the coffee cart available?",
        options: ["9 PM", "10 PM", "11 PM", "12 AM"],
        correctAnswer: "11 PM",
        explanation: "'Coffee cart available until 11 PM.'"
      }
    ]
  },
  {
    id: "DL_009",
    taskType: "daily_life",
    category: "Job Posting",
    passage: `STUDENT WORKER POSITION AVAILABLE

Position: Library Assistant
Department: University Library
Hours: 10-15 hours per week
Pay: $14.50/hour

RESPONSIBILITIES:
- Shelving returned books
- Assisting patrons at circulation desk
- Processing interlibrary loan requests
- Maintaining quiet study areas

REQUIREMENTS:
- Current enrollment (minimum 6 credits)
- GPA of 2.5 or higher
- Reliable and punctual
- Customer service experience preferred

TO APPLY:
Submit resume and class schedule to library@university.edu by October 1.
Interviews will be held October 8-10.`,
    questions: [
      {
        question: "What is the hourly pay for this position?",
        options: ["$12.50", "$13.50", "$14.50", "$15.50"],
        correctAnswer: "$14.50",
        explanation: "'Pay: $14.50/hour.'"
      },
      {
        question: "What is the minimum credit requirement?",
        options: ["3 credits", "6 credits", "9 credits", "12 credits"],
        correctAnswer: "6 credits",
        explanation: "'Current enrollment (minimum 6 credits).'"
      },
      {
        question: "When is the application deadline?",
        options: ["September 15", "October 1", "October 8", "October 10"],
        correctAnswer: "October 1",
        explanation: "'Submit resume and class schedule... by October 1.'"
      }
    ]
  },
  {
    id: "DL_010",
    taskType: "daily_life",
    category: "Fitness Center",
    passage: `RECREATION CENTER MEMBERSHIP INFORMATION

All currently enrolled students have FREE access with valid student ID.

HOURS:
- Monday-Friday: 6 AM - 11 PM
- Saturday-Sunday: 8 AM - 9 PM

FACILITIES:
- Weight room and cardio equipment
- Indoor track (3 laps = 1 mile)
- Swimming pool (lap swim and open swim times)
- Basketball and volleyball courts
- Group fitness studio

GROUP FITNESS CLASSES:
- Yoga: Mon/Wed/Fri 7 AM and 5 PM
- Spin: Tue/Thu 6 PM
- Zumba: Sat 10 AM

Towel service: $1 rental, or bring your own.
Lockers available for rent: $25/semester.`,
    questions: [
      {
        question: "How many laps equal one mile on the indoor track?",
        options: ["2 laps", "3 laps", "4 laps", "5 laps"],
        correctAnswer: "3 laps",
        explanation: "'Indoor track (3 laps = 1 mile).'"
      },
      {
        question: "When is Zumba offered?",
        options: ["Monday at 7 AM", "Wednesday at 5 PM", "Thursday at 6 PM", "Saturday at 10 AM"],
        correctAnswer: "Saturday at 10 AM",
        explanation: "'Zumba: Sat 10 AM.'"
      }
    ]
  },
  {
    id: "DL_011",
    taskType: "daily_life",
    category: "Textbook Notice",
    passage: `TEXTBOOK RENTAL PROGRAM

Save up to 70% compared to buying new textbooks!

HOW IT WORKS:
1. Search for your course textbooks online
2. Reserve books for pickup at the bookstore
3. Return books by the last day of finals
4. Late returns: $25 fee per book

RENTAL PRICES:
- Most textbooks: $30-75 per semester
- Lab manuals: Cannot be rented (must purchase)
- E-book rentals also available

IMPORTANT:
- No highlighting or writing in rented books
- Lost or damaged books will be charged full price
- Returns accepted at bookstore or designated drop boxes

Reserve now at bookstore.university.edu`,
    questions: [
      {
        question: "What is the late return fee?",
        options: ["$10 per book", "$15 per book", "$25 per book", "$50 per book"],
        correctAnswer: "$25 per book",
        explanation: "'Late returns: $25 fee per book.'"
      },
      {
        question: "What cannot be rented?",
        options: ["Textbooks", "Lab manuals", "E-books", "Novels"],
        correctAnswer: "Lab manuals",
        explanation: "'Lab manuals: Cannot be rented (must purchase).'"
      }
    ]
  },
  {
    id: "DL_012",
    taskType: "daily_life",
    category: "Club Announcement",
    passage: `PHOTOGRAPHY CLUB - FALL SEMESTER

Join us for weekly meetings every Thursday at 6 PM in Arts Building Room 204!

UPCOMING EVENTS:
- Sept 15: Welcome meeting and equipment basics
- Sept 22: Night photography walk (downtown)
- Sept 29: Guest speaker: Professional portrait photographer
- Oct 6: Photo editing workshop

MEMBERSHIP:
- $20 per semester (includes darkroom access)
- Equipment rental available to members
- Annual photo exhibition in spring

No experience necessary! All skill levels welcome.

Questions? Contact president@photoclub.university.edu`,
    questions: [
      {
        question: "When and where do regular meetings take place?",
        options: ["Monday at 6 PM in Arts 204", "Thursday at 6 PM in Arts 204", "Friday at 7 PM in Arts 204", "Saturday at 2 PM in Arts 204"],
        correctAnswer: "Thursday at 6 PM in Arts 204",
        explanation: "'Weekly meetings every Thursday at 6 PM in Arts Building Room 204.'"
      },
      {
        question: "What does membership include?",
        options: ["Free equipment", "Darkroom access", "Free photo printing", "Camera purchase discount"],
        correctAnswer: "Darkroom access",
        explanation: "'$20 per semester (includes darkroom access).'"
      }
    ]
  },
  {
    id: "DL_013",
    taskType: "daily_life",
    category: "IT Support",
    passage: `STUDENT EMAIL MIGRATION NOTICE

Starting November 1, all student email accounts will be migrated to a new system.

WHAT YOU NEED TO DO:
1. Log in to your current email before October 25
2. Save any important attachments to your personal computer
3. Update your email settings after November 1
4. Set up two-factor authentication (required)

CHANGES:
- New email address format: firstname.lastname@students.university.edu
- Increased storage: 50GB (up from 25GB)
- Improved mobile app
- Old email addresses will forward for 6 months

SUPPORT:
- IT Help Desk: 555-HELP
- Online chat: support.university.edu
- Walk-in hours: Library basement, Mon-Fri 9 AM - 5 PM`,
    questions: [
      {
        question: "How long will old email addresses continue forwarding?",
        options: ["1 month", "3 months", "6 months", "12 months"],
        correctAnswer: "6 months",
        explanation: "'Old email addresses will forward for 6 months.'"
      },
      {
        question: "What is the new storage capacity?",
        options: ["25GB", "50GB", "75GB", "100GB"],
        correctAnswer: "50GB",
        explanation: "'Increased storage: 50GB (up from 25GB).'"
      },
      {
        question: "Where is the walk-in IT support located?",
        options: ["Student Center", "Administration Building", "Library basement", "Science Hall"],
        correctAnswer: "Library basement",
        explanation: "'Walk-in hours: Library basement, Mon-Fri 9 AM - 5 PM.'"
      }
    ]
  },
  {
    id: "DL_014",
    taskType: "daily_life",
    category: "Housing",
    passage: `ROOM SELECTION FOR NEXT YEAR

Housing applications for 2027-2028 are now open!

TIMELINE:
- Feb 1-15: Submit housing application ($50 deposit)
- Feb 20: Lottery numbers assigned
- Mar 1-5: Seniors select rooms
- Mar 8-12: Juniors select rooms
- Mar 15-19: Sophomores select rooms
- Mar 22: Remaining rooms offered to freshmen

HOUSING OPTIONS:
- Traditional double: $4,200/semester
- Suite-style (4-person): $4,800/semester
- Single room: $5,500/semester (limited availability)
- Apartment-style: $6,000/semester

Note: Students with GPA below 2.0 may not be eligible for housing.`,
    questions: [
      {
        question: "When do juniors select rooms?",
        options: ["Feb 20", "Mar 1-5", "Mar 8-12", "Mar 15-19"],
        correctAnswer: "Mar 8-12",
        explanation: "'Mar 8-12: Juniors select rooms.'"
      },
      {
        question: "What is the cost of suite-style housing per semester?",
        options: ["$4,200", "$4,800", "$5,500", "$6,000"],
        correctAnswer: "$4,800",
        explanation: "'Suite-style (4-person): $4,800/semester.'"
      }
    ]
  },
  {
    id: "DL_015",
    taskType: "daily_life",
    category: "Cafe Menu",
    passage: `CAMPUS COFFEE HOUSE - DAILY SPECIALS

MONDAY: Buy one coffee, get pastry half off
TUESDAY: $1 off any smoothie
WEDNESDAY: Free size upgrade on any drink
THURSDAY: Student discount 15% (show ID)
FRIDAY: Happy Hour 3-5 PM - All drinks $3

MENU HIGHLIGHTS:
- House blend coffee: $2.50 (S) / $3.00 (M) / $3.50 (L)
- Specialty lattes: $4.50+
- Fresh pastries: $2-4
- Sandwiches: $6-8 (available 11 AM - 2 PM)

Hours: Mon-Fri 7 AM - 8 PM | Sat-Sun 9 AM - 5 PM
Located in Student Center, Ground Floor

Free WiFi | Mobile ordering available`,
    questions: [
      {
        question: "On which day can students get 15% off?",
        options: ["Monday", "Tuesday", "Thursday", "Friday"],
        correctAnswer: "Thursday",
        explanation: "'THURSDAY: Student discount 15% (show ID).'"
      },
      {
        question: "When are sandwiches available?",
        options: ["All day", "7 AM - 12 PM", "11 AM - 2 PM", "12 PM - 5 PM"],
        correctAnswer: "11 AM - 2 PM",
        explanation: "'Sandwiches: $6-8 (available 11 AM - 2 PM).'"
      }
    ]
  },
  {
    id: "DL_016",
    taskType: "daily_life",
    category: "Course Registration",
    passage: `SPRING 2027 REGISTRATION DATES

Registration opens based on credits earned:

- 90+ credits (Seniors): November 1, 8 AM
- 60-89 credits (Juniors): November 3, 8 AM
- 30-59 credits (Sophomores): November 5, 8 AM
- 0-29 credits (Freshmen): November 7, 8 AM

IMPORTANT REMINDERS:
- Clear all holds before registration
- Meet with your advisor first
- Check prerequisites carefully
- Waitlist spots are limited to 5 per course

ADD/DROP PERIOD:
- First two weeks of semester: No penalty
- Weeks 3-10: "W" grade on transcript
- After week 10: No withdrawals permitted

Questions? Visit the Registrar's Office or call 555-CLASSES`,
    questions: [
      {
        question: "When can students with 75 credits register?",
        options: ["November 1", "November 3", "November 5", "November 7"],
        correctAnswer: "November 3",
        explanation: "75 credits falls in the 60-89 range (Juniors), who register November 3."
      },
      {
        question: "How many courses can you waitlist?",
        options: ["3", "4", "5", "Unlimited"],
        correctAnswer: "5",
        explanation: "'Waitlist spots are limited to 5 per course.'"
      }
    ]
  },
  {
    id: "DL_017",
    taskType: "daily_life",
    category: "Campus Safety",
    passage: `CAMPUS SAFETY ESCORT SERVICE

Walking alone at night? Request a free safety escort!

SERVICE HOURS:
- Sunday-Thursday: 8 PM - 2 AM
- Friday-Saturday: 9 PM - 3 AM

HOW TO REQUEST:
- Call: 555-SAFE
- Text: "ESCORT" to 55555
- Use the SafeWalk app
- Visit any Campus Security booth

Escorts available anywhere on campus and to nearby off-campus locations (within 1 mile of campus boundary).

Average wait time: 5-10 minutes

Emergency? Always call 911 first, then Campus Security at 555-9111.`,
    questions: [
      {
        question: "What is the latest time escorts are available on Saturday?",
        options: ["2 AM", "3 AM", "4 AM", "24 hours"],
        correctAnswer: "3 AM",
        explanation: "'Friday-Saturday: 9 PM - 3 AM.'"
      },
      {
        question: "How far off campus will escorts go?",
        options: ["On campus only", "Within 0.5 miles", "Within 1 mile", "Anywhere requested"],
        correctAnswer: "Within 1 mile",
        explanation: "'Nearby off-campus locations (within 1 mile of campus boundary).'"
      }
    ]
  },
  {
    id: "DL_018",
    taskType: "daily_life",
    category: "Bookstore",
    passage: `GRADUATION REGALIA - ORDER NOW

Orders for May graduation ceremony must be placed by March 15!

PACKAGE OPTIONS:

Basic Package ($45):
- Cap and gown
- Tassel in school colors

Premium Package ($85):
- Everything in Basic
- Honor cords (if eligible)
- Diploma frame
- Class of 2027 keychain

MEASUREMENTS:
- Order based on height and weight
- Size chart available at bookstore.university.edu
- Exchanges available until April 15

PICKUP:
- April 20-May 5 at University Bookstore
- Bring student ID and order confirmation

Note: Late orders after March 15 add $20 rush fee.`,
    questions: [
      {
        question: "What is the deadline for regular-priced orders?",
        options: ["March 1", "March 15", "April 15", "April 20"],
        correctAnswer: "March 15",
        explanation: "'Orders for May graduation ceremony must be placed by March 15!'"
      },
      {
        question: "What is the rush fee for late orders?",
        options: ["$10", "$15", "$20", "$25"],
        correctAnswer: "$20",
        explanation: "'Late orders after March 15 add $20 rush fee.'"
      }
    ]
  },
  {
    id: "DL_019",
    taskType: "daily_life",
    category: "Tutoring",
    passage: `FREE TUTORING SERVICES - ACADEMIC SUCCESS CENTER

Drop-in tutoring available for most introductory courses!

SUBJECTS & HOURS:
- Math (all levels): Mon-Thu 9 AM - 8 PM, Fri 9 AM - 3 PM
- Writing Center: Mon-Fri 10 AM - 6 PM, Sat 11 AM - 3 PM
- Sciences (Bio, Chem, Physics): Mon-Thu 2 PM - 7 PM
- Languages: By appointment only

LOCATION: Library, 2nd Floor, Room 215

NO APPOINTMENT NEEDED for most subjects!

Tips for getting the most out of tutoring:
- Bring your textbook and notes
- Come with specific questions
- Allow 30-45 minutes per session

Online tutoring also available via Zoom. Book at tutoring.university.edu`,
    questions: [
      {
        question: "When is the Writing Center open on Saturday?",
        options: ["9 AM - 3 PM", "10 AM - 6 PM", "11 AM - 3 PM", "Closed"],
        correctAnswer: "11 AM - 3 PM",
        explanation: "'Writing Center: Mon-Fri 10 AM - 6 PM, Sat 11 AM - 3 PM.'"
      },
      {
        question: "Which subject requires an appointment?",
        options: ["Math", "Writing", "Sciences", "Languages"],
        correctAnswer: "Languages",
        explanation: "'Languages: By appointment only.'"
      }
    ]
  },
  {
    id: "DL_020",
    taskType: "daily_life",
    category: "Study Abroad",
    passage: `STUDY ABROAD INFORMATION SESSION

Thinking about studying abroad? Learn about your options!

SESSION DETAILS:
Date: Thursday, October 10
Time: 4:00 PM - 5:30 PM
Location: International Center, Room 101

TOPICS COVERED:
- Program options (semester, summer, year-long)
- Costs and financial aid
- Credit transfer process
- Application timeline
- Visa requirements
- Student testimonials

UPCOMING DEADLINES:
- Spring programs: October 15
- Summer programs: February 1
- Fall programs: March 1

Light refreshments provided.
RSVP at studyabroad.university.edu (recommended but not required)`,
    questions: [
      {
        question: "When is the information session?",
        options: ["October 10 at 3 PM", "October 10 at 4 PM", "October 15 at 4 PM", "October 15 at 5 PM"],
        correctAnswer: "October 10 at 4 PM",
        explanation: "'Date: Thursday, October 10' and 'Time: 4:00 PM - 5:30 PM.'"
      },
      {
        question: "What is the deadline for spring programs?",
        options: ["October 10", "October 15", "February 1", "March 1"],
        correctAnswer: "October 15",
        explanation: "'Spring programs: October 15.'"
      }
    ]
  },
  {
    id: "DL_021",
    taskType: "daily_life",
    category: "Laundry",
    passage: `LAUNDRY FACILITY GUIDELINES - RESIDENCE HALLS

Located in the basement of each dormitory building.

HOURS: Available 24/7

COSTS:
- Wash: $1.50 per load
- Dry: $1.25 per load (45 minutes)
- Payment: Student ID card only (no cash)

Add funds to your ID card at:
- Dining services offices
- Online at studentaccount.university.edu
- Housing office

RULES:
- Remove clothes promptly when cycle ends
- Items left over 30 minutes may be moved
- Report broken machines to maintenance
- Do not overload machines
- Clean lint traps after each use`,
    questions: [
      {
        question: "What is the total cost to wash and dry one load?",
        options: ["$1.50", "$2.00", "$2.75", "$3.00"],
        correctAnswer: "$2.75",
        explanation: "Wash ($1.50) + Dry ($1.25) = $2.75."
      },
      {
        question: "What payment method is accepted?",
        options: ["Cash only", "Credit card only", "Student ID card only", "All methods"],
        correctAnswer: "Student ID card only",
        explanation: "'Payment: Student ID card only (no cash).'"
      }
    ]
  },
  {
    id: "DL_022",
    taskType: "daily_life",
    category: "Mental Health",
    passage: `COUNSELING SERVICES - STUDENT WELLNESS CENTER

Free and confidential support for all students.

SERVICES OFFERED:
- Individual counseling
- Group therapy sessions
- Crisis intervention
- Stress management workshops
- Psychiatric consultations

HOW TO SCHEDULE:
- Call: 555-WELL
- Online: wellness.university.edu
- Walk-in: Urgent appointments same-day

HOURS:
- Monday-Friday: 8 AM - 6 PM
- Saturday: 10 AM - 2 PM (urgent only)

AFTER-HOURS CRISIS:
Call the 24/7 crisis line: 555-HELP

Initial appointments typically available within one week.
All services covered by student health fee.`,
    questions: [
      {
        question: "When are Saturday services available?",
        options: ["8 AM - 6 PM", "10 AM - 2 PM", "10 AM - 6 PM", "Not available"],
        correctAnswer: "10 AM - 2 PM",
        explanation: "'Saturday: 10 AM - 2 PM (urgent only).'"
      },
      {
        question: "How are counseling services paid for?",
        options: ["Out of pocket", "Insurance required", "Covered by student health fee", "Sliding scale"],
        correctAnswer: "Covered by student health fee",
        explanation: "'All services covered by student health fee.'"
      }
    ]
  },
  {
    id: "DL_023",
    taskType: "daily_life",
    category: "Sustainability",
    passage: `CAMPUS RECYCLING PROGRAM

Help us reach our goal of zero waste by 2030!

WHAT GOES WHERE:

BLUE BINS (Recycling):
- Paper and cardboard
- Plastic bottles (#1 and #2)
- Aluminum cans
- Glass containers

GREEN BINS (Compost):
- Food scraps
- Paper napkins
- Coffee grounds
- Yard waste

BLACK BINS (Landfill):
- Styrofoam
- Plastic bags
- Chip bags
- Contaminated items

TIPS:
- Rinse containers before recycling
- Flatten cardboard boxes
- When in doubt, throw it out (contamination ruins entire loads)

Questions? Email sustainability@university.edu`,
    questions: [
      {
        question: "Where do plastic bags go?",
        options: ["Blue bins", "Green bins", "Black bins", "Special collection"],
        correctAnswer: "Black bins",
        explanation: "Plastic bags are listed under 'BLACK BINS (Landfill).'"
      },
      {
        question: "What should you do with containers before recycling?",
        options: ["Remove labels", "Rinse them", "Crush them", "Nothing"],
        correctAnswer: "Rinse them",
        explanation: "'Rinse containers before recycling.'"
      }
    ]
  },
  {
    id: "DL_024",
    taskType: "daily_life",
    category: "Concert",
    passage: `SPRING CONCERT - FEATURING MAJOR ARTIST TBA

Date: Saturday, April 25
Time: Gates open 5 PM, Show starts 7 PM
Location: University Stadium

TICKETS:
- Students: $25 (limit 2 per ID)
- General Public: $45
- VIP Package: $100 (early entry, meet & greet lottery)

ON SALE: March 1 at 10 AM
- Students: Online at tickets.university.edu
- Public: March 8

WHAT TO BRING:
- Valid ID
- Clear bags only (no larger than 12"x12"x6")
- Sealed water bottles permitted

NO: Outside food, professional cameras, lawn chairs, umbrellas`,
    questions: [
      {
        question: "How many tickets can a student purchase?",
        options: ["1", "2", "4", "Unlimited"],
        correctAnswer: "2",
        explanation: "'Students: $25 (limit 2 per ID).'"
      },
      {
        question: "When can the general public buy tickets?",
        options: ["March 1", "March 8", "April 1", "April 25"],
        correctAnswer: "March 8",
        explanation: "'Public: March 8.'"
      }
    ]
  },
  {
    id: "DL_025",
    taskType: "daily_life",
    category: "Lost and Found",
    passage: `LOST AND FOUND - CAMPUS SECURITY

Found something? Lost something? We can help!

LOCATIONS:
- Main office: Security Building, Room 102
- Hours: Monday-Friday 8 AM - 5 PM

HOW TO REPORT:
- Online: lostandfound.university.edu
- Phone: 555-FOUND
- In person during office hours

CLAIMING ITEMS:
- Must show valid ID
- Describe item in detail
- Items held for 30 days
- After 30 days: donated or discarded

COMMON ITEMS:
- Student IDs (returned to card office)
- Keys (held indefinitely)
- Electronics (held 90 days)
- Textbooks (held until end of semester)

Tip: Label your belongings with your name and phone number!`,
    questions: [
      {
        question: "How long are most items held?",
        options: ["7 days", "14 days", "30 days", "90 days"],
        correctAnswer: "30 days",
        explanation: "'Items held for 30 days.'"
      },
      {
        question: "What happens to found student IDs?",
        options: ["Held for 30 days", "Returned to card office", "Donated", "Discarded"],
        correctAnswer: "Returned to card office",
        explanation: "'Student IDs (returned to card office).'"
      }
    ]
  },
  {
    id: "DL_026",
    taskType: "daily_life",
    category: "Printing",
    passage: `STUDENT PRINTING SERVICES

Every student receives $20 printing credit per semester.

COSTS:
- Black & white: $0.05 per page
- Color: $0.25 per page
- Poster printing: $3.00 per square foot

LOCATIONS:
- Library (all floors) - 24/7 during finals
- Computer labs in each academic building
- Student Center, 2nd floor

HOW TO PRINT:
1. Send document to print@university.edu
2. Go to any printer
3. Swipe student ID
4. Select your document
5. Print!

Additional credit can be purchased at:
- Bursar's office
- Online through student portal
- $1 minimum, loaded instantly`,
    questions: [
      {
        question: "How much free printing credit do students get?",
        options: ["$10", "$15", "$20", "$25"],
        correctAnswer: "$20",
        explanation: "'Every student receives $20 printing credit per semester.'"
      },
      {
        question: "How much does color printing cost?",
        options: ["$0.05/page", "$0.10/page", "$0.25/page", "$0.50/page"],
        correctAnswer: "$0.25/page",
        explanation: "'Color: $0.25 per page.'"
      }
    ]
  },
  {
    id: "DL_027",
    taskType: "daily_life",
    category: "Volunteer",
    passage: `COMMUNITY SERVICE OPPORTUNITIES

Make a difference while earning service hours!

WEEKLY PROGRAMS:
- Homework Help: Tues/Thu 3-5 PM at Jefferson Elementary
- Food Bank: Saturdays 9 AM - 12 PM at Community Center
- Senior Center: Wednesdays 1-4 PM (various activities)
- Animal Shelter: Flexible hours, training required

ONE-TIME EVENTS (Upcoming):
- Park Cleanup: October 5, 9 AM - 1 PM
- Charity Run: October 12, registration opens Sept 15
- Habitat for Humanity Build: November 2-3

TO SIGN UP:
Visit volunteer.university.edu
All volunteers must complete online orientation first.

Service hours tracked automatically and appear on your co-curricular transcript.`,
    questions: [
      {
        question: "When is Homework Help offered?",
        options: ["Mon/Wed 3-5 PM", "Tues/Thu 3-5 PM", "Weekends only", "Daily"],
        correctAnswer: "Tues/Thu 3-5 PM",
        explanation: "'Homework Help: Tues/Thu 3-5 PM at Jefferson Elementary.'"
      },
      {
        question: "What is required before volunteering?",
        options: ["Background check", "Online orientation", "Interview", "Deposit"],
        correctAnswer: "Online orientation",
        explanation: "'All volunteers must complete online orientation first.'"
      }
    ]
  },
  {
    id: "DL_028",
    taskType: "daily_life",
    category: "Weather Alert",
    passage: `WINTER WEATHER PROCEDURES

In case of severe winter weather:

DECISION TIMELINE:
- 5:30 AM: Decision made for daytime classes
- 3:00 PM: Decision made for evening classes
- Announcements via: Text alert, email, website, local news

CLOSURE LEVELS:
Level 1 - Delayed Opening:
- Campus opens at 10 AM
- Classes before 10 AM cancelled

Level 2 - Modified Operations:
- Only essential personnel report
- All classes cancelled
- Dining halls open limited hours

Level 3 - Campus Closed:
- Emergency personnel only
- All buildings locked except residence halls

Sign up for emergency alerts at alert.university.edu
Always check before traveling to campus!`,
    questions: [
      {
        question: "When is the decision made for evening classes?",
        options: ["5:30 AM", "10:00 AM", "3:00 PM", "5:00 PM"],
        correctAnswer: "3:00 PM",
        explanation: "'3:00 PM: Decision made for evening classes.'"
      },
      {
        question: "What happens during Level 2 closure?",
        options: ["Normal operations", "10 AM opening", "All classes cancelled", "Campus completely closed"],
        correctAnswer: "All classes cancelled",
        explanation: "Level 2 states 'All classes cancelled.'"
      }
    ]
  },
  {
    id: "DL_029",
    taskType: "daily_life",
    category: "Insurance",
    passage: `STUDENT HEALTH INSURANCE

All full-time students must have health insurance coverage.

OPTIONS:
1. University Plan ($2,400/year)
   - Comprehensive coverage
   - Low co-pays ($20 primary care)
   - Prescription coverage included
   - Mental health services

2. Waiver (use your own insurance)
   - Must submit waiver by September 15
   - Insurance must meet minimum requirements
   - Waiver reviewed annually

ENROLLMENT:
- Automatic enrollment in University Plan if no waiver
- Charges appear on tuition bill
- Coverage: August 15 - August 14

Questions? Contact Student Health Insurance Office
Phone: 555-INSURE
Email: insurance@university.edu`,
    questions: [
      {
        question: "What is the deadline to submit an insurance waiver?",
        options: ["August 15", "September 1", "September 15", "October 1"],
        correctAnswer: "September 15",
        explanation: "'Must submit waiver by September 15.'"
      },
      {
        question: "What is the primary care co-pay for the University Plan?",
        options: ["$10", "$15", "$20", "$25"],
        correctAnswer: "$20",
        explanation: "'Low co-pays ($20 primary care).'"
      }
    ]
  },
  {
    id: "DL_030",
    taskType: "daily_life",
    category: "Mail Services",
    passage: `CAMPUS MAIL CENTER

Located in Student Center, Lower Level

HOURS:
- Package pickup: Mon-Fri 10 AM - 6 PM, Sat 11 AM - 2 PM
- Stamp sales/mailing: Mon-Fri only

PACKAGE NOTIFICATION:
- Email sent when package arrives
- Must pick up within 14 days
- After 14 days: returned to sender

WHAT TO BRING:
- Student ID (required)
- Package notification email (helpful but not required)

SENDING MAIL:
- Stamps available for purchase
- Outgoing mail collected daily at 3 PM
- Express/overnight services available
- International shipping available

Large packages may require appointment for pickup.
Contact: mailcenter@university.edu`,
    questions: [
      {
        question: "How long do you have to pick up a package?",
        options: ["7 days", "10 days", "14 days", "30 days"],
        correctAnswer: "14 days",
        explanation: "'Must pick up within 14 days.'"
      },
      {
        question: "When is Saturday pickup available?",
        options: ["10 AM - 6 PM", "11 AM - 2 PM", "12 PM - 4 PM", "Not available"],
        correctAnswer: "11 AM - 2 PM",
        explanation: "'Package pickup: Mon-Fri 10 AM - 6 PM, Sat 11 AM - 2 PM.'"
      }
    ]
  }
];

// ==================== ACADEMIC TEXTS (25 passages × 5 questions = 125 questions) ====================

export const academicQuestions: AcademicQuestion[] = [
  {
    id: "AC_001",
    taskType: "academic",
    topic: "Biology",
    title: "The Process of Photosynthesis",
    passage: `Photosynthesis is the fundamental biological process by which green plants, algae, and certain bacteria convert light energy into chemical energy. This process occurs primarily in the chloroplasts of plant cells, where chlorophyll, the green pigment, captures sunlight. The overall reaction combines carbon dioxide from the atmosphere with water from the soil to produce glucose and oxygen.

The process consists of two main stages: the light-dependent reactions and the light-independent reactions, also known as the Calvin cycle. During the light-dependent reactions, which take place in the thylakoid membranes, chlorophyll absorbs light energy and uses it to split water molecules, releasing oxygen as a byproduct and generating ATP and NADPH.

The Calvin cycle occurs in the stroma of the chloroplast. Here, the ATP and NADPH produced in the light reactions power the conversion of carbon dioxide into glucose. This process is called carbon fixation because atmospheric carbon is "fixed" into an organic molecule. The glucose produced serves as the primary energy source for the plant and forms the base of most food chains on Earth.`,
    wordCount: 178,
    questions: [
      {
        question: "Where does photosynthesis primarily take place?",
        options: ["In the mitochondria", "In the chloroplasts", "In the nucleus", "In the cell membrane"],
        correctAnswer: "In the chloroplasts",
        explanation: "The passage states 'This process occurs primarily in the chloroplasts of plant cells.'"
      },
      {
        question: "What is the byproduct released during light-dependent reactions?",
        options: ["Carbon dioxide", "Glucose", "Oxygen", "Water"],
        correctAnswer: "Oxygen",
        explanation: "The passage mentions 'releasing oxygen as a byproduct.'"
      },
      {
        question: "What is another name for the light-independent reactions?",
        options: ["Krebs cycle", "Calvin cycle", "Citric acid cycle", "Electron transport chain"],
        correctAnswer: "Calvin cycle",
        explanation: "The passage states 'the light-independent reactions, also known as the Calvin cycle.'"
      },
      {
        question: "What does the term 'carbon fixation' refer to?",
        options: ["Releasing carbon into the air", "Converting carbon dioxide into glucose", "Breaking down glucose", "Absorbing light energy"],
        correctAnswer: "Converting carbon dioxide into glucose",
        explanation: "The passage explains 'atmospheric carbon is \"fixed\" into an organic molecule.'"
      },
      {
        question: "What role does chlorophyll play in photosynthesis?",
        options: ["It produces water", "It captures sunlight", "It stores glucose", "It releases carbon dioxide"],
        correctAnswer: "It captures sunlight",
        explanation: "The passage states 'chlorophyll, the green pigment, captures sunlight.'"
      }
    ]
  },
  {
    id: "AC_002",
    taskType: "academic",
    topic: "History",
    title: "The Industrial Revolution",
    passage: `The Industrial Revolution, which began in Britain in the mid-18th century, fundamentally transformed human society from an agrarian economy to an industrial one. This period saw the introduction of machinery, new manufacturing processes, and the development of factory systems that would reshape how goods were produced.

Several key innovations drove this transformation. The steam engine, improved by James Watt in the 1760s, provided a new source of power that was not dependent on water or wind. The spinning jenny and power loom revolutionized textile production, making cloth cheaper and more accessible. Iron and steel production methods also improved significantly, enabling the construction of machines, bridges, and eventually railways.

The social consequences were equally profound. Workers migrated from rural areas to cities, creating a new urban working class. Working conditions in early factories were often harsh, with long hours, low wages, and dangerous environments. These conditions eventually led to the formation of labor unions and the push for worker protection laws. The Industrial Revolution also expanded the middle class, as new opportunities emerged for entrepreneurs, managers, and professionals.`,
    wordCount: 185,
    questions: [
      {
        question: "Where did the Industrial Revolution begin?",
        options: ["France", "Germany", "Britain", "United States"],
        correctAnswer: "Britain",
        explanation: "The passage states 'The Industrial Revolution, which began in Britain.'"
      },
      {
        question: "Who improved the steam engine in the 1760s?",
        options: ["Thomas Edison", "James Watt", "Alexander Bell", "Henry Ford"],
        correctAnswer: "James Watt",
        explanation: "The passage mentions 'The steam engine, improved by James Watt in the 1760s.'"
      },
      {
        question: "What was one effect of the Industrial Revolution on workers?",
        options: ["They stayed in rural areas", "They migrated to cities", "They worked fewer hours", "They earned higher wages immediately"],
        correctAnswer: "They migrated to cities",
        explanation: "The passage states 'Workers migrated from rural areas to cities.'"
      },
      {
        question: "What innovations revolutionized textile production?",
        options: ["Steam ships and trains", "Spinning jenny and power loom", "Telegraph and telephone", "Electric lights and motors"],
        correctAnswer: "Spinning jenny and power loom",
        explanation: "The passage mentions 'The spinning jenny and power loom revolutionized textile production.'"
      },
      {
        question: "What was one long-term social result of poor factory conditions?",
        options: ["Decrease in population", "Formation of labor unions", "Return to farming", "Decline of cities"],
        correctAnswer: "Formation of labor unions",
        explanation: "The passage states 'These conditions eventually led to the formation of labor unions.'"
      }
    ]
  },
  {
    id: "AC_003",
    taskType: "academic",
    topic: "Psychology",
    title: "Classical Conditioning",
    passage: `Classical conditioning, first described by Russian physiologist Ivan Pavlov in the early 20th century, is a learning process in which a neutral stimulus becomes associated with a meaningful stimulus, eventually triggering a similar response. Pavlov discovered this phenomenon while studying digestion in dogs.

In his famous experiments, Pavlov noticed that dogs began salivating not only when food was presented but also when they heard the footsteps of the lab assistant who fed them. He then systematically paired the presentation of food (unconditioned stimulus) with the sound of a bell (neutral stimulus). After repeated pairings, the dogs began salivating at the sound of the bell alone, even without food present. The bell had become a conditioned stimulus, and the salivation response to it was the conditioned response.

Classical conditioning has broad applications in understanding human behavior. It helps explain how phobias develop, why certain songs evoke emotional memories, and how advertising creates positive associations with products. Therapeutic techniques such as systematic desensitization use classical conditioning principles to help people overcome fears by gradually pairing feared objects with relaxation responses.`,
    wordCount: 186,
    questions: [
      {
        question: "Who first described classical conditioning?",
        options: ["Sigmund Freud", "Ivan Pavlov", "B.F. Skinner", "Carl Jung"],
        correctAnswer: "Ivan Pavlov",
        explanation: "The passage states 'Classical conditioning, first described by Russian physiologist Ivan Pavlov.'"
      },
      {
        question: "What was Pavlov originally studying when he discovered classical conditioning?",
        options: ["Brain function", "Animal behavior", "Digestion in dogs", "Learning in children"],
        correctAnswer: "Digestion in dogs",
        explanation: "The passage mentions 'Pavlov discovered this phenomenon while studying digestion in dogs.'"
      },
      {
        question: "In Pavlov's experiment, what was the neutral stimulus?",
        options: ["Food", "Salivation", "A bell", "The lab assistant"],
        correctAnswer: "A bell",
        explanation: "The passage describes pairing 'the sound of a bell (neutral stimulus)' with food."
      },
      {
        question: "What is systematic desensitization used for?",
        options: ["Improving memory", "Overcoming fears", "Increasing appetite", "Enhancing creativity"],
        correctAnswer: "Overcoming fears",
        explanation: "The passage states it helps 'people overcome fears by gradually pairing feared objects with relaxation responses.'"
      },
      {
        question: "How does advertising relate to classical conditioning?",
        options: ["It uses negative reinforcement", "It creates positive associations with products", "It teaches new skills", "It measures brain activity"],
        correctAnswer: "It creates positive associations with products",
        explanation: "The passage mentions 'how advertising creates positive associations with products.'"
      }
    ]
  },
  {
    id: "AC_004",
    taskType: "academic",
    topic: "Environmental Science",
    title: "The Water Cycle",
    passage: `The water cycle, also known as the hydrological cycle, describes the continuous movement of water on, above, and below Earth's surface. This natural process is essential for maintaining life on our planet and has been operating for billions of years.

The cycle begins with evaporation, where solar energy heats water in oceans, lakes, and rivers, converting it from liquid to water vapor. Plants also contribute through transpiration, releasing water vapor through their leaves. This combined process is often called evapotranspiration. The water vapor rises into the atmosphere where cooler temperatures cause it to condense into tiny droplets, forming clouds.

When these droplets combine and become heavy enough, precipitation occurs in the form of rain, snow, sleet, or hail. Some of this water flows over the land surface as runoff, eventually returning to oceans and lakes. Other water infiltrates the soil, becoming groundwater that may remain underground for thousands of years before emerging in springs or being extracted by wells. This groundwater is a critical freshwater resource for many communities worldwide.`,
    wordCount: 181,
    questions: [
      {
        question: "What is another name for the water cycle?",
        options: ["Carbon cycle", "Hydrological cycle", "Nitrogen cycle", "Rock cycle"],
        correctAnswer: "Hydrological cycle",
        explanation: "The passage states 'The water cycle, also known as the hydrological cycle.'"
      },
      {
        question: "What causes water to evaporate?",
        options: ["Wind", "Solar energy", "Gravity", "Pressure"],
        correctAnswer: "Solar energy",
        explanation: "The passage mentions 'solar energy heats water... converting it from liquid to water vapor.'"
      },
      {
        question: "What is evapotranspiration?",
        options: ["Rain falling on plants", "Water flowing into rivers", "Combined evaporation and plant transpiration", "Cloud formation"],
        correctAnswer: "Combined evaporation and plant transpiration",
        explanation: "The passage explains 'This combined process is often called evapotranspiration.'"
      },
      {
        question: "What causes water vapor to form clouds?",
        options: ["Increased temperature", "Wind patterns", "Cooler temperatures causing condensation", "Ocean currents"],
        correctAnswer: "Cooler temperatures causing condensation",
        explanation: "The passage states 'cooler temperatures cause it to condense into tiny droplets, forming clouds.'"
      },
      {
        question: "How long can groundwater remain underground?",
        options: ["A few days", "Several months", "Thousands of years", "Only during droughts"],
        correctAnswer: "Thousands of years",
        explanation: "The passage mentions groundwater 'may remain underground for thousands of years.'"
      }
    ]
  },
  {
    id: "AC_005",
    taskType: "academic",
    topic: "Economics",
    title: "Supply and Demand",
    passage: `Supply and demand is a fundamental economic model that explains how prices are determined in a market economy. This principle, developed by economists over centuries, remains central to understanding how markets function and why prices fluctuate.

Demand refers to consumers' willingness and ability to purchase a product at various price levels. Generally, as the price of a good decreases, the quantity demanded increases—this is known as the law of demand. Factors such as consumer income, preferences, and the prices of related goods can shift the entire demand curve.

Supply represents producers' willingness to offer products at different price points. According to the law of supply, as prices rise, producers are motivated to supply more of a good because they can earn greater profits. Production costs, technology, and the number of sellers in the market affect supply levels.

The point where supply and demand curves intersect is called the equilibrium price. At this price, the quantity consumers want to buy exactly matches what producers want to sell. When prices are above equilibrium, surpluses occur; when below, shortages develop.`,
    wordCount: 184,
    questions: [
      {
        question: "What does the law of demand state?",
        options: ["Higher prices increase demand", "Lower prices increase quantity demanded", "Supply determines demand", "Prices never change"],
        correctAnswer: "Lower prices increase quantity demanded",
        explanation: "The passage states 'as the price of a good decreases, the quantity demanded increases.'"
      },
      {
        question: "What motivates producers to supply more of a good?",
        options: ["Lower prices", "Government regulations", "Rising prices and greater profits", "Consumer preferences"],
        correctAnswer: "Rising prices and greater profits",
        explanation: "The passage mentions 'as prices rise, producers are motivated to supply more... because they can earn greater profits.'"
      },
      {
        question: "What is the equilibrium price?",
        options: ["The highest possible price", "Where supply and demand curves intersect", "The government-set price", "The lowest possible price"],
        correctAnswer: "Where supply and demand curves intersect",
        explanation: "The passage explains 'The point where supply and demand curves intersect is called the equilibrium price.'"
      },
      {
        question: "What happens when prices are above equilibrium?",
        options: ["Shortages occur", "Surpluses occur", "Demand increases", "Supply decreases"],
        correctAnswer: "Surpluses occur",
        explanation: "The passage states 'When prices are above equilibrium, surpluses occur.'"
      },
      {
        question: "What factors can shift the demand curve?",
        options: ["Production costs only", "Technology only", "Consumer income and preferences", "Number of sellers"],
        correctAnswer: "Consumer income and preferences",
        explanation: "The passage mentions 'consumer income, preferences, and the prices of related goods can shift the entire demand curve.'"
      }
    ]
  },
  {
    id: "AC_006",
    taskType: "academic",
    topic: "Astronomy",
    title: "The Solar System",
    passage: `Our solar system consists of the Sun and all the celestial objects bound by its gravitational pull. These include eight major planets, their moons, dwarf planets like Pluto, asteroids, comets, and countless smaller bodies. The solar system formed approximately 4.6 billion years ago from a giant cloud of gas and dust.

The planets are divided into two groups based on their composition. The inner planets—Mercury, Venus, Earth, and Mars—are called terrestrial planets because they have solid, rocky surfaces. They are relatively small and dense compared to the outer planets. The outer planets—Jupiter, Saturn, Uranus, and Neptune—are known as gas giants or ice giants. They are much larger but composed primarily of hydrogen, helium, and other gases.

Between Mars and Jupiter lies the asteroid belt, a region containing millions of rocky objects ranging from small pebbles to dwarf planets like Ceres. Beyond Neptune, the Kuiper Belt contains icy bodies, including Pluto and other dwarf planets. The Oort Cloud, a hypothetical shell of icy objects, may extend nearly halfway to the nearest star.`,
    wordCount: 183,
    questions: [
      {
        question: "How old is our solar system?",
        options: ["1 billion years", "4.6 billion years", "10 billion years", "100 million years"],
        correctAnswer: "4.6 billion years",
        explanation: "The passage states 'The solar system formed approximately 4.6 billion years ago.'"
      },
      {
        question: "Which planets are called terrestrial planets?",
        options: ["Jupiter, Saturn, Uranus, Neptune", "Mercury, Venus, Earth, Mars", "Pluto and other dwarf planets", "Only Earth and Mars"],
        correctAnswer: "Mercury, Venus, Earth, Mars",
        explanation: "The passage lists 'The inner planets—Mercury, Venus, Earth, and Mars—are called terrestrial planets.'"
      },
      {
        question: "What are the outer planets primarily composed of?",
        options: ["Rock and metal", "Water and ice only", "Hydrogen, helium, and other gases", "Solid minerals"],
        correctAnswer: "Hydrogen, helium, and other gases",
        explanation: "The passage states they are 'composed primarily of hydrogen, helium, and other gases.'"
      },
      {
        question: "Where is the asteroid belt located?",
        options: ["Between Earth and Mars", "Between Mars and Jupiter", "Beyond Neptune", "Near the Sun"],
        correctAnswer: "Between Mars and Jupiter",
        explanation: "The passage mentions 'Between Mars and Jupiter lies the asteroid belt.'"
      },
      {
        question: "What is found in the Kuiper Belt?",
        options: ["Hot gas clouds", "Icy bodies including Pluto", "The terrestrial planets", "The asteroid belt"],
        correctAnswer: "Icy bodies including Pluto",
        explanation: "The passage states 'the Kuiper Belt contains icy bodies, including Pluto.'"
      }
    ]
  },
  {
    id: "AC_007",
    taskType: "academic",
    topic: "Sociology",
    title: "Social Stratification",
    passage: `Social stratification refers to the hierarchical arrangement of individuals and groups in society based on factors such as wealth, power, and prestige. This system creates distinct social layers or classes that influence people's life opportunities and experiences. While the specific forms vary across cultures and historical periods, stratification appears to be a universal feature of complex societies.

The most common basis for stratification is economic class. In capitalist societies, the primary distinction is between those who own productive resources (capital) and those who must sell their labor for wages. This economic division leads to differences in income, wealth accumulation, and access to resources that can persist across generations through inheritance and unequal educational opportunities.

Beyond economics, social status can derive from other sources. In some societies, caste systems assign individuals to fixed positions at birth based on ancestry. Racial and ethnic hierarchies have created systematic disadvantages for certain groups. Gender-based stratification has historically limited women's access to education, property, and political power. Modern societies often exhibit multiple, overlapping forms of stratification.`,
    wordCount: 179,
    questions: [
      {
        question: "What is social stratification?",
        options: ["Random distribution of resources", "Hierarchical arrangement of people in society", "Government organization", "Educational system"],
        correctAnswer: "Hierarchical arrangement of people in society",
        explanation: "The passage defines it as 'the hierarchical arrangement of individuals and groups in society.'"
      },
      {
        question: "What is the most common basis for stratification?",
        options: ["Age", "Religion", "Economic class", "Geographic location"],
        correctAnswer: "Economic class",
        explanation: "The passage states 'The most common basis for stratification is economic class.'"
      },
      {
        question: "How can economic inequality persist across generations?",
        options: ["Through government programs", "Through inheritance and unequal educational opportunities", "Through individual effort", "Through technology"],
        correctAnswer: "Through inheritance and unequal educational opportunities",
        explanation: "The passage mentions inequality 'can persist across generations through inheritance and unequal educational opportunities.'"
      },
      {
        question: "What characterizes a caste system?",
        options: ["Economic mobility", "Fixed positions assigned at birth based on ancestry", "Democratic elections", "Random assignment"],
        correctAnswer: "Fixed positions assigned at birth based on ancestry",
        explanation: "The passage describes 'caste systems assign individuals to fixed positions at birth based on ancestry.'"
      },
      {
        question: "According to the passage, is stratification universal in complex societies?",
        options: ["No, it only exists in capitalist societies", "Yes, it appears in all complex societies", "Only in ancient societies", "Only in Western societies"],
        correctAnswer: "Yes, it appears in all complex societies",
        explanation: "The passage states 'stratification appears to be a universal feature of complex societies.'"
      }
    ]
  },
  {
    id: "AC_008",
    taskType: "academic",
    topic: "Chemistry",
    title: "The Periodic Table",
    passage: `The periodic table is a systematic arrangement of chemical elements organized by their atomic number, electron configuration, and recurring chemical properties. First developed by Russian chemist Dmitri Mendeleev in 1869, the table has become the most important reference tool in chemistry.

Elements in the periodic table are arranged in rows called periods and columns called groups or families. Elements in the same group share similar chemical properties because they have the same number of electrons in their outermost shell, called valence electrons. For example, Group 1 elements, the alkali metals, are all highly reactive and readily lose one electron to form positive ions.

The table is divided into several blocks. The s-block contains Groups 1 and 2, the p-block includes Groups 13-18, the d-block houses the transition metals, and the f-block contains the lanthanides and actinides. Each block corresponds to the type of orbital being filled with electrons. The periodic table also shows trends in properties such as atomic radius, electronegativity, and ionization energy, which change predictably across periods and down groups.`,
    wordCount: 184,
    questions: [
      {
        question: "Who developed the first periodic table?",
        options: ["Isaac Newton", "Dmitri Mendeleev", "Marie Curie", "Albert Einstein"],
        correctAnswer: "Dmitri Mendeleev",
        explanation: "The passage states 'First developed by Russian chemist Dmitri Mendeleev in 1869.'"
      },
      {
        question: "What are columns in the periodic table called?",
        options: ["Periods", "Groups or families", "Blocks", "Shells"],
        correctAnswer: "Groups or families",
        explanation: "The passage mentions 'columns called groups or families.'"
      },
      {
        question: "Why do elements in the same group share similar properties?",
        options: ["Same atomic mass", "Same number of protons", "Same number of valence electrons", "Same nuclear charge"],
        correctAnswer: "Same number of valence electrons",
        explanation: "The passage explains 'they have the same number of electrons in their outermost shell, called valence electrons.'"
      },
      {
        question: "Which block contains the transition metals?",
        options: ["s-block", "p-block", "d-block", "f-block"],
        correctAnswer: "d-block",
        explanation: "The passage states 'the d-block houses the transition metals.'"
      },
      {
        question: "What property characterizes Group 1 elements (alkali metals)?",
        options: ["They are inert", "They are highly reactive", "They are heavy", "They are radioactive"],
        correctAnswer: "They are highly reactive",
        explanation: "The passage mentions 'alkali metals, are all highly reactive.'"
      }
    ]
  },
  {
    id: "AC_009",
    taskType: "academic",
    topic: "Art History",
    title: "The Renaissance",
    passage: `The Renaissance was a cultural movement that began in Italy during the 14th century and spread throughout Europe over the following two centuries. The term means "rebirth" in French, referring to the renewed interest in classical Greek and Roman culture that characterized this period. This era marked a significant transition from the medieval worldview to modern thinking.

Renaissance art and architecture showcased revolutionary techniques. Artists like Leonardo da Vinci and Michelangelo mastered linear perspective, creating the illusion of three-dimensional space on flat surfaces. They studied human anatomy to portray the body more realistically, and their use of light and shadow (chiaroscuro) added depth to their works. The era also saw the development of oil painting, which allowed for richer colors and more detailed images.

Beyond visual arts, the Renaissance influenced literature, science, and philosophy. Humanist scholars emphasized the study of classical texts and human potential rather than purely religious concerns. The invention of the printing press by Johannes Gutenberg around 1440 dramatically accelerated the spread of ideas, making books more affordable and accessible to a broader audience.`,
    wordCount: 185,
    questions: [
      {
        question: "Where did the Renaissance begin?",
        options: ["France", "Germany", "Italy", "England"],
        correctAnswer: "Italy",
        explanation: "The passage states 'The Renaissance was a cultural movement that began in Italy.'"
      },
      {
        question: "What does 'Renaissance' mean in French?",
        options: ["Revolution", "Enlightenment", "Rebirth", "Discovery"],
        correctAnswer: "Rebirth",
        explanation: "The passage explains 'The term means \"rebirth\" in French.'"
      },
      {
        question: "What technique creates the illusion of three-dimensional space on flat surfaces?",
        options: ["Chiaroscuro", "Linear perspective", "Oil painting", "Human anatomy"],
        correctAnswer: "Linear perspective",
        explanation: "The passage mentions artists 'mastered linear perspective, creating the illusion of three-dimensional space.'"
      },
      {
        question: "What is chiaroscuro?",
        options: ["A type of paint", "The use of light and shadow", "Classical sculpture", "Italian architecture"],
        correctAnswer: "The use of light and shadow",
        explanation: "The passage defines it as 'their use of light and shadow (chiaroscuro) added depth.'"
      },
      {
        question: "What invention helped spread Renaissance ideas more widely?",
        options: ["The telescope", "The compass", "The printing press", "The microscope"],
        correctAnswer: "The printing press",
        explanation: "The passage mentions 'The invention of the printing press... dramatically accelerated the spread of ideas.'"
      }
    ]
  },
  {
    id: "AC_010",
    taskType: "academic",
    topic: "Physics",
    title: "Newton's Laws of Motion",
    passage: `Isaac Newton's three laws of motion, published in 1687, form the foundation of classical mechanics and describe the relationship between forces acting on objects and their resulting motion. These laws remained the dominant framework for understanding physical motion until Einstein's theory of relativity in the early 20th century.

The first law, often called the law of inertia, states that an object at rest stays at rest, and an object in motion continues moving at a constant velocity, unless acted upon by an external force. This explains why passengers lurch forward when a car suddenly stops—their bodies tend to continue moving forward while the car decelerates.

The second law quantifies the relationship between force, mass, and acceleration, expressed as F=ma (force equals mass times acceleration). This means that the same force will produce greater acceleration in lighter objects than in heavier ones. The third law states that for every action, there is an equal and opposite reaction. When you push against a wall, the wall pushes back with equal force; when a rocket expels gas downward, the reaction force propels it upward.`,
    wordCount: 189,
    questions: [
      {
        question: "When were Newton's laws of motion published?",
        options: ["1600", "1687", "1750", "1800"],
        correctAnswer: "1687",
        explanation: "The passage states 'Newton's three laws of motion, published in 1687.'"
      },
      {
        question: "What is the first law of motion also called?",
        options: ["Law of gravity", "Law of inertia", "Law of acceleration", "Law of reaction"],
        correctAnswer: "Law of inertia",
        explanation: "The passage mentions 'The first law, often called the law of inertia.'"
      },
      {
        question: "According to F=ma, what produces greater acceleration?",
        options: ["Heavier objects with the same force", "Lighter objects with the same force", "Objects with more mass", "Objects moving faster"],
        correctAnswer: "Lighter objects with the same force",
        explanation: "The passage states 'the same force will produce greater acceleration in lighter objects than in heavier ones.'"
      },
      {
        question: "What does the third law describe?",
        options: ["Objects at rest", "Constant velocity", "Action and equal opposite reaction", "Gravity"],
        correctAnswer: "Action and equal opposite reaction",
        explanation: "The passage states 'for every action, there is an equal and opposite reaction.'"
      },
      {
        question: "What replaced Newton's laws as the dominant theory?",
        options: ["Quantum mechanics", "Einstein's theory of relativity", "Thermodynamics", "Electromagnetism"],
        correctAnswer: "Einstein's theory of relativity",
        explanation: "The passage mentions these laws dominated 'until Einstein's theory of relativity in the early 20th century.'"
      }
    ]
  },
  {
    id: "AC_011",
    taskType: "academic",
    topic: "Anthropology",
    title: "Language and Culture",
    passage: `Language and culture are deeply interconnected, with each influencing and shaping the other. Anthropologists and linguists have long studied this relationship, exploring how the language people speak affects their perception of the world and how cultural values are encoded and transmitted through language.

The Sapir-Whorf hypothesis, developed in the early 20th century, proposed that the structure of a language influences the way its speakers perceive and think about the world. In its strong form, this theory suggests that language determines thought; in its weaker form, it proposes that language influences thought. For example, some languages have multiple words for concepts that English expresses with a single term, potentially leading speakers to make finer distinctions.

Beyond vocabulary, cultural values are embedded in language through honorifics, pronouns, and speech patterns. Japanese, for instance, has elaborate systems of politeness levels that reflect and reinforce social hierarchies. Language also serves as a marker of cultural identity, with dialects and accents signaling regional origin, social class, and group membership. The loss of a language often represents the loss of unique cultural knowledge and traditions.`,
    wordCount: 188,
    questions: [
      {
        question: "What does the Sapir-Whorf hypothesis propose?",
        options: ["Language has no connection to thought", "Language structure influences perception and thought", "All languages are the same", "Culture exists without language"],
        correctAnswer: "Language structure influences perception and thought",
        explanation: "The passage states the hypothesis 'proposed that the structure of a language influences the way its speakers perceive and think about the world.'"
      },
      {
        question: "What is the strong form of the Sapir-Whorf hypothesis?",
        options: ["Language influences thought", "Language determines thought", "Thought determines language", "Language and thought are separate"],
        correctAnswer: "Language determines thought",
        explanation: "The passage mentions 'In its strong form, this theory suggests that language determines thought.'"
      },
      {
        question: "What aspect of Japanese reflects social hierarchies?",
        options: ["Alphabet system", "Politeness levels", "Sentence structure", "Pronunciation"],
        correctAnswer: "Politeness levels",
        explanation: "The passage mentions 'Japanese, for instance, has elaborate systems of politeness levels that reflect and reinforce social hierarchies.'"
      },
      {
        question: "What can dialects and accents signal?",
        options: ["Intelligence level", "Age only", "Regional origin and social class", "Education level only"],
        correctAnswer: "Regional origin and social class",
        explanation: "The passage states 'dialects and accents signaling regional origin, social class, and group membership.'"
      },
      {
        question: "What often accompanies the loss of a language?",
        options: ["Economic growth", "Loss of cultural knowledge", "Population increase", "Technological advancement"],
        correctAnswer: "Loss of cultural knowledge",
        explanation: "The passage mentions 'The loss of a language often represents the loss of unique cultural knowledge and traditions.'"
      }
    ]
  },
  {
    id: "AC_012",
    taskType: "academic",
    topic: "Geology",
    title: "Plate Tectonics",
    passage: `Plate tectonics is the scientific theory explaining the large-scale motion of Earth's lithosphere, the rigid outer layer that includes the crust and upper mantle. This theory, fully developed in the 1960s, revolutionized geology by providing a unifying framework for understanding earthquakes, volcanoes, mountain formation, and the distribution of fossils across continents.

Earth's lithosphere is divided into several major and minor plates that float on the semi-fluid asthenosphere below. These plates move slowly, typically only a few centimeters per year, driven by convection currents in the mantle and other forces. Where plates meet, three types of boundaries occur. At divergent boundaries, plates move apart and new crust forms as magma rises to fill the gap. At convergent boundaries, plates collide, often causing one plate to subduct beneath another, leading to earthquakes and volcanic activity. Transform boundaries occur where plates slide horizontally past each other.

The theory explains why the coastlines of Africa and South America appear to fit together—they were once joined as part of the supercontinent Pangaea, which began breaking apart approximately 200 million years ago.`,
    wordCount: 190,
    questions: [
      {
        question: "What is the lithosphere?",
        options: ["Earth's core", "The atmosphere", "The rigid outer layer including crust and upper mantle", "The ocean floor only"],
        correctAnswer: "The rigid outer layer including crust and upper mantle",
        explanation: "The passage defines it as 'the rigid outer layer that includes the crust and upper mantle.'"
      },
      {
        question: "When was plate tectonics theory fully developed?",
        options: ["1920s", "1940s", "1960s", "1980s"],
        correctAnswer: "1960s",
        explanation: "The passage states 'This theory, fully developed in the 1960s.'"
      },
      {
        question: "How fast do plates typically move?",
        options: ["A few meters per year", "A few centimeters per year", "A few kilometers per year", "They don't move"],
        correctAnswer: "A few centimeters per year",
        explanation: "The passage mentions 'These plates move slowly, typically only a few centimeters per year.'"
      },
      {
        question: "What happens at divergent boundaries?",
        options: ["Plates collide", "Plates move apart and new crust forms", "Plates slide past each other", "Volcanoes form only"],
        correctAnswer: "Plates move apart and new crust forms",
        explanation: "The passage states 'At divergent boundaries, plates move apart and new crust forms as magma rises.'"
      },
      {
        question: "What was Pangaea?",
        options: ["An ocean", "A supercontinent", "A type of plate boundary", "A volcano"],
        correctAnswer: "A supercontinent",
        explanation: "The passage mentions 'the supercontinent Pangaea, which began breaking apart approximately 200 million years ago.'"
      }
    ]
  },
  {
    id: "AC_013",
    taskType: "academic",
    topic: "Medicine",
    title: "The Immune System",
    passage: `The immune system is a complex network of cells, tissues, and organs that work together to defend the body against harmful pathogens, including bacteria, viruses, parasites, and fungi. This defense system operates through two main components: innate immunity and adaptive immunity.

Innate immunity provides the first line of defense and responds quickly but non-specifically to invaders. Physical barriers like skin and mucous membranes prevent pathogen entry, while cells such as neutrophils and macrophages engulf and destroy foreign organisms through a process called phagocytosis. Inflammation is another innate response that brings immune cells to sites of infection.

Adaptive immunity develops more slowly but provides highly specific and long-lasting protection. It relies on lymphocytes, particularly B cells and T cells. B cells produce antibodies, proteins that recognize and bind to specific antigens on pathogens, marking them for destruction. T cells directly attack infected cells or help coordinate the immune response. The adaptive immune system also creates memory cells that allow faster, stronger responses to previously encountered pathogens—the principle behind vaccination.`,
    wordCount: 178,
    questions: [
      {
        question: "What does the immune system protect against?",
        options: ["Only bacteria", "Only viruses", "Harmful pathogens including bacteria, viruses, parasites, and fungi", "Only parasites"],
        correctAnswer: "Harmful pathogens including bacteria, viruses, parasites, and fungi",
        explanation: "The passage lists 'harmful pathogens, including bacteria, viruses, parasites, and fungi.'"
      },
      {
        question: "What characterizes innate immunity?",
        options: ["Slow and specific response", "Quick but non-specific response", "Creates antibodies", "Develops over time"],
        correctAnswer: "Quick but non-specific response",
        explanation: "The passage states 'Innate immunity provides the first line of defense and responds quickly but non-specifically.'"
      },
      {
        question: "What is phagocytosis?",
        options: ["Antibody production", "The process of cells engulfing and destroying organisms", "Inflammation", "Memory cell creation"],
        correctAnswer: "The process of cells engulfing and destroying organisms",
        explanation: "The passage describes 'cells such as neutrophils and macrophages engulf and destroy foreign organisms through a process called phagocytosis.'"
      },
      {
        question: "What do B cells produce?",
        options: ["Memory cells", "Antigens", "Antibodies", "Pathogens"],
        correctAnswer: "Antibodies",
        explanation: "The passage states 'B cells produce antibodies, proteins that recognize and bind to specific antigens.'"
      },
      {
        question: "What is the principle behind vaccination?",
        options: ["Destroying all pathogens immediately", "Creating memory cells for faster future responses", "Stopping innate immunity", "Preventing inflammation"],
        correctAnswer: "Creating memory cells for faster future responses",
        explanation: "The passage mentions 'memory cells that allow faster, stronger responses to previously encountered pathogens—the principle behind vaccination.'"
      }
    ]
  },
  {
    id: "AC_014",
    taskType: "academic",
    topic: "Literature",
    title: "The Novel as Literary Form",
    passage: `The novel emerged as a distinct literary form in 18th-century England, though prose narratives existed in various forms throughout history. Unlike earlier literary forms such as epic poetry and drama, the novel focused on realistic portrayals of ordinary people and everyday life, making it accessible to a growing middle-class readership.

Several factors contributed to the novel's rise. Increased literacy rates, the growth of printing technology, and the emergence of lending libraries made books more accessible. The development of coffee houses and salons created spaces for literary discussion, while newspapers and periodicals serialized fiction, building audiences for longer works.

Early novelists like Daniel Defoe, Samuel Richardson, and Henry Fielding established key conventions of the form. Defoe's Robinson Crusoe (1719) demonstrated how prose fiction could create believable, individualized characters in realistic settings. Richardson's epistolary novel Pamela (1740) pioneered psychological depth through its focus on a character's inner thoughts and feelings. These innovations laid the groundwork for the novel's evolution into the dominant literary form of the modern era.`,
    wordCount: 175,
    questions: [
      {
        question: "When did the novel emerge as a distinct literary form?",
        options: ["16th-century Italy", "17th-century France", "18th-century England", "19th-century America"],
        correctAnswer: "18th-century England",
        explanation: "The passage states 'The novel emerged as a distinct literary form in 18th-century England.'"
      },
      {
        question: "What made the novel different from earlier forms like epic poetry?",
        options: ["It was written in verse", "It focused on realistic portrayals of ordinary people", "It was shorter", "It was performed on stage"],
        correctAnswer: "It focused on realistic portrayals of ordinary people",
        explanation: "The passage mentions 'the novel focused on realistic portrayals of ordinary people and everyday life.'"
      },
      {
        question: "What is Robinson Crusoe known for demonstrating?",
        options: ["Epistolary writing", "Creating believable characters in realistic settings", "Psychological depth", "Serial publication"],
        correctAnswer: "Creating believable characters in realistic settings",
        explanation: "The passage states 'Defoe's Robinson Crusoe demonstrated how prose fiction could create believable, individualized characters in realistic settings.'"
      },
      {
        question: "What type of novel is Pamela?",
        options: ["Adventure novel", "Epistolary novel", "Historical novel", "Gothic novel"],
        correctAnswer: "Epistolary novel",
        explanation: "The passage mentions 'Richardson's epistolary novel Pamela.'"
      },
      {
        question: "What factor helped make books more accessible?",
        options: ["Government subsidies", "Lending libraries", "Handwritten copies", "Religious institutions"],
        correctAnswer: "Lending libraries",
        explanation: "The passage lists 'the emergence of lending libraries made books more accessible.'"
      }
    ]
  },
  {
    id: "AC_015",
    taskType: "academic",
    topic: "Computer Science",
    title: "Artificial Intelligence",
    passage: `Artificial intelligence (AI) refers to the simulation of human intelligence processes by computer systems. These processes include learning, reasoning, problem-solving, perception, and language understanding. The field was formally founded in 1956 at a conference at Dartmouth College, though the concept of thinking machines dates back centuries.

AI can be categorized into two types. Narrow AI, also called weak AI, is designed to perform specific tasks, such as voice recognition, image classification, or playing chess. This type of AI is already widespread in applications like virtual assistants, recommendation systems, and autonomous vehicles. General AI, or strong AI, would possess human-like cognitive abilities across a wide range of tasks, but this remains theoretical and has not yet been achieved.

Machine learning, a subset of AI, enables systems to learn and improve from experience without being explicitly programmed. Deep learning, which uses neural networks with many layers, has driven recent breakthroughs in areas like natural language processing and computer vision. These advances raise important questions about automation, employment, privacy, and the ethical implications of intelligent machines.`,
    wordCount: 182,
    questions: [
      {
        question: "When was AI formally founded as a field?",
        options: ["1936", "1946", "1956", "1966"],
        correctAnswer: "1956",
        explanation: "The passage states 'The field was formally founded in 1956 at a conference at Dartmouth College.'"
      },
      {
        question: "What is narrow AI designed to do?",
        options: ["Think like humans", "Perform specific tasks", "Replace all human jobs", "Achieve consciousness"],
        correctAnswer: "Perform specific tasks",
        explanation: "The passage explains 'Narrow AI... is designed to perform specific tasks.'"
      },
      {
        question: "What has not yet been achieved in AI?",
        options: ["Voice recognition", "Image classification", "General AI with human-like abilities", "Playing chess"],
        correctAnswer: "General AI with human-like abilities",
        explanation: "The passage mentions 'General AI... remains theoretical and has not yet been achieved.'"
      },
      {
        question: "What enables systems to learn without explicit programming?",
        options: ["Narrow AI", "Strong AI", "Machine learning", "Voice recognition"],
        correctAnswer: "Machine learning",
        explanation: "The passage states 'Machine learning... enables systems to learn and improve from experience without being explicitly programmed.'"
      },
      {
        question: "What has driven recent AI breakthroughs?",
        options: ["Simple algorithms", "Deep learning with neural networks", "Government funding", "Faster typing"],
        correctAnswer: "Deep learning with neural networks",
        explanation: "The passage mentions 'Deep learning, which uses neural networks with many layers, has driven recent breakthroughs.'"
      }
    ]
  },
  {
    id: "AC_016",
    taskType: "academic",
    topic: "Political Science",
    title: "Democracy and Its Forms",
    passage: `Democracy, derived from the Greek words meaning "rule by the people," is a system of government in which citizens exercise power either directly or through elected representatives. While the concept originated in ancient Athens, modern democracies take various forms and operate through different institutional arrangements.

Direct democracy allows citizens to vote on laws and policies themselves, without representatives. This form worked in small city-states like ancient Athens but is impractical for large nations. Today, elements of direct democracy appear in referendums and ballot initiatives, where citizens vote on specific issues.

Representative democracy is the dominant form in modern nation-states. Citizens elect representatives who make decisions on their behalf. This system can take different forms: presidential systems like the United States separate executive and legislative branches, while parliamentary systems like the United Kingdom fuse them, with the executive drawn from the legislature. Constitutional frameworks establish rules that protect individual rights and limit government power, preventing the "tyranny of the majority" that concerned early democratic theorists.`,
    wordCount: 172,
    questions: [
      {
        question: "What does 'democracy' mean in Greek?",
        options: ["Rule by kings", "Rule by the people", "Rule by law", "Rule by the wise"],
        correctAnswer: "Rule by the people",
        explanation: "The passage states 'derived from the Greek words meaning \"rule by the people.\"'"
      },
      {
        question: "Where did democracy originate?",
        options: ["Rome", "Ancient Athens", "England", "France"],
        correctAnswer: "Ancient Athens",
        explanation: "The passage mentions 'the concept originated in ancient Athens.'"
      },
      {
        question: "Why is direct democracy impractical for large nations?",
        options: ["It's too expensive", "Citizens don't want to vote", "It worked only in small city-states", "Representatives prefer it"],
        correctAnswer: "It worked only in small city-states",
        explanation: "The passage states 'This form worked in small city-states like ancient Athens but is impractical for large nations.'"
      },
      {
        question: "How does the US presidential system differ from parliamentary systems?",
        options: ["It has no constitution", "It separates executive and legislative branches", "It has no elections", "It allows direct democracy"],
        correctAnswer: "It separates executive and legislative branches",
        explanation: "The passage explains 'presidential systems like the United States separate executive and legislative branches.'"
      },
      {
        question: "What do constitutional frameworks protect against?",
        options: ["All voting", "Foreign invasion", "Tyranny of the majority", "Economic growth"],
        correctAnswer: "Tyranny of the majority",
        explanation: "The passage mentions 'preventing the \"tyranny of the majority.\"'"
      }
    ]
  },
  {
    id: "AC_017",
    taskType: "academic",
    topic: "Nutrition",
    title: "Macronutrients and Diet",
    passage: `Macronutrients are nutrients that the body requires in large amounts to provide energy and support growth and development. The three primary macronutrients are carbohydrates, proteins, and fats, each playing distinct roles in maintaining health.

Carbohydrates are the body's primary energy source, broken down into glucose that fuels cellular activity. They include simple sugars found in fruits and processed foods, as well as complex carbohydrates in whole grains and vegetables. Complex carbohydrates provide sustained energy and often contain beneficial fiber.

Proteins consist of amino acids, the building blocks used to construct and repair tissues, produce enzymes and hormones, and support immune function. Complete proteins, found in animal products and some plant foods like quinoa, contain all essential amino acids. Fats, though often viewed negatively, are essential for absorbing certain vitamins, insulating organs, and providing long-term energy storage. Unsaturated fats from sources like olive oil and nuts are generally healthier than saturated fats found in red meat and processed foods.`,
    wordCount: 166,
    questions: [
      {
        question: "What are the three primary macronutrients?",
        options: ["Vitamins, minerals, water", "Carbohydrates, proteins, fats", "Fiber, sugar, starch", "Calcium, iron, zinc"],
        correctAnswer: "Carbohydrates, proteins, fats",
        explanation: "The passage states 'The three primary macronutrients are carbohydrates, proteins, and fats.'"
      },
      {
        question: "What is the body's primary energy source?",
        options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
        correctAnswer: "Carbohydrates",
        explanation: "The passage states 'Carbohydrates are the body's primary energy source.'"
      },
      {
        question: "What do proteins consist of?",
        options: ["Glucose", "Fatty acids", "Amino acids", "Simple sugars"],
        correctAnswer: "Amino acids",
        explanation: "The passage mentions 'Proteins consist of amino acids, the building blocks.'"
      },
      {
        question: "What are complete proteins?",
        options: ["Proteins from vegetables only", "Proteins containing all essential amino acids", "Proteins without fat", "Proteins from grains"],
        correctAnswer: "Proteins containing all essential amino acids",
        explanation: "The passage explains 'Complete proteins... contain all essential amino acids.'"
      },
      {
        question: "Which fats are generally healthier?",
        options: ["Saturated fats", "Unsaturated fats", "Fats from red meat", "Processed fats"],
        correctAnswer: "Unsaturated fats",
        explanation: "The passage states 'Unsaturated fats from sources like olive oil and nuts are generally healthier.'"
      }
    ]
  },
  {
    id: "AC_018",
    taskType: "academic",
    topic: "Architecture",
    title: "Gothic Architecture",
    passage: `Gothic architecture emerged in 12th-century France and dominated European building design for the next four centuries. This style represented a dramatic departure from the heavy, fortress-like structures of Romanesque architecture, emphasizing height, light, and intricate decoration.

The defining features of Gothic architecture include pointed arches, ribbed vaults, and flying buttresses. Pointed arches could bear more weight than rounded Romanesque arches, allowing for taller structures. Ribbed vaults distributed weight along a skeleton of stone ribs rather than requiring massive walls for support. Flying buttresses, external arched supports, transferred the weight of high roofs and walls to external piers, freeing interior walls from their structural role.

These innovations allowed Gothic cathedrals to feature large stained-glass windows that filled interiors with colored light—a powerful religious symbol representing divine illumination. The result was soaring interior spaces that directed the viewer's gaze heavenward. Notable examples include Notre-Dame de Paris, Chartres Cathedral, and Westminster Abbey, each demonstrating the style's capacity to inspire awe and devotion.`,
    wordCount: 172,
    questions: [
      {
        question: "Where did Gothic architecture emerge?",
        options: ["12th-century France", "14th-century Italy", "10th-century Germany", "16th-century England"],
        correctAnswer: "12th-century France",
        explanation: "The passage states 'Gothic architecture emerged in 12th-century France.'"
      },
      {
        question: "What could pointed arches do better than rounded arches?",
        options: ["Cost less", "Bear more weight", "Use less stone", "Block more light"],
        correctAnswer: "Bear more weight",
        explanation: "The passage mentions 'Pointed arches could bear more weight than rounded Romanesque arches.'"
      },
      {
        question: "What is the function of flying buttresses?",
        options: ["Decoration only", "Transferring weight to external piers", "Holding stained glass", "Supporting the floor"],
        correctAnswer: "Transferring weight to external piers",
        explanation: "The passage explains 'Flying buttresses... transferred the weight of high roofs and walls to external piers.'"
      },
      {
        question: "What did large stained-glass windows symbolize?",
        options: ["Royal power", "Economic wealth", "Divine illumination", "Military strength"],
        correctAnswer: "Divine illumination",
        explanation: "The passage mentions stained-glass windows as 'a powerful religious symbol representing divine illumination.'"
      },
      {
        question: "Which is NOT mentioned as an example of Gothic architecture?",
        options: ["Notre-Dame de Paris", "Chartres Cathedral", "Westminster Abbey", "The Colosseum"],
        correctAnswer: "The Colosseum",
        explanation: "The passage only mentions Notre-Dame, Chartres, and Westminster Abbey as examples."
      }
    ]
  },
  {
    id: "AC_019",
    taskType: "academic",
    topic: "Ecology",
    title: "Food Webs and Ecosystems",
    passage: `A food web illustrates the complex network of feeding relationships within an ecosystem, showing how energy and nutrients flow through various organisms. Unlike simple food chains that show a linear sequence of who eats whom, food webs reveal the interconnected nature of ecological communities.

At the base of most food webs are producers—primarily photosynthetic organisms like plants, algae, and some bacteria—that convert sunlight into chemical energy. Primary consumers, or herbivores, eat producers, while secondary consumers are carnivores that eat herbivores. Tertiary consumers occupy higher trophic levels, and decomposers break down dead organic matter, returning nutrients to the soil for producers to use.

Energy transfer between trophic levels is inefficient; roughly 90% of energy is lost as heat at each step, limiting the number of levels a food web can support. This explains why top predators like wolves or sharks are relatively rare compared to organisms at lower levels. Changes to any part of a food web can cascade through the system, sometimes with unexpected consequences.`,
    wordCount: 173,
    questions: [
      {
        question: "What does a food web illustrate?",
        options: ["Weather patterns", "Complex feeding relationships in ecosystems", "Plant growth rates", "Migration patterns"],
        correctAnswer: "Complex feeding relationships in ecosystems",
        explanation: "The passage states food webs illustrate 'the complex network of feeding relationships within an ecosystem.'"
      },
      {
        question: "What are producers in a food web?",
        options: ["Carnivores", "Herbivores", "Photosynthetic organisms that convert sunlight to energy", "Decomposers"],
        correctAnswer: "Photosynthetic organisms that convert sunlight to energy",
        explanation: "The passage defines producers as 'primarily photosynthetic organisms... that convert sunlight into chemical energy.'"
      },
      {
        question: "How much energy is lost at each trophic level?",
        options: ["About 10%", "About 50%", "About 90%", "Almost none"],
        correctAnswer: "About 90%",
        explanation: "The passage states 'roughly 90% of energy is lost as heat at each step.'"
      },
      {
        question: "Why are top predators relatively rare?",
        options: ["They live longer", "Energy loss limits populations at higher levels", "They have fewer offspring", "They migrate frequently"],
        correctAnswer: "Energy loss limits populations at higher levels",
        explanation: "The passage explains this is due to energy loss 'limiting the number of levels a food web can support.'"
      },
      {
        question: "What role do decomposers play?",
        options: ["Eating herbivores", "Converting sunlight", "Breaking down dead matter and returning nutrients", "Hunting prey"],
        correctAnswer: "Breaking down dead matter and returning nutrients",
        explanation: "The passage states 'decomposers break down dead organic matter, returning nutrients to the soil.'"
      }
    ]
  },
  {
    id: "AC_020",
    taskType: "academic",
    topic: "Music History",
    title: "The Development of Jazz",
    passage: `Jazz originated in the late 19th and early 20th centuries in New Orleans, Louisiana, emerging from a blend of African American musical traditions, blues, ragtime, and European harmonies. This distinctly American art form would go on to influence virtually every genre of popular music that followed.

Early jazz was characterized by collective improvisation, where multiple musicians spontaneously created interlocking melodies over a rhythm section. The music featured swing rhythms, blue notes, and call-and-response patterns inherited from African musical traditions. New Orleans musicians like Louis Armstrong and King Oliver pioneered the style, with Armstrong's innovative trumpet solos helping establish the importance of individual improvisation.

The jazz age of the 1920s saw the music spread to Chicago and New York, evolving into big band swing in the 1930s. The 1940s brought bebop, a faster, more complex style pioneered by Charlie Parker and Dizzy Gillespie. Subsequent decades saw cool jazz, hard bop, free jazz, and fusion, demonstrating the genre's remarkable capacity for reinvention while maintaining its core emphasis on improvisation and personal expression.`,
    wordCount: 182,
    questions: [
      {
        question: "Where did jazz originate?",
        options: ["New York City", "Chicago", "New Orleans", "Memphis"],
        correctAnswer: "New Orleans",
        explanation: "The passage states 'Jazz originated in the late 19th and early 20th centuries in New Orleans, Louisiana.'"
      },
      {
        question: "What characterized early jazz?",
        options: ["Solo performances", "Collective improvisation", "Written compositions only", "Electronic instruments"],
        correctAnswer: "Collective improvisation",
        explanation: "The passage mentions 'Early jazz was characterized by collective improvisation.'"
      },
      {
        question: "Who helped establish the importance of individual improvisation?",
        options: ["Charlie Parker", "Louis Armstrong", "Dizzy Gillespie", "Duke Ellington"],
        correctAnswer: "Louis Armstrong",
        explanation: "The passage states 'Armstrong's innovative trumpet solos helping establish the importance of individual improvisation.'"
      },
      {
        question: "What style emerged in the 1940s?",
        options: ["Swing", "Bebop", "Cool jazz", "Fusion"],
        correctAnswer: "Bebop",
        explanation: "The passage mentions 'The 1940s brought bebop, a faster, more complex style.'"
      },
      {
        question: "What is jazz's core emphasis across all its styles?",
        options: ["Classical structure", "Improvisation and personal expression", "Electronic sounds", "Simple melodies"],
        correctAnswer: "Improvisation and personal expression",
        explanation: "The passage mentions 'its core emphasis on improvisation and personal expression.'"
      }
    ]
  },
  {
    id: "AC_021",
    taskType: "academic",
    topic: "Oceanography",
    title: "Ocean Currents",
    passage: `Ocean currents are continuous, directed movements of seawater that play a crucial role in regulating Earth's climate and distributing heat around the planet. These vast rivers within the ocean are driven by wind, differences in water density, and the rotation of the Earth.

Surface currents, affecting the upper 400 meters of the ocean, are primarily driven by wind patterns. The trade winds push water westward near the equator, while westerlies drive water eastward at higher latitudes. The Coriolis effect, caused by Earth's rotation, deflects currents to the right in the Northern Hemisphere and to the left in the Southern Hemisphere, creating circular patterns called gyres.

Deep ocean currents, known as thermohaline circulation, are driven by differences in water density caused by variations in temperature and salinity. Cold, salty water is denser and sinks, while warmer, fresher water rises. This global "conveyor belt" moves water between the surface and deep ocean over centuries, distributing heat and nutrients. Changes to this circulation could have significant impacts on global climate patterns.`,
    wordCount: 179,
    questions: [
      {
        question: "What are ocean currents?",
        options: ["Random water movements", "Continuous, directed movements of seawater", "Still water areas", "Underground rivers"],
        correctAnswer: "Continuous, directed movements of seawater",
        explanation: "The passage defines them as 'continuous, directed movements of seawater.'"
      },
      {
        question: "What primarily drives surface currents?",
        options: ["Temperature differences", "Wind patterns", "Salinity", "Earthquakes"],
        correctAnswer: "Wind patterns",
        explanation: "The passage states 'Surface currents... are primarily driven by wind patterns.'"
      },
      {
        question: "What is the Coriolis effect?",
        options: ["A type of wave", "Deflection caused by Earth's rotation", "A temperature change", "A kind of fish"],
        correctAnswer: "Deflection caused by Earth's rotation",
        explanation: "The passage explains 'The Coriolis effect, caused by Earth's rotation, deflects currents.'"
      },
      {
        question: "What drives thermohaline circulation?",
        options: ["Wind alone", "Differences in water density from temperature and salinity", "Earthquakes", "Moon's gravity"],
        correctAnswer: "Differences in water density from temperature and salinity",
        explanation: "The passage mentions 'driven by differences in water density caused by variations in temperature and salinity.'"
      },
      {
        question: "What does the global 'conveyor belt' distribute?",
        options: ["Fish populations", "Heat and nutrients", "Salt only", "Pollution"],
        correctAnswer: "Heat and nutrients",
        explanation: "The passage states this system 'distributing heat and nutrients.'"
      }
    ]
  },
  {
    id: "AC_022",
    taskType: "academic",
    topic: "Philosophy",
    title: "Ethical Theories",
    passage: `Ethical theories provide frameworks for determining what actions are right or wrong, good or bad. While people often make moral judgments intuitively, these theories offer systematic approaches to ethical reasoning that can help resolve complex dilemmas.

Consequentialist theories, such as utilitarianism, judge actions based on their outcomes. An action is right if it produces the greatest good for the greatest number of people. This approach requires calculating and comparing the consequences of different choices, sometimes leading to conclusions that conflict with common moral intuitions, such as justifying harm to one person if it benefits many others.

Deontological ethics, associated with philosopher Immanuel Kant, focuses on duties and rules rather than consequences. Certain actions are inherently right or wrong, regardless of their outcomes. Kant's categorical imperative suggests we should act only according to principles we could will to become universal laws. Virtue ethics, dating back to Aristotle, emphasizes character development rather than specific actions or outcomes. On this view, ethical behavior flows from cultivating virtues like courage, honesty, and compassion.`,
    wordCount: 176,
    questions: [
      {
        question: "What do ethical theories provide?",
        options: ["Scientific facts", "Frameworks for determining right and wrong", "Legal codes", "Religious doctrines"],
        correctAnswer: "Frameworks for determining right and wrong",
        explanation: "The passage states 'Ethical theories provide frameworks for determining what actions are right or wrong.'"
      },
      {
        question: "How does utilitarianism judge actions?",
        options: ["By their intentions", "Based on outcomes and greatest good", "By following rules", "By tradition"],
        correctAnswer: "Based on outcomes and greatest good",
        explanation: "The passage explains that in utilitarianism 'An action is right if it produces the greatest good for the greatest number.'"
      },
      {
        question: "What does deontological ethics focus on?",
        options: ["Consequences", "Duties and rules", "Character", "Feelings"],
        correctAnswer: "Duties and rules",
        explanation: "The passage states 'Deontological ethics... focuses on duties and rules rather than consequences.'"
      },
      {
        question: "Who is associated with the categorical imperative?",
        options: ["Aristotle", "Plato", "Immanuel Kant", "John Stuart Mill"],
        correctAnswer: "Immanuel Kant",
        explanation: "The passage mentions 'Kant's categorical imperative.'"
      },
      {
        question: "What does virtue ethics emphasize?",
        options: ["Following rules strictly", "Calculating consequences", "Character development", "Religious teachings"],
        correctAnswer: "Character development",
        explanation: "The passage states 'Virtue ethics... emphasizes character development rather than specific actions or outcomes.'"
      }
    ]
  },
  {
    id: "AC_023",
    taskType: "academic",
    topic: "Statistics",
    title: "Understanding Probability",
    passage: `Probability is the mathematical study of random events and uncertainty. It provides tools for quantifying how likely different outcomes are and forms the foundation for statistics, which uses data to make inferences about populations.

The probability of an event is expressed as a number between 0 and 1, where 0 means the event is impossible and 1 means it is certain. A probability of 0.5 indicates a 50% chance—like a fair coin landing on heads. Probabilities can be determined theoretically, using mathematical principles, or empirically, by observing the frequency of outcomes in experiments or real-world data.

Two important concepts are independent and dependent events. Independent events don't affect each other's probabilities; the outcome of one coin flip doesn't change the probability of the next. Dependent events are connected; drawing a card from a deck changes the probabilities for subsequent draws. The law of large numbers states that as the number of trials increases, the observed frequency of an outcome approaches its true probability, explaining why casinos profit over time despite individual gamblers sometimes winning.`,
    wordCount: 182,
    questions: [
      {
        question: "What does a probability of 1 indicate?",
        options: ["Impossible event", "Certain event", "50% chance", "Random event"],
        correctAnswer: "Certain event",
        explanation: "The passage states '1 means it is certain.'"
      },
      {
        question: "What probability represents a fair coin landing on heads?",
        options: ["0", "0.25", "0.5", "1"],
        correctAnswer: "0.5",
        explanation: "The passage mentions 'A probability of 0.5 indicates a 50% chance—like a fair coin landing on heads.'"
      },
      {
        question: "What characterizes independent events?",
        options: ["They always happen together", "They don't affect each other's probabilities", "They are impossible", "They are certain"],
        correctAnswer: "They don't affect each other's probabilities",
        explanation: "The passage explains 'Independent events don't affect each other's probabilities.'"
      },
      {
        question: "What is an example of dependent events?",
        options: ["Coin flips", "Drawing cards from a deck", "Rolling dice", "Spinning a roulette wheel"],
        correctAnswer: "Drawing cards from a deck",
        explanation: "The passage mentions 'drawing a card from a deck changes the probabilities for subsequent draws.'"
      },
      {
        question: "What does the law of large numbers explain?",
        options: ["Why gamblers always lose", "Why observed frequency approaches true probability over time", "Why probability is always 0.5", "Why events are random"],
        correctAnswer: "Why observed frequency approaches true probability over time",
        explanation: "The passage explains 'as the number of trials increases, the observed frequency of an outcome approaches its true probability.'"
      }
    ]
  },
  {
    id: "AC_024",
    taskType: "academic",
    topic: "Communication",
    title: "Nonverbal Communication",
    passage: `Nonverbal communication encompasses all the ways humans convey meaning without words, including facial expressions, gestures, posture, eye contact, touch, and vocal qualities like tone and pitch. Research suggests that nonverbal cues may account for more than half of the total meaning in face-to-face interactions.

Facial expressions are remarkably consistent across cultures for basic emotions like happiness, sadness, fear, anger, surprise, and disgust. However, many nonverbal behaviors are culturally specific. Eye contact norms vary significantly: direct eye contact shows respect in some cultures but is considered rude or challenging in others. The amount of personal space people prefer also differs by culture, with some societies favoring closer proximity during conversation.

Nonverbal communication often reveals true feelings when verbal messages are contradictory or deceptive. People may claim to be calm while their body language—crossed arms, fidgeting, avoiding eye contact—suggests anxiety. This incongruence between verbal and nonverbal channels is why nonverbal cues are often considered more reliable indicators of genuine emotional states.`,
    wordCount: 168,
    questions: [
      {
        question: "What does nonverbal communication encompass?",
        options: ["Only words", "Ways of conveying meaning without words", "Written language only", "Sign language only"],
        correctAnswer: "Ways of conveying meaning without words",
        explanation: "The passage defines it as 'all the ways humans convey meaning without words.'"
      },
      {
        question: "How much meaning may nonverbal cues account for in face-to-face interactions?",
        options: ["Less than 10%", "About 25%", "More than half", "Almost none"],
        correctAnswer: "More than half",
        explanation: "The passage states 'nonverbal cues may account for more than half of the total meaning.'"
      },
      {
        question: "What is consistent across cultures regarding facial expressions?",
        options: ["All nonverbal behaviors", "Basic emotions like happiness, sadness, fear, anger, surprise, and disgust", "Eye contact norms", "Personal space preferences"],
        correctAnswer: "Basic emotions like happiness, sadness, fear, anger, surprise, and disgust",
        explanation: "The passage mentions 'Facial expressions are remarkably consistent across cultures for basic emotions.'"
      },
      {
        question: "What varies significantly by culture?",
        options: ["Basic emotions", "Facial muscles", "Eye contact norms", "Breathing patterns"],
        correctAnswer: "Eye contact norms",
        explanation: "The passage states 'Eye contact norms vary significantly.'"
      },
      {
        question: "Why are nonverbal cues considered more reliable?",
        options: ["They are louder", "They reveal true feelings when verbal messages are deceptive", "They are easier to control", "They are universal"],
        correctAnswer: "They reveal true feelings when verbal messages are deceptive",
        explanation: "The passage explains 'Nonverbal communication often reveals true feelings when verbal messages are contradictory or deceptive.'"
      }
    ]
  },
  {
    id: "AC_025",
    taskType: "academic",
    topic: "Urban Studies",
    title: "Urbanization and Its Effects",
    passage: `Urbanization refers to the increasing proportion of a population living in urban areas, one of the most significant demographic trends of the modern era. In 1800, only about 3% of the world's population lived in cities; by 2050, that figure is projected to reach nearly 70%. This shift has profound implications for society, the economy, and the environment.

Cities offer economic opportunities, services, and cultural amenities that attract migrants from rural areas. Urban areas typically provide better access to education, healthcare, and employment. The concentration of people and businesses creates efficiencies through shared infrastructure and facilitates innovation through the exchange of ideas.

However, rapid urbanization presents significant challenges. Housing shortages can lead to informal settlements and homelessness. Traffic congestion increases commute times and air pollution. Strain on water supplies, sanitation systems, and waste management can threaten public health. Urban heat islands, where cities are significantly warmer than surrounding rural areas, exacerbate the effects of climate change. Addressing these challenges requires thoughtful urban planning and sustainable development strategies.`,
    wordCount: 175,
    questions: [
      {
        question: "What percentage of the world lived in cities in 1800?",
        options: ["About 3%", "About 25%", "About 50%", "About 70%"],
        correctAnswer: "About 3%",
        explanation: "The passage states 'In 1800, only about 3% of the world's population lived in cities.'"
      },
      {
        question: "What percentage is projected to live in cities by 2050?",
        options: ["About 30%", "About 50%", "Nearly 70%", "About 90%"],
        correctAnswer: "Nearly 70%",
        explanation: "The passage mentions 'by 2050, that figure is projected to reach nearly 70%.'"
      },
      {
        question: "What do cities offer that attracts migrants?",
        options: ["Lower costs only", "Economic opportunities, services, and cultural amenities", "Simpler lifestyle", "Rural living"],
        correctAnswer: "Economic opportunities, services, and cultural amenities",
        explanation: "The passage states 'Cities offer economic opportunities, services, and cultural amenities that attract migrants.'"
      },
      {
        question: "What is an urban heat island?",
        options: ["A tropical city", "An area where cities are warmer than surrounding rural areas", "A coastal city", "A desert city"],
        correctAnswer: "An area where cities are warmer than surrounding rural areas",
        explanation: "The passage defines it as 'where cities are significantly warmer than surrounding rural areas.'"
      },
      {
        question: "What can housing shortages lead to?",
        options: ["Lower prices", "Informal settlements and homelessness", "Better construction", "Fewer residents"],
        correctAnswer: "Informal settlements and homelessness",
        explanation: "The passage states 'Housing shortages can lead to informal settlements and homelessness.'"
      }
    ]
  }
];

// Export counts and combined arrays
export const COMPLETE_WORDS_COUNT = completeWordsQuestions.length;
export const DAILY_LIFE_COUNT = dailyLifeQuestions.length;
export const ACADEMIC_COUNT = academicQuestions.length;

// Combined reading questions
export const allReadingQuestions: ReadingQuestion[] = [
  ...completeWordsQuestions,
  ...dailyLifeQuestions,
  ...academicQuestions
];

// Calculate total question count
export const TOTAL_READING_QUESTIONS =
  COMPLETE_WORDS_COUNT + // Complete words passages (each has ~10 blanks)
  dailyLifeQuestions.reduce((sum, q) => sum + q.questions.length, 0) + // Daily life MCQs
  academicQuestions.reduce((sum, q) => sum + q.questions.length, 0); // Academic MCQs
