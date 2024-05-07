import { nanoid } from 'nanoid';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { GoCreditCard } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';
import { BsCreditCard2Front } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiEyeCloseLine } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import { RiShareBoxLine } from 'react-icons/ri';
const links = [
  { id: 2, url: '/usecases', text: 'Use Cases', line: '|' },
  { id: 3, url: '/faqs', text: 'FAQs', line: '|' },
  { id: 4, url: '/devtools', text: 'Dev Tools' },
];

export const verificationLinks = [
  { id: nanoid(), url: '/dashboard/settings', text: 'KYC information' },
  { id: nanoid(), url: '/dashboard/settings/security', text: 'Security' },
  { id: nanoid(), url: '/dashboard/settings/support', text: 'Help & Support' },
];
export const registerNavLink = [
  { id: nanoid(), text: 'Basic information' },
  { id: nanoid(), text: 'Verification' },
  { id: nanoid(), text: 'Create PIN' },
  { id: nanoid(), text: 'Fund Card' },
];

export const dashboardLinks = [
  {
    id: nanoid(),
    url: '/dashboard',
    text: 'DashBoard',
    icon: <MdOutlineSpaceDashboard />,
  },
  { id: nanoid(), url: 'cards', text: 'Cards', icon: <GoCreditCard /> },
  {
    id: nanoid(),
    url: 'transactions',
    text: 'Transactions',
    icon: <GrTransaction />,
  },
  {
    id: nanoid(),
    url: 'physical-card',
    text: 'Request physical dollar card',
    icon: <BsCreditCard2Front />,
  },
  {
    id: nanoid(),
    url: 'settings',
    text: 'settings',
    icon: <IoSettingsOutline />,
  },
];

export const settingLink = [
  { id: nanoid(), url: 'register', text: 'Bank Information' },
  { id: nanoid(), url: 'verification', text: 'Verification' },
  { id: nanoid(), url: 'create-pin', text: 'Create PIN' },
  { id: nanoid(), url: 'fund-card', text: 'Fund Card' },
];

export const footer = [
  { id: 1, url: '/terms-of-service', text: 'Terms of service' },
  { id: 2, url: '/privacy-policy', text: 'Privacy Policy' },
  { id: 3, url: '/cookie-policy', text: 'Cookie Policy' },
];

export const colors = ['#227668', '#011c7c', '#25292e'];

export const questions = [
  {
    id: 1,
    title: 'What is Makecards?',
    info: [
      'Makecards is a secured platform that grants you access to create and fund a dollar card, giving you the liberty to shop on international platforms. You can also fund your card in different currencies: Naira, Rand, Cedis, Kenyan Shilling and Ugandan Shilling.',
    ],
  },
  {
    id: 2,
    title: 'Why is Makecards?',
    info: [
      'Makecards implements a high-level security protocol to protect you from card theft and fraudulent transactions. Facial authentication is a mandatory condition for onboarding and login which makes it nearly impossible for fraudsters to steal your card details from the platform.',
      'Makecards support you in curbing to the barest minimum, phony transactions via the utilization of an optimized process to avert and identify fraud in Africa.',
      'Makecards not only avail you of the opportunity to perform up to $10,000 transactions but is anti-money laundering compliant.',
      'Makecards is fun. It allows you to create your dollar card with a nickname and customize it.',
    ],
  },
  {
    id: 3,
    title: 'What countries can I use my dollar card in?',
    info: [
      'With our dollar cards, you can make online transactions from anywhere in the world.',
    ],
  },
  {
    id: 4,
    title: 'What is the minimum amount I can fund my dollar card with?',
    info: [
      'With Makecards, you can fund your dollar card with at least $10 to get started.',
    ],
  },
  {
    id: 5,
    title: 'What is the maximum amount I can fund my card with?',
    info: ['With Makecards, you can fund your dollar card with up to $10,000.'],
  },
  {
    id: 6,
    title: 'How do I fund my Makecards card?',
    info: [
      'You can fund your Makecards card by clicking on the “Fund Card” button on your dashboard. You will be required to enter the amount you wish to fund your card with and select the currency you wish to fund your card with. Once the transaction has been completed, your card will be funded.',
    ],
  },
  {
    id: 7,
    title: 'How many virtual cards can I create?  ',
    info: [
      'You can create two virtual cards. A dollar card and your local currency virtual card.',
    ],
  },
  {
    id: 8,
    title: 'What is the lifespan of my virtual card?',
    info: ['The lifespan of your card is 3 years.'],
  },
  {
    id: 9,
    title: 'How secure are my funds on Makecards?',
    info: ['Your funds on Makecards are securely encrypted and protected.'],
  },
  {
    id: 10,
    title: 'How do I contact support?',
    info: ['Please contact us via email.'],
  },
];

export const useCases = [
  'Make fast and secure transactions, using current exchange rates.',
  'Perform online transactions using facial recognition for authenticity.',
  'Perform up to $500 transactions per day.',
];

export const scroll = [
  {
    id: nanoid(),
    name: 'netflix',
    logo: 'https://logo.clearbit.com/Netflix.com',
    date: '08/04/2022',
    bigPrice: '$12.44',
    smallPrice: '$254.76',
  },
  {
    id: nanoid(),
    name: 'spotify',
    logo: 'https://logo.clearbit.com/Spotify.com',
    date: '11/06/2022',
    bigPrice: '$45.44',
    smallPrice: '$854.76',
  },
  {
    id: nanoid(),
    name: 'Udemy',
    logo: 'https://logo.clearbit.com/Udemy.com',
    date: '17/12/2022',
    bigPrice: '$59.44',
    smallPrice: '$980.06',
  },
];

export const country = [
  {
    name: 'Nigeria',
    val: 'NG',
  },
  {
    name: 'Kenya',
    val: 'KE',
  },
  {
    name: 'Uganda',
    val: 'UG',
  },
  {
    name: 'Ghana',
    val: 'GH',
  },
  {
    name: 'South Africa',
    val: 'ZA',
  },
];

export const paymentData = [
  {
    id: nanoid(),
    paymentType: 'credit',
    status: 'Successful',
    reference: nanoid(),
    amountInNaira: '#4,700.00',
    amountInUSD: '$4.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'credit',
    status: 'Successful',
    reference: nanoid(),
    amountInNaira: '#5,924.00',
    amountInUSD: '$5.00',
    paymentMethod: 'BANK_DEPOSIT',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '10/05/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'credit',
    status: 'Successful',
    reference: nanoid(),
    amountInNaira: '#8,467.00',
    amountInUSD: '$7.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '02/120/2024 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'credit',
    status: 'Successful',
    reference: nanoid(),
    amountInNaira: '#2,598.00',
    amountInUSD: '$2.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'credit',
    status: 'Pending',
    reference: nanoid(),
    amountInNaira: '#9,200.00',
    amountInUSD: '$9.00',
    paymentMethod: 'Card_Deposit',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'credit',
    status: 'Pending',
    reference: nanoid(),
    amountInNaira: '#4,700.00',
    amountInUSD: '$4.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'credit',
    status: 'Failed',
    reference: nanoid(),
    amountInNaira: '#4,700.00',
    amountInUSD: '$4.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'credit',
    status: 'Failed',
    reference: nanoid(),
    amountInNaira: '#4,700.00',
    amountInUSD: '$4.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },

  // Debit
  {
    id: nanoid(),
    paymentType: 'debit',
    status: 'Successful',
    reference: nanoid(),
    amountInNaira: '#5,700.00',
    amountInUSD: '$4.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'debit',
    status: 'Successful',
    reference: nanoid(),
    amountInNaira: '#8,424.00',
    amountInUSD: '$5.00',
    paymentMethod: 'BANK_DEPOSIT',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '10/05/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'debit',
    status: 'Successful',
    reference: nanoid(),
    amountInNaira: '#4,267.00',
    amountInUSD: '$7.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '02/120/2024 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'debit',
    status: 'Successful',
    reference: nanoid(),
    amountInNaira: '#9,898.00',
    amountInUSD: '$2.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'debit',
    status: 'Pending',
    reference: nanoid(),
    amountInNaira: '#9,200.00',
    amountInUSD: '$9.00',
    paymentMethod: 'Card_Deposit',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'debit',
    status: 'Pending',
    reference: nanoid(),
    amountInNaira: '#4,700.00',
    amountInUSD: '$4.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },
  {
    id: nanoid(),
    paymentType: 'debit',
    status: 'Failed',
    reference: nanoid(),
    amountInNaira: '#4,700.00',
    amountInUSD: '$4.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
    // paymentType,status, reference,amountInNaira,amountInUSD,paymentMethod, merchant, currency, timeStamp,
  },
  {
    id: nanoid(),
    paymentType: 'debit',
    status: 'Failed',
    reference: nanoid(),
    amountInNaira: '#4,700.00',
    amountInUSD: '$4.00',
    paymentMethod: 'BANK_TRANSFER',
    merchant: 'Makecards Payment',
    currency: 'Naira',
    timeStamp: '03/12/2023 05:32 PM',
  },
];

export const infoLink = [
  {
    id: 1,
    text: 'Personal Information',
    status: 'Completed',
    logo: <IoIosArrowForward />,
  },
  {
    id: 2,
    text: 'Means of Identification',
    status: 'Completed',
    logo: <IoIosArrowForward />,
  },
  {
    id: 3,
    text: 'Proof of Address',
    status: 'Not Completed',
    logo: <IoIosArrowForward />,
  },
];

export const securityLink = [
  {
    id: 1,
    text: 'Update login PIN',
    logo: <IoIosArrowForward />,
  },
  {
    id: 2,
    text: 'Block card',
    logo: <IoIosArrowForward />,
  },
  {
    id: 3,
    text: 'Hide balance',
    view: <RiEyeCloseLine />,
  },
];

export const options = [
  { value: 'Nigeria', label: 'Nigeria' },
  { value: 'Ghana', label: 'Ghana' },
  { value: 'South Africa', label: 'South Africa' },
  { value: 'Uganda', label: 'Uganda' },
  { value: 'Kenya', label: 'Kenya' },
  { value: 'United State', label: 'United State' },
  { value: 'United Kingdom', label: 'United Kingdom' },
];

export const aboutMakeCardsLink = [
  {
    id: 1,
    text: 'privacy policy',
    logo: <RiShareBoxLine />,
    url: '/privacy-policy',
  },
  {
    id: 2,
    text: 'terms of service',
    logo: <RiShareBoxLine />,
    url: '/terms-of-service',
  },
  {
    id: 3,
    text: 'cookie policy',
    logo: <RiShareBoxLine />,
    url: '/cookie-policy',
  },
  {
    id: 4,
    text: 'contact us',
    logo: <IoIosArrowForward />,
  },
];

export const policyLink = [
  {
    id: nanoid(),
    text: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    id: nanoid(),
    text: 'Cookie Policy',
    url: '/cookie-policy',
  },
  {
    id: nanoid(),
    text: 'Terms of Service',
    url: '/terms-of-service',
  },
];

export const privacyPolicyLink = [
  {
    id: nanoid(),
    href: '#purpose-of-this-privacy-policy',
    text: 'Purpose of this Privacy Policy',
  },
  {
    id: nanoid(),
    href: '#personal-information-we-collect',
    text: 'Personal information we collect',
  },
  {
    id: nanoid(),
    href: '#information-you-provide-us',
    text: 'Information you provide us',
  },
  {
    id: nanoid(),
    href: '#information-we-collect-automatically',
    text: 'Information we collect automatically',
  },
  {
    id: nanoid(),
    href: '#information-collected-from-third-parties',
    text: 'Information collected from third parties',
  },
  {
    id: nanoid(),
    href: '#anonymized-and-aggregated-data',
    text: 'Anonymized and aggregated data',
  },
  {
    id: nanoid(),
    href: '#why-we-retain-personal-information',
    text: 'Why we retain personal information',
  },
  {
    id: nanoid(),
    href: '#how-we-use-your-personal-information',
    text: 'How we use your personal information',
  },
  {
    id: nanoid(),
    href: '#sharing-your-personal-with-third-parties',
    text: 'Sharing your personal with third parties',
  },
  {
    id: nanoid(),
    href: '#how-we-protect-and-retain-your-personal-information',
    text: 'How we protect and retain your personal information',
  },
  {
    id: nanoid(),
    href: '#your-privacy-rights',
    text: 'Your privacy rights',
  },
  {
    id: nanoid(),
    href: '#governing-law',
    text: 'Governing law',
  },
  {
    id: nanoid(),
    href: '#how-to-contact-us',
    text: 'How to contact us',
  },
];

export const privacyPolicyLinkBody = [
  {
    id: 'purpose-of-this-privacy-policy',
    text: 'Purpose of this Privacy Policy',
    infoList: [
      'This Privacy Policy indicates that Makecards is committed and responsible for processing the information of our customers and visitors to our website with due care and confidentiality. This Policy describes how we collect, store, process, and secure your personal data fairly, transparently, and with confidentiality, when you access our website, product and services, or any Makecards API or third party applications relying on such an API.',
      'We may update this Policy from time to time at our sole discretion. Where updates are made to the Policy, we will notify you of same by revising the date at the top of this Policy, and in some cases, provide you with additional notice (by adding a statement to homepages of our website or web application; or by sending you an email notification).',
      'We recommend that you review the Policy whenever you interact with us to stay informed about our information privacy practices as well as ways in which you can protect your privacy. By accessing and choosing to use our services, you agree to be bound to this Policy.',
    ],
  },
  {
    id: 'personal-information-we-collect',
    text: 'Personal information we collect',
    infoList: [
      'Personal information means any data which relates to a living individual who can be identified, directly or indirectly, from that data, or from other information which is in the possession of, or is likely to come into the possession of, Makecards (or its representatives or service providers). In addition to factual information, it includes any expression of opinion about an individual and any indication of the intentions of Makecards or any other person in respect of an individual.',
      'The personal data we collect depends on how you interact with us, the services you use and the choices you make. We may collect information from different sources and in various ways, including information you provide us directly, information collected automatically, third-party data sources, and anonymized and aggregate data (data not referenced to a specific individual).',
    ],
  },
  {
    id: 'information-you-provide-us',
    text: 'Information you provide us',
    infoList: [
      'We collect and use any information you provide us in order to establish an account and access our services. The information is either required by law (e.g to verify your identity), necessary to secure your account or is relevant for our legitimate business interests, all described in greater detail below:',
    ],
    listArray: [
      {
        topic: 'Identification Information',
        topicText:
          'Full name, phone number, email address, selfie image and home address.',
      },
      {
        topic: 'Formal identification information',
        topicText:
          'Government issued identity documents and numbers such as Virtual National Identification Number (VNIN), Drivers license number and International passport number.',
      },
      {
        topic: 'Financial information',
        topicText: 'Bank Verification Number (BVN).',
      },
      {
        topic: 'Transaction information',
        topicText:
          'Information about the transactions you make with our services, such as merchant information, amount paid for products and time stamp.',
      },
    ],
  },
  {
    id: 'information-we-collect-automatically',
    text: 'Information we collect automatically',
    infoList: [
      'We automatically collect some information about you whenever you interact with our website or use our services. This information helps us address customer support issues, improve the performance of our site and web application, provide you with a streamlined personalised experience, and protect your account from fraud by detecting unauthorized access. Such information includes:',
    ],

    listArray: [
      {
        topic: 'Device information',
        topicText:
          'We collect collect information about the device and software you use to access our website and services, including the Internet Protocol (IP) address used to connect your device to the internet, browser type and version, operating system version and geo-location/tracking details.',
      },
      {
        topic: 'Location information',
        topicText:
          'When you use our service, we may collect or infer your location information. This may include your time zone, country, state, city, local government address (where applicable), zip code and time stamp.',
      },
    ],
  },
  {
    id: 'information-collected-from-third-parties',
    text: 'Information collected from third parties',
    infoList: [
      'As part of our signup process, we run verification checks about you from third party sources with the information you provide us. The third parties we receive your personal information from are:',
    ],
    listArray: [
      {
        topic: 'Public databases and identity verification partners',
        topicText:
          'In order to verify your identity and protect you from fraud, we use a combination of government database and identity verification partners. We collect information from National Identity Management Commission (NIMC), Federal Road Safety Corps (FRSC), Nigeria Inter-Bank Settlement System (NIBSS), Nigeria Immigration Service, and other related database based on your location. Information received may include your legal name, identity image, address, and other relevant data.',
      },
    ],
  },

  {
    id: 'anonymized-and-aggregated-data',
    text: 'Anonymized and aggregated data',
    infoList: [
      'Makecards may process anonymized information and data that is not processed by reference to a specific individual. Such data includes fraud indicators and performance metrics.',
    ],
  },
  {
    id: 'why-we-retain-personal-information',
    text: 'Why we retain personal information',
    infoList: [
      'We retain personal information to fulfil our legal or regulatory obligations, protect you from fraud and for our business purposes. We may retain your personal data for longer period than is required by the law for our business purposes and not prohibited by law. If your account is closed, we may take steps to mask personal data and other information, but we reserve our ability to retain and access the data for so long as required to comply with applicable laws. We will continue to use and disclose such personal data in accordance with this Privacy Policy.',
    ],
  },
  {
    id: 'how-we-use-your-personal-information',
    text: 'How we use your personal information',
    infoList: [
      'The Nigerian Data Protection Regulation (NDPR) says we need to have a lawful basis for using your personal information. We may use your information in the following ways and for the following purposes:',
    ],
    listArray: [
      {
        topic: 'To provide Makecards services',
        topicText:
          'We process your personal data in order to provide services for you. For example, when you want to signup on Makecards, we require certain information like selfie image, identity number, email address and phone number. We collect these information to verify your identity and protect you from fraud when using Makecards services. The consequence of not providing such information or providing the wrong information is the termination of the signup process.',
      },

      {
        topic: 'To comply with legal and regulatory obligations',
        topicText:
          'Makecards needs your personal information to verify your identity in order to comply with fraud monitoring, prevention and detection obligations, laws associated with the identification and reporting of illegal and illicit activity, such as Anti-Money Laundering (AML) and Know Your Customer (KYC) obligations, and financial reporting obligations. For example, we may be required to record and verify your identity for the purpose of compliance with legislation intended to prevent money laundering and financial crimes. These obligations are imposed on us by the operation of law, industry standards, and by our financial partners, and may require us to report our compliance to third parties, and to submit to third party verification audits.',
      },

      {
        topic: 'To provide communications and customer services',
        topicText:
          'We may also process your personal information to uniquely tailor the marketing content and certain services or site experiences to better match your interests in Makecards. We may send you service updates regarding account-related information, security issues, or other transaction-related information. These communications are important to share developments relating to your account that may affect how you can use our services. We also process your personal information when you contact us to resolve any questions or to troubleshoot problems.',
      },
      {
        topic: 'In our legitimate business interests',
        topicText:
          'Monitor, prevent and detect fraud - Respond to inquiries, send service notice and provide customer support - Manage, operate and improve performance of our site, web application and services by understanding their effectiveness and optimizing our digital assets - Promote, analyse, modify and improve our product, systems and tools, and develop new products and services. - Conduct aggregate analysis and develop business intelligence that enable us to operate, protect, make informed decisions, and report on the performance of our business - Share personal information with third party service providers that provide services on our behalf and business partners that help us improve our services, and - Ensure network and information security throught Makecards and our services.',
      },
    ],
  },
  {
    id: 'sharing-your-personal-with-third-parties',
    text: 'Sharing your personal with third parties',
    infoList: [
      'Makecards in efforts to provide excellent products and services may need to outsource its product delivery, this will be done in line with relevant regulations and laws. Makecards will never sell your information out to third parties. We may also share your personal information when there is a public or legal duty to do so, when it is needed to conclude regulatory reporting and when Makecards has requested and received your permission to share it.',
    ],
  },
  {
    id: 'how-we-protect-and-retain-your-personal-information',
    text: 'How we protect and retain your personal information',
    infoList: [
      'Makecards ensures to secure your personal information through firewalls and use of data encryption technologies. Your information is secured against all foreseeable hazards and breaches such as theft, cyberattack, viral attack, dissemination, manipulations of any kind, damage by rain, fire or exposure to other natural elements. Employees may have access to personal data only as is appropriate for they type and scope of the task and are contractually forbidden to use personal data for their own private or commercial purposes or to disclose them to unauthorised persons, or to make them available in any other way. Unauthorised use or disclosure of confidential customer information by a Makecards employee results in disciplinary measures.',
      'We retain your information for as long as your account is active or as needed to provide our services to you, and for any additional period as required under applicable law and regulations.',
    ],
  },
  {
    id: 'your-privacy-rights',
    text: 'Your privacy rights',
    infoList: [
      'Subject to limitation set out in the Nigeria Data Protection Regulation (NDPR), you have certain rights in relation to your personal data. You have the rights to request access to your data, rectification and data portability. Please contact us if you want to exercise these rights. You also have the right to report a complaint about the handling of your personal information with the National Information Technology Agency (NITDA).',
    ],
  },
  {
    id: 'governing-law',
    text: 'Governing law',
    infoList: [
      'This Privacy Policy is made in accordance to the Nigeria Data Protection Regulation (2019), and other relevant laws and regulations. Where any provision of this Policy is deemed incosistent with a law or regulation, such provision shall be subject to the overriding law or regulation.',
    ],
  },
  {
    id: 'how-to-contact-us',
    text: 'How to contact us',
    infoList: [
      'If you have any questions regarding this Privacy Policy, or if you have a complaint, please contact us at support@makecards.co',
    ],
  },
];

export const cookieAndPolicyLink = [
  {
    id: nanoid(),
    href: '#what-are-cookies?',
    text: 'What Are Cookies?',
  },
  {
    id: nanoid(),
    href: '#why-do-we-use-cookies?',
    text: 'Why do we use Cookies?',
  },
  {
    id: nanoid(),
    href: '#the-types-of-cookies-we-use',
    text: 'The Types of Cookies We Use',
  },
  {
    id: nanoid(),
    href: '#use-of-third-party-cookies',
    text: 'Use of Third-party Cookies',
  },
  {
    id: nanoid(),
    href: '#how-to-disable-cookies',
    text: 'How to Disable Cookies',
  },
  {
    id: nanoid(),
    href: '#cookie-notification',
    text: 'Cookie Notification',
  },
  {
    id: nanoid(),
    href: '#more-information',
    text: 'More information',
  },
];

export const cookiePolicyLinkBody = [
  {
    id: 'what-are-cookies?',
    text: 'What Are Cookies?',
    infoList: [
      'Cookies are small text files that are downloadable on your device when you access our website. They allow us to recognize your device and store information about your preferences or past actions on our website, ultimately allowing us to improve your experience. This cookie policy describes the type of information that we gather and how we use the information.',
    ],
  },
  {
    id: 'why-do-we-use-cookies?',
    text: 'Why do we use Cookies?',
    infoList: [
      "Cookies help us remember your preferences. A good way to think about cookies is that they're like stickers. Every time you visit a site or app that uses cookies, the site puts a sticker on you to keep track of how many times you've visited, how much time you've spent there, and what you've done. This lets the site show you things that are relevant to you, based on the information you've entered, and the things that you've looked at.",
    ],
  },
  {
    id: 'the-types-of-cookies-we-use',
    text: 'The Types of Cookies We Use',
    infoList: ['The cookies used on this website include:'],
    listArray: [
      {
        topic: 'Strictly necessary cookies',
        topicText:
          'These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website or make use of our card services.',
      },
      {
        topic: 'Analytical or performance cookies',
        topicText:
          'These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.',
      },
      {
        topic: 'Functionality cookies',
        topicText:
          'These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).',
      },

      {
        topic: 'Targeting cookies',
        topicText:
          'These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.',
      },
    ],
  },
  {
    id: 'use-of-third-party-cookies',
    text: 'Use of Third-party Cookies',
    infoList: [
      'In some special cases, we also use cookies provided by trusted third parties. Third-party analytics are used to track and measure the usage of this site so that we can continue to produce engaging content. This site uses Google Analytics which is one of the widespread and trusted analytics solution on the web to help us understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. From time to time, we test new features and make subtle changes to the way the site is delivered. While we are still testing new features, these cookies may be used to ensure that you receive a consistent experience on our site. That way, we will be able to understand which optimizations our users appreciate most.',
    ],
  },
  {
    id: 'how-to-disable-cookies',
    text: 'How to Disable Cookies',
    infoList: [
      'A lot of web browsers allow control of cookies through the settings. You can prevent the setting of cookies by adjusting the browser settings. Be aware that disabling cookies may affect the functionality of our website. Therefore, it is suggested that you do not disable cookies.',
    ],
  },
  {
    id: 'cookie-notification',
    text: 'Cookie Notification',
    infoList: [
      'This website uses cookies to optimize your experience and provide us insight on how to interact with the site. All information shared with us through cookies are secured and covered by our data policy obligations.',
    ],
  },
  {
    id: 'more-information',
    text: 'More information',
    infoList: [
      'If you would like more information, please contact us at support@makecards.co',
    ],
  },
];

export const termsAndServiceLink = [
  {
    id: nanoid(),
    href: '#definitions',
    text: 'Definitions',
  },
  {
    id: nanoid(),
    href: '#use-of-card',
    text: 'Use of Card',
  },
  {
    id: nanoid(),
    href: '#safeguarding-the-card-and-pin',
    text: 'Safeguarding the Card and PIN',
  },
  {
    id: nanoid(),
    href: '#card-transactions',
    text: 'Card transactions',
  },
  {
    id: nanoid(),
    href: '#the-account',
    text: 'The Account',
  },
  {
    id: nanoid(),
    href: '#payment',
    text: 'Payment',
  },
  {
    id: nanoid(),
    href: '#charges',
    text: 'Charges',
  },
  {
    id: nanoid(),
    href: '#age-restriction',
    text: 'Age Restriction',
  },
  {
    id: nanoid(),
    href: '#termination',
    text: 'Termination',
  },
  {
    id: nanoid(),
    href: '#compromise-or-misuse-of-card-and-liability',
    text: 'Compromise or Misuse of Card and Liability',
  },
  {
    id: nanoid(),
    href: '#general',
    text: 'General',
  },
];

export const termsAndServiceKinkBody = [
  {
    id: 'definitions',
    text: 'Definitions',
    infoList: [
      '"Account" is where your payment transactions are made.',
      '"Agreement" means a legally binding arrangement between parties as to a course of action.',
      '"Currency" is a system of money in general use in a particular country.',
      '"Card" means our Virtual Debit Card issued to you under the Card Association payment scheme.',
      '"Card Number" means the long set of digits displayed across the front or back of your virtual card. It is typically 16 digits in length, often appearing in sets of four, and it is used to identify both the credit card issuer and the account holder.',
      '"Card Balance" means the amount showing in the card account at any given time.',
      '"PIN" means any personal identification number issued to or selected by you.',
      '"Dashboard" means a user interface or web page that gives a current summary of your card(s) balance, transactions and exchange rate(s).',
      '"Transaction" means any use of the card or card number to make or authorize payments to merchants.',
      '"Merchant" means a business that sells directly to the public either from a store or via the internet.',
      '"Card Type" means the card brand and platform your card is issued on i.e. MasterCard, Visa, Verve, UnionPay.',
      '"Conversion rate/exchange rate" means the rate at which the local currency (naira, rand, cedis, etc) is converted into foreign currency and made available to you for withdrawal(s) or purchase(s).',
      '"We", "Ours", "Us" means Makecards and/or any division of Makecards.',
      '"You/Your" means the customer(s) to whom a card is issued by us.',
    ],
  },
  {
    id: 'use-of-card',
    text: 'Use of Card',
    infoList: [
      'You agree to comply with any instruction we give regarding the use and safekeeping of cards.',
      'You may only use the card within the validity period embossed on the card.',
      'You will be liable for the amount of all card transactions and charges debited from the account.',
      'When the card expires, you may request a new card, subject to satisfaction of our requirements.',
      'You agree that the card must not be used for fraudulent purposes.',
      'You should exercise reasonable care when giving your card details to a Merchant to mitigate fraud.',
      'You cannot stop a card payment once made but a Merchant may initiate a refund. We will credit your account when we receive any refund.',
      'We are not responsible for non-receipt of, or any delay in receipt of the refund.',
    ],
  },
  {
    id: 'safeguarding-the-card-and-pin',
    text: 'Safeguarding the Card and PIN',
    infoList: [
      'You agree to take all necessary steps to keep card security details secret at all times.',
      'You agree never to allow any other person to use your Card whether with or without the card number, but if you do so, you will be liable for any Debit to the account without limitation, or any other incident arising from a third-party use of your Card.',
      'You may only disclose the card number for the purpose of making a valid verified transaction or when reporting a compromised card or when we authorize disclosure.',
      'When using your card to pay for goods or services through the Internet or other electronic media, you are strongly recommended to use ‘secure payment’ sites and software.',
      'You must inform us immediately if any of your statements has an entry of transaction(s) you do not recall.',
      'You must report any compromised card immediately or you can block your card(s) from your dashboard if you notice any suspicious transactions or activity.',
    ],
  },
  {
    id: 'card-transactions',
    text: 'Card transactions',
    infoList: [
      'The card or card number can be used to make or authorize payments to Merchants who accept the card transactions.',
      'Once the card has been authorized for a transaction, the transaction cannot be stopped.',
    ],
  },
  {
    id: 'the-account',
    text: 'The Account',
    infoList: [
      'Your Account is governed by this Business Terms of Service.',
      'We will deduct the amount of all transactions from the account.',
    ],
  },
  {
    id: 'payment',
    text: 'Payment',
    infoList: [
      'Transactions will normally be Debited to your Account within 3 working days. All Transactions will be shown on your dashboard.',
    ],
  },
  {
    id: 'charges',
    text: 'Charges',
    infoList: [
      'You agree that we apply the purchase transactions from accounts.',
      'We reserve the right to change any of our charges, we will however notify you of any changes.',
    ],
  },
  {
    id: 'age-restriction',
    text: 'Age Restriction',
    infoList: [
      'Our website and services are not directed to children under 18. We do not knowingly transact or provide any services to children under 18.',
    ],
  },
  {
    id: 'termination',
    text: 'Termination',
    infoList: [
      'If we consider it necessary, we may cancel or suspend the right to use the card with respect to specific functions in line with regulatory standards or compliance.',
      'We are not responsible if a request for authorisation is declined or if a card is not accepted in payment or for any loss or damage resulting from the way in which either decision is communicated to you.',
      'You may end your use of the card (and the use of the card by any additional cardholders) at any time by giving us notice in writing.',
      'We will renew cards from time to time for use in accordance with this agreement.',
    ],
  },
  {
    id: 'compromise-or-misuse-of-card-and-liability',
    text: 'Compromise or Misuse of Card and Liability',
    infoList: [
      'If you think your card has been compromised, you can contact the support team.',
      'Makecards shall not be liable for consequences that arise as a result of your disclosure to any third party arising out of a transaction instruction.',
      'We advise that compromised cards should not be used for transactions. Kindly block immediately then notify Makecards of the comprised card promptly.',
      'You will not be liable for any losses arising out of non-receipt of your card details unless non-receipt was due to you failing to notify us of a change of phone number or email address.',
      'You agree to give us all the information you possess about the misuse of the card or the disclosure of the PIN and to take all steps we deem necessary to assist.',
    ],
  },
  {
    id: 'general',
    text: 'General',
    infoList: [
      'We may amend these Terms and Service from time to time after giving you 30 days’ notice. Changes which in our opinion are favourable to you may not require prior notice.',
      'If a merchant is liable to refund a transaction, we will only credit the account with the amount of the refund when it has been received by us. No claim by you against a third party may be the subject of a claim against us. You may not assign or otherwise dispose of any rights against us.',
      'You shall immediately notify us via mail of any change to your address.',
      'We may activate our rights and benefits under this agreement at any time without prior notice to you.',
    ],
  },
];

export const countryName = [
  {
    name: 'Nigeria',
    src: 'https://makecards.co/static/media/ng.0d0edb990f97d04a933dc18db24c7219.svg',
    rate: '$1 = #190.59',
  },

  {
    name: 'Uganda',
    src: 'https://makecards.co/static/media/uganda.a7d6ec6ba74b6980134566d34f7a711c.svg',
    rate: '$1 = 2590.59',
  },
  {
    name: 'Ghana',
    src: 'https://makecards.co/static/media/ghana.7c58c56e40c139224767a7e7d22cb900.svg',
    rate: '$1 = 6780.59',
  },
  {
    name: 'South Africa',
    src: '	https://makecards.co/static/media/South-Africa.140aa05d116b0d6728ee38713dfb3ed9.svg',
    rate: '$1 = 4590.59',
  },

  {
    name: 'Kenya',
    src: 'https://makecards.co/static/media/kenya.c5f66beb8808a8b4f02416342c5202e0.svg',
    rate: '$1 = 579.59',
  },
];
export default links;
