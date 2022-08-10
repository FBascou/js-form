/* global imports */
// const axios = require('axios');
/* local imports */
/* variable declaration */

// values array
const postCompanyName = document.querySelector('#post-company-name');
const postName = document.querySelector('#post-name');
const postPhone = document.querySelector('#post-phone');
const postEmail = document.querySelector('#post-email');
const postSubject = document.querySelector('#post-subject');
const postCurrencyServices = document.querySelector('#currency-services');
const postContactMethod = document.querySelector('#contact-method');
const postAvailability = document.querySelector('#post-availability');
const postBeforeAfterRadio = document.querySelectorAll('.radio-before-after');
const postJVStageBeforeAfterRadio = Array.from(postBeforeAfterRadio).find((c) => c.checked);

// consulting
const postJVStageConsultingRadio = document.querySelectorAll('input[name=consulting-jv-selection]');
const postDropdownServicesParentBefore = document.querySelector('.dropdown-parent-before');
const postDropdownServicesChildBefore = document.querySelector('.dropdown-child-before');
const postDropdownServicesParentAfter = document.querySelector('.dropdown-parent-after');
const postDropdownServicesChildAfter = document.querySelector('.dropdown-child-after');
const postConsultingDescription = document.querySelector('#consulting-description');
// consulting files
const postMatchingCompanyIntroFile = document.querySelector('#post-matching-intro');
const postMatchingPartnerProfileFile = document.querySelector('#post-matching-profile');
const postValidationPartnerProfileFile = document.querySelector('#post-validation-profile');

const postMatchingProfileDiv = document.querySelector('.child-matching-file-before');
const postValidationProfileDiv = document.querySelector('.child-validation-file-before');

// travel-expense
const postJVStageTravelRadio = document.querySelectorAll(
	'input[name="travel-expense-jv-selection"]'
);
const postTravelExpense = document.querySelector('input[name="travel-expense-selection"]:checked');
const postTravelCurrencyBefore = document.querySelector('#travel-before-currency');
const postTravelCurrencyAfter = document.querySelector('#travel-after-currency');

const postTravelCurrencyServicesBefore = document.querySelector('#travel-before-currency-services');
const postTravelCurrencyServicesAfter = document.querySelector('#travel-after-currency-services');
const postTravelPlanFile = document.querySelector('#post-travel-plan');
const postPlatformScreenFile = document.querySelector('#post-platform-screen');
const postTravelBusinessLicenseBeforeFile = document.querySelector(
	'#post-travel-before-business-license'
);

const postTravelerInfoFile = document.querySelector('#post-traveler-info');
const postFlightTicketFile = document.querySelector('#post-flight-ticket');
const postTravelReportFile = document.querySelector('#post-travel-report');
const postPaymentInfoFile = document.querySelector('#post-payment-info');
const postTicketInfoFile = document.querySelector('#post-ticket-info');
const postTravelBeforeDescription = document.querySelector('#travel-before-description');
const postTravelAfterDescription = document.querySelector('#travel-after-description');

// office rent
const postOfficeRadio = document.querySelector('#post-office-rent-after');
const postOfficeFee = document.querySelector('#post-office-fee');
const postOfficeCurrencyBefore = document.querySelector('#office-before-currency');
const postOfficeCurrencyAfter = document.querySelector('#office-after-currency');
const postOfficeCurrencyServicesBefore = document.querySelector('#office-before-currency-services');
const postOfficeCurrencyServicesAfter = document.querySelector('#office-after-currency-services');
const postOfficeContractBeforeFile = document.querySelector('#post-office-before-contract');
const postOfficeContractAfterFile = document.querySelector('#post-office-after-contract');
const postOfficeInvoiceBeforeFile = document.querySelector('#post-office-before-invoice');
const postOfficeInvoiceAfterFile = document.querySelector('#post-office-after-invoice');
const postOfficeBusinessLicenseBeforeFile = document.querySelector(
	'#post-office-before-business-license'
);
const postOfficeBusinessLicenseAfterFile = document.querySelector(
	'#post-office-after-business-license'
);
const postRentalInvoiceDetailedFile = document.querySelector('#post-rental-invoice-detailed');
const postOfficeJVInfoBeforeFile = document.querySelector('#post-office-before-jv-info');
const postOfficeJVInfoAfterFile = document.querySelector('#post-office-after-jv-info');
const postRentalTransferFile = document.querySelector('#post-rental-transfer');
const postCurrencyInfoFile = document.querySelector('#post-currency-info');
const postRentFee = document.querySelector('#post-rent-fee');

// terms of service
const postAgreeTerm = document.querySelector('#agree-terms');

// service buttons
const servicesBtnArray = document.querySelectorAll('.services-btn');
const consultingServiceBtn = document.querySelector('#consulting');
const travelExpenseServiceBtn = document.querySelector('#travel-expense');
const officeRentServiceBtn = document.querySelector('#office-rent');

// service forms
const consultingService = document.querySelector('#consulting-section');
const travelExpenseService = document.querySelector('#travel-expense-section');
const officeRentService = document.querySelector('#office-rent-section');

// subject
const subjectValue = document.querySelector('#post-subject');

// jv before/after radio buttons
const radioBtnArray = document.querySelectorAll('.radio-select');
const consultingBeforeRadioBtn = document.querySelector('post-consulting-before');
const consultingAfterRadioBtn = document.querySelector('.post-consulting-after');
const beforeParent = document.querySelectorAll('.parent-before');
const beforeChild = document.querySelectorAll('.child-before');
const afterParent = document.querySelectorAll('.parent-after');
const afterChild = document.querySelectorAll('.child-after');

// dropdowns
const dropdownArray = document.querySelectorAll('.dropdown-parent');
const dropdownChildArray = document.querySelectorAll('.dropdown-child');
const selectedValues = Array.from(dropdownArray).map((item) => {
	return item;
});

// captcha-restart
const captchaRestart = document.querySelector('.captcha-restart');

// submit button
const submitBtn = document.querySelector('.btn-primary');
const clearBtn = document.querySelector('.btn-clear');

// input types
const inputText = document.querySelectorAll('input[type="text"]');
const inputEmail = document.querySelector('input[type="email"]');
const inputTel = document.querySelector('input[type="tel"]');
const inputFile = document.querySelectorAll('input[type="file"]');
const inputRadio = document.querySelectorAll('input[type="radio"]');
const inputCheckBox = document.querySelectorAll('input[type="checkbox"]');
const inputSelect = document.querySelectorAll('select');

// message
const submitMessage = document.querySelector('.msg');

// input error message
const inputErrorEmailMessage = document.querySelector('.input-error-email');
const inputErrorPhoneMessage = document.querySelector('.input-error-phone');

let captcha = new Array();
let bodyFormData = new FormData();
let postValueObject = {
	// general
	company: '',
	name: '',
	email: '',
	phone: '',
	subject: '',
	jv_stage: '',
	currency_type: '',
	business_license: '',
	// consulting
	consulting_item: '',
	consulting_subitem: '',
	company_intro: '',
	partner_profile: '',
	description: '',
	// travel_expense
	travel_expense: '',
	travel_expense_amount: '',
	// currency_type: '',
	description: '',
	travel_plan: '',
	platform_screen: '',
	traveler_info: '',
	flight_ticket: '',
	travel_report: '',
	payment_info: '',
	ticket_info: '',
	// office_rent
	office_rent: '',
	rent_fee: '',
	// currency_type: '',
	rental_contract: '',
	rental_invoice_detailed: '',
	rental_invoice: '',
	rental_transfer: '',
	jv_info: '',
	currency_info: '',
	// general
	description: '',
	contact_by_me: '',
	available_time: '',
	terms_agreement: '',
};

function validateEmail() {
	var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	inputEmail.addEventListener('change', (e) => {
		if (e.target.value.match(validEmailRegex)) {
			inputEmail.focus();
			inputErrorEmailMessage.innerHTML = '';
			return true;
		} else {
			inputEmail.focus();
			inputErrorEmailMessage.innerHTML = 'Invalid email address';
			return false;
		}
	});
}
validateEmail();

function validatePhone() {
	var validPhoneRegex = /^[0-9]{2}-[0-9]{2}-[0-9]{4}-[0-9]{4}$/;

	inputTel.addEventListener('change', (e) => {
		if (e.target.value.match(validPhoneRegex)) {
			inputTel.focus();
			inputErrorPhoneMessage.innerHTML = '';
			return true;
		} else {
			inputTel.focus();
			inputErrorPhoneMessage.innerHTML = 'Invalid phone. Format: 82-10-0000-0000';
			return false;
		}
	});
}
validatePhone();

function selectService(btnArray) {
	return Array.from(btnArray).map((item) => {
		item.addEventListener('click', (e) => {
			consultingService.style.display = 'none';
			travelExpenseService.style.display = 'none';
			officeRentService.style.display = 'none';
			e.preventDefault();
			if (e.currentTarget.id === 'consulting') {
				travelExpenseService.style.display = 'none';
				officeRentService.style.display = 'none';
				consultingService.style.display = 'block';
				consultingService.getElementsByTagName('input').required = true;
				consultingService.getElementsByTagName('select').required = true;
				consultingService.getElementsByTagName('textarea').required = true;
				// subjectValue.value = '2022년 ICT 창의기업 육성 사업';
				setRadioVisible(radioBtnArray);
				setDropdownVisible();
			} else if (e.currentTarget.id === 'travel-expense') {
				consultingService.style.display = 'none';
				officeRentService.style.display = 'none';
				travelExpenseService.style.display = 'block';
				travelExpenseService.getElementsByTagName('input').required = true;
				travelExpenseService.getElementsByTagName('select').required = true;
				travelExpenseService.getElementsByTagName('textarea').required = true;
				// subjectValue.value =
				// 	'D.N.A. 융합 제품.서비스 해외진출 지원사업';
				setRadioVisible(radioBtnArray);
			} else {
				consultingService.style.display = 'none';
				travelExpenseService.style.display = 'none';
				officeRentService.style.display = 'block';
				officeRentService.getElementsByTagName('input').required = true;
				officeRentService.getElementsByTagName('select').required = true;

				officeRentService.getElementsByTagName('textarea').required = true;
				// subjectValue.value =
				// 	'D.N.A. 융합 제품.서비스 해외진출 지원사업';
				setRadioVisible(radioBtnArray);
			}
		});
	});
}
selectService(servicesBtnArray);

function setRadioVisible(radioArray) {
	Array.from(beforeParent).map((item) => {
		item.style.display = 'none';
	});
	Array.from(afterParent).map((item) => {
		item.style.display = 'none';
	});
	Array.from(radioArray).map((item) => {
		item.checked = false;
	});

	return Array.from(radioArray).map((item) => {
		item.addEventListener('click', (e) => {
			if (
				e.currentTarget.value === 'JV 설립 전' ||
				e.currentTarget.value ===
					'Apply for approval to plan for JV Office rent (현지 임차료 활용 승인 신청)' ||
				e.currentTarget.value ===
					'Apply for approval to plan for Travel Expense (국외여비 활용계획 승인 신청)'
			) {
				Array.from(afterParent).map((item) => {
					item.style.display = 'none';
					item.value = '';
				});
				Array.from(afterChild).map((item) => {
					item.value = '';
					item.style.display = 'none';
				});
				Array.from(beforeParent).map((item) => {
					item.style.display = 'block';
				});
			} else {
				Array.from(beforeParent).map((item) => {
					item.style.display = 'none';
					item.value = '';
				});
				Array.from(beforeChild).map((item) => {
					item.value = '';
					item.style.display = 'none';
				});
				Array.from(afterParent).map((item) => {
					item.style.display = 'block';
				});
			}
		});
	});
}

function setDropdownVisible() {
	const selectValuesBefore = selectedValues[0];
	const selectValuesAfter = selectedValues[1];

	selectValuesBefore.addEventListener('change', (e) => {
		const targetValue = e.target.value;

		if (targetValue === 'Joint Partnership') {
			return Array.from(beforeChild).map((item) => {
				item.style.display = 'block';
				item.addEventListener('change', (e) => {
					if (e.target.value === 'Potential Partner Matching') {
						postValidationProfileDiv.style.display = 'none';
						postMatchingProfileDiv.style.display = 'block';
					} else if (
						e.target.value ===
						'Potential Partner Validation & Business Information Report'
					) {
						postMatchingProfileDiv.style.display = 'none';
						postValidationProfileDiv.style.display = 'block';
					}
					console.log(e.target.value);
				});
			});
		} else {
			return Array.from(beforeChild).map((item) => {
				item.style.display = 'none';
			});
		}
	});

	selectValuesAfter.addEventListener('change', (e) => {
		const targetValue = e.target.value;

		if (targetValue === 'Product Market Fit') {
			return Array.from(afterChild).map((item) => {
				item.style.display = 'block';
			});
		} else {
			return Array.from(afterChild).map((item) => {
				item.style.display = 'none';
			});
		}
	});
}

function addPostValues() {
	// general
	postValueObject.company = postCompanyName.value;
	postValueObject.name = postName.value;
	postValueObject.email = postEmail.value;
	postValueObject.phone = postPhone.value;
	postValueObject.subject = postSubject.value;
	postValueObject.description =
		postConsultingDescription.value ||
		postTravelBeforeDescription.value ||
		postTravelAfterDescription.value;
	postValueObject.jv_stage = Array.from(postBeforeAfterRadio).find((c) => c.checked).value;
	postValueObject.business_license =
		postTravelBusinessLicenseBeforeFile.files[0] ||
		postOfficeBusinessLicenseBeforeFile.files[0] ||
		postOfficeBusinessLicenseAfterFile.files[0];
	postValueObject.currency_type =
		postTravelCurrencyServicesBefore.value ||
		postTravelCurrencyServicesAfter.value ||
		postOfficeCurrencyServicesBefore.value ||
		postOfficeCurrencyServicesAfter.value;

	// consulting
	postValueObject.consulting_item =
		postDropdownServicesParentBefore.value || postDropdownServicesParentAfter.value;
	postValueObject.consulting_subitem =
		postDropdownServicesChildBefore.value || postDropdownServicesChildAfter.value;

	postValueObject.company_intro = postMatchingCompanyIntroFile.files[0];
	postValueObject.partner_profile =
		postMatchingPartnerProfileFile.files[0] || postValidationPartnerProfileFile.files[0];
	// travel_expense
	postValueObject.travel_expense = document.querySelector(
		'input[name="travel-expense-selection"]:checked'
	)
		? document.querySelector('input[name="travel-expense-selection"]:checked').value
		: '';
	postValueObject.travel_expense_amount =
		postTravelCurrencyBefore.value || postTravelCurrencyAfter.value;

	postValueObject.travel_plan = postTravelPlanFile.files[0];
	postValueObject.platform_screen = postPlatformScreenFile.files[0];
	postValueObject.traveler_info = postTravelerInfoFile.files[0];
	postValueObject.flight_ticket = postFlightTicketFile.files[0];
	postValueObject.travel_report = postTravelReportFile.files[0];
	postValueObject.payment_info = postPaymentInfoFile.files[0];
	postValueObject.ticket_info = postTicketInfoFile.files[0];
	// office_rent
	postValueObject.office_rent = document.querySelector(
		'input[name="office-rent-selection"]:checked'
	)
		? document.querySelector('input[name="office-rent-selection"]:checked').value
		: '';
	postValueObject.rent_fee = postOfficeCurrencyBefore.value || postOfficeCurrencyAfter.value;
	postValueObject.rental_contract =
		postOfficeContractBeforeFile.files[0] || postOfficeContractAfterFile.files[0];
	postValueObject.rental_invoice =
		postOfficeInvoiceBeforeFile.files[0] || postOfficeInvoiceAfterFile.files[0];
	postValueObject.jv_info =
		postOfficeJVInfoBeforeFile.files[0] || postOfficeJVInfoAfterFile.files[0];
	postValueObject.rental_invoice_detailed = postRentalInvoiceDetailedFile.files[0];
	postValueObject.rental_transfer = postRentalTransferFile.files[0];
	postValueObject.currency_info = postCurrencyInfoFile.files[0];
	// general
	postValueObject.contact_by_me = postContactMethod.value;
	postValueObject.available_time = postAvailability.value;
	postValueObject.terms_agreement = document.querySelector('#agree-terms').checked;

	const filteredPostValueObject = Object.fromEntries(
		Object.entries(postValueObject).filter((value) => value[1])
	);

	return filteredPostValueObject;
}

function createUser() {
	const postUrl = '';
	const redirectUrl = '';
	axios({
		method: 'post',
		url: postUrl,
		data: bodyFormData,
		headers: { 'Content-Type': 'multipart/form-data' },
	})
		.then(function (response) {
			//handle success
			console.log(response);
			submitMessage.textContent = 'Success';
			window.location.href = redirectUrl;
		})
		.catch(function (response) {
			//handle error
			console.log(response);
			submitMessage.textContent = 'Error, please try again.';
		});
}

function createCaptcha() {
	const activeCaptcha = document.getElementById('captcha');
	for (q = 0; q < 6; q++) {
		if (q % 2 == 0) {
			captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
		} else {
			captcha[q] = Math.floor(Math.random() * 10 + 0);
		}
	}
	theCaptcha = captcha.join('');
	activeCaptcha.textContent = `${theCaptcha}`;
}

createCaptcha();

function toggleHandle() {
	if (submitBtn.disable === false) {
		submitBtn.setAttribute('disabled', '');
	}

	if (submitBtn.disable === true) {
		submitBtn.removeAttribute('disabled');
	}
}

function restartCaptcha() {
	captchaRestart.addEventListener('click', (e) => {
		e.preventDefault();
		createCaptcha();
	});
}

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const errCaptcha = document.getElementById('errCaptcha');
	const reCaptcha = document.getElementById('reCaptcha');
	const recaptcha = reCaptcha.value;
	let validateCaptcha = 0;
	for (var z = 0; z < 6; z++) {
		if (recaptcha.charAt(z) != captcha[z]) {
			validateCaptcha++;
		}
	}

	if (recaptcha == '') {
		toggleHandle();
		errCaptcha.textContent = 'Re-Captcha must be filled';
	} else if (validateCaptcha > 0 || recaptcha.length > 6) {
		toggleHandle();
		e.preventDefault();
		errCaptcha.textContent = 'Wrong Captcha';
		return false;
	} else {
		toggleHandle();
		errCaptcha.textContent = 'Correct';
	}

	const objData = addPostValues();

	let keys = Object.keys(objData);
	let values = Object.values(objData);

	for (let i = 0; i < keys.length; i++) {
		console.log(keys[i] + values[i]);
		bodyFormData.append(keys[i], values[i]);
	}

	const loader = document.querySelector('.loader');
	loader.style.display = 'block';

	// createUser();

	setTimeout(createUser(), 3000);
});

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();
	Array.from(inputText).map((input) => (input.value = ''));
	Array.from(inputEmail).map((input) => (input.value = ''));
	Array.from(inputTel).map((input) => (input.value = ''));
	Array.from(inputFile).map((input) => (input.value = ''));
	Array.from(inputRadio).map((input) => (input.checked = false));
	Array.from(inputCheckBox).map((input) => (input.checked = false));
	Array.from(inputSelect).map((input) => (input.value = ''));
});

/* exports */
