export interface ConstitutionArticle {
  article_number: string;
  article_title: string;
  chapter: string;
  part: string;
  page_number: number;
  chunk_id: string;
  text: string;
  summary: string;
}

export const CONSTITUTION_ARTICLES: ConstitutionArticle[] = [
  {
    article_number: "Preamble",
    article_title: "Preamble to the Constitution of the Islamic Republic of Pakistan",
    chapter: "Preamble",
    part: "Preamble",
    page_number: 1,
    chunk_id: "preamble",
    text: "Whereas sovereignty over the entire Universe belongs to Almighty Allah alone, and the authority to be exercised by the people of Pakistan within the limits prescribed by Him is a sacred trust;\nAnd whereas it is the will of the people of Pakistan to establish an order;\nWherein the State shall exercise its powers and authority through the chosen representatives of the people;\nWherein the principles of democracy, freedom, equality, tolerance and social justice, as enunciated by Islam, shall be fully observed;\nWherein the Muslims shall be enabled to order their lives in the individual and collective spheres in accordance with the teachings and requirements of Islam as set out in the Holy Quran and Sunnah;\nWherein adequate provision shall be made for the minorities freely to profess and practise their religions and develop their cultures;\nWherein the territories now included in or in accession with Pakistan and such other territories as may hereafter be included in or accede to Pakistan shall form a Federation wherein the units will be autonomous with such boundaries and limitations on their powers and authority as may be prescribed;\nWherein shall be guaranteed fundamental rights, including equality of status, of opportunity and before law, social, economic and political justice, and freedom of thought, expression, belief, faith, worship and association, subject to law and public morality;\nWherein adequate provision shall be made to safeguard the legitimate interests of minorities and backward and depressed classes;\nWherein the independence of the judiciary shall be fully secured;\nWherein the integrity of the territories of the Federation, its independence and all its rights, including its sovereign rights on land, sea and air, shall be safeguarded;\nSo that the people of Pakistan may prosper and attain their rightful and honoured place amongst the nations of the World and make their full contribution towards international peace and progress and happiness of humanity;\nNow, therefore, we, the people of Pakistan;\nConscious of our responsibility before Almighty Allah and men;\nCognisant of the sacrifices made by the people in the cause of Pakistan;\nFaithful to the declaration made by the Founder of Pakistan, Quaid-i-Azam Mohammad Ali Jinnah, that Pakistan would be a democratic State based on Islamic principles of social justice;\nDedicated to the preservation of democracy achieved by the unremitting struggle of the people against oppression and tyranny;\nInspired by the resolve to protect our national and political unity and solidarity by creating an egalitarian society through a new order;\nDo hereby, through our representatives in the National Assembly, adopt, enact and give to ourselves, this Constitution.",
    summary: "Establishes divine sovereignty of Allah, democratic governance via elected representatives, Islamic principles, judicial independence, fundamental rights, and protection of minorities."
  },
  {
    article_number: "1",
    article_title: "The Republic and its territories",
    chapter: "Introductory",
    part: "Part I",
    page_number: 3,
    chunk_id: "article_1",
    text: "(1) Pakistan shall be Federal Republic to be known as the Islamic Republic of Pakistan, hereinafter referred to as Pakistan.\n(2) The territories of Pakistan shall comprise—\n(a) the Provinces of Balochistan, the Khyber Pakhtunkhwa, the Punjab and Sindh;\n(b) the Islamabad Capital Territory, hereinafter referred to as the Federal Capital;\n(c) the Federally Administered Tribal Areas; and\n(d) such States and territories as are or may be included in Pakistan, whether by accession or otherwise.\n(3) Majlis-e-Shoora (Parliament) may by law admit into the Federation new States or areas on such terms and conditions as it thinks fit.",
    summary: "Defines Pakistan as the Islamic Republic of Pakistan and lists its constituent provinces and federal territories."
  },
  {
    article_number: "2",
    article_title: "Islam to be State religion",
    chapter: "Introductory",
    part: "Part I",
    page_number: 3,
    chunk_id: "article_2",
    text: "Islam shall be the State religion of Pakistan.",
    summary: "Declares Islam as the official State religion of Pakistan."
  },
  {
    article_number: "2A",
    article_title: "The Objectives Resolution to form part of substantive provisions",
    chapter: "Introductory",
    part: "Part I",
    page_number: 3,
    chunk_id: "article_2a",
    text: "The principles and provisions set out in the Objectives Resolution reproduced in the Annex are hereby made substantive part of the Constitution and shall have effect accordingly.",
    summary: "Incorporates the 1949 Objectives Resolution as a substantive, enforceable part of the Constitution."
  },
  {
    article_number: "3",
    article_title: "Elimination of exploitation",
    chapter: "Introductory",
    part: "Part I",
    page_number: 4,
    chunk_id: "article_3",
    text: "The State shall ensure the elimination of all forms of exploitation and the gradual fulfillment of the fundamental principle, from each according to his ability to each according to his work.",
    summary: "Mandates the State to eliminate all forms of exploitation."
  },
  {
    article_number: "4",
    article_title: "Right of individuals to be dealt with in accordance with law, etc.",
    chapter: "Introductory",
    part: "Part I",
    page_number: 4,
    chunk_id: "article_4",
    text: "(1) To enjoy the protection of law and to be treated in accordance with law is the inalienable right of every citizen, wherever he may be, and of every other person for the time being within Pakistan.\n(2) In particular—\n(a) no action detrimental to the life, liberty, body, reputation or property of any person shall be taken except in accordance with law;\n(b) no person shall be prevented from or be hindered in doing that which is not prohibited by law; and\n(c) no person shall be compelled to do that which the law does not require him to do.",
    summary: "Establishes the inalienable right to protection of law and the rule of law for all citizens and individuals in Pakistan."
  },
  {
    article_number: "5",
    article_title: "Loyalty to State and obedience to Constitution and law",
    chapter: "Introductory",
    part: "Part I",
    page_number: 4,
    chunk_id: "article_5",
    text: "(1) Loyalty to the State is the basic duty of every citizen.\n(2) Obedience to the Constitution and law is the inviolable obligation of every citizen wherever he may be and of every other person for the time being within Pakistan.",
    summary: "Establishes loyalty to the State as a basic duty and obedience to the Constitution as an inviolable obligation."
  },
  {
    article_number: "6",
    article_title: "High treason",
    chapter: "Introductory",
    part: "Part I",
    page_number: 4,
    chunk_id: "article_6",
    text: "(1) Any person who abrogates or subverts or suspends or holds in abeyance, or attempts or conspires to abrogate or subvert or suspend or hold in abeyance, the Constitution by use of force or show of force or by any other unconstitutional means shall be guilty of high treason.\n(2) Any person aiding or abetting or collaborating the acts mentioned in clause (1) shall likewise be guilty of high treason.\n(2A) An act of high treason mentioned in clause (1) or clause (2) shall not be validated by any court including the Supreme Court and a High Court.\n(3) Majlis-e-Shoora (Parliament) shall by law provide for the punishment of persons found guilty of high treason.",
    summary: "Defines subversion or abrogation of the Constitution as High Treason, barring judicial validation."
  },
  {
    article_number: "7",
    article_title: "Definition of the State",
    chapter: "Introductory",
    part: "Part II",
    page_number: 6,
    chunk_id: "article_7",
    text: "In this Part, unless the context otherwise requires, \"the State\" means the Federal Government, Majlis-e-Shoora (Parliament), a Provincial Government, a Provincial Assembly, and such local or other authorities in Pakistan as are by law empowered to impose any tax or cess.",
    summary: "Defines 'the State' for Part II to include Federal and Provincial Governments, Parliament, Assemblies, and tax-empowered local authorities."
  },
  {
    article_number: "8",
    article_title: "Laws inconsistent with or in derogation of Fundamental Rights to be void",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 6,
    chunk_id: "article_8",
    text: "(1) Any law, or any custom or usage having the force of law, in so far as it is inconsistent with the rights conferred by this Chapter, shall, to the extent of such inconsistency, be void.\n(2) The State shall not make any law which takes away or abridges the rights so conferred and any law made in contravention of this clause shall, to the extent of the contravention, be void.\n(3) The Provisions of this Article shall not apply to—\n(a) any law relating to members of the Armed Forces, or of the police or of such other forces as are charged with the maintenance of public order, for the purpose of ensuring the proper discharge of their duties or the maintenance of discipline among them; or\n(b) any of the —\n(i) laws specified in the First Schedule as in force immediately before the commencing day or as amended by any of the laws specified in that Schedule;\n(ii) other laws specified in Part I of the First Schedule;\nand no such law nor any provision thereof shall be void on the ground that such law or provision is inconsistent with, or repugnant to, any provision of this Chapter.\n(4) Notwithstanding anything contained in paragraph (b) of clause (3), within a period of two years from the commencing day, the appropriate Legislature shall bring the laws specified in Part II of the First Schedule into conformity with the rights conferred by this Chapter:\nProvided that the appropriate Legislature may by resolution extend the said period of two years by a period not exceeding six months.\nExplanation.– If in respect of any law Majlis-e-Shoora (Parliament) is the appropriate Legislature, such resolution shall be a resolution of the National Assembly.\n(5) The rights conferred by this Chapter shall not be suspended except as expressly provided by the Constitution.",
    summary: "Declares any law or custom inconsistent with Fundamental Rights to be void."
  },
  {
    article_number: "9",
    article_title: "Security of person",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 7,
    chunk_id: "article_9",
    text: "No person shall be deprived of life or liberty save in accordance with law.",
    summary: "Guarantees that no person shall be deprived of life or liberty except in accordance with law."
  },
  {
    article_number: "10",
    article_title: "Safeguards as to arrest and detention",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 7,
    chunk_id: "article_10",
    text: "(1) No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds for such arrest, nor shall he be denied the right to consult and be defended by a legal practitioner of his choice.\n(2) Every person who is arrested and detained in custody shall be produced before a magistrate within a period of twenty-four hours of such arrest, excluding the time necessary for the journey from the place of arrest to the court of the nearest magistrate, and no such person shall be detained in custody beyond the said period without the authority of a magistrate.\n(3) Nothing in clauses (1) and (2) shall apply to any person who is arrested or detained under any law providing for preventive detention.\n(4) No law providing for preventive detention shall be made except to deal with persons acting in a manner prejudicial to the integrity, security or defence of Pakistan or any part thereof, or external affairs of Pakistan, or public order, or the maintenance of supplies or services, and no such law shall authorise the detention of a person for a period exceeding three months unless the appropriate Review Board has, after affording him an opportunity of being heard in person, reviewed his case and reported, before the expiration of the said period, that there is, in its opinion, sufficient cause for such detention...\n(5) When any person is detained in pursuance of an order made under any law providing for preventive detention, the authority making the order shall, within fifteen days from such detention, communicate to such person the grounds on which the order has been made, and shall afford him the earliest opportunity of making a representation against the order.\n(6) The authority making the order shall furnish to the appropriate Review Board all documents relevant to the case...\n(7) Within a period of twenty-four months commencing on the day of his first detention... no person shall be detained for more than 8 months for public order or 12 months in other cases...\n(8) The appropriate Review Board shall determine the place of detention and fix reasonable subsistence allowance.\n(9) Nothing in this Article shall apply to enemy aliens.",
    summary: "Provides mandatory safeguards upon arrest including grounds disclosure, legal defense, 24-hour magistrate production, and review board limits on preventive detention."
  },
  {
    article_number: "10A",
    article_title: "Right to fair trial",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 9,
    chunk_id: "article_10a",
    text: "For the determination of his civil rights and obligations or in any criminal charge against him a person shall be entitled to a fair trial and due process.",
    summary: "Guarantees the fundamental right to a fair trial and due process in all civil and criminal matters."
  },
  {
    article_number: "11",
    article_title: "Slavery, forced labour, etc., prohibited",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 9,
    chunk_id: "article_11",
    text: "(1) Slavery is non-existent and forbidden and no law shall permit or facilitate its introduction into Pakistan in any form.\n(2) All forms of forced labour and traffic in human beings are prohibited.\n(3) No child below the age of fourteen years shall be engaged in any factory or mine or any other hazardous employment.\n(4) Nothing in this Article shall be deemed to affect compulsory service—\n(a) by any person undergoing punishment for an offence against any law; or\n(b) required by any law for public purpose:\nProvided that no compulsory service shall be of a cruel nature or incompatible with human dignity.",
    summary: "Prohibits slavery, human trafficking, forced labor, and child labor under 14 in hazardous work."
  },
  {
    article_number: "12",
    article_title: "Protection against retrospective punishment",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 10,
    chunk_id: "article_12",
    text: "(1) No law shall authorize the punishment of a person—\n(a) for an act or omission that was not punishable by law at the time of the act or omission; or\n(b) for an offence by a penalty greater than, or of a kind different from, the penalty prescribed by law for that offence at the time the offence was committed.\n(2) Nothing in clause (1) or in Article 270 shall apply to any law making acts of abrogation or subversion of a Constitution in force in Pakistan at any time since the twenty-third day of March, 1956, an offence.",
    summary: "Protects against ex-post facto laws and retroactively increased penalties."
  },
  {
    article_number: "13",
    article_title: "Protection against double punishment and self incrimination",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 10,
    chunk_id: "article_13",
    text: "No person—\n(a) shall be prosecuted or punished for the same offence more than once; or\n(b) shall, when accused of an offence, be compelled to be a witness against himself.",
    summary: "Protects citizens against double jeopardy and forced self-incrimination."
  },
  {
    article_number: "14",
    article_title: "Inviolability of dignity of man, etc.",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 10,
    chunk_id: "article_14",
    text: "(1) The dignity of man and, subject to law, the privacy of home, shall be inviolable.\n(2) No person shall be subjected to torture for the purpose of extracting evidence.",
    summary: "Guarantees human dignity and privacy of home, strictly prohibiting custodial torture."
  },
  {
    article_number: "15",
    article_title: "Freedom of movement, etc.",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 11,
    chunk_id: "article_15",
    text: "Every citizen shall have the right to remain in, and, subject to any reasonable restriction imposed by law in the public interest, enter and move freely throughout Pakistan and to reside and settle in any part thereof.",
    summary: "Guarantees freedom of movement, residence, and settlement throughout Pakistan."
  },
  {
    article_number: "16",
    article_title: "Freedom of assembly",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 11,
    chunk_id: "article_16",
    text: "Every citizen shall have the right to assemble peacefully and without arms, subject to any reasonable restrictions imposed by law in the interest of public order.",
    summary: "Guarantees the right to peaceful assembly without weapons."
  },
  {
    article_number: "17",
    article_title: "Freedom of association",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 11,
    chunk_id: "article_17",
    text: "(1) Every citizen shall have the right to form associations or unions, subject to any reasonable restrictions imposed by law in the interest of sovereignty or integrity of Pakistan, public order or morality.\n(2) Every citizen, not being in the service of Pakistan, shall have the right to form or be a member of a political party, subject to any reasonable restrictions imposed by law in the interest of the sovereignty or integrity of Pakistan and such law shall provide that where the Federal Government declares that any political party has been formed or is operating in a manner prejudicial to the sovereignty or integrity of Pakistan, the Federal Government shall, within fifteen days of such declaration, refer the matter to the Supreme Court whose decision on such reference shall be final.\n(3) Every political party shall account for the source of its funds in accordance with law.",
    summary: "Guarantees right to form associations, trade unions, and political parties, subject to public order and judicial reference."
  },
  {
    article_number: "18",
    article_title: "Freedom of trade, business or profession",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 11,
    chunk_id: "article_18",
    text: "Subject to such qualifications, if any, as may be prescribed by law, every citizen shall have the right to enter upon any lawful profession or occupation, and to conduct any lawful trade or business:\nProvided that nothing in this Article shall prevent—\n(a) the regulation of any trade or profession by a licensing system; or\n(b) the regulation of trade, commerce or industry in the interest of free competition therein; or\n(c) the carrying on, by the Federal Government or a Provincial Government, or by a corporation controlled by any such Government, of any trade, business, industry or service, to the exclusion, complete or partial, of other persons.",
    summary: "Guarantees freedom to enter any lawful profession, trade, or business."
  },
  {
    article_number: "19",
    article_title: "Freedom of speech, etc.",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 12,
    chunk_id: "article_19",
    text: "Every citizen shall have the right to freedom of speech and expression, and there shall be freedom of the press, subject to any reasonable restrictions imposed by law in the interest of the glory of Islam or the integrity, security or defence of Pakistan or any part thereof, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, commission of or incitement to an offence.",
    summary: "Guarantees freedom of speech, expression, and press freedom subject to law and public security interest."
  },
  {
    article_number: "19A",
    article_title: "Right to information",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 12,
    chunk_id: "article_19a",
    text: "Every citizen shall have the right to have access to information in all matters of public importance subject to regulation and reasonable restrictions imposed by law.",
    summary: "Guarantees citizens access to public information in matters of public importance."
  },
  {
    article_number: "20",
    article_title: "Freedom to profess religion and to manage religious institutions",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 12,
    chunk_id: "article_20",
    text: "Subject to law, public order and morality,—\n(a) every citizen shall have the right to profess, practice and propagate his religion; and\n(b) every religious denomination and every sect thereof shall have the right to establish, maintain and manage its religious institutions.",
    summary: "Guarantees freedom of religion, practice, propagation, and management of religious institutions."
  },
  {
    article_number: "21",
    article_title: "Safeguard against taxation for purposes of any particular religion",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 12,
    chunk_id: "article_21",
    text: "No person shall be compelled to pay any special tax the proceeds of which are to be spent on the propagation or maintenance of any religion other than his own.",
    summary: "Protects citizens from being taxed for the propagation or maintenance of other religions."
  },
  {
    article_number: "22",
    article_title: "Safeguards as to educational institutions in respect of religion, etc.",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 13,
    chunk_id: "article_22",
    text: "(1) No person attending any educational institution shall be required to receive religious instruction, or take part in any religious ceremony, or attend religious worship, if such instruction, ceremony or worship relates to a religion other than his own.\n(2) In respect of any religious institution, there shall be no discrimination against any community in the granting of exemption or concession in relation to taxation.\n(3) Subject to law,\n(a) no religious community or denomination shall be prevented from providing religious instruction for pupils of that community or denomination in any educational institution maintained wholly by that community or denomination; and\n(b) no citizen shall be denied admission to any educational institution receiving aid from public revenues on the ground only of race, religion, caste or place of birth.\n(4) Nothing in this Article shall prevent any public authority from making provision for the advancement of any socially or educationally backward class of citizens.",
    summary: "Protects students from compulsory instruction in religions other than their own and prohibits discrimination in public-aided admissions."
  },
  {
    article_number: "23",
    article_title: "Provision as to property",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 13,
    chunk_id: "article_23",
    text: "Every citizen shall have the right to acquire, hold and dispose of property in any part of Pakistan, subject to the Constitution and any reasonable restrictions imposed by law in the public interest.",
    summary: "Guarantees right to acquire, hold, and dispose of property across Pakistan."
  },
  {
    article_number: "24",
    article_title: "Protection of property rights",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 13,
    chunk_id: "article_24",
    text: "(1) No person shall be deprived of his property save in accordance with law.\n(2) No property shall be compulsorily acquired or taken possession of save for a public purpose, and save by the authority of law which provides for compensation therefor and either fixes the amount of compensation or specifies the principles on and the manner in which compensation is to be determined and given.\n(3) Nothing in this Article shall affect the validity of laws permitting compulsory acquisition for public health/danger to life, or enemy property, or public housing/education/medical aid, or social welfare.\n(4) Adequacy of compensation provided by law shall not be questioned in court.",
    summary: "Protects private property from compulsory acquisition except for public purposes with lawful compensation."
  },
  {
    article_number: "25",
    article_title: "Equality of citizens",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 15,
    chunk_id: "article_25",
    text: "(1) All citizens are equal before law and are entitled to equal protection of law.\n(2) There shall be no discrimination on the basis of sex.\n(3) Nothing in this Article shall prevent the State from making any special provision for the protection of women and children.",
    summary: "Guarantees equality before law and bans sex discrimination while allowing affirmative action for women and children."
  },
  {
    article_number: "25A",
    article_title: "Right to education",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 15,
    chunk_id: "article_25a",
    text: "The State shall provide free and compulsory education to all children of the age of five to sixteen years in such manner as may be determined by law.",
    summary: "Mandates free and compulsory education for all children aged 5 to 16."
  },
  {
    article_number: "26",
    article_title: "Non-discrimination in respect of access to public places",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 15,
    chunk_id: "article_26",
    text: "(1) In respect of access to places of public entertainment or resort, not intended for religious purposes only, there shall be no discrimination against any citizen on the ground only of race, religion, caste, sex, residence or place of birth.\n(2) Nothing in clause (1) shall prevent the State from making any special provision for women and children.",
    summary: "Prohibits discrimination in access to public entertainment and resort places."
  },
  {
    article_number: "27",
    article_title: "Safeguard against discrimination in services",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 15,
    chunk_id: "article_27",
    text: "(1) No citizen otherwise qualified for appointment in the service of Pakistan shall be discriminated against in respect of any such appointment on the ground only of race, religion, caste, sex, residence or place of birth:\nProvided that, for a period not exceeding forty years from the commencing day, posts may be reserved for persons belonging to any class or area to secure their adequate representation in the service of Pakistan:\nProvided further that, in the interest of the said service, specified posts or services may be reserved for members of either sex if such posts or services entail the performance of duties and functions which cannot be adequately performed by members of the other sex:\nProvided also that under-representation of any class or area in the service of Pakistan may be redressed in such manner as may be determined by an Act of Majlis-e-Shoora (Parliament).\n(2) Nothing in clause (1) shall prevent any Provincial Government or local authority from prescribing residence conditions for regional service prior to appointment up to 3 years.",
    summary: "Guarantees non-discrimination in public employment with quota provisions for under-represented regions."
  },
  {
    article_number: "28",
    article_title: "Preservation of language, script and culture",
    chapter: "Chapter 1: Fundamental Rights",
    part: "Part II",
    page_number: 16,
    chunk_id: "article_28",
    text: "Subject to Article 251 any section of citizens having a distinct language, script or culture shall have the right to preserve and promote the same and subject to law, establish institutions for that purpose.",
    summary: "Guarantees the right to preserve and promote distinct language, script, and culture."
  },
  {
    article_number: "29",
    article_title: "Principles of Policy",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 16,
    chunk_id: "article_29",
    text: "(1) The Principles set out in this Chapter shall be known as the Principles of Policy, and it is the responsibility of each organ and authority of the State, and of each person performing functions on behalf of an organ or authority of the State, to act in accordance with those Principles in so far as they relate to the functions of the organ or authority.\n(2) In so far as the observance of any particular Principle of Policy may be dependent upon resources being available for the purpose, the Principle shall be regarded as being subject to the availability of resources.\n(3) In respect of each year, the President in relation to the affairs of the Federation, and the Governor of each Province in relation to the affairs of his Province, shall cause to be prepared and laid before each House of Majlis-e-Shoora (Parliament) or, as the case may be, the Provincial Assembly, a report on the observance and implementation of the Principles of Policy.",
    summary: "Sets out Principles of Policy for State organs subject to resource availability and annual reporting."
  },
  {
    article_number: "30",
    article_title: "Responsibility with respect to Principles of Policy",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 17,
    chunk_id: "article_30",
    text: "(1) The responsibility of deciding whether any action of an organ or authority of the State, or of a person performing functions on behalf of an organ or authority of the State, is in accordance with the Principles of Policy is that of the organ or authority of the State, or of the person, concerned.\n(2) The validity of an action or of a law shall not be called in question on the ground that it is not in accordance with the Principles of Policy, and no action shall lie against the State, any organ or authority of the State or any person on such ground.",
    summary: "Establishes that compliance with Principles of Policy is the internal responsibility of each State organ."
  },
  {
    article_number: "31",
    article_title: "Islamic way of life",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 17,
    chunk_id: "article_31",
    text: "(1) Steps shall be taken to enable the Muslims of Pakistan, individually and collectively, to order their lives in accordance with the fundamental principles and basic concepts of Islam and to provide facilities whereby they may be enabled to understand the meaning of life according to the Holy Quran and Sunnah.\n(2) The State shall endeavour, as respects the Muslims of Pakistan,—\n(a) to make the teaching of the Holy Quran and Islamiat compulsory, to encourage and facilitate the learning of Arabic language and to secure correct and exact printing and publishing of the Holy Quran;\n(b) to promote unity and the observance of the Islamic moral standards; and\n(c) to secure the proper organisation of zakat, ushr, auqaf and mosques.",
    summary: "Mandates State steps to enable Muslims to order their lives according to the Quran and Sunnah."
  },
  {
    article_number: "32",
    article_title: "Promotion of local Government institutions",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 17,
    chunk_id: "article_32",
    text: "The State shall encourage local Government institutions composed of elected representatives of the areas concerned and in such institutions special representation will be given to peasants, workers and women.",
    summary: "Directs State encouragement of elected local government bodies with peasant, worker, and women representation."
  },
  {
    article_number: "33",
    article_title: "Parochial and other similar prejudices to be discouraged",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 18,
    chunk_id: "article_33",
    text: "The State shall discourage parochial, racial, tribal sectarian and provincial prejudices among the citizens.",
    summary: "Directs State action against parochial, racial, tribal, and provincial prejudices."
  },
  {
    article_number: "34",
    article_title: "Full participation of women in national life",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 18,
    chunk_id: "article_34",
    text: "Steps shall be taken to ensure full participation of women in all spheres of national life.",
    summary: "Directs steps to ensure full participation of women in all spheres of national life."
  },
  {
    article_number: "35",
    article_title: "Protection of family, etc.",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 18,
    chunk_id: "article_35",
    text: "The State shall protect the marriage, the family, the mother and the child.",
    summary: "Directs the State to protect marriage, the family, the mother, and the child."
  },
  {
    article_number: "36",
    article_title: "Protection of minorities",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 18,
    chunk_id: "article_36",
    text: "The State shall safeguard the legitimate rights and interests of minorities, including their due representation in the Federal and Provincial services.",
    summary: "Directs State safeguarding of minority rights, interests, and public service representation."
  },
  {
    article_number: "37",
    article_title: "Promotion of social justice and eradication of social evils",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 18,
    chunk_id: "article_37",
    text: "The State shall—\n(a) promote, with special care, the educational and economic interests of backward classes or areas;\n(b) remove illiteracy and provide free and compulsory secondary education within minimum possible period;\n(c) make technical and professional education generally available and higher education equally accessible to all on the basis of merit;\n(d) ensure inexpensive and expeditious justice;\n(e) make provision for securing just and humane conditions of work, ensuring that children and women are not employed in vocations unsuited to their age or sex, and for maternity benefits for women in employment;\n(f) enable the people of different areas, through education, training, agricultural and industrial development and other methods, to participate fully in all forms of national activities, including employment in the service of Pakistan;\n(g) prevent prostitution, gambling and taking of injurious drugs, printing, publication, circulation and display of obscene literature and advertisements;\n(h) prevent the consumption of alcoholic liquor otherwise than for medicinal and, in the case of non-Muslims, religious purposes; and\n(i) decentralise the Government administration so as to facilitate expeditious disposal of its business to meet the convenience and requirements of the public.",
    summary: "Outlines State objectives for educational development, expeditious justice, humane work conditions, and social welfare."
  },
  {
    article_number: "38",
    article_title: "Promotion of social and economic well being of the people",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 19,
    chunk_id: "article_38",
    text: "The State shall—\n(a) secure the well-being of the people, irrespective of sex, caste, creed or race, by raising their standard of living, by preventing the concentration of wealth and means of production and distribution in the hands of a few to the detriment of general interest and by ensuring equitable adjustment of rights between employers and employees, and landlords and tenants;\n(b) provide for all citizens, within the available resources of the country, facilities for work and adequate livelihood with reasonable rest and leisure;\n(c) provide for all persons employed in the service of Pakistan or otherwise, social security by compulsory social insurance or other means;\n(d) provide basic necessities of life, such as food, clothing, housing, education and medical relief, for all such citizens, irrespective of sex, caste, creed or race, as are permanently or temporarily unable to earn their livelihood on account of infirmity, sickness or unemployment;\n(e) reduce disparity in the income and earnings of individuals, including persons in the various classes of the service of Pakistan;\n(f) eliminate riba as early as possible; and\n(g) ensure that the shares of the Provinces in all Federal services, including autonomous bodies and corporations established by, or under the control of, the Federal Government, shall be secured and any omission in the allocation of the shares of the Provinces in the past shall be rectified.",
    summary: "Directs State promotion of social security, equitable wealth distribution, elimination of Riba, and basic necessities."
  },
  {
    article_number: "39",
    article_title: "Participation of people in Armed Forces",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 20,
    chunk_id: "article_39",
    text: "The State shall enable people from all parts of Pakistan to participate in the Armed Forces of Pakistan.",
    summary: "Directs enabling citizens from all parts of Pakistan to participate in the Armed Forces."
  },
  {
    article_number: "40",
    article_title: "Strengthening bonds with Muslim world and promoting international peace",
    chapter: "Chapter 2: Principles of Policy",
    part: "Part II",
    page_number: 20,
    chunk_id: "article_40",
    text: "The State shall endeavour to preserve and strengthen fraternal relations among Muslim countries based on Islamic unity, support the common interests of the peoples of Asia, Africa and Latin America, promote international peace and security, foster goodwill and friendly relations among all nations and encourage the settlement of international disputes by peaceful means.",
    summary: "Directs fostering Islamic unity, international peace, goodwill, and peaceful dispute resolution."
  },
  {
    article_number: "41",
    article_title: "The President",
    chapter: "Chapter 1: The President",
    part: "Part III: The Federation of Pakistan",
    page_number: 21,
    chunk_id: "article_41",
    text: "(1) There shall be a President of Pakistan who shall be the Head of State and shall represent the unity of the Republic.\n(2) A person shall not be qualified for election as President unless he is a Muslim of not less than forty-five years of age and is qualified to be elected as member of the National Assembly.\n(3) The President shall be elected in accordance with the provisions of the Second Schedule by the members of an electoral college consisting of—\n(a) the members of both Houses; and\n(b) the members of the Provincial Assemblies.\n(4) Election to the office of President shall be held not earlier than sixty days and not later than thirty days before the expiration of the term of the President in office:\nProvided that, if the election cannot be held within the period aforesaid because the National Assembly is dissolved, it shall be held within thirty days of the general election to the Assembly.\n(5) An election to fill a vacancy in the office of President shall be held not later than thirty days from the occurrence of the vacancy:\nProvided that, if the election cannot be held within the period aforesaid because the National Assembly is dissolved, it shall be held within thirty days of the general election to the Assembly.\n(6) The validity of the election of the President shall not be called in question by or before any court or other authority.",
    summary: "Establishes the office of President as Head of State, qualifications (Muslim, age 45+), and Electoral College composition."
  },
  {
    article_number: "42",
    article_title: "Oath of President",
    chapter: "Chapter 1: The President",
    part: "Part III",
    page_number: 22,
    chunk_id: "article_42",
    text: "Before entering upon office, the President shall make before the Chief Justice of Pakistan oath in the form set out in the Third Schedule.",
    summary: "Mandates that the President take oath before the Chief Justice of Pakistan prior to assuming office."
  },
  {
    article_number: "43",
    article_title: "Conditions of President’s office",
    chapter: "Chapter 1: The President",
    part: "Part III",
    page_number: 22,
    chunk_id: "article_43",
    text: "(1) The President shall not hold any office of profit in the service of Pakistan or occupy any other position carrying the right to remuneration for the rendering of services.\n(2) The President shall not be a candidate for election as a member of Majlis-e-Shoora (Parliament) or a Provincial Assembly; and, if a member of Majlis-e-Shoora (Parliament) or a Provincial Assembly is elected as President, his seat in Majlis-e-Shoora (Parliament) or, as the case may be, the Provincial Assembly shall become vacant on the day he enters upon his office.",
    summary: "Prohibits the President from holding any office of profit or parliamentary seat while in office."
  },
  {
    article_number: "44",
    article_title: "Term of office of President",
    chapter: "Chapter 1: The President",
    part: "Part III",
    page_number: 22,
    chunk_id: "article_44",
    text: "(1) Subject to the Constitution, the President shall hold office for a term of five years from the day he enters upon his office:\nProvided that the President shall, notwithstanding the expiration of his terms, continue to hold office until his successor enters upon his office.\n(2) Subject to the Constitution, a person holding office as President shall be eligible for re-election to that office, but no person shall hold that office for more than two consecutive terms.\n(3) The President may, by writing under his hand addressed to the Speaker of the National Assembly, resign his office.",
    summary: "Sets the Presidential term at 5 years with a two-consecutive-term limit, and resignation procedure."
  },
  {
    article_number: "45",
    article_title: "President’s power to grant pardon, etc.",
    chapter: "Chapter 1: The President",
    part: "Part III",
    page_number: 22,
    chunk_id: "article_45",
    text: "The President shall have power to grant pardon, reprieve and respite, and to remit, suspend or commute any sentence passed by any court, tribunal or other authority.",
    summary: "Grants the President executive clemency powers to pardon, commute, or suspend legal sentences."
  },
  {
    article_number: "46",
    article_title: "President to be kept informed",
    chapter: "Chapter 1: The President",
    part: "Part III",
    page_number: 23,
    chunk_id: "article_46",
    text: "The Prime Minister shall keep the President informed on all matters of internal and foreign policy and on all legislative proposals the Federal Government intends to bring before Majlis-e-Shoora (Parliament).",
    summary: "Requires the Prime Minister to keep the President informed on national/foreign policies and legislative proposals."
  },
  {
    article_number: "47",
    article_title: "Removal or impeachment of President",
    chapter: "Chapter 1: The President",
    part: "Part III",
    page_number: 23,
    chunk_id: "article_47",
    text: "(1) Notwithstanding anything contained in the Constitution, the President may, in accordance with the provisions of this Article, be removed from office on the ground of physical or mental incapacity or impeached on a charge of violating the Constitution or gross misconduct.\n(2) Not less than one-half of the total membership of either House may give to the Speaker of the National Assembly or, as the case may be, the Chairman written notice of its intention to move a resolution for the removal of, or, as the case may be, to impeach, the President; and such notice shall set out the particulars of his incapacity or of the charge against him.\n(3) If a notice under clause (2) is received by the Chairman, he shall transmit it forthwith to the Speaker.\n(4) The Speaker shall, within three days of the receipt of a notice under clause (2) or clause (3), cause a copy of the notice to be transmitted to the President.\n(5) The Speaker shall summon the two Houses to meet in a joint sitting not earlier than seven days and not later than fourteen days after the receipt of the notice by him.\n(6) The joint sitting may investigate or cause to be investigated the ground or the charge upon which the notice is founded.\n(7) The President shall have the right to appear and be represented during the investigation, if any, and before the joint sitting.\n(8) If, after consideration of the result of the investigation, if any, a resolution is passed at the joint sitting by the votes of not less than two-thirds of the total membership of Majlis-e-Shoora (Parliament) declaring that the President is unfit to hold the office due to incapacity or is guilty of violating the Constitution or of gross misconduct, the President shall cease to hold office immediately on the passing of the resolution.",
    summary: "Sets out procedure for the removal or impeachment of the President by a two-thirds majority vote in a joint sitting of Parliament."
  },
    {
    article_number: "48",
    article_title: "President to act on advice, etc.",
    chapter: "Chapter 1",
    part: "Part III",
    page_number: 36,
    chunk_id: "article_48",
    text: `(1) In the exercise of his functions, the President shall act in accordance with the advice of the Cabinet or the Prime Minister, except where he is empowered by the Constitution to act in his discretion.

(2) The question whether any, and if so what, advice was tendered to the President by the Cabinet or the Prime Minister shall not be enquired into in, or by, any court.

(3) Where the President dissolves the National Assembly, he shall, within fifteen days of the dissolution, appoint a date or dates, not later than ninety days from the date of the dissolution, for the holding of a general election to the Assembly.

(4) The President shall appoint the Prime Minister in accordance with the Constitution.

(5) The President can refer any matter of national importance to a referendum.`,
    summary: "President acts on advice of Prime Minister and Cabinet. Presidential powers include: dissolving National Assembly, appointing Prime Minister, referring matters to referendum, granting pardons. President's discretionary powers under the Constitution."
  },
  {
    article_number: "49",
    article_title: "Chairman or Speaker to act as, or perform functions of, President",
    chapter: "Chapter 1: The President",
    part: "Part III",
    page_number: 25,
    chunk_id: "article_49",
    text: "(1) If the office of President becomes vacant by reason of death, resignation or removal of the President, the Chairman or, if he is unable to perform the functions of the office of President, the Speaker of the National Assembly shall act as President until a President is elected in accordance with clause (3) of Article 41.\n(2) When the President, by reason of absence from Pakistan or any other cause, is unable to perform his functions, the Chairman or, if he too is absent or unable to perform the functions of the office of President, the Speaker of the National Assembly shall perform the functions of President until the President returns to Pakistan or, as the case may be, resumes his functions.",
    summary: "Designates the Senate Chairman (or Speaker of National Assembly) to act as Acting President during a vacancy or absence."
  },
  {
    article_number: "50",
    article_title: "Majlis-e-Shoora (Parliament)",
    chapter: "Chapter 2: Majlis-e-Shoora (Parliament)",
    part: "Part III",
    page_number: 25,
    chunk_id: "article_50",
    text: "There shall be a Majlis-e-Shoora (Parliament) of Pakistan consisting of the President and two Houses to be known respectively as the National Assembly and the Senate.",
    summary: "Establishes Pakistan's bicameral Parliament consisting of the President, National Assembly, and Senate."
  },
  {
    article_number: "51",
    article_title: "National Assembly",
    chapter: "Chapter 2: Majlis-e-Shoora (Parliament)",
    part: "Part III",
    page_number: 25,
    chunk_id: "article_51",
    text: "(1) There shall be three hundred and forty-two seats for members in the National Assembly, including seats reserved for women and non-Muslims.\n(2) A person shall be entitled to vote if—\n(a) he is a citizen of Pakistan;\n(b) he is not less than eighteen years of age;\n(c) his name appears on the electoral roll; and\n(d) he is not declared by a competent court to be of unsound mind.\n(3) The seats in the National Assembly referred to in clause (1), except as provided in clause (4), shall be allocated to each Province, the Federally Administered Tribal Areas and the Federal Capital as under:—\nBalochistan: 14 General, 3 Women (17 Total)\nKhyber Pakhtunkhwa: 35 General, 8 Women (43 Total)\nPunjab: 148 General, 35 Women (183 Total)\nSindh: 61 General, 14 Women (75 Total)\nFederally Administered Tribal Areas: 12 General (12 Total)\nFederal Capital: 2 General (2 Total)\nTotal: 272 General, 60 Women (332 Total)\n(4) In addition to the number of seats referred to in clause (3), there shall be, in the National Assembly, ten seats reserved for non-Muslims.\n(5) The seats in the National Assembly shall be allocated to each Province... on the basis of population...\n(6) Elections shall be by direct territorial vote for general seats and proportional party lists for reserved seats.",
    summary: "Defines National Assembly seats (342 total under 2012 text; 336 post 25th amendment), voter qualifications (age 18+), and seat allocation."
  },
  {
    article_number: "52",
    article_title: "Duration of National Assembly",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 27,
    chunk_id: "article_52",
    text: "The National Assembly shall, unless sooner dissolved, continue for a term of five years from the day of its first meeting and shall stand dissolved at the expiration of its term.",
    summary: "Sets the term of the National Assembly at 5 years from its first meeting."
  },
  {
    article_number: "53",
    article_title: "Speaker and Deputy Speaker of National Assembly",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 27,
    chunk_id: "article_53",
    text: "(1) After a general election, the National Assembly shall, at its first meeting and to the exclusion of any other business, elect from amongst its members a Speaker and a Deputy Speaker and, so often as the office of Speaker or Deputy Speaker becomes vacant, the Assembly shall elect another member as Speaker or, as the case may be, Deputy Speaker.\n(2) Before entering upon office, a member elected as Speaker or Deputy Speaker shall make before the National Assembly oath in the form set out in the Third Schedule.\n(3) Speaker/Deputy Speaker presiding rules...\n(4) Neither shall preside when a resolution for his removal is under consideration.\n(5) Speaker resignation to President.\n(6) Deputy Speaker resignation to Speaker.\n(7) Office vacancy conditions...\n(8) On dissolution, Speaker continues in office until next Speaker is elected.",
    summary: "Provides for election, oath, functions, resignation, and continuation of Speaker and Deputy Speaker."
  },
  {
    article_number: "54",
    article_title: "Summoning and prorogation of Majlis-e-Shoora (Parliament)",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 28,
    chunk_id: "article_54",
    text: "(1) The President may, from time to time, summon either House or both Houses or Majlis-e-Shoora (Parliament) in joint sitting to meet at such time and place as he thinks fit and may also prorogue the same.\n(2) There shall be at least three sessions of the National Assembly every year, and not more than one hundred and twenty days shall intervene between the last sitting of the Assembly in one session and the date appointed for its first sitting in the next session:\nProvided that the National Assembly shall meet for not less than one hundred and thirty working days in each year.\nExplanation.– In this clause, \"working days\" includes any day on which there is a joint sitting and any period, not exceeding two days, for which the National Assembly is adjourned.\n(3) On a requisition signed by not less than one-fourth of the total membership of the National Assembly, the Speaker shall summon the National Assembly to meet, at such time and place as he thinks fit, within fourteen days of the receipt of the requisition; and when the Speaker has summoned the Assembly only he may prorogue it.",
    summary: "Governs summoning, prorogation, minimum session requirements (3 sessions, 130 working days/yr), and 1/4th requisition summoning."
  },
  {
    article_number: "55",
    article_title: "Voting in Assembly and quorum",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 29,
    chunk_id: "article_55",
    text: "(1) Subject to the Constitution, all decisions of the National Assembly shall be taken by majority of the members present and voting, but the person presiding shall not vote except in the case of equality of votes.\n(2) If at any time during a sitting of the National Assembly the attention of the person presiding is drawn to the fact that less than one-fourth of the total membership of the Assembly is present, he shall either adjourn the Assembly or suspend the meeting until at least one-fourth of such membership is present.",
    summary: "Establishes simple majority voting, casting vote for Presiding Officer, and 1/4th quorum requirement."
  },
  {
    article_number: "56",
    article_title: "Address by President",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 29,
    chunk_id: "article_56",
    text: "(1) The President may address either House or both Houses assembled together and may for that purpose require the attendance of the members.\n(2) The President may send messages to either House...\n(3) At the commencement of the first session after each general election to the National Assembly and at the commencement of the first session of each year the President shall address both Houses assembled together and inform the Majlis-e-Shoora (Parliament) of the causes of its summons.\n(4) Provision shall be made in rules for regulating discussion on President's address.",
    summary: "Grants President the right to address Parliament, send messages, and mandates address at the start of parliamentary year/post-general election."
  },
  {
    article_number: "57",
    article_title: "Right to speak in Majlis-e-Shoora (Parliament)",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 30,
    chunk_id: "article_57",
    text: "The Prime Minister, a Federal Minister, a Minister of State and the Attorney General shall have the right to speak and otherwise take part in the proceedings of either House, or a joint sitting or any committee thereof, of which he may be named a member, but shall not by virtue of this Article be entitled to vote.",
    summary: "Grants PM, Ministers, and Attorney-General right to participate in parliamentary proceedings without voting rights unless members."
  },
  {
    article_number: "58",
    article_title: "Dissolution of National Assembly",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 30,
    chunk_id: "article_58",
    text: "(1) The President shall dissolve the National Assembly if so advised by the Prime Minister; and the National Assembly shall, unless sooner dissolved, stand dissolved at the expiration of forty-eight hours after the Prime Minister has so advised.\nExplanation.– Reference in this Article to \"Prime Minister\" shall not be construed to include reference to a Prime Minister against whom a notice of a resolution for a vote of no-confidence has been given in the National Assembly but has not been voted upon or against whom such a resolution has been passed or who is continuing in office after his resignation or after the dissolution of the National Assembly.\n(2) Notwithstanding anything contained in clause (2) of Article 48, the President may also dissolve the National Assembly in his discretion where, a vote of no-confidence having been passed against the Prime Minister, no other member of the National Assembly command the confidence of the majority of the members of the National Assembly in accordance with the provisions of the Constitution, as ascertained in a session of the National Assembly summoned for the purpose.",
    summary: "Governs dissolution of National Assembly on Prime Minister's advice (automatic in 48 hrs) or discretionary dissolution if no member commands majority after no-confidence vote."
  },
  {
    article_number: "59",
    article_title: "The Senate",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 31,
    chunk_id: "article_59",
    text: `(1) The Senate shall consist of ninety-six members of which:
(a) fourteen shall be elected by the members of each Provincial Assembly;
(b) four shall be general seats from the Federal Capital;
(c) four shall be elected by the members of each Provincial Assembly from amongst women;
(d) four shall be elected by the members of each Provincial Assembly from amongst technocrats including ulema;
(e) four non-Muslims, one from each Province, shall be elected by the members of each Provincial Assembly.

(2) Election to fill seats in the Senate allocated to each Province shall be held in accordance with the system of proportional representation by means of the single transferable vote.

(3) The Senate shall not be subject to dissolution but the term of its members shall be six years.`,
    summary: "Senate composition — 96 total seats. 14 general seats per province, plus women, technocrat, and non-Muslim seats. Senate cannot be dissolved."
  },
  {
    article_number: "60",
    article_title: "Chairman and Deputy Chairman",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 32,
    chunk_id: "article_60",
    text: "(1) After the Senate has been duly constituted, it shall, at its first meeting and to the exclusion of any other business. elect from amongst its members a Chairman and a Deputy Chairman and, so often as the Office of Chairman or Deputy Chairman becomes vacant, the Senate shall elect another member as Chairman or, as the case may be, Deputy Chairman.\n(2) The term of office of the Chairman or Deputy Chairman shall be three years from the day on which he enters upon his office.",
    summary: "Provides for election and 3-year term of the Senate Chairman and Deputy Chairman."
  },
  {
    article_number: "61",
    article_title: "Other provisions relating to Senate",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 33,
    chunk_id: "article_61",
    text: "The provisions of clauses (2) to (7) of Article 53, clauses (2) and (3) of Article 54 and Article 55 shall apply to the Senate as they apply to the National Assembly and, in their application to the Senate, shall have effect as if references therein to the National Assembly, Speaker and Deputy Speaker were references, respectively, to the Senate Chairman and Deputy Chairman and as if, in the proviso to the said clause (2) of Article 54, for the words \"one hundred and thirty\" the words \"one hundred and ten\" were substituted.",
    summary: "Applies National Assembly procedural provisions to the Senate, requiring at least 110 working days annually."
  },
  {
    article_number: "62",
    article_title: "Qualifications for membership of Majlis-e-Shoora (Parliament)",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 33,
    chunk_id: "article_62",
    text: "(1) A person shall not be qualified to be elected or chosen as a member of Majlis-e-Shoora (Parliament) unless—\n(a) he is a citizen of Pakistan;\n(b) he is, in the case of the National Assembly, not less than twenty-five years of age and is enrolled as a voter in any electoral roll in—\n(i) any part of Pakistan, for election to a general seat or a seat reserved for non-Muslims; and\n(ii) any area in a Province from which she seeks membership for election to a seat reserved for women.\n(c) he is, in the case of the Senate, not less than thirty years of age and is enrolled as a voter in any area in a Province or, as the case may be, the Federal Capital or the Federally Administered Tribal Areas, from where he seeks membership;\n(d) he is of good character and is not commonly known as one who violates Islamic Injunctions;\n(e) he has adequate knowledge of Islamic teachings and practices obligatory duties prescribed by Islam as well as abstains from major sins;\n(f) he is sagacious, righteous, non-profligate, honest and ameen, there being no declaration to the contrary by a court of law; and\n(g) he has not, after the establishment of Pakistan, worked against the integrity of the country or opposed the ideology of Pakistan.\n(2) The disqualifications specified in paragraphs (d) and (e) shall not apply to a person who is a non-Muslim, but such a person shall have good moral reputation.",
    summary: "Sets strict eligibility standards including citizenship, age (25 for NA, 30 for Senate), character, and Sadiq & Ameen requirements for Parliamentarians."
  },
  {
    article_number: "63",
    article_title: "Disqualifications for membership of Majlis-e-Shoora (Parliament)",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 34,
    chunk_id: "article_63",
    text: "(1) A person shall be disqualified from being elected or chosen as, and from being, a member of the Majlis-e-Shoora (Parliament), if—\n(a) he is of unsound mind and has been so declared by a competent court; or\n(b) he is an undischarged insolvent; or\n(c) he ceases to be a citizen of Pakistan, or acquires the citizenship of a foreign State; or\n(d) he holds an office of profit in the service of Pakistan other than an office declared by law not to disqualify its holder; or\n(e) he is in the service of any statutory body or any body which is owned or controlled by the Government...\n(f) dual nationality / citizenship disqualification...\n(g) convicted by a court for propagating opinion prejudicial to ideology, sovereignty, or integrity of Pakistan or judiciary/armed forces, unless 5 years lapsed...\n(h) conviction for moral turpitude with sentence not less than 2 years, unless 5 years elapsed...\n(i) dismissed from service of Pakistan on misconduct ground, unless 5 years elapsed...\n(j) removed/compulsorily retired for misconduct, unless 3 years elapsed...\n(k) service of Pakistan within 2 years...\n(l) interest in government contracts...\n(m) holding office of profit...\n(n) bank loan default of 2 million rupees or more for over 1 year...\n(o) utility expense default in excess of 10,000 rupees for over 6 months...\n(2) Reference to Speaker/Chairman on disqualification question within 30 days.\n(3) Election Commission decision within 90 days.",
    summary: "Outlines comprehensive disqualification criteria for members of Parliament including dual citizenship, loan defaults, court convictions, and office of profit."
  },
  {
    article_number: "63A",
    article_title: "Disqualification on grounds of defection, etc.",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 37,
    chunk_id: "article_63a",
    text: "(1) If a member of a Parliamentary Party composed of a single political party in a House—\n(a) resigns from membership of his political party or joins another Parliamentary party; or\n(b) votes or abstains from voting in the House contrary to any direction issued by the Parliamentary Party to which he belongs, in relation to—\n(i) election of the Prime Minister or the Chief Minister; or\n(ii) a vote of confidence or a vote of no-confidence; or\n(iii) a Money Bill or a Constitution (Amendment) Bill;\nhe may be declared in writing by the Party Head to have defected from the political party, and the Party Head may forward a copy of the declaration to the Presiding Officer and the Chief Election Commissioner...\n(2) Opportunity to show cause...\n(3) Presiding Officer reference to CEC within 2 days...\n(4) ECP decision confirming defection within 30 days resulting in seat vacancy...\n(5) Appeal to Supreme Court within 30 days, decided within 90 days.",
    summary: "Prevents floor crossing / party defection during crucial votes (PM/CM election, No-Confidence, Money Bills, Constitutional Amendments)."
  },
  {
    article_number: "64",
    article_title: "Vacation of seats",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 39,
    chunk_id: "article_64",
    text: "(1) A member of Majlis-e-Shoora (Parliament) may, by writing under his hand addressed to the Speaker or, as the case may be, the Chairman resign his seat, and thereupon his seat shall become vacant.\n(2) A House may declare the seat of a member vacant if, without leave of the House, he remains absent for forty consecutive days of its sittings.",
    summary: "Provides for seat vacation by resignation or 40 consecutive days of unexcused absence."
  },
  {
    article_number: "65",
    article_title: "Oath of Members",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 39,
    chunk_id: "article_65",
    text: "A person elected to a House shall not sit or vote until he has made before the House oath in the form set out in the Third Schedule.",
    summary: "Mandates taking the constitutional oath before sitting or voting in Parliament."
  },
  {
    article_number: "66",
    article_title: "Privileges of members, etc.",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 39,
    chunk_id: "article_66",
    text: "(1) Subject to the Constitution and to the rules of procedure of Majlis-e-Shoora (Parliament), there shall be freedom of speech in Majlis-e-Shoora (Parliament) and no member shall be liable to any proceedings in any court in respect of anything said or any vote given by him in Majlis-e-Shoora (Parliament), and no person shall be so liable in respect of the publication by or under the authority of Majlis-e-Shoora (Parliament) of any report, paper, votes or proceedings.\n(2) Privileges of Parliament and members shall be defined by law...\n(3) Punishment for refusal to produce evidence before committee...\n(4) Application to non-member speakers.\n(5) Definition of House/joint sitting/committee.",
    summary: "Guarantees parliamentary privilege and freedom of speech inside Parliament, protecting members from court liability for parliamentary speeches and votes."
  },
  {
    article_number: "67",
    article_title: "Rules of procedure, etc.",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 40,
    chunk_id: "article_67",
    text: "(1) Subject to the Constitution, a House may make rules for regulating its procedure and the conduct of its business, and shall have power to act notwithstanding any vacancy in the membership thereof, and any proceedings in the House shall not be invalid on the ground that some persons who were not entitled to do so sat, voted or otherwise took part in the proceedings.\n(2) Until rules are made under clause (1), procedure regulated by President's rules.",
    summary: "Empowers each House of Parliament to make rules regulating its procedures."
  },
  {
    article_number: "68",
    article_title: "Restriction on discussion in Majlis-e-Shoora (Parliament)",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 41,
    chunk_id: "article_68",
    text: "No discussion shall take place in Majlis-e-Shoora (Parliament) with respect to the conduct of any Judge of the Supreme Court or of a High Court in the discharge of his duties.",
    summary: "Prohibits parliamentary discussion regarding the judicial conduct of Supreme Court or High Court Judges."
  },
  {
    article_number: "69",
    article_title: "Courts not to inquire into proceedings of Majlis-e-Shoora (Parliament)",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 41,
    chunk_id: "article_69",
    text: "(1) The validity of any proceedings in Majlis-e-Shoora (Parliament) shall not be called in question on the ground of any irregularity of procedure.\n(2) No officer or member of Majlis-e-Shoora (Parliament) in whom powers are vested by or under the Constitution for regulating procedure or the conduct of business, or for maintaining order in Majlis-e-Shoora (Parliament), shall be subject to the jurisdiction of any court in respect of the exercise by him of those powers.\n(3) In this Article, Majlis-e-Shoora (Parliament) has the same meaning as in Article 66.",
    summary: "Bars courts from inquiring into internal parliamentary proceedings or procedural irregularities."
  },
  {
    article_number: "70",
    article_title: "Introduction and passing of Bills",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 41,
    chunk_id: "article_70",
    text: "(1) A Bill with respect to any matter in the Federal Legislative List may originate in either House and shall, if it is passed by the House in which it originated, be transmitted to the other House; and, if the Bill is passed without amendment by the other House also, it shall be presented to the President for assent.\n(2) If a Bill transmitted to a House under clause (1) is passed with amendments it shall be sent back to the House in which it originated and if that House passes the Bill with those amendments it shall be presented to the President for assent.\n(3) If a Bill transmitted to a House under clause (1) is rejected or is not passed within ninety days of its laying in the House or a Bill sent to a House under clause (2) with amendments is not passed by that House with such amendments, the Bill, at the request of the House in which it originated, shall be considered in a joint sitting and if passed by the votes of the majority of the members present and voting in the joint sitting it shall be presented to the President for assent.\n(4) Federal Legislative List definition.",
    summary: "Sets legislative procedure for origin, transmission, amendment, and joint sitting passage of Federal Bills."
  },
  {
    article_number: "71",
    article_title: "Mediation Committee [Omitted]",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 42,
    chunk_id: "article_71",
    text: "[Mediation Committee] omitted by the Constitution (Eighteenth Amdt.) Act, 2010 (10 of 2010), s. 24.",
    summary: "Mediation Committee provisions omitted under the 18th Amendment."
  },
  {
    article_number: "72",
    article_title: "Procedure at joint sittings",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 42,
    chunk_id: "article_72",
    text: "(1) The President, after consultation with the Speaker of the National Assembly and the Chairman, may make rules as to the procedure with respect to the joint sittings of, and communications between, the two Houses.\n(2) At a joint sitting, the Speaker of the National Assembly or, in his absence, such person as may be determined by the rules made under clause (1), shall preside.\n(3) The rules made under clause (1) shall be laid before a joint sitting...\n(4) Subject to the Constitution, all decisions at a joint sitting shall be taken by the votes of the majority of the members present and voting.",
    summary: "Governs joint sittings of Parliament presided over by the Speaker of National Assembly."
  },
  {
    article_number: "73",
    article_title: "Procedure with respect to Money Bills",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 42,
    chunk_id: "article_73",
    text: "(1) Notwithstanding anything contained in Article 70, a Money Bill shall originate in the National Assembly:\nProvided that simultaneously when a Money Bill, including the Finance Bill containing the Annual Budget Statement, is presented in the National Assembly, a copy thereof shall be transmitted to the Senate which may, within fourteen days, make recommendations thereon to the National Assembly.\n(1A) The National Assembly shall consider the recommendations of the Senate and after the Bill has been passed by the Assembly with or without incorporating the recommendations of the Senate, it shall be presented to the President for assent.\n(2) Money Bill definition (taxation, borrowing, Federal Consolidated Fund custody, public accounts, audit)...\n(3) Exceptions...\n(4) Speaker's decision on Money Bill status is final.\n(5) Money Bill certificate by Speaker.",
    summary: "Mandates Money Bills originate exclusively in the National Assembly with 14-day non-binding Senate recommendations."
  },
  {
    article_number: "74",
    article_title: "Federal Government’s consent required for financial measures",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 44,
    chunk_id: "article_74",
    text: "A Money Bill, or a Bill or amendment which if enacted and brought into operation would involve expenditure from the Federal Consolidated Fund or withdrawal from the Public Account of the Federation or affect the coinage or currency of Pakistan or the constitution or functions of the State Bank of Pakistan shall not be introduced or moved in Majlis-e-Shoora (Parliament) except by or with the consent of the Federal Government.",
    summary: "Requires Federal Government consent for introducing any financial measures or currency/State Bank legislation."
  },
  {
    article_number: "75",
    article_title: "President’s assent to Bills",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 44,
    chunk_id: "article_75",
    text: "(1) When a Bill is presented to the President for assent, the President shall, within ten days,—\n(a) assent to the Bill; or\n(b) in the case of a Bill other than a Money Bill, return the Bill to the Majlis-e-Shoora (Parliament) with a message requesting that the Bill or any specified provision thereof, be reconsidered and that any amendment specified in the message be considered.\n(2) When the President has returned a Bill to the Majlis-e-Shoora (Parliament), it shall be reconsidered by the Majlis-e-Shoora (Parliament) in joint sitting and, if it is again passed, with or without amendment, by the Majlis-e-Shoora (Parliament), by the votes of the majority of the members of both Houses present and voting, it shall be deemed for the purposes of the Constitution to have been passed by both Houses and shall be presented to the President, and the President shall give his assent within ten days, failing which such assent shall be deemed to have been given.\n(3) When the President has assented or is deemed to have assented to a Bill, it shall become law and be called an Act of Majlis-e-Shoora (Parliament).\n(4) No Act invalid by reason of procedural recommendation omission.",
    summary: "Requires Presidential assent within 10 days; if returned, passage by joint sitting forces automatic deemed assent after 10 days."
  },
  {
    article_number: "76",
    article_title: "Bill not to lapse on prorogation, etc.",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 45,
    chunk_id: "article_76",
    text: "(1) A Bill pending in either House shall not lapse by reason of the prorogation of the House.\n(2) A Bill pending in the Senate which has not been passed by the National Assembly shall not lapse on the dissolution of the National Assembly.\n(3) A Bill pending in the National Assembly, or a Bill which having been passed by the National Assembly is pending in the Senate, shall lapse on the dissolution of the National Assembly.",
    summary: "Governs bill persistence across parliamentary prorogation and National Assembly dissolution."
  },
  {
    article_number: "77",
    article_title: "Tax to be levied by law only",
    chapter: "Chapter 2: Parliament",
    part: "Part III",
    page_number: 45,
    chunk_id: "article_77",
    text: "No tax shall be levied for the purposes of the Federation except by or under the authority of Act of Majlis-e-Shoora (Parliament).",
    summary: "Mandates that no federal tax can be levied except under statutory authority passed by Parliament."
  },
  {
    article_number: "78",
    article_title: "Federal Consolidated Fund and Public Account",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 45,
    chunk_id: "article_78",
    text: "(1) All revenues received by the Federal Government, all loans raised by that Government, and all moneys received by it in repayment of any loan, shall form part of a consolidated fund, to be known as the Federal Consolidated Fund.\n(2) All other moneys—\n(a) received by or on behalf of the Federal Government; or\n(b) received by or deposited with the Supreme Court or any other court established under the authority of the Federation;\nshall be credited to the Public Account of the Federation.",
    summary: "Establishes the Federal Consolidated Fund and Public Account of the Federation."
  },
  {
    article_number: "79",
    article_title: "Custody, etc., of Federal Consolidated Fund and Public Account",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 45,
    chunk_id: "article_79",
    text: "The custody of the Federal Consolidated Fund, the payment of moneys into that Fund, the withdrawal of moneys therefrom, the custody of other moneys received by or on behalf of the Federal Government, their payment into, and withdrawal from, the Public Account of the Federation, and all matters connected with or ancillary to the matters aforesaid shall be regulated by Act of Majlis-e-Shoora (Parliament) or, until provision in that behalf is so made, by rules made by the President.",
    summary: "Regulates the management and custody of the Federal Consolidated Fund."
  },
  {
    article_number: "80",
    article_title: "Annual Budget Statement",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 46,
    chunk_id: "article_80",
    text: "(1) The Federal Government shall, in respect of every financial year, cause to be laid before the National Assembly a statement of the estimated receipt and expenditure of the Federal Government for that year, in this Part, referred to as the Annual Budget Statement.\n(2) The Annual Budget Statement shall show separately—\n(a) the sums required to meet expenditure described by the Constitution as expenditure charged upon the Federal Consolidated Fund; and\n(b) the sums required to meet other expenditure proposed to be made from the Federal Consolidated Fund;\nand shall distinguish expenditure on revenue account from other expenditure.",
    summary: "Mandates presenting the Annual Budget Statement to the National Assembly distinguishing charged and voted expenditure."
  },
  {
    article_number: "81",
    article_title: "Expenditure charged upon Federal Consolidated Fund",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 46,
    chunk_id: "article_81",
    text: "The following expenditure shall be expenditure charged upon the Federal Consolidated Fund: —\n(a) remuneration payable to President, Judges of Supreme Court and Islamabad High Court, Chief Election Commissioner, Senate Chairman/Deputy Chairman, Speaker/Deputy Speaker of NA, Auditor-General;\n(b) administrative expenses of Supreme Court, Islamabad High Court, Auditor-General, ECP, Secretariats of Senate and National Assembly;\n(c) debt charges for which Federal Government is liable;\n(d) court judgment decrees/awards against Pakistan;\n(e) any other sums declared charged by Constitution or Parliament.",
    summary: "Lists all constitutional expenditures charged directly upon the Federal Consolidated Fund."
  },
  {
    article_number: "82",
    article_title: "Procedure relating to Annual Budget Statement",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 47,
    chunk_id: "article_82",
    text: "(1) So much of the Annual Budget Statement as relates to expenditure charged upon the Federal Consolidated Fund may be discussed in, but shall not be submitted to the vote of, the National Assembly.\n(2) So much of the Annual Budget Statement as relates to other expenditure shall be submitted to the National Assembly in the form of demands for grants, and the Assembly shall have power to assent to, or to refuse to assent to, any demand, or to assent to any demand subject to a reduction of the amount specified therein...\n(3) No demand for a grant shall be made except on the recommendation of the Federal Government.",
    summary: "Differentiates charged expenditure (discussed, not voted) from voted demands for grants."
  },
  {
    article_number: "83",
    article_title: "Authentication of schedule of authorized expenditure",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 48,
    chunk_id: "article_83",
    text: "(1) The Prime Minister shall authenticate by his signature a schedule specifying—\n(a) the grants made or deemed to have been made by the National Assembly under Article 82, and\n(b) the several sums required to meet the expenditure charged upon the Federal Consolidated Fund...\n(2) The schedule so authenticated shall be laid before the National Assembly, but shall not be open to discussion or vote thereon.\n(3) No expenditure from Federal Consolidated Fund authorized without authenticated schedule.",
    summary: "Requires the Prime Minister's signature to authenticate the schedule of authorized expenditure."
  },
  {
    article_number: "84",
    article_title: "Supplementary and excess grants",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 48,
    chunk_id: "article_84",
    text: "If in respect of any financial year it is found that the amount authorized to be expended for a particular service is insufficient or new expenditure arises, the Federal Government can authorize expenditure and lay a Supplementary or Excess Budget Statement before the National Assembly.",
    summary: "Empowers Federal Government to authorize supplementary and excess budget grants."
  },
  {
    article_number: "85",
    article_title: "Votes on account",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 48,
    chunk_id: "article_85",
    text: "Notwithstanding anything contained in the foregoing provisions relating to financial matters, the National Assembly shall have power to make any grant in advance in respect of the estimated expenditure for a part of any financial year, not exceeding four months, pending completion of the procedure prescribed in Article 82.",
    summary: "Allows National Assembly to pass vote-on-account grants in advance for up to 4 months."
  },
  {
    article_number: "86",
    article_title: "Power to authorize expenditure when Assembly stands dissolved",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 49,
    chunk_id: "article_86",
    text: "Notwithstanding anything contained in the foregoing provisions relating to financial matters, at any time when the National Assembly stands dissolved, the Federal Government may authorize expenditure from the Federal Consolidated Fund in respect of the estimated expenditure for a period not exceeding four months in any financial year...",
    summary: "Authorizes Federal Government expenditure for up to 4 months while National Assembly is dissolved."
  },
  {
    article_number: "87",
    article_title: "Secretariats of Majlis-e-Shoora (Parliament)",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 49,
    chunk_id: "article_87",
    text: "(1) Each House shall have a separate Secretariat:\nProvided that nothing in this clause shall be construed as preventing the creation of posts common to both Houses.\n(2) Majlis-e-Shoora (Parliament) may by law regulate the recruitment and conditions of service of persons appointed to secretarial staff.\n(3) Speaker/Chairman rule-making power with President's approval.",
    summary: "Provides for separate Secretariats for the Senate and National Assembly."
  },
  {
    article_number: "88",
    article_title: "Finance Committees",
    chapter: "Financial Procedure",
    part: "Part III",
    page_number: 49,
    chunk_id: "article_88",
    text: "(1) The expenditure of the National Assembly and the Senate within authorised appropriations shall be controlled by the National Assembly or, as the case may be, the Senate acting on the advice of its Finance Committee.\n(2) Finance Committee composition: Speaker/Chairman, Minister of Finance, and elected members.\n(3) Rules of procedure.",
    summary: "Establishes Finance Committees for National Assembly and Senate to control parliamentary expenditure."
  },
  {
    article_number: "89",
    article_title: "Power of President to promulgate Ordinances",
    chapter: "Ordinances",
    part: "Part III",
    page_number: 50,
    chunk_id: "article_89",
    text: "(1) The President may, except when the Senate or National Assembly is in session, if satisfied that circumstances exist which render it necessary to take immediate action, make and promulgate an Ordinance as the circumstances may require.\n(2) An Ordinance promulgated under this Article shall have the same force and effect as an Act of Majlis-e-Shoora (Parliament) and shall be subject to like restrictions... but every such Ordinance—\n(a) shall be laid—\n(i) before the National Assembly if dealing with Money Bills, and shall stand repealed at the expiration of 120 days from promulgation (extendable by NA once for 120 days);\n(ii) before both Houses in other cases, standing repealed after 120 days (extendable once for 120 days by resolution of either House);\n(b) may be withdrawn at any time by the President.\n(3) Ordinances laid before NA/Houses deemed introduced Bills.",
    summary: "Empowers the President to issue Presidential Ordinances when Parliament is not in session, valid for 120 days (extendable once)."
  },
  {
    article_number: "90",
    article_title: "Exercise of executive authority of the Federation",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 51,
    chunk_id: "article_90",
    text: "(1) Subject to the Constitution, the executive authority of the Federation shall be exercised in the name of the President by the Federal Government, consisting of the Prime Minister and the Federal Ministers, which shall act through the Prime Minister, who shall be the chief executive of the Federation.\n(2) In the performance of his functions under the Constitution, the Prime Minister may act either directly or through the Federal Minister.",
    summary: "Vests chief federal executive authority in the Federal Government headed by the Prime Minister."
  },
  {
    article_number: "91",
    article_title: "The Cabinet",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 52,
    chunk_id: "article_91",
    text: "(1) There shall be a Cabinet of Ministers, with the Prime Minister at its head, to aid and advise the President in the exercise of his functions.\n(2) The National Assembly shall meet on the twenty-first day following the day on which a general election to the Assembly is held, unless sooner summoned by the President.\n(3) After the election of the Speaker and the Deputy Speaker, the National Assembly shall, to the exclusion of any other business, proceed to elect without debate one of its Muslim members to be the Prime Minister.\n(4) The Prime Minister shall be elected by the votes of the majority of the total membership of the National Assembly:\nProvided that, if no member secures such majority in the first poll, a second poll shall be held between the members who secure the two highest numbers of votes in the first poll and the member who secures a majority of votes of the members present and voting shall be declared to have been elected as Prime Minister...\n(5) Oath before President...\n(6) Cabinet collectively responsible to Senate and National Assembly...\n(7) PM holds office during pleasure of President, but President cannot remove unless PM loses majority confidence in NA via vote of confidence...\n(8) PM resignation...\n(9) 6 months non-member minister rule...\n(10) Continuation during dissolution.",
    summary: "Establishes the Federal Cabinet, Prime Minister election by National Assembly, collective responsibility, and vote of confidence procedures."
  },
  {
    article_number: "92",
    article_title: "Federal Ministers and Ministers of State",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 53,
    chunk_id: "article_92",
    text: "(1) Subject to clauses (9) and (10) of Article 91, the President shall appoint Federal Ministers and Ministers of State from amongst the members of Majlis-e-Shoora (Parliament) on the advice of the Prime Minister:\nProvided that the number of Federal Ministers and Ministers of State who are members of the Senate shall not at any time exceed one fourth of the number of Federal Ministers:\nProvided further that the total strength of the Cabinet, including Ministers of State, shall not exceed eleven percent of the total membership of Majlis-e-Shoora (Parliament).\n(2) Oath before President.\n(3) Resignation or removal on PM advice.",
    summary: "Provides for appointment of Federal Ministers on PM advice with an 11% Cabinet size cap of total parliamentary membership."
  },
  {
    article_number: "93",
    article_title: "Advisers",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 54,
    chunk_id: "article_93",
    text: "(1) The President may, on the advice of the Prime Minister, appoint not more than five Advisers, on such terms and conditions as he may determine.\n(2) The provisions of Article 57 shall also apply to an Adviser.",
    summary: "Allows appointment of up to five Advisers to the Prime Minister."
  },
  {
    article_number: "94",
    article_title: "Prime Minister continuing in office",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 54,
    chunk_id: "article_94",
    text: "The President may ask the Prime Minister to continue to hold office until his successor enters upon the office of Prime Minister.",
    summary: "Allows President to ask outgoing Prime Minister to continue until successor takes office."
  },
  {
    article_number: "95",
    article_title: "Vote of no-confidence against Prime Minister",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 54,
    chunk_id: "article_95",
    text: "(1) A resolution for a vote of no-confidence moved by not less than twenty per centum of the total membership of the National Assembly may be passed against the Prime Minister by the National Assembly.\n(2) A resolution referred to in clause (1) shall not be voted upon before the expiration of three days, or later than seven days, from the day on which such resolution is moved in the National Assembly.\n(3) A resolution referred to in clause (1) shall not be moved in the National Assembly while the National Assembly is considering demands for grants submitted to it in the Annual Budget Statement.\n(4) If the resolution referred to in clause (1) is passed by a majority of the total membership of the National Assembly, the Prime Minister shall cease to hold office.",
    summary: "Sets out the vote of no-confidence procedure against the Prime Minister requiring a simple majority of total National Assembly membership."
  },
  {
    article_number: "96",
    article_title: "[Omitted]",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 55,
    chunk_id: "article_96",
    text: "[Vote of no confidence against Prime Minister.] Omitted by substitution through renumbering vide P. O. No. 14 of 1985, Art. 2 and Sch.",
    summary: "Article 96 omitted and consolidated."
  },
  {
    article_number: "97",
    article_title: "Extent of executive authority of Federation",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 55,
    chunk_id: "article_97",
    text: "Subject to the Constitution, the executive authority of the federation shall extend to the matters with respect to which Majlis-e-Shoora (Parliament) has power to make laws, including exercise of rights, authority and jurisdiction in and in relation to areas outside Pakistan:\nProvided that the said authority shall not, save as expressly provided in the Constitution or in any law made by Majlis-e-Shoora (Parliament), extend in any Province to a matter with respect to which the Provincial Assembly has also power to make laws.",
    summary: "Defines executive authority scope of the Federation matching Federal legislative competence."
  },
  {
    article_number: "98",
    article_title: "Conferring of functions on subordinate authorities",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 55,
    chunk_id: "article_98",
    text: "On the recommendation of the Federal Government, Majlis-e-Shoora (Parliament) may by law confer functions upon officers or authorities subordinate to the Federal Government.",
    summary: "Allows Parliament by law to confer executive functions on subordinate federal authorities."
  },
  {
    article_number: "99",
    article_title: "Conduct of business of Federal Government",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 55,
    chunk_id: "article_99",
    text: "(1) All executive actions of the Federal Government shall be expressed to be taken in the name of the President.\n(2) The Federal Government shall by rules specify the manner in which orders and other instruments made and executed in the name of the President shall be authenticated, and the validity of any order or instrument so authenticated shall not be questioned in any court on the ground that it was not made or executed by the President.\n(3) The Federal Government shall also make rules for the allocation and transaction of its business.",
    summary: "Mandates executive actions taken in the President's name and rules for transaction of Federal Government business."
  },
  {
    article_number: "100",
    article_title: "Attorney-General for Pakistan",
    chapter: "Chapter 3: The Federal Government",
    part: "Part III",
    page_number: 55,
    chunk_id: "article_100",
    text: "(1) The President shall appoint a person, being a person qualified to be appointed a Judge of the Supreme Court, to be the Attorney-General for Pakistan.\n(2) The Attorney-General shall hold office during the pleasure of the President and shall not engage in private practice so long as he holds the office of the Attorney-General.\n(3) It shall be the duty of the Attorney-General to give advice to the Federal Government upon such legal matters, and to perform such other duties of a legal character, as may be referred or assigned to him by the Federal Government, and in the performance of his duties he shall have the right of audience in all courts and tribunals in Pakistan.\n(4) Resignation to President.",
    summary: "Provides for appointment, duties, and audience rights of the Attorney-General for Pakistan."
  },
  {
    article_number: "101",
    article_title: "Appointment of Governor",
    chapter: "Chapter 1: The Governors",
    part: "Part IV: Provinces",
    page_number: 57,
    chunk_id: "article_101",
    text: "(1) There shall be a Governor for each Province, who shall be appointed by the President on the advice of the Prime Minister.\n(2) A person shall not be appointed a Governor unless he is qualified to be elected as a member of the National Assembly and is not less than thirty-five years of age and is a registered voter and resident of the Province concerned.\n(3) The Governor shall hold office during the pleasure of the President and shall be entitled to such salary, allowances and privileges as the President may determine.\n(4) The Governor may, by writing under his hand addressed to the President, resign his office.\n(5) The President may make such provision as he thinks fit for the discharge of the functions of a Governor in any contingency not provided for in this Part.",
    summary: "Provides for appointment of Provincial Governors by the President on PM advice, qualifications, and term."
  },
  {
    article_number: "102",
    article_title: "Oath of Office",
    chapter: "Chapter 1: The Governors",
    part: "Part IV",
    page_number: 57,
    chunk_id: "article_102",
    text: "Before entering upon office, the Governor shall make before the Chief Justice of the High Court oath in the form set out in the Third Schedule.",
    summary: "Mandates Governor taking oath before the Chief Justice of the High Court."
  },
  {
    article_number: "103",
    article_title: "Conditions of Governor’s office",
    chapter: "Chapter 1: The Governors",
    part: "Part IV",
    page_number: 58,
    chunk_id: "article_103",
    text: "(1) The Governor shall not hold any office of profit in the service of Pakistan or occupy any other position carrying the right to remuneration for the rendering of services.\n(2) The Governor shall not be a candidate for election as a member of Majlis-e-Shoora (Parliament) or a Provincial Assembly and, if a member of Majlis-e-Shoora (Parliament) or a Provincial Assembly is appointed as Governor, his seat in Majlis-e-Shoora (Parliament) or, as the case may be, the Provincial Assembly shall become vacant on the day he enters upon his office.",
    summary: "Prohibits Governor from holding office of profit or legislative seat while in office."
  },
  {
    article_number: "104",
    article_title: "Speaker Provincial Assembly to act as, or perform functions of Governor in his absence",
    chapter: "Chapter 1: The Governors",
    part: "Part IV",
    page_number: 58,
    chunk_id: "article_104",
    text: "When the Governor, by reason of absence from Pakistan or for any other cause, is unable to perform his functions, the Speaker of the Provincial Assembly and in his absence any other person as the President may nominate shall perform the functions of Governor until the Governor returns to Pakistan or, as the case may be, resumes his functions.",
    summary: "Speaker of Provincial Assembly acts as Governor during absence or inability."
  },
  {
    article_number: "105",
    article_title: "Governor to act on advice, etc.",
    chapter: "Chapter 1: The Governors",
    part: "Part IV",
    page_number: 58,
    chunk_id: "article_105",
    text: "(1) Subject to Constitution, in the performance of his functions, the Governor shall act on and in accordance with the advice of the Cabinet or the Chief Minister:\nProvided that within fifteen days the Governor may require the Cabinet or, as the case may be, the Chief Minister to reconsider such advice, whether generally or otherwise, and the Governor shall, within ten days, act in accordance with the advice tendered after such reconsideration.\n(2) The question whether any, and if so what, advice was tendered to the Governor by the Chief Minister or the Cabinet shall not be inquired into in, or by, any court, tribunal or other authority.\n(3) Where the Governor dissolves the Provincial Assembly, notwithstanding anything contained in clause (1), he shall,—\n(a) appoint a date, not later than ninety days from the date of dissolution, for the holding of a general election to the Assembly; and\n(b) appoint a care-taker Cabinet.\n(5) The provisions of clause (2) of Article 48 shall have effect in relation to a Governor as if reference therein to \"President\" were reference to \"Governor\".",
    summary: "Requires Governor to act on advice of Chief Minister/Cabinet and directs 90-day election deadline on assembly dissolution."
  },
  {
    article_number: "106",
    article_title: "Constitution of Provincial Assemblies",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 59,
    chunk_id: "article_106",
    text: "(1) Each Provincial Assembly shall consist of general seats and seats reserved for women and non-Muslims as specified herein below:\nBalochistan: General 51, Women 11, Non-Muslims 3, Total 65\nKhyber Pakhtunkhwa: General 99, Women 22, Non-Muslims 3, Total 124\nThe Punjab: General 297, Women 66, Non-Muslims 8, Total 371\nSindh: General 130, Women 29, Non-Muslims 9, Total 168\n(2) A person shall be entitled to vote if he is a citizen of Pakistan, not less than 18 years of age, enrolled on electoral roll, and not declared of unsound mind.\n(3) Single member constituencies for general seats, proportional representation for reserved seats.",
    summary: "Specifies seat allocations, voter qualifications (age 18+), and election system for each Provincial Assembly."
  },
  {
    article_number: "107",
    article_title: "Duration of Provincial Assembly",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 60,
    chunk_id: "article_107",
    text: "A Provincial Assembly shall, unless sooner dissolved, continue for a term of five years from the day of its first meeting and shall stand dissolved at the expiration of its term.",
    summary: "Sets five-year tenure for Provincial Assemblies unless sooner dissolved."
  },
  {
    article_number: "108",
    article_title: "Speaker and Deputy Speaker",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 60,
    chunk_id: "article_108",
    text: "After a general election, a Provincial Assembly shall, at its first meeting and to the exclusion of any other business, elect from amongst its members a Speaker and a Deputy Speaker and, so often as the office of Speaker or Deputy Speaker becomes vacant, the Assembly shall elect another member as Speaker or, as the case may be, Deputy Speaker.",
    summary: "Provides for election of Speaker and Deputy Speaker by Provincial Assembly."
  },
  {
    article_number: "109",
    article_title: "Summoning and prorogation of Provincial Assembly",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 60,
    chunk_id: "article_109",
    text: "The Governor may from time to time—\n(a) summon the Provincial Assembly to meet at such time and place as he thinks fit; and\n(b) prorogue the Provincial Assembly.",
    summary: "Empowers Governor to summon and prorogue Provincial Assembly."
  },
  {
    article_number: "110",
    article_title: "Right of Governor to address Provincial Assembly",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 61,
    chunk_id: "article_110",
    text: "The Governor may address the Provincial Assembly and may for that purpose require the attendance of the members.",
    summary: "Grants Governor right to address the Provincial Assembly."
  },
  {
    article_number: "111",
    article_title: "Right to speak in Provincial Assembly",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 61,
    chunk_id: "article_111",
    text: "The Advocate-General shall have the right to speak and otherwise take part in the proceedings of the Provincial Assembly or any committee thereof of which he may be named a member, but shall not by virtue of this Article be entitled to vote.",
    summary: "Grants Advocate-General right to participate in Provincial Assembly proceedings without voting."
  },
  {
    article_number: "112",
    article_title: "Dissolution of Provincial Assembly",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 61,
    chunk_id: "article_112",
    text: "(1) The Governor shall dissolve the Provincial Assembly if so advised by the Chief Minister; and the Provincial Assembly shall, unless sooner dissolved, stand dissolved at the expiration of forty-eight hours after the Chief Minister has so advised.\nExplanation.– Reference in this Article to 'Chief Minister' shall not be construed to include reference to a Chief Minister against whom a notice of a resolution for a vote of no-confidence has been given in the Provincial Assembly but has not been voted upon or against whom a resolution for a vote of no-confidence has been passed.\n(2) The Governor may also dissolve the Provincial Assembly in his discretion, but subject to the previous approval of the President, where a vote of no-confidence having been passed against the Chief Minister, no other member of the Provincial Assembly commands the confidence of the majority of the members of the Provincial Assembly in accordance with the provisions of the Constitution, as ascertained in a session of the Provincial Assembly summoned for the purpose.",
    summary: "Governs dissolution of Provincial Assembly on Chief Minister advice or upon no-confidence vote."
  },
  {
    article_number: "113",
    article_title: "Qualifications and disqualifications for membership of Provincial Assembly",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 61,
    chunk_id: "article_113",
    text: "The qualifications and disqualifications for membership of the National Assembly set out in Articles 62 and 63 shall also apply for membership of a Provincial Assembly as if reference therein to \"National Assembly\" were a reference to \"Provincial Assembly\".",
    summary: "Applies National Assembly qualification/disqualification rules (Articles 62 & 63) to Provincial Assemblies."
  },
  {
    article_number: "114",
    article_title: "Restriction on discussion in Provincial Assembly",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 62,
    chunk_id: "article_114",
    text: "No discussion shall take place in a Provincial Assembly with respect to the conduct of any Judge of the Supreme Court or of a High Court in the discharge of his duties.",
    summary: "Bars discussion in Provincial Assembly regarding conduct of Supreme Court or High Court Judges."
  },
  {
    article_number: "115",
    article_title: "Provincial Government’s consent required for financial measures",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 62,
    chunk_id: "article_115",
    text: "(1) A Money Bill, or a Bill or amendment which if enacted and brought into operation would involve expenditure from the Provincial Consolidated Fund or withdrawal from the Public Account of the Province shall not be introduced or moved in the Provincial Assembly except by or with the consent of the Provincial Government.\n(2) Definition of Money Bill...\n(3) Fees and local taxes excluded.\n(4) Speaker decision on Money Bill final.\n(5) Speaker certificate required.",
    summary: "Requires Provincial Government consent for Money Bills and financial measures."
  },
  {
    article_number: "116",
    article_title: "Governor’s assent to Bills",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 63,
    chunk_id: "article_116",
    text: "(1) When a Bill has been passed by the Provincial Assembly, it shall be presented to the Governor for assent.\n(2) When a Bill is presented to the Governor for assent, the Governor shall, within ten days,—\n(a) assent to the Bill; or\n(b) in the case of a Bill other than a Money Bill, return the Bill to the Provincial Assembly with a message requesting that the Bill, or any specified provision thereof, be reconsidered and that any amendment specified in the message be considered.\n(3) When the Governor has returned a Bill to the Provincial Assembly, it shall be reconsidered by the Provincial Assembly and, if it is again passed, with or without amendment, by the Provincial Assembly, by the votes of the majority of the members of the Provincial Assembly present and voting, it shall be again presented to the Governor and the Governor shall give his assent within ten days, failing which such assent shall be deemed to have been given.\n(4) When the Governor has assented or is deemed to have assented to a Bill, it shall become law and be called an Act of Provincial Assembly.",
    summary: "Sets 10-day limit for Governor's assent to provincial bills, with deemed assent upon repassage."
  },
  {
    article_number: "117",
    article_title: "Bill not to lapse on prorogation, etc.",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 64,
    chunk_id: "article_117",
    text: "(1) A Bill pending in a Provincial Assembly shall not lapse by reason of the prorogation of the Assembly.\n(2) A Bill pending in a Provincial Assembly shall lapse on the dissolution of the Assembly.",
    summary: "Pending bills do not lapse on prorogation but lapse on assembly dissolution."
  },
  {
    article_number: "118",
    article_title: "Provincial Consolidated Fund and Public Account",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 64,
    chunk_id: "article_118",
    text: "(1) All revenues received by the Provincial Government, all loans raised by that Government, and all moneys received by it in repayment of any loan, shall form part of a consolidated fund, to be known as the Provincial Consolidated Fund.\n(2) All other moneys received by or on behalf of Provincial Government or High Court shall be credited to Public Account of Province.",
    summary: "Establishes Provincial Consolidated Fund and Public Account of the Province."
  },
  {
    article_number: "119",
    article_title: "Custody, etc., of Provincial Consolidated Fund and Public Account",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 64,
    chunk_id: "article_119",
    text: "The custody of the Provincial Consolidated Fund, the payment of moneys into that Fund, the withdrawal of moneys therefrom, the custody of other moneys received by or on behalf of the Provincial Government, their payment into, and withdrawal from, the Public Account of the Province, and all matters connected with or ancillary to the matters aforesaid, shall be regulated by Act of the Provincial Assembly or, until provision in that behalf is so made, by rules made by the Governor.",
    summary: "Regulates custody and transactions of Provincial Consolidated Fund and Public Account."
  },
  {
    article_number: "120",
    article_title: "Annual Budget Statement",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 64,
    chunk_id: "article_120",
    text: "(1) The Provincial Government shall, in respect of every financial year, cause to be laid before the Provincial Assembly statement of the estimated receipts and expenditure of the Provincial Government for that year, in this Chapter referred to as the Annual Budget Statement.\n(2) The Annual Budget Statement shall show separately charged expenditure and other expenditure.",
    summary: "Mandates annual provincial budget statement presentation to Provincial Assembly."
  },
  {
    article_number: "121",
    article_title: "Expenditure charged upon Provincial Consolidated Fund",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 65,
    chunk_id: "article_121",
    text: "The following expenditure shall be expenditure charged upon the Provincial Consolidated Fund:—\n(a) remuneration payable to Governor, High Court Judges, Speaker/Deputy Speaker;\n(b) administrative expenses of High Court and Assembly Secretariat;\n(c) provincial debt charges;\n(d) court decrees/judgments against Province;\n(e) other sums declared charged by Constitution or Provincial Act.",
    summary: "Lists expenditures charged upon the Provincial Consolidated Fund."
  },
  {
    article_number: "122",
    article_title: "Procedure relating to Annual Budget Statement",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 66,
    chunk_id: "article_122",
    text: "(1) So much of the Annual Budget Statement as relates to expenditure charged upon the Provincial Consolidated Fund may be discussed in, but shall not be submitted to the vote of the Provincial Assembly.\n(2) Other expenditure submitted in form of demands for grants.\n(3) Recommendation of Provincial Government required.",
    summary: "Governs voting on demands for grants in Provincial Assembly."
  },
  {
    article_number: "123",
    article_title: "Authentication of schedule of authorized expenditure",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 66,
    chunk_id: "article_123",
    text: "(1) The Chief Minister shall authenticate by his signature a schedule specifying grants made and charged expenditure.\n(2) Schedule laid before Assembly without vote.\n(3) No expenditure valid unless specified in authenticated schedule.",
    summary: "Requires Chief Minister signature to authenticate provincial authorized expenditure schedule."
  },
  {
    article_number: "124",
    article_title: "Supplementary and excess grant",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 66,
    chunk_id: "article_124",
    text: "If in respect of any financial year amount authorized is insufficient or spent in excess, Provincial Government shall have power to authorize expenditure and lay Supplementary or Excess Budget Statement before Assembly.",
    summary: "Provides for supplementary and excess financial grants in Provincial Assembly."
  },
  {
    article_number: "125",
    article_title: "Votes on account",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 67,
    chunk_id: "article_125",
    text: "Notwithstanding anything contained in the foregoing provisions relating to financial matters, the Provincial Assembly shall have power to make any grant in advance in respect of the estimated expenditure for a part of any financial year, not exceeding three months, pending completion of the procedure prescribed in Article 122.",
    summary: "Allows Provincial Assembly vote-on-account advance grants up to 3 months."
  },
  {
    article_number: "126",
    article_title: "Power to authorize expenditure when Assembly stands dissolved",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 67,
    chunk_id: "article_126",
    text: "Notwithstanding anything contained in the foregoing provisions relating to financial matters, at any time when the Provincial Assembly stands dissolved, the Provincial Government may authorize expenditure from the Provincial Consolidated Fund in respect of the estimated expenditure for a period not exceeding four months in any financial year...",
    summary: "Empowers Provincial Government to authorize up to 4 months expenditure during assembly dissolution."
  },
  {
    article_number: "127",
    article_title: "Provisions relating to National Assembly, etc., to apply to Provincial Assembly, etc.",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 67,
    chunk_id: "article_127",
    text: "Subject to the Constitution, the provisions of clauses (2) to (8) of Article 53, clauses (2) and (3) of Article 54, Article 55, Articles 63 to 67, Article 69, Article 77, Article 87 and Article 88 shall apply to and in relation to a Provincial Assembly...",
    summary: "Applies federal parliamentary procedures and privileges mutatis mutandis to Provincial Assemblies."
  },
  {
    article_number: "128",
    article_title: "Power of Governor to promulgate Ordinances",
    chapter: "Chapter 2: Provincial Assemblies",
    part: "Part IV",
    page_number: 68,
    chunk_id: "article_128",
    text: "(1) The Governor may, except when the Provincial Assembly is in session, if satisfied that circumstances exist which render it necessary to take immediate action, make and promulgate an Ordinance as the circumstances may require.\n(2) An Ordinance promulgated under this Article shall have the same force and effect as an Act of the Provincial Assembly and shall be subject to like restrictions as the power of the Provincial Assembly to make laws, but every such Ordinance—\n(a) shall be laid before the Provincial Assembly and shall stand repealed at the expiration of ninety days from its promulgation...\nProvided that the Provincial Assembly may by a resolution extend the Ordinance for a further period of ninety days...\nProvided further that extension for a further period may be made only once.\n(b) may be withdrawn at any time by the Governor.",
    summary: "Empowers Governor to promulgate Ordinances when Assembly is not in session, valid for 90 days with one 90-day extension."
  },
  {
    article_number: "129",
    article_title: "Exercise of executive authority of the Province",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 69,
    chunk_id: "article_129",
    text: "(1) Subject to the Constitution, the executive authority of the Province shall be exercised in the name of the Governor by the Provincial Government, consisting of the Chief Minister and Provincial Ministers, which shall act through the Chief Minister.\n(2) In the performance of his functions under the Constitution, the Chief Minister may act either directly or through the Provincial Ministers.",
    summary: "Vests provincial executive authority in the Provincial Government acting through the Chief Minister."
  },
  {
    article_number: "130",
    article_title: "The Cabinet",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 69,
    chunk_id: "article_130",
    text: "(1) There shall be a Cabinet of Ministers, with the Chief Minister at its head, to aid and advise the Governor in the exercise of his functions.\n(2) Assembly meets on 21st day following general election.\n(3) Election of Chief Minister without debate.\n(4) Election by majority of total membership, run-off polls if needed.\n(5) Oath before Governor.\n(6) Cabinet collectively responsible to Provincial Assembly; total Cabinet strength capped at 15 members or 11% of total membership, whichever is higher.\n(7) CM holds office during pleasure of Governor, vote of confidence rules.\n(8) Resignation by CM.\n(9) 6 months non-member minister rule.\n(11) Chief Minister shall not appoint more than five Advisors.",
    summary: "Establishes Provincial Cabinet, Chief Minister election, 11%/15-member Cabinet cap, and 5 Advisors limit."
  },
  {
    article_number: "131",
    article_title: "Governor to be kept informed",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 71,
    chunk_id: "article_131",
    text: "The Chief Minister shall keep the Governor informed on matters relating to Provincial administration and on all legislative proposals the Provincial Government intends to bring before the Provincial Assembly.",
    summary: "Requires Chief Minister to keep Governor informed on administration and legislative proposals."
  },
  {
    article_number: "132",
    article_title: "Provincial Ministers",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 71,
    chunk_id: "article_132",
    text: "(1) Subject to clauses (9) and (10) of Article 130, the Governor shall appoint Provincial Ministers from amongst members of the Provincial Assembly on the advice of the Chief Minister.\n(2) Oath before Governor.\n(3) Resignation or removal on Chief Minister advice.",
    summary: "Provides for appointment of Provincial Ministers on Chief Minister advice."
  },
  {
    article_number: "133",
    article_title: "Chief Minister continuing in office",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 71,
    chunk_id: "article_133",
    text: "The Governor may ask the Chief Minister to continue to hold office until his successor enters upon the office of Chief Minister.",
    summary: "Allows Governor to request outgoing Chief Minister to remain until successor assumes office."
  },
  {
    article_number: "134",
    article_title: "[Omitted]",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 72,
    chunk_id: "article_134",
    text: "[Resignation by Chief Minister] Omitted by P.O. No. 14 of 1985, Art. 2 and Sch.",
    summary: "Article 134 omitted."
  },
  {
    article_number: "135",
    article_title: "[Omitted]",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 72,
    chunk_id: "article_135",
    text: "[Provincial Minister performing functions of Chief Minister.] Omitted by P.O. No. 14 of 1985, Art. 2 and Sch.",
    summary: "Article 135 omitted."
  },
  {
    article_number: "136",
    article_title: "Vote of no-confidence against Chief Minister",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 72,
    chunk_id: "article_136",
    text: "(1) A resolution for a vote of no-confidence moved by not less than twenty per centum of the total membership of the Provincial Assembly may be passed against the Chief Minister by the Provincial Assembly.\n(2) Voting between 3 and 7 days after motion.\n(3) Passed by majority of total membership, CM ceases to hold office.",
    summary: "Sets out vote of no-confidence procedure against Chief Minister requiring total membership majority."
  },
  {
    article_number: "137",
    article_title: "Extent of executive authority of Province",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 72,
    chunk_id: "article_137",
    text: "Subject to the Constitution, the executive authority of the Province shall extend to the matters with respect to which the Provincial Assembly has power to make laws:\nProvided that, in any matter with respect to which both Majlis-e-Shoora (Parliament) and the Provincial Assembly of a Province have power to make laws, the executive authority of the Province shall be subject to, and limited by, the executive authority expressly conferred by the Constitution or by law made by Majlis-e-Shoora (Parliament) upon the Federal Government or authorities thereof.",
    summary: "Defines provincial executive authority scope matching provincial legislative competence."
  },
  {
    article_number: "138",
    article_title: "Conferring of functions on subordinate authorities",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 72,
    chunk_id: "article_138",
    text: "On the recommendation of the Provincial Government, the Provincial Assembly may by law confer functions upon officers or authorities subordinate to the Provincial Government.",
    summary: "Allows Provincial Assembly by law to confer executive functions on subordinate provincial authorities."
  },
  {
    article_number: "139",
    article_title: "Conduct of business of Provincial Government",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 72,
    chunk_id: "article_139",
    text: "(1) All executive actions of the Provincial Government shall be expressed to be taken in the name of the Governor.\n(2) Rules of authentication specified by Provincial Government.\n(3) Rules for allocation and transaction of business.",
    summary: "Mandates executive actions taken in Governor's name and rules for transaction of provincial business."
  },
  {
    article_number: "140",
    article_title: "Advocate General for a Province",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 73,
    chunk_id: "article_140",
    text: "(1) The Governor of each Province shall appoint a person, being a person qualified to be appointed a Judge of the High Court, to be the Advocate General for the Province.\n(2) Legal advice and duties assigned by Provincial Government.\n(3) Holds office during Governor pleasure, no private practice allowed.\n(4) Resignation to Governor.",
    summary: "Provides for appointment, duties, and conditions of Advocate General for a Province."
  },
  {
    article_number: "140A",
    article_title: "Local Government",
    chapter: "Chapter 3: The Provincial Governments",
    part: "Part IV",
    page_number: 73,
    chunk_id: "article_140a",
    text: "(1) Each Province shall, by law, establish a local government system and devolve political, administrative and financial responsibility and authority to the elected representatives of the local governments.\n(2) Elections to the local governments shall be held by the Election Commission of Pakistan.",
    summary: "Mandates provincial local government systems with devolved powers and ECP-conducted local elections."
  },
  {
    article_number: "141",
    article_title: "Extent of Federal and Provincial laws",
    chapter: "Chapter 1: Distribution of Legislative Powers",
    part: "Part V: Relations Between Federation and Provinces",
    page_number: 74,
    chunk_id: "article_141",
    text: "Subject to the Constitution, Majlis-e-Shoora (Parliament) may make laws (including laws having extra-territorial operation) for the whole or any part of Pakistan, and a Provincial Assembly may make laws for the Province or any part thereof.",
    summary: "Defines territorial extent of Federal laws (nationwide/extra-territorial) and Provincial laws."
  },
  {
    article_number: "142",
    article_title: "Subject-matter of Federal and Provincial laws",
    chapter: "Chapter 1: Distribution of Legislative Powers",
    part: "Part V",
    page_number: 74,
    chunk_id: "article_142",
    text: "Subject to the Constitution—\n(a) Majlis-e-Shoora (Parliament) shall have exclusive power to make laws with respect to any matter in the Federal Legislative List;\n(b) Majlis-e-Shoora (Parliament) and a Provincial Assembly shall have power to make laws with respect to criminal law, criminal procedure and evidence;\n(c) Subject to paragraph (b), a Provincial Assembly shall, and Majlis-e-Shoora (Parliament) shall not, have power to make laws with respect to any matter not enumerated in the Federal Legislative List;\n(d) Majlis-e-Shoora (Parliament) shall have exclusive power to make laws with respect to all matters pertaining to such areas in the Federation as are not included in any Province.",
    summary: "Delineates legislative domains: Federal List exclusive to Parliament, residual powers exclusive to Provinces."
  },
  {
    article_number: "143",
    article_title: "Inconsistency between Federal and Provincial law",
    chapter: "Chapter 1: Distribution of Legislative Powers",
    part: "Part V",
    page_number: 74,
    chunk_id: "article_143",
    text: "If any provision of an Act of a Provincial Assembly is repugnant to any provision of an Act of Majlis-e-Shoora (Parliament) which Majlis-e-Shoora (Parliament) is competent to enact, then the Act of Majlis-e-Shoora (Parliament), whether passed before or after the Act of the Provincial Assembly, shall prevail and the Act of the Provincial Assembly shall, to the extent of the repugnancy, be void.",
    summary: "Establishes supremacy of Federal law over conflicting Provincial law on shared subjects."
  },
  {
    article_number: "144",
    article_title: "Power of Majlis-e-Shoora (Parliament) to legislate for One or more Provinces by consent",
    chapter: "Chapter 1: Distribution of Legislative Powers",
    part: "Part V",
    page_number: 75,
    chunk_id: "article_144",
    text: "(1) If one or more Provincial Assemblies pass resolutions to the effect that Majlis-e-Shoora (Parliament) may by law regulate any matter not enumerated in the Federal Legislation List in the Fourth Schedule, it shall be lawful for Majlis-e-Shoora (Parliament) to pass an Act for regulating that matter accordingly, but any act so passed may, as respects any Province to which it applies, be amended or repealed by Act of the Assembly of that Province.",
    summary: "Allows Parliament to legislate on provincial subjects if requested by resolution of Provincial Assemblies."
  },
  {
    article_number: "145",
    article_title: "Power of President to direct Governor to discharge certain functions as his Agent",
    chapter: "Chapter 2: Administrative Relations",
    part: "Part V",
    page_number: 75,
    chunk_id: "article_145",
    text: "(1) The President may direct the Governor of any Province to discharge as his Agent, either generally or in any particular matter, such functions relating to such areas in the Federation which are not included in any Province as may be specified in the direction.\n(2) Article 105 advice rules do not apply.",
    summary: "Allows President to direct Governor to act as presidential agent for non-provincial federal territories."
  },
  {
    article_number: "146",
    article_title: "Power of Federation to confer powers, etc., on Provinces, in certain cases",
    chapter: "Chapter 2: Administrative Relations",
    part: "Part V",
    page_number: 75,
    chunk_id: "article_146",
    text: "(1) Notwithstanding anything contained in the Constitution, the Federal Government may, with the consent of the Government of a Province, entrust either conditionally or unconditionally to that Government, or to its officers functions in relation to any matter to which the executive authority of the Federation extends.\n(2) Parliament Act may confer powers on Province.\n(3) Federation pays extra administration costs.",
    summary: "Allows Federal Government to delegate executive functions to Provincial Governments with consent."
  },
  {
    article_number: "147",
    article_title: "Power of the Provinces to entrust functions to the Federation",
    chapter: "Chapter 2: Administrative Relations",
    part: "Part V",
    page_number: 76,
    chunk_id: "article_147",
    text: "Notwithstanding anything contained in the Constitution, the Government of a Province may, with the consent of the Federal Government, entrust, either conditionally or unconditionally, to the Federal Government, or to its officers, functions in relation to any matter to which the executive authority of the Province extends:\nProvided that the Provincial Government shall get the functions so entrusted ratified by the Provincial Assembly within sixty days.",
    summary: "Allows Provincial Government to entrust functions to Federation subject to Assembly ratification within 60 days."
  },
  {
    article_number: "148",
    article_title: "Obligation of Provinces and Federation",
    chapter: "Chapter 2: Administrative Relations",
    part: "Part V",
    page_number: 76,
    chunk_id: "article_148",
    text: "(1) The executive authority of every Province shall be so exercised as to secure compliance with Federal laws which apply in that Province.\n(2) Federal executive authority to have regard to provincial interests.\n(3) Federation duty to protect Provinces against external aggression and internal disturbances.",
    summary: "Requires provincial compliance with Federal laws and imposes duty on Federation to protect Provinces."
  },
  {
    article_number: "149",
    article_title: "Directions to Provinces in certain cases",
    chapter: "Chapter 2: Administrative Relations",
    part: "Part V",
    page_number: 76,
    chunk_id: "article_149",
    text: "(1) The executive authority of every Province shall be so exercised as not to impede or prejudice the exercise of the executive authority of the Federation, and the executive authority of the Federation shall extend to the giving of such directions to a Province as may appear to the Federal Government to be necessary for that purpose.\n(3) Directions regarding national/strategic communications.\n(4) Directions to prevent grave menace to peace, tranquility, or economic life.",
    summary: "Empowers Federal Government to issue binding directions to Provinces on strategic and peace-keeping matters."
  },
  {
    article_number: "150",
    article_title: "Full faith and credit for public acts, etc.",
    chapter: "Chapter 2: Administrative Relations",
    part: "Part V",
    page_number: 77,
    chunk_id: "article_150",
    text: "Full faith and credit shall be given throughout Pakistan to public acts and records, and judicial proceedings of every Province.",
    summary: "Mandates full faith and credit across Pakistan for provincial public acts, records, and court proceedings."
  },
  {
    article_number: "151",
    article_title: "Inter-Provincial trade",
    chapter: "Chapter 2: Administrative Relations",
    part: "Part V",
    page_number: 77,
    chunk_id: "article_151",
    text: "(1) Subject to clause (2), trade, commerce and intercourse throughout Pakistan shall be free.\n(2) Parliament may by law impose reasonable restrictions in public interest.\n(3) Provinces cannot prohibit entry/export or discriminate in taxation against goods from other provinces.",
    summary: "Guarantees free inter-provincial trade and bars discriminatory provincial trade barriers or tariffs."
  },
  {
    article_number: "152",
    article_title: "Acquisition of land for Federal purposes",
    chapter: "Chapter 2: Administrative Relations",
    part: "Part V",
    page_number: 78,
    chunk_id: "article_152",
    text: "The Federation may, if it deems necessary to acquire any land situate in a Province for any purpose connected with a matter with respect to which Majlis-e-Shoora (Parliament) has power to make laws, require the Province to acquire the land on behalf, and at the expense, of the Federation or, if the land belongs to the Province, to transfer it to the Federation on such terms as may be agreed or, in default of agreement, as may be determined by an arbitrator appointed by the Chief Justice of Pakistan.",
    summary: "Allows Federation to acquire land located in a Province for federal purposes."
  },
  {
    article_number: "152A",
    article_title: "[Omitted]",
    chapter: "Chapter 3: Special Provisions",
    part: "Part V",
    page_number: 78,
    chunk_id: "article_152a",
    text: "[National Security Council.] Omitted by the Constitution (Seventeenth Amdt.) Act 2003 (3 of 2003), s. 5.",
    summary: "Article 152A omitted."
  },
  {
    article_number: "153",
    article_title: "Council of Common Interests",
    chapter: "Chapter 3: Special Provisions",
    part: "Part V",
    page_number: 78,
    chunk_id: "article_153",
    text: "(1) There shall be a Council of Common Interests, in this Chapter referred to as the Council, to be appointed by the President.\n(2) The Council shall consist of—\n(a) the Prime Minister who shall be the Chairman of the Council;\n(b) the Chief Ministers of the Provinces; and\n(c) three members from the Federal Government to be nominated by the Prime Minister from time to time.\n(4) The Council shall be responsible to Majlis-e-Shoora (Parliament) and shall submit an Annual Report to both Houses.",
    summary: "Establishes Council of Common Interests (CCI) chaired by PM with Chief Ministers and Federal nominees."
  },
  {
    article_number: "154",
    article_title: "Functions and rules of procedure",
    chapter: "Chapter 3: Special Provisions",
    part: "Part V",
    page_number: 79,
    chunk_id: "article_154",
    text: "(1) The Council shall formulate and regulate policies in relation to matters in Part II of the Federal Legislative List and shall exercise supervision and control over related institutions.\n(2) Constituted within 30 days of PM oath.\n(3) Permanent Secretariat, meets at least once in 90 days.\n(4) Decisions by majority.\n(6) Directions by Parliament in joint sitting.",
    summary: "Defines CCI functions over Part II Federal Legislative List, 90-day mandatory meeting frequency, and parliamentary supervision."
  },
  {
    article_number: "155",
    article_title: "Complaints as to interference with water supplies",
    chapter: "Chapter 3: Special Provisions",
    part: "Part V",
    page_number: 79,
    chunk_id: "article_155",
    text: "(1) If the interests of a Province, the Federal Capital or FATA in water from any natural source of supply or reservoir have been or are likely to be affected prejudicially, written complaint may be made to Council.\n(2) Council decision or Commission appointment.\n(5) Duty of Federal/Provincial Governments to give effect faithfully.",
    summary: "Establishes complaint mechanism and resolution process via CCI for inter-provincial water disputes."
  },
  {
    article_number: "156",
    article_title: "National Economic Council",
    chapter: "Chapter 3: Special Provisions",
    part: "Part V",
    page_number: 80,
    chunk_id: "article_156",
    text: "(1) The President shall constitute a National Economic Council which shall consist of:—\n(a) the Prime Minister, Chairman;\n(b) Chief Ministers and one member from each Province;\n(c) four other members nominated by PM.\n(2) Reviews economic conditions and formulates financial/social policies ensuring balanced regional development.\n(4) Meets at least twice a year.\n(5) Responsible to Parliament with Annual Report.",
    summary: "Establishes National Economic Council (NEC) to advise on financial and economic policy ensuring regional equity."
  },
  {
    article_number: "157",
    article_title: "Electricity",
    chapter: "Chapter 3: Special Provisions",
    part: "Part V",
    page_number: 81,
    chunk_id: "article_157",
    text: "(1) Federal Government may construct power installations or grid stations, provided it consults Provincial Government prior to hydro-electric power decision.\n(2) Provincial Government powers regarding bulk supply, electricity tax, power house construction, and distribution tariff.\n(3) Disputes referred to CCI.",
    summary: "Delineates Federal and Provincial powers over electricity generation, tariffs, and distribution, with CCI dispute resolution."
  },
  {
    article_number: "158",
    article_title: "Priority of requirements of natural gas",
    chapter: "Chapter 3: Special Provisions",
    part: "Part V",
    page_number: 82,
    chunk_id: "article_158",
    text: "The Province in which a well-head of natural gas is situated shall have precedence over other parts of Pakistan in meeting the requirements from that well-head, subject to the commitments and obligations as on the commencing day.",
    summary: "Gives gas-producing Provinces first priority/precedence over natural gas from well-heads in that Province."
  },
  {
    article_number: "159",
    article_title: "Broadcasting and telecasting",
    chapter: "Chapter 3: Special Provisions",
    part: "Part V",
    page_number: 82,
    chunk_id: "article_159",
    text: "(1) The Federal Government shall not unreasonably refuse to entrust to a Provincial Government broadcasting and telecasting functions...\n(2) Entrusted functions subject to conditions, but Federal Govt cannot regulate content broadcast by Provincial authority.\n(4) Arbitrator appointed by Chief Justice of Pakistan for disputes.",
    summary: "Governs provincial broadcasting/telecasting rights and arbitration of Federal-Provincial broadcasting disputes."
  },
  {
    article_number: "160",
    article_title: "National Finance Commission",
    chapter: "Chapter 1: Finance",
    part: "Part VI: Finance, Property, Contracts and Suits",
    page_number: 84,
    chunk_id: "article_160",
    text: "(1) Within six months of commencing day and thereafter at intervals not exceeding five years, President constitutes National Finance Commission (NFC) with Federal and Provincial Finance Ministers.\n(2) Recommendations on tax distribution between Federation and Provinces.\n(3A) Share of Provinces in each Award shall not be less than share given in previous Award.\n(3B) Biannual monitoring reports to Parliament and Assemblies.",
    summary: "Establishes National Finance Commission (NFC) for tax revenue distribution, guaranteeing non-reduction of provincial share."
  },
  {
    article_number: "161",
    article_title: "Natural gas and hydro-electric power",
    chapter: "Chapter 1: Finance",
    part: "Part VI",
    page_number: 86,
    chunk_id: "article_161",
    text: "(1) Net proceeds of Federal excise duty on natural gas and oil at well-head, and royalties, shall be paid directly to the Province where well-head is situated.\n(2) Net profits earned from hydro-electric power generation paid to Province where station is situated.",
    summary: "Directs payment of gas/oil excise duties, royalties, and hydro-electric profits directly to source Provinces."
  },
  {
    article_number: "162",
    article_title: "Prior sanction of President required to Bills affecting taxation in which Provinces are interested",
    chapter: "Chapter 1: Finance",
    part: "Part VI",
    page_number: 86,
    chunk_id: "article_162",
    text: "No Bill or amendment which imposes or varies a tax or duty the whole or part of the net proceeds whereof is assigned to any Province, or which varies the meaning of \"agricultural income\", shall be introduced in National Assembly except with previous sanction of President.",
    summary: "Requires prior Presidential sanction for tax bills affecting provincial revenue shares."
  },
  {
    article_number: "163",
    article_title: "Provincial taxes in respect of professions, etc.",
    chapter: "Chapter 1: Finance",
    part: "Part VI",
    page_number: 87,
    chunk_id: "article_163",
    text: "A Provincial Assembly may by Act impose taxes, not exceeding such limits as may from time to time be fixed by Act of Majlis-e-Shoora (Parliament), on persons engaged in professions, trades, callings or employments, and no such Act shall be regarded as imposing a tax on income.",
    summary: "Empowers Provincial Assemblies to levy professional and trade taxes within parliamentary limits."
  },
  {
    article_number: "164",
    article_title: "Grants out of Consolidated Fund",
    chapter: "Chapter 1: Finance",
    part: "Part VI",
    page_number: 87,
    chunk_id: "article_164",
    text: "The Federation or a Province may make grants for any purpose, notwithstanding that the purpose is not one with respect to which Majlis-e-Shoora (Parliament) or, as the case may be, a Provincial Assembly may make laws.",
    summary: "Allows Federation or Provinces to make financial grants for any public purpose."
  },
  {
    article_number: "165",
    article_title: "Exemption of certain public property from taxation",
    chapter: "Chapter 1: Finance",
    part: "Part VI",
    page_number: 87,
    chunk_id: "article_165",
    text: "(1) Federal Government property/income exempt from Provincial tax; Provincial Government property/income exempt from Federal tax or tax of another Province.\n(2) Provincial trade/business outside Province may be taxed.",
    summary: "Exempts Federal and Provincial public property and income from mutual taxation."
  },
  {
    article_number: "165A",
    article_title: "Power of Majlis-e-Shoora (Parliament) to impose tax on the income of certain corporations, etc.",
    chapter: "Chapter 1: Finance",
    part: "Part VI",
    page_number: 87,
    chunk_id: "article_165a",
    text: "(1) For removal of doubt, Parliament has power to make law for levy and recovery of tax on income of corporation, company, or body established by or under Federal or Provincial law or owned/controlled by Federal or Provincial Government.",
    summary: "Affirms Federal Parliament power to tax income of government-owned statutory corporations and companies."
  },
  {
    article_number: "166",
    article_title: "Borrowing by Federal Government",
    chapter: "Chapter 2: Borrowing and Audit",
    part: "Part VI",
    page_number: 88,
    chunk_id: "article_166",
    text: "The executive authority of the Federation extends to borrowing upon the security of the Federal Consolidated Fund within such limits, if any, as may from time to time be fixed by Act of Majlis-e-Shoora (Parliament), and to the giving of guarantees within such limits...",
    summary: "Authorizes Federal borrowing and guarantees secured on Federal Consolidated Fund within statutory limits."
  },
  {
    article_number: "167",
    article_title: "Borrowing by Provincial Government",
    chapter: "Chapter 2: Borrowing and Audit",
    part: "Part VI",
    page_number: 88,
    chunk_id: "article_167",
    text: "(1) Provincial executive authority extends to borrowing on security of Provincial Consolidated Fund within Assembly limits.\n(2) Federal loans/guarantees to Provinces.\n(3) Federal consent required if previous Federal loan outstanding.\n(4) Province may raise domestic or international loans subject to NEC conditions.",
    summary: "Regulates Provincial borrowing, Federal loan consent, and international borrowing under NEC limits."
  },
  {
    article_number: "168",
    article_title: "Auditor-General of Pakistan",
    chapter: "Chapter 2: Borrowing and Audit",
    part: "Part VI",
    page_number: 89,
    chunk_id: "article_168",
    text: "(1) There shall be an Auditor-General of Pakistan, appointed by President.\n(2) Oath before Chief Justice of Pakistan.\n(3) Term 4 years or age 65, whichever earlier.\n(4) Ineligible for further service in Pakistan for 2 years after term.\n(5) Removed only in like manner as Supreme Court Judge.",
    summary: "Establishes Auditor-General of Pakistan, 4-year tenure, judicial-level removal security, and oath."
  },
  {
    article_number: "169",
    article_title: "Functions and powers of Auditor-General",
    chapter: "Chapter 2: Borrowing and Audit",
    part: "Part VI",
    page_number: 90,
    chunk_id: "article_169",
    text: "The Auditor-General shall, in relation to—\n(a) the accounts of the Federation and of the Provinces; and\n(b) the accounts of any authority or body established by the Federation or a Province,\nperform such functions and exercise such powers as may be determined by Act of Parliament.",
    summary: "Defines audit mandate over Federal and Provincial accounts and statutory bodies."
  },
  {
    article_number: "170",
    article_title: "Power of Auditor-General to give directions as to accounts",
    chapter: "Chapter 2: Borrowing and Audit",
    part: "Part VI",
    page_number: 90,
    chunk_id: "article_170",
    text: "(1) Accounts of Federation and Provinces kept in form prescribed by Auditor-General with Presidential approval.\n(2) Audit of accounts of Federal/Provincial Governments and controlled bodies conducted by Auditor-General.",
    summary: "Empowers Auditor-General to prescribe account formats and conduct comprehensive public audits."
  },
  {
    article_number: "171",
    article_title: "Reports of Auditor-General",
    chapter: "Chapter 2: Borrowing and Audit",
    part: "Part VI",
    page_number: 90,
    chunk_id: "article_171",
    text: "The reports of the Auditor-General relating to the accounts of the Federation shall be submitted to the President, who shall cause them to be laid before both Houses of Majlis-e-Shoora (Parliament) and reports relating to Provincial accounts submitted to Governor to lay before Provincial Assembly.",
    summary: "Mandates submission of Federal audit reports to Parliament and Provincial reports to Provincial Assemblies."
  },
  {
    article_number: "172",
    article_title: "Ownerless property",
    chapter: "Chapter 3: Property, Contracts, Liabilities and Suits",
    part: "Part VI",
    page_number: 91,
    chunk_id: "article_172",
    text: "(1) Any property which has no rightful owner shall, if located in a Province, vest in Government of that Province, and in every other case, in Federal Government.\n(2) Lands, minerals, ocean floor beyond territorial waters vest in Federal Government.\n(3) Mineral oil and natural gas within Province/territorial waters vest jointly and equally in Province and Federal Government.",
    summary: "Governs bona vacantia ownerless property and joint 50-50 ownership of oil and gas between Province and Federal Govt."
  },
  {
    article_number: "173",
    article_title: "Power to acquire property and to make contracts, etc.",
    chapter: "Chapter 3: Property, Contracts, Liabilities and Suits",
    part: "Part VI",
    page_number: 91,
    chunk_id: "article_173",
    text: "(1) Executive authority extends to grant, sale, mortgage, acquisition of property, and making contracts.\n(2) Property vests in Federation or Province.\n(3) Contracts expressed in name of President or Governor.\n(4) No personal liability for President or Governor.",
    summary: "Grants executive powers for property acquisition and contracts without personal liability for Head of State/Governor."
  },
  {
    article_number: "174",
    article_title: "Suits and proceedings",
    chapter: "Chapter 3: Property, Contracts, Liabilities and Suits",
    part: "Part VI",
    page_number: 92,
    chunk_id: "article_174",
    text: "The Federation may sue or be sued by the name of Pakistan and a Province may sue or be sued by the name of the Province.",
    summary: "Specifies legal name of Federation ('Pakistan') and Provinces in litigation."
  },
  {
    article_number: "175",
    article_title: "Establishment and jurisdiction of courts",
    chapter: "Chapter 1: The Courts",
    part: "Part VII: The Judicature",
    page_number: 93,
    chunk_id: "article_175",
    text: "(1) There shall be a Supreme Court of Pakistan, a High Court for each Province and a High Court for the Islamabad Capital Territory and such other courts as may be established by law.\nExplanation.—The word \"High Court\" includes Islamabad High Court.\n(2) No court shall have jurisdiction save as conferred by Constitution or law.\n(3) Separation of Judiciary from Executive.",
    summary: "Establishes Supreme Court, Provincial High Courts, Islamabad High Court, and separation of Judiciary from Executive."
  },
  {
    article_number: "175A",
    article_title: "Appointment of Judges to the Supreme Court, High Courts and the Federal Shariat Court",
    chapter: "Chapter 1: The Courts",
    part: "Part VII",
    page_number: 93,
    chunk_id: "article_175a",
    text: "(1) Judicial Commission of Pakistan (JCP) constituted for appointment of Judges of Supreme Court, High Courts and Federal Shariat Court.\n(2) JCP composition for Supreme Court: CJP (Chairman), 4 senior Judges, former CJP/Judge, Law Minister, Attorney-General, Senior Advocate nominated by PBC.\n(3) Senior-most Judge appointed CJP.\n(8) JCP nominates 1 candidate per vacancy to 8-member Parliamentary Committee.\n(12) Parliamentary Committee confirmation process within 14 days.",
    summary: "Sets out detailed procedure for judicial appointments via Judicial Commission of Pakistan and Parliamentary Committee."
  },
  {
    article_number: "176",
    article_title: "Constitution of Supreme Court",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 96,
    chunk_id: "article_176",
    text: "The Supreme Court shall consist of a Chief Justice to be known as the Chief Justice of Pakistan and so many other Judges as may be determined by Act of Majlis-e-Shoora (Parliament) or, until so determined, as may be fixed by the President.",
    summary: "Defines composition of Supreme Court consisting of CJP and judges as fixed by Parliament."
  },
  {
    article_number: "177",
    article_title: "Appointment of Supreme Court Judges",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 96,
    chunk_id: "article_177",
    text: "(1) Chief Justice of Pakistan and Supreme Court Judges appointed in accordance with Article 175A.\n(2) Qualification: Citizen of Pakistan AND at least 5 years High Court Judge OR at least 15 years High Court Advocate.",
    summary: "Sets qualifications for Supreme Court Judges (5 years High Court Judge or 15 years Advocate)."
  },
  {
    article_number: "178",
    article_title: "Oath of Office",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 97,
    chunk_id: "article_178",
    text: "Before entering upon office, the Chief Justice of Pakistan shall make before the President, and any other Judge of the Supreme Court shall make before the Chief Justice, oath in the form set out in the Third Schedule.",
    summary: "Mandates CJP oath before President and Supreme Court Judges oath before CJP."
  },
  {
    article_number: "179",
    article_title: "Retiring age",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 97,
    chunk_id: "article_179",
    text: "A Judge of the Supreme Court shall hold office until he attains the age of sixty-five years, unless he sooner resigns or is removed from office in accordance with the Constitution.",
    summary: "Fixes Supreme Court Judge retirement age at 65 years."
  },
  {
    article_number: "180",
    article_title: "Acting Chief Justice",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 97,
    chunk_id: "article_180",
    text: "At any time when the office of Chief Justice of Pakistan is vacant or CJP is absent/unable to perform functions, President appoints the most senior of other Judges of Supreme Court to act as CJP.",
    summary: "Provides for appointment of Acting Chief Justice of Pakistan (most senior SC judge)."
  },
  {
    article_number: "181",
    article_title: "Acting Judges",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 97,
    chunk_id: "article_181",
    text: "(1) When SC Judge office is vacant or Judge absent, President may appoint a qualified High Court Judge to act temporarily as SC Judge.\n(2) Appointment continues until revoked by President.",
    summary: "Allows temporary appointment of qualified High Court Judges as Acting Supreme Court Judges."
  },
  {
    article_number: "182",
    article_title: "Appointment of ad-hoc Judges",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 98,
    chunk_id: "article_182",
    text: "If at any time for want of quorum or reason to temporarily increase judges, CJP in consultation with JCP may in writing with Presidential approval request retired SC judges (within 3 years of retirement) or qualified High Court judges to attend SC sittings as ad-hoc Judges.",
    summary: "Governs appointment of ad-hoc Judges to Supreme Court for quorum or temporary need."
  },
  {
    article_number: "183",
    article_title: "Seat of the Supreme Court",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 98,
    chunk_id: "article_183",
    text: "(1) Permanent seat of Supreme Court shall be at Islamabad.\n(2) SC may sit in other places as CJP with Presidential approval appoints.",
    summary: "Designates Islamabad as permanent seat of Supreme Court with registry benches elsewhere."
  },
  {
    article_number: "184",
    article_title: "Original Jurisdiction of Supreme Court",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 99,
    chunk_id: "article_184",
    text: "(1) Supreme Court has exclusive original jurisdiction in disputes between any two or more Governments (Federal and Provincial).\n(2) Pronounces declaratory judgments only.\n(3) Without prejudice to Article 199, if SC considers question of public importance with reference to enforcement of Fundamental Rights involved, SC has power to make order (suo motu / public interest litigation).",
    summary: "Confers exclusive original jurisdiction over inter-governmental disputes and Article 184(3) fundamental rights enforcement power."
  },
  {
    article_number: "185",
    article_title: "Appellate jurisdiction of Supreme Court",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 99,
    chunk_id: "article_185",
    text: "(1) Supreme Court jurisdiction to hear appeals from High Court judgments, decrees, sentences.\n(2) Appeal lies as of right in capital punishment/acquittal reversal, contempt, high value disputes, constitutional interpretation.\n(3) In other cases, appeal lies only if Supreme Court grants leave to appeal.",
    summary: "Sets appellate jurisdiction of Supreme Court as of right and by leave to appeal."
  },
  {
    article_number: "186",
    article_title: "Advisory Jurisdiction",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 100,
    chunk_id: "article_186",
    text: "(1) If President considers it desirable to obtain SC opinion on any question of law of public importance, he may refer question to Supreme Court.\n(2) Supreme Court considers and reports opinion to President.",
    summary: "Confers advisory jurisdiction on Supreme Court upon Presidential reference on public legal questions."
  },
  {
    article_number: "186A",
    article_title: "Power of Supreme Court to transfer cases",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 100,
    chunk_id: "article_186a",
    text: "The Supreme Court may, if it considers it expedient to do so in the interest of justice, transfer any case, appeal or other proceedings pending before any High Court to any other High Court.",
    summary: "Empowers Supreme Court to transfer cases between High Courts in the interest of justice."
  },
  {
    article_number: "187",
    article_title: "Issue and execution of processes of Supreme Court",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 100,
    chunk_id: "article_187",
    text: "(1) Supreme Court has power to issue directions, orders or decrees necessary for doing complete justice in any pending case.\n(2) Enforceable throughout Pakistan.",
    summary: "Grants Supreme Court power to issue complete justice orders enforceable nationwide."
  },
  {
    article_number: "188",
    article_title: "Review of judgments of orders by the Supreme Court",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 101,
    chunk_id: "article_188",
    text: "The Supreme Court shall have power, subject to the provisions of any Act of Majlis-e-Shoora (Parliament) and of any rules made by the Supreme Court, to review any judgment pronounced or any order made by it.",
    summary: "Confers power on Supreme Court to review its own judgments and orders."
  },
  {
    article_number: "189",
    article_title: "Decisions of Supreme Court binding on other Courts",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 101,
    chunk_id: "article_189",
    text: "Any decision of the Supreme Court shall, to the extent that it decides a question of law or is based upon or enunciates a principle of law, be binding on all other courts in Pakistan.",
    summary: "Declares Supreme Court legal rulings and precedents binding on all other courts in Pakistan."
  },
  {
    article_number: "190",
    article_title: "Action in aid of Supreme Court",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 101,
    chunk_id: "article_190",
    text: "All executive and judicial authorities throughout Pakistan shall act in aid of the Supreme Court.",
    summary: "Mandates that all executive and judicial authorities across Pakistan act in aid of the Supreme Court."
  },
  {
    article_number: "191",
    article_title: "Rules of procedure",
    chapter: "Chapter 2: The Supreme Court of Pakistan",
    part: "Part VII",
    page_number: 101,
    chunk_id: "article_191",
    text: "Subject to the Constitution and law, the Supreme Court may make rules regulating the practice and procedure of the Court.",
    summary: "Empowers Supreme Court to frame its own practice and procedure rules."
  },
  {
    article_number: "192",
    article_title: "Constitution of High Court",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 101,
    chunk_id: "article_192",
    text: "(1) A High Court shall consist of a Chief Justice and so many other Judges as may be determined by law or fixed by President.\n(4) Jurisdiction may be extended to non-provincial areas by Act of Parliament.",
    summary: "Defines composition of High Court consisting of Chief Justice and Judges."
  },
  {
    article_number: "193",
    article_title: "Appointment of High Court Judges",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 102,
    chunk_id: "article_193",
    text: "(1) Chief Justice and Judges of High Court appointed under Article 175A.\n(2) Qualifications: Citizen, age 45+, and 10 years High Court advocate OR 10 years civil servant with 3 years District Judge OR 10 years judicial office.",
    summary: "Sets qualifications for High Court Judges (age 45+, 10 years advocate/judicial office/civil service)."
  },
  {
    article_number: "194",
    article_title: "Oath of Office",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 103,
    chunk_id: "article_194",
    text: "Before entering upon office, Chief Justice of High Court takes oath before Governor (or President for IHC), and other Judges before Chief Justice of High Court.",
    summary: "Mandates High Court Chief Justice oath before Governor (or President for IHC) and Judges before CJ."
  },
  {
    article_number: "195",
    article_title: "Retiring age",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 103,
    chunk_id: "article_195",
    text: "A Judge of a High Court shall hold office until he attains the age of sixty-two years, unless he sooner resigns or is removed from office in accordance with the Constitution.",
    summary: "Fixes retirement age for High Court Judges at 62 years."
  },
  {
    article_number: "196",
    article_title: "Acting Chief Justice",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 103,
    chunk_id: "article_196",
    text: "When office of Chief Justice of High Court is vacant or CJ absent, President appoints one of other High Court Judges or Supreme Court Judge to act as CJ.",
    summary: "Provides for appointment of Acting Chief Justice of a High Court."
  },
  {
    article_number: "197",
    article_title: "Additional Judges",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 104,
    chunk_id: "article_197",
    text: "When office of Judge is vacant or necessary to increase judges, President may appoint qualified person as Additional Judge for a specified period.",
    summary: "Allows appointment of Additional Judges to High Courts for temporary periods."
  },
  {
    article_number: "198",
    article_title: "Seat of the High Court",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 104,
    chunk_id: "article_198",
    text: "(1) Principal seats: Lahore, Karachi, Peshawar, Quetta, Islamabad.\n(3) Benches: LHC at Bahawalpur, Multan, Rawalpindi; SHC at Sukkur; PHC at Abbottabad, Mingora, DI Khan; BHC at Sibi, Turbat.",
    summary: "Designates principal seats and permanent circuit benches of all High Courts."
  },
  {
    article_number: "199",
    article_title: "Jurisdiction of High Court",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 105,
    chunk_id: "article_199",
    text: "(1) Constitutional writ jurisdiction of High Court:\n(a) Writs of Mandamus, Prohibition, Certiorari against public functionaries;\n(b) Writs of Habeas Corpus and Quo Warranto;\n(c) Directions for enforcement of Fundamental Rights.\n(3) Bar regarding Armed Forces personnel terms of service.\n(4) Interim orders subject to notice and 6-month limit.",
    summary: "Confers comprehensive writ jurisdiction (Mandamus, Prohibition, Certiorari, Habeas Corpus, Quo Warranto) on High Courts."
  },
  {
    article_number: "200",
    article_title: "Transfer of High Court Judges",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 107,
    chunk_id: "article_200",
    text: "(1) President may transfer a Judge of a High Court from one High Court to another with consent and consultation with CJP and Chief Justices of both High Courts.\n(2) Entitled to transfer allowances.",
    summary: "Governs transfer of High Court Judges between High Courts with consent and CJP consultation."
  },
  {
    article_number: "201",
    article_title: "Decision of High Court binding on subordinate Courts",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 108,
    chunk_id: "article_201",
    text: "Subject to Article 189, any decision of a High Court shall, to the extent that it decides a question of law or is based upon or enunciates a principle of law, be binding on all courts subordinate to it.",
    summary: "Establishes that High Court legal rulings are binding on all subordinate courts within its jurisdiction."
  },
  {
    article_number: "202",
    article_title: "Rules of procedure",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 108,
    chunk_id: "article_202",
    text: "Subject to the Constitution and law, a High Court may make rules regulating the practice and procedure of the Court or of any court subordinate to it.",
    summary: "Empowers High Court to frame rules governing its own practice and subordinate court procedures."
  },
  {
    article_number: "203",
    article_title: "High Court to superintend subordinate Courts",
    chapter: "Chapter 3: The High Courts",
    part: "Part VII",
    page_number: 108,
    chunk_id: "article_203",
    text: "Each High Court shall supervise and control all courts subordinate to it.",
    summary: "Vests administrative supervision and control over all subordinate courts in the High Court."
  },
  {
    article_number: "203A",
    article_title: "Provisions of Chapter to override other provisions of Constitution",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 108,
    chunk_id: "article_203a",
    text: "The provisions of this Chapter shall have effect notwithstanding anything contained in the Constitution.",
    summary: "Gives non-obstante overriding effect to Chapter 3A establishing the Federal Shariat Court."
  },
  {
    article_number: "203B",
    article_title: "Definitions",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 108,
    chunk_id: "article_203b",
    text: "In this Chapter: (a) 'Chief Justice' means Chief Justice of Federal Shariat Court; (c) 'Law' includes any custom or usage having the force of law, but does not include Constitution, Muslim Personal Law, any law relating to procedure of any court or tribunal or financial law/taxes until expiration of specified period.",
    summary: "Defines 'Law' and parameters for Federal Shariat Court jurisdiction excluding Constitution and procedural laws."
  },
  {
    article_number: "203C",
    article_title: "Federal Shariat Court",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 109,
    chunk_id: "article_203c",
    text: "(1) There shall be a Court to be called the Federal Shariat Court.\n(2) The Court shall consist of not more than eight Muslim Judges, including the Chief Justice, appointed by the President in accordance with Article 175A.\n(3) Not more than three shall be Ulema well-versed in Islamic law.",
    summary: "Establishes Federal Shariat Court consisting of up to 8 Muslim Judges including Ulema Judges."
  },
  {
    article_number: "203D",
    article_title: "Powers, jurisdiction and functions of the Court",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 110,
    chunk_id: "article_203d",
    text: "(1) The Court may, either of its own motion or on the petition of a citizen of Pakistan or the Federal/Provincial Government, examine and decide whether any law or provision of law is repugnant to the Injunctions of Islam as laid down in the Holy Quran and Sunnah.\n(2) If law held repugnant, specifies date on which decision takes effect and law ceases to have effect.",
    summary: "Empowers Federal Shariat Court to examine laws for repugnancy to Quran and Sunnah."
  },
  {
    article_number: "203DD",
    article_title: "Revisional and other jurisdiction of the Court",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 111,
    chunk_id: "article_203dd",
    text: "(1) The Court may call for and examine the record of any case decided by any criminal court under any law relating to enforcement of Hudood for satisfying itself as to correctness, legality or propriety of finding, sentence or order.",
    summary: "Grants revisional jurisdiction to Federal Shariat Court over criminal court cases under Hudood laws."
  },
  {
    article_number: "203E",
    article_title: "Powers and procedure of the Court",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 112,
    chunk_id: "article_203e",
    text: "(1) For the purposes of performance of its functions, the Court shall have the powers of a Civil Court trying a suit under Code of Civil Procedure.\n(8) Powers to summon jurisdictional experts (jurisconsults).",
    summary: "Grants civil court powers and procedural authority to Federal Shariat Court."
  },
  {
    article_number: "203F",
    article_title: "Appeals to Supreme Court",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 113,
    chunk_id: "article_203f",
    text: "(1) Any party to proceedings before Federal Shariat Court aggrieved by final decision may prefer appeal to Supreme Court.\n(3) Consists of Shariat Appellate Bench of Supreme Court comprising Muslim SC Judges and ad-hoc Ulema Judges.",
    summary: "Provides right of appeal from Federal Shariat Court to Shariat Appellate Bench of the Supreme Court."
  },
  {
    article_number: "203G",
    article_title: "Bar of jurisdiction",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 114,
    chunk_id: "article_203g",
    text: "Save as provided in Article 203F, no court or tribunal, including the Supreme Court and a High Court, shall entertain any proceedings or exercise any power or jurisdiction in respect of any matter within power of Federal Shariat Court.",
    summary: "Bars other courts from exercising jurisdiction over matters assigned to Federal Shariat Court."
  },
  {
    article_number: "203H",
    article_title: "Pending proceedings, etc.",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 114,
    chunk_id: "article_203h",
    text: "Savings and transitional provisions for pending cases transferred to Federal Shariat Court.",
    summary: "Regulates transfer and continuation of pending proceedings upon establishment of FSC."
  },
  {
    article_number: "203I",
    article_title: "[Omitted]",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 115,
    chunk_id: "article_203i",
    text: "[Financial provisions.] Omitted by the Constitution (Second Amdt.) Order, 1982 (P.O. No. 5 of 1982), Art. 8.",
    summary: "Article 203I omitted."
  },
  {
    article_number: "203J",
    article_title: "Power to make rules",
    chapter: "Chapter 3A: Federal Shariat Court",
    part: "Part VII",
    page_number: 115,
    chunk_id: "article_203j",
    text: "(1) The Court may, by notification in official Gazette, make rules for carrying out purposes of this Chapter.",
    summary: "Empowers Federal Shariat Court to make procedural rules."
  },
  {
    article_number: "204",
    article_title: "Contempt of Court",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 115,
    chunk_id: "article_204",
    text: "(1) In this Article, 'Court' means Supreme Court or a High Court.\n(2) Court shall have power to punish any person who abuse, interfere with, scandalize, or disobey court orders.",
    summary: "Empowers Supreme Court and High Courts to punish contempt of court."
  },
  {
    article_number: "205",
    article_title: "Remuneration etc., of Judges",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 116,
    chunk_id: "article_205",
    text: "The remuneration and other terms and conditions of service of a Judge of the Supreme Court or of a High Court shall be as determined by Fifth Schedule.",
    summary: "Fixes judicial salaries and privileges under Fifth Schedule."
  },
  {
    article_number: "206",
    article_title: "Resignation",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 116,
    chunk_id: "article_206",
    text: "(1) A Judge of SC or HC may resign by writing under his hand addressed to President.\n(2) SC Judge refusing High Court appointment deemed to have resigned.",
    summary: "Governs resignation procedure for Supreme Court and High Court Judges."
  },
  {
    article_number: "207",
    article_title: "Judge not to hold office of profit, etc.",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 116,
    chunk_id: "article_207",
    text: "(1) Judge shall not hold office of profit or perform services carrying remuneration other than judicial duties.\n(2) Post-retirement practice restrictions for SC and HC Judges.",
    summary: "Prohibits Judges from holding offices of profit and places post-retirement practice restrictions."
  },
  {
    article_number: "208",
    article_title: "Officers and servants of Courts",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 117,
    chunk_id: "article_208",
    text: "The Supreme Court and the Federal Shariat Court, with approval of President, and a High Court with approval of Governor, may make rules providing for appointment of officers and servants.",
    summary: "Empowers courts to frame rules for appointing court officers and administrative staff."
  },
  {
    article_number: "209",
    article_title: "Supreme Judicial Council",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 117,
    chunk_id: "article_209",
    text: "(1) There shall be a Supreme Judicial Council consisting of CJP, two most senior SC Judges, and two most senior High Court Chief Justices.\n(5) Council inquires into capacity or misconduct of SC/HC Judges and reports to President for removal.",
    summary: "Establishes Supreme Judicial Council (SJC) to conduct inquiries into judicial misconduct or incapacity."
  },
  {
    article_number: "210",
    article_title: "Power of Council to enforce attendance of persons, etc.",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 119,
    chunk_id: "article_210",
    text: "For the purpose of inquiring into any matter, the Council shall have same power as Supreme Court to issue directions, process for enforcing attendance of witnesses or discovery of documents.",
    summary: "Grants Supreme Judicial Council Supreme Court powers for witness attendance and evidence gathering."
  },
  {
    article_number: "211",
    article_title: "Bar of jurisdiction",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 119,
    chunk_id: "article_211",
    text: "The proceedings before the Council, its report to the President and the removal of a Judge under clause (6) of Article 209 shall not be called in question in any court.",
    summary: "Bars judicial review over SJC proceedings, reports, and Presidential removal of Judges under Article 209."
  },
  {
    article_number: "212",
    article_title: "Administrative Courts and Tribunals",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 119,
    chunk_id: "article_212",
    text: "(1) Parliament may by Act establish Administrative Courts or Tribunals regarding terms of service of civil servants, public property, or enemy property.\n(2) Bars jurisdiction of other courts where Tribunal established.",
    summary: "Authorizes creation of specialized Administrative Tribunals (e.g. Service Tribunals) excluding other court jurisdiction."
  },
  {
    article_number: "212A",
    article_title: "[Omitted]",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 120,
    chunk_id: "article_212a",
    text: "[Establishment of Military Courts] Omitted by Constitution (Eighth Amdt.) Act 1985.",
    summary: "Article 212A omitted."
  },
  {
    article_number: "212B",
    article_title: "[Omitted]",
    chapter: "Chapter 4: General Provisions Relating to the Judicature",
    part: "Part VII",
    page_number: 120,
    chunk_id: "article_212b",
    text: "[Establishment of Special Courts for Speedy Trials] Omitted by operation of law.",
    summary: "Article 212B omitted."
  },
  {
    article_number: "213",
    article_title: "Chief Election Commissioner",
    chapter: "Chapter 1: Chief Election Commissioner and Election Commissions",
    part: "Part VIII: Elections",
    page_number: 121,
    chunk_id: "article_213",
    text: "(1) There shall be a Chief Election Commissioner appointed by President.\n(2) Qualified if Judge of SC or High Court CJ/Judge or senior civil servant/jurist.\n(2A) Parliamentary Committee consultation process for appointment.",
    summary: "Provides for appointment of Chief Election Commissioner via Parliamentary Committee consensus."
  },
  {
    article_number: "214",
    article_title: "Commissioner’s Oath of Office",
    chapter: "Chapter 1: Chief Election Commissioner and Election Commissions",
    part: "Part VIII",
    page_number: 122,
    chunk_id: "article_214",
    text: "Before entering upon office, Commissioner makes oath before Chief Justice of Pakistan and members before Commissioner.",
    summary: "Mandates Chief Election Commissioner oath before Chief Justice of Pakistan."
  },
  {
    article_number: "215",
    article_title: "Term of office of Commissioner and members",
    chapter: "Chapter 1: Chief Election Commissioner and Election Commissions",
    part: "Part VIII",
    page_number: 122,
    chunk_id: "article_215",
    text: "(1) The Commissioner and members shall hold office for term of five years.\n(2) Removed only in manner prescribed in Article 209 for removal of Judge.",
    summary: "Fixes 5-year tenure for CEC and ECP members, removable only via Supreme Judicial Council procedure."
  },
  {
    article_number: "216",
    article_title: "Commissioner and members not to hold office of profit",
    chapter: "Chapter 1: Chief Election Commissioner and Election Commissions",
    part: "Part VIII",
    page_number: 123,
    chunk_id: "article_216",
    text: "(1) Commissioner/members shall not hold office of profit or position carrying remuneration.\n(2) Post-retirement employment restrictions.",
    summary: "Prohibits CEC and members from holding office of profit during or immediately after tenure."
  },
  {
    article_number: "217",
    article_title: "Acting Commissioner",
    chapter: "Chapter 1: Chief Election Commissioner and Election Commissions",
    part: "Part VIII",
    page_number: 123,
    chunk_id: "article_217",
    text: "When office of Commissioner is vacant, most senior member of ECP or SC Judge acts as Commissioner.",
    summary: "Provides for Acting Chief Election Commissioner during vacancy or absence."
  },
  {
    article_number: "218",
    article_title: "Election Commission",
    chapter: "Chapter 1: Chief Election Commissioner and Election Commissions",
    part: "Part VIII",
    page_number: 123,
    chunk_id: "article_218",
    text: "(1) Permanent Election Commission constituted consisting of CEC and four members (one from each Province).\n(3) Duty to organize and conduct elections honestly, justly, fairly and in accordance with law.",
    summary: "Establishes Election Commission of Pakistan (ECP) with 4 provincial members to ensure free and fair elections."
  },
  {
    article_number: "219",
    article_title: "Duties of Commission",
    chapter: "Chapter 1: Chief Election Commissioner and Election Commissions",
    part: "Part VIII",
    page_number: 124,
    chunk_id: "article_219",
    text: "The Commission shall be charged with duty of preparing electoral rolls, organizing Senate, NA, Provincial Assembly, Local Govt elections, and delimiting constituencies.",
    summary: "Outlines ECP duties including electoral rolls, delimitation, and parliamentary/local elections."
  },
  {
    article_number: "220",
    article_title: "Executive authorities to assist Commission",
    chapter: "Chapter 1: Chief Election Commissioner and Election Commissions",
    part: "Part VIII",
    page_number: 124,
    chunk_id: "article_220",
    text: "It shall be duty of all executive authorities in Federation and Provinces to assist Commissioner and Election Commission in discharge of their functions.",
    summary: "Mandates all federal and provincial executive authorities to assist ECP in election duties."
  },
  {
    article_number: "221",
    article_title: "Officers and servants",
    chapter: "Chapter 1: Chief Election Commissioner and Election Commissions",
    part: "Part VIII",
    page_number: 124,
    chunk_id: "article_221",
    text: "Until Parliament makes law, Election Commission may with approval of President make rules regarding recruitment and terms of service of ECP staff.",
    summary: "Empowers ECP to recruit and govern terms of service for its officers and staff."
  },
  {
    article_number: "222",
    article_title: "Electoral laws",
    chapter: "Chapter 2: Electoral Laws and Conduct of Elections",
    part: "Part VIII",
    page_number: 125,
    chunk_id: "article_222",
    text: "Parliament may by law provide for electoral rolls, delimitation, conduct of elections, corrupt practices, subject to non-impairment of ECP authority.",
    summary: "Empowers Parliament to enact electoral laws without taking away core ECP constitutional powers."
  },
  {
    article_number: "223",
    article_title: "Bar against double membership",
    chapter: "Chapter 2: Electoral Laws and Conduct of Elections",
    part: "Part VIII",
    page_number: 125,
    chunk_id: "article_223",
    text: "(1) No person shall at same time be member of both Houses or a House and Provincial Assembly, or more than one seat in same House.\n(2) Must resign extra seats within 30 days.",
    summary: "Prohibits holding dual legislative seats simultaneously across Parliament and Provincial Assemblies."
  },
  {
    article_number: "224",
    article_title: "Time of Election and Bye-election",
    chapter: "Chapter 2: Electoral Laws and Conduct of Elections",
    part: "Part VIII",
    page_number: 126,
    chunk_id: "article_224",
    text: "(1) General election to National Assembly or Provincial Assembly held within 60 days preceding term expiry, or within 90 days if dissolved prematurely.\n(1B) Members of care-taker cabinets ineligible to contest upcoming elections.",
    summary: "Sets 60-day (on term expiry) and 90-day (on dissolution) general election timelines and care-taker neutrality rules."
  },
  {
    article_number: "224A",
    article_title: "Resolution by Committee or Election Commission on Care-taker CM/PM",
    chapter: "Chapter 2: Electoral Laws and Conduct of Elections",
    part: "Part VIII",
    page_number: 127,
    chunk_id: "article_224a",
    text: "(1) If PM/Leader of Opposition fail to agree on Care-taker PM within 3 days, referred to 8-member bi-partisan Parliamentary Committee.\n(3) If Committee fails in 3 days, ECP appoints Care-taker PM within 2 days.",
    summary: "Provides deadlock-resolution mechanism for Care-taker Prime Minister and Chief Minister appointments."
  },
  {
    article_number: "225",
    article_title: "Election dispute",
    chapter: "Chapter 2: Electoral Laws and Conduct of Elections",
    part: "Part VIII",
    page_number: 128,
    chunk_id: "article_225",
    text: "No election to a House or a Provincial Assembly shall be called in question except by an election petition presented to such election tribunal as may be provided by Act of Majlis-e-Shoora (Parliament).",
    summary: "Requires election challenges to be brought exclusively before Election Tribunals via election petitions."
  },
  {
    article_number: "226",
    article_title: "Elections by secret ballot",
    chapter: "Chapter 2: Electoral Laws and Conduct of Elections",
    part: "Part VIII",
    page_number: 128,
    chunk_id: "article_226",
    text: "All elections under Constitution, other than those of Prime Minister and Chief Minister, shall be by secret ballot.",
    summary: "Mandates secret ballot for all constitutional elections except PM and CM open voting."
  },
  {
    article_number: "227",
    article_title: "Provisions relating to the Holy Quran and Sunnah",
    chapter: "Part IX: Islamic Provisions",
    part: "Part IX",
    page_number: 129,
    chunk_id: "article_227",
    text: "(1) All existing laws shall be brought in conformity with Injunctions of Islam as laid down in Holy Quran and Sunnah, and no law shall be enacted which is repugnant to such Injunctions.\n(3) Personal laws of non-Muslim citizens protected.",
    summary: "Requires all laws to conform with Quran and Sunnah while safeguarding personal laws of religious minorities."
  },
  {
    article_number: "228",
    article_title: "Composition, etc., of Islamic Council",
    chapter: "Part IX: Islamic Provisions",
    part: "Part IX",
    page_number: 129,
    chunk_id: "article_228",
    text: "(1) There shall be constituted Council of Islamic Ideology consisting of 8 to 20 members appointed by President representing various schools of thought, women, and judicial experts.",
    summary: "Establishes Council of Islamic Ideology (CII) comprising Islamic scholars and legal experts."
  },
  {
    article_number: "229",
    article_title: "Reference by Majlis-e-Shoora (Parliament) or Provincial Assembly to Islamic Council",
    chapter: "Part IX: Islamic Provisions",
    part: "Part IX",
    page_number: 130,
    chunk_id: "article_229",
    text: "The President or Governor or a House or Provincial Assembly (if 2/5ths members request) may refer to Islamic Council for advice any question whether proposed law is repugnant to Islam.",
    summary: "Allows Parliament, Provincial Assemblies, President, or Governors to refer draft bills to CII for advisory opinion."
  },
  {
    article_number: "230",
    article_title: "Functions of the Islamic Council",
    chapter: "Part IX: Islamic Provisions",
    part: "Part IX",
    page_number: 130,
    chunk_id: "article_230",
    text: "(1) Functions include recommending measures to enable Muslims to order lives according to Islam, advising Parliament/Assemblies, and reviewing existing laws.\n(4) Submits Annual Report to Parliament.",
    summary: "Defines CII advisory functions regarding Islamic legislative conformity and annual reporting."
  },
  {
    article_number: "231",
    article_title: "Rules of procedure",
    chapter: "Part IX: Islamic Provisions",
    part: "Part IX",
    page_number: 131,
    chunk_id: "article_231",
    text: "The Council of Islamic Ideology may, with approval of President, make rules regulating its procedure.",
    summary: "Empowers Council of Islamic Ideology to make procedural rules."
  },
  {
    article_number: "232",
    article_title: "Proclamation of emergency on account of war, internal disturbance, etc.",
    chapter: "Part X: Emergency Provisions",
    part: "Part X",
    page_number: 132,
    chunk_id: "article_232",
    text: "(1) If President satisfied grave emergency exists threatening security of Pakistan by war, external aggression or internal disturbance, he may issue Proclamation of Emergency.\n(2) Requires Provincial Assembly resolution for internal disturbance emergency in a Province.\n(7) Must be approved by Parliament.",
    summary: "Governs Presidential Proclamation of Emergency due to war, external aggression, or severe internal disturbance."
  },
  {
    article_number: "233",
    article_title: "Power to suspend Fundamental Rights, etc., during emergency period",
    chapter: "Part X: Emergency Provisions",
    part: "Part X",
    page_number: 134,
    chunk_id: "article_233",
    text: "(1) While Proclamation of Emergency is in force, state power to make laws/take executive action unrestricted by Articles 15, 16, 17, 18, 19, and 24.\n(2) President may suspend court enforcement of fundamental rights.",
    summary: "Allows suspension of specified Fundamental Rights and court enforcement during Proclamation of Emergency."
  },
  {
    article_number: "234",
    article_title: "Power to issue Proclamation in case of failure of Constitutional machinery in a Province",
    chapter: "Part X: Emergency Provisions",
    part: "Part X",
    page_number: 135,
    chunk_id: "article_234",
    text: "(1) On report from Governor or otherwise, if President satisfied provincial government cannot be carried on under Constitution, President may assume provincial government functions or declare Governor Rule.",
    summary: "Provides for Governor's Rule / Federal Emergency intervention upon constitutional machinery breakdown in a Province."
  },
  {
    article_number: "235",
    article_title: "Proclamation in financial emergency",
    chapter: "Part X: Emergency Provisions",
    part: "Part X",
    page_number: 137,
    chunk_id: "article_235",
    text: "(1) If President satisfied economic life, financial stability or credit of Pakistan or part thereof is threatened, he may proclaim financial emergency and issue executive directives including reduction of salaries.",
    summary: "Empowers President to declare Financial Emergency and issue binding financial directives."
  },
  {
    article_number: "236",
    article_title: "Revocation of Proclamation, etc.",
    chapter: "Part X: Emergency Provisions",
    part: "Part X",
    page_number: 137,
    chunk_id: "article_236",
    text: "(1) A Proclamation issued under Part X may be varied or revoked by a subsequent Proclamation.\n(2) Validity shall not be called in question in any court.",
    summary: "Governs variation and revocation of Emergency Proclamations."
  },
  {
    article_number: "237",
    article_title: "Majlis-e-Shoora (Parliament) may make laws of indemnity, etc.",
    chapter: "Part X: Emergency Provisions",
    part: "Part X",
    page_number: 138,
    chunk_id: "article_237",
    text: "Nothing in Constitution shall prevent Parliament from making any law indemnifying any person in service of Federal/Provincial Govt for acts done during martial law or maintaining order.",
    summary: "Empowers Parliament to enact indemnity laws for public servants restoring order during emergency or martial law."
  },
  {
    article_number: "238",
    article_title: "Amendment of Constitution",
    chapter: "Part XI: Amendment of Constitution",
    part: "Part XI",
    page_number: 139,
    chunk_id: "article_238",
    text: "Subject to this Part, the Constitution may be amended by Act of Majlis-e-Shoora (Parliament).",
    summary: "Confers power on Parliament to amend the Constitution."
  },
  {
    article_number: "239",
    article_title: "Constitution Amendment Bill",
    chapter: "Part XI: Amendment of Constitution",
    part: "Part XI",
    page_number: 139,
    chunk_id: "article_239",
    text: "(1) Bill to amend Constitution may originate in either House.\n(2) Requires 2/3rds majority of total membership of each House.\n(4) Provincial boundary changes require 2/3rds approval of affected Provincial Assembly.\n(5) No amendment can be called in question in any court on any ground.",
    summary: "Prescribes 2/3rds parliamentary majority procedure for constitutional amendments and bars judicial review of amendments."
  },
  {
    article_number: "240",
    article_title: "Appointments to service of Pakistan and conditions of service",
    chapter: "Chapter 1: Services",
    part: "Part XII: Miscellaneous",
    page_number: 140,
    chunk_id: "article_240",
    text: "Subject to Constitution, appointments to and conditions of service of persons in service of Pakistan shall be determined by Act of Parliament for Federal services, and Act of Provincial Assembly for Provincial services.",
    summary: "Regulates civil service appointments and terms through Acts of Parliament and Provincial Assemblies."
  },
  {
    article_number: "241",
    article_title: "Existing rules and orders to continue",
    chapter: "Chapter 1: Services",
    part: "Part XII",
    page_number: 140,
    chunk_id: "article_241",
    text: "Until appropriate legislature makes law, all existing rules and orders applicable to service of Pakistan shall continue in force.",
    summary: "Saves existing civil service rules until superseded by legislative Acts."
  },
  {
    article_number: "242",
    article_title: "Public Service Commission",
    chapter: "Chapter 1: Services",
    part: "Part XII",
    page_number: 140,
    chunk_id: "article_242",
    text: "(1) Parliament in relation to Federal affairs and Provincial Assembly in relation to Provincial affairs may by law establish Public Service Commissions.\n(1A) Chairman FPSC appointed by President.",
    summary: "Provides for establishment of Federal (FPSC) and Provincial Public Service Commissions."
  },
  {
    article_number: "243",
    article_title: "Command of Armed Forces",
    chapter: "Chapter 2: Armed Forces",
    part: "Part XII",
    page_number: 141,
    chunk_id: "article_243",
    text: "(1) Federal Govt shall have control and command of Armed Forces.\n(2) Supreme Command of Armed Forces vests in President.\n(3) President appoints Chairman Joint Chiefs of Staff Committee, Chief of Army Staff, Chief of Naval Staff, and Chief of Air Staff on advice of Prime Minister.",
    summary: "Vests Supreme Command of Armed Forces in President and provides for service chiefs appointments on PM advice."
  },
  {
    article_number: "244",
    article_title: "Oath of Armed Forces",
    chapter: "Chapter 2: Armed Forces",
    part: "Part XII",
    page_number: 141,
    chunk_id: "article_244",
    text: "Every member of the Armed Forces shall make oath in the form set out in Third Schedule pledging allegiance to Pakistan and upholding Constitution without engaging in political activities.",
    summary: "Mandates constitutional allegiance oath for Armed Forces personnel prohibiting political activities."
  },
  {
    article_number: "245",
    article_title: "Functions of Armed Forces",
    chapter: "Chapter 2: Armed Forces",
    part: "Part XII",
    page_number: 141,
    chunk_id: "article_245",
    text: "(1) Armed Forces shall, under directions of Federal Govt, defend Pakistan against external aggression or threat of war, and subject to law act in aid of civil power when called upon to do so.\n(2) High Court writ jurisdiction barred in areas where Armed Forces acting in aid of civil power.",
    summary: "Defines dual duty of Armed Forces: national defense and acting in aid of civil power."
  },
  {
    article_number: "246",
    article_title: "Tribal Areas",
    chapter: "Chapter 3: Tribal Areas",
    part: "Part XII",
    page_number: 142,
    chunk_id: "article_246",
    text: "Defines Tribal Areas, Federally Administered Tribal Areas (FATA), and Provincially Administered Tribal Areas (PATA) as merged/reconstructed under 25th Amendment.",
    summary: "Defines Tribal Areas prior to and following 25th Constitutional Amendment integration."
  },
  {
    article_number: "247",
    article_title: "[Omitted]",
    chapter: "Chapter 3: Tribal Areas",
    part: "Part XII",
    page_number: 144,
    chunk_id: "article_247",
    text: "[Administration of Tribal Areas.] Omitted by Constitution (Twenty-fifth Amdt.) Act, 2018 (Act XXXVII of 2018), s. 9.",
    summary: "Article 247 omitted following FATA merger with Khyber Pakhtunkhwa under 25th Amendment."
  },
  {
    article_number: "248",
    article_title: "Protection to President, Governor, Minister, etc.",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 145,
    chunk_id: "article_248",
    text: "(1) President, Governor, PM, Federal Ministers, CM, and Provincial Ministers shall not be answerable to any court for exercise of powers and performance of functions.\n(2) No criminal proceedings against President or Governor during term.",
    summary: "Grants official immunity to President, Governors, Prime Minister, and Ministers for official acts."
  },
  {
    article_number: "249",
    article_title: "Legal proceedings",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 146,
    chunk_id: "article_249",
    text: "(1) Federal Govt may sue or be sued by name of Pakistan, and Provincial Govt by name of Province.",
    summary: "Specifies legal title for suits by or against Federal and Provincial Governments."
  },
  {
    article_number: "250",
    article_title: "Salaries, allowances, etc., of the President, etc.",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 146,
    chunk_id: "article_250",
    text: "Regulates terms and conditions, salaries, and allowances of constitutional office holders.",
    summary: "Protects constitutional office holders' salaries and allowances against disadvantageous variation during term."
  },
  {
    article_number: "251",
    article_title: "National language",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 146,
    chunk_id: "article_251",
    text: "(1) The National language of Pakistan is Urdu, and arrangements shall be made for its being used for official and other purposes within fifteen years.\n(2) English language may be used for official purposes until arrangements made.\n(3) Provincial Assemblies may prescribe provincial languages.",
    summary: "Declares Urdu as National Language of Pakistan and allows provincial languages."
  },
  {
    article_number: "252",
    article_title: "Special provisions in relation to major ports and aerodromes",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 147,
    chunk_id: "article_252",
    text: "President may by public notification direct that laws do not apply to specified major ports or aerodromes.",
    summary: "Allows President to modify or exempt statutory application to major seaports and airports."
  },
  {
    article_number: "253",
    article_title: "Maximum limits as to property, etc.",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 147,
    chunk_id: "article_253",
    text: "Parliament may by law limit maximum property ownership or land holdings and regulate economic monopolies.",
    summary: "Empowers Parliament to enact laws setting maximum limits on private property and land holdings."
  },
  {
    article_number: "254",
    article_title: "Failure to comply with requirement as to time does not render an act invalid",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 147,
    chunk_id: "article_254",
    text: "When any act or thing is required by Constitution to be done within a particular period, failure to do so within that period shall not of itself render doing of act invalid.",
    summary: "Saves constitutional acts done beyond prescribed timeline from automatic invalidity."
  },
  {
    article_number: "255",
    article_title: "Oath of Office",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 147,
    chunk_id: "article_255",
    text: "(1) Oath shall be made in language understood by person taking oath.\n(2) If designated authority unable to administer oath, nominee administers.",
    summary: "Regulates oath administration and language comprehension rules."
  },
  {
    article_number: "256",
    article_title: "Private armies forbidden",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 148,
    chunk_id: "article_256",
    text: "No private organization capable of functioning as a military organization shall be formed, and any such organization shall be illegal.",
    summary: "Strictly bans private military or paramilitary organizations and militias."
  },
  {
    article_number: "257",
    article_title: "Provision relating to the State of Jammu and Kashmir",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 148,
    chunk_id: "article_257",
    text: "When the people of the State of Jammu and Kashmir decide to accede to Pakistan, the relationship between the Federation and the State shall be determined in accordance with the wishes of the people of that State.",
    summary: "Provides that relationship with Jammu and Kashmir shall be determined according to the wishes of its people."
  },
  {
    article_number: "258",
    article_title: "Government of territories not included in Provinces",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 148,
    chunk_id: "article_258",
    text: "President may by order make provision for peace and good government of non-provincial federal territories.",
    summary: "Authorizes Presidential orders for governance of federal territories outside provinces."
  },
  {
    article_number: "259",
    article_title: "Awards",
    chapter: "Chapter 4: General",
    part: "Part XII",
    page_number: 148,
    chunk_id: "article_259",
    text: "(1) No citizen shall accept any title, honour or decoration from any foreign State except with approval of Federal Govt.\n(2) Federation may confer awards for gallantry, academic distinction, or public service.",
    summary: "Regulates state awards and prohibits unauthorized acceptance of foreign titles."
  },
  {
    article_number: "260",
    article_title: "Definitions",
    chapter: "Chapter 5: Interpretation",
    part: "Part XII",
    page_number: 148,
    chunk_id: "article_260",
    text: "(1) Defines key constitutional terms: 'Act of Parliament', 'Cabinet', 'Chief Justice', 'Citizen', 'Federal Law', 'High Court', 'Judge', 'Muslim', 'Non-Muslim', 'Service of Pakistan', etc.",
    summary: "Comprehensive constitutional dictionary defining key legal terms, Muslim identity, and public office classifications."
  },
  {
    article_number: "261",
    article_title: "Person acting in office not to be regarded as its holder",
    chapter: "Chapter 5: Interpretation",
    part: "Part XII",
    page_number: 154,
    chunk_id: "article_261",
    text: "For purposes of Constitution, person acting in an office shall not by reason only of so acting be regarded as holder of office.",
    summary: "Clarifies that acting officials are not formal office holders under constitutional qualifications."
  },
  {
    article_number: "262",
    article_title: "Royal Titles Act, 1947, not affected",
    chapter: "Chapter 5: Interpretation",
    part: "Part XII",
    page_number: 154,
    chunk_id: "article_262",
    text: "Nothing in Constitution shall affect Royal Titles Act, 1947.",
    summary: "Preserves Royal Titles Act 1947."
  },
  {
    article_number: "263",
    article_title: "Gender and number",
    chapter: "Chapter 5: Interpretation",
    part: "Part XII",
    page_number: 154,
    chunk_id: "article_263",
    text: "In Constitution: (a) words importing masculine gender include females; (b) words in singular include plural and vice versa.",
    summary: "Interpretation rule establishing gender inclusion and singular/plural interchangeability."
  },
  {
    article_number: "264",
    article_title: "Effect of repeal of laws",
    chapter: "Chapter 5: Interpretation",
    part: "Part XII",
    page_number: 154,
    chunk_id: "article_264",
    text: "Where a law is repealed or deemed repealed, repeal does not revive anything not in force, affect previous operation, or affect accrued rights or liabilities.",
    summary: "Standard legal saving clause regarding effect of law repeals."
  },
  {
    article_number: "265",
    article_title: "Title of Constitution and commencement",
    chapter: "Chapter 6: Title, Commencement and Repeal",
    part: "Part XII",
    page_number: 155,
    chunk_id: "article_265",
    text: "(1) This Constitution may be cited as Constitution of Islamic Republic of Pakistan.\n(2) Came into force on 14th August 1973.",
    summary: "Establishes title as 'Constitution of the Islamic Republic of Pakistan' and commencement date (14th August 1973)."
  },
  {
    article_number: "266",
    article_title: "Repeal",
    chapter: "Chapter 6: Title, Commencement and Repeal",
    part: "Part XII",
    page_number: 155,
    chunk_id: "article_266",
    text: "Interim Constitution of Pakistan 1972 together with all enactments amending or supplementing it is hereby repealed.",
    summary: "Repeals Interim Constitution of 1972."
  },
  {
    article_number: "267",
    article_title: "Power of President to remove difficulties",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 155,
    chunk_id: "article_267",
    text: "(1) At any time before expiration of three months from commencing day, President may by order direct provisions shall have effect subject to adaptations to remove transition difficulties.",
    summary: "Transitional provision empowering President to remove initial implementation difficulties."
  },
  {
    article_number: "267A",
    article_title: "Power to remove difficulties",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 156,
    chunk_id: "article_267a",
    text: "President may by order remove difficulties in implementation of 18th Constitutional Amendment.",
    summary: "Removal of difficulty powers regarding 18th Amendment implementation."
  },
  {
    article_number: "267B",
    article_title: "Removal of difficulties",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 156,
    chunk_id: "article_267b",
    text: "President may by order remove difficulties in implementation of 25th Constitutional Amendment.",
    summary: "Removal of difficulty powers regarding FATA merger (25th Amendment)."
  },
  {
    article_number: "268",
    article_title: "Continuance in force, and adaptation of certain laws",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 156,
    chunk_id: "article_268",
    text: "(1) All existing laws shall, subject to Constitution, continue in force until altered, repealed or amended by competent legislature.",
    summary: "Ensures legal continuity of pre-existing statutes and laws upon constitutional adoption."
  },
  {
    article_number: "269",
    article_title: "Validation of laws, acts done, etc.",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 157,
    chunk_id: "article_269",
    text: "Validates all proclamations, orders, and laws made between 25th March 1969 and 20th April 1972.",
    summary: "Validates past executive proclamations and statutes enacted during specified transition windows."
  },
  {
    article_number: "270",
    article_title: "Temporary validation of certain laws, etc.",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 158,
    chunk_id: "article_270",
    text: "Provides temporary validation of specified regulations and decrees subject to parliamentary review.",
    summary: "Temporary validation mechanism for specified decrees."
  },
  {
    article_number: "270A",
    article_title: "Affirmation of President’s Orders, etc.",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 158,
    chunk_id: "article_270a",
    text: "Affirms and validates President's Orders, ordinances, and laws enacted between 5th July 1977 and 30th December 1985 (Eighth Amendment validation).",
    summary: "Validates President's Orders and laws enacted during 1977–1985 martial law period."
  },
  {
    article_number: "270AA",
    article_title: "Declaration and affirmation",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 160,
    chunk_id: "article_270aa",
    text: "Declares emergency orders of 3rd November 2007 without lawful authority, and validates specified laws under 18th Amendment.",
    summary: "18th Amendment provision invalidating 2007 Emergency and regulating transitional law validations."
  },
  {
    article_number: "270B",
    article_title: "Elections held under the Conduct of General Elections Order, 1982",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 162,
    chunk_id: "article_270b",
    text: "Deems elections held under 1982 Order as validly held under Constitution.",
    summary: "Validates 1985 general elections under constitutional framework."
  },
  {
    article_number: "270BB",
    article_title: "General Elections 2008",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 162,
    chunk_id: "article_270bb",
    text: "Validates 2008 General Elections notwithstanding anything in Constitution.",
    summary: "Validates 2008 General Elections."
  },
  {
    article_number: "271",
    article_title: "First National Assembly",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 162,
    chunk_id: "article_271",
    text: "Transitional provisions regarding first National Assembly constituted under Interim Constitution.",
    summary: "Transitional framework for the first National Assembly."
  },
  {
    article_number: "272",
    article_title: "First constitution of Senate",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 164,
    chunk_id: "article_272",
    text: "Transitional provisions for initial constitution, terms, and rotation of Senate members.",
    summary: "Transitional framework for initial Senate elections and staggering terms."
  },
  {
    article_number: "273",
    article_title: "First Provincial Assembly",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 165,
    chunk_id: "article_273",
    text: "Transitional provisions for first Provincial Assemblies.",
    summary: "Transitional framework for first Provincial Assemblies."
  },
  {
    article_number: "274",
    article_title: "Property, assets, rights, liabilities and obligations",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 166,
    chunk_id: "article_274",
    text: "Vests state property, assets, rights, liabilities, and contractual obligations in Federal and Provincial Governments upon transition.",
    summary: "Governs succession of state property, assets, rights, and liabilities."
  },
  {
    article_number: "275",
    article_title: "Continuance in office of persons in service of Pakistan, etc.",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 167,
    chunk_id: "article_275",
    text: "Saves continuance in office of civil servants, judges, and public officials serving on commencing day.",
    summary: "Protects continuity of service for civil servants and constitutional officials."
  },
  {
    article_number: "276",
    article_title: "Oath, first President",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 168,
    chunk_id: "article_276",
    text: "Provides for oath taking of first President of Pakistan under 1973 Constitution.",
    summary: "Regulates oath for first President."
  },
  {
    article_number: "277",
    article_title: "Transitional financial provisions",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 168,
    chunk_id: "article_277",
    text: "Transitional authorization for financial expenditure and budget schedules.",
    summary: "Transitional financial expenditure authorization."
  },
  {
    article_number: "278",
    article_title: "Accounts not audited before commencing day",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 169,
    chunk_id: "article_278",
    text: "Audit procedure for state accounts remaining unaudited prior to commencing day.",
    summary: "Regulates audit of pre-commencement state accounts."
  },
  {
    article_number: "279",
    article_title: "Continuance of taxes",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 169,
    chunk_id: "article_279",
    text: "Saves existing taxes, duties, and fees until altered or abolished by competent legislature.",
    summary: "Ensures continuity of existing taxes and duties."
  },
  {
    article_number: "280",
    article_title: "Continuance of Proclamation of Emergency",
    chapter: "Chapter 7: Transitional",
    part: "Part XII",
    page_number: 169,
    chunk_id: "article_280",
    text: "Proclamation of Emergency issued on 23rd November 1971 shall be deemed to be Proclamation issued under Article 232.",
    summary: "Regulates continuance of 1971 Emergency proclamation under 1973 Constitution."
  }
];

