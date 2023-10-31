export interface ProfessionalBackground {
  education: Education
  employment: Employment
  selfEmployment: SelfEmployment
  unemployment: Unemployment
}

export interface Education {
  educations: EducationItem[]
  background: string
}

export interface EducationItem {
  institutionName?: string
  institutionLocation?: string
  degree?: string
  startYear?: string
  endYear?: string
  additionalInformation?: string
  reasoning?: string
}

export interface Employment {
  employments: EmploymentItem[]
  background: string
}

export interface EmploymentItem {
  position?: string
  placeOfWork?: string
  nameOfTheCompany?: string
  startDate?: string
  endDate?: string
  reasoning?: string
}

export interface SelfEmployment {
  selfEmployments: SelfEmploymentItem[]
  background: string
}

export interface SelfEmploymentItem {
  companyName?: string
  registeredAddress?: string
  countries?: string[]
  geographicalRegions?: string[]
  ownership?: string
  businessPartners?: string[]
  industry?: string
  sizeOfCompany?: Company
  businessBackground?: string
  startDate?: string
  endDate?: string
  additionalInformation?: string
  reasoning?: string
}

export interface Company {
  employees?: string
  turnover?: string
  profit?: string
}

export interface Unemployment {
  unemploymentPeriods: UnemploymentItem[]
  background: string
}

export interface UnemploymentItem {
  details?: string
  startDate?: string
  endDate?: string
  reasoning?: string
}
