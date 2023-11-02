import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum ItemStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}



type EagerBadReception = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BadReception, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBadReception = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BadReception, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BadReception = LazyLoading extends LazyLoadingDisabled ? EagerBadReception : LazyBadReception

export declare const BadReception: (new (init: ModelInit<BadReception>) => BadReception) & {
  copyOf(source: BadReception, mutator: (draft: MutableModel<BadReception>) => MutableModel<BadReception> | void): BadReception;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly tagline?: string | null;
  readonly projectLogo: string;
  readonly details?: string[] | null;
  readonly slides?: (string | null)[] | null;
  readonly showcaseType: string;
  readonly vimeoId?: string | null;
  readonly completionData?: string | null;
  readonly status: ItemStatus | keyof typeof ItemStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly tagline?: string | null;
  readonly projectLogo: string;
  readonly details?: string[] | null;
  readonly slides?: (string | null)[] | null;
  readonly showcaseType: string;
  readonly vimeoId?: string | null;
  readonly completionData?: string | null;
  readonly status: ItemStatus | keyof typeof ItemStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly image?: string | null;
  readonly heroAlignment?: string | null;
  readonly heroSize?: string | null;
  readonly isTwoColumn?: boolean | null;
  readonly dropCap?: boolean | null;
  readonly publishDate?: string | null;
  readonly display?: boolean | null;
  readonly slides?: (string | null)[] | null;
  readonly videoId?: string | null;
  readonly status: ItemStatus | keyof typeof ItemStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly image?: string | null;
  readonly heroAlignment?: string | null;
  readonly heroSize?: string | null;
  readonly isTwoColumn?: boolean | null;
  readonly dropCap?: boolean | null;
  readonly publishDate?: string | null;
  readonly display?: boolean | null;
  readonly slides?: (string | null)[] | null;
  readonly videoId?: string | null;
  readonly status: ItemStatus | keyof typeof ItemStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

type EagerAgency = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Agency, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly bioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAgency = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Agency, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly bioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Agency = LazyLoading extends LazyLoadingDisabled ? EagerAgency : LazyAgency

export declare const Agency: (new (init: ModelInit<Agency>) => Agency) & {
  copyOf(source: Agency, mutator: (draft: MutableModel<Agency>) => MutableModel<Agency> | void): Agency;
}

type EagerSchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly degree?: string | null;
  readonly image?: string | null;
  readonly bioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly degree?: string | null;
  readonly image?: string | null;
  readonly bioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type School = LazyLoading extends LazyLoadingDisabled ? EagerSchool : LazySchool

export declare const School: (new (init: ModelInit<School>) => School) & {
  copyOf(source: School, mutator: (draft: MutableModel<School>) => MutableModel<School> | void): School;
}

type EagerMiscCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MiscCertification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly link?: string | null;
  readonly image?: string | null;
  readonly bioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMiscCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MiscCertification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly link?: string | null;
  readonly image?: string | null;
  readonly bioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MiscCertification = LazyLoading extends LazyLoadingDisabled ? EagerMiscCertification : LazyMiscCertification

export declare const MiscCertification: (new (init: ModelInit<MiscCertification>) => MiscCertification) & {
  copyOf(source: MiscCertification, mutator: (draft: MutableModel<MiscCertification>) => MutableModel<MiscCertification> | void): MiscCertification;
}

type EagerBio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly intro: string;
  readonly introClosing: string;
  readonly AWSCertifications?: (AWSCertification | null)[] | null;
  readonly MiscCertifications?: (MiscCertification | null)[] | null;
  readonly Agencies?: (Agency | null)[] | null;
  readonly signatureImage?: string | null;
  readonly mainUser?: boolean | null;
  readonly Schools?: (School | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly intro: string;
  readonly introClosing: string;
  readonly AWSCertifications: AsyncCollection<AWSCertification>;
  readonly MiscCertifications: AsyncCollection<MiscCertification>;
  readonly Agencies: AsyncCollection<Agency>;
  readonly signatureImage?: string | null;
  readonly mainUser?: boolean | null;
  readonly Schools: AsyncCollection<School>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bio = LazyLoading extends LazyLoadingDisabled ? EagerBio : LazyBio

export declare const Bio: (new (init: ModelInit<Bio>) => Bio) & {
  copyOf(source: Bio, mutator: (draft: MutableModel<Bio>) => MutableModel<Bio> | void): Bio;
}

type EagerAWSCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AWSCertification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly link: string;
  readonly image: string;
  readonly bioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAWSCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AWSCertification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly link: string;
  readonly image: string;
  readonly bioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AWSCertification = LazyLoading extends LazyLoadingDisabled ? EagerAWSCertification : LazyAWSCertification

export declare const AWSCertification: (new (init: ModelInit<AWSCertification>) => AWSCertification) & {
  copyOf(source: AWSCertification, mutator: (draft: MutableModel<AWSCertification>) => MutableModel<AWSCertification> | void): AWSCertification;
}