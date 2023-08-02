export const deviceIds = {
  bloodPressureDeviceId: 99,
  heartRateDeviceId: 999,
  bloodOxygenDeviceId: 100,
  glucoseDeviceId: 101,
}

export const vitalsTypes = {
  fasting: 5, 
  random: 6, 
  preMeal: 11, 
  postMeal: 12, 
  beforeSleep: 13, 
}

export const graphColors = {
  graphColor1: '#F95932',
  graphColor2: '#3083F0',
  graphColor3: '#57CC99',
  graphColor4: '#9B5DE5',
  graphColor5: '#F15BB5',
}

export const vitalFlagColors = {
  wnl: '#7FF000',
  critical: '#CC0000',
  moderate: '#F35B04',
  unknown: '#5E6971',
  clearVital: '#FFFFFF',
  text: '#232A2F',
}

export const patientFilterText = {
  allPatients: "All",
  watchlist: "in the watchlist",
  watchlistCount: "50",
  todaysReadings: "who took reading(s) today",
  todaysReadingsCount: "82",
  unreviewedReadings: "with unreviewed reading(s)",
  unreviewedReadingsCount: "47",
  riskOfCompliance: "in the risk of Compliance",
  riskOfComplianceCount: "23",
  outOfCompliance: "who are out of Compliance",
  outOfComplianceCount: "77",
  shouldBeDischarged: "who should be discharged",
  shouldBeDischargedCount: "45",
}

// Data for Testing Purpose, to be deleted when done
export const patientsVitalsList = [{
  "id": "e83cad75-6d2c-431e-9196-f9253f683d71",
  "deviceType": "Blood Pressure",
  "reviewed": true,
  "reviewedStatus": "All Ok",
  "isDelete": 0,
  "takeTime": "1680009980",
  "state": "--",
  "lastReadingDate": "2023-03-28T12:20:55.000000Z",
  "flagColor": "#CC0000",
  "flagName": "Critical",
  "flagId": 7,
  "vitals" :  {
    "systolic": 120,
    "diastolic": 98,
    "bpm": 98
  }
},
{
  "id": "r644ad75-6d2c-431e-9196-f9253f683d72",
  "deviceType": "Blood Pressure",
  "reviewed": false,
  "reviewedStatus": "--",
  "isDelete": 0,
  "takeTime": "1679142330",
  "state": "--",
  "lastReadingDate": "2023-03-27T09:44:24.000000Z",
  "flagColor": "#7FF000",
  "flagName": "WNL",
  "flagId": 6,
  "vitals" :  {
    "systolic": 135,
    "diastolic": 87,
    "bpm": 79
  }
},{
  "id": "e83cad75-6d2c-431e-9196-f9253f683d71",
  "deviceType": "Blood Pressure",
  "reviewed": true,
  "reviewedStatus": "All Ok",
  "isDelete": 0,
  "takeTime": "1680009980",
  "state": "--",
  "lastReadingDate": "2023-03-28T12:20:55.000000Z",
  "flagColor": "#CC0000",
  "flagName": "Critical",
  "flagId": 7,
  "vitals" :  {
    "systolic": 120,
    "diastolic": 98,
    "bpm": 98
  }
},
{
  "id": "r644ad75-6d2c-431e-9196-f9253f683d72",
  "deviceType": "Blood Pressure",
  "reviewed": false,
  "reviewedStatus": "--",
  "isDelete": 0,
  "takeTime": "1679142330",
  "state": "--",
  "lastReadingDate": "2023-03-27T09:44:24.000000Z",
  "flagColor": "#7FF000",
  "flagName": "WNL",
  "flagId": 6,
  "vitals" :  {
    "systolic": 135,
    "diastolic": 87,
    "bpm": 79
  }
}]

export const bpVitalsGraph = {
  categories: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  series: [
    {
      name: 'Systolic',
      data: [80, 75 ,90, 77, 99, 101, 78, 88, 77, 95]
    },
    {
      name: 'Diastolic',
      data: [70, 85 ,70, 97, 69, 81, 98, 78, 97, 100]
    },
  ]
}

export const heartRateVitalsGraph = {
  categories: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  series: [
  {
    name: 'BPM',
    data: [90, 75 ,90, 77, 79, 91, 98, 88, 77, 80]
  }]
}

export const oxygenVitalsGraph = {
  categories: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  series: [
  {
    name: 'SPO2',
    data: [93, 95 ,98, 97, 99, 100, 101, 93, 97, 99]
  }]
}

export const glucoseVitalsGraph = {
  categories: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  series: [
  {
    name: 'Glucose',
    Glucose: [90, 100 ,90, 111, 109, 91, 98, 120, 116, 95]
  }]
}

export const bhVitalsGraph = {
  categories: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  series: [
  {
    name: 'Glucose',
    data: []
  }]
}
