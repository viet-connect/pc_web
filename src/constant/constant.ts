const layoutConstant = Object.freeze({
	ENTERPRISE: '비엣커넥트',
	EXECUTIVE: '서현욱',
	PERSONAL_INFO_PERSON_IN_CHARGE: '하석호',
	ENTERPRISE_NUMBER: '101-1451-2572-10',
	ADDRESS: '서울특별시 동대문구 이문로 107',
	COMPANY_EMAIL: 'gluesociety@naver.com',
	COMPANY_PHONE_NUMBER: '010-8453-8883',
});

const category = Object.freeze({
	FACTORY: '공장',
	FARM: '농장',
	RESTAURANT: '식당',
	CONSTRUCTION: '건축',
	TRANSLATION: '번역',
});

const postingConstant = Object.freeze({
	PostingFirstPartInfo: [
		['noticeTitle', 'noticePlaceholder', 'title'],
		['companyName', 'companyNamePlaceholder', 'contact_name'],
		['contact', 'contactPlaceholder', 'contact_number'],
	],
	// PostingSecondPartInfo: [
	// 	['공장', '식당'],
	// 	['건설', '번역'],
	// 	['사무', '농장'],
	// 	['기타 서비스업', '직접 입력'],
	// ],
	PostingThirdPartInfo: {
		gender: ['regardlessOfGender', 'male', 'female', 'recruitmentGender'],
		proficiency: [
			'koLangExcellence',
			'koLangAverage',
			'koLangBasic',
			'koLangirrelevance',
			'koLangSkill',
		],
		working_day: [
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday',
			'sunday',
			'preferredWorkday',
		],
	},
});

const jobTableConstant = Object.freeze({
	// announcement: {
	// 	renderingTitle: '공고',
	// 	width: 100,
	// 	key: 'is_premium',
	// },
	region: {
		renderingTitle: '날짜',
		width: 50,
		key: 'date',
		ellipsis: true,
	},
	wage: {
		renderingTitle: '급여',
		key: 'salary',
		width: 100,
		ellipsis: true,
	},
	title: {
		renderingTitle: '제목',
		key: 'title',
		width: 100,
		ellipsis: true,
	},
	// category: {
	// 	renderingTitle: '직무',
	// 	key: 'category',
	// 	width: 100,
	// 	ellipsis: true,
	// },
});

export { layoutConstant, postingConstant, jobTableConstant, category };
