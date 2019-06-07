export const store = {
	state: {
		survey: {
			name: '',
			description: '',
			number_of_questions: 0,
			response_goal: 0,
			start_date: null,
			end_date: null,
			start_time: '',
			end_time: '',
			created_date: null,
			trunk: '',
			skip_logic: false,
			amd: false,
			timeout: 0,
			channels: 0,
			audio_volume: 0
		},
		details: {
			survey_id: '',
			response_tracking_question: 0,
			intro_audio_file: '',
			hangup_audio_file: ''
		},
		uploaded_files: [],
		questions: [],

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