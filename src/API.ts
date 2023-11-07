/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBadReceptionInput = {
  id?: string | null,
  url?: string | null,
  _version?: number | null,
};

export type ModelBadReceptionConditionInput = {
  url?: ModelStringInput | null,
  and?: Array< ModelBadReceptionConditionInput | null > | null,
  or?: Array< ModelBadReceptionConditionInput | null > | null,
  not?: ModelBadReceptionConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type BadReception = {
  __typename: "BadReception",
  id: string,
  url?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateBadReceptionInput = {
  id: string,
  url?: string | null,
  _version?: number | null,
};

export type DeleteBadReceptionInput = {
  id: string,
  _version?: number | null,
};

export type CreateProjectInput = {
  id?: string | null,
  title: string,
  image: string,
  description: string,
  tagline?: string | null,
  projectLogo: string,
  details?: Array< string > | null,
  slides?: Array< string | null > | null,
  showcaseType: string,
  vimeoId?: string | null,
  completionData?: string | null,
  status: ItemStatus,
  _version?: number | null,
};

export enum ItemStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type ModelProjectConditionInput = {
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  projectLogo?: ModelStringInput | null,
  details?: ModelStringInput | null,
  slides?: ModelStringInput | null,
  showcaseType?: ModelStringInput | null,
  vimeoId?: ModelStringInput | null,
  completionData?: ModelStringInput | null,
  status?: ModelItemStatusInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelItemStatusInput = {
  eq?: ItemStatus | null,
  ne?: ItemStatus | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  title: string,
  image: string,
  description: string,
  tagline?: string | null,
  projectLogo: string,
  details?: Array< string > | null,
  slides?: Array< string | null > | null,
  showcaseType: string,
  vimeoId?: string | null,
  completionData?: string | null,
  status: ItemStatus,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProjectInput = {
  id: string,
  title?: string | null,
  image?: string | null,
  description?: string | null,
  tagline?: string | null,
  projectLogo?: string | null,
  details?: Array< string > | null,
  slides?: Array< string | null > | null,
  showcaseType?: string | null,
  vimeoId?: string | null,
  completionData?: string | null,
  status?: ItemStatus | null,
  _version?: number | null,
};

export type DeleteProjectInput = {
  id: string,
  _version?: number | null,
};

export type CreateBlogInput = {
  id?: string | null,
  title?: string | null,
  text?: string | null,
  image?: string | null,
  heroAlignment?: HeroAlignment | null,
  heroSize?: HeroSize | null,
  isTwoColumn?: boolean | null,
  dropCap?: boolean | null,
  publishDate?: string | null,
  slides?: Array< string | null > | null,
  videoId?: string | null,
  status: ItemStatus,
  imported_mysql_id?: string | null,
  _version?: number | null,
};

export enum HeroAlignment {
  TOP = "TOP",
  BOTTOM = "BOTTOM",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}


export enum HeroSize {
  THUMB = "THUMB",
  FULL = "FULL",
  ACTUA = "ACTUA",
  HALF = "HALF",
}


export type ModelBlogConditionInput = {
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  image?: ModelStringInput | null,
  heroAlignment?: ModelHeroAlignmentInput | null,
  heroSize?: ModelHeroSizeInput | null,
  isTwoColumn?: ModelBooleanInput | null,
  dropCap?: ModelBooleanInput | null,
  publishDate?: ModelStringInput | null,
  slides?: ModelStringInput | null,
  videoId?: ModelStringInput | null,
  status?: ModelItemStatusInput | null,
  imported_mysql_id?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelHeroAlignmentInput = {
  eq?: HeroAlignment | null,
  ne?: HeroAlignment | null,
};

export type ModelHeroSizeInput = {
  eq?: HeroSize | null,
  ne?: HeroSize | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  title?: string | null,
  text?: string | null,
  image?: string | null,
  heroAlignment?: HeroAlignment | null,
  heroSize?: HeroSize | null,
  isTwoColumn?: boolean | null,
  dropCap?: boolean | null,
  publishDate?: string | null,
  slides?: Array< string | null > | null,
  videoId?: string | null,
  status: ItemStatus,
  imported_mysql_id?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateBlogInput = {
  id: string,
  title?: string | null,
  text?: string | null,
  image?: string | null,
  heroAlignment?: HeroAlignment | null,
  heroSize?: HeroSize | null,
  isTwoColumn?: boolean | null,
  dropCap?: boolean | null,
  publishDate?: string | null,
  slides?: Array< string | null > | null,
  videoId?: string | null,
  status?: ItemStatus | null,
  imported_mysql_id?: string | null,
  _version?: number | null,
};

export type DeleteBlogInput = {
  id: string,
  _version?: number | null,
};

export type CreateAgencyInput = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
  bioID: string,
  _version?: number | null,
};

export type ModelAgencyConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bioID?: ModelIDInput | null,
  and?: Array< ModelAgencyConditionInput | null > | null,
  or?: Array< ModelAgencyConditionInput | null > | null,
  not?: ModelAgencyConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Agency = {
  __typename: "Agency",
  id: string,
  name?: string | null,
  image?: string | null,
  bioID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAgencyInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  bioID?: string | null,
  _version?: number | null,
};

export type DeleteAgencyInput = {
  id: string,
  _version?: number | null,
};

export type CreateSchoolInput = {
  id?: string | null,
  name?: string | null,
  degree?: string | null,
  image?: string | null,
  bioID: string,
  _version?: number | null,
};

export type ModelSchoolConditionInput = {
  name?: ModelStringInput | null,
  degree?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bioID?: ModelIDInput | null,
  and?: Array< ModelSchoolConditionInput | null > | null,
  or?: Array< ModelSchoolConditionInput | null > | null,
  not?: ModelSchoolConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type School = {
  __typename: "School",
  id: string,
  name?: string | null,
  degree?: string | null,
  image?: string | null,
  bioID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSchoolInput = {
  id: string,
  name?: string | null,
  degree?: string | null,
  image?: string | null,
  bioID?: string | null,
  _version?: number | null,
};

export type DeleteSchoolInput = {
  id: string,
  _version?: number | null,
};

export type CreateMiscCertificationInput = {
  id?: string | null,
  name?: string | null,
  link?: string | null,
  image?: string | null,
  bioID: string,
  _version?: number | null,
};

export type ModelMiscCertificationConditionInput = {
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bioID?: ModelIDInput | null,
  and?: Array< ModelMiscCertificationConditionInput | null > | null,
  or?: Array< ModelMiscCertificationConditionInput | null > | null,
  not?: ModelMiscCertificationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type MiscCertification = {
  __typename: "MiscCertification",
  id: string,
  name?: string | null,
  link?: string | null,
  image?: string | null,
  bioID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMiscCertificationInput = {
  id: string,
  name?: string | null,
  link?: string | null,
  image?: string | null,
  bioID?: string | null,
  _version?: number | null,
};

export type DeleteMiscCertificationInput = {
  id: string,
  _version?: number | null,
};

export type CreateBioInput = {
  id?: string | null,
  image?: string | null,
  intro: string,
  introClosing: string,
  signatureImage?: string | null,
  mainUser?: boolean | null,
  _version?: number | null,
};

export type ModelBioConditionInput = {
  image?: ModelStringInput | null,
  intro?: ModelStringInput | null,
  introClosing?: ModelStringInput | null,
  signatureImage?: ModelStringInput | null,
  mainUser?: ModelBooleanInput | null,
  and?: Array< ModelBioConditionInput | null > | null,
  or?: Array< ModelBioConditionInput | null > | null,
  not?: ModelBioConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Bio = {
  __typename: "Bio",
  id: string,
  image?: string | null,
  intro: string,
  introClosing: string,
  AWSCertifications?: ModelAWSCertificationConnection | null,
  MiscCertifications?: ModelMiscCertificationConnection | null,
  Agencies?: ModelAgencyConnection | null,
  signatureImage?: string | null,
  mainUser?: boolean | null,
  Schools?: ModelSchoolConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelAWSCertificationConnection = {
  __typename: "ModelAWSCertificationConnection",
  items:  Array<AWSCertification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type AWSCertification = {
  __typename: "AWSCertification",
  id: string,
  name: string,
  link: string,
  image: string,
  bioID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMiscCertificationConnection = {
  __typename: "ModelMiscCertificationConnection",
  items:  Array<MiscCertification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAgencyConnection = {
  __typename: "ModelAgencyConnection",
  items:  Array<Agency | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSchoolConnection = {
  __typename: "ModelSchoolConnection",
  items:  Array<School | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateBioInput = {
  id: string,
  image?: string | null,
  intro?: string | null,
  introClosing?: string | null,
  signatureImage?: string | null,
  mainUser?: boolean | null,
  _version?: number | null,
};

export type DeleteBioInput = {
  id: string,
  _version?: number | null,
};

export type CreateAWSCertificationInput = {
  id?: string | null,
  name: string,
  link: string,
  image: string,
  bioID: string,
  _version?: number | null,
};

export type ModelAWSCertificationConditionInput = {
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bioID?: ModelIDInput | null,
  and?: Array< ModelAWSCertificationConditionInput | null > | null,
  or?: Array< ModelAWSCertificationConditionInput | null > | null,
  not?: ModelAWSCertificationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateAWSCertificationInput = {
  id: string,
  name?: string | null,
  link?: string | null,
  image?: string | null,
  bioID?: string | null,
  _version?: number | null,
};

export type DeleteAWSCertificationInput = {
  id: string,
  _version?: number | null,
};

export type ModelBadReceptionFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelBadReceptionFilterInput | null > | null,
  or?: Array< ModelBadReceptionFilterInput | null > | null,
  not?: ModelBadReceptionFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelBadReceptionConnection = {
  __typename: "ModelBadReceptionConnection",
  items:  Array<BadReception | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  projectLogo?: ModelStringInput | null,
  details?: ModelStringInput | null,
  slides?: ModelStringInput | null,
  showcaseType?: ModelStringInput | null,
  vimeoId?: ModelStringInput | null,
  completionData?: ModelStringInput | null,
  status?: ModelItemStatusInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  image?: ModelStringInput | null,
  heroAlignment?: ModelHeroAlignmentInput | null,
  heroSize?: ModelHeroSizeInput | null,
  isTwoColumn?: ModelBooleanInput | null,
  dropCap?: ModelBooleanInput | null,
  publishDate?: ModelStringInput | null,
  slides?: ModelStringInput | null,
  videoId?: ModelStringInput | null,
  status?: ModelItemStatusInput | null,
  imported_mysql_id?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAgencyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bioID?: ModelIDInput | null,
  and?: Array< ModelAgencyFilterInput | null > | null,
  or?: Array< ModelAgencyFilterInput | null > | null,
  not?: ModelAgencyFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSchoolFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  degree?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bioID?: ModelIDInput | null,
  and?: Array< ModelSchoolFilterInput | null > | null,
  or?: Array< ModelSchoolFilterInput | null > | null,
  not?: ModelSchoolFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMiscCertificationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bioID?: ModelIDInput | null,
  and?: Array< ModelMiscCertificationFilterInput | null > | null,
  or?: Array< ModelMiscCertificationFilterInput | null > | null,
  not?: ModelMiscCertificationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelBioFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  intro?: ModelStringInput | null,
  introClosing?: ModelStringInput | null,
  signatureImage?: ModelStringInput | null,
  mainUser?: ModelBooleanInput | null,
  and?: Array< ModelBioFilterInput | null > | null,
  or?: Array< ModelBioFilterInput | null > | null,
  not?: ModelBioFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelBioConnection = {
  __typename: "ModelBioConnection",
  items:  Array<Bio | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAWSCertificationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bioID?: ModelIDInput | null,
  and?: Array< ModelAWSCertificationFilterInput | null > | null,
  or?: Array< ModelAWSCertificationFilterInput | null > | null,
  not?: ModelAWSCertificationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBadReceptionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBadReceptionFilterInput | null > | null,
  or?: Array< ModelSubscriptionBadReceptionFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  tagline?: ModelSubscriptionStringInput | null,
  projectLogo?: ModelSubscriptionStringInput | null,
  details?: ModelSubscriptionStringInput | null,
  slides?: ModelSubscriptionStringInput | null,
  showcaseType?: ModelSubscriptionStringInput | null,
  vimeoId?: ModelSubscriptionStringInput | null,
  completionData?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  heroAlignment?: ModelSubscriptionStringInput | null,
  heroSize?: ModelSubscriptionStringInput | null,
  isTwoColumn?: ModelSubscriptionBooleanInput | null,
  dropCap?: ModelSubscriptionBooleanInput | null,
  publishDate?: ModelSubscriptionStringInput | null,
  slides?: ModelSubscriptionStringInput | null,
  videoId?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  imported_mysql_id?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionAgencyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  bioID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAgencyFilterInput | null > | null,
  or?: Array< ModelSubscriptionAgencyFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionSchoolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  degree?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  bioID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSchoolFilterInput | null > | null,
  or?: Array< ModelSubscriptionSchoolFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMiscCertificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  bioID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMiscCertificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionMiscCertificationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBioFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  intro?: ModelSubscriptionStringInput | null,
  introClosing?: ModelSubscriptionStringInput | null,
  signatureImage?: ModelSubscriptionStringInput | null,
  mainUser?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionBioFilterInput | null > | null,
  or?: Array< ModelSubscriptionBioFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionAWSCertificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  bioID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAWSCertificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionAWSCertificationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateBadReceptionMutationVariables = {
  input: CreateBadReceptionInput,
  condition?: ModelBadReceptionConditionInput | null,
};

export type CreateBadReceptionMutation = {
  createBadReception?:  {
    __typename: "BadReception",
    id: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBadReceptionMutationVariables = {
  input: UpdateBadReceptionInput,
  condition?: ModelBadReceptionConditionInput | null,
};

export type UpdateBadReceptionMutation = {
  updateBadReception?:  {
    __typename: "BadReception",
    id: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBadReceptionMutationVariables = {
  input: DeleteBadReceptionInput,
  condition?: ModelBadReceptionConditionInput | null,
};

export type DeleteBadReceptionMutation = {
  deleteBadReception?:  {
    __typename: "BadReception",
    id: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    image: string,
    description: string,
    tagline?: string | null,
    projectLogo: string,
    details?: Array< string > | null,
    slides?: Array< string | null > | null,
    showcaseType: string,
    vimeoId?: string | null,
    completionData?: string | null,
    status: ItemStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    image: string,
    description: string,
    tagline?: string | null,
    projectLogo: string,
    details?: Array< string > | null,
    slides?: Array< string | null > | null,
    showcaseType: string,
    vimeoId?: string | null,
    completionData?: string | null,
    status: ItemStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    image: string,
    description: string,
    tagline?: string | null,
    projectLogo: string,
    details?: Array< string > | null,
    slides?: Array< string | null > | null,
    showcaseType: string,
    vimeoId?: string | null,
    completionData?: string | null,
    status: ItemStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    text?: string | null,
    image?: string | null,
    heroAlignment?: HeroAlignment | null,
    heroSize?: HeroSize | null,
    isTwoColumn?: boolean | null,
    dropCap?: boolean | null,
    publishDate?: string | null,
    slides?: Array< string | null > | null,
    videoId?: string | null,
    status: ItemStatus,
    imported_mysql_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    text?: string | null,
    image?: string | null,
    heroAlignment?: HeroAlignment | null,
    heroSize?: HeroSize | null,
    isTwoColumn?: boolean | null,
    dropCap?: boolean | null,
    publishDate?: string | null,
    slides?: Array< string | null > | null,
    videoId?: string | null,
    status: ItemStatus,
    imported_mysql_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    text?: string | null,
    image?: string | null,
    heroAlignment?: HeroAlignment | null,
    heroSize?: HeroSize | null,
    isTwoColumn?: boolean | null,
    dropCap?: boolean | null,
    publishDate?: string | null,
    slides?: Array< string | null > | null,
    videoId?: string | null,
    status: ItemStatus,
    imported_mysql_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAgencyMutationVariables = {
  input: CreateAgencyInput,
  condition?: ModelAgencyConditionInput | null,
};

export type CreateAgencyMutation = {
  createAgency?:  {
    __typename: "Agency",
    id: string,
    name?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAgencyMutationVariables = {
  input: UpdateAgencyInput,
  condition?: ModelAgencyConditionInput | null,
};

export type UpdateAgencyMutation = {
  updateAgency?:  {
    __typename: "Agency",
    id: string,
    name?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAgencyMutationVariables = {
  input: DeleteAgencyInput,
  condition?: ModelAgencyConditionInput | null,
};

export type DeleteAgencyMutation = {
  deleteAgency?:  {
    __typename: "Agency",
    id: string,
    name?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSchoolMutationVariables = {
  input: CreateSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type CreateSchoolMutation = {
  createSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    degree?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSchoolMutationVariables = {
  input: UpdateSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type UpdateSchoolMutation = {
  updateSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    degree?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSchoolMutationVariables = {
  input: DeleteSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type DeleteSchoolMutation = {
  deleteSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    degree?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMiscCertificationMutationVariables = {
  input: CreateMiscCertificationInput,
  condition?: ModelMiscCertificationConditionInput | null,
};

export type CreateMiscCertificationMutation = {
  createMiscCertification?:  {
    __typename: "MiscCertification",
    id: string,
    name?: string | null,
    link?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMiscCertificationMutationVariables = {
  input: UpdateMiscCertificationInput,
  condition?: ModelMiscCertificationConditionInput | null,
};

export type UpdateMiscCertificationMutation = {
  updateMiscCertification?:  {
    __typename: "MiscCertification",
    id: string,
    name?: string | null,
    link?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMiscCertificationMutationVariables = {
  input: DeleteMiscCertificationInput,
  condition?: ModelMiscCertificationConditionInput | null,
};

export type DeleteMiscCertificationMutation = {
  deleteMiscCertification?:  {
    __typename: "MiscCertification",
    id: string,
    name?: string | null,
    link?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBioMutationVariables = {
  input: CreateBioInput,
  condition?: ModelBioConditionInput | null,
};

export type CreateBioMutation = {
  createBio?:  {
    __typename: "Bio",
    id: string,
    image?: string | null,
    intro: string,
    introClosing: string,
    AWSCertifications?:  {
      __typename: "ModelAWSCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MiscCertifications?:  {
      __typename: "ModelMiscCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Agencies?:  {
      __typename: "ModelAgencyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    signatureImage?: string | null,
    mainUser?: boolean | null,
    Schools?:  {
      __typename: "ModelSchoolConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBioMutationVariables = {
  input: UpdateBioInput,
  condition?: ModelBioConditionInput | null,
};

export type UpdateBioMutation = {
  updateBio?:  {
    __typename: "Bio",
    id: string,
    image?: string | null,
    intro: string,
    introClosing: string,
    AWSCertifications?:  {
      __typename: "ModelAWSCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MiscCertifications?:  {
      __typename: "ModelMiscCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Agencies?:  {
      __typename: "ModelAgencyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    signatureImage?: string | null,
    mainUser?: boolean | null,
    Schools?:  {
      __typename: "ModelSchoolConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBioMutationVariables = {
  input: DeleteBioInput,
  condition?: ModelBioConditionInput | null,
};

export type DeleteBioMutation = {
  deleteBio?:  {
    __typename: "Bio",
    id: string,
    image?: string | null,
    intro: string,
    introClosing: string,
    AWSCertifications?:  {
      __typename: "ModelAWSCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MiscCertifications?:  {
      __typename: "ModelMiscCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Agencies?:  {
      __typename: "ModelAgencyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    signatureImage?: string | null,
    mainUser?: boolean | null,
    Schools?:  {
      __typename: "ModelSchoolConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAWSCertificationMutationVariables = {
  input: CreateAWSCertificationInput,
  condition?: ModelAWSCertificationConditionInput | null,
};

export type CreateAWSCertificationMutation = {
  createAWSCertification?:  {
    __typename: "AWSCertification",
    id: string,
    name: string,
    link: string,
    image: string,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAWSCertificationMutationVariables = {
  input: UpdateAWSCertificationInput,
  condition?: ModelAWSCertificationConditionInput | null,
};

export type UpdateAWSCertificationMutation = {
  updateAWSCertification?:  {
    __typename: "AWSCertification",
    id: string,
    name: string,
    link: string,
    image: string,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAWSCertificationMutationVariables = {
  input: DeleteAWSCertificationInput,
  condition?: ModelAWSCertificationConditionInput | null,
};

export type DeleteAWSCertificationMutation = {
  deleteAWSCertification?:  {
    __typename: "AWSCertification",
    id: string,
    name: string,
    link: string,
    image: string,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetBadReceptionQueryVariables = {
  id: string,
};

export type GetBadReceptionQuery = {
  getBadReception?:  {
    __typename: "BadReception",
    id: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBadReceptionsQueryVariables = {
  filter?: ModelBadReceptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBadReceptionsQuery = {
  listBadReceptions?:  {
    __typename: "ModelBadReceptionConnection",
    items:  Array< {
      __typename: "BadReception",
      id: string,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBadReceptionsQueryVariables = {
  filter?: ModelBadReceptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBadReceptionsQuery = {
  syncBadReceptions?:  {
    __typename: "ModelBadReceptionConnection",
    items:  Array< {
      __typename: "BadReception",
      id: string,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    image: string,
    description: string,
    tagline?: string | null,
    projectLogo: string,
    details?: Array< string > | null,
    slides?: Array< string | null > | null,
    showcaseType: string,
    vimeoId?: string | null,
    completionData?: string | null,
    status: ItemStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      image: string,
      description: string,
      tagline?: string | null,
      projectLogo: string,
      details?: Array< string > | null,
      slides?: Array< string | null > | null,
      showcaseType: string,
      vimeoId?: string | null,
      completionData?: string | null,
      status: ItemStatus,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProjectsQuery = {
  syncProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      image: string,
      description: string,
      tagline?: string | null,
      projectLogo: string,
      details?: Array< string > | null,
      slides?: Array< string | null > | null,
      showcaseType: string,
      vimeoId?: string | null,
      completionData?: string | null,
      status: ItemStatus,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    text?: string | null,
    image?: string | null,
    heroAlignment?: HeroAlignment | null,
    heroSize?: HeroSize | null,
    isTwoColumn?: boolean | null,
    dropCap?: boolean | null,
    publishDate?: string | null,
    slides?: Array< string | null > | null,
    videoId?: string | null,
    status: ItemStatus,
    imported_mysql_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      title?: string | null,
      text?: string | null,
      image?: string | null,
      heroAlignment?: HeroAlignment | null,
      heroSize?: HeroSize | null,
      isTwoColumn?: boolean | null,
      dropCap?: boolean | null,
      publishDate?: string | null,
      slides?: Array< string | null > | null,
      videoId?: string | null,
      status: ItemStatus,
      imported_mysql_id?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBlogsQuery = {
  syncBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      title?: string | null,
      text?: string | null,
      image?: string | null,
      heroAlignment?: HeroAlignment | null,
      heroSize?: HeroSize | null,
      isTwoColumn?: boolean | null,
      dropCap?: boolean | null,
      publishDate?: string | null,
      slides?: Array< string | null > | null,
      videoId?: string | null,
      status: ItemStatus,
      imported_mysql_id?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAgencyQueryVariables = {
  id: string,
};

export type GetAgencyQuery = {
  getAgency?:  {
    __typename: "Agency",
    id: string,
    name?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAgenciesQueryVariables = {
  filter?: ModelAgencyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAgenciesQuery = {
  listAgencies?:  {
    __typename: "ModelAgencyConnection",
    items:  Array< {
      __typename: "Agency",
      id: string,
      name?: string | null,
      image?: string | null,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAgenciesQueryVariables = {
  filter?: ModelAgencyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAgenciesQuery = {
  syncAgencies?:  {
    __typename: "ModelAgencyConnection",
    items:  Array< {
      __typename: "Agency",
      id: string,
      name?: string | null,
      image?: string | null,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AgenciesByBioIDQueryVariables = {
  bioID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgencyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AgenciesByBioIDQuery = {
  agenciesByBioID?:  {
    __typename: "ModelAgencyConnection",
    items:  Array< {
      __typename: "Agency",
      id: string,
      name?: string | null,
      image?: string | null,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSchoolQueryVariables = {
  id: string,
};

export type GetSchoolQuery = {
  getSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    degree?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSchoolsQueryVariables = {
  filter?: ModelSchoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchoolsQuery = {
  listSchools?:  {
    __typename: "ModelSchoolConnection",
    items:  Array< {
      __typename: "School",
      id: string,
      name?: string | null,
      degree?: string | null,
      image?: string | null,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSchoolsQueryVariables = {
  filter?: ModelSchoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSchoolsQuery = {
  syncSchools?:  {
    __typename: "ModelSchoolConnection",
    items:  Array< {
      __typename: "School",
      id: string,
      name?: string | null,
      degree?: string | null,
      image?: string | null,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SchoolsByBioIDQueryVariables = {
  bioID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSchoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SchoolsByBioIDQuery = {
  schoolsByBioID?:  {
    __typename: "ModelSchoolConnection",
    items:  Array< {
      __typename: "School",
      id: string,
      name?: string | null,
      degree?: string | null,
      image?: string | null,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMiscCertificationQueryVariables = {
  id: string,
};

export type GetMiscCertificationQuery = {
  getMiscCertification?:  {
    __typename: "MiscCertification",
    id: string,
    name?: string | null,
    link?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMiscCertificationsQueryVariables = {
  filter?: ModelMiscCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMiscCertificationsQuery = {
  listMiscCertifications?:  {
    __typename: "ModelMiscCertificationConnection",
    items:  Array< {
      __typename: "MiscCertification",
      id: string,
      name?: string | null,
      link?: string | null,
      image?: string | null,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMiscCertificationsQueryVariables = {
  filter?: ModelMiscCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMiscCertificationsQuery = {
  syncMiscCertifications?:  {
    __typename: "ModelMiscCertificationConnection",
    items:  Array< {
      __typename: "MiscCertification",
      id: string,
      name?: string | null,
      link?: string | null,
      image?: string | null,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MiscCertificationsByBioIDQueryVariables = {
  bioID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMiscCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MiscCertificationsByBioIDQuery = {
  miscCertificationsByBioID?:  {
    __typename: "ModelMiscCertificationConnection",
    items:  Array< {
      __typename: "MiscCertification",
      id: string,
      name?: string | null,
      link?: string | null,
      image?: string | null,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBioQueryVariables = {
  id: string,
};

export type GetBioQuery = {
  getBio?:  {
    __typename: "Bio",
    id: string,
    image?: string | null,
    intro: string,
    introClosing: string,
    AWSCertifications?:  {
      __typename: "ModelAWSCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MiscCertifications?:  {
      __typename: "ModelMiscCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Agencies?:  {
      __typename: "ModelAgencyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    signatureImage?: string | null,
    mainUser?: boolean | null,
    Schools?:  {
      __typename: "ModelSchoolConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBiosQueryVariables = {
  filter?: ModelBioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBiosQuery = {
  listBios?:  {
    __typename: "ModelBioConnection",
    items:  Array< {
      __typename: "Bio",
      id: string,
      image?: string | null,
      intro: string,
      introClosing: string,
      signatureImage?: string | null,
      mainUser?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBiosQueryVariables = {
  filter?: ModelBioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBiosQuery = {
  syncBios?:  {
    __typename: "ModelBioConnection",
    items:  Array< {
      __typename: "Bio",
      id: string,
      image?: string | null,
      intro: string,
      introClosing: string,
      signatureImage?: string | null,
      mainUser?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAWSCertificationQueryVariables = {
  id: string,
};

export type GetAWSCertificationQuery = {
  getAWSCertification?:  {
    __typename: "AWSCertification",
    id: string,
    name: string,
    link: string,
    image: string,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAWSCertificationsQueryVariables = {
  filter?: ModelAWSCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAWSCertificationsQuery = {
  listAWSCertifications?:  {
    __typename: "ModelAWSCertificationConnection",
    items:  Array< {
      __typename: "AWSCertification",
      id: string,
      name: string,
      link: string,
      image: string,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAWSCertificationsQueryVariables = {
  filter?: ModelAWSCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAWSCertificationsQuery = {
  syncAWSCertifications?:  {
    __typename: "ModelAWSCertificationConnection",
    items:  Array< {
      __typename: "AWSCertification",
      id: string,
      name: string,
      link: string,
      image: string,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AWSCertificationsByBioIDQueryVariables = {
  bioID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAWSCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AWSCertificationsByBioIDQuery = {
  aWSCertificationsByBioID?:  {
    __typename: "ModelAWSCertificationConnection",
    items:  Array< {
      __typename: "AWSCertification",
      id: string,
      name: string,
      link: string,
      image: string,
      bioID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateBadReceptionSubscriptionVariables = {
  filter?: ModelSubscriptionBadReceptionFilterInput | null,
};

export type OnCreateBadReceptionSubscription = {
  onCreateBadReception?:  {
    __typename: "BadReception",
    id: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBadReceptionSubscriptionVariables = {
  filter?: ModelSubscriptionBadReceptionFilterInput | null,
};

export type OnUpdateBadReceptionSubscription = {
  onUpdateBadReception?:  {
    __typename: "BadReception",
    id: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBadReceptionSubscriptionVariables = {
  filter?: ModelSubscriptionBadReceptionFilterInput | null,
};

export type OnDeleteBadReceptionSubscription = {
  onDeleteBadReception?:  {
    __typename: "BadReception",
    id: string,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    image: string,
    description: string,
    tagline?: string | null,
    projectLogo: string,
    details?: Array< string > | null,
    slides?: Array< string | null > | null,
    showcaseType: string,
    vimeoId?: string | null,
    completionData?: string | null,
    status: ItemStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    image: string,
    description: string,
    tagline?: string | null,
    projectLogo: string,
    details?: Array< string > | null,
    slides?: Array< string | null > | null,
    showcaseType: string,
    vimeoId?: string | null,
    completionData?: string | null,
    status: ItemStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    image: string,
    description: string,
    tagline?: string | null,
    projectLogo: string,
    details?: Array< string > | null,
    slides?: Array< string | null > | null,
    showcaseType: string,
    vimeoId?: string | null,
    completionData?: string | null,
    status: ItemStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    text?: string | null,
    image?: string | null,
    heroAlignment?: HeroAlignment | null,
    heroSize?: HeroSize | null,
    isTwoColumn?: boolean | null,
    dropCap?: boolean | null,
    publishDate?: string | null,
    slides?: Array< string | null > | null,
    videoId?: string | null,
    status: ItemStatus,
    imported_mysql_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    text?: string | null,
    image?: string | null,
    heroAlignment?: HeroAlignment | null,
    heroSize?: HeroSize | null,
    isTwoColumn?: boolean | null,
    dropCap?: boolean | null,
    publishDate?: string | null,
    slides?: Array< string | null > | null,
    videoId?: string | null,
    status: ItemStatus,
    imported_mysql_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    text?: string | null,
    image?: string | null,
    heroAlignment?: HeroAlignment | null,
    heroSize?: HeroSize | null,
    isTwoColumn?: boolean | null,
    dropCap?: boolean | null,
    publishDate?: string | null,
    slides?: Array< string | null > | null,
    videoId?: string | null,
    status: ItemStatus,
    imported_mysql_id?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAgencySubscriptionVariables = {
  filter?: ModelSubscriptionAgencyFilterInput | null,
};

export type OnCreateAgencySubscription = {
  onCreateAgency?:  {
    __typename: "Agency",
    id: string,
    name?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAgencySubscriptionVariables = {
  filter?: ModelSubscriptionAgencyFilterInput | null,
};

export type OnUpdateAgencySubscription = {
  onUpdateAgency?:  {
    __typename: "Agency",
    id: string,
    name?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAgencySubscriptionVariables = {
  filter?: ModelSubscriptionAgencyFilterInput | null,
};

export type OnDeleteAgencySubscription = {
  onDeleteAgency?:  {
    __typename: "Agency",
    id: string,
    name?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
};

export type OnCreateSchoolSubscription = {
  onCreateSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    degree?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
};

export type OnUpdateSchoolSubscription = {
  onUpdateSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    degree?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
};

export type OnDeleteSchoolSubscription = {
  onDeleteSchool?:  {
    __typename: "School",
    id: string,
    name?: string | null,
    degree?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMiscCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionMiscCertificationFilterInput | null,
};

export type OnCreateMiscCertificationSubscription = {
  onCreateMiscCertification?:  {
    __typename: "MiscCertification",
    id: string,
    name?: string | null,
    link?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMiscCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionMiscCertificationFilterInput | null,
};

export type OnUpdateMiscCertificationSubscription = {
  onUpdateMiscCertification?:  {
    __typename: "MiscCertification",
    id: string,
    name?: string | null,
    link?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMiscCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionMiscCertificationFilterInput | null,
};

export type OnDeleteMiscCertificationSubscription = {
  onDeleteMiscCertification?:  {
    __typename: "MiscCertification",
    id: string,
    name?: string | null,
    link?: string | null,
    image?: string | null,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBioSubscriptionVariables = {
  filter?: ModelSubscriptionBioFilterInput | null,
};

export type OnCreateBioSubscription = {
  onCreateBio?:  {
    __typename: "Bio",
    id: string,
    image?: string | null,
    intro: string,
    introClosing: string,
    AWSCertifications?:  {
      __typename: "ModelAWSCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MiscCertifications?:  {
      __typename: "ModelMiscCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Agencies?:  {
      __typename: "ModelAgencyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    signatureImage?: string | null,
    mainUser?: boolean | null,
    Schools?:  {
      __typename: "ModelSchoolConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBioSubscriptionVariables = {
  filter?: ModelSubscriptionBioFilterInput | null,
};

export type OnUpdateBioSubscription = {
  onUpdateBio?:  {
    __typename: "Bio",
    id: string,
    image?: string | null,
    intro: string,
    introClosing: string,
    AWSCertifications?:  {
      __typename: "ModelAWSCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MiscCertifications?:  {
      __typename: "ModelMiscCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Agencies?:  {
      __typename: "ModelAgencyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    signatureImage?: string | null,
    mainUser?: boolean | null,
    Schools?:  {
      __typename: "ModelSchoolConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBioSubscriptionVariables = {
  filter?: ModelSubscriptionBioFilterInput | null,
};

export type OnDeleteBioSubscription = {
  onDeleteBio?:  {
    __typename: "Bio",
    id: string,
    image?: string | null,
    intro: string,
    introClosing: string,
    AWSCertifications?:  {
      __typename: "ModelAWSCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MiscCertifications?:  {
      __typename: "ModelMiscCertificationConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Agencies?:  {
      __typename: "ModelAgencyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    signatureImage?: string | null,
    mainUser?: boolean | null,
    Schools?:  {
      __typename: "ModelSchoolConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAWSCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionAWSCertificationFilterInput | null,
};

export type OnCreateAWSCertificationSubscription = {
  onCreateAWSCertification?:  {
    __typename: "AWSCertification",
    id: string,
    name: string,
    link: string,
    image: string,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAWSCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionAWSCertificationFilterInput | null,
};

export type OnUpdateAWSCertificationSubscription = {
  onUpdateAWSCertification?:  {
    __typename: "AWSCertification",
    id: string,
    name: string,
    link: string,
    image: string,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAWSCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionAWSCertificationFilterInput | null,
};

export type OnDeleteAWSCertificationSubscription = {
  onDeleteAWSCertification?:  {
    __typename: "AWSCertification",
    id: string,
    name: string,
    link: string,
    image: string,
    bioID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
