/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBadReception = /* GraphQL */ `query GetBadReception($id: ID!) {
  getBadReception(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBadReceptionQueryVariables,
  APITypes.GetBadReceptionQuery
>;
export const listBadReceptions = /* GraphQL */ `query ListBadReceptions(
  $filter: ModelBadReceptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listBadReceptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBadReceptionsQueryVariables,
  APITypes.ListBadReceptionsQuery
>;
export const syncBadReceptions = /* GraphQL */ `query SyncBadReceptions(
  $filter: ModelBadReceptionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBadReceptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      url
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncBadReceptionsQueryVariables,
  APITypes.SyncBadReceptionsQuery
>;
export const getProject = /* GraphQL */ `query GetProject($id: ID!) {
  getProject(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProjectQueryVariables,
  APITypes.GetProjectQuery
>;
export const listProjects = /* GraphQL */ `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectsQueryVariables,
  APITypes.ListProjectsQuery
>;
export const syncProjects = /* GraphQL */ `query SyncProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProjects(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProjectsQueryVariables,
  APITypes.SyncProjectsQuery
>;
export const getBlog = /* GraphQL */ `query GetBlog($id: ID!) {
  getBlog(id: $id) {
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
` as GeneratedQuery<APITypes.GetBlogQueryVariables, APITypes.GetBlogQuery>;
export const listBlogs = /* GraphQL */ `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBlogsQueryVariables, APITypes.ListBlogsQuery>;
export const syncBlogs = /* GraphQL */ `query SyncBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBlogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncBlogsQueryVariables, APITypes.SyncBlogsQuery>;
export const getAgency = /* GraphQL */ `query GetAgency($id: ID!) {
  getAgency(id: $id) {
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
` as GeneratedQuery<APITypes.GetAgencyQueryVariables, APITypes.GetAgencyQuery>;
export const listAgencies = /* GraphQL */ `query ListAgencies(
  $filter: ModelAgencyFilterInput
  $limit: Int
  $nextToken: String
) {
  listAgencies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAgenciesQueryVariables,
  APITypes.ListAgenciesQuery
>;
export const syncAgencies = /* GraphQL */ `query SyncAgencies(
  $filter: ModelAgencyFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAgencies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAgenciesQueryVariables,
  APITypes.SyncAgenciesQuery
>;
export const agenciesByBioID = /* GraphQL */ `query AgenciesByBioID(
  $bioID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAgencyFilterInput
  $limit: Int
  $nextToken: String
) {
  agenciesByBioID(
    bioID: $bioID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AgenciesByBioIDQueryVariables,
  APITypes.AgenciesByBioIDQuery
>;
export const getSchool = /* GraphQL */ `query GetSchool($id: ID!) {
  getSchool(id: $id) {
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
` as GeneratedQuery<APITypes.GetSchoolQueryVariables, APITypes.GetSchoolQuery>;
export const listSchools = /* GraphQL */ `query ListSchools(
  $filter: ModelSchoolFilterInput
  $limit: Int
  $nextToken: String
) {
  listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSchoolsQueryVariables,
  APITypes.ListSchoolsQuery
>;
export const syncSchools = /* GraphQL */ `query SyncSchools(
  $filter: ModelSchoolFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSchools(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSchoolsQueryVariables,
  APITypes.SyncSchoolsQuery
>;
export const schoolsByBioID = /* GraphQL */ `query SchoolsByBioID(
  $bioID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSchoolFilterInput
  $limit: Int
  $nextToken: String
) {
  schoolsByBioID(
    bioID: $bioID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SchoolsByBioIDQueryVariables,
  APITypes.SchoolsByBioIDQuery
>;
export const getMiscCertification = /* GraphQL */ `query GetMiscCertification($id: ID!) {
  getMiscCertification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMiscCertificationQueryVariables,
  APITypes.GetMiscCertificationQuery
>;
export const listMiscCertifications = /* GraphQL */ `query ListMiscCertifications(
  $filter: ModelMiscCertificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listMiscCertifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMiscCertificationsQueryVariables,
  APITypes.ListMiscCertificationsQuery
>;
export const syncMiscCertifications = /* GraphQL */ `query SyncMiscCertifications(
  $filter: ModelMiscCertificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMiscCertifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMiscCertificationsQueryVariables,
  APITypes.SyncMiscCertificationsQuery
>;
export const miscCertificationsByBioID = /* GraphQL */ `query MiscCertificationsByBioID(
  $bioID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMiscCertificationFilterInput
  $limit: Int
  $nextToken: String
) {
  miscCertificationsByBioID(
    bioID: $bioID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MiscCertificationsByBioIDQueryVariables,
  APITypes.MiscCertificationsByBioIDQuery
>;
export const getBio = /* GraphQL */ `query GetBio($id: ID!) {
  getBio(id: $id) {
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
` as GeneratedQuery<APITypes.GetBioQueryVariables, APITypes.GetBioQuery>;
export const listBios = /* GraphQL */ `query ListBios($filter: ModelBioFilterInput, $limit: Int, $nextToken: String) {
  listBios(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      image
      intro
      introClosing
      signatureImage
      mainUser
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBiosQueryVariables, APITypes.ListBiosQuery>;
export const syncBios = /* GraphQL */ `query SyncBios(
  $filter: ModelBioFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBios(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      image
      intro
      introClosing
      signatureImage
      mainUser
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncBiosQueryVariables, APITypes.SyncBiosQuery>;
export const getAWSCertification = /* GraphQL */ `query GetAWSCertification($id: ID!) {
  getAWSCertification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAWSCertificationQueryVariables,
  APITypes.GetAWSCertificationQuery
>;
export const listAWSCertifications = /* GraphQL */ `query ListAWSCertifications(
  $filter: ModelAWSCertificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listAWSCertifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAWSCertificationsQueryVariables,
  APITypes.ListAWSCertificationsQuery
>;
export const syncAWSCertifications = /* GraphQL */ `query SyncAWSCertifications(
  $filter: ModelAWSCertificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAWSCertifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAWSCertificationsQueryVariables,
  APITypes.SyncAWSCertificationsQuery
>;
export const aWSCertificationsByBioID = /* GraphQL */ `query AWSCertificationsByBioID(
  $bioID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAWSCertificationFilterInput
  $limit: Int
  $nextToken: String
) {
  aWSCertificationsByBioID(
    bioID: $bioID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AWSCertificationsByBioIDQueryVariables,
  APITypes.AWSCertificationsByBioIDQuery
>;
