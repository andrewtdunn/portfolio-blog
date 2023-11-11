/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onCreateComment(filter: $filter, owner: $owner) {
    id
    user
    comment
    Blog {
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
      imported_mysql_id
      featured
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    commentBlogId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onUpdateComment(filter: $filter, owner: $owner) {
    id
    user
    comment
    Blog {
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
      imported_mysql_id
      featured
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    commentBlogId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onDeleteComment(filter: $filter, owner: $owner) {
    id
    user
    comment
    Blog {
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
      imported_mysql_id
      featured
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    commentBlogId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateBadReception = /* GraphQL */ `subscription OnCreateBadReception(
  $filter: ModelSubscriptionBadReceptionFilterInput
) {
  onCreateBadReception(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBadReceptionSubscriptionVariables,
  APITypes.OnCreateBadReceptionSubscription
>;
export const onUpdateBadReception = /* GraphQL */ `subscription OnUpdateBadReception(
  $filter: ModelSubscriptionBadReceptionFilterInput
) {
  onUpdateBadReception(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBadReceptionSubscriptionVariables,
  APITypes.OnUpdateBadReceptionSubscription
>;
export const onDeleteBadReception = /* GraphQL */ `subscription OnDeleteBadReception(
  $filter: ModelSubscriptionBadReceptionFilterInput
) {
  onDeleteBadReception(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBadReceptionSubscriptionVariables,
  APITypes.OnDeleteBadReceptionSubscription
>;
export const onCreateProject = /* GraphQL */ `subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
  onCreateProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProjectSubscriptionVariables,
  APITypes.OnCreateProjectSubscription
>;
export const onUpdateProject = /* GraphQL */ `subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
  onUpdateProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProjectSubscriptionVariables,
  APITypes.OnUpdateProjectSubscription
>;
export const onDeleteProject = /* GraphQL */ `subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
  onDeleteProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProjectSubscriptionVariables,
  APITypes.OnDeleteProjectSubscription
>;
export const onCreateBlog = /* GraphQL */ `subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onCreateBlog(filter: $filter) {
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
    imported_mysql_id
    featured
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBlogSubscriptionVariables,
  APITypes.OnCreateBlogSubscription
>;
export const onUpdateBlog = /* GraphQL */ `subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onUpdateBlog(filter: $filter) {
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
    imported_mysql_id
    featured
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBlogSubscriptionVariables,
  APITypes.OnUpdateBlogSubscription
>;
export const onDeleteBlog = /* GraphQL */ `subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
  onDeleteBlog(filter: $filter) {
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
    imported_mysql_id
    featured
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBlogSubscriptionVariables,
  APITypes.OnDeleteBlogSubscription
>;
export const onCreateAgency = /* GraphQL */ `subscription OnCreateAgency($filter: ModelSubscriptionAgencyFilterInput) {
  onCreateAgency(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAgencySubscriptionVariables,
  APITypes.OnCreateAgencySubscription
>;
export const onUpdateAgency = /* GraphQL */ `subscription OnUpdateAgency($filter: ModelSubscriptionAgencyFilterInput) {
  onUpdateAgency(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAgencySubscriptionVariables,
  APITypes.OnUpdateAgencySubscription
>;
export const onDeleteAgency = /* GraphQL */ `subscription OnDeleteAgency($filter: ModelSubscriptionAgencyFilterInput) {
  onDeleteAgency(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAgencySubscriptionVariables,
  APITypes.OnDeleteAgencySubscription
>;
export const onCreateSchool = /* GraphQL */ `subscription OnCreateSchool($filter: ModelSubscriptionSchoolFilterInput) {
  onCreateSchool(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSchoolSubscriptionVariables,
  APITypes.OnCreateSchoolSubscription
>;
export const onUpdateSchool = /* GraphQL */ `subscription OnUpdateSchool($filter: ModelSubscriptionSchoolFilterInput) {
  onUpdateSchool(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSchoolSubscriptionVariables,
  APITypes.OnUpdateSchoolSubscription
>;
export const onDeleteSchool = /* GraphQL */ `subscription OnDeleteSchool($filter: ModelSubscriptionSchoolFilterInput) {
  onDeleteSchool(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSchoolSubscriptionVariables,
  APITypes.OnDeleteSchoolSubscription
>;
export const onCreateMiscCertification = /* GraphQL */ `subscription OnCreateMiscCertification(
  $filter: ModelSubscriptionMiscCertificationFilterInput
) {
  onCreateMiscCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMiscCertificationSubscriptionVariables,
  APITypes.OnCreateMiscCertificationSubscription
>;
export const onUpdateMiscCertification = /* GraphQL */ `subscription OnUpdateMiscCertification(
  $filter: ModelSubscriptionMiscCertificationFilterInput
) {
  onUpdateMiscCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMiscCertificationSubscriptionVariables,
  APITypes.OnUpdateMiscCertificationSubscription
>;
export const onDeleteMiscCertification = /* GraphQL */ `subscription OnDeleteMiscCertification(
  $filter: ModelSubscriptionMiscCertificationFilterInput
) {
  onDeleteMiscCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMiscCertificationSubscriptionVariables,
  APITypes.OnDeleteMiscCertificationSubscription
>;
export const onCreateBio = /* GraphQL */ `subscription OnCreateBio($filter: ModelSubscriptionBioFilterInput) {
  onCreateBio(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBioSubscriptionVariables,
  APITypes.OnCreateBioSubscription
>;
export const onUpdateBio = /* GraphQL */ `subscription OnUpdateBio($filter: ModelSubscriptionBioFilterInput) {
  onUpdateBio(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBioSubscriptionVariables,
  APITypes.OnUpdateBioSubscription
>;
export const onDeleteBio = /* GraphQL */ `subscription OnDeleteBio($filter: ModelSubscriptionBioFilterInput) {
  onDeleteBio(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBioSubscriptionVariables,
  APITypes.OnDeleteBioSubscription
>;
export const onCreateAWSCertification = /* GraphQL */ `subscription OnCreateAWSCertification(
  $filter: ModelSubscriptionAWSCertificationFilterInput
) {
  onCreateAWSCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAWSCertificationSubscriptionVariables,
  APITypes.OnCreateAWSCertificationSubscription
>;
export const onUpdateAWSCertification = /* GraphQL */ `subscription OnUpdateAWSCertification(
  $filter: ModelSubscriptionAWSCertificationFilterInput
) {
  onUpdateAWSCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAWSCertificationSubscriptionVariables,
  APITypes.OnUpdateAWSCertificationSubscription
>;
export const onDeleteAWSCertification = /* GraphQL */ `subscription OnDeleteAWSCertification(
  $filter: ModelSubscriptionAWSCertificationFilterInput
) {
  onDeleteAWSCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAWSCertificationSubscriptionVariables,
  APITypes.OnDeleteAWSCertificationSubscription
>;
