pragma solidity ^0.4.19;

contract PatientProfile {
    struct InfoPatient {
        ProfilepatientInfoPart1 infoPart1;
        ProfilepatientInfoPart2 infoPart2;
        ProfilepatientInfoPart3 infoPart3;
        ProfilepatientInfoPart4 infoPart4;
    }

    struct ProfilepatientInfoPart1 {
        bytes32 registerDate;
        bytes32 hospitalnumber;
        bytes32 citizenId;
        bytes32 password;
    }

    struct ProfilepatientInfoPart2 {
        bytes32 dob;
        bytes32 titlename;
        bytes32 firstname;
        bytes32 lastname;
        bytes32 gender;
    }
    
    struct ProfilepatientInfoPart3 {
        bytes32 congenitaldisease;
        bytes32 bloodgroup;
        bytes32 religion;
        bytes32 nationality;
        bytes32 country;
    }
    struct ProfilepatientInfoPart4 {
        bytes32 status; 
        bytes32 occupartion;
        bytes32 homephonenumber;
        bytes32 mobilenumber;
        bytes32 email;
    }
    
    // -------AddressPatient------//
    
    struct AddressPatient {
        bytes32 typeofHouse;
        string patienaddress;
        bytes32 province;
        bytes32 district;
        bytes32 subDistrict;
        bytes32 zipcode;           
    }

     // -------EmergencyContact------//
    struct EmergencyContact {
        EmergencyContactPart1 emerPart1;
        EmergencyContactPart2 emerPart2;
    }
    
    struct EmergencyContactPart1 {
        bytes32 emerTitle;
        bytes32 emerFirstname;
        bytes32 emerLastname;
        bytes32 emerRelationship;
        bytes32 emerHomePhonenumber;
        bytes32 emerMobileNumber;
    }
    
    struct EmergencyContactPart2 {
        bytes32  emerTypeofHouse;
        string   emerAddress;
        bytes32  emerProvince;
        bytes32  emerDistrict;
        bytes32  emerSubDistrict;
        bytes32  emerZipcode;
    }
    
    // -------PatientParent------//
    struct PatientParent {
        bytes32 fatherFirstname;
        bytes32 fatherLastname;
        bytes32 motherFirstname;
        bytes32 motherLastname;
    }
    
    // -------PatientAllergy------//
    struct PatientAllergy {
        bytes32 allergy;
        bytes32 privilege;
    }

    // -------Check patientsEmail------//
    struct PatientEmail {
        bytes32 patientsEmail;
    }
    bytes32[] public  patientAccounts;
   
    
    mapping ( bytes32 => InfoPatient ) infoPatients;
    mapping ( bytes32 => AddressPatient ) addressPatients;
    mapping ( bytes32 => EmergencyContact ) emergencyContacts;
    mapping ( bytes32 => PatientParent ) patientParents;
    mapping ( bytes32 => PatientAllergy ) patientAllergies;
    mapping ( bytes32 => PatientEmail ) patientEmails;
    
    
    // --------DetailPatient---------//
    
    function getDetailPatient(bytes32 _citizenId) view public returns(bytes32 , bytes32 , bytes32 , bytes32 , bytes32 ,bytes32 ,bytes32) {
         return ( 
                infoPatients[_citizenId].infoPart1.hospitalnumber,
                infoPatients[_citizenId].infoPart2.firstname,
                infoPatients[_citizenId].infoPart2.lastname,
                infoPatients[_citizenId].infoPart2.gender,
                infoPatients[_citizenId].infoPart2.dob,
                infoPatients[_citizenId].infoPart3.country,
                infoPatients[_citizenId].infoPart4.mobilenumber
                );
    }
    
    // --------Check LockIn---------//
    
    function Login(bytes32 _citizenId,bytes32 _password) view public returns(bool) {
        bool statusLogin;
        
        if(keccak256(infoPatients[_citizenId].infoPart1.citizenId)==keccak256(_citizenId) ){
            if(keccak256(infoPatients[_citizenId].infoPart1.password)==keccak256(_password) ){
                    statusLogin=true;
            }
        }
        return statusLogin;
    }
    
    // --------Check ForgetpassWord---------//
    
    function ForgetPassword(bytes32 _citizenId,bytes32 _email) view public returns(bool) {
        bool statusforgetPassword;
        
        if(keccak256(infoPatients[_citizenId].infoPart1.citizenId)==keccak256(_citizenId) ){
            if(keccak256(infoPatients[_citizenId].infoPart4.email)==keccak256(_email) ){
                    statusforgetPassword=true;
            }
        }
        return statusforgetPassword;
    }
    
    // --------Check citizenId---------//
    
    function checkDuplicateCitizenId(bytes32 _citizenId) view public returns(bool) {
        bool statusCitizenId;
        
        if(keccak256(infoPatients[_citizenId].infoPart1.citizenId)==keccak256(_citizenId) ){
            statusCitizenId=true;
        }
        return statusCitizenId;
    }
    
    // --------Check citizenId---------//
    
    function checkDuplicateEmail( bytes32 _email) view public returns(bool) {
        bool statusEmail;
        
        if(keccak256(patientEmails[_email].patientsEmail)==keccak256(_email) ){
            statusEmail=true;
        }
        return statusEmail;
    }

    
    function setEmail(  bytes32  _emails )  public {
                PatientEmail storage patientEmail = patientEmails[_emails];
                patientEmail.patientsEmail= _emails;
    }
    // --------getInfoPatient---------//
   
    function setInfoPatientPart1( bytes32  _citizenId, bytes32  _registerDate, bytes32  _hospitalnumber, bytes32 _password) public {
                InfoPatient storage infoPatient = infoPatients[_citizenId];
                infoPatient.infoPart1.registerDate = _registerDate;
                infoPatient.infoPart1.hospitalnumber = _hospitalnumber;
                infoPatient.infoPart1.citizenId = _citizenId;
                infoPatient.infoPart1.password = _password;
                
                patientAccounts.push(_citizenId) -1;
               
            
    }

    function setInfoPatientPart2( bytes32  _citizenId, bytes32  _dob, bytes32  _titlename, bytes32  _firstname, bytes32  _lastname, bytes32  _gender )  public {
                InfoPatient storage infoPatient = infoPatients[_citizenId];
                infoPatient.infoPart2.dob = _dob;
                infoPatient.infoPart2.titlename = _titlename;
                infoPatient.infoPart2.firstname = _firstname;
                infoPatient.infoPart2.lastname = _lastname;
                infoPatient.infoPart2.gender = _gender;
    }
    
    function setInfoPatientPart3( bytes32  _citizenId, bytes32  _congenitaldisease, bytes32  _bloodgroup, bytes32  _religion, bytes32  _nationality, bytes32  _country )  public {
                InfoPatient storage infoPatient = infoPatients[_citizenId];
                infoPatient.infoPart3.congenitaldisease = _congenitaldisease;
                infoPatient.infoPart3.bloodgroup = _bloodgroup;
                infoPatient.infoPart3.religion = _religion;
                infoPatient.infoPart3.nationality = _nationality;
                infoPatient.infoPart3.country = _country;
    }
    
    function setInfoPatientPart4( bytes32  _citizenId, bytes32  _status, bytes32  _occupartion, bytes32  _homephonenumber, bytes32  _mobilenumber , bytes32  _email )  public {
                InfoPatient storage infoPatient = infoPatients[_citizenId];
                
                infoPatient.infoPart4.status = _status;
                infoPatient.infoPart4.occupartion = _occupartion;
                infoPatient.infoPart4.homephonenumber = _homephonenumber;
                infoPatient.infoPart4.mobilenumber = _mobilenumber;
                infoPatient.infoPart4.email = _email;

    }
   
   
    // --------getInfoPatient---------//
    function getInfoPatientPart1(bytes32 _citizenId) view public  returns (bytes32 , bytes32 , bytes32 , bytes32  ) {
        return ( 
                infoPatients[_citizenId].infoPart1.registerDate,
                infoPatients[_citizenId].infoPart1.hospitalnumber,
                infoPatients[_citizenId].infoPart1.citizenId,
                infoPatients[_citizenId].infoPart1.password
                );
    }
    function getInfoPatientPart2(bytes32 _citizenId) view public  returns (bytes32 , bytes32 , bytes32 , bytes32 , bytes32  ) {
        return ( 
                infoPatients[_citizenId].infoPart2.dob,
                infoPatients[_citizenId].infoPart2.titlename,
                infoPatients[_citizenId].infoPart2.firstname,
                infoPatients[_citizenId].infoPart2.lastname,
                infoPatients[_citizenId].infoPart2.gender
                );
    }
  
    function getInfoPatientPart3(bytes32 _citizenId) view public  returns (bytes32 , bytes32 , bytes32 , bytes32 , bytes32 ) {
        return ( 
                infoPatients[_citizenId].infoPart3.congenitaldisease,
                infoPatients[_citizenId].infoPart3.bloodgroup,
                infoPatients[_citizenId].infoPart3.religion,
                infoPatients[_citizenId].infoPart3.nationality,
                infoPatients[_citizenId].infoPart3.country
                );
    }
    function getInfoPatientPart4(bytes32 _citizenId) view public  returns (bytes32 , bytes32 , bytes32 , bytes32 , bytes32 ) {
        return ( 
                infoPatients[_citizenId].infoPart4.status,
                infoPatients[_citizenId].infoPart4.occupartion,
                infoPatients[_citizenId].infoPart4.homephonenumber,
                infoPatients[_citizenId].infoPart4.mobilenumber,
                infoPatients[_citizenId].infoPart4.email
                );
    }

      // --------setAddressPatient---------//
    function setAddressPatient( bytes32  _citizenId, bytes32  _typeofHouse, string  _patienaddress, bytes32  _province, bytes32  _district, bytes32  _subDistrict, bytes32 _zipcode )  public {
                AddressPatient storage addressPatient = addressPatients[_citizenId];
                addressPatient.typeofHouse = _typeofHouse;
                addressPatient.patienaddress = _patienaddress;
                addressPatient.province = _province;
                addressPatient.district = _district;
                addressPatient.subDistrict = _subDistrict;
                addressPatient.zipcode = _zipcode;
    }
    
    // --------getAddressPatient---------//
    function getAddressPatient(bytes32 _citizenId)view public  returns (bytes32 , string , bytes32 , bytes32, bytes32 , bytes32 ) {
        return ( 
                addressPatients[_citizenId].typeofHouse,
                addressPatients[_citizenId].patienaddress,
                addressPatients[_citizenId].province,
                addressPatients[_citizenId].district,
                addressPatients[_citizenId].subDistrict,
                addressPatients[_citizenId].zipcode
                );
    }
    
    // --------setAddressPatient---------//
    function setEmergencyContactPart1( bytes32  _citizenId, bytes32  _emerTitle, bytes32  _emerFirstname, bytes32 _emerLastname, bytes32  _emerRelationship, bytes32  _emerHomePhonenumber, bytes32  _emerMobileNumber ) public {
                EmergencyContact storage emergencyContact = emergencyContacts[_citizenId];
                emergencyContact.emerPart1.emerTitle = _emerTitle;
                emergencyContact.emerPart1.emerFirstname = _emerFirstname;
                emergencyContact.emerPart1.emerLastname = _emerLastname;
                emergencyContact.emerPart1.emerRelationship = _emerRelationship;
                emergencyContact.emerPart1.emerHomePhonenumber = _emerHomePhonenumber;
                emergencyContact.emerPart1.emerMobileNumber = _emerMobileNumber;
         
    }
    function setEmergencyContactPart2( bytes32  _citizenId, bytes32  _emerTypeofHouse, string  _emerAddress, bytes32  _emerProvince, bytes32  _emerDistrict, bytes32  _emerSubDistrict, bytes32 _emerZipcode )  public {
                EmergencyContact storage emergencyContact = emergencyContacts[_citizenId];
                emergencyContact.emerPart2.emerTypeofHouse = _emerTypeofHouse;
                emergencyContact.emerPart2.emerAddress = _emerAddress;
                emergencyContact.emerPart2.emerProvince = _emerProvince;
                emergencyContact.emerPart2.emerDistrict = _emerDistrict;
                emergencyContact.emerPart2.emerSubDistrict = _emerSubDistrict;
                emergencyContact.emerPart2.emerZipcode = _emerZipcode;
    }
    
    // --------getAddressPatient---------//
    
    function getEmergencyContactPart1(bytes32 _citizenId) view public  returns (bytes32 , bytes32 , bytes32 , bytes32, bytes32 , bytes32 ) {
        return ( 
                emergencyContacts[_citizenId].emerPart1.emerTitle,
                emergencyContacts[_citizenId].emerPart1.emerFirstname,
                emergencyContacts[_citizenId].emerPart1.emerLastname,
                emergencyContacts[_citizenId].emerPart1.emerRelationship,
                emergencyContacts[_citizenId].emerPart1.emerHomePhonenumber,
                emergencyContacts[_citizenId].emerPart1.emerMobileNumber
                );
    }
    
    function getEmergencyContactPart2(bytes32 _citizenId) view public  returns (bytes32 , string , bytes32 , bytes32, bytes32 , bytes32 ) {
        return ( 
                emergencyContacts[_citizenId].emerPart2.emerTypeofHouse,
                emergencyContacts[_citizenId].emerPart2.emerAddress,
                emergencyContacts[_citizenId].emerPart2.emerProvince,
                emergencyContacts[_citizenId].emerPart2.emerDistrict,
                emergencyContacts[_citizenId].emerPart2.emerSubDistrict,
                emergencyContacts[_citizenId].emerPart2.emerZipcode
                );
    }
   
    // --------setPatientParent---------//
   function setPatientParent( bytes32  _citizenId, bytes32  _fatherFirstname, bytes32  _fatherLastname, bytes32  _motherFirstname, bytes32  _motherLastname )  public {
                PatientParent storage patientParent = patientParents[_citizenId];
                patientParent.fatherFirstname = _fatherFirstname;
                patientParent.fatherLastname = _fatherLastname;
                patientParent.motherFirstname = _motherFirstname;
                patientParent.motherLastname = _motherLastname;
    }
    
    // --------setPatientParent---------//
    function getPatientParent(bytes32 _citizenId)view public  returns (bytes32 , bytes32 , bytes32 , bytes32 ) {
        return ( 
                patientParents[_citizenId].fatherFirstname,
                patientParents[_citizenId].fatherLastname,
                patientParents[_citizenId].motherFirstname,
                patientParents[_citizenId].motherLastname
                
                );
    }

      // --------setPatientParent---------//
      
    function setPatientAllergy( bytes32  _citizenId, bytes32  _allergy, bytes32  _privilege )  public {
                PatientAllergy storage patientAllergy = patientAllergies[_citizenId];
                patientAllergy.allergy = _allergy;
                patientAllergy.privilege = _privilege;
    }
    
    // --------getPatientParent---------//
    
   function getPatientAllergy(bytes32 _citizenId)view public  returns (bytes32 , bytes32  ) {
        return ( 
                patientAllergies[_citizenId].allergy,
                patientAllergies[_citizenId].privilege
                );
    }
   


}
