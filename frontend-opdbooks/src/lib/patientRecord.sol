pragma solidity ^0.4.18;

contract PatientProfile {
    struct InfoPatient {
        ProfilepatientInfoPart1 infoPart1;
        ProfilepatientInfoPart2 infoPart2;
        ProfilepatientInfoPart3 infoPart3;
        ProfilepatientInfoPart4 infoPart4;
    }

    struct ProfilepatientInfoPart1 {
        string registerDate;
        string hospitalnumber;
        string photo;
        string idcard;
    }

    struct ProfilepatientInfoPart2 {
        string dob;
        string titlename;
        string firstname;
        string lastname;
        string gender;
    }
    
    struct ProfilepatientInfoPart3 {
        string congenitaldisease;
        string bloodgroup;
        string religion;
        string nationality;
        string country;
    }
    struct ProfilepatientInfoPart4 {
        string statuspatient; 
        string occupartion;
        string homephonenumber;
        string mobilenumber;
    }
    
    // -------AddressPatient------//
    struct AddressPatient {
        string typeofHouse;
        string patienaddress;
        string province;
        string district;
        string subDistrict;
        string zipcode;
    }

     // -------EmergencyContact------//
    struct EmergencyContact {
        EmergencyContactPart1 emerPart1;
        EmergencyContactPart2 emerPart2;
    }
    
    struct EmergencyContactPart1 {
        string emerTitle;
        string emerFirstname;
        string emerLastname;
        string emerRelationship;
        string emerHomePhonenumber;
        string emerMobileNumber;
    }
    
    struct EmergencyContactPart2 {
        string  emerTypeofHouse;
        string  emerAddress;
        string  emerProvince;
        string  emerDistrict;
        string  emerSubDistrict;
        string  emerZipcode;
    }
    
    // -------PatientParent------//
    struct PatientParent {
        string fatherFirstname;
        string fatherLastname;
        string motherFirstname;
        string motherLastname;
    }
    
    // -------PatientAllergy------//
    struct PatientAllergy {
        string allergy;
        string privilege;
    }

    address[] public  patientAccounts;
    mapping ( string => InfoPatient ) infoPatients;
    mapping ( string => AddressPatient ) addressPatients;
    mapping ( string => EmergencyContact ) emergencyContacts;
    mapping ( string => PatientParent ) patientParents;
    mapping ( string => PatientAllergy ) patientAllergys;

    // --------getInfoPatient---------//
   
    function setInfoPatientPart1( string  _idcard, string  _registerDate, string  _hospitalnumber, string _photo) public {
            InfoPatient storage infoPatient = infoPatients[_idcard];
            infoPatient.infoPart1.registerDate = _registerDate;
            infoPatient.infoPart1.hospitalnumber = _hospitalnumber;
            infoPatient.infoPart1.photo = _photo;
            infoPatient.infoPart1.idcard = _idcard;
         
    }

    function setInfoPatientPart2( string  _idcard, string  _dob, string  _titlename, string  _firstname, string  _lastname, string  _gender )  public {
            InfoPatient storage infoPatient = infoPatients[_idcard];
            infoPatient.infoPart2.dob = _dob;
            infoPatient.infoPart2.titlename = _titlename;
            infoPatient.infoPart2.firstname = _firstname;
            infoPatient.infoPart2.lastname = _lastname;
            infoPatient.infoPart2.gender = _gender;
    }
    
    function setInfoPatientPart3( string  _idcard, string  _congenitaldisease, string  _bloodgroup, string  _religion, string  _nationality, string  _country )  public {
            InfoPatient storage infoPatient = infoPatients[_idcard];
            infoPatient.infoPart3.congenitaldisease = _congenitaldisease;
            infoPatient.infoPart3.bloodgroup = _bloodgroup;
            infoPatient.infoPart3.religion = _religion;
            infoPatient.infoPart3.nationality = _nationality;
            infoPatient.infoPart3.country = _country;
    }
    
    function setInfoPatientPart4( string  _idcard, string  _statuspatient, string  _occupartion, string  _homephonenumber, string  _mobilenumber )  public {
            InfoPatient storage infoPatient = infoPatients[_idcard];
            infoPatient.infoPart4.statuspatient = _statuspatient;
            infoPatient.infoPart4.occupartion = _occupartion;
            infoPatient.infoPart4.homephonenumber = _homephonenumber;
            infoPatient.infoPart4.mobilenumber = _mobilenumber;
    }
   
    // --------getInfoPatient---------//
    function getInfoPatientPart1(string _idcard) view public  returns (string , string , string , string  ) {
        return ( 
                infoPatients[_idcard].infoPart1.registerDate,
                infoPatients[_idcard].infoPart1.hospitalnumber,
                infoPatients[_idcard].infoPart1.photo,
                infoPatients[_idcard].infoPart1.idcard
                );
    }
    function getInfoPatientPart2(string _idcard) view public  returns (string , string , string , string , string  ) {
        return ( 
                infoPatients[_idcard].infoPart2.dob,
                infoPatients[_idcard].infoPart2.titlename,
                infoPatients[_idcard].infoPart2.firstname,
                infoPatients[_idcard].infoPart2.lastname,
                infoPatients[_idcard].infoPart2.gender
                );
    }
  
    function getInfoPatientPart3(string _idcard) view public  returns (string , string , string , string , string ) {
        return ( 
                infoPatients[_idcard].infoPart3.congenitaldisease,
                infoPatients[_idcard].infoPart3.bloodgroup,
                infoPatients[_idcard].infoPart3.religion,
                infoPatients[_idcard].infoPart3.nationality,
                infoPatients[_idcard].infoPart3.country
                );
    }
    function getInfoPatientPart4(string _idcard) view public  returns (string , string , string , string ) {
        return ( 
                infoPatients[_idcard].infoPart4.statuspatient,
                infoPatients[_idcard].infoPart4.occupartion,
                infoPatients[_idcard].infoPart4.homephonenumber,
                infoPatients[_idcard].infoPart4.mobilenumber
                );
    }

      // --------setAddressPatient---------//
    function setAddressPatient( string  _idcard, string  _typeofHouse, string  _patienaddress, string  _province, string  _district, string  _subDistrict, string _zipcode )  public {
            AddressPatient storage addressPatient = addressPatients[_idcard];
            addressPatient.typeofHouse = _typeofHouse;
            addressPatient.patienaddress = _patienaddress;
            addressPatient.province = _province;
            addressPatient.district = _district;
            addressPatient.subDistrict = _subDistrict;
            addressPatient.zipcode = _zipcode;
    }
    
    // --------getAddressPatient---------//
    function getAddressPatient(string _idcard)view public  returns (string , string , string , string, string , string ) {
        return ( 
                addressPatients[_idcard].typeofHouse,
                addressPatients[_idcard].patienaddress,
                addressPatients[_idcard].province,
                addressPatients[_idcard].district,
                addressPatients[_idcard].subDistrict,
                addressPatients[_idcard].zipcode
                );
    }
    
    // --------setAddressPatient---------//
    function setEmergencyContactPart1( string  _idcard, string  _emerTitle, string  _emerFirstname, string _emerLastname, string  _emerRelationship, string  _emerHomePhonenumber, string  _emerMobileNumber ) public {
            EmergencyContact storage emergencyContact = emergencyContacts[_idcard];
            emergencyContact.emerPart1.emerTitle = _emerTitle;
            emergencyContact.emerPart1.emerFirstname = _emerFirstname;
            emergencyContact.emerPart1.emerLastname = _emerLastname;
            emergencyContact.emerPart1.emerRelationship = _emerRelationship;
            emergencyContact.emerPart1.emerHomePhonenumber = _emerHomePhonenumber;
            emergencyContact.emerPart1.emerMobileNumber = _emerMobileNumber;
         
    }
    function setEmergencyContactPart2( string  _idcard, string  _emerTypeofHouse, string  _emerAddress, string  _emerProvince, string  _emerDistrict, string  _emerSubDistrict, string _emerZipcode )  public {
            EmergencyContact storage emergencyContact = emergencyContacts[_idcard];
            emergencyContact.emerPart2.emerTypeofHouse = _emerTypeofHouse;
            emergencyContact.emerPart2.emerAddress = _emerAddress;
            emergencyContact.emerPart2.emerProvince = _emerProvince;
            emergencyContact.emerPart2.emerDistrict = _emerDistrict;
            emergencyContact.emerPart2.emerSubDistrict = _emerSubDistrict;
            emergencyContact.emerPart2.emerZipcode = _emerZipcode;
    }
    
    // --------getAddressPatient---------//
    
    function getEmergencyContactPart1(string _idcard) view public  returns (string , string , string , string, string , string ) {
        return ( 
                emergencyContacts[_idcard].emerPart1.emerTitle,
                emergencyContacts[_idcard].emerPart1.emerFirstname,
                emergencyContacts[_idcard].emerPart1.emerLastname,
                emergencyContacts[_idcard].emerPart1.emerRelationship,
                emergencyContacts[_idcard].emerPart1.emerHomePhonenumber,
                emergencyContacts[_idcard].emerPart1.emerMobileNumber
                );
    }
    
    function getEmergencyContactPart2(string _idcard) view public  returns (string , string , string , string, string , string ) {
        return ( 
                emergencyContacts[_idcard].emerPart2.emerTypeofHouse,
                emergencyContacts[_idcard].emerPart2.emerAddress,
                emergencyContacts[_idcard].emerPart2.emerProvince,
                emergencyContacts[_idcard].emerPart2.emerDistrict,
                emergencyContacts[_idcard].emerPart2.emerSubDistrict,
                emergencyContacts[_idcard].emerPart2.emerZipcode
                );
    }
   
    // --------setPatientParent---------//
   function setPatientParent( string  _idcard, string  _fatherFirstname, string  _fatherLastname, string  _motherFirstname, string  _motherLastname )  public {
            PatientParent storage patientParent = patientParents[_idcard];
            patientParent.fatherFirstname = _fatherFirstname;
            patientParent.fatherLastname = _fatherLastname;
            patientParent.motherFirstname = _motherFirstname;
            patientParent.motherLastname = _motherLastname;
    }
    
    // --------setPatientParent---------//
    function getPatientParent(string _idcard)view public  returns (string , string , string , string ) {
        return ( 
                patientParents[_idcard].fatherFirstname,
                patientParents[_idcard].fatherLastname,
                patientParents[_idcard].motherFirstname,
                patientParents[_idcard].motherLastname
                
                );
    }

      // --------setPatientParent---------//
    function setPatientAllergy( string  _idcard, string  _allergy, string  _privilege )  public {
            PatientAllergy storage patientAllergy = patientAllergys[_idcard];
            patientAllergy.allergy = _allergy;
            patientAllergy.privilege = _privilege;
    }
    
    // --------getPatientParent---------//
   function getPatientAllergy(string _idcard)view public  returns (string , string  ) {
        return ( 
                patientAllergys[_idcard].allergy,
                patientAllergys[_idcard].privilege
                );
    }
   
//   function setInstructor(  address _address,
//                             bytes32 _fName,
//                             bytes15 _dob,
//                             uint8 _height,
//                             bytes15 _weight,
//                             bytes15 _bloodgroup,
//                             bytes15 _sex
                            
//                             )  public {
//       Profilepatient storage profilepatient = profilepatients[_address];
//       profilepatient.fName = _fName;
//       profilepatient.dob = _dob;
//       profilepatient.height= _height;
//       profilepatient.weight= _weight;
//       profilepatient.bloodgroup = _bloodgroup;
//       profilepatient.sex = _sex;
//   }
//   "0xba6ad5296de1de5967b7001bab2eee8a6e42206b","Surakiti Sopontanapat","21","175","78","A","Male"
//   "Surakiti","Sopon",175,65,"A","Male"
//   function getInstructor(address _address) public constant returns (bytes32 , bytes15, uint8, bytes15, bytes15, bytes15) {
//       return ( 
//                 profilepatients[_address].fName,
//                 profilepatients[_address].dob ,
//                 profilepatients[_address].height,
//                 profilepatients[_address].weight,
//                 profilepatients[_address].bloodgroup,
//                 profilepatients[_address].sex
//                 );
//   }
    
}