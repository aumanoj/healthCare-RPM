export default {
    counter:0,
    addDemographic:null,
    addPatientProgram:null,
    program:null,
    addDevice:null,
    devices:null,
    inventoryList:[],
    devicesColumns:null,
    patientList:[],
    column:null,
    columns:null,
    parameterFields:null,
    addClinicalHistory:null,
    clinicalHistoryList:null,
    clinicalHistoryListColumns:null,
    addClinicalMedicat:null,
    clinicalMedicatList:null,
    clinicalMedicatListColumns:null,
    addInsurance:null,
    updateDemographic:null,
    updateInsurance:null,
    patientInsurance:null,
    addDocument:null,
    documents:null,
    documentColumns:null,
    uploadFile:null,
    status:false,
    errorMsg:null,
    referralErrorMsg:null,
    physicianErrorMsg:null,
    emergencyErrorMsg:null,
    errorMessage:null,
    patientDetails:null,
    patientTimeline:[],
    patientDocuments:null,
    deleteDocument:null,
    latestDocument:null,
    latestDevice:null,
    latestVital:null,
    patientConditions:null,
    patientReferralSource:null,
    referralList:null,
    patientPrimaryPhysician:null,
    programList:[],
    patientMeta:null,
    patientSearchWithBitrix:null,
    patientSearchWithBitrixCols:null,
    fetchFromBitrix:null,
    bloodPressure:null,
    bloodGlucose:null,
    bloodOxygen:null,
    getBitrixFieldsName:null,
    fetchFromBitrixStatus:null,

    bloodPressureGraph:null,
    bloodOxygenGraph:null,
    bloodGlucoseGraph:null,

    // bloodPressureColumns:null,
    // bloodOxygenColumns:null,
    // bloodGlucoseColumns:null,
    changeStatus:null,
    addCriticalNote:null,
    closeModal:null,
    patientCriticalNotes:null,
    criticalNotesList:null,
    latestCriticalNote:null,
    familyMembersList:null,
    familyMemberDetails:null,
    physiciansList:null,
    physicianDetails:null,
    emergencyContactsList:null,
    emergencyContactDetails:null,
    timeLineType:null,

    addCondition:null,
    addPatientReferals:null,
    addPatientPhysician:null,
    bitrixFormCheck:false,
    
    isEditPatient:false,
    
    programDetails:null,
    medicalHistoryDetails:null,
    medicationDetails:null,
    documentDetails:null,
    isPicuteLoading:false,
    responsiblePerson:null,
    emergencyContact:null,
    patientVitalList:null,
    referralDetail:null,
    startOn:true,
    criticalNoteDetails:null,
    editPatientReferral:[],
    programsPatient:[],

    grids:null,
    patientFlags:null,
    conditionsList:null,
    latestCondition:null,
    conditionDetails:null,
    isConditionEdit:false,
    healthConditions:null,
    editConditionDetails:null,
    tabvalue:[],
    patientTimelineMeta:null,
    fetchFromBitrixInsurance:null,
    visiblePatientDetailsModal:false,
    patientUdid:null,
    patientReferenceId:null,
    filteredVitals:false,
    bloodPressureTimeline:null,
    bloodOxygenTimeline:null,
    bloodGlucoseTimeline:null,


    bloodPressureColumns : [
        {
          title: "Time & Date Vitals Taken",
          dataIndex: "takeTime",
          key: "takeTime",
          slots: {
            customRender: "takeTime",
          },
          width: '25%',
        },
        {
          title: "Systolic",
          dataIndex: "blood_pressure_systolic",
          key: "blood_pressure_systolic",
          width: '25%',
          slots: {
            customRender: "blood_pressure_systolic",
          },
        },
        {
          title: "Diastolic",
          dataIndex: "blood_pressure_diastolic",
          key: "blood_pressure_diastolic",
          width: '25%',
          slots: {
            customRender: "blood_pressure_diastolic",
          },
        },
        {
          title: "BPM",
          dataIndex: "blood_pressure_bpm",
          key: "blood_pressure_bpm",
          width: '25%',
          slots: {
            customRender: "blood_pressure_bpm",
          },
        },
      ],
      
      bloodOxygenColumns : [
        {
          title: "Time & Date Vitals Taken",
          dataIndex: "takeTime",
          key: "takeTime",
          slots: {
            customRender: "takeTime",
          },
        },
        {
          title: "SPO2",
          dataIndex: "oximeter_spo2",
          key: "oximeter_spo2",
          slots: {
            customRender: "oximeter_spo2",
          },
        },
        {
          title: "BPM",
          dataIndex: "oximeter_bpm",
          key: "oximeter_bpm",
          slots: {
            customRender: "oximeter_bpm",
          },
        },
      ],
      
      bloodGlucoseColumns : [
        {
          title: "Time & Date Vitals Taken",
          dataIndex: "takeTime",
          key: "takeTime",
          slots: {
            customRender: "takeTime",
          },
        },
        {
          title: "Random Blood Sugar",
          dataIndex: "glucose_random_blood_sugar",
          key: "glucose_random_blood_sugar",
          slots: {
            customRender: "glucose_random_blood_sugar",
          },
        },
        {
          title: "Fasting Blood Sugar",
          dataIndex: "glucose_fasting_blood_sugar",
          key: "glucose_fasting_blood_sugar",
          slots: {
            customRender: "glucose_fasting_blood_sugar",
          },
        },
        {
          title: "Fasting",
          dataIndex: "glucose_fasting",
          key: "glucose_fasting",
          slots: {
            customRender: "glucose_fasting",
          },
        },
        {
          title: "Pre Meal",
          dataIndex: "glucose_pre_meal",
          key: "glucose_pre_meal",
          slots: {
            customRender: "glucose_pre_meal",
          },
        },
        {
          title: "Post Meal",
          dataIndex: "glucose_post_meal",
          key: "glucose_post_meal",
          slots: {
            customRender: "glucose_post_meal",
          },
        },
        {
          title: "Before Sleep",
          dataIndex: "glucose_before_sleep",
          key: "glucose_before_sleep",
          slots: {
            customRender: "glucose_before_sleep",
          },
        },
        {
          title: "General",
          dataIndex: "glucose_general",
          key: "glucose_general",
          slots: {
            customRender: "glucose_general",
          },
        },
      ],
      nonComplianceDetails: null,
      addPatientGroup: null,
      getPatientGroup: null,
      latestPatientGroup: null,
      

}