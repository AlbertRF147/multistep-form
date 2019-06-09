const uuidv1 = require('uuid/v1');

export const store = {
	state: {
		survey: {
			name: '',
			description: '',
			number_of_questions: 1,
			response_goal: 0,
			start_date: null,
			end_date: null,
			start_time: '',
			end_time: '',
			created_date: new Date().toLocaleDateString(),
			trunk: '',
			skip_logic: false,
			amd: false,
			timeout: 30,
			channels: 5,
			audio_volume: 0.25
		},
		details: {
			survey_id: uuidv1(),
			response_tracking_question: 0,
			intro_audio_file: '',
			hangup_audio_file: ''
		},
		uploaded_files: [],
		questions: [
			{
				id: 0,
				question: '',
				label: '',
				audio_file: '',
				answers: []
			}
		],

	}
}


const question = {
	id: 0,
	question: '',
	label: '',
	audio_file: '',
	answers: []
}

const answer = {
	id: 0,
	answer: '',
	dtmf: '',
	goto_question: 0
}