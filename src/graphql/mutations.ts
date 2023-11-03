/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBadReception = /* GraphQL */ `mutation CreateBadReception(
  $input: CreateBadReceptionInput!
  $condition: ModelBadReceptionConditionInput
) {
  createBadReception(input: $input, condition: $condition) {
    id
    url
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBadReceptionMutationVariables,
  APITypes.CreateBadReceptionMutation
>;
export const updateBadReception = /* GraphQL */ `mutation UpdateBadReception(
  $input: UpdateBadReceptionInput!
  $condition: ModelBadReceptionConditionInput
) {
  updateBadReception(input: $input, condition: $condition) {
    id
    url
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBadReceptionMutationVariables,
  APITypes.UpdateBadReceptionMutation
>;
export const deleteBadReception = /* GraphQL */ `mutation DeleteBadReception(
  $input: DeleteBadReceptionInput!
  $condition: ModelBadReceptionConditionInput
) {
  deleteBadReception(input: $input, condition: $condition) {
    id
    url
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBadReceptionMutationVariables,
  APITypes.DeleteBadReceptionMutation
>;
export const createProject = /* GraphQL */ `mutation CreateProject(
  $input: CreateProjectInput!
  $condition: ModelProjectConditionInput
) {
  createProject(input: $input, condition: $condition) {
    id
    title
    image
    description
    tagline
    projectLogo
    details
    slides
    showcaseType
    vimeoId
    completionData
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProjectMutationVariables,
  APITypes.CreateProjectMutation
>;
export const updateProject = /* GraphQL */ `mutation UpdateProject(
  $input: UpdateProjectInput!
  $condition: ModelProjectConditionInput
) {
  updateProject(input: $input, condition: $condition) {
    id
    title
    image
    description
    tagline
    projectLogo
    details
    slides
    showcaseType
    vimeoId
    completionData
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProjectMutationVariables,
  APITypes.UpdateProjectMutation
>;
export const deleteProject = /* GraphQL */ `mutation DeleteProject(
  $input: DeleteProjectInput!
  $condition: ModelProjectConditionInput
) {
  deleteProject(input: $input, condition: $condition) {
    id
    title
    image
    description
    tagline
    projectLogo
    details
    slides
    showcaseType
    vimeoId
    completionData
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProjectMutationVariables,
  APITypes.DeleteProjectMutation
>;
export const createBlog = /* GraphQL */ `mutation CreateBlog(
  $input: CreateBlogInput!
  $condition: ModelBlogConditionInput
) {
  createBlog(input: $input, condition: $condition) {
    id
    title
    text
    image
    heroAlignment
    heroSize
    isTwoColumn
    dropCap
    publishDate
    slides
    videoId
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBlogMutationVariables,
  APITypes.CreateBlogMutation
>;
export const updateBlog = /* GraphQL */ `mutation UpdateBlog(
  $input: UpdateBlogInput!
  $condition: ModelBlogConditionInput
) {
  updateBlog(input: $input, condition: $condition) {
    id
    title
    text
    image
    heroAlignment
    heroSize
    isTwoColumn
    dropCap
    publishDate
    slides
    videoId
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBlogMutationVariables,
  APITypes.UpdateBlogMutation
>;
export const deleteBlog = /* GraphQL */ `mutation DeleteBlog(
  $input: DeleteBlogInput!
  $condition: ModelBlogConditionInput
) {
  deleteBlog(input: $input, condition: $condition) {
    id
    title
    text
    image
    heroAlignment
    heroSize
    isTwoColumn
    dropCap
    publishDate
    slides
    videoId
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBlogMutationVariables,
  APITypes.DeleteBlogMutation
>;
export const createAgency = /* GraphQL */ `mutation CreateAgency(
  $input: CreateAgencyInput!
  $condition: ModelAgencyConditionInput
) {
  createAgency(input: $input, condition: $condition) {
    id
    name
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAgencyMutationVariables,
  APITypes.CreateAgencyMutation
>;
export const updateAgency = /* GraphQL */ `mutation UpdateAgency(
  $input: UpdateAgencyInput!
  $condition: ModelAgencyConditionInput
) {
  updateAgency(input: $input, condition: $condition) {
    id
    name
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAgencyMutationVariables,
  APITypes.UpdateAgencyMutation
>;
export const deleteAgency = /* GraphQL */ `mutation DeleteAgency(
  $input: DeleteAgencyInput!
  $condition: ModelAgencyConditionInput
) {
  deleteAgency(input: $input, condition: $condition) {
    id
    name
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAgencyMutationVariables,
  APITypes.DeleteAgencyMutation
>;
export const createSchool = /* GraphQL */ `mutation CreateSchool(
  $input: CreateSchoolInput!
  $condition: ModelSchoolConditionInput
) {
  createSchool(input: $input, condition: $condition) {
    id
    name
    degree
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSchoolMutationVariables,
  APITypes.CreateSchoolMutation
>;
export const updateSchool = /* GraphQL */ `mutation UpdateSchool(
  $input: UpdateSchoolInput!
  $condition: ModelSchoolConditionInput
) {
  updateSchool(input: $input, condition: $condition) {
    id
    name
    degree
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSchoolMutationVariables,
  APITypes.UpdateSchoolMutation
>;
export const deleteSchool = /* GraphQL */ `mutation DeleteSchool(
  $input: DeleteSchoolInput!
  $condition: ModelSchoolConditionInput
) {
  deleteSchool(input: $input, condition: $condition) {
    id
    name
    degree
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSchoolMutationVariables,
  APITypes.DeleteSchoolMutation
>;
export const createMiscCertification = /* GraphQL */ `mutation CreateMiscCertification(
  $input: CreateMiscCertificationInput!
  $condition: ModelMiscCertificationConditionInput
) {
  createMiscCertification(input: $input, condition: $condition) {
    id
    name
    link
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMiscCertificationMutationVariables,
  APITypes.CreateMiscCertificationMutation
>;
export const updateMiscCertification = /* GraphQL */ `mutation UpdateMiscCertification(
  $input: UpdateMiscCertificationInput!
  $condition: ModelMiscCertificationConditionInput
) {
  updateMiscCertification(input: $input, condition: $condition) {
    id
    name
    link
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMiscCertificationMutationVariables,
  APITypes.UpdateMiscCertificationMutation
>;
export const deleteMiscCertification = /* GraphQL */ `mutation DeleteMiscCertification(
  $input: DeleteMiscCertificationInput!
  $condition: ModelMiscCertificationConditionInput
) {
  deleteMiscCertification(input: $input, condition: $condition) {
    id
    name
    link
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMiscCertificationMutationVariables,
  APITypes.DeleteMiscCertificationMutation
>;
export const createBio = /* GraphQL */ `mutation CreateBio(
  $input: CreateBioInput!
  $condition: ModelBioConditionInput
) {
  createBio(input: $input, condition: $condition) {
    id
    image
    intro
    introClosing
    AWSCertifications {
      nextToken
      startedAt
      __typename
    }
    MiscCertifications {
      nextToken
      startedAt
      __typename
    }
    Agencies {
      nextToken
      startedAt
      __typename
    }
    signatureImage
    mainUser
    Schools {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBioMutationVariables,
  APITypes.CreateBioMutation
>;
export const updateBio = /* GraphQL */ `mutation UpdateBio(
  $input: UpdateBioInput!
  $condition: ModelBioConditionInput
) {
  updateBio(input: $input, condition: $condition) {
    id
    image
    intro
    introClosing
    AWSCertifications {
      nextToken
      startedAt
      __typename
    }
    MiscCertifications {
      nextToken
      startedAt
      __typename
    }
    Agencies {
      nextToken
      startedAt
      __typename
    }
    signatureImage
    mainUser
    Schools {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBioMutationVariables,
  APITypes.UpdateBioMutation
>;
export const deleteBio = /* GraphQL */ `mutation DeleteBio(
  $input: DeleteBioInput!
  $condition: ModelBioConditionInput
) {
  deleteBio(input: $input, condition: $condition) {
    id
    image
    intro
    introClosing
    AWSCertifications {
      nextToken
      startedAt
      __typename
    }
    MiscCertifications {
      nextToken
      startedAt
      __typename
    }
    Agencies {
      nextToken
      startedAt
      __typename
    }
    signatureImage
    mainUser
    Schools {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBioMutationVariables,
  APITypes.DeleteBioMutation
>;
export const createAWSCertification = /* GraphQL */ `mutation CreateAWSCertification(
  $input: CreateAWSCertificationInput!
  $condition: ModelAWSCertificationConditionInput
) {
  createAWSCertification(input: $input, condition: $condition) {
    id
    name
    link
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAWSCertificationMutationVariables,
  APITypes.CreateAWSCertificationMutation
>;
export const updateAWSCertification = /* GraphQL */ `mutation UpdateAWSCertification(
  $input: UpdateAWSCertificationInput!
  $condition: ModelAWSCertificationConditionInput
) {
  updateAWSCertification(input: $input, condition: $condition) {
    id
    name
    link
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAWSCertificationMutationVariables,
  APITypes.UpdateAWSCertificationMutation
>;
export const deleteAWSCertification = /* GraphQL */ `mutation DeleteAWSCertification(
  $input: DeleteAWSCertificationInput!
  $condition: ModelAWSCertificationConditionInput
) {
  deleteAWSCertification(input: $input, condition: $condition) {
    id
    name
    link
    image
    bioID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAWSCertificationMutationVariables,
  APITypes.DeleteAWSCertificationMutation
>;
