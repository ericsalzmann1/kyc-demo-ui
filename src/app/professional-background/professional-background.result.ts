export interface ProfessionalBackground {
  education: Education
  employment: Employment
}

export interface Education {
  educations: EducationItem[]
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
}

export interface EmploymentItem {
  position?: string
  placeOfWork?: string
  nameOfTheCompany?: string
  startDate?: string
  endDate?: string
  reasoning?: string
}
