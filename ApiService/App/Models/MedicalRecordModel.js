const medicalRecordScheme = {
    medicalRecord : [
        {
            medicalRecordId: 'byte',
        }
    ],
    nurse: [
        {
            clinic: 'string',
            height: 'byte',
            bodyWeight: 'byte',
            bmi: 'byte',
            temperature: 'byte',
            date: 'byte',
            time: 'byte',
            // medicalRecordId: 'byte',
        },
        {
            pulseRate: 'byte',
            respiratoryRate: 'byte',
            BP1: 'byte',
            BP2: 'byte',
            BP3: 'byte',
            chiefComplaint: 'string',
            nurseName: 'byte',
        },
    ],
    doctor: [
        {
            presentIllness: 'string',
            physicalExem: 'string',
            diagnosis: 'string',
            treatment: 'string',
            recommendation: 'string',
            appointment: 'string',
            doctorName: 'byte',
        }
    ],
    pharmacy: [
        {
            treatment: 'string',
            recommendation: 'string',
            appointment: 'string',
            doctorName: 'byte',
            patientCitizenId: 'byte',
        }
    ],
    history: [
        {
            date: 'byte',
            doctorName: 'byte',
            clinic: 'string',
        }
    ]
}

module.exports = {
    medicalRecordScheme
};