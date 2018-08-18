
import { Patient } from './Patient';
import { Employee } from './Employee';
export const MedicalRecord = {
    patient: Patient,
    pharmacistId: Employee,
    doctorId: Employee,
    nurseId: Employee,

    visitNumber: '',
    clinic: '',
    height: 0,
    bodyWeight: 0,
    bmi: 0,
    temperature: 0,
    pulseRate: 0,
    respiratoryRate: 0,
    BP1: '',
    BP2: '',
    BP3: '',
    chiefComplaint: '',
    // dateTimeOfNurse: '',

    presentIllness: '',
    physicalExem: '',
    diagnosis: '',
    treatment: '',
    recommendation: '',
    appointment: '',
    // dateTimeOfDoctor: '',

    dateTime:'',
    medicines: []
}