export type EducationData = {
    universityName: string;
    city: string;
    degree: string;
    subject: string;
    from: string;
    to: string;
  }
 export type ExperienceData = {
    position: string;
    company: string;
    city: string;
    from: string;
    to: string;
  }
 export type PersonalInfo = {
    firstName: string;
    lastName: string;
    title: string;
    photo: string;
    address: string;
    phoneNumber: string;
    email: string;
    description: string;
  }
  export type typeCV = {
    personalInformation: PersonalInfo,
    experience: ExperienceData[],
    educationData: EducationData[]
  }